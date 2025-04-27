import React from "react";
import icon from "../assets/searchi.png";

function Search({ setCity, city }) {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="mt-7">
      <h2 className="block text-center text-5xl font-extralight mb-3">
        Search
      </h2>

      <form className="flex justify-center" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="bg-white py-2 px-12 rounded-2xl text-center focus:outline-none text-[20px] w-96"
            type="text"
          />
          <button
            type="submit"
            className="cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2 w-6 h-6"
          >
            <img className="w-full h-full" src={icon} alt="" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
