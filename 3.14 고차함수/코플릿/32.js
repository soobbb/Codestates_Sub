function sumOfArraysInArray(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // 리듀스 -> 1차원 배열
  // 필터 -> 각 배열의 요소가 숫자인 친구만 모으기
  // 리듀수 -> 다 더하기

  return arr.reduce((acc, cur)=> acc.concat(cur))
  .filter(el=>typeof el === "number")
  .reduce((acc, cur) => acc + cur, 0)
  
}