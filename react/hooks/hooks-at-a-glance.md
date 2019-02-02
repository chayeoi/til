# Hooks 가볍게 훑어보기

## Hooks 소개

Hooks은 React에서 state의 사용, 라이프사이클 메서드에서 처리하던 작업 등 클래스 컴포넌트에서만 가능했던 여러가지 일들을 함수형 컴포넌트에서도 사용할 수 있게 해주는 새 기능이다. 곧 정식 릴리즈될 예정인 v16.8.0부터 공식적으로 사용할 수 있을 것으로 보인다.

## v16.8.0으로 버전을 올리면 기존에 클래스로 작성되었던 컴포넌트를 모두 함수형 컴포넌트로 변경해야 할까?

그렇지 않다. Hooks은 완전히 선택사항일 뿐이다. React 코어 팀은 React에서 클래스 컴포넌트를 없앨 계획을 조금도 갖고 있지 않다. 그들은 기존 코드 베이스는 그대로 둔 채로, 앞으로 새로 작성할 코드에 Hooks을 점진적으로 도입하는 방법을 추천하고 있다.

## 동기

React 코어 팀이 수년간 일해오면서 마주쳤던, 얼핏보기에는 리액트와 관련없어보이는 여러 문제들을 Hooks을 도입함으로써 해결할 수 있었다고 한다.

### 1. 컴포넌트 간에 상태를 갖는 로직을 재활용하는 일이 어렵다

React에서 어떤 행동을 재사용 가능하게 만들기 위해 `render props` 또는 `higher-order components`와 같은 기법을 활용할 수 있다. 그러나 이런 기법들은 컴포넌트를 재구조화하게 만들고, 꽤 귀찮으며 코드를 이해하기 어렵게 만든다. 또한 만일 React 개발자 도구에서 계층 구조를 확인해보면 이들로 인해 생겨난 "wrapper hell"을 맞이하게 되는 문제가 발생한다.

그러나 이제 Hooks을 사용함으로써, 더 이상 컴포넌트 계층 구조를 변경할 필요없이 상태를 갖는(stateful) 로직을 재활용하고 독립적으로 테스트할 수 있게 되었다.

### 2. 컴포넌트가 복잡해질수록 이해하기 어려워진다

컴포넌트의 덩어리가 점점 커짐에 따라 각 라이프사이클 메서드에 서로 관련이 없는 로직이 함께 묶여있는 일이 발생하곤 한다. 예를 들어, 데이터를 받아오는 로직을 `componentDidMount`와 `componentDidUpdate`에서 수행할 수 있다. 그런데 이에 더해 이벤트 리스너를 추가하는 로직이 `componentDidMount`에, 해당 이벤트 리스너를 제거하는 로직이 `componentWillUnmount`에 더해짐으로써 `componentDidMount`는 서로 관련이 없는 로직을 한 곳에 포함하게 된다. 이로 인해 코드는 점점 더 일관성을 잃어가고 잠재적 버그가 발생할 확률은 올라간다.

하지만 Hooks을 사용하면 라이프사이클 메서드에 따라 로직을 묶는 것이 아닌, 데이터를 받아오는 로직끼리 묶고 이벤트 리스너와 관련된 로직끼리 묶는 등 연관된 로직끼리 분리해서 코드를 작성할 수 있게 된다. 

### 3. 클래스 컴포넌트는 사람과 기계에게 혼동을 준다

클래스 컴포넌트는 리액트를 배우려는 사람에게 큰 장벽으로 작용한다. 아직 표준이 아닌 `class fields` 문법을 사용하지 않는 이상, 자바스크립트에서 `this`가 동작하는 방법과 이벤트 핸들러를 바인딩하는 방식을 이해해야하기 때문이다.

또한, 정확히 뭔지는 잘 모르겠지만 React 코어 팀은 최근 [Prepack](https://prepack.io/)을 사용하여 [component folding](https://github.com/facebook/react/issues/7323)을 실험해 긍정적인 결과를 얻었다고 한다. 그런데 여기서 클래스 컴포넌트가 이러한 최적화를 더 느리게 만드는 방향으로 의도치 않은 패턴을 유도하는 사실을 발견되는 등의 문제가 있었다.

이러한 문제들을 해결하기 위해, 클래스 없이도 React의 여러 특징들을 활용할 수 있도록 하는 Hooks을 고안하게 되었다.

## Built-in Hooks

### State Hook

함수형 컴포넌트에 지역 state를 추가하기 위해 `useState` Hook을 사용할 수 있다. 이 Hook을 사용하여 만들어진 state는 리렌더링에 걸쳐 지속적으로 유지된다. 이전 상태를 새 상태와 병합하지 않는다는 점만 빼면 `this.setState`와 매우 유사하게 동작한다. 한 컴포넌트에서 `useState`를 여러 번 사용할 수 있으며, 클래스 컴포넌트에서 상태는 항상 객체로 존재헀던 것과 달리 반드시 값이 객체일 필요는 없다.

```jsx
import React, { useState } from 'react'

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}
```

### Effect Hook

`useEffect`는 함수형 컴포넌트 내에서 사이드 이펙트를 갖는 작업을 수행할 수 있게 한다. 클래스 컴포넌트의 각종 라이프사이클 메서드에서 했던 작업들을 이 Hook을 사용하여 수행할 수 있다. React는 기본적으로 최초 렌더링을 포함하여 렌더링이 일어날 때마다 이펙트를 실행한다. 또한 `useEffect`에 인자로 전달된 함수가 다시 함수를 반환하게 함으로써, 이펙트가 수행된 뒤에 어떻게 "clean up"할 지를 명시할 수 있다.

```jsx
import { useState, useEffect } from 'react'

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null)

  function handleStatusChange(status) {
    setIsOnline(status.isOnline)
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)

    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
    }
  })

  if (isOnline === null) {
    return 'Loading...'
  }
  return isOnline ? 'Online' : 'Offline'
}
```

### 기타 Hooks

State Hook, Effect Hook 외에도 다양한 빌트인 Hooks가 존재한다.자세한 내용은 [공식 문서](https://reactjs.org/docs/hooks-reference.html)를 참고한다.

* `useContext`
* `useReducer`
* `useCallback`
* `useMemo`
* `useRef`
* `useImperativeHandle`
* `useLayoutEffect`
* `useDebugValue`

## Hooks에 대한 규칙

Hooks은 자바스크립트의 일반적 함수라는 사실에 더해, 추가적으로 두 가지의 규칙을 더 갖는다.

1. Hooks은 오직 최상위 레벨에서만 호출해야 한다. 즉, 루프나 조건문 또는 내부 함수 안에서 호출하지 말아야 한다.
2. 리액트 함수형 컴포넌트 내에서만 호출해야 한다. 일반 자바스크립트 함수 안에서 호출하지 말아야 한다.

이러한 규칙을 강요하도록 할 수 있는 `[linter 플러그인](https://www.npmjs.com/package/eslint-plugin-react-hooks)` 역시 제공되고 있다.

## 커스텀 Hooks 작성하기

Hooks은 상태를 갖는 로직을 여러 컴포넌트에 걸쳐 재활용할 수 있는 방법을 제공한다. Built-in Hooks에 더해, 폼 핸들링, 애니메이션, 타이머 설정 등 다양한 케이스에 대한 커스텀 Hooks을 작성한 후 여러 곳에서 재사용할 수 있다.

```jsx
import { useState, useEffect } from 'react'

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null)

  function handleStatusChange(status) {
    setIsOnline(status.isOnline)
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange)
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange)
    }
  })

  return isOnline
}

function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id)

  if (isOnline === null) {
    return 'Loading...'
  }
  return isOnline ? 'Online' : 'Offline'
}

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id)

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  )
}
```

## 참고 문서

* [Introducing Hooks - reactjs.org](https://reactjs.org/docs/hooks-intro.html)
* [Hooks at a Glance - reactjs.org](https://reactjs.org/docs/hooks-overview.html)
* [Hooks API Reference - reactjs.org](https://reactjs.org/docs/hooks-reference.html)
