function findMatryoshka(matryoshka, size) {
  // TODO: 여기에 코드를 작성합니다.
  // 인형이 있고 사이즈가 객체 안으로 계속 교체되다가 같아지면 그 사이즈 리턴
  // 위 조건이 안되면 false
  if (matryoshka.size === size){
    return true;
  } 
  else if( matryoshka.matryoshka){
    return findMatryoshka(matryoshka.matryoshka, size)
  }
  else {
    return false;
  }
}


const matryoshka = {
  size: 10,
  matryoshka: {
    size: 9,
    matryoshka: null,
  },
};
let output = findMatryoshka(matryoshka, 9);
console.log(output); 


// recursive case => 우리가 찾고있는 마트료시카가 아닐때, 안에 또 다른 마트료시카 있을때! => 마트료시카를 쪼개는 것

// base case => 우리가 찾고있는 사이즈의 마트료시카를 찾았을 때!