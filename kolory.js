
// ==================================================
// Helper functions
// ==================================================


const pickColor = () => {
    // Get random numer 0 - 5
    const random = Math.floor(Math.random() * colors.length)  
    // Return colors[ran]
    return colors[random]
}

const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`;
}

const generateRandomColors = (num) => {
    let output= [];
    for (let i = 0; i < num; i++){
        output.push(generateRandomColor())
    }
    return output
}

const changeColors = (color) => {
    squares.forEach((square) => {
        square.style.backgroundColor = color;
    })
}
// ==================================================
// Variables
// ==================================================

let numSquares = 6;

// Select elements 
const squares = document.querySelectorAll(".square")
const colorDisplay = document.getElementById("colorDisplay");
const message = document.getElementById("message");
const title = document.querySelector("h1");
const resetButoon = document.getElementById("resetButton")
const easyButton = document.getElementById("easyButton")
const hardButton = document.getElementById("hardButton")

let colors = generateRandomColors(numSquares);
let pickedColor = pickColor() ;

// ==================================================
// Main
// ==================================================

//Update colorDisplay
colorDisplay.textContent = pickedColor;

// Reset colors button
resetButton.addEventListener("click", function() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    title.style.backgroundColor = "black";
    message.textContent = "";
    this.textContent = "New Colors";
    for (let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    title.style.backgroundColor = "steelblue";
})

// Easy button
easyButton.addEventListener("click", function() {
    this.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})

// Hard button
hardButton.addEventListener("click", function() {
    this.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquares = 6
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }

    

})
// Set up squeres
for (i = 0; i < squares.length;i++) {
    squares[i].style.backgroundColor = colors[i];
// Add click listeners
squares[i].addEventListener("click", function() {
    // Get the color of clicked square and compare
    const clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor){
        message.textContent = "Correct! Good job!"
        changeColors(pickedColor)
        title.style.backgroundColor = pickedColor;
        resetButoon.textContent = "Play again?";
    } else {
        this.style.backgroundColor = "black";
        message.textContent = "Oh no, try again :("
    }
})
};