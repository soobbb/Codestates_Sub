/* 작성 후 터미널에
1. tsc src/index.ts
2. node src/index.js
를 입력하시면 확인할 수 있습니다. */

/* boolean형 */
// let isDone = false;
// let isShow = true;
let isDone: boolean = false;
let isShow: boolean = true;
console.log(isDone);
console.log(isShow);

/* 숫자형 */
// let num1 = 7;
// let num2 = 0.6878;
let num1: number = 7;
let num2: number = 0.6878;
console.log(num1);
console.log(num2);

/* 문자형 */
// let str = 'hello';
let str: string = 'hello';
console.log(str);

/* 숫자형 배열의 타입을 정하는 2가지 방법 */
// let list1 = [1, 2, 3];
// let list2 = [1, 2, 3];
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

console.log(list1);
console.log(list2);

/* 문자형 배열의 타입을 정하는 2가지 방법 */
// let list3 = ['banana', 'apple', 'mango'];
// let list4 = ['banana', 'apple', 'mango'];
let list3: string[] = ['banana', 'apple', 'mango'];
let list4: Array<string> = ['banana', 'apple', 'mango'];
console.log(list3);
console.log(list4);

/* 튜플 */
// let list5 = [1, 'banana', true];
let list5: [number, string, boolean] = [1, 'banana', true];
console.log(list5);

/* 객체형 타입을 정하는 2가지 방법 */
let obj: object = {};
let obj2: {name: string, age: number, isDeveloper: boolean} = {
  name: 'kimcoding',
  age: 20,
  isDeveloper: true,
};

console.log(obj);
console.log(obj2);
