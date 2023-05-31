/* 코드를 작성한 뒤 
1. tsc src/index.ts
2. node src/index.js
순으로 터미널에 입력하여 결과를 확인해 주세요.
*/

//Todo 타입을 정의합니다.
type Todo1 = {
  id: number;
  title: string;
  isDone: boolean;
};

//Todo 타입을 사용해 객체를 정의합니다.
const show: Todo1 = {
  id: 1,
  title: 'hello',
  isDone: true,
};

//Todo 타입을 사용한 객체를 출력해봅니다.
function getTodo(show: Todo1) {
  console.log(show);
}

getTodo(show);
