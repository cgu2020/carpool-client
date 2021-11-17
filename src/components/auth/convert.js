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
