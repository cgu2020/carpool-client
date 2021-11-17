import React from "react";
import firebase from "../auth/firebaseConfig";
import Ride from "./Ride";
import { rideConverter } from "../auth/convert";
import { useState, useEffect } from "react";

const Header = (props) => {
  const uid = props.uid;
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    photoURL: "",
    uid: "",
  });
  const [rides, setRides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  const userRef = firebase.firestore().collection("users").doc(uid);
  const ridesRef = firebase
    .firestore()
    .collection("rides")
    .where("uid", "==", uid);

  //ONE TIME GET FUNCTION
  function getUser() {
    userRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          console.log(data);
          setUser({
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber,
            photoURL: data.photoURL,
            uid: data.uid,
          });
          setLoading(false);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  function getRides() {
    ridesRef
      .get()
      .then((querySnapshot) => {
        const ridesArray = [];
        querySnapshot.forEach((doc) => {
          const ride = rideConverter.fromFirestore(doc.data());
          ridesArray.push(ride);
        });
        setRides(ridesArray);
        console.log(rides);
        setLoading2(false);
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  useEffect(() => {
    getUser();
    getRides();
  }, [setLoading, setLoading2, setRides, setUser]);

  return (
    !loading &&
    !loading2 && (
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          {/* Left Side */}
          <div className="w-full md:w-3/12 md:mx-2">
            {/* Profile Card */}
            <div className="bg-red-50 p-3 rounded-2xl">
              <div className="image overflow-hidden">
                <img
                  className="h-20 w-20 rounded-full"
                  src={user.photoURL}
                  referrerPolicy="no-referrer"
                  alt=""
                />
              </div>
              <h1 className="mt-3 text-gray-900 font-bold text-xl leading-8 my-1">
                {user.name}
              </h1>

              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6"></p>
            </div>
            {/* End of profile card */}
            <div className="my-4" />
          </div>
          {/* Right Side */}
          <div className="w-full md:w-9/12 md:mx-2 h-64">
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
                  <div className="grid md:grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Name</div>
                    <div className="px-4 py-2">{user.name}</div>
                  </div>
                  <div className="grid md:grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Phone Number</div>
                    <div className="px-4 py-2">{user.phoneNumber}</div>
                  </div>
                  <div className="grid md:grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email</div>
                    <div className="px-4 py-2">
                      <a
                        className="text-blue-800"
                        href="mailto:jane@example.com"
                      >
                        {user.email}
                      </a>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2">
                    <div className="px-4 py-2 font-semibold">URL</div>
                    <div className="px-4 py-2">{user.uid}</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full justify-center text-center  items-center">
                  <button className="w-1/4 my-1 text-gray-500 text-sm font-semibold rounded-2xl hover:bg-red-300 focus:outline-none duration-200 transform">
                    Edit
                  </button>
                </div>
              </div>
            </div>
            {/* End of about section */}
            <div className="my-4" />
            <div className="bg-red-50 p-3 shadow-sm rounded-2xl">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                Rides
              </div>
              <div className="flex flex-wrap -m-4">
                {rides.map((ride) => (
                  <Ride content={ride} />
                ))}
              </div>
            </div>
            {/* End of profile tab */}
          </div>
        </div>
      </div>
    )
  );
};

export default Header;
