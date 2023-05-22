import React, { useState, useMemo } from "react";
import "./styles.css";
import { add } from "./add";

export default function App() {
  const [name, setName] = useState("");
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  const answer = useMemo(() => add(val1, val2), [val1, val2]);

  return (
    <div>
      <input
        className="name-input"
        placeholder="이름을 입력해주세요"
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="value-input"
        placeholder="숫자를 입력해주세요"
        value={val1}
        type="number"
        onChange={(e) => setVal1(Number(e.target.value))}
      />
      <input
        className="value-input"
        placeholder="숫자를 입력해주세요"
        value={val2}
        type="number"
        onChange={(e) => setVal2(Number(e.target.value))}
      />
      <div>{answer}</div>
    </div>
  );
}
