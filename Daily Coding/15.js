function modulo(num1, num2) {
  // TODO: 여기에 코드를 작성합니다.
  if (num2 === 0) {
    return "Error: cannot divide by zero";
  }
  while (num1 >= num2) {
    num1 = num1 - num2;
  }
  return num1;
}
