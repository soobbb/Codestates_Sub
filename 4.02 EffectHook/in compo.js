import { useEffect, useState } from "react";
import "./styles.css";
import { getProverbs } from "./storageUtil";

export default function App() {
  const [proverbs, setProverbs] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    console.log("언제 effect 함수가 불릴까요?");
    const result = getProverbs();
    setProverbs(result);
  }, []);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="App">
      필터
      <input type="text" value={filter} onChange={handleChange} />
      <ul>
        {proverbs
          .filter((prvb) => {
            return prvb.toLowerCase().includes(filter.toLowerCase());
          })
          .map((prvb, i) => (
            <Proverb saying={prvb} key={i} />
          ))}
      </ul>
    </div>
  );
}

function Proverb({ saying }) {
  return <li>{saying}</li>;
}
