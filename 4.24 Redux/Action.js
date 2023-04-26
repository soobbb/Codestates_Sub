/* 이번에는 Action 객체를 완성해봅시다!

Action은 어떻게 state를 변경할지 정의해놓은 객체입니다.
Action 객체는 Dispatch 함수를 통해 Reducer 함수 두번째 인자로 전달됩니다.

Action 객체 안의 type은 필수로 지정을 해주어야 합니다.
여기서 지정한 type에 따라 Reducer 함수에서 새로운 state를 리턴하게 됩니다.

- index.js
  안내한 순서에 따라 index.js를 완성해주세요!

1. 유어클래스에 있는 Action 예제 중 Action Creator 함수 increase를
   복사해오세요.
2. Action Creator 함수 decrease를 만들어 주세요. type은 'DECREASE'로
   설정해주세요.
3. 앞서 만든 Action Creator 함수를 다른 파일에도 사용하기 위해 export를
   붙혀주세요.*/

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 1
export const increase = () => {
  return {
    type: 'INCREASE'
  }
}
// 2
export const decrease = () => {
  return {
    type: 'INCREASE'
  }
}

const count = 1;

// Reducer를 생성할 때에는 초기 상태를 인자로 요구합니다.
const counterReducer = (state = count, action) => {
  // Action 객체의 type 값에 따라 분기하는 switch 조건문입니다.
  switch (action.type) {
    //action === 'INCREASE'일 경우
    case 'INCREASE':
      return state + 1;

    // action === 'DECREASE'일 경우
    case 'DECREASE':
      return state - 1;

    // action === 'SET_NUMBER'일 경우
    case 'SET_NUMBER':
      return action.payload;

    // 해당 되는 경우가 없을 땐 기존 상태를 그대로 리턴
    default:
      return state;
  }
  // Reducer가 리턴하는 값이 새로운 상태가 됩니다.
};

const store = createStore(counterReducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);