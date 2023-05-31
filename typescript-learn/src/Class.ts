class Person1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(
      `안녕하세요, 제 이름은 ${this.name}이고, ${this.age}살 입니다.`
    );
  }
}

const person = new Person1('Alice', 30);
person.greet(); // "안녕하세요, 제 이름은 Alice이고, 30살 입니다."