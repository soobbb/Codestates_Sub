function sumTo(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 별도의 최적화 기법(memoization)은 금지됩니다.
  if(num === 0)
    return 0;
  return num + sumTo(num-1);
}


// recursive case

// sumTo(5) = 5 + sumTo(4)
// sumTo(4) = 4 + sumTo(3)
// sumTo(3) = 3 + sumTo(2)
// ...
// => sumTo(num) = num + sumTo(num-1)

// base case
// sumTo(1) = 1
// sumTo(0) = 0
