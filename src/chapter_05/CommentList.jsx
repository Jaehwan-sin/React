import React from "react";
import Comment from "./Comment";

// 여러 개의 댓글 데이터를 저장한 배열입니다. 각 객체는 name(이름)과 comment(댓글 내용)을 포함합니다.
const comments = [
    {
        name: "이인제",
        comment: "안녕하세요, 소플입니다.",
    },
    {
        name: "유재석",
        comment: "리액트 재미있어요~!",
    },
    {
        name: "강민경",
        comment: "저도 리액트 배워보고 싶어요!!",
    },
];

// CommentList라는 함수형 컴포넌트를 정의합니다.
// 이 컴포넌트는 props를 인자로 받지만, 이 코드에서는 사용하지 않고 있습니다.
function CommentList(props) {
    // 이 컴포넌트가 렌더링할 내용을 반환합니다.
    // comments 배열의 각 요소에 대해 map() 메서드를 사용하여 Comment 컴포넌트를 생성하고 렌더링합니다.
    return (
        <div>
            {comments.map((comment) => {
                // Comment 컴포넌트를 렌더링하고, props로 name과 comment를 전달합니다.
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;
