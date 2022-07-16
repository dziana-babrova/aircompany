const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const militaryType = require('./models/militaryType');
const ExperimentalPlane = require('./Planes/ExperimentalPlane');

class Airport {
  getPassengerPlane() {
    let passengerPlanes = [];
    for (let plane of this.planes) {
      if (plane instanceof PassengerPlane) {
        passengerPlanes.push(plane);
      }
    }
    return passengerPlanes;
  }

  getMilitaryPlanes() {
    let militaryPlanes = [];
    this.planes.forEach((plane) => {
      if (plane instanceof MilitaryPlane) {
        militaryPlanes.push(plane);
      }
    });
    return militaryPlanes;
  }

  getPassengerPlaneWithMaxPassengersCapacity() {
    let passengerPlanes = this.getPassengerPlane();
    let planeWithMaxCapacity = passengerPlanes[0];
    for (let i = 0; i < passengerPlanes.length; i++) {
      if (passengerPlanes[i].getPassengersCapacity() > planeWithMaxCapacity.getPassengersCapacity()) {
        planeWithMaxCapacity = passengerPlanes[i];
      }
    }
    return planeWithMaxCapacity;
  }

  getTransportMilitaryPlanes() {
    let transportMilitaryPlanes = [];
    let militaryPlanes = this.getMilitaryPlanes();
    for (let i = 0; i < militaryPlanes.length; i++) {
      if (militaryPlanes[i].getMilitaryType() == militaryType.TRANSPORT) {
        transportMilitaryPlanes.push(militaryPlanes[i]);
      }
    }
    return transportMilitaryPlanes;
  }

  getBomberMilitaryPlanes() {
    let bomberMilitaryPlanes = [];
    let militaryPlanes = this.getMilitaryPlanes();
    for (let i = 0; i < militaryPlanes.length; i++) {
      if (militaryPlanes[i].getMilitaryType() === militaryType.BOMBER) {
        bomberMilitaryPlanes.push(militaryPlanes[i]);
      }
    }
    return bomberMilitaryPlanes;
  }

  constructor(planes) {
    this.planes = planes;
  }

  getExperimentalPlanes() {
    let experimentalPlanes = [];
    this.planes.forEach((plane) => {
      if (plane instanceof ExperimentalPlane) {
        experimentalPlanes.push(plane);
      }
    });
    return experimentalPlanes;
  }

  sortByMaxDistance() {
    this.planes.sort((a, b) => (a.getMaxFlightDistance() > b.getMaxFlightDistance() ? 1 : -1));
    return this;
  }


  sortByMaxSpeed() {
    this.planes.sort((a, b) => (a.getMaxSpeed() > b.getMaxSpeed() ? 1 : -1));
    return this;
  }

  sortByMaxLoadCapacity() {
    this.planes.sort((a, b) => (a.getMaxLoadCapacity() > b.getMaxLoadCapacity() ? 1 : -1));
    return this;
  }

  getPlanes() {
    return this.planes;
  }

  static print(planes) {
    return JSON.stringify(planes);
  }
}

module.exports = Airport;
