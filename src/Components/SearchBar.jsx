import { useState } from "react";
import PropTypes from "prop-types";


export function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  return (
    <div className="w-full flex justify-center items-center p-4 pt-6">
      <form className="relative w-full max-w-lg">
        <button className="absolute left-3 top-1/2 transform -translate-y-1/2 p-1 text-secondary">
          <svg
            width="20"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="search"
            className="w-6 h-6 text-primary hover:text-secondary"
          >
            <path
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
              stroke="currentColor"
              strokeWidth="1.333"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <input
          className="w-full rounded-full px-12 py-3 border-2 border-gray-300 focus:border-secondary shadow-md focus:shadow-lg text-gray-800 placeholder-gray-500 focus:outline-none transition-all duration-300"
          placeholder="Search for a city..."
          required=""
          type="text"
          value={search}
          onChange={handleSearch}
        />
        {search && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-secondary"
            onClick={() => setSearch("")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-primary hover:text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        )}
      </form>
    </div>
  );
}

// Validación de props con PropTypes
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired, // `onSearch` debe ser una función y es obligatoria
};
