import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

// 타이머 변수를 전역으로 선언합니다. 이는 setInterval로 설정된 타이머를 관리하는 데 사용됩니다.
var timer;

// NotificationList라는 클래스형 컴포넌트를 정의합니다. 이 컴포넌트는 여러 개의 알림(Notification)을 관리하고 표시합니다.
class NotificationList extends React.Component {
    // 생성자 메서드로 컴포넌트의 초기 state를 설정합니다.
    constructor(props) {
        super(props);

        // 초기 state를 빈 notifications 배열로 설정합니다.
        this.state = {
            notifications: [],
        };
    }

    // 컴포넌트가 처음으로 DOM에 마운트된 직후에 호출됩니다.
    // 여기서 타이머를 설정하고, 예약된 알림을 순차적으로 state에 추가하는 작업을 수행합니다.
    componentDidMount() {
        const { notifications } = this.state; // 현재 state의 notifications 배열을 가져옵니다.
        // 타이머를 설정하여 1초(1000ms)마다 새로운 알림을 추가합니다.
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length; // 현재 알림 배열의 길이를 인덱스로 사용합니다.
                // reservedNotifications에서 새로운 알림을 가져와 notifications 배열에 추가합니다.
                notifications.push(reservedNotifications[index]);
                // state를 업데이트하여 UI에 변경된 notifications 배열을 반영합니다.
                this.setState({
                    notifications: notifications,
                });
            } else {
                // 모든 알림이 추가된 경우, notifications 배열을 비워 다시 시작할 수 있도록 합니다.
                this.setState({
                    notifications: [],
                });
                // 타이머를 중지합니다.
                clearInterval(timer);
            }
        }, 1000);
    }

    // 컴포넌트가 DOM에서 제거되기 직전에 호출됩니다.
    // 여기서는 타이머가 설정되어 있으면 이를 해제하여 메모리 누수를 방지합니다.
    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }

    // 컴포넌트가 화면에 렌더링될 내용을 반환하는 메서드입니다.
    render() {
        return (
            // notifications 배열에 있는 각 알림을 Notification 컴포넌트로 렌더링합니다.
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification
                            key={notification.id} // 각 Notification 컴포넌트에 고유한 key를 부여하여 React가 효율적으로 렌더링할 수 있게 합니다.
                            id={notification.id} // 알림의 id를 Notification 컴포넌트에 전달합니다.
                            message={notification.message} // 알림의 메시지를 Notification 컴포넌트에 전달합니다.
                        />
                    );
                })}
            </div>
        );
    }
}


export default NotificationList;