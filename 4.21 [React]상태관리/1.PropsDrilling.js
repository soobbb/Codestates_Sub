import React, { useState } from 'react';
import styled from 'styled-components';

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
  color: ${(props) => (props.color ? props.color : 'black')};
  font-size: ${(props) => (props.size ? props.size : '1rem')};
  font-weight: ${(props) => (props.weight ? '700' : 'inherit')};
`;

export default function App() {
  const [number, setNumber] = useState(1);

  const plusNum = () => {
    setNumber(number + 1);
  };

  const minusNum = () => {
    setNumber(number - 1);
  };
  console.log('Parents');
  return (
    <Container>
      <Text weight size="1.5rem">
        [Parents Component]
      </Text>
      <Text>
        Child4 컴포넌트에 있는 버튼을 통해
        <br /> state를 변경하려고 합니다.. 🤮
      </Text>
      <Text weight color="tomato">
        Props Driling이 발생!!
      </Text>
      <Quantity>{`수량 : ${number}`}</Quantity>
      <Child1 plusNum={plusNum} minusNum={minusNum} />
    </Container>
  );
}

function Child1(
  {
    /* props로 전달받은 plusNum, minusNum를 가져오세요 */
    plusNum, minusNum 
  }
) {
  console.log('Child1');
  return (
    <Container>
      <Text>[Child 1 Component]</Text>
      {/* plusNum, minusNum 함수를 props로 전달해주세요! */}
      <Button onClick={plusNum}>👍</Button>
      <Button onClick={minusNum}>👎</Button>
      <Child2 />
    </Container>
  );
}

function Child2(
  {
    /* props로 전달받은 plusNum, minusNum를 가져오세요 */
    plusNum, minusNum 
  }
) {
  console.log('Child2');
  return (
    <Container>
      <Text>[Child 2 Component]</Text>
      {/* plusNum, minusNum 함수를 props로 전달해주세요! */}
      <Button onClick={plusNum}>👍</Button>
      <Button onClick={minusNum}>👎</Button>
      <Child3 />
    </Container>
  );
}

function Child3(
  {
    /* props로 전달받은 plusNum, minusNum를 가져오세요 */
    plusNum, minusNum 
  }
) {
  console.log('Child3');
  return (
    <Container>
      <Text>[Child 3 Component]</Text>
      {/* plusNum, minusNum 함수를 props로 전달해주세요! */}
      <Button onClick={plusNum}>👍</Button>
      <Button onClick={minusNum}>👎</Button>
      <Child4 />
    </Container>
  );
}

function Child4({ plusNum, minusNum }) {
  console.log('Child4');
  return (
    <Container>
      <Text>[Child 4 Component]</Text>
      <Button onClick={plusNum}>👍</Button>
      <Button onClick={minusNum}>👎</Button>
    </Container>
  );
}

