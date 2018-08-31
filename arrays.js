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