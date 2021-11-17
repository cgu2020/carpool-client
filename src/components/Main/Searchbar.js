import React from "react";

const Searchbar = () => {
  return (
    <form action="/main/" method="get">
      <div className="flex justify-center">
        <div className="w-11/12 mt-2 mb-4 border-2 py-1 px-3 flex justify-between rounde-md rounded-md xl:w-3/4">
          <input
            className="w-1/2 flex-grow outline-none text-gray-600 focus:text-blue-600"
            type="text"
            placeholder="From"
            name="f"
          />
          <input
            className="w-1/2 flex-grow outline-none text-gray-600 focus:text-blue-600"
            type="text"
            placeholder="To"
            name="t"
          />
          <button type="submit">
            <spa>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow h-6 w-6 text-gray-400 hover:text-blue-400 transition duration-100 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </spa>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Searchbar;
