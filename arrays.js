//1
var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
];

//2
function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

//3
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift();
  return array;
}

//4
function addElementToEndOfArray(array, element) {
  return [...array, element];
}

//5
function destructivelyAddElementToEndOfArray(array, element) {
  array.push();
  return array;
}

//6
function accessElementInArray(array, index) {
  console.log(index);
}

//7
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

//8
function removeElementFromBeginningOfArray(array) {
  return (0, array.length - 1);
}