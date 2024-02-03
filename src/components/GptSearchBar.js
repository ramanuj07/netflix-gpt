import { useRef } from "react";

const GptSearchBar = () => {
  const searchInput = useRef("");
  return (
    <div className="pt-[5%] flex justify-center">
      <form
        action=""
        className="w-1/2 bg-slate-700 grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault(e)}
      >
        <input
          type="text"
          placeholder="Search your favourite movies"
          ref={searchInput}
          className="py-2 px-4 m-2 border border-black rounded-lg col-span-9"
        />
        <button className="py-2 px-4 m-2 rounded-lg bg-[#E50914] text-white col-span-3">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
