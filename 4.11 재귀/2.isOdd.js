function isOdd(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 0일때 짝수 1일때 홀수라고 생각하고 재귀함수를 써서 계속 -2씩 해주면
  // 마지막엔 0이거나 1이 나오게 되서 아래에 조건에 걸리게 된다.
  if(num === 0)
    return false;
  else if(num === 1)
    return true;
  else if(num < 0)
    return isOdd(-num);
  return isOdd(num-2);
}
