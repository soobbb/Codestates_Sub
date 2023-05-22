// // App.js
// import "./styles.css";
// import useFetch from "/src/util/useFetch";

// export default function App() {
//   const fetchData = useFetch("data.json");

//   return (
//     <div className="App">
//       <h1>To do List</h1>
//       <div className="todo-list">
//         {fetchData &&
//           fetchData.todo.map((el) => {
//             return <li key={el.id}>{el.todo}</li>;
//           })}
//       </div>
//     </div>
//   );
// }
// // useFetch.js
// //app.js에서 함수를 가져와서 Custom hook을 만들어 봅시다.
// //hooks.js의 이름도 알맞게 바꿔주세요.
// import { useEffect, useState } from "react";

// const useFetch = (fetchUrl) => {
//   const [data, setData] = useState();

//   useEffect(() => {
//     fetch("data.json", {
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       }
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .then((myJson) => {
//         setData(myJson);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [fetchUrl]);
//   return data;
// };
// export default useFetch;
