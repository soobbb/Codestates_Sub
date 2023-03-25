import "./styles.css";
import React, { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    alert(name);
  };
  return (
    <div className="App">
      <h1>Event handler practice</h1>
      <input type="text" value={name} onChange={handleChange}></input>
      <button onClick={handleClick}>Button</button>
      {/* <button onClick={() => alert(name)}>Button</button> */}
      <h3>{name}</h3>
    </div>
  );
}
export default NameForm;