// 1. setTimeout
// setTimeout(function () {
//   console.log('1초 후 실행');
// }, 1000);

// 2. clearTimeout
// const timer = setTimeout(function () {
//   console.log('10초 후 실행');
// }, 10000);
// clearTimeout(timer);

// 3. setInterval
// setInterval(function () {
//   console.log('1초마다 실행');
// }, 1000);

// 4. ClearInterval
// const timer = setInterval(function () {
//   console.log('1초마다 실행');
// }, 1000);
// clearInterval(timer);
let promise = new Promise((resolve, reject) => {
  resolve("성공");

  reject("실패");
})
promise
.then(value=>{
  console.log(value);
  return "성공"
})
.catch(error=>{
  console.log(error);
  return "실패"
})
.finally(()=>{
  console.log("성공이든 실패든 작동!");
})

