let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();
/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'Spearmen') {
    if (computerMove === 'Archers') {
      result = 'You Lose.';
    } else if (computerMove === 'Cavalry') {
      result = 'You Win.';
    } else if (computerMove === 'Spearmen') {
      result = 'Tie.';
    }

  } else if (playerMove === 'Cavalry') {
    if (computerMove === 'Archers') {
      result = 'You Win.';
    } else if (computerMove === 'Cavalry') {
      result = 'Tie.';
    } else if (computerMove === 'Spearmen') {
      result = 'You Lose.';
    }

  } else if (playerMove === 'Archers') {
    if (computerMove === 'Archers') {
      result = 'Tie.';
    } else if (computerMove === 'Cavalry') {
      result = 'You Lose.';
    } else if (computerMove === 'Spearmen') {
      result = 'You Win.';
    }
  }

  if (result === 'You Win.') {
    score.wins += 1;
  } else if (result === 'You Lose.') {
    score.losses +=1;
  } else if (result === 'Tie.') {
    score.ties +=1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector ('.js-moves').innerHTML = `You
<img src="/images/${playerMove}.gif" class="move-icon">
<img src="/images/${computerMove}.gif" class="move-icon">
Computer
`;

}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {

  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'Archers';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Cavalry';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'Spearmen';
  }

  return computerMove;
}