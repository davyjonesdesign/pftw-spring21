// variable but has multiple slots
const myArr = ["bob", "betty", "sue"];
const myOtherArray = new Array();
myOtherArray.push("star wars"); // add items to end
myOtherArray.push("raiders of the lost ark");
// myArr.pop(); // removes last item
// myArr.shift(); // remove first item
myArr.unshift("james"); // add item to the beginning of the array

console.log(myArr);
console.log(myOtherArray);
console.log(myOtherArray[0]); // read single item
console.log(myArr[1]);
console.log(myArr.indexOf("betty"));
const bettyIdx = myArr.indexOf("betty");
console.log(bettyIdx); // if not found -1, if found real index
if (bettyIdx > -1) {
  console.log(myArr[bettyIdx]);
}
myArr.splice(bettyIdx, 0, "robert");
console.log(myArr);
console.log(myArr.length);
// Math.random() for random 0 and 1
// Math.round(n) round to nearest whole number
// myArr.length - 1 to get last index number of an array
const randomNumber = Math.round(Math.random() * (myArr.length - 1));
console.log(myArr[randomNumber]);

let greekMythicalCharacters = [
  "Athena",
  "Zeus",
  "Hermes",
  "Hercules",
  "Hera",
  "that one guy",
];
greekMythicalCharacters.pop();
greekMythicalCharacters.push("Hades");
console.log(greekMythicalCharacters);
