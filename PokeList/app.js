const generation = document.querySelectorAll('div[class="accordion-body"]');
console.log(generation);

const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

// 세대별로 포켓몬을 보여주는 목록을 만드는 함수
// gene = generation, min = first poke number, max = last poke number
function generator(gene, min, max) {
  for(let i = min; i<=max; i++) {
    const pokeball = document.createElement('div');
    const pokemon = document.createElement('img');
    const label = document.createElement('span');
  
    pokeball.classList.add('pokemon');
    pokemon.src = `${url}${i}.png`;
    label.innerText = `#${i}`;
  
    pokeball.appendChild(pokemon);
    pokeball.appendChild(label);
    generation[gene].appendChild(pokeball);
  }
}

// generation 1
generator(0, 1, 151);
// generation 2
generator(1, 152, 251);
// generation 3
generator(2, 252, 386);
// generation 4
generator(3, 387, 494);
// generation 5
generator(4, 495, 649);
// generation 6
generator(5, 650, 721);
// generation 7
generator(6, 722, 809);
// generation 8
generator(7, 810, 898);
