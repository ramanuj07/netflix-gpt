import { useRef, useState } from "react";
import { BG_IMAGE } from "../utils/constants";
import { userLoginSchema } from "../utils/validations";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [loginError, setLoginError] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");

  const handleButtonClick = () => {
    const userSchema = userLoginSchema(!isSignIn);
    const result = userSchema.safeParse({
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value,
    });

    if (!result.success) {
      setLoginError(result.error.errors);
      return;
    }

    setLoginError([]);

    // Sign in and Sign up logic

    if (!isSignIn) {
      // Sign up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          setSuccessMessage("User signed up successfully");
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setLoginError([{ message: "Error logging in" }]);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          switch (errorCode) {
            case "auth/email-already-in-use":
              setLoginError([
                { message: "Email is already in use. Please sign in." },
              ]);
              break;
            case "auth/weak-password":
              setLoginError([
                {
                  message:
                    "Password is too weak. Please choose a stronger password.",
                },
              ]);
              break;
            default:
              setLoginError([{ message: errorMessage }]);
              break;
          }
        });
    } else {
      // Sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          switch (errorCode) {
            case "auth/user-not-found":
              setLoginError([{ message: "User not found. Please sign up." }]);
              break;
            case "auth/wrong-password":
              setLoginError([
                { message: "Incorrect password. Please try again." },
              ]);
              break;
            default:
              setLoginError([{ message: "Invalid user credentials" }]);
              break;
          }
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
    setLoginError([]);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_IMAGE} alt="bgImage" />
      </div>

      <form
        action=""
        className="w-4/12 p-10 bg-opacity-85 absolute text-white my-32 mx-auto right-0 left-0 bg-black rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="py-4 my-2 text-3xl font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full rounded-md bg-black border border-gray-500"
            ref={name}
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-2 w-full rounded-md bg-black border border-gray-500"
          ref={email}
        />
        <input
          type="password"
          placeholder={isSignIn ? "Password" : "Create Password"}
          className="p-4 my-2 w-full rounded-md bg-black border border-gray-500"
          ref={password}
        />
        {!isSignIn && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-4 my-2 w-full rounded-md bg-black border border-gray-500"
            ref={confirmPassword}
          />
        )}
        <button
          className="bg-[#E50914] py-2 my-2 rounded-lg w-full hover:bg-red-800"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        {isSignIn && (
          <div>
            <div className="text-center font-semibold underline mt-2 text-pink-400">
              Mock login
            </div>
            <div className="text-[#b5e509] mt-2">
              Email- netflix@cracked.com
            </div>
            <div className="text-[#b5e509] mt-2">Password- Netflix@123</div>
          </div>
        )}

        {loginError && (
          <div className="text-red-500 mt-2 font-bold">
            {loginError.map((error, index) => (
              <p key={index}>{error.message}</p>
            ))}
          </div>
        )}

        {!isSignIn && successMessage && (
          <div className="text-green-500 mt-2 font-bold">{successMessage}</div>
        )}

        {isSignIn && (
          <p className="text-center mt-1 cursor-pointer hover:underline hover:text-gray-400">
            Forgot Password?
          </p>
        )}

        {isSignIn && (
          <div className="flex gap-2 mt-16">
            <input type="checkbox" className="w-4" />
            <p>Remember me</p>
          </div>
        )}

        <div className="flex gap-2 mt-4">
          <p className="text-gray-400">
            {isSignIn ? "New to Netflix?" : "Already a user?"}
          </p>
          <p
            className="cursor-pointer hover:underline"
            onClick={toggleSignInForm}
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </p>
        </div>

        <p className="text-xs text-gray-400 mt-4">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <a href="/" className="text-blue-600 p-2 hover:underline">
            Learn more.
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
