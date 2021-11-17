import React from "react";
import Navbar from "./Main/Navbar";
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
