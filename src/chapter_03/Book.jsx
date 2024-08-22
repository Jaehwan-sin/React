import React from "react";

// Book 컴포넌트는 개별 책의 정보를 표시하는 역할을 한다.
// props를 통해 전달된 책의 이름(name)과 총 페이지 수(numOfpage)를 화면에 출력한다.
function Book(props) {
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
            <h2>{`이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}</h2>
        </div>
    );
} 

export default Book;