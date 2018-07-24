# Redux Intergration

로케이션 값이 변경되었음에도 업데이트가 발생하지 않는 컴포넌트는 다음 두 가지 경우 중 하나에 속한다.

1. `react-redux`의 `connect` 함수로 감싸여진 Wrapped 컴포넌트(`connect()(Comp)`)
2. `<Route component={Comp} />`처럼 `Route`로 감싸여지지 않은 `BrowserRouter` 외부에 존재하는 컴포넌트

지금부터 위 두 가지 상황에서 왜 업데이트가 발생하지 않는 것인지 살펴볼 것이다.

간략한 설명을 위해 편의상 지금부터 `connect()` 함수의 호출로 반환된 컴포넌트를 Connected 컴포넌트, `connect` 함수에 의해 감싸진 컴포넌트를 Wrapped 컴포넌트, `Route` 컴포넌트로 감싸진 컴포넌트를 Route 컴포넌트라고 부르겠다.

```jsx
// Foo: Wrapped 컴포넌트
// Bar: Connected 컴포넌트
const Foo = () => (<div>I am Foo.</div>)
const Bar = connect(mapStateToProps)(Foo)

// Baz: Route 컴포넌트
<Route component={Baz} />
```

먼저, 첫 번째 경우에서 Wrapped 컴포넌트에 업데이트가 발생하지 않는 이유를 알기 위해서는 먼저 `connect` 함수의 동작 원리를 이해해야 한다.

* `connect` 함수의 첫 번째 인자로 전달되는 `mapStateToProps`는 구독 중인 스토어의 상태가 변경될 때마다 호출된다. 이때 `mapStateToProps` 함수가 반환한 값을 이전 호출에서 반환했던 값과 Shallow Equal 방식으로 비교한 후 변경 사항이 발생했다면 Wrapped 컴포넌트를 업데이트시킨다. 만약 비교한 결과가 같았다면 Wrapped 컴포넌트를 업데이트시키지 않는다.
* Connected 컴포넌트는 자신의 부모 컴포넌트로부터 전달받은 `props` 객체를 암묵적으로 Wrapped 컴포넌트에게 그대로 전달한다.

첫 번째 상황으로 다시 돌아가서, 로케이션 값이 변경되더라도 Wrapped 컴포넌트에 업데이트가 발생하지 않는 이유를 단계적으로 생각해보자.

1. 로케이션 값의 변경으로 인해 Connected 컴포넌트의 부모 컴포넌트(Route 컴포넌트)가 업데이트되면, 당연히 그의 자식 컴포넌트인 Connected 컴포넌트에도 업데이트가 발생하게 된다.
2. 그러나 Connected 컴포넌트가 전달받는 `prop` 객체에는 로케이션 값과 관련된 것이 없기 때문에 어떠한 변경도 발생하지 않았다. 따라서 Connected 컴포넌트에 기본적으로 적용되어있는 최적화로 인해, Connected 컴포넌트의 업데이트는 발생되었을지언정 Wrapped 컴포넌트의 업데이트는 발생시키지 않는다.

두 번째 경우에 컴포넌트 업데이트가 발생하지 않는 이유는 명백하다. 해당 컴포넌트가 context API를 사용해 state를 관리하는 `BrowserRouter` 컴포넌트 외부에 존재하고 있으므로 로케이션 값의 변경에 따른 state 변화를 감지할 수가 없다. 따라서 해당 컴포넌트에는 업데이트가 발생하지 않는다.

첫 번째 경우에서 Wrapped 컴포넌트에 업데이트 라이프사이클을 발생시키고 싶다면 어떻게해야 할까? 



