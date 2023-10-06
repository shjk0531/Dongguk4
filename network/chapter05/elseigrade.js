const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("점수를 입력하세요: ", function (score) {
  if (score >= 4 && score <= 4.5) {
    console.log("A");
  } else if (score >= 3.5) {
    console.log("B");
  } else if (score >= 3) {
    console.log("C");
  } else if (score >= 2.5) {
    console.log("D");
  } else {
    console.log("F");
  }
  rl.close();
});
