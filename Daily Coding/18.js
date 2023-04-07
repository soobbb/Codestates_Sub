function numberSearch(str) {
  let cnt= 0;
  let sum = 0;

  if(str.length === 0) return 0;
  
  for(let i = 0; i < str.length; i++){
    let numbering = Number(str[i]);
    if(isNaN(numbering)) 
      cnt++;
    else sum += numbering;
  }

  return Math.round(sum / cnt);

}