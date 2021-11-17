import React, { useEffect } from "react";
import NavDropdown from "./NavDropdown";
import { startFirebaseUI } from "../auth/googleAuth";

const NavProfile = () => {
  useEffect(() => {
    if (!localStorage.getItem("authState")) {
      startFirebaseUI();
    }
  }, []);
  return localStorage.getItem("authState") ? (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <div className="ml-2 text-white">{localStorage.getItem("name")}</div>
      {/* Profile dropdown */}
      <NavDropdown />
    </div>
  ) : (
    <div id="firebaseui-auth-container"></div>
  );
};

export default NavProfile;
