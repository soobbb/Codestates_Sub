function computeSquareRoot(num) {
  let approx = 1;

  while (approx ** 2 !== num) {
    if (Number((approx * approx).toFixed(2)) === num) {
      break;
    }
    approx = (approx + num / approx) / 2;
  }

  return Number(approx.toFixed(2));
}
