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

// Notification 클래스 컴포넌트를 정의합니다. 이 컴포넌트는 단일 알림 메시지를 표시합니다.
class Notification extends React.Component {
    constructor(props) {
        super(props);

        // 컴포넌트의 초기 state를 빈 객체로 설정합니다. 이 컴포넌트는 상태를 사용하지 않습니다.
        this.state = {};
    }
    
    // 생명주기 메서드: 컴포넌트가 처음으로 DOM에 마운트될 때 호출됩니다.
    componentDidMount() {
        console.log(`${this.props.id} componentDidMount() called.`);
    }

    // 생명주기 메서드: 컴포넌트가 업데이트된 후에 호출됩니다.
    componentDidUpdate() {
        console.log(`${this.props.id} componentDidUpdate() called.`);
    }

    // 생명주기 메서드: 컴포넌트가 DOM에서 언마운트되기 직전에 호출됩니다.
    componentWillUnmount() {
        console.log(`${this.props.id} componentWillUnmount() called.`);
    }

    // 컴포넌트의 UI를 렌더링하는 메서드입니다.
    render() {
        return (
            // 스타일 객체를 사용하여 알림의 컨테이너(wrapper)를 스타일링합니다.
            <div style={styles.wrapper}>
                {/* props로 전달된 메시지를 텍스트로 표시합니다. */}
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;