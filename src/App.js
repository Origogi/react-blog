import { useState } from 'react';
import './App.css';

function App() {
  let [titles, setTitles] = useState([
    '남자 코트 추천',
    '강남 우동 맛집',
    '파이썬 독학',
  ]);

  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState('');

  function changeFirstTitle() {
    let result = [...titles];
    result[0] = '여자 코트 추천';
    setTitles(result);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'red', fontSize: '20px' }}>블로그임</h4>
      </div>

      {titles.map((title, i) => {
        return (
          <ListItem
            title={title}
            onTitleClick={() => {
              setModal(true);
              setModalTitle(title);
            }}
            key={i}
          />
        );
      })}

      <button
        onClick={() => {
          let result = [...titles];
          result.sort();
          setTitles(result);
        }}
      >
        가나다순정렬
      </button>
      <button onClick={changeFirstTitle}>타이틀 변경</button>
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        {modal ? 'modal hide' : 'modal show'}
      </button>
      {modal ? (
        <Modal
          color={'yellow'}
          title={modalTitle}
          callBack={changeFirstTitle}
        />
      ) : null}
    </div>
  );
}

function ListItem(props) {
  let [like, setLike] = useState(0);

  return (
    <div className="list">
      <h4 onClick={props.onTitleClick}>
        {props.title}{' '}
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
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.title}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button onClick={props.callBack}>글 수정</button>
    </div>
  );
}

export default App;
