const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var wrongCount = 0;

function account() {
  if (wrongCount >= 5) {
    return 0;
  }
  rl.question("나이를 입력하세요: ", function (userId, userPw) {
    var savedName = "이창현";
    var savedPw = "1111";
    if (userId == savedName) {
      if (userPw == savedPw) {
        console.log("반갑습니다. " + id + "님");
        return;
      } else {
        console.log("맞지 않습니다. 다시 입력해주세요.");
        wrongCount++;
        account();
      }
    } else {
      console.log("맞지 않습니다. 다시 입력해주세요.");
      wrongCount++;
      account();
    }
  });
  rl.close();
}

account();
