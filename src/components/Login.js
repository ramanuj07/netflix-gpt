import { useState } from "react";
import { BG_IMAGE } from "../utils/constants";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_IMAGE} alt="bgImage" />
      </div>

      <form
        action=""
        className="w-4/12 p-10 bg-opacity-85 absolute text-white my-36 mx-auto right-0 left-0 bg-black rounded-lg"
      >
        <h1 className="py-4 my-2 text-3xl font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full rounded-md bg-black border border-gray-500"
          />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-2 w-full rounded-md bg-black border border-gray-500"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-2 w-full rounded-md bg-black border border-gray-500"
        />
        <button className="bg-[#E50914] py-2 my-2 rounded-lg w-full hover:bg-red-800">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        {isSignIn && (
          <p className="text-center mt-1 cursor-pointer hover:underline hover:text-gray-400">
            Forgot Password?
          </p>
        )}

        <div className="flex gap-2 mt-20">
          <input type="checkbox" className="w-4" />
          <p>Remember me</p>
        </div>

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
