import React from "react";

const Pagination = () => {
  return (
    <div className="flex">
      <a
        href="#"
        className="flex items-center px-4 py-2 mx-1 text-gray-500 bg-white rounded-md cursor-not-allowed dark:bg-gray-800 dark:text-gray-600"
      >
        previous
      </a>

      {}
      <a
        href="#"
        className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200"
      >
        1
      </a>

      <a
        href="#"
        className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200"
      >
        2
      </a>

      <a
        href="#"
        className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200"
      >
        3
      </a>

      <a
        href="#"
        className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200"
      >
        Next
      </a>
    </div>
  );
};

export default Pagination;
