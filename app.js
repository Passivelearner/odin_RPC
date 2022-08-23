const choice = ['ROCK', 'PAPER', 'SCISSORS'];
const min = 0;
const max = choice.length;

const resultElement = document.getElementById('result');
const playerScoreElement = document.getElementById('playerScore');
const computerScoreElement = document.getElementById('computerScore'); 
const computerPoints = 0;
const playerPoints = 0;

playerScoreElement.innerHTML = playerPoints;
computerScoreElement.innerHTML = computerPoints;


const getComputerChoice = () => {
    let rand = Math.floor(Math.random() * (max - min) + min);
    return choice[rand];
}


const playRound = (playerSelection, computerSelection) => {
    const pSelection = playerSelection.toUpperCase();
    const cSelection = computerSelection;
    let resText = '';

    

    if(pSelection !== cSelection){

        if(pSelection === choice[0]){
            if(cSelection === choice[2]){
                resText = `${pSelection} beats ${cSelection} player wins!`;
            } else if (cSelection === choice[1]) {
                resText = `${cSelection} beats ${pSelection} computer wins!`;
            }
        } else if (pSelection === choice[1]) {
            if(cSelection === choice[0]){
                resText = `${pSelection} beats ${cSelection} player wins!`;
            } else if (cSelection === choice[2]) {
                resText = `${cSelection} beats ${pSelection} computer wins!`;
            }
        } else if (pSelection === choice[2]) {
            if(cSelection === choice[1]){
                resText = `${pSelection} beats ${cSelection} player wins!`;
            } else if (cSelection === choice[0]) {
                resText = `${cSelection} beats ${pSelection} computer wins!`;
            }
        }

    } else {
        resText = `Draw`;
    } 

    resultElement.innerHTML = resText;
}





choice.forEach(() => {
    playRound(getComputerChoice(), getComputerChoice())
})

// card listeners
const rock = document.getElementById('rockCard');
const paper = document.getElementById('paperCard');
const scissor = document.getElementById('scissorCard');

rock.addEventListener('click', () => console.log(choice[0]));
paper.addEventListener('click', () => console.log(choice[1]));
scissor.addEventListener('click', () => console.log(choice[2]));