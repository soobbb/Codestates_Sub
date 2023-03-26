function insertDash(str) {
  // TODO: 여기에 코드를 작성합니다.
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] % 2 !== 0 && str[i] % 2 !== 0) res += "-" + str[i];
    else res += str[i];
  }
  return res;
}
