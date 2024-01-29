import { LOGO_IMAGE } from "../utils/constants";

const Header = () => {
  return (
    <div className="px-8 py-2 mx-32 absolute bg-gradient-to-b from-black z-10">
      <div className="flex">
        <img src={LOGO_IMAGE} alt="logo" className="w-44" />
      </div>
    </div>
  );
};

export default Header;
