import React, { useEffect, useState } from "react";
import Ride from "./Ride";
import { rideConverter } from "../auth/convert";
import firebase from "firebase";

const Header = (props) => {
  const [rides, setRides] = useState([]);
  const [loading, setLoading] = useState(true);

  const uid = localStorage.getItem("uid");

  const ridesRef = firebase
    .firestore()
    .collection("rides")
    .where("uid", "==", uid);

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
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  useEffect(() => {
    getRides();
  }, [setLoading, setRides]);
  return (
    !loading && (
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          <div className="w-full md:w-9/12 md:mx-2 h-64">
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
          </div>
        </div>
      </div>
    )
  );
};

export default Header;
