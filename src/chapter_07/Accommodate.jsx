import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

// 최대 수용 가능 인원을 상수로 정의
const MAX_CAPACITY = 10;

// Accommodate라는 함수형 컴포넌트를 정의
function Accommodate(props) {
    // isFull이라는 상태 변수를 선언. 초기값은 false
    // setIsFull 함수는 isFull 상태를 변경하는 데 사용됩니다.
    const [isFull, setIsFull] = useState(false);

    // useCounter 커스텀 Hook을 사용하여 count, increaseCount, decreaseCount를 받아옵니다.
    // count는 현재 인원 수, increaseCount는 인원 증가 함수, decreaseCount는 인원 감소 함수입니다.
    const [count, increaseCount, decreaseCount] = useCounter(0);

    // 첫 번째 useEffect Hook은 컴포넌트가 렌더링될 때마다 호출됩니다.
    // 이 Hook은 의존성 배열이 없기 때문에 컴포넌트가 마운트될 때와 업데이트될 때마다 실행됩니다.
    useEffect(() => {
        console.log("======================");
        console.log("useEffect() is called."); 
        console.log(`isFull: ${isFull}`); 
    });

    // 두 번째 useEffect Hook은 count 상태가 변경될 때마다 호출됩니다.
    // 의존성 배열에 count가 포함되어 있어 count 값이 변경될 때만 실행됩니다.
    useEffect(() => {
        // 현재 인원이 최대 수용 인원을 초과하거나 같으면 isFull 상태를 true로 설정합니다.
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`); 
    }, [count]); // count가 변경될 때마다 이 useEffect가 실행됩니다.

    // 컴포넌트가 렌더링하는 JSX를 반환합니다.
    return (
        <div style={{ padding: 16 }}>
            {/* 현재 수용된 인원 수를 표시합니다. */}
            <p>{`총 ${count}명 수용했습니다.`}</p>

            {/* 입장 버튼을 클릭하면 increaseCount 함수가 호출되어 인원이 증가합니다.
                만약 isFull 상태가 true이면, 입장 버튼은 비활성화됩니다. */}
            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            {/* 퇴장 버튼을 클릭하면 decreaseCount 함수가 호출되어 인원이 감소합니다. */}
            <button onClick={decreaseCount}>퇴장</button>

            {/* 만약 isFull 상태가 true이면, 정원이 가득찼다는 경고 메시지가 빨간색으로 표시됩니다. */}
            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;
