function arrLength(arr) {
  // TODO: 여기에 코드를 작성합니다.
  if(arr.isEmpty())
    return 0;
  return 1 + arrLength(arr.slice(1));
}
