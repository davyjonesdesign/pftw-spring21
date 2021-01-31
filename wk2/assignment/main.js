const questArray = [
    { question: "What has roots as nobody seees, Is taller than trees, Up, up it goes, And yet never grows?", answer: "a mountain"},
    { question: "Thirty white horses on a red hill, First they champ, Then they stamp, Then they stand still.", answer: "teeth"},
    { question: "Voiceless it cries, Wingless flutters, Toothless bites, Mouthless mutters.", answer: "wind"},
    { question: "A box without hinges, key, or lid, Yet golden treasure inside is hid.", answer: "an egg"},
    { question: "Alive without breath, As cold as death; Never thirsty, ever drinking, All in mail never clinking.", answer: "fish"},
    { question: "It cannot be seen, cannot be felt, Cannot be heard, cannot be smelt. It lies behind stars and under hills, And empty holes it fills. It comes first and follows after, Ends life, kills laughter.", answer: "dark"},
];
const randomIdx = Math.round(Math.random() * questArray.length - 1);
const userResponse = window.prompt(questArray[randomIdx].question);
console.log(
    "You answered" + 
    " " +
    "'" +
    userResponse + 
    "'" +
    "." + 
    " " + 
    "The correct answer was" +
    " " + 
    "'" +
    questArray[randomIdx].answer + 
    "'" +
    "."
);
window.alert(
    "You answered" + 
    " " +
    "'" +
    userResponse + 
    "'" +
    "." + 
    " " + 
    "The correct answer was" +
    " " + 
    "'" +
    questArray[randomIdx].answer + 
    "'" +
    "."
)



