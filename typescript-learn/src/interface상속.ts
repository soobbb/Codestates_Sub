class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

//Person 클래스를 extends 키워드를 사용해 상속하여 새로운 클래스인 Student를 정의했습니다.
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying hard for the grade ${this.grade}.`);
  }
}
// 
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

const person: Developer = {
  language: "TypeScript",
  age: 20,
  name: "Anna",
}


//마찬가지로 여러 인터페이스를 상속받아 확장할 수도 있습니다.

interface FoodStuff {
  name: string;
}

interface FoodAmount {
  amount: number;
}

interface FoodFreshness extends FoodStuff, FoodAmount {
   isFreshed: boolean;
}

const food = {} as FoodFreshness;

food.name = "egg";
food.amount = 2;
food.isFreshed = true;