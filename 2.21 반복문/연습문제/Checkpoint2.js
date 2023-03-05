function check(parameter) {
  // number type
  if (typeof parameter === "number") {
    console.log("숫자");
  }
  // string type
  if (typeof parameter === "string") {
    console.log("스트링");
  }
  // boolean type
  if (typeof parameter === "boolean") {
    console.log("불린");
  }
}
check("data");

let a = "자바스크립트".slice(0, 2);
console.log(a);
let b = "자바스크립트".slice(0);
console.log(b);
let c = "code";

let d = "states";
console.log(d);
console.log(typeof d);
let e = c.concat(d);
let f = Math.ceil(4.2);
let g = true;
g = !c;

function greeting() {
  console.log("hello");
}
greeting();

function checkStringLength(parameter) {
  if (parameter.length === 3) {
    return "three length";
  } else if (parameter.length === 4) {
    return "four length";
  } else if (parameter.length === 5) {
    return "five length";
  }

  return "another length";
}
console.log(checkStringLength("hello"));

function add(num){
    let sum = 0;
    let i = 1;

    while(i <= num){
        sum += i;
        i++;
    }
    return sum;
}
console.log(add(3));