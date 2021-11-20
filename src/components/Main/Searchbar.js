import React, { useState, useEffect } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker from "@mui/lab/DateRangePicker";

const Searchbar = () => {
  const { search } = window.location;
  var date1 = new Date(new URLSearchParams(search).get("d1"));
  var date2 = new Date(new URLSearchParams(search).get("d2"));

  const [value, setValue] = useState([null, null]);

  useEffect(() => {
    if (isNaN(date1.getTime())) {
      date1 = null;
    }
    if (isNaN(date2.getTime())) {
      date2 = null;
    }
    setValue([date1, date2]);
  }, [setValue]);

  return (
    <form action="/main/" method="get">
      <div className="flex justify-center">
        <div className="w-full flex-wrap mt-2 mb-4 border-2 py-1 px-3 flex justify-between rounde-md rounded-md xl:w-3/4">
          <input
            className="w-1/2 sm:w-1/3 flex-grow outline-none text-gray-600 focus:text-blue-600"
            type="text"
            placeholder="From"
            name="f"
          />
          <input
            className="w-1/2 sm:w-1/3 flex-grow outline-none text-gray-600 focus:text-blue-600"
            type="text"
            placeholder="To"
            name="t"
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              label="Advanced keyboard"
              value={value}
              className={"w-full"}
              onChange={(newValue) => setValue(newValue)}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <input
                    className="w-1/2 flex-grow outline-none text-gray-600 focus:text-blue-600"
                    type="text"
                    name="d1"
                    ref={startProps.inputRef}
                    {...startProps.inputProps}
                  />
                  <input
                    className="w-1/2 flex-grow outline-none text-gray-600 focus:text-blue-600"
                    type="text"
                    name="d2"
                    ref={endProps.inputRef}
                    {...endProps.inputProps}
                  />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
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
