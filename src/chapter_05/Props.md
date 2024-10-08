# React Props 이해하기

## Props란 무엇인가?
Props는 "properties"의 줄임말로, React에서 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달하기 위해 사용하는 속성입니다.
Props는 읽기 전용이며, 컴포넌트 간 데이터 전달의 중요한 역할을 합니다.

## Props의 주요 특징
- **불변성**: Props는 자식 컴포넌트에서 변경할 수 없습니다.
- **단방향 데이터 흐름**: 데이터는 부모에서 자식으로만 전달됩니다.
- **재사용성**: Props를 사용하면 동일한 컴포넌트를 다양한 데이터로 재사용할 수 있습니다.

## Props 사용 방법
Props는 컴포넌트를 호출할 때 HTML 속성처럼 전달됩니다.

```javascript
function Greeting(props) {
    return <h1>안녕하세요, {props.name}님!</h1>;
}

function App() {
    return <Greeting name="Alice" />;
}
```

## Props와 상태(State)
- **Props는 부모에서 자식으로 전달되는 반면, 상태는 컴포넌트 내부에서 관리되며 컴포넌트가 직접 변경할 수 있습니다.**
Props는 변하지 않는 데이터를 전달하는 데, 상태는 변할 수 있는 데이터를 관리하는 데 사용된다.

## 결론
Props는 React에서 컴포넌트의 유연성과 재사용성을 높이는 핵심 개념이다. 
Props를 통해 컴포넌트 간의 데이터 흐름을 효율적으로 관리하고, 다양한 데이터를 동적으로 표현할 수 있습니다.