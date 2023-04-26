import styled from "styled-components";

const BlueButton = styled.button`
  background-color: blue;
  color: white;
`;

//만들어진 컴포넌트를 재활용해 컴포넌트를 만들 수 있습니다.
const BigBlueButton = styled(BlueButton)`
  padding: 10px;
  margin-top: 10px;
`;

//재활용한 컴포넌트를 재활용할 수도 있습니다.
const BigRedButton = styled(BigBlueButton)`
  background-color: red;
`;

export default function App() {
  return (
    <>
      <BlueButton>Blue Button</BlueButton>
      <br />
      <BigBlueButton>Big Blue Button</BigBlueButton>
      <br />
      <BigRedButton>Big Red Button</BigRedButton>
    </>
  );
}
