document.addEventListener('DOMContentLoaded', function() {
    let score = 0;
    let timeLeft = 30;
    let timerInterval = null;
    let gameStarted = false;
    
    const timerElement = document.getElementById('timer');
    const scoreElement = document.getElementById('score');
    const clickButton = document.getElementById('click-button');
    const resultElement = document.getElementById('result');
  
    function updateTimer() {
      if (timeLeft > 0) {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}s`;
      } else {
        endGame();
      }
    }
  
    function updateScore() {
      if (!gameStarted) {
        startGame();
      }
      
      score++;
      scoreElement.textContent = `Score: ${score}`;
    }
  
    function startGame() {
      gameStarted = true;
      timerInterval = setInterval(updateTimer, 1000);
      clickButton.textContent = "Click Faster!";
    }
  
    function endGame() {
      clickButton.disabled = true;

      resultElement.innerHTML = `
        <div>Game Over!</div>
        <div>Your Score: ${score}</div>
      `;
      resultElement.classList.remove('hidden');
      clearInterval(timerInterval);
    }
  
    function resetGame() {
      score = 0;
      timeLeft = 30;
      gameStarted = false;
      
      scoreElement.textContent = `Score: 0`;
      timerElement.textContent = `Time Left: 30s`;
      clickButton.disabled = false;
      clickButton.textContent = "Click Me to Start!";
      resultElement.classList.add('hidden');
      
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
    }
  
    resetGame();
    
    clickButton.addEventListener('click', updateScore);
  });