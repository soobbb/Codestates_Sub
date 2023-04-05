// 1. 모든 요청에 대해 url이나 메서드를 확인할 때
const express = require("express");
const app = express();

/* 
app.미들웨어 Http 메소드("미들웨어 경로", 미들웨어 함수(http 요청인수(req), 응답인수(res), 콜백인수(next)))
  next();
*/
const myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};

app.use(myLogger); // use 메서드로 모든 요청에 미들웨어 적용 가능!

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/favicon.ico", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000);

// 2. 요청 헤더에 사용자 인증 정보가 담겨있는지 확인할 때
// HTTP 요청에서 토큰이 있는지를 판단하여, 이미 로그인한 사용자일 경우 성공, 
// 아닐 경우 에러를 보내는 미들웨어 예제

app.use((req, res, next) => {
  // 토큰이 있는지 확인, 없으면 받아줄 수 없음.
  if(req.headers.token){
    req.isLoggedIn = true;
    next();
  } else {
    res.status(400).send('invalid user')
  }
})