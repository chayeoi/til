## ECMAScript Proposals

TC39가 관리하고 있는 proposals 저장소에 등록된 표준 제안서 중 흥미로웠던 몇 가지 제안들을 살펴봤다.

### 1. [Optional chaining](https://github.com/tc39/proposal-optional-chaining)

예전에 Swift로 프로그래밍을 처음 시작하면서 옵셔널 체이닝에 대해 공부했던 적이 있다. 그때 당시에는 프로그래밍 자체를 처음 접하는 상태라 유용성을 느낄 겨를도 없었고 정확히 이해하지도 못했다. 그런데 자바스크립트를 사용하고 있는 지금에 와서 다시 생각해보니, 자바스크립트에도 이런 기능이 진작에 있었다면 얼마나 좋았을까라는 생각이 든다.

자바스크립트에서는 `undefined` 또는 `null`인 값의 프로퍼티를 읽으려하는 순간 당연하게도 참조 에러가 발생한다. 더군다나 자바스크립트는 동적 타이핑 언어이기때문에, 개발하다보면 이런 에러를 매우 자주 맞딱트리게 된다. 보통의 경우 이와 같은 상황을 피하기 위해 다음과 같은 방어적 코드를 작성하기도 한다.

```javascript
const street = user.address && user.address.street
```

위 코드는 Optional chaining 방식을 사용해서 아래와 같이 재작성될 수 있다. 실행 결과는 위 코드와 완전히 동일하다.

```javascript
const street = user.address?.street
```

Optional chaining syntax는 현재 Stage 1에 올라있는 상태이며, [babel-plugin-proposal-optional-chaining](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-optional-chaining)을 추가하면 트랜스파일링이 가능하기 때문에 지금 바로 사용해볼 수 있는 기능이다. 

### 2. [Pipeline operator](https://github.com/tc39/proposal-pipeline-operator)

Pipeline operator는 `ramda`와 같은 함수형 유틸리티 라이브러리에서 제공하는 `pipe` 함수를 언어 자체의 문법 중 하나로 집어넣고자 하는 것으로 생각된다. 문법 자체도 매우 간단해서 도입된다면 자주 사용하게 될 듯하다.

```javascript
let result = exclaim(capitalize(doubleSay("hello")))
result //=> "Hello, hello!"

let result = "hello"
  |> doubleSay
  |> capitalize
  |> exclaim

result //=> "Hello, hello!"
```

### 3. [Pattern matching](https://github.com/tc39/proposal-pattern-matching)

함수형 언어에 대해 잘은 모르지만, 패턴 매칭이란 기법은 아마도 함수형 언어에서 자주 사용되는 기법 중 하나인 듯하다.

```javascript
function todoApp (state = initialState, action) {
  case (action) {
    when {type: 'set-visibility-filter', filter: visFilter} ->
      return {...state, visFilter}
    when {type: 'add-todo', text} ->
      return {...state, todos: [...state.todos, {text}]}
    when {type: 'toggle-todo', index} -> {
      return {
        ...state,
        todos: state.todos.map((todo, idx) => idx === index
          ? {...todo, done: !todo.done}
          : todo
        )
      }
    }
    when {} -> {} // ignore unknown actions
  }
}
```

요즘 들어 `if else` statement에 정말 큰 거부감을 느끼고 최대한 사용을 줄이고자 갖가지 방법을 다 동원하고 있다. 만약 패턴 매칭 문법이 언어 차원으로 지원되기만 한다면 더 효과적으로 제거해나갈 수 있을 것 같다. 매우 기대된다!
