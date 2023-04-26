/* 이번에는 Reducer 함수를 완성해봅시다!

Reducer함수 첫번째 인자에는 기존 state가 들어오게 됩니다.
첫번째 인자에는 default value를 꼭 설정해주셔야 합니다!
그렇지 않을 경우 undefined가 할당되기 때문에 그로 인한 오류가 발생할 수 있습니다.
(https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#creating-the-root-reducer)
두번째 인자에는 action 객체가 들어오게 됩니다.

action 객체에서 정의한 type에 따라 새로운 state를 리턴합니다.
새로운 state는 전역 변수 저장소 Store에 저장되게 됩니다.

- index.js
  안내한 순서에 따라 index.js를 완성해주세요!

1. 유어클래스에 있는 Reducer 예제를 복사해 임의 함수 reducer를
   대체해주세요.
2. 가져온 conterReducer를 createStore에 다시 넣어주세요.
3. 주석을 해제해주세요.
4. 예제를 잘 불러오셨다면 정상적으로 화면이 나오는 것을 확인할 수 있습니다! */

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// 1
const count = 1;

// Reducer를 생성할 때에는 초기 상태를 인자로 요구합니다.
const counterReducer = (state = count, action) => {
  // Action 객체의 type 값에 따라 분기하는 switch 조건문입니다.
  switch (action.type) {
    //action === 'INCREASE'일 경우
    case "INCREASE":
      return state + 1;

    // action === 'DECREASE'일 경우
    case "DECREASE":
      return state - 1;

    // action === 'SET_NUMBER'일 경우
    case "SET_NUMBER":
      return action.payload;

    // 해당 되는 경우가 없을 땐 기존 상태를 그대로 리턴
    default:
      return state;
  }
};
// Reducer가 리턴하는 값이 새로운 상태가 됩니다.
// 2
const store = createStore(counterReducer);

root.render(
  // 3
  <Provider store={store}>
    <App />
  </Provider>
);
