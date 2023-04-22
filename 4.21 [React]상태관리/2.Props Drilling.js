import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const Container = styled.div`
  border: 5px solid green;
  padding: 10px;
  margin: 10px;
  position: relative;
`;

const Quantity = styled.div`
  text-align: center;
  color: red;
  border: 5px solid red;
  padding: 3px;
  font-size: 1.2rem;
`;

const Button = styled.button`
  margin-right: 5px;
`;

const Text = styled.div`
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: ${(props) => (props.size ? props.size : "1rem")};
  font-weight: ${(props) => (props.weight ? "700" : "inherit")};
`;

export default function App() {
  const number = useSelector((state) => state);
  console.log("Parents");
  return (
    <Container>
      <Text weight size="1.5rem">
        [Parents Component]
      </Text>
      <Text>
        Child4 컴포넌트에 있는 버튼을 통해 <br /> state를 변경하려고 합니다. ☺️
      </Text>
      <Text weight color="tomato">
        (Redux를 사용하는 경우)
      </Text>
      <Quantity>{`수량 : ${number}`}</Quantity>
      <Child1 />
    </Container>
  );
}

function Child1() {
  console.log("Child1");
  return (
    <Container>
      <Text>[Child 1 Component]</Text>
      <Child2 />
    </Container>
  );
}

function Child2() {
  console.log("Child2");
  return (
    <Container>
      <Text>[Child 2 Component]</Text>
      <Child3 />
    </Container>
  );
}

function Child3() {
  console.log("Child3");
  return (
    <Container>
      <Text>[Child 3 Component]</Text>
      <Child4 />
    </Container>
  );
}

function Child4() {
  const dispatch = useDispatch();
  const plusNum = () => {
    dispatch({ type: "Plus" });
  };

  const minusNum = () => {
    dispatch({ type: "Minus" });
  };
  console.log("Child4");
  return (
    <Container>
      <Text>[Child 4 Component]</Text>
      <Button onClick={plusNum}>👍</Button>
      <Button onClick={minusNum}>👎</Button>
    </Container>
  );
}
