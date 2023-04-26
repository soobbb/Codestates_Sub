function arrSum(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if(arr.length === 0)
    return 0
  return arr.shift() + arrSum(arr.length-1)
}

// function arrSum(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }

//   // const [head, ...tail] = arr;
//   const head = arr[0];
//   const tail = arr.slice(1);
//   return head + arrSum(tail);
// }

let output = arrSum([-1, -2, 1, 3]);
console.log(output); // --> 1