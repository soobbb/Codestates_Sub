function convertListToObject(arr) {
  // TODO: 여기에 코드를 작성합니다.
  let obj = {};
  if (arr.length === 0) return obj;
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i][0]] === undefined && arr[i].length !== 0)
      obj[arr[i][0]] = arr[i][1];
  }
  return obj;
}
const arr = [
  ["make", "Ford"],
  ["model", "Mustang"],
  ["year", "1964"],
  ["make", "Bill"],
];

console.log(convertListToObject(arr));
