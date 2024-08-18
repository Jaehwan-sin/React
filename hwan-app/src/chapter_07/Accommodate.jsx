import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

// MAX_CAPACITY는 수용 가능한 최대 인원을 나타냅니다.
const MAX_CAPACITY = 10;

function Accommodate(props) {
    // isFull 상태 변수와 setIsFull 함수를 선언합니다. 초기값은 false입니다.
    const [isFull, setIsFull] = useState(false);
    
    // useCounter 훅을 사용하여 count 상태와 입장 및 퇴장 기능을 가져옵니다. 초기 count 값은 0입니다.
    const [count, increaseCount, decreaseCount] = useCounter(0);

    // 첫 번째 useEffect는 컴포넌트가 렌더링될 때마다 호출됩니다. 
    useEffect(() => {
        console.log("======================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });

    // 두 번째 useEffect는 count 값이 변경될 때마다 호출됩니다.
    // 현재 count가 MAX_CAPACITY에 도달했는지 확인하여 isFull 상태를 업데이트합니다.
    // 또한 count의 현재 값을 콘솔에 출력합니다.
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]); // count가 변경될 때만 이 useEffect가 실행됩니다.

    // 컴포넌트가 렌더링하는 부분입니다.
    // 현재 count 값을 표시하고, 입장 및 퇴장 버튼을 렌더링합니다.
    // 입장 버튼은 isFull이 true일 때 비활성화(disabled)됩니다.
    // isFull이 true일 경우 정원이 가득 찼음을 알리는 메시지를 빨간색으로 표시합니다.
    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>

            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;
