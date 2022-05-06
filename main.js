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

//Compares the shooter's roll to the winning combinations
function compareResults(roll) {
    for (i=0; i < 6; i++) {
        console.log('Die:', dice[i][1], '| Shooter roll:', roll[i], '| Winning Match:', winningCombinations[0][i]); // FOR TESTING
        if (roll[i] !== winningCombinations[0][i]) {
            return false;
        } else console.log('MATCHING DICE');
    };
};

function isWin() {
    let isWinning = compareResults();
};



//JUST CHECKING
currentRoll = throwDice(); 
let testVariable = compareResults(['North', 'East', 'West', 'South', 'Fortunes']); 
//console.log('Shooter rolled:', currentRoll); //FOR TESTING
 