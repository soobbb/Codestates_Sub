function fibonacci(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 별도의 최적화 기법(memoization)은 금지됩니다.
  if(num === 0)
    return 0;
  if(num === 1)
    return 1;
  return fibonacci(num-1)+fibonacci(num-2)
}
output = fibonacci(9);
console.log(output); // --> 34