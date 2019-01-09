// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers=function(drivers) {
  return drivers.slice(-2);
}

const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier=function(multiplyValue) {
    return function (fare) {
      return multiplyValue * 5;
    }
}

const fareDoubler=function(fare) {
  return fare*2;
}

const fareTripler=function(fare) {
  return fare*3;
}

const fetchSpecifiedDrivers=function(drivers, functionName) {
  return functionName(drivers)
}
