# React State에 대한 이해

React에서 **state**는 컴포넌트의 동적인 데이터를 관리하는 객체입니다. 
컴포넌트 내부에서 선언되며, 이 데이터를 변경하면 컴포넌트는 다시 렌더링됩니다. 이를 통해 사용자와의 상호작용을 반영한 UI 업데이트가 가능합니다.

## 코드 예시: NotificationList

```javascript
class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: [], // 초기 상태 설정
        };
    }

    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({ notifications }); // 상태 업데이트
            } else {
                this.setState({ notifications: [] }); // 상태 초기화
                clearInterval(timer);
            }
        }, 1000);
    }

    componentWillUnmount() {
        if (timer) {
            clearInterval(timer); // 타이머 정리
        }
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => (
                    <Notification key={notification.id} id={notification.id} message={notification.message} />
                ))}
            </div>
        );
    }
}

## State의 역할

**초기화:** constructor에서 this.state를 사용해 초기 상태를 정의합니다. 여기서는 notifications 배열을 빈 상태로 초기화합니다.
**업데이트:** this.setState()를 사용해 상태를 업데이트합니다. 예시에서는 1초마다 새로운 알림을 추가하거나, 알림이 모두 추가된 경우 상태를 초기화합니다.
**자동 리렌더링:** 상태가 업데이트되면 컴포넌트는 자동으로 다시 렌더링됩니다. 여기서는 notifications 배열에 따라 새로운 알림이 화면에 표시됩니다.
**정리:** 컴포넌트가 언마운트되기 전에 componentWillUnmount에서 타이머를 정리하여 메모리 누수를 방지합니다.