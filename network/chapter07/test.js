// /******
// readline 사용하여 userId, userPW 입력
// 맞으면 '반갑습니다. ' + userId + '님'
// 틀리면 '맞지 않습니다. 다시 입력해주세요.'
// wrongCount++

// wrongCount가 5 이상이면 '30분동안 잠금상태입니다.' 출력 후 종료

// 아이디가 빈칸이면 '아이디가 빈칸입니다.'
// 비밀번호가 빈칸이면 '비밀번호가 빈칸입니다.'
// ********/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var wrongCount = 0;

function account() {
  if (wrongCount >= 5) {
    console.log("30분동안 잠금상태입니다.");
    rl.close();
    return;
  }

  rl.question("아이디를 입력하세요: ", function (userId) {
    if (!userId) {
      console.log("아이디가 빈칸입니다.");
      account();
      return;
    }

    rl.question("비밀번호를 입력하세요: ", function (userPW) {
      if (!userPW) {
        console.log("비밀번호가 빈칸입니다.");
        account();
        return;
      }

      var savedName = "이창현";
      var savedPw = "1111";

      if (userId === savedName && userPW === savedPw) {
        console.log("반갑습니다. " + userId + "님");
      } else {
        console.log("맞지 않습니다. 다시 입력해주세요.");
        wrongCount++;
        account();
        return;
      }

      rl.close(); // Close the interface after processing input
    });
  });
}

account();
