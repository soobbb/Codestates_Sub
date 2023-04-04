function isIsogram(str) {
  // TODO: 여기에 코드를 작성합니다.
  let real_str = str.toUpperCase();
  let temp = '';

  for(let i of real_str){
    if(temp.includes(i)) 
      return false;
    else temp += i;
  }
  return true;
}
