const playerOneScore = document.querySelector('#playerOneScore');
const playerTwoScore = document.querySelector('#playerTwoScore');
const btnOne = document.querySelector('#playerOneBtn');
const btnTwo = document.querySelector('#playerTwoBtn');
const btnReset = document.querySelector('#resetBtn');
const select = document.querySelector('#points');

// 최대 점수를 기본적으로 설정 = 6
let maxPoint = parseInt(select.value);
// 각 플레이어의 점수를 담을 변수 설정
let pointOne = 0;
let pointTwo = 0;

// select의 값이 변경되면 점수 최대치를 제한하기 위해 작성
select.addEventListener('change', () => {
  console.log(select.value);
  maxPoint = parseInt(select.value);
})

// 버튼 비활성화 함수
function btnDisabled() {
  btnOne.setAttribute('disabled', 'true');
  btnTwo.setAttribute('disabled', 'true');
}

// 버튼 활성화 함수
function btnAbled() {
  // 요소의 속성을 제거하는 메서드 removeAttribute();
  btnOne.removeAttribute('disabled');
  btnTwo.removeAttribute('disabled');
}

// 게임을 이겼을 때 효과를 주기위한 함수
function gameWin(winner, loser) {
  winner.classList.add('winner');
  loser.classList.add('loser');
  btnOne.classList.add('end-game');
  btnTwo.classList.add('end-game');
  btnDisabled();
}

// 게임 초기화를 위한 함수
function resetGame(winner, loser) {
  winner.classList.remove('winner');
  loser.classList.remove('loser');
  btnOne.classList.remove('end-game');
  btnTwo.classList.remove('end-game');
}

btnOne.addEventListener('click', () => {
  // player 1의 점수를 1 올린다.
  pointOne++;
  playerOneScore.innerText = pointOne;
  // 점수가 최대치에 도달하면 게임 종료!
  if(pointOne >= maxPoint) {
    gameWin(playerOneScore, playerTwoScore);
  }
})

btnTwo.addEventListener('click', () => {
  // plaeyr 2의 점수를 1 올린다.
  pointTwo++;
  playerTwoScore.innerText = pointTwo;
  // 점수가 최대치에 도달하면 게임 종료!
  if(pointTwo >= maxPoint) {
    gameWin(playerTwoScore, playerOneScore);
  }
})

btnReset.addEventListener('click', () => {
  pointOne >= maxPoint ? resetGame(playerOneScore, playerTwoScore) : resetGame(playerTwoScore, playerOneScore);
  // 추가된 클래스들은 maxPoint에 도달해야 변경되기 때문에 중간에 리셋을 눌러도 초기 상태와 같을 수 있다!
  pointOne = 0; 
  playerOneScore.innerText = pointOne;
  pointTwo = 0;
  playerTwoScore.innerText = pointTwo;
  btnAbled();
})
