// 1. 하나의 엘리먼트 안에 모든 엘리먼트 포함
{/* <div>
  <div>
    <h1>Hello</h1>
  </div>
  <div>
    <h2>World</h2>
  </div>
</div>  */}

// 2. 엘리먼트 클래스 사용시 className으로 표기
{
/* <div class = "greeting">Hello!</div>  => X
<div className = "greeting">Hello!</div> => O 
*/ }

// 3. JavaScript 표현식 사용 시, 중괄호 ({})사용
// function App() {
//   const name = "Soob"

//   return (
//     <div>
//       Hello, {name}!
//     </div>
//   )
// }

// 4. 사용자 정의 컴포넌트는 대문자로 시작

// function Hello() {
//   return <div>Hello!</div>;
// }
// function HelloWorld() {
//   return <Hello />
// }

// 5. 조건부 렌더링은 if가 아닌 삼항연산자 사용

// <div>
//   {
//     (1+1 === 2) ? (<p>정답</p>) : (<p>탈락</p>)
//   }
// </div>

// 6. 여러 개의 HTML 엘리먼트를 표시할 때, map()함수 사용

// const posts =[
//   {id: 1, title: "Hello", content: "Welcome to learning React!"},
//   {id: 2, title: "Installation", content: "u can install React from npm."}
// ]

// function Blog() {
//   const content = posts.map((post)=>
//   <div key = {post.id}>
//     <h3>{post.title}</h3>
//     <p>{post.content}</p>
//   </div>
//   );
//   return (
//     <div>
//       {content}
//     </div>
//   )
// }


// const posts = [
//   { id: 1, title: "Hello World", content: "Welcome to learning React" },
//   { id: 2, title: "Installation", content: "You can install React from npm" }
// ];

// export default function App() {
//   // 한 포스트의 정보를 담은 객체 post를 매개변수로 받고
//   // obj를 JSX 표현식으로 바꿔 리턴해주는 함수 postToJSX
//   const PostToJSX = (post) => {
//     return (
//       <div key={post.id}>
//         <h3>{post.title}</h3>
//         <p>{post.content}</p>
//       </div>
//     );
//   };

//   // TODO: postToJSX 함수를 이용하여 에러를 해결하고 여러 개의 엘리먼트롤 표시해보세요.
//   return (
//     <div className="App">
//       <h1>Hello JSX</h1>
//       {posts.map(PostToJSX)}
//     </div>
//   );
// }

const posts = [
  { id : 1, title : 'Hello World', content : 'Welcome to learning React!' },
  { id : 2, title : 'Installation', content : 'You can install React via npm.' },
  { id : 3, title : 'reusable component', content : 'render easy with reusable component.' },
  // ...
  { id : 100, title : 'I just got hired!', content : 'OMG!' },
];

function Blog() {
  // postToElement라는 함수로 나누지 않고 아래와 같이 써도 무방합니다.
  const blogs = posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return <div className="post-wrapper">{blogs}</div>;
}
