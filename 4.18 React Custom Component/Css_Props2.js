import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

//받아온 prop 값을 그대로 이용해 렌더링할 수도 있습니다
const Button1 = styled.button`
  background: ${(props) => (props.color ? props.color : "white")};
`;
//다음과 같은 형식으로도 활용할 수 있습니다.
const Button2 = styled.button`
  background: ${(props) => props.color || "white"};
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Button1>Button1</Button1>
      <Button1 color="orange">Button1</Button1>
      <Button1 color="tomato">Button1</Button1>
      <br />
      <Button2>Button2</Button2>
      <Button2 color="pink">Button2</Button2>
      <Button2 color="turquoise">Button2</Button2>
    </>
  );
}
