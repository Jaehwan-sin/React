import React, { useState } from "react";

function ConfirmButton(props) {
    // 상태 변수 isConfirmed를 선언하고, 초기값을 false로 설정합니다.
    // isConfirmed는 버튼이 확인되었는지를 나타내며, 
    // setIsConfirmed는 이 값을 업데이트하는 함수입니다.
    const [isConfirmed, setIsConfirmed] = useState(false);

    // 버튼 클릭 시 호출되는 함수 handleConfirm을 정의합니다.
    // 이 함수는 현재 isConfirmed의 값을 반전시킵니다.
    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    // 이 컴포넌트는 버튼을 렌더링합니다.
    // 버튼의 onClick 이벤트에 handleConfirm 함수를 연결하여,
    // 버튼이 클릭될 때마다 isConfirmed의 값이 변경됩니다.
    // 또한, isConfirmed가 true일 때는 버튼이 비활성화(disabled)되고,
    // 버튼의 텍스트는 "확인됨"으로 변경됩니다.
    // isConfirmed가 false일 때는 버튼이 활성화되고, 텍스트는 "확인하기"로 표시됩니다.
    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

// ConfirmButton 컴포넌트를 외부에서 사용할 수 있도록 내보냅니다.
export default ConfirmButton;
