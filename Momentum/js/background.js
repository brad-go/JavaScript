//랜덤으로 배경화면 변경하기
const size = Math.floor(Math.random() * 1000) + 400;

const src = `http://source.unsplash.com/random/${size}*${size}?landscape`;
const url = `url(${src})`;

document.body.style.backgroundImage = url;
