  // function Car1(brand, name, color){
  //   this.brand = brand;
  //   this.name = name;
  //   this.color = color;
  // }
  
  // Car1.prototype.drive = function(){
  //   console.log(this.name + " is driving");
  // }

  // let avante = new Car1("hyundai", "avante", "black");
  // avante.color;
  // avante.drive();

  
class Car{
  constructor(brand, name, color, length){
    this.brand = brand;
    this.name = name;
    this.color = color;
    this.length = length;
  }
  drive(){
    console.log(this.name + " is driving");
  }
}

let mini = new Car("bmw", "mini", "white","length");
mini.drive();


// console.log(Car.length)
// console.log(mini.length); // mini의 key값이 length의 벨류값을 불러온 거임.. 아까 this.length가 없었을 때 undefined가 뜨는 이유는 당연했다...
// console.log(mini.length.length); // mini의 벨류값의 렝스를 불러온거임
// console.log(Object.keys(mini).length); // 객체의 키값의 렝스를 불러옴ㅋ

// let arr1 = ["code", "states", "pre"];
// arr1.length; // 3
// arr1.push("course")// 새 element 추가
// console.log(arr1)

// let arr2 = new Array ("code", "states", "pre");
// console.log(arr2.length);
// arr2.push("course")
// console.log(arr2)



