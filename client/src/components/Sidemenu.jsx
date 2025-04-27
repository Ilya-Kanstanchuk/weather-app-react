import React from "react";

function Sidemenu({ setIsSearch, isSearch }) {
  return (
    <div className="pt-20 pl-10">
      <button
        onClick={() => setIsSearch(true)}
        className={`block text-center font-medium w-55 h-12 bg-searchb rounded-xl mb-6 cursor-pointer ${
          isSearch ? "border-3 border-solid border-green-700" : "border-none"
        }`}
      >
        Search
      </button>
      <button
        onClick={() => setIsSearch(false)}
        className={`block text-center font-medium w-55 h-12 bg-savedb rounded-xl cursor-pointer ${
          isSearch ? "border-none" : "border-3 border-solid border-yellow-500"
        }`}
      >
        Saved locations
      </button>
    </div>
  );
}

export default Sidemenu;
