const clock = document.querySelector('#clock');

function getTimes() {
  const date = new Date();

  const hours = String(date.getHours()).padStart(2, '0');
  // 두자릿수로 맞추기 위해 padStart를 사용했고, 이를 사용하기 위해 시간값을 String으로 감쌌다. 
  const minutes = String(date.getMinutes()).padStart(2, '0');

  // 얻은 값들을 통해 화면에 시계를 표시
  clock.innerText = `${hours} : ${minutes}`;
}

// 화면에 접속했을 때 바로 시계를 보여주기 위해 먼저 실행 후, 1초마다 반복 실행 
getTimes();
setInterval(getTimes, 1000);
