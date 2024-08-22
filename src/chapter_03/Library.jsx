import React from "react";
import Book from "./Book";

// Library 컴포넌트는 여러 개의 Book 컴포넌트를 포함하여, 도서관에서 책들을 보여주는 역할을 한다.
function Library(props) {
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300} />
            <Book name="처음 만난 AWS" numOfPage={400} />
            <Book name="처음 만난 리액트" numOfPage={500} />
        </div>
    );
}

export default Library; 