# Dynamic binding with the Arrow Function for multiple elements

하나의 컴포넌트 안에 `input`이 여러 개 있고 이들을 공통된 하나의 이벤트 핸들러로 다루고자 할 떄, 다음과 같은 방법을 사용할 수 있다.

```javascript
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

`input`이 많지 않은 경우라면 성능에 큰 영향을 주지는 않을 것이므로 이 방식을 활용하는 것은 꽤 괜찮다고 생각한다. 성능 상의 손실보다 얻을 수 있는 이점이 더 많으니깐. 그러나 `input`이 동적으로 늘어날 수 있고 이것이 성능 상에 중대한 영향을 끼칠만한 상황이라면, 각 `input`마다 이벤트 핸들러에 대한 참조를 캐싱할 것을 추천한다. 그러나 이렇게 하는 대신, 코드의 가독성은 더 나빠질 수 있다.

```javascript
class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = name => {
    if (!this.handlers[name]) {
      this.handlers[name] = event => {
        this.setState({ [name]: event.target.value })
      }
    }
    return this.handlers[name]
  }

  render() {
    const { email, password } = this.state
    return (
      <input value={email} onChange={this.handleChange('email')}/>
      <input value={password} onChange={this.handleChange('password')}/>
    )
  }
}
```

## References

* [The best way to bind event handlers in React](https://medium.freecodecamp.org/the-best-way-to-bind-event-handlers-in-react-282db2cf1530)
