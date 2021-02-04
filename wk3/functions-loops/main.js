// functions
// how to create a function

function greet () {
    console.log("hi class");
}
greet();

// a couple of reasons for functions
// delayed/deferred actions
//setTimeout(function greet () {
//    console.log("hi class");
//});

// organization

// function makeBlackCircle() {
//     fill('black');
//     circle(50, 50, 100);
// }

// reusability/ optimization (input)

// parameter

function getStuff(stuff) {
    console.log('getting' + stuff);
}

// argument

getStuff("bread");
getStuff("peanut butter");

// returning data - quits function

function getSome(numberA, numberB) {
    return numberA + numberB;
}
let mySum = getSome(4, 11);
console.log("this is the sum", mySum)

//functions as values in variables, properties, and arguments

let myLittleObject = {
    friendship: function() {
        console.log('is magic')
    }
}
myLittleObject.friendship();
console.log(function(){
    return 'beefy';
}());
const mySpecialFunction = function() {
    alert('yippee');
}
// mySpecialFunction();
// setTimeout(function() {
//     alert('waited 5 seconds')
// }, 5000);

//------------------------------//

// Loops!
// OG for Loop

for (let i = 100; i < 1000; i+=10) {
    console.log(i);
}
const myCars = ['acura', 'bently', 'chevy', 'dodge'];
// for (let sillyVarName = 0; sillyVarName < myCars.length; sillyVarName++) {
//     //console.log('I wish I had a ' + myCars[sillyVarName]);

//     //transformation

//     myCars[sillyVarName] = myCars[sillyVarName].toUpperCase();
// }
// console.log(myCars);

// OG for-in loop for objects (bonus track)

const myObject = {
    color: 'red',
    price: '$20',
    weight: '20lbs'
}
for (prop in myObject){
    console.log(prop + ':', myObject[prop]);
}

// while loops
let statements = [
    { question: "What has roots as nobody seees, Is taller than trees, Up, up it goes, And yet never grows?", answer: "a mountain"},
    { question: "Thirty white horses on a red hill, First they champ, Then they stamp, Then they stand still.", answer: "teeth"},
    { question: "Voiceless it cries, Wingless flutters, Toothless bites, Mouthless mutters.", answer: "wind"},
    { question: "A box without hinges, key, or lid, Yet golden treasure inside is hid.", answer: "an egg"},
    { question: "Alive without breath, As cold as death; Never thirsty, ever drinking, All in mail never clinking.", answer: "fish"},
    { question: "It cannot be seen, cannot be felt, Cannot be heard, cannot be smelt. It lies behind stars and under hills, And empty holes it fills. It comes first and follows after, Ends life, kills laughter.", answer: "dark"},
]
/*
let myNum = 15;
// as long as statements array has content
while (statements.length > 0) {
    let randomeIndex = Math.ceil(Math.random() * statements.length - 1);
    
//asking user random 
    let answer = prompt(statements[randomeIndex].question);
    if (answer === statements[randomeIndex].answer) {
        // answered correctly, removed from loop
        statements.splice(randomeIndex, 1);
        console.log('removing statement')
    }
}
*/

//functional loop
//forEach

myCars.forEach(function(car){
    console.log('functional', car);
})

//map

let myNewArray = myCars.map(function(car){
    return 'I like ' + car;
})
console.log(myNewArray, myCars);

//filter (bonus track)

let windObj = statements.filter(function(statement){
    return statement.answer === "wind";
})
console.log(windObj);