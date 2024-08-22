// React 라이브러리를 불러옵니다. React를 사용하여 컴포넌트를 만들고 렌더링할 수 있습니다.
import React from "react";

// Clock이라는 함수형 컴포넌트를 정의합니다. 이 컴포넌트는 props를 인자로 받습니다.
function Clock(props) {
    // 이 컴포넌트가 렌더링할 내용을 반환합니다. JSX를 사용하여 UI를 정의합니다.
    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;
