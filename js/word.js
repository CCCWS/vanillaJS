const words = [
  { words: "왕이 하는 인사는?", answer: "곤니치왕 ㅋㅋ" },
  { words: "왕이 담배를 많이피면?", answer: "스모킹 ㅋㅋ" },
  { words: "은행의 왕은?", answer: "뱅킹 ㅋㅋ" },
  { words: "주차의 왕은?", answer: "파킹 ㅋㅋ" },
  { words: "왕이 충격을 받으면?", answer: "쇼킹 ㅋㅋ" },
  { words: "생각을 많이하는 왕은?", answer: "띵킹 ㅋㅋ" },
  { words: "왕이 공을 막으면?", answer: "블로킹 ㅋㅋ" },
];

const word = document.querySelector("#word span:first-child"); //word의 첫번째 span
const answer = document.querySelector("#word span:last-child"); //word의 마지막 span / nth-child(2) 2번째
const randomWords = words[Math.floor(Math.random() * words.length)]; //Math.random()으로 랜덤값을 구하고 리스트의 길이를 곱해 정수로 만든후 내림

word.innerText = randomWords.words;
answer.innerText = randomWords.answer;
