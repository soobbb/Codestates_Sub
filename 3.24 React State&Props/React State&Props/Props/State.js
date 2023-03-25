import React, { useState } from "react";
import "./styles.css";

function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);
  // isChecked, setIsChecked 는 useState 의 리턴값을 구조 분해 할당한 변수
  const handleChecked = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className="App">
      <input type="checkbox" checked={isChecked} onChange={handleChecked} />
      <span>{isChecked ? "Checked!!" : "Unchecked"}</span>
    </div>
  );
}

export default CheckboxExample;

function CheckboxExample() {
  // 1번 코드를 풀어쓰면
  const [isChecked, setIsChecked] = useState(false); // 1번
  // const [state 저장 변수, state 갱신 함수] = useState(상태 초기 값);
  <span>{isChecked ? "Checked!!" : "Unchecked"}</span>
  // 2번 코드와 같습니다.
  // const stateHookArray = useState(false); // 2번
  // const isChecked = stateHookArray[0];
  // const setIsChecked = stateHookArray[1];
}
// isChecked : state를 저장하는 변수
// setIsChecked : state isChecked 를 변경하는 함수
// useState : state hook
// false : state 초깃값



