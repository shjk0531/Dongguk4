// var userName = "이창현";
// var userPW = "1111";

// function account(userId, userpw) {
//   console.log(userId);
//   console.log(userpw);

//   var savedName = "이창현";
//   var savedPw = "1111";

//   if (userId == savedName) {
//     if (userpw == savedPw) {
//       console.log("반갑습니다. " + userId + "님");
//     }
//   }
// }

// account(userName, userPW);

var userName = "이창현";
var userPW = "1111";

function account(userId, userpw = "1111") {
  console.log(userId);
  console.log(userpw);

  var savedName = "이창현";
  var savedPw = "1111";

  if (userId == savedName) {
    if (userpw == savedPw) {
      console.log("반갑습니다. " + userId + "님");
    }
  }
}

account(userName);
