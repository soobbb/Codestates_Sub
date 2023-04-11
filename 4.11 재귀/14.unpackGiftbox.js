function unpackGiftbox(giftBox, wish) {
  if (giftBox.length === 0 || wish === "") {
    return false;
  }
  for (let i = 0; i < giftBox.length; i++) {
    if (giftBox[i] === wish) 
      return true;
    if (Array.isArray(giftBox[i])) {
      if (unpackGiftbox(giftBox[i], wish)) 
        return true;
    }
  }
  return false;
}


// recursive case -> 선물상자 안에 선물상자가 또 있네? -> unpackGiftbox 재귀호출

// base case -> 내가 찾고있는 선물이 있다 -> true
// -> 끝까지 봤는데 없더라 -> false