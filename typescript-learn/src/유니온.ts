/* 코드를 작성한 뒤 터미널에 순서대로
1. tsc src/index.ts
2. node src/index.ts 
라고 치면 결과를 확인해볼 수 있습니다. */

function printAge(person: { name: string, age: number | string }) {
  let age: string;
  if (typeof person.age === 'number' || typeof person.age === 'string') {
    age = person.age.toString();
  }
  console.log(`${person.name}의 나이는 ${age}살 입니다.`);
}

const kimcoding = {
  name: '김코딩',
  age: 30,
};

const parhacker = {
  name: '박해커',
  age: '서른',
};

printAge(kimcoding);
printAge(parhacker);
