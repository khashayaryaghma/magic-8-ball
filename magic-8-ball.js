let arr = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now",
  "Don't count on it",
  "My reply is no",
  "My sources say no.",
  "Outlook not so good",
];
function randomAnswer() {
  console.log("shake the ball");
  let randomChoice = Math.floor(Math.random() * (arr.length));
  return randomChoice;
}

function checkAnswer(answer) {
  if (answer >= 0 && answer < 8) {
    console.log(arr[answer]);
    return "positive";
  } else if (answer >= 8 && answer < 12) {
    console.log(arr[answer]);
    return "natural";
  } else if (answer >= 12 && answer < 16) {
    console.log(arr[answer]);
    return "negative";
  }
}

console.log(checkAnswer(randomAnswer()));
