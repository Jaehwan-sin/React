import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    },
};

class Notification extends React.Component {
    // 컴포넌트의 생성자 함수입니다. props를 받아와서 부모 클래스의 생성자에 전달합니다.
    constructor(props) {
        super(props);

        // 컴포넌트의 상태(state)를 정의합니다. 여기서는 비어 있습니다.
        this.state = {};
    }

    // 컴포넌트가 처음으로 DOM에 마운트된 직후에 호출됩니다.
    // 이 메서드는 컴포넌트가 화면에 나타난 직후에 실행될 코드를 작성할 수 있는 곳입니다.
    componentDidMount() {
        // 컴포넌트가 마운트되었을 때 콘솔에 메시지를 출력합니다.
        console.log(`${this.props.id} componentDidMount() called.`);
    }

    // 컴포넌트가 업데이트된 직후에 호출됩니다. 여기서 "업데이트"는 props나 state가 변경된 경우를 의미합니다.
    componentDidUpdate() {
        // 컴포넌트가 업데이트되었을 때 콘솔에 메시지를 출력합니다.
        console.log(`${this.props.id} componentDidUpdate() called.`);
    }

    // 컴포넌트가 DOM에서 제거되기 직전에 호출됩니다.
    // 이 메서드는 컴포넌트가 언마운트되기 직전에 실행될 코드를 작성할 수 있는 곳입니다.
    componentWillUnmount() {
        // 컴포넌트가 언마운트되었을 때 콘솔에 메시지를 출력합니다.
        console.log(`${this.props.id} componentWillUnmount() called.`);
    }

    // 컴포넌트가 화면에 렌더링될 내용을 반환하는 메서드입니다.
    render() {
        return (
            // wrapper 스타일이 적용된 div 요소를 렌더링합니다.
            <div style={styles.wrapper}>
                {/* props로 전달된 message 값을 표시하는 span 요소입니다. 
                    이 텍스트에 messageText 스타일이 적용됩니다. */}
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;