function take(num, arr) {
  // TODO: 여기에 코드를 작성합니다.
  if(num === 0 || arr.length === 0){
    return [];
  }
  return [arr[0]].concat(take(num-1, arr.slice(1)))
}
