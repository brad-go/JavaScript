// 랜덤으로 배경화면 변경하기
const container = document.querySelector('#container');

const img = document.createElement('img');
const src = `http://source.unsplash.com/random/1600*900?landscape`;

img.src = src;
container.appendChild(img);
