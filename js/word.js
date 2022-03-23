const words = [
  //오브젝트를 가진 리스트 생성
  { words: "apple", answer: "fruit", test: "test" },
  { words: "banana", answer: "fruit?" },
  { words: "carrot", answer: "fruit!" },
  { words: "durian", answer: "fruit.." },
  { words: "fig", answer: "fruit@" },
];

const word = document.querySelector("#word span:first-child"); //word의 첫번째 span
const answer = document.querySelector("#word span:nth-child(2)"); //word의 마지막 span
const test = document.querySelector("#word span:last-child");
const randomWords = words[Math.floor(Math.random() * words.length)]; //Math.random()으로 랜덤값을 구하고 리스트의 길이를 곱해 정수로 만든후 내림

word.innerText = randomWords.words;
answer.innerText = randomWords.answer;
test.innerText = randomWords.test;
