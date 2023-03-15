function computeWhenDouble(interestRate) {
  // TODO: 여기에 코드를 작성합니다.
// 원금 * 연이율 = n년의 원금
// 원금을 myMoney로 선언하고, 1을 임의로 할당한다.
// 시간(년)을 위한 변수를 선언한다.
// 원금이 2배 이상일 경우 > 년 수를 리턴한다.
// 원금이 2배 안될경우 > 계속 반복한다.
  let myMoney = 1;
  let year = 0;

  while(myMoney < 2) {
    myMoney = myMoney + (myMoney * interestRate/100);
    year++
  }
  return year;
}
