import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
//받아온 prop에 따라 조건부 렌더링이 가능합니다.
const Button1 = styled.button`
  background: ${(props) => (props.skyblue ? "skyblue" : "white")};
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Button1>Button1</Button1>
      <Button1 skyblue>Button1</Button1>
    </>
  );
}
