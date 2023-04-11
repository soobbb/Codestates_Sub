function arrSum (arr) {
  // 빈 배열을 받았을 때 0을 리턴하는 조건문
  //   --> 가장 작은 문제를 해결하는 코드 & 재귀를 멈추는 코드
  if (arr.length === 0) {
    return 0
  }

  // 배열의 첫 요소 + 나머지 요소가 담긴 배열을 받는 arrSum 함수
  //   --> 재귀(자기 자신을 호출)를 통해 문제를 작게 쪼개나가는 코드
	return arr.shift() + arrSum(arr)
}
let arr = [1,2,3,4,5]

console.log(arrSum(arr));


function fac(n){
  if(n === 1 ) 
    return 1;
  return n * fac(n-1);
}