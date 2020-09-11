let score = 0;
let gameStarted = 0;

const startDisplay = document.getElementById('start');
const scoreDisplay = document.getElementById('score');
const holes = document.getElementsByClassName('hole');

function clearBoard(){
  for(let i = 0; i < 9; i++) {
    holes[i].classList.remove('mole');
  }
}

function start(){
  if(gameStarted === 0) {
    gameStarted = 1;
    scoreDisplay.innerText = 'Score: ' + score;
    scoreDisplay.id = 'score';
    startDisplay.innerText = 'Pause';
    timer = setInterval(function () {
      const randomHoleIndex = Math.floor(Math.random() * holes.length);
      holes[randomHoleIndex].classList.toggle('mole');
      if (score === 5) {
        scoreDisplay.innerText = 'You Win!';
        scoreDisplay.id = 'won';
        gameStarted = 0;
        score = 0;
        clearBoard()
        startDisplay.innerText = 'New Game';
        clearInterval(timer);
      }
    }, 300);
  } else {
    gameStarted = 0;
    startDisplay.innerText = 'Unpause';
    clearInterval(timer);
    timer = null;
    clearBoard();
  }
 }

const gameArea = document.getElementById('whack-a-mole');

gameArea.addEventListener('click', function(clickEvent) {
  if (clickEvent.target.matches('.mole')) {
    clickEvent.target.classList.remove('mole');
    score++;
    scoreDisplay.innerText = "Score: " + score;
  }
});
