function powerOfTwo(num) {
  // TODO: 여기에 코드를 작성합니다.
  if(num === 1)
    return true;
    
  let power = 1;
  while(power < num){
    power = power * 2;
  }
    return power === num;
}

// 초기값을 1로 선언하고 반복문에 넣고 boolean타입으로 리턴!
// num = 1일때 true로 예외케이스 만듦