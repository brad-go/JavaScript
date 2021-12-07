// pages
const mainPage = document.querySelector('#mainPage');
const qrPage = document.querySelector('#qrPage');
const summonPage = document.querySelector('#summonPage');
// btns
const scanBtn = document.querySelector('#btnScan');
const backBtn = document.querySelector('.btn-back');
const userBtn = document.querySelector('.btn-user');
const noticeBtn = document.querySelectorAll('.btn-call-notice');
// others
const noticeBox = document.querySelector('.call-notice');

// text
const HIDDEN = 'hidden';
const BTN_HOME = 'btn-home';

///////////////////// scan Btn /////////////////////

// scan button을 클릭하면 main-page 사라지고 qr-page 보이기
// home 버튼의 이미지 바꿔주기 
scanBtn.addEventListener('click', () => {
  mainPage.classList.add(HIDDEN);
  qrPage.classList.remove(HIDDEN);
  backBtn.classList.remove(HIDDEN);
})

///////////////////// back Btn /////////////////////
backBtn.addEventListener('click', () => {
  // 현재 페이지가 어디냐에 따라 back button의 역할이 달라진다. 
  if (qrPage.classList.length === 2) {
    qrPage.classList.add(HIDDEN);
    mainPage.classList.remove(HIDDEN);
    backBtn.classList.add(HIDDEN);
  } else {
    summonPage.classList.add(HIDDEN);
    qrPage.classList.remove(HIDDEN);
    observer.observe(summonPage, config);
  }
})

///////////////////// user Btn /////////////////////

userBtn.addEventListener('click', () => {
  noticeBox.classList.toggle(HIDDEN);
})

///////////////////// notice Btn /////////////////////

const confirmBtn = noticeBtn[1];

confirmBtn.addEventListener('click', () => {
  noticeBox.classList.add(HIDDEN);
})



