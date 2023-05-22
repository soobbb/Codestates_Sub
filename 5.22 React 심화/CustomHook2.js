// App.js
import { useState } from "react";
import useInput from "./util/useInput";
import Input from "./component/Input";
import "./styles.css";

export default function App() {
  
  const [fistValue, firstBind, firstReset] = useInput("");
  const [lastValue, lastBind, lastReset] = useInput("");
  const [nameArr, setNameArr] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameArr([...nameArr, `${fistValue} ${lastValue}`]);
    firstReset();
    lastReset();
  };

  return (
    <div className="App">
      <h1>Name List</h1>
      <div className="name-form">
        <form onSubmit={handleSubmit}>
          <Input labelText={"성"} value={firstBind} />
          <Input labelText={"이름"} value={lastBind} />
          <button>제출</button>
        </form>
      </div>
      <div className="name-list-wrap">
        <div className="name-list">
          {nameArr.map((el, idx) => {
            return <p key={idx}>{el}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
// util/useInput.js
import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const bind = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    }
  };

  const reset = () => {
    setValue(initialValue);
  };
  
//return 해야 하는 값은 배열 형태의 값
  return [value, bind, reset];
}

// export default useInput;

// conponent/Input.js

function Input({ labelText, value }) {
  //input을 컴포넌트로 만들어봅니다.
  //input도 컴포넌트도 만들게 되면 로직을 조금 더 고민을 해야 합니다.
  //고민을 한 번 해보고, 시도 해보세요!
  return (
    <div className="name-input">
      <label>{labelText}</label>
      <input {...value} type="text" />
    </div>
  );
}

// export default Input;
