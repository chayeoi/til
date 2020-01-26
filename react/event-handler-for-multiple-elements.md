# Event handler for multiple elements

하나의 컴포넌트 안에 `input`이 여러 개 있고 이들을 공통된 하나의 이벤트 핸들러로 다루고자 할 때, 다음과 같은 방법을 사용할 수 있다.

```jsx
class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value })
  }

  render() {
    const { email, password } = this.state
    return (
      <form>
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" value={email} onChange={this.handleChange('email')}/>
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" value={password} onChange={this.handleChange('password')}/>
      </form>
    )
  }
}
```

`handleChange`를 `name` 인자를 전달받은 다음 새로운 함수를 반환하는 함수로 정의함으로써, 각각의 `input`에 이벤트 핸들러를 바인딩할 때에도 각 필드에 알맞는 `name`을 인수로 전달하여 `handleChange`를 호출하기만 하면 된다. `handleEmailChange`, `handlePasswordChange`와 같이 각각의 이벤트 핸들러를 일일이 정의할 필요가 없어지기 때문에 꽤 근사한 방법처럼 느껴질 것이다. 그러나, 이 방법 역시 성능에 영향을 끼칠만한 꽤 심각한 문제를 지니고 있다: state 업데이트에 따라 `render`가 호출될 때마다 **실제 업데이트가 일어난 `input` 뿐만 아니라 불필요하게 모든 `input`의 리렌더링을 발생시킨다**는 점이다.

사용자가 필드에 값을 입력할 때 발생하는 일을 단계별로 나누어 자세히 들여다보면,

1. `LoginForm`이 화면에 그려진 이후 사용자가 `email` 필드에 'c'를 입력하는 순간, state를 업데이트하고자 `setState`의 호출이 일어난다.
2. `setState` 호출에 따라 `render`가 재호출되어 새로운 값을 반환하고, React는 새롭게 반환된 값을 이전 `render` 호출에서 반환된 값과 비교한다.
3. `handleChange('email')`, `handleChange('password')`는 각각 이전 `render` 호출에서 반환된 값과 다른 참조를 갖고 있으므로 React는 실제 변화가 일어난 `email` 필드 뿐만 아니라 변화가 일어나지 않은 `password` 필드에 대해서도 DOM 업데이트를 발생시킨다.
4. 값을 입력할 때마다 1 ~ 3 과정이 매번 반복된다.

`input`이 많지 않은 경우라면 성능에 큰 영향을 주지는 않을 것이므로 이 방식을 활용하는 것은 꽤 괜찮다고 생각한다. 성능 상의 손실보다 얻을 수 있는 이점이 더 많기 때문이다. 그러나 `input`이 동적으로 늘어날 수 있고 이것이 성능 상에 중대한 영향을 끼칠만한 상황이라면, 각 `input`마다 이벤트 핸들러에 대한 참조를 캐싱할 것을 추천한다. 그러나 이렇게 하는 대신, 코드의 가독성은 더 나빠질 수 있다.

```jsx
class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  }

  handlers = {}

  handleChange = (name) => {
    if (!this.handlers[name]) {
      this.handlers[name] = (event) => this.setState({ [name]: event.target.value })
    }

    return this.handlers[name]
  }

  render() {
    const { handleChange } = this
    const { email, password } = this.state

    return (
      <>
        <input value={email} onChange={handleChange('email')}/>
        <input value={password} onChange={handleChange('password')}/>
      </>
    )
  }
}
```

생각해 볼 수 있는 또 하나의 방법은, 각 인풋 요소에 `name` 속성을 추가한 후 이벤트 핸들러가 실행되는 시점에 `event.target.name`으로 대상 요소의 이름을 읽어들이는 것이다.

```jsx
class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = event => this.setState({ [event.target.name]: event.target.value })

  render() {
    const { handleChange } = this
    const { email, password } = this.state

    return (
      <>
        <input name="email" value={email} onChange={handleChange}/>
        <input name="password" value={password} onChange={handleChange}/>
      </>
    )
  }
}
```

앞서 이야기했던 방식과 비교했을 때 코드가 훨씬 간결해졌다. 그러나 이 방식에도 한 가지 주의할 점이 존재한다. 다수의 `button` 요소에 'click' 이벤트 핸들러를 바인딩하고 있는 다음 예제를 보자.

```jsx
class ButtonGroup extends Component {
  state = {
    first: false,
    second: false,
  }

  handleClick = (event) => {
    this.setState(state => ({
      [event.target.name]: !state[event.target.name],
    }))
  }

  render() {
    const { handleClick } = this
    const { first, second } = this.state

    return (
      <>
        <button type="button" name="first" onClick={handleClick}>
          <span>First</span>
        </button>
        <button type="button" name="second" onClick={handleClick}>
          <span>Second</span>
        </button>
        <div>
          <p>first: {first}</p>
          <p>second: {second}</p>
        </div>
      </>
    )
  }
}
```

위 코드에서 각 `button`에 바인딩된 이벤트 핸들러는 클릭된 버튼의 `name` 속성에 맞는 state 값을 toggle하는 작업을 수행한다. 또한 각 `button`은 텍스트를 감싼 `span`을 포함하고 있다. 그런데 만약 `button` 내부에 포함된 텍스트 영역을 클릭할 경우, 우리가 예상했던 것과 다르게 state 값이 정상적으로 변경되지 않는 것을 확인할 수 있을 것이다.

그 이유는 `event.target`이 가리키는 값이 해당 이벤트를 직접적으로 발생시킨 요소를 가리키기 때문이다. 버튼 내부의 텍스트 영역을 클릭 시, 'click' 이벤트를 발생시킨 요소는 `button`이 아니라 `span`이다. 이때 우리는 `event.target.name` 값을 참조하려 시도하고 있지만, `span` 요소는 `name` 속성을 갖고 있지 않다. 이런 이유로 위와 같은 문제가 발생했던 것이다.

이 문제를 해결하려면 `event.target.name` 대신 `event.currentTarget.name`을 참조하면 된다. `event.target`이 실제로 이벤트를 발생시킨 요소를 가리키는 것과 달리, `event.currentTarget`은 이벤트 핸들러가 바인딩된 요소를 가리키기 때문이다. 그렇기 때문에 `button` 내부의 `span` 요소를 클릭하는 경우라고 하더라도, `event.currentTarget.name`에 담겨있는 값을 정상적으로 읽어올 수 있게 된다.

## 참고 {docsify-ignore}

* [The best way to bind event handlers in React - freeCodeCamp](https://medium.freecodecamp.org/the-best-way-to-bind-event-handlers-in-react-282db2cf1530)
* [Cache your React event listeners to improve performance. - Hacker Noon](https://hackernoon.com/cache-your-react-event-listeners-to-improve-performance-37bda57ac965)
* [Handling multiple inputs - React](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
