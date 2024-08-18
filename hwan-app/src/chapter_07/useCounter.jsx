import React, { useState } from "react";

// useCounter는 초기 카운트 값을 인자로 받아 카운트 값을 관리하는 커스텀 훅입니다.
function useCounter(initialValue) {
    // count 상태 변수와 count를 업데이트하는 setCount 함수를 선언합니다.
    const [count, setCount] = useState(initialValue);

    // count를 1씩 증가시키는 함수입니다.
    const increaseCount = () => setCount((count) => count + 1);

    // count를 1씩 감소시키는 함수입니다. count가 0보다 작아지지 않도록 Math.max를 사용합니다.
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    // 현재 count 값과 increaseCount, decreaseCount 함수를 배열로 반환합니다.
    return [count, increaseCount, decreaseCount];
}

export default useCounter;
