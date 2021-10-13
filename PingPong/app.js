const p1 = {
  score: 0,
  display: document.querySelector('#p1Display'),
  button: document.querySelector('#p1Btn')
}

const p2 = {
  score: 0,
  display: document.querySelector('#p2Display'),
  button: document.querySelector('#p2Btn')
}

const resetBtn = document.querySelector('#resetBtn');
const winningScoreSelect = document.querySelector('#playto');

// 최대 점수를 기본적으로 설정 = 6
let winningScore = parseInt(winningScoreSelect.value);
// 각 플레이어의 점수를 담을 변수 설정
let p1Score = 0;
let p2Score = 0;
// 게임 진행 여부
let isGameOver = false;

// winningScoreSelect의 값이 변경되면 점수 최대치를 제한하기 위해 작성
winningScoreSelect.addEventListener('change', function() {
  winningScore = parseInt(this.value);
  // winningScore를 설정하면 게임을 초기화
  reset();
})


function updateScores(player, opponent) {
  if(!isGameOver) {
    // player 1의 점수를 1 올린다.
    player.score++;
    // 점수가 최대치에 도달하면 게임 종료!
    if(player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add('winner');
      opponent.display.classList.add('loser');
      player.button.classList.add('end-game');
      opponent.button.classList.add('end-game');
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener('click', () => {
  updateScores(p1, p2);
})

p2.button.addEventListener('click', () => {
  updateScores(p2, p1);
})

function reset() {
  isGameOver = false;
  for(let p of [p1, p2]) {
    p.score = 0;   
    p.display.textContent = p.score;
    p.display.classList.remove('winner', 'loser');
    p.button.classList.remove('end-game');
    p.button.disabled = false;
  }
}

resetBtn.addEventListener('click', reset);
