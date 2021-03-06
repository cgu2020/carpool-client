import React from "react";
import "../../index.css";

const Ride = (props) => {
  const ride = props.content;
  return (
    <div className="w-full p-4">
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="tracking-widest text-red-400 text-xs font-medium title-font">
          Departure: {ride.departureMonth}/{ride.departureDay}
        </h3>
        <div className="flex items-center">
          <h2 className="text-lg text-gray-900 font-medium title-font mr-2 mb-1">
            {ride.from}
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
          <h2 className="text-lg text-gray-900 font-medium title-font mr-2 mb-1">
            {ride.to}
          </h2>
        </div>

        <p className="leading-relaxed text-base max-char">{ride.description}</p>

        <div className="flex items-center justify-between mt-4">
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Read more
          </a>

          <div className="flex items-center">
            <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
              {ride.name}
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center mt-4">
          <button className="p-2 pl-5 pr-5 transition-colors duration-700 transform bg-red-400 hover:bg-red-500 text-gray-100 text-lg rounded-lg focus:border-4 border-indigo-300">
            {props.isUser ? "Edit" : "Request"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ride;
