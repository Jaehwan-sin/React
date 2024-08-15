import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name : "신재환",
        comment : "안녕하세요, 신재환입니다.",
    },
    {
        name : "신재환2",
        comment : "안녕하세요, 신재환2입니다.",
    },
    {
        name : "신재환3",
        comment : "안녕하세요, 신재환3입니다.",
    },
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;