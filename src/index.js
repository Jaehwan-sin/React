import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import LandingPage from './chapter_09/LandingPage';


// 간단한 책 목록 나타내기 ch.03
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Library />
//     <App />
//   </React.StrictMode>
// );

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// 현재시간 나타내기 ch.04
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000);

// 댓글 목록 나타내기 ch.05,06
root.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>
);

// 입장, 퇴장 Count ch.07
root.render(
  <React.StrictMode>
    <Accommodate/>
  </React.StrictMode>
)

// 확인 버튼 이벤트 핸들러 ch.08
root.render(
  <React.StrictMode>
    <ConfirmButton/>
  </React.StrictMode>
)

// 조건부 렌더링 (로그인 여부에 따른 화면 표시) 
root.render(
  <React.StrictMode>
    <LandingPage/>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
