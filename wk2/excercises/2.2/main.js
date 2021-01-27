const gameChoice = window.prompt("I have 4 games in my collection. Pick a number between 1 and 4 and I'll tell you about that game.\n\n-\nKEY\n\n1 - Uno\n2 - Mysterium\n3 - Catan\n4 - Mouse Trap\n-");
const games = [
    { title: "Uno", type: "card game", numberOfPlayers: "2-10", shortDescription: "Uno is an American shedding-type card game that is played with a specially printed deck."},
    { title: "Mysterium", type: "cooperative board game", numberOfPlayers: "2-7", shortDescription: "Become a psychic and divine spectral visions to solve the murder of a restless ghost."},
    { title: "Catan", type: "card game", numberOfPlayers: "2-6", shortDescription: "The Settlers of Catan is a game about area control, resource management and negotiation. Each player starts the game with two roads and settlements on the board."},
    { title: "Mouse Trap", type: "board game", numberOfPlayers: "2-4", shortDescription: "Scurry around the board collecting cheese and stealing cheese from other players…but watch out for the trap!"}
];
console.log(
    "You selected" + " " + games[gameChoice -1].title + " which is a " + games[gameChoice - 1].type + " " + "that allows for" + " " + games[gameChoice - 1].numberOfPlayers + " " + "players." + " " + games[gameChoice - 1].shortDescription 
);