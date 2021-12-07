var canvasElement = document.getElementById("canvas");
var loadingMessage = document.getElementById("loadingMessage");

const qrOn = document.querySelector('.qr-page');
const summonOn = document.querySelector('.summon-page');
const qrNotice = document.querySelector('.qr-header__title');

var canvas = canvasElement.getContext("2d");
var video = document.createElement("video");

// Use facingMode: environment to attemt to get the front camera on phones
navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(function(stream) {
  video.srcObject = stream;
  video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
  video.play();
  requestAnimationFrame(tick);
});

function tick() {
  loadingMessage.innerText = "⌛ 스캔 기능을 활성화 중입니다."
  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    loadingMessage.hidden = true;
    canvasElement.hidden = false;

    canvasElement.height = video.videoHeight;
    canvasElement.width = video.videoWidth;
    canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
    var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
    var code = jsQR(imageData.data, imageData.width, imageData.height, {
      inversionAttempts: "dontInvert",
    });
    if (code) {
      qrNotice.innerText = '차량이 조회되었습니다.';
      setTimeout(() => {
        qrOn.classList.add('hidden');
        summonOn.classList.remove('hidden');
      }, 2000);
    } else {
      setTimeout(() => {
        qrNotice.innerText = '차량 조회에 실패하였습니다. 다시 시도해주세요.'
      }, 5000);
    }
  }
  requestAnimationFrame(tick);
}