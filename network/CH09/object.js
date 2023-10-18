// let dic = new Object();

// dic.boy = "소년";
// dic.girl = "소녀";
// dic.friend = "친구";

let dic = {
  boy: "소년",
  girl: "소녀",
  friend: "친구",
};

dic.apple = "사과";
dic.ten = 10;

console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);
console.log(dic);

const unit = {
  attack: function (weapon) {
    return `${weapon}으로 공격한다.`;
  },
};

console.log(unit.attack("주먹"));
console.log(unit.attack("총"));

console.log(dic["boy"]);
console.log(dic["girl"]);
console.log(dic["friend"]);

let user = {
  id: "jamsu",
  pw: "1111",
  name: "1ch",
  mobile: "010-4477-XXXX",
  contry: "대한민국",
};

for (let info in user) {
  console.log(`${info} : ${user[info]}`);
}
