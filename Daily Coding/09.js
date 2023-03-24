function ABCheck(str) {
  // code goes here
  let str_lower = str.toLowerCase();
  for (let i = 0; i < str_lower.length; i++) {
    if (
      (str_lower[i] === "a" && str_lower[i + 4] === "b") ||
      (str_lower[i] === "b" && str_lower[i + 4] === "a")
    )
      return true;
  }
  return false;
}
