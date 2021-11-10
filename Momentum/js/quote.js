// 랜덤으로 명언들을 보여주기
const quotes = [
  {
    quote: "Impossible. That's not true, that's just an opinion.",
    author: "Muhammad Ali",
  },
  {
    quote: "Speak when you are angry then you will make the best speech you'll ever regret.",
    author: "Laurence J.Peter",
  },
  {
    quote: "If we all did the things we are capable of doing, we would literally astound ourselves.",
    author: "Thomas A.Edison",
  },
  {
    quote: "Ability is of little account without opportunity.",
    author: "Napoleon Bonaparte",
  },
  {
    quote: "Do you want to spen the rest of your lif selling sugared water or do you want a chance to change the world?",
    author: "Steve Jobs",
  },
  {
    quote: "Love all, trust a few. Do wrong to none.",
    author: "William Shakespeare",
  },
  {
    quote: "Before he sets out, the traveler must possess fixed interests and facilities to be served by travel.",
    author: "George Santayana",
  },
  {
    quote: "True life is lived when tiny changes occur.",
    author: "Leo Tolstoy",
  },
  {
    quote: "The way to procure insults is to submit to them: a man meets with no more respect than he exacts.",
    author: "William Hazlitt",
  },
  {
    quote: "The gratification comes in the doing, not in the results.",
    author: "James Dean",
  }
];

const quoteList = document.querySelector('#quoteList');
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;

quoteList.addEventListener('mouseenter', () => {
  author.classList.remove('hidden');
})

quoteList.addEventListener('mouseleave', () => {
  author.classList.add('hidden');
})