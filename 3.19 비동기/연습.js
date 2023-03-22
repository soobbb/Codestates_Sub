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

// let promise = new Promise((resolve, reject) => {
//   // 변수에 new Promise 변수를 넣어 준 거고
//   resolve("성공12");
//   reject("실패");
// });
// promise
//   .then((value) => {
//     console.log(value);
//     return "성공1";
//   })
//   .then((value) => {
//     console.log(value);
//     return "성공2";
//   })
//   .then((value) => {
//     console.log(value);
//     return "성공3";
//   })
//   .catch((error) => {
//     console.log(error);
//     return "실패2";
//   })
//   .finally(() => {
//     console.log("성공이든 실패든 작동!");
//   });

// // 터미널에 `node index.js`를 입력하여 비동기 코드가 작동하는 순서를 확인해보세요.
const printString = (string) => {
    setTimeout(() => {
      console.log(string);
    }, Math.floor(Math.random() * 100) + 1);
};
// error 
const printAll = () => {
  printString("A");
  printString("B");
  printString("C");

  // throw new Error("비상! 에러!")
};
// const pringAll = () => {
//   printString("A").then((value)=>{
//     console.log(value);
//     printString(123).then((value)=>{
//       console.log(value);
//       printString("C").then((value)=>{
//         console.log(value);
//       })
//     })
//   })
// }
printAll();

// console.log(
//   `아래와 같이 Promise를 통해 비동기 코드의 순서를 제어할 수 있습니다!`
// );

// 또한 Promise chaining과의 차이점도 확인해보세요.

// const promiseOne = () =>
//   new Promise((resolve, reject) => setTimeout(() => resolve("1초"), 1000));
// const promiseTwo = () =>
//   new Promise((resolve, reject) => setTimeout(() => resolve("2초"), 2000));
// const promiseThree = () =>
//   new Promise((resolve, reject) => setTimeout(() => resolve("3초"), 3000));

// 1. Promise chaining
// const result = [];
// promiseOne()
//   .then((value) => {
//     result.push(value);
//     return promiseTwo();
//   })
//   .then((value) => {
//     result.push(value);
//     return promiseThree();
//   })
//   .then((value) => {
//     result.push(value);
//     console.log(result);
//   });

// 2. Promise.all()
// Promise.all([promiseOne(), promiseTwo(), promiseThree()])
//   .then((value) => console.log(value))
//   .catch((err) => console.log(err));

// // 2-1. Promise.all()의 에러 발생시 동작방식
// Promise.all([
//   new Promise(
//     (resolve, reject) => setTimeout(() => reject(new Error("에러1"))),
//     1000
//   ),
//   new Promise(
//     (resolve, reject) => setTimeout(() => reject(new Error("에러2"))),
//     2000
//   ),
//   new Promise(
//     (resolve, reject) => setTimeout(() => reject(new Error("에러3"))),
//     3000
//   ),
// ])
//   .then((value) => console.log(value))
//   .catch((err) => console.log(err));

// async function f() {
//   return 1;
// }


function handleClick() {
  console.log('버튼에 비동기 이벤트를 넣는 방법');
}

let button = document.createElement('button');
button.textContent = 'button';
document.body.append(button);

button.addEventListener('click', handleClick());