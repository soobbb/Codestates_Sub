function getIndex(arr, num) {
  // TODO: 여기에 코드를 작성합니다.
  arr.push(num);
  return arr.filter(function(el){
    return el < num;
    }).length;
}




function lessThan100(number) {
  if(typeof(number) !== "number")
  // 
    return false;
  return number < 100;
}

function getElementsLessThan100AtProperty(obj, property) {
  // TODO: 여기에 코드를 작성합니다.
  // 배열이 아니면 빈배열 리턴 
  // 100보다 작은 요소 filter사용해서 리턴
  if(!Array.isArray(obj[property])){
    return [];
  }
  return obj[property].filter(el => lessThan100(el));
}