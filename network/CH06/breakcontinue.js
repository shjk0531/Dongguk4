// var value = 0;
// while (value < 10) {
//   value++;
//   if (value % 2 == 0) {
//     continue;
//   }
//   console.log("value의 값: " + value);
// }

var dan = 2;
outside: while (dan < 10) {
  var num = 1;
  while (num < 10) {
    if (dan == 6 && num == 1) break outside;
    console.log(dan + "*" + num + "=" + dan * num);
    num++;
  }
  dan++;
}
