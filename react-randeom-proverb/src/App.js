import logo from './logo.svg';
import './App.css';

function App() {
  const proverbs = ["좌절감으로 배움을 늦추지 마라.", "일단 똥을 싸라. 그러면 유명해질 것이다."]
  
  const getRandomIndex = (length) =>{
    return parseInt(Math.random() * length)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> 파일을 고치고 저장하면 새로운 명언을 볼 수 있읍니다.
        </p>  
        {proverbs[getRandomIndex(proverbs.length)]} 
      </header>
    </div>
  );
}

export default App;
