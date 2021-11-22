import firebase from "firebase";

export var rideConverter = {
  toFirestore: function (city) {},
  fromFirestore: function (data, id) {
    return {
      departureDay: data.departureDay,
      departureMonth: data.departureMonth,
      departureYear: data.departureYear,
      from: data.from,
      to: data.to,
      description: data.description,
      name: data.name,
      uid: data.uid,
      id: id,
      timestamp: data.timestamp,
    };
  },
};

export function ridesQuery(from, to, date1, date2) {
  var newRef = firebase.firestore().collection("rides");
  if (from !== null && from !== "") {
    newRef = newRef.where("from", "==", from);
  }
  if (to !== null && to !== "") {
    newRef = newRef.where("to", "==", to);
  }
  if (date1.getTime() !== 0) {
    newRef = newRef.where("time", ">=", date1.getTime());
  }
  if (date2.getTime() !== 0) {
    newRef = newRef.where("time", "<=", date1.getTime());
  }
  return newRef;
}
