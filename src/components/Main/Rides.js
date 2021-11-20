import firebase from "firebase";
import RideBox from "./RideBox";
import { rideConverter, ridesQuery } from "../auth/convert";
import React, { useState, useEffect } from "react";

const { search } = window.location;
const queryFrom = new URLSearchParams(search).get("f");
const queryTo = new URLSearchParams(search).get("t");
const date1 = new URLSearchParams(search).get("d1");
const date2 = new URLSearchParams(search).get("d2");

const Rides = () => {
  const [rides, setRides] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getMarker() {
    const snapshot = await firebase.firestore().collection("events").get();
    return snapshot.docs.map((doc) => doc.data());
  }

  //ONE TIME GET FUNCTION
  function getRides() {
    ridesQuery(queryFrom, queryTo, new Date(date1), new Date(date2))
      .get()
      .then((querySnapshot) => {
        const ridesArray = [];
        querySnapshot.forEach((doc) => {
          const ride = rideConverter.fromFirestore(doc.data());
          ridesArray.push(ride);
        });
        setRides(ridesArray);
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
    <div className="flex flex-wrap -m-4">
      {rides.map((ride) => (
        <RideBox content={ride} />
      ))}
    </div>
  );
};
export default Rides;
