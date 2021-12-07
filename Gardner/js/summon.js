const summonLoader = document.querySelector('.summon-loader');
const summonLoaderText = document.querySelector('.summon-loader__inner');
const loadingText = document.querySelector('.summon-text__onLoaing');
const loadedText = document.querySelector('.summon-text__onLoaded');
const resummonBtn = document.querySelector('.btn-resummon');

const HIDDEN_SUMMON = 'hidden';
const SUMMON_LOADER = 'summon-loader';
const SUMMON_LOADING = 'summon-loading';
const SUMMON_LOADED = 'summon-loaded';

summonLoader.addEventListener('click', () => {
  summonLoader.classList.remove(SUMMON_LOADER);
  summonLoader.classList.add(SUMMON_LOADING);
  summonLoaderText.classList.add(HIDDEN_SUMMON);
  // 2초의 로딩 후에 호출 완료 알리기
  setTimeout(() => {
    summonLoader.classList.remove(SUMMON_LOADING);
    summonLoader.classList.add(SUMMON_LOADED);
    loadingText.classList.add(HIDDEN_SUMMON);
    loadedText.classList.remove(HIDDEN_SUMMON);
    resummonBtn.classList.remove(HIDDEN_SUMMON);
  }, 1000);
})

resummonBtn.addEventListener('click', () => {
  summonLoader.classList.remove(SUMMON_LOADED);
  summonLoader.classList.add(SUMMON_LOADING);
  resummonBtn.classList.add(HIDDEN_SUMMON);
  setTimeout(() => {
    summonLoader.classList.remove(SUMMON_LOADING);
    summonLoader.classList.add(SUMMON_LOADED);
    loadingText.classList.add(HIDDEN_SUMMON);
    loadedText.classList.remove(HIDDEN_SUMMON);
    resummonBtn.classList.remove(HIDDEN_SUMMON);
  }, 1000);
})

///////////////////// page observer /////////////////////

// observer를 구현하고 감지되면 행할 함수
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (summonPage.classList.length === 2) {
      summonLoader.classList.add(SUMMON_LOADER);
      summonLoader.classList.remove(SUMMON_LOADING);
      summonLoader.classList.remove(SUMMON_LOADED);
      summonLoaderText.classList.remove(HIDDEN)
      loadingText.classList.remove(HIDDEN_SUMMON);
      loadedText.classList.add(HIDDEN_SUMMON);
      resummonBtn.classList.add(HIDDEN_SUMMON);
      // observer 종료
      observer.disconnect();
    }
  });
});

// observer가 감지할 옵션
const config = { attributes: true };

// observer가 감지할 타겟과 옵션
observer.observe(summonPage, config);