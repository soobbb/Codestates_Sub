/* 코드를 작성한 뒤 
1. tsc src/index.ts
2. node src/index.js
순으로 터미널에 입력하여 결과를 확인해 주세요.
*/

/* 실습 1 */

interface User {
  name: string;
  age: number;
}

//Student 인터페이스를 작성합니다.
interface Student extends User{
  skill: string;
}

//Student 인터페이스를 받는 kimcoding을 완성합니다.
//kimcoding의 이름은 김코딩이고, 나이는 20세이며, 학년은 1입니다.
const kimcoding: Student = {
  name: "kim",
  age: 20,
  skill: "ract"
};

console.log(kimcoding);

// interface Color {
//   name: string;
//   brightness: number;
// }

// interface ClothesType {
//   kind: string;
//   length: number;
// }

// // Closet 인터페이스를 작성합니다.
// interface Closet {
//   skirt: {
//     color: Color;
//     type: ClothesType;
//   };
// }

// // Closet 인터페이스를 받는 skirt를 완성합니다.
// // skirt는 노란색이며, 밝기는 0이고, 종류는 치마이며 길이는 5 정도로 중간이며 여름용입니다.
// const skirt: Closet['skirt'] = {
//   color: {
//     name: '노란색',
//     brightness: 0,
//   },
//   type: {
//     kind: '치마',
//     length: 5,
//   },
// };

// console.log(skirt);
/* 코드를 작성한 뒤 
1. tsc src/index.ts
2. node src/index.js
순으로 터미널에 입력하여 결과를 확인해 주세요.
*/

/* 실습 2 */

interface Color {
  name: string;
  brightness: number;
}

interface ClothesType {
  kind: string;
  length: number;
}

//Closet 인터페이스를 작성합니다.
interface Closet extends Color, ClothesType {
  season: string;
}

//Closet 인터페이스를 받는 skirt를 완성합니다.
//skirt는 노란색이며, 밝기는 0이고, 종류는 치마이며 길이는 5 정도로 중간이며 여름용입니다.
const skirt = {} as Closet;
skirt.name = "노란색";
skirt.brightness = 0;
skirt.kind = "치마";
skirt.length = 5;


console.log(skirt);
