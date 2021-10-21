const form = document.querySelector('#searchForm');
const showbox = document.querySelector('#showbox');

// form이 제출되면 async, await을 통해서 영화 정보를 받아오는 함순
form.addEventListener('submit', async (e) => {
  // submit시 기본 새로고침 막기
  e.preventDefault();
  // input의 입력값을 name으로 찾아서 가져오기
  let userInput = form.elements.query.value;
  // axios의 두번째 인자로 prameter를 설정할 수 있는데, 여기서는 검색을 위한 것만을 설정해서 변수에 넣었다 .
  const config = { params: { q: userInput } }
  // axios를 사용해서 영화에 대한 정보를 받아온다. 
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  console.dir(res.data[0].show.summary);
  deleteImages();
  makeImages(res.data);
});

// 영화의 이미지와 제목, 별점을 만들어 추가하는 함수 
// 매개변수로 res.data( 받아온 영화의 데이터 )
const makeImages = (shows) => {
  for(result of shows) {
    // card를 만들어서 그 안에 영화의 이미지, 제목, 별점을 집어넣고, 그렇게 만든 box를 showbox에 집어넣기 
    const card = document.createElement('div')
    card.setAttribute('class', 'cards');
    // 이미지가 있다면 이미지를 표시
    if(result.show.image) {
      const img = document.createElement('img');
      img.src = result.show.image.medium;
      card.append(img);
    }
    // 영화 이름 추가
    const name = document.createElement('name');
    name.setAttribute('class', 'show-name');
    name.innerText = result.show.name;
    // 영화 별점 추가
    const score = document.createElement('span');
    score.setAttribute('class', 'score');
    score.innerText = Math.floor(result.score*100)/10;
    // 카드에 영화와 별점 넣기
    card.append(name, score);
    // 화면에 추가해주기
    showbox.appendChild(card);
  }
}

// 검색할 때마다 새로운 정보를 위해 카드들을 삭제하는 함수
const deleteImages = () => {
  const cards = document.querySelectorAll('.cards');
  for(let card of cards) {
    card.remove();
  }
}
