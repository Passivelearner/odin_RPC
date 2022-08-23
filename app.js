const choice = ['ROCK', 'PAPER', 'SCISSORS'];
const min = 0;
const max = choice.length;


const getComputerChoice = () => {
    let rand = Math.floor(Math.random() * (max - min) + min);
    return choice[rand];
}


const playRound = (playerSelection, computerSelection) => {
    const pSelection = playerSelection.toUpperCase();
    const cSelection = computerSelection;

    

    if(pSelection !== cSelection){

        if(pSelection === choice[0]){
            if(cSelection === choice[2]){
                console.log({result: `${pSelection} beats ${cSelection} player wins!`})
            } else if (cSelection === choice[1]) {
                console.log({result: `${cSelection} beats ${pSelection} computer wins!`})
            }
        } else if (pSelection === choice[1]) {
            if(cSelection === choice[0]){
                console.log({result: `${pSelection} beats ${cSelection} player wins!`})
            } else if (cSelection === choice[2]) {
                console.log({result: `${cSelection} beats ${pSelection} computer wins!`})
            }
        } else if (pSelection === choice[2]) {
            if(cSelection === choice[1]){
                console.log({result: `${pSelection} beats ${cSelection} player wins!`})
            } else if (cSelection === choice[0]) {
                console.log({result: `${cSelection} beats ${pSelection} computer wins!`})
            }
        }

    } else {
        console.log('Draw!')
    } 


}

choice.forEach(() => {
    playRound(getComputerChoice(), getComputerChoice())
})
