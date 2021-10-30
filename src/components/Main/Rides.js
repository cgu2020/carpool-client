import axios from "axios";
import RideBox from "./RideBox";
import React, { Component } from "react";

const { search } = window.location;
const queryFrom = new URLSearchParams(search).get("f");
const queryTo = new URLSearchParams(search).get("t");
const filterRides = (rides, query) => {
  if (!query) {
    return rides;
  }

  return rides.filter((ride) => {
    const rideFrom = ride.from;
    return rideFrom.includes(query);
  });
};

export default class Rides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rides: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/rides")
      .then((response) => {
        this.setState({ rides: response.data.data });
        console.log(this.state.rides);
      })
      .catch((error) => {});
  }

  render() {
    const filteredRides = filterRides(this.state.rides, queryFrom);
    return (
      <div className="flex flex-wrap -m-4">
        {filteredRides.map((ride) => (
          <RideBox content={ride} />
        ))}
      </div>
    );
  }
}
