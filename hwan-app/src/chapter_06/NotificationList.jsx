import React from "react";
import Notification from "./Notification";

// 예약된 알림 목록을 배열로 정의합니다.
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

// 타이머 변수를 전역으로 선언합니다. 이 변수는 setInterval에서 사용됩니다.
var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        // 컴포넌트의 초기 state를 설정합니다. notifications 배열은 처음에 빈 배열로 시작합니다.
        this.state = {
            notifications: [],
        };
    }

    // 컴포넌트가 마운트된 후에 호출되는 생명주기 메서드입니다.
    componentDidMount() {
        // 현재 state에서 notifications를 가져옵니다.
        const { notifications } = this.state;

        // 타이머를 설정하여 1초마다 예약된 알림을 추가합니다.
        timer = setInterval(() => {
            // notifications 배열의 길이가 예약된 알림의 길이보다 짧은지 확인합니다.
            if (notifications.length < reservedNotifications.length) {
                // 알림 배열에서 현재 인덱스에 해당하는 알림을 추가합니다.
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);

                // state를 업데이트하여 새로운 알림을 반영합니다.
                this.setState({
                    notifications: notifications,
                });
            } else {
                // 모든 예약된 알림이 다 표시된 경우, notifications 배열을 초기화하고 타이머를 중지합니다.
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    // 컴포넌트가 언마운트될 때 호출되는 생명주기 메서드입니다.
    componentWillUnmount() {
        // 컴포넌트가 언마운트되기 전에 타이머가 설정되어 있다면 이를 중지합니다.
        if (timer) {
            clearInterval(timer);
        }
    }

    // 컴포넌트의 UI를 렌더링하는 메서드입니다.
    render() {
        return (
            <div>
                {/* state에 저장된 notifications 배열을 순회하며 각각의 알림을 Notification 컴포넌트로 렌더링합니다. */}
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification
                            key={notification.id} // 각 알림에 고유한 키를 부여합니다.
                            id={notification.id}  // 알림의 ID를 전달합니다.
                            message={notification.message} // 알림의 메시지를 전달합니다.
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;
