class Iphone{
  constructor(color, series, version){
    this.color = color; // 속성
    this.series = series; // 속성
    this.version = version; // 속성
  }
  camera(){           // 메서드
    console.log(this.series + "의 인물모드가 실행되었습니다.");
  }
  // 나: 프로토타입 
}
// 나: 생성자 함수(constructor)

let Iphone14 = new Iphone("black", "Iphone14", "1.4");  // 인스탄스
console.log(Iphone14.color);  // 속성
Iphone14.camera(); // 메서드
Iphone14.__proto__;
Iphone.prototype;
Iphone.prototype === Iphone14.__proto__;
