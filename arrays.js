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
  array.unshift(element);
  return array;
}

//4
function addElementToEndOfArray(array, element) {
  return [...array, element];
}

//5
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

//6
function accessElementInArray(array, index) {
  return array[index];
}

//7
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

//8
function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

//9
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array
}

//10
function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}
