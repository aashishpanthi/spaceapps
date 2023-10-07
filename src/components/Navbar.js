import React from "react";
import { FaGithub, FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white-500 p-6">
      {/* logo tailwind styling */}
      <div className="flex items-center flex-shrink-0 text-black mr-6 font-bold">
        Logo
      </div>

      {/* search input box */}
      <div className="flex items-center flex-shrink-0 text-white mx-5 flex-1 bg-gray-200 rounded">
        <FaSearch className="text-black mx-5" />

        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight h-12 focus:outline-none"
          type="text"
          placeholder="Search..."
          aria-label="Search"
        />

        <button className="border-none bg-black h-12 px-5" type="button">
          Search
        </button>
      </div>

      {/* github icon */}
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <a
          href="https://github.com/aashishpanthi/spaceapps/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className="text-gray-700 mx-5"
            style={{ fontSize: "2rem" }}
          />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
