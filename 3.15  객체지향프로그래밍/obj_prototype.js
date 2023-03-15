function Person(first, last, age, gender, interests) {

  // 속성과 메소드 정의
  this.first = first;
  this.last = last;
  this.age = age;
  this.gender = gender;
  this.interests = interests;
//...
}
var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
var person2 = Object.create(person1);
person1.constructor
person2.constructor

var person3 = new person1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);

person3.name.first
person3.age
person3.bio()