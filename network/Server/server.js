const express = require("express");
const app = express();

app.get("/book", function (req, res) {
  res.send("도서 목록 관련 페이지입니다.");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/mongoList", function (req, res) {
  mydb
    .collection("post")
    .find()
    .toArray()
    .then((result) => {
      res.send(result);
    });
});

const mongoclient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://shin:0531@cluster0.tkdgbtn.mongodb.net/?retryWrites=true&w=majority";
let mydb;
mongoclient
  .connect(url)
  .then((client) => {
    mydb = client.db("myboard");
    // mydb
    //   .collection("post")
    //   .find()
    //   .toArray()
    //   .then((result) => {
    //     console.log(result);
    //   });

    app.listen(8080, function () {
      console.log("포트 8080으로 서버 대기중...");
    });
  })
  .catch((err) => {
    console.log(err);
  });
