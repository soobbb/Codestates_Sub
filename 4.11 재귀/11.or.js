function or(arr) {
  // TODO: 여기에 코드를 작성합니다.
    if(arr.length === 0){
      return false;
  }
  return arr[0] || or(arr.slice(1))
}
