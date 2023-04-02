let foo = "hello";

function bar() {
  foo = "world";
  console.log(foo); // bar는 Side Effect를 발생시킵니다!
}

console.log(bar())
console.log(foo)
