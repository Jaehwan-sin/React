// React에서 useState Hook을 불러옵니다. 이 Hook을 사용하여 함수형 컴포넌트에서 상태를 관리할 수 있습니다.
import React, { useState } from "react";

// useCounter라는 커스텀 Hook을 정의합니다. 이 Hook은 초기 카운트 값을 인자로 받아옵니다.
function useCounter(initialValue) {
    // count 상태 변수를 선언하고, 그 값을 관리하는 setCount 함수를 정의합니다.
    // 초기값은 인자로 받은 initialValue로 설정됩니다.
    const [count, setCount] = useState(initialValue);

    // increaseCount 함수는 현재 count 값을 1 증가시키는 함수입니다.
    const increaseCount = () => setCount((count) => count + 1);

    // decreaseCount 함수는 현재 count 값을 1 감소시키는 함수입니다.
    // 이 함수는 count 값이 0보다 작아지지 않도록 Math.max 함수를 사용하여 최소값을 0으로 설정합니다.
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    // 이 커스텀 Hook은 현재 count 값과 증가/감소 함수(increaseCount, decreaseCount)를 배열로 반환합니다.
    return [count, increaseCount, decreaseCount];
}

export default useCounter;
