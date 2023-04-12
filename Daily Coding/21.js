const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let num1 = 0;
  let num2 = 0;

  arr.sort((a, b) => a - b); // 오름차순

  num1 = arr[0] * arr[1] * arr[arr.length - 1]; // 음수 양수 둘다 있을 때
  num2 = arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3]; // 모든 숫자가 음수 이거나 양수일 때

  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
