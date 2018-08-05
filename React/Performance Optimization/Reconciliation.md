# Reconciliation
리액트는 기본적으로 다음 세 가지 경우 중 하나에 해당할 때 컴포넌트 인스턴스를 리렌더링(`render` 메소드를 재호출)한다.

* setState 호출에 따른 내부 state 변화
* 부모 컴포넌트가 리렌더링되었을 때
* forceUpdate 호출에 따른 강제 업데이트

이후 리액트는 내부적으로 **render 메소드의 재호출로 반환된 값을 이전 반환값과 비교한 다음, 변경이 발생된 부분만을 실제 DOM 업데이트에 반영**시킨다.

## `React.PureComponent`와 `shouldComponentUpdate`
컴포넌트 인스턴스에서 실제로 변경된 부분이 없음에도 불구하고 리렌더링이 발생되고 있는 것은 분명한 낭비이자 불필요한 과정이다. 그렇기 때문에 리액트에서는, 컴포넌트 인스턴스에 실제로 변경된 내용이 없을 경우에 render 메소드가 재호출되지 않게 함으로써 불필요한 비교 과정을 생략할 수 있는 방법을 제공하고 있다.

### `React.PureComponent`
클래스형 컴포넌트를 정의할 때 `React.Component`가 아닌 `React.PureComponent`를 상속받도록 하면, 변경된 부분이 없을 경우 불필요한 리렌더링 과정을 생략할 수 있다. `React.PureComponent`를 상속받은 컴포넌트는, 새로 전달받게 될 `props` 객체와 `state` 객체를 각각의 이전 값과 Shallow Comparison 방식으로 비교하여 render 메소드의 재호출 여부를 결정하게 된다.

### `shouldComponentUpdate`
`React.PureComponent`는 대부분의 경우에 훌륭히 동작하지만, Shallow Comparison 방식을 사용하기 때문에 `props` 또는 `state` 객체가 내부적으로 두 단계 이상 중첩된 객체를 가질 경우에 문제가 될 수 있다. 내부에 중첩된 객체의 상태가 변경되었더라도, Shallow Comparison을 통한 비교 방식에서는 한 단계 깊이의 속성에 대하여 참조가 동일하면 true를 반환하기 때문이다.

이런 경우라면, `render` 메소드 직전에 호출되는 `shouldComponentUpdate`에서 개발자가 직접적인 비교 과정을 거쳐서 해당 컴포넌트 인스턴스의 리렌더링 여부를 결정할 수 있다. `shouldComponentUpdate`는 앞에서부터 차례대로 `nextProps`와 `nextState`를 인자로 전달받으므로, 이들을 참조하면 새로 전달받게 될 `props` 또는 `state`에 대한 정보를 얻을 수 있다. 

