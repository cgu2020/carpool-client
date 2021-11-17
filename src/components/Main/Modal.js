/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import firebase from "firebase/app";
import Box from "@mui/material/Box";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DatePicker";
import userEvent from "@testing-library/user-event";

export default function Modal({ open, setOpen }) {
  const [value, setValue] = useState(new Date());
  const [from, setFrom] = useState("");
  const [dest, setDest] = useState("");
  const [desc, setDesc] = useState("");
  const cancelButtonRef = useRef(null);

  const onSubmit = (e) => {
    console.log(dest);
    firebase
      .firestore()
      .collection("rides")
      .doc()
      .set({
        departureDay: value.getDay(),
        departureMonth: value.getMonth(),
        departureYear: value.getFullYear(),
        from: from,
        to: dest,
        description: desc,
        name: localStorage.getItem("name"),
        uid: localStorage.getItem("uid"),
      });

    console.log("test");
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={() => {}}
      >
        <div className="flex items-end justify-center justify-content align-items min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="m-4">
                <div className="relative mt-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm leading-5">
                    <span className="px-2 text-gray-500 bg-white">
                      New Ride
                    </span>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="w-full space-y-6">
                    <div className="w-full">
                      <div className=" relative ">
                        <input
                          type="text"
                          id="search-form-price"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="From"
                          value={from}
                          onChange={(e) => {
                            setFrom(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className=" relative ">
                        <input
                          type="text"
                          id="search-form-price"
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="To"
                          value={dest}
                          onChange={(e) => {
                            setDest(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                          label="Custom input"
                          value={value}
                          onChange={(newValue) => {
                            setValue(newValue);
                          }}
                          renderInput={({
                            inputRef,
                            inputProps,
                            InputProps,
                          }) => (
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <input
                                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                ref={inputRef}
                                {...inputProps}
                              />
                              {InputProps?.endAdornment}
                            </Box>
                          )}
                        />
                      </LocalizationProvider>
                    </div>
                    <div className="w-full">
                      <div className=" relative ">
                        <textarea
                          type="text"
                          id="search-form-name"
                          rows={3}
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="Description"
                          value={desc}
                          onChange={(e) => {
                            setDesc(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    setOpen();
                    onSubmit();
                  }}
                >
                  Send
                </button>
                <button
                  type="button"
                  className=" w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setOpen()}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
