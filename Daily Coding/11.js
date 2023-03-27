function removeExtremes(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length <= min.length) min = arr[i];
    if (arr[i].length >= max.length) max = arr[i];
  }

  arr.splice(arr.indexOf(min), 1);
  arr.splice(arr.indexOf(max), 1);

  return arr;
}
