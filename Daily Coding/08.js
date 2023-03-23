function convertDoubleSpaceToSingle(str) {
  // TODO: 여기에 코드를 작성합니다.
  return str.split("  ").join(" ");
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output);

// function convertDoubleSpaceToSingle(str) {
//   let result = '';
//   let before = '';
//   for (let i = 0; i < str.length; i++) {
//     // 직전의 문자가 공백이고, 현재의 문자도 공백인 경우
//     // 즉, 현재의 문자가 두 번째 공백인 경우(에만), 무시한다.
//     if (before !== ' ' || str[i] !== ' ') {
//       result = result + str[i];
//     }
//     before = str[i];
//   }
//   return result;
// }

function convertDoubleSpaceToSingle(str) {
  // TODO: 여기에 코드를 작성합니다.
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " && str[i + 1] === " ") {
    } else result = result + str[i];
  }
  return result;
}

let output1 = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output1);
