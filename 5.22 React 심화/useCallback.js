import { useState, useCallback } from "react";
import "./styles.css";
import List from "./List";

export default function App() {
  const [input, setInput] = useState(1);
  const [light, setLight] = useState(true);

  const theme = {
    backgroundColor: light ? "White" : "grey",
    color: light ? "grey" : "white"
  };

  const getItems = useCallback(() => {
    return [input + 10, input + 100];
  }, [input]);

  const handleChange = (event) => {
    if (Number(event.target.value)) {
      setInput(Number(event.target.value));
    }
  };

  return (
    <>
      <div style={theme} className="wall-paper">
        <input
          type="number"
          className="input"
          value={input}
          onChange={handleChange}
        />
        <button
          className={(light ? "light" : "dark") + " button"}
          onClick={() => setLight((prevLight) => !prevLight)}
        >
          {light ? "dark mode" : "light mode"}
        </button>
        <List getItems={getItems} />
      </div>
    </>
  );
}
