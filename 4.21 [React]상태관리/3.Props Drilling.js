import * as React from 'react';
import './style.css';
import styled from 'styled-components';
import { useState } from 'react';

const Component = styled.div`
  border: 3px solid green;
  border-radius: 10px;
  flex-grow: 1;
  line-height: 30px;
  text-align: center;
  margin: 10px;
  >button{
    margin-left: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-contents: center;
`;

export default function App() {
  const [greeting, setGreeting] = useState('Hello');

  console.log('App');
  return (
    <Container>
      <Component>
        App
        <Container>
          <Child1 greeting={greeting} setGreeting={setGreeting} />
          <Child2 greeting={greeting} setGreeting={setGreeting} />
        </Container>
      </Component>
    </Container>
  );
}

function Child1({ greeting, setGreeting }) {
  console.log('Child1');
  return (
    <Component>
      Child1
      <Container>
        <Child3 greeting={greeting} setGreeting={setGreeting} />
        <Child4 />
      </Container>
    </Component>
  );
}

function Child2({ greeting, setGreeting }) {
  console.log('Child2');
  return (
    <Component>
      Child2
      <Container>
        <Child5 />
        <Child6 greeting={greeting} setGreeting={setGreeting} />
      </Container>
    </Component>
  );
}

function Child3({ greeting, setGreeting }) {
  console.log('Child3');
  return <Component>Child3 : {greeting} </Component>;
}

function Child4() {
  console.log('Child4');
  return <Component>Child4</Component>;
}

function Child5() {
  console.log('Child5');
  return <Component>Child5</Component>;
}

function Child6({ greeting, setGreeting }) {
  console.log('Child6');
  return (
    <Component>
      Child6
      <button onClick={() => setGreeting(greeting + '!')}>👋</button>
    </Component>
  );
}
