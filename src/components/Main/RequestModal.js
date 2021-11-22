/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import firebase from "firebase";

export default function RequestModal({ open, setOpen, ride }) {
  const cancelButtonRef = useRef(null);

  const onSubmit = (e) => {
    firebase
      .firestore()
      .collection("users")
      .doc(ride.uid)
      .collection("requests")
      .doc()
      .set({
        departureDay: ride.departureDay,
        departureMonth: ride.departureMonth,
        departureYear: ride.departureYear,
        from: ride.from,
        to: ride.to,
        description: ride.description,
        rideId: ride.id,
        rideTime: ride.timestamp,
        requesterName: localStorage.getItem("name"),
        requesterUid: localStorage.getItem("uid"),
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    firebase
      .firestore()
      .collection("users")
      .doc(localStorage.getItem("uid"))
      .collection("sentRequests")
      .doc()
      .set({
        departureDay: ride.departureDay,
        departureMonth: ride.departureMonth,
        departureYear: ride.departureYear,
        from: ride.from,
        to: ride.to,
        description: ride.description,
        id: ride.id,
        name: ride.name,
        uid: ride.uid,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={() => {}}
      >
        <div className="overflow-hidden h-full flex items-end justify-center justify-content align-items min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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
            <div className="w-10/12 overflow-hidden inline-block bg-white rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Confirmation
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        The driver will receive an email notifying them of your
                        request. Your email will be sent over to continue
                        negotiations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-400 text-base font-medium text-white hover:bg-red-300 transform duration-200 focus:outline-none focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    setOpen();
                    onSubmit();
                  }}
                >
                  Confirm
                </button>
                <button
                  type="button"
                  className=" w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
