
function transformFirstAndLast(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let obj = {};
  for(let i = 0; i < arr.length; i++){
    obj[arr[0]] = arr[arr.length -1]
  }
  return obj
}
let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
let output = transformFirstAndLast(arr);
console.log(output);