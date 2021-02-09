// const squareWidth = 50;
// const squareHeight = 50;
// let squareXPosition = 100;
// let squareYPosition = 0;

// function setup(){
//     createCanvas(500, 500);
//     background(0);

// }

// function draw() {
//     fill('purple');
//     // ellipse(100, 100, 100)
//     rect(squareXPosition, squareYPosition, squareWidth, squareHeight);
//     squareYPosition += 1;
//     if(squareYPosition > height) {
//         squareYPosition = 0;
//     }
// }

// function mousePressed() {
//     console.log(mouseX, mouseY);
//     // for a circle
//     // const distance = dist(mouseX, mouseY, 100, 100);
//     // console.log(distance);
//     // if(distance < 50) {
//     //     alert('you hit it');
//     // }
//     //rectangle
//     if((mouseX >= squareXPosition && mouseX <= squareXPosition + squareWidth) && (mouseY >= squareYPosition && mouseY <= squareYPosition + squareHeight)) {
//         console.log('you have got the x');
//     }
// }

//-------------------


const circleDiameter = 100;
// let circleX = 200;
// let circleY = 300;
let startingX = 200;
let startingY = 100;
let myCircle =[];
let startingID = 0;
function setup () {
    createCanvas(1000, 500);
    background(0);
    // ellipse(circleX, circleY, circleDiameter);
    for (let k = 0; k < 2; k++) {
        for(let i = 0; i < 4; i++) {
            ellipse(startingX, startingY, circleDiameter);
            myCircle.push({x: startingX, y: startingY, id: startingID})
            startingX += 150;
            startingID++;
        }
        startingY += 150;
        startingX = 200;

    }
    
    console.log(myCircle);

}

function mousePressed() {
    for(let j = 0; j < myCircle.length; j++) {
        let distance = dist(mouseX, mouseY, myCircle[j].x, myCircle[j].y);
    if(distance < circleDiameter / 2) {
        console.log('circle has been clicked', myCircle[j].id)
    }
}
}