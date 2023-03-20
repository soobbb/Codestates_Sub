function firstCharacter(str) {
  // TODO: 여기에 코드를 작성합니다.
  if (str === "") 
    return "";

  let arr = str.split(" ");
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res = res + arr[i][0];
  }
  return res;
}
