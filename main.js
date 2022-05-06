
//VARIABLE DEFINITIONS
//Dice
const earthDie = ["Earth", "Earth", "Earth", "North", "North", "Rice"];
const waterDie = ["Water", "Water", "Water", "East", "East", "Fish"];
const fireDie = ["Fire", "Fire", "Fire", "West", "West", "Tree"];
const airDie = ["Air", "Air", "Air", "South", "South", "Bird"];
const moonDie = ["Void", "Void", "Fortunes", "Fortunes", "Sun", "Moon"];

//Winning combinations
const winFW = ["North", "East", "West", "South", "Fortunes"]
const winLB = ["North", "East", "West", "South", "Sun"]
const winEW = ["North", "East", "West", "South", "Void"]
const winSB = ["Earth", "Water", "Fire", "Air", "Void"]
const winLT = ["Earth", "Water", "Fire", "Air", "Sun"]
const winST = ["Earth", "Water", "Fire", "Air", "Fortunes"] 


//FUNCTIONS
//roll a d6 (albeit 0-5)
function rollD6() {
    let d6Value = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
    return d6Value;
}

//rolls all of the F&W dice
function throwDice() {
    let earthRoll = earthDie[rollD6()];
    let waterRoll = waterDie[rollD6()];
    let fireRoll = fireDie[rollD6()];
    let airRoll = airDie[rollD6()];
    let moonRoll = moonDie[rollD6()];
    return [earthRoll, waterRoll, fireRoll, airRoll, moonRoll];
}

//comparing two arrays
function compareArray(roll, combination) {
    return Array.isArray(roll) &&
    Array.isArray(combination) &&
    roll.length === combination.length &&
    roll.every((val, index) => val === combination[index]);
}

function checkWinning() {
    let isWinning = compareArray();
}



//JUST CHECKING
currentRoll = throwDice(); 
console.log(currentRoll);
