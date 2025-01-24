const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const displayWin = document.querySelector('.win');
const displayLose = document.querySelector('.lose');
const displayDraw = document.querySelector('.draw');
const winResult = document.querySelector('.winResult');
const loseResult = document.querySelector('.loseResult');
const drawResult = document.querySelector('.drawResult');

const rock = 1;
const paper = 2;
const scissors = 3;

let win = 1;
let lose = 1;
let draw = 1;


function gameLogic(playerChoice) {
    function computerRandomizer() {
        return Math.floor(Math.random() * 3) + 1;
    }

    const yellow = 'linear-gradient( 135deg, #FDEB71 10%, #F8D800 100%)';
    const green = 'linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%)';
    const red = 'linear-gradient( 135deg, #FEB692 10%, #EA5455 100%)';

    const computerChoice = computerRandomizer();
    if (playerChoice === computerChoice) {
        displayDraw.textContent = `It's a Draw`;
        displayWin.textContent = '';
        displayLose.textContent = '';
        drawResult.textContent = draw++;
        document.body.style.backgroundImage = yellow;
    } else if (
        (playerChoice === rock && computerChoice === scissors) ||
        (playerChoice === paper && computerChoice === rock) ||
        (playerChoice === scissors && computerChoice === paper)
    ) {
        displayDraw.textContent = '';
        displayWin.textContent = 'You Win';
        displayLose.textContent = '';
        winResult.textContent = win++;
        document.body.style.backgroundImage = green;
    } else {
        displayDraw.textContent = '';
        displayWin.textContent = '';
        displayLose.textContent = 'You Lose';
        loseResult.textContent = lose++;
        document.body.style.backgroundImage = red;
    }
}


rockButton.addEventListener('click', () => {
    gameLogic(rock);
})
paperButton.addEventListener('click', () => {
    gameLogic(paper);

})
scissorsButton.addEventListener('click', () => {
    gameLogic(scissors);

});