import React from "react";
import { BellIcon } from "@heroicons/react/outline";
import NavDropdown from "./NavDropdown";
import { useState, useEffect } from "react";
import firebase from "firebase/app";

const NavProfile = () => {
  return localStorage.getItem("authState") ? (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <button
        type="button"
        className={`bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
      >
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div class="ml-2 text-white">{localStorage.getItem("name")}</div>
      {/* Profile dropdown */}
      <NavDropdown />
    </div>
  ) : (
    <div id="firebaseui-auth-container"></div>
  );
};

export default NavProfile;