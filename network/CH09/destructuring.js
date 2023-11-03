// const color = ["red", "green", "blue"];
// let [r, g, b] = color;

// console.log(r);
// console.log(g);
// console.log(b);

// const [a, b, ...rest] = ["C#", "javascript", "python", "react", "C++"];
// console.log(a);
// console.log(b);
// console.log(rest.length);
// console.log(rest[0]);
// console.log(rest[1]);
// console.log(rest[2]);

let user = {
  id: "jamsuham",
  pw: "1234",
  name: "잠수함",
  age: 30,
};

let { id, ...rest } = user;

console.log(id);
console.log(rest.pw);
console.log(rest.name);
console.log(rest.age);
