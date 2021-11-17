import React from "react";
import Navbar from "./Profile/Navbar";
import Header from "./Profile/Header";
import ProfileNotFound from "./Profile/ProfileNotFound";

const Profile = (props) => {
  return (
    <div>
      <Navbar />
      {props.uid == null ? <ProfileNotFound /> : <Header uid={props.uid} />}
    </div>
  );
};

export default Profile;
