import { useState } from 'react';
import './App.css';

function App() {
  let post = '강남 우동 맛집';
  let [title1, setTitle1] = useState('남자 코트 추천');
  let [title2, setTitle2] = useState('강남 우동 맛집');
  let [title3, setTitle3] = useState('파이썬 독학');

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'red', fontSize: '20px' }}>블로그임</h4>
      </div>

      <div className="list">
        <h4>{title1}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title2}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title3}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
