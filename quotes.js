const quotes = [
  {
    quote:
      "Ask, and it shall be given you; seek, and you shall find.<br>구하라 그리하면 얻을것이요 찾으라 그리하면 찾게될 것이니",
    author: "-The Bible-",
  },
  {
    quote: "For those to whom much is given, much is required.",
    author: "-The Bible-",
  },
  {
    quote: "The love of money is the root of all evil.",
    author: "-The Bible-",
  },
  {
    quote: "The truth will set you free.",
    author: "-The Bible-",
  },
  {
    quote: "You Will Never Walk Alone.",
    author: "Liverpool",
  },
  {
    quote:
      "Only I can change my life, no one can do it.<br>누구도 대신할 수 없이 오직 나만이 내 인생을 바꿀수 있다.",
    author: "Carol Burnett",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;
