import React, { useState } from "react";
import "./styles.css";

const currentUser = "김코딩";

function Twittler() {
  const [tweets, setTweets] = useState([
    {
      uuid: 1,
      writer: "김코딩",
      date: "2020-10-10",
      content: "안녕 리액트"
    },
    {
      uuid: 2,
      writer: "박해커",
      date: "2020-10-12",
      content: "좋아 코드스테이츠!"
    }
  ]);

  const addNewTweet = (newTweet) => {
    setTweets([...tweets, newTweet]);
  }; // 이 상태 변경 함수가 NewTweetForm에 의해 실행되어야 합니다.

  return (
    <div>
      <div>작성자: {currentUser}</div>
      <NewTweetForm />
      <ul id="tweets">
        {tweets.map((t) => (
          <SingleTweet key={t.uuid} writer={t.writer} date={t.date}>
            {t.content}
          </SingleTweet>
        ))}
      </ul>
    </div>
  );
}

function NewTweetForm({ onButtonClick }) {
  const [newTweetContent, setNewTweetContent] = useState("");

  const onTextChange = (e) => {
    setNewTweetContent(e.target.value);
  };

  const onClickSubmit = () => {
    let newTweet = {
      uuid: Math.floor(Math.random() * 10000),
      writer: currentUser,
      date: new Date().toISOString().substring(0, 10),
      content: newTweetContent
    };
    // TDOO: 여기서 newTweet이 addNewTweet에 전달되어야 합니다.
  };

  return (
    <div id="writing-area">
      <textarea id="new-tweet-content" onChange={onTextChange}></textarea>
      <button id="submit-new-tweet" onClick={onClickSubmit}>
        새 글 쓰기
      </button>
    </div>
  );
}

function SingleTweet({ writer, date, children }) {
  return (
    <li className="tweet">
      <div className="writer">{writer}</div>
      <div className="date">{date}</div>
      <div>{children}</div>
    </li>
  );
}

export default Twittler;
