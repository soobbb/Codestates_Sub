// 이번에는 Dispatch 함수를 완성해봅시다!

// dispatch 함수는 이벤트 핸들러 안에서 사용됩니다.
// 그리고 dispatch 함수는 action 객체를 Reducer 함수로 전달해줍니다.

// - App.js
//   안내한 순서에 따라 App.js를 완성해주세요!

// 1. import { useDispatch } from 'react-redux';를 통해
//    react-redux에서 useDispatch를 불러와주세요.
// 2. import { increase,decrease } from './index.js';를 통해
//    Action Creater 함수 increase, decrease를 불러와주세요.
// 3. useDispatch의 실행 값을 변수에 저장해서 dispatch 함수를
//    사용합니다.(주석을 해제한 후 콘솔결과를 확인해보세요!)
// 4. 유어클래스 dispatch 예제를 참고해서 이벤트 핸들러 안에서 dispatch를
//    통해 action 객체를 Reducer 함수로 전달해주세요.
// 5. 유어클래스 dispatch 예제를 참고해서 이벤트 핸들러 안에서 dispatch를
//    통해 action 객체를 Reducer 함수로 전달해주세요.

import React from "react";
import "./style.css";
// 1
import { useDispatch } from "react-redux";
// 2
import { increase, decrease } from "./index.js";
export default function App() {
  // 3
  const dispatch = useDispatch();
  console.log(dispatch);

  const plusNum = () => {
    // 4
    dispatch(increase());
  };

  const minusNum = () => {
    // 5
    dispatch(decrease());
  };

  return (
    <div className="container">
      <h1>{`Count: ${1}`}</h1>
      <div>
        <button className="plusBtn" onClick={plusNum}>
          +
        </button>
        <button className="minusBtn" onClick={minusNum}>
          -
        </button>
      </div>
    </div>
  );
}
