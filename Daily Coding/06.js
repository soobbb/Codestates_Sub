function letterCapitalize(str) {
  // TODO: 여기에 코드를 작성합니다.
  let res = str.split(" "); //["Javascript","","Is","Sexy",""]

  for(let i = 0; i < res.length; i++){
    if(res[i].length > 0)
      res[i] = res[i][0].toUpperCase() + res[i].substr(1)
  }
  str = res.join(" ")
  return str;
}