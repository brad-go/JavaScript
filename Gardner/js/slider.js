const slider = document.querySelector('.slider');
const sliderLabel = document.querySelector('#sliderLabel');
const sliderLabel2 = document.querySelector('#sliderLabel2');
const sliderNotice = document.querySelector('.slider-notice');
console.log(sliderNotice);

const handleSliderLabel = (value) => {
  let transValue = sliderLabel.style.opacity;
  
  if (value < 50) {
    sliderLabel2.classList.remove('hidden');
    sliderLabel.classList.add('hidden');
    transValue = 1 - ((value * 2) / 100);
    sliderLabel2.style.opcity = transValue;
  } else {
    sliderLabel.classList.remove('hidden');
    sliderLabel2.classList.add('hidden');
    transValue = value / 100;
    sliderLabel.style.opacity = transValue;
  }
}

const handleSliderThumb = (value) => {
  if (value < 50) {
    slider.style.setProperty('--background-image', "url('https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-41-256.png')");
    slider.style.setProperty('--background-color', 'rgb(0, 184, 235)');
  } else {
    slider.style.setProperty('--background-image', "url('https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-40-256.png')");
    slider.style.setProperty('--background-color', 'rgb(197, 54, 161)');
  }
}

const handleSliderNotice = (value) => {
  if (value < 50) {
    sliderNotice.innerText = '전화번호가 호출자에게 노출됩니다.';
    sliderNotice.classList.add('slider-border');
  } else {
    sliderNotice.innerText = '알림으로 연락을 받습니다.';
    sliderNotice.classList.remove('slider-border');
  }
}

slider.addEventListener('change', () => {
  const value = slider.value;
  handleSliderLabel(value);
  handleSliderThumb(value);
  handleSliderNotice(value);
})