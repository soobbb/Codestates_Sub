function getLengthOfLongestElement(arr) {
  // 여기에 코드를 입력하세요
  return arr.reduce(function (a, b) {
    if (a.length >= b.length) {
      return a.length;
    } else {
      return b.length;
    }
  }, 0);
}

let output = getLengthOfLongestElement(['one', 'two', 'no']);
console.log(output); // --> 2


