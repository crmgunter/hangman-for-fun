const letterContainer = document.querySelector(".letters-container");
const wordContainer = document.querySelector(".word-container");
const letter = document.getElementsByClassName("letter");
let alphabet = "abcdefghijklmnopqrstuvwxyz";
alphabet = alphabet.split("");
let underScoreArray = [];
let win = 0;
let lose = 0;

const wordsArray = [
  "ajax",
  "javascript",
  "css",
  "html",
  "react",
  "express",
  "mongo",
  "python",
  "django",
  "ruby",
  "rails"
];
randomWord = Math.floor(Math.random() * wordsArray.length);
randomWord = wordsArray[randomWord];
console.log(randomWord);

for (let i = 0; i < randomWord.length; i++) {
    underScoreArray.push("_ ");
  }
  wordContainer.append(underScoreArray.join(""));

for (let i = 0; i < alphabet.length; i++) {
  const letter = document.createElement("div");
  letter.setAttribute("id", alphabet[i]);
  letter.setAttribute("class", "letter");
  letter.innerHTML = alphabet[i];
  letterContainer.appendChild(letter);
  guess(letter);
}

function guess(letter) {
  letter.addEventListener("click", function() {
    this.remove();
    compare(this.id);
  });
}

function compare(choice) {
  var wrongGuess = 0;
  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] === choice) {
      underScoreArray[i] = choice;
      wordContainer.innerHTML = underScoreArray.join("");
      win += 1;
    } else {
      wrongGuess += 1;
    }
  }
  if (wrongGuess === randomWord.length) {
    lose += 1;
  }
  score(lose);
}

function score(wrongGuess) {
  if (wrongGuess === 6) {
    document.body.innerHTML = "You lose";
  }
  if (win === randomWord.length) {
    document.body.innerHTML = "You win";
  }
}