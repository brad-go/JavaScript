const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector('#loginInput');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

// 로그인한 시간에 따라 인사말을 변경해서 보여주기
const paintGreeting = (username) => {
  const date = new Date();
  const hour = date.getHours();
  if (hour >= 5 && hour < 11) {
    greeting.innerText = `Good morning, ${username}`;
  } else if (hour >= 11 && hour < 17) {
    greeting.innerText = `Good afternoon, ${username}`;
  } else if (hour >= 17 && hour < 22) {
    greeting.innerText = `Good evening, ${username}`;
  } else {
    greeting.innerText = `Great job today, take a break.`;
  }

  greeting.classList.remove(HIDDEN_CLASSNAME);
  clock.classList.remove(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // 입력한 이름을 변수에 저장
  const username = loginInput.value;
  // localStorage에 username을 저장해서 로그인 유지시키기
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

// localStorage에 저장된 username을 가져와서 변수에 저장하기 
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 저장된 username이 없다면 username 입력받고, 있다면 인사말 보여주기
if(savedUsername === null) { 
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
