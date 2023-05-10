function paveBox(boxes) {
  // 1. 퇴장 인원 수를 요소로 갖는 배열 answer 선언
  // 2. 배열 boxes의 모든 요소를 순회하면서, 퇴장 인원수가 기록된 뒤,
  //    가장 많은 인원이 퇴장한 요소가 최대 퇴장 인원이 된다.
  let answer = [];

  // 3. 모든 인원이 포장을 마치고, 진열대가 빌 때까지 반복해야하므로,
  //    배열 boxes의 모든 박스가 포장을 마치고 퇴장 할때까지 반복한다.
  while (boxes.length > 0) {
    // 4. 각 박스에서 확인할 것은 맨 앞의 박스의 포장 개수보다
    //	  많은 손님이 있는지 반복해서 확인한다.
    let finishIndex = boxes.findIndex((fn) => boxes[0] < fn);
    // 5. 만약, 첫번재 손님의 포장할 박스가 가장 많다면,
    // 5.1. 첫번째 손님이 박스 포장을 마친 뒤 모든 손님이 나갈 수 있으므로
    //      배열 answer에 모든 손님의 인원수를 기록한다.
    // 5.2. 첫번째 손님과 함께 모든 손님이 진열대를 빠져 나갔으므로,
    //      배열 boxes는 빈 상태가 된다.
    if (finishIndex === -1) {
      answer.push(boxes.length);
      boxes.splice(0, boxes.length);
      // 6. 만약, 첫번째 손님의 박스보다 많은 박스를 포장 중인 손님이 있다면,
      // 6.1. 그 앞 손님까지 첫번째 손님과 퇴장하게 되므로,
      //	    배열 answer에 퇴장한 인원수록 요소로 추가한다.
      // 6.2. 첫번째 손님부터 n번째 손님까지 퇴장 했으므로,
      //	    그만큼 배열에서 뺀다.
    } else {
      answer.push(finishIndex);
      boxes.splice(0, finishIndex);
    }
  }

  // 결과물을 반환합니다.
  return Math.max(...answer);
}
