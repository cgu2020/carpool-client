import firebase from "firebase";
import RideBox from "./RideBox";
import { rideConverter } from "../auth/convert";
import React, { useState, useEffect } from "react";
import { getWrapperFromVariant } from "@material-ui/pickers/wrappers/Wrapper";

const { search } = window.location;
const queryFrom = new URLSearchParams(search).get("f");
const queryTo = new URLSearchParams(search).get("t");

const Rides = () => {
  const [rides, setRides] = useState([]);
  const [loading, setLoading] = useState(true);

  const ref = firebase.firestore().collection("rides");

  async function getMarker() {
    const snapshot = await firebase.firestore().collection("events").get();
    return snapshot.docs.map((doc) => doc.data());
  }

  function refQuery() {
    var newRef = ref;
    if (queryFrom != null && queryFrom != "") {
      newRef = newRef.where("from", "==", queryFrom);
    }
    if (queryTo != null && queryTo != "") {
      newRef = newRef.where("to", "==", queryTo);
    }
    return newRef;
  }

  //ONE TIME GET FUNCTION
  function getRides() {
    refQuery()
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
    console.log("from:" + queryFrom);
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
