# Rendering Elements in React

**Rendering Elements**는 React에서 UI를 화면에 표시하는 기본적인 방법을 의미합니다. 
이 문서에서는 React의 Rendering Elements에 대해 설명합니다.

## 1. React Element란?

- **React Element**는 화면에 표시할 UI의 작은 단위입니다.
- HTML 요소(`div`, `span`, `h1` 등)나 React 컴포넌트(`Book`, `Library` 등)를 나타내는 자바스크립트 객체이다.
- React Element는 **불변성**을 가지며, 한 번 생성된 엘리먼트는 변경할 수 없다.

### 예시
```javascript
const element = <h1>Hello, world!</h1>;

## 2. ReactDOM.render()
- ReactDOM.render() 함수는 React 엘리먼트를 특정 DOM 노드에 렌더링한다.
- 이 함수는 React 애플리케이션의 진입점 역할을 한다.

## 3. 업데이트와 재렌더링
- React 엘리먼트는 불변이므로, 화면을 업데이트하려면 새로운 엘리먼트를 생성하고 ReactDOM.render()를 다시 호출해야 합니다.
- React는 Virtual DOM을 사용하여, 변경된 부분만 실제 DOM에 반영함으로써 성능을 최적화합니다.

## 예시
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

- 이 코드는 1초마다 현재 시간을 포함한 h1, h2 엘리먼트를 갱신하여 다시 렌더링한다.

## 4. React Element의 특징
- 불변성: React 엘리먼트는 불변이며, 한 번 생성된 엘리먼트는 수정되지 않습니다.
- 간결함: React 엘리먼트는 UI를 간결하게 표현할 수 있습니다.
- Virtual DOM: React는 메모리상에서 가상 DOM을 사용하여 변경된 부분만 실제 DOM에 적용하여 효율성을 높입니다.