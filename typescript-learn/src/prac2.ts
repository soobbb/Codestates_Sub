/* 작성 후 터미널에
1. tsc src/index.ts
2. node src/index.js
라고 치면 결과를 확인해볼 수 있습니다. */

/* 1-1번 */
function sumNumber(a: number, b: number): number {
  return a + b;
}

/* 1-2번 */
const sumNumber2 = (a: number, b: number): number => {
  return a + b;
};

/* 2번 */
let sumString = (first: string, last: string): string => {
  return `${first} ${last}`;
};

console.log(sumString('hi', 'codestates'));

/* 3번 */
let sumString2 = (first: string, last?: string): string => {
  return `${first} ${last}`;
};
// console.log(sumString2('hi', undefined));

//아래 코드도 동작하도록 구현해봅시다.
console.log(sumString2('hi'));
console.log(sumString2('hi', 'hello'));
/* 4번 */
let printError = () => {
  console.log('error message');
};
