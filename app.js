const choice = ['ROCK', 'PAPER', 'SCISSORS'];
const min = 0;
const max = choice.length;

const resultElement = document.getElementById('result');
const playerScoreElement = document.getElementById('playerScore');
const computerScoreElement = document.getElementById('computerScore'); 
let computerPoints = 0;
let playerPoints = 0;

playerScoreElement.innerHTML = playerPoints;
computerScoreElement.innerHTML = computerPoints;

const reset = () => {
    computerPoints = 0;
    playerPoints = 0;
    playerScoreElement.innerHTML = playerPoints;
    computerScoreElement.innerHTML = computerPoints;
}


let currmodal = null;

const showModal = (winner) => {
    if(currmodal === null){
        const container = document.createElement('div');
        container.className = 'modal-container';

        const modal = document.createElement('div');
        modal.id = 'modal';

        const _h1 = document.createElement('h1');
        _h1.id = 'winner';
        _h1.innerHTML = `${winner} won!`

        const button = document.createElement('button');
        button.id = 'playagain';
        button.innerHTML = 'Play again?';
        container.addEventListener('click', () => {
            document.getElementsByClassName('modal-container')[0].style.display = 'none';
            reset();
        })

        modal.appendChild(_h1)
        modal.appendChild(button)
        container.appendChild(modal);

        currmodal = container;
        document.getElementsByTagName('body')[0].appendChild(currmodal);
    } else {
        document.getElementById('winner').innerHTML = winner;
        currmodal.style.display = 'flex';
    }
}













const addComputerPoints = () => {

    if(computerPoints === 5){
        console.log({computerPoints})
        showModal('Computer');
        return;
    }


    computerPoints = computerPoints + 1;
    computerScoreElement.innerHTML = computerPoints;
}

const addPlayerPoints = () => {

    if(playerPoints === 5){
        console.log({playerPoints})
        showModal('Player');
        return;
    }


    playerPoints = playerPoints + 1;
    playerScoreElement.innerHTML = playerPoints;
}


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
                addPlayerPoints();
            } else if (cSelection === choice[1]) {
                resText = `${cSelection} beats ${pSelection} computer wins!`;
                addComputerPoints();
            }
        } else if (pSelection === choice[1]) {
            if(cSelection === choice[0]){
                resText = `${pSelection} beats ${cSelection} player wins!`;
                addPlayerPoints();
            } else if (cSelection === choice[2]) {
                resText = `${cSelection} beats ${pSelection} computer wins!`;
                addComputerPoints();
            }
        } else if (pSelection === choice[2]) {
            if(cSelection === choice[1]){
                resText = `${pSelection} beats ${cSelection} player wins!`;
                addPlayerPoints();
            } else if (cSelection === choice[0]) {
                resText = `${cSelection} beats ${pSelection} computer wins!`;
                addComputerPoints();
            }
        }

    } else {
        resText = `Draw`;
    } 

    resultElement.innerHTML = resText;
}



// card listeners
const rock = document.getElementById('rockCard');
const paper = document.getElementById('paperCard');
const scissor = document.getElementById('scissorCard');

rock.addEventListener('click', () => {
    playRound(choice[0], getComputerChoice());
});
paper.addEventListener('click', () => {
    playRound(choice[1], getComputerChoice());
});
scissor.addEventListener('click', () => {
    playRound(choice[2], getComputerChoice());
});