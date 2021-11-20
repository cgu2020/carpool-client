import firebase from "firebase";

export var rideConverter = {
  toFirestore: function (city) {},
  fromFirestore: function (data) {
    return {
      departureDay: data.departureDay,
      departureMonth: data.departureMonth,
      departureYear: data.departureYear,
      from: data.from,
      to: data.to,
      description: data.description,
      name: data.name,
      uid: data.uid,
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
  if (!isNaN(date1.getTime())) {
    console.log(date1);
    newRef = newRef.where("time", ">=", date1.getTime());
  }
  if (!isNaN(date2.getTime())) {
    newRef = newRef.where("time", "<=", date1.getTime());
  }
  return newRef;
}
