let score = 0;

const scoreDisplay = document.getElementById('score');

const holes = document.getElementsByClassName("hole");

setInterval(function () {
    const randomHoleIndex = Math.floor(Math.random() * holes.length);
    holes[randomHoleIndex].classList.toggle("mole");
}, 300);

const gameArea = document.getElementById('whack-a-mole');
gameArea.addEventListener('click', function(clickEvent) {
  if (clickEvent.target.matches('.mole')) {
    clickEvent.target.classList.remove('mole');
    score++;
    scoreDisplay.innerText = "Score: " + score;
  }
});