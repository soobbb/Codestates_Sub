import React, { useState } from "react";

export default function ParentComponent() {
  const [value, setValue] = useState("날 바꿔줘!");

  const handleChangeValue = () => {
    setValue("보여줄게 완전히 달라진 값");
  };
  // 자식 컴포넌트에 부모의 상태를 바꿀 수 있는 함수를 전달
  return (
    <div>
      <div>값은 {value} 입니다</div>
      <ChildComponent
        handleChangeValue={handleChangeValue}
        setValue={setValue}
      />
    </div>
  );
}

function ChildComponent({ handleChangeValue, setValue }) {
  const [text, setText] = useState("");
  const handleClick = () => {
    // 이 버튼을 눌러서 부모의 상태를 바꿀 순 없을까?
    setValue(text);
  };

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleClick}>값 변경</button>
    </>
  );
}
