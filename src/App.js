import { useState } from 'react';
import './App.css';

function App() {
  let [titles, setTitles] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '파이썬 독학',
  ]);

  let [like, setLike] = useState(0);

  function onClick() {
    console.log('1');
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'red', fontSize: '20px' }}>블로그임</h4>
      </div>

      <div className="list">
        <h4>
          {titles[0]}{' '}
          <span
            onClick={() => {
              setLike(like + 1);
            }}
          >
            👍
          </span>{' '}
          {like}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{titles[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{titles[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <button
        onClick={() => {
          setTitles(['여자 코트 추천', titles[1], titles[2]]);
        }}
      >
        타이틀 변경
      </button>
    </div>
  );
}

export default App;
