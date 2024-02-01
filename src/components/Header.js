import { LOGO_IMAGE, USER_AVATAR } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex justify-between px-20 w-screen py-2 absolute bg-gradient-to-b from-black z-10">
      <div>
        <img src={LOGO_IMAGE} alt="logo" className="w-44 cursor-pointer" />
      </div>

      {user && (
        <div className="flex items-center gap-2">
          <img src={USER_AVATAR} alt="avatar" className="h-10 w-10" />
          <button
            className="bg-[#E50914] text-white p-2 m-2 rounded-lg hover:bg-red-800"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
