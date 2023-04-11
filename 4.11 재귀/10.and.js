function and(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if(arr.length === 0){
    return true;
  }
  return arr[0] && and(arr.slice(1))
}



let a = true;
let b = false;
let c = true;
let d = false;
console.log(a&&b&&d&&c)

// let output = and([true, true, true]);
// console.log(output); // --> true