//VARIABLE DEFINITIONS
//Dice
const dice = [
    ['Earth', 'Earth', 'Earth', 'North', 'North', 'Rice'],
    ['Water', 'Water', 'Water', 'East', 'East', 'Fish'],
    ['Fire', 'Fire', 'Fire', 'West', 'West', 'Tree'],
    ['Air', 'Air', 'Air', 'South', 'South', 'Bird'],
    ['Void', 'Void', 'Fortunes', 'Fortunes', 'Sun', 'Moon']
]

//Winning combinations: 5 dice, last array value is the name of the combination
const winningCombinations = [ 
    ['North', 'East', 'West', 'South', 'Fortunes', 'Fortunes and Winds'],
    ['North', 'East', 'West', 'South', 'Sun', 'The Lady\'s Breath'],
    ['North', 'East', 'West', 'South', 'Void', 'Empty Winds'],
    ['Earth', 'Water', 'Fire', 'Air', 'Void', 'Shinsei\'s Blessing'],
    ['Earth', 'Water', 'Fire', 'Air', 'Sun', 'The Lady\'s Tears'],
    ['Earth', 'Water', 'Fire', 'Air', 'Fortunes', 'Seven Thunders']
];

let turnCounter = 0 //initialising the turncounter, will have to reset this when play passes on


//FUNCTIONS
//Roll a d6 (albeit 0-5)
function rollD6() {
    let d6Value = Math.floor(Math.random() * 6);
    return d6Value;
}

//Rolls the shooter's dice: iterates through the dice array
function throwDice() {
    const shooterRoll = []
    for (i = 0; i < 5; i++) {
        shooterRoll.push(dice[i][rollD6()]);
    }
    return shooterRoll
};

//Compares the shooter's roll to one row of the winningCombinations array
function compareDice(roll, i) {
    let matches = 0;

    if (roll[4] === dice[4][5]) {
        return -1; //exits the function immediately if the moon dice has rolled Lord Moon
    }

    for (j = 0; j < 5; j++) {
        console.log(dice[j][1], 'die', '| Shooter/Win:', roll[j]+'/'+winningCombinations[i][j]);
        if (roll[j] !== winningCombinations[i][j]) {
            return 0; //exits the function as soon as first mismatch is found in this row of the winningCombinations array
        } else {
            matches++
            if (matches === 5) {
                return 1; //winningCombinations[i][5]
            }
        }
    };
};

//Compares the shooter's roll to the entire winningCombinations array
function isWin() {
    let shooterRoll = throwDice(); //gotta throw the damn dice first!
    updateDiceDisplay(shooterRoll); //calls the function to display the results on the webpage

    for (i = 0; i < 6; i++) {
        console.log('CHECKING:', winningCombinations[i][5])
        let winStatus = compareDice(shooterRoll, i);
        if (winStatus === -1) {
            console.log('Lord Moon: Shooter loses their bet and Lord Moon\'s stake.');
            resultsText.innerText = 'Lord Moon appears!';
            payoutText.innerText = 'You lose your bet and his stake.';
            nextText.innerText = 'Pass the dice to the player on your left.';
            return -1;
        } else if (winStatus === 1) {
            console.log('Matching combination:', winningCombinations[i][5], '- Shooter wins.');
            resultsText.innerText = winningCombinations[i][5]+'!';
            payoutText.innerText = 'You win!'; //odds?
            nextText.innerText = 'Pass the dice to the player on your left.';
            return 1;
        } else {            
            console.log('NO MATCH WITH:', winningCombinations[i][5]);
            console.log(' '); //Just an empty line to display the results nicely in the console log :P
            }
    } 
    console.log('No winning combinations present!');
    console.log('--------------------------------');
    resultsText.innerText = 'No match this turn.';
    payoutText.innerText = ' ';
    nextText.innerText = 'Choose up to 3 dice to hold and roll again.'
    return 0;
}

function incrementTurns () {
    turnCounter++;
    turnCountText.innerText = `Turn ${turnCounter} of 3`;
    console.log('Turn:', turnCounter);
}


//EVENT LISTENERS
let throwButton = document.querySelector('#throw-button');
throwButton.addEventListener('click', isWin);
throwButton.addEventListener('click', incrementTurns);

//FOR DISPLAYING RESULTS
let turnCountText = document.querySelector('#turn-count-text');
let resultsText = document.querySelector('#results-text');
let payoutText = document.querySelector('#payout-text');
let nextText = document.querySelector('#next-text');

let earthButtonLabel = document.querySelector('label[for="earth-button"]');
let waterButtonLabel = document.querySelector('label[for="water-button"]');
let fireButtonLabel = document.querySelector('label[for="fire-button"]');
let airButtonLabel = document.querySelector('label[for="air-button"]');
let moonButtonLabel = document.querySelector('label[for="moon-button"]');

function updateDiceDisplay(shooterRoll) {
    earthButtonLabel.innerText = shooterRoll[0];
    waterButtonLabel.innerText = shooterRoll[1];
    fireButtonLabel.innerText = shooterRoll[2];
    airButtonLabel.innerText = shooterRoll[3];
    moonButtonLabel.innerText = shooterRoll[4];
    
    earthButtonLabel.style.visibility = 'visible';
    waterButtonLabel.style.visibility = 'visible';
    fireButtonLabel.style.visibility = 'visible';
    airButtonLabel.style.visibility = 'visible';
    moonButtonLabel.style.visibility = 'visible';
    //MUST BE A WAY TO ITERATE THIS >:-|
};

//TESTING, TESTING, ONE TWO THREE
 