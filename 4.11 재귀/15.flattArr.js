function flattenArr(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if(arr.length === 0)
    return [];
  if(Array.isArray(arr[0]))
    return flattenArr([...arr[0], ...arr.slice(1)]);
  else
    return [arr[0]].concat(flattenArr(arr.slice(1)));
}


// recursive case 
// 배열의 요소를 쭉 살펴보다가 배열을 만나면? -> 풀어주기


// base case ->
// 배열의 요소를 쭉 살펴보다가 끝까지 배열을 안만나면? -> 결과 리턴!
