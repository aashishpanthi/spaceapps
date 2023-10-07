import React from "react";
import { FaGithub } from "react-icons/fa";
import SearchBox from "./SearchBox";

function Navbar({ query, handleChange }) {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white-500 p-6">
      {/* logo tailwind styling */}
      <div className="flex items-center flex-shrink-0 text-black mr-6 font-bold">
        Logo
      </div>

      {/* search input box */}
      <SearchBox query={query} handleChange={handleChange} />

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
