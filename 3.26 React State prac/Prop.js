import "./styles.css";

const App = () => {
  const itemOne = "React를";
  const itemTwo = "배우고 있습니다.";

  return (
    <div className="App">
      {/* Learn 컴포넌트에 itemOne 과 itemTwo 를
      props 로 전달하세요 */}
      <Learn value={itemOne + itemTwo} />
      <Learn />
    </div>
  );
};

const Learn = (props) => {
  // 전달받은 props 를 아래 <div> tag 사이에 사용하여
  // "React를 배우고 있습니다" 라는 문장이 렌더링되도록 컴포넌트를 완성하세요
  return (
    <div className="Learn">
      <p>{props.value}</p>
    </div>
  );
};

export default App;
