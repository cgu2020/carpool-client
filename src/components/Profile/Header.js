import React from "react";

const Header = () => {
  return (
    <div className="container mx-auto my-5 p-5">
      <div className="md:flex no-wrap md:-mx-2 ">
        {/* Left Side */}
        <div className="w-full md:w-3/12 md:mx-2">
          {/* Profile Card */}
          <div className="bg-red-50 p-3 rounded-2xl">
            <div className="image overflow-hidden">
              <img
                className="h-20 w-20 rounded-full"
                src={localStorage.getItem("photoURL")}
                referrerpolicy="no-referrer"
                alt=""
              />
            </div>
            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
              {localStorage.getItem("name")}
            </h1>

            <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
              non deserunt
            </p>
          </div>
          {/* End of profile card */}
          <div className="my-4" />
        </div>
        {/* Right Side */}
        <div className="w-full md:w-9/12 mx-2 h-64">
          {/* Profile tab */}
          {/* About Section */}
          <div className="bg-red-50  p-3 shadow-sm rounded-2xl">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span clas="text-green-500">
                <svg
                  className="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <span className="tracking-wide">About</span>
            </div>
            <div className="text-gray-700">
              <div className="grid md:grid-cols-1 text-sm mt-2">
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Name</div>
                  <div className="px-4 py-2">Jane</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Phone Number</div>
                  <div className="px-4 py-2">+11 998001001</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Email</div>
                  <div className="px-4 py-2">
                    <a className="text-blue-800" href="mailto:jane@example.com">
                      jane@example.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="ml-10 w-1/4 text-gray-500 text-sm font-semibold rounded-2xl hover:bg-red-300 focus:outline-none duration-200 transform">
                <div className="my-1">Edit</div>
              </button>
            </div>
          </div>
          {/* End of about section */}
          <div className="my-4" />
          {/* Experience and education */}
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="grid grid-cols-2">
              <div>
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                  <span clas="text-green-500">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">Experience</span>
                </div>
                <ul className="list-inside space-y-2">
                  <li>
                    <div className="text-teal-600">
                      Owner at Her Company Inc.
                    </div>
                    <div className="text-gray-500 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                  <li>
                    <div className="text-teal-600">
                      Owner at Her Company Inc.
                    </div>
                    <div className="text-gray-500 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                  <li>
                    <div className="text-teal-600">
                      Owner at Her Company Inc.
                    </div>
                    <div className="text-gray-500 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                  <li>
                    <div className="text-teal-600">
                      Owner at Her Company Inc.
                    </div>
                    <div className="text-gray-500 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                  <span clas="text-green-500">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path
                        fill="#fff"
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">Education</span>
                </div>
                <ul className="list-inside space-y-2">
                  <li>
                    <div className="text-teal-600">
                      Masters Degree in Oxford
                    </div>
                    <div className="text-gray-500 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                  <li>
                    <div className="text-teal-600">
                      Bachelors Degreen in LPU
                    </div>
                    <div className="text-gray-500 text-xs">
                      March 2020 - Now
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* End of Experience and education grid */}
          </div>
          {/* End of profile tab */}
        </div>
      </div>
    </div>
  );
};

export default Header;
