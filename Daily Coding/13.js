function readVertically(arr) {
  let result = '' 
  let wordLength = arr.map(el => el.length) //배열 안에 담긴 문자열의 길이가 담긴 배열 
  let maxLength = Math.max(...wordLength) // 해당 배열에서 가장 큰 값을 구해줌(가장 긴 문자열 길이)

  for(let i = 0; i < maxLength; i++) {         //가장 긴 문자열 길이만큼 반복
    for (let j = 0; j< arr.length ; j++) {     //배열의 요소 갯수만큼 반복한다. 
      if (arr[j][i]) {                         //해당하는 인덱스 값이 있을경우에만 
        result += arr[j][i]                    //값을 담아준다. 
      }
    }
  }
  return result
}



