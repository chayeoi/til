# 함수 호출 방식에 의해 결정되는 this

자바스크립트에서의 `this`는 함수를 선언할 때 `this`에 바인딩할 객체가 정적으로 결정되는 것이 아니고, **함수를 호출할 때 함수가 어떻게 호출되었는지에 따라** 동적으로 결정된다. 함수가 선언된 스코프는 `this` 바인딩과 연관이 없다.

```javascript
const name = 'Lee'

function introduce() {
  console.log(`Hello. My name is ${this.name}.`)
}

const person = {
  name: 'Kim',
  introduce,
}

// `introduce` 함수는 전역 스코프에서 정의되었지만, 호출되는 방식에 따라 this에 바인딩되는 객체가 달라진다.
introduce() // Hello. My name is Lee.
person.introduce() // Hello. My name is Kim.
```

## 1. 호출 패턴에 따른 바인딩 규칙

### 1.1 함수 호출 패턴

`this`는 전역 객체(브라우저의 경우 `window`, node의 경우 `global`)에 바인딩된다.

```javascript
function foo() {
  console.log(this)
}

foo() // window
```

### 1.2 메소드 호출 패턴

함수가 어떤 객체의 메소드로 호출되었을 때, 그 내부의 `this`는 해당 메소드를 호출한 객체에 바인딩된다.

```javascript
const person = {
  name: 'Kim',
  sayName() {
      console.log(`My name is ${this.name}.`)
  }
}

person.sayName() // My name is Kim.
```

메소드 호출 패턴에서 `this`가 **해당 메소드를 소유한 객체가 아닌 호출한 객체에 바인딩된다**는 사실에 주의해야 한다. 프로토타입 체인에 의해 참조된 메소드를 호출하는 경우, 메소드를 소유한 객체와 호출한 객체가 서로 다를 수 있고, 이 경우에 `this`는 해당 메소드를 호출한 객체에 바인딩된다.

```javascript
const person = {
  age: 0,
  sayAge() {
    console.log(`I'm ${this.age} years old.`)
  }
}

const kim = {
  age: 29,
}

// `person`을 `kim`의 프로토타입 객체로 설정
Object.setPrototypeOf(kim, person)

// `sayHello`를 소유한 객체는 `person`이지만 호출한 객체는 `kim`이므로 `this.age`는 0이 아닌 29. 
kim.sayAge() // I'm 29 years old.
```

### 1.3 생성자 함수 호출 패턴

어떤 함수를 `new` 키워드와 함께 생성자  함수로 호출하게 되면, 내부의 `this`는 호출의 결과로 생성될 객체(인스턴스)에 바인딩된다.

> 생성자 함수는 말 그대로 객체를 생성하는 함수를 뜻한다. 생성자 함수 호출 시 다음과 같은 순서로 동작한다.
>
> 1. 함수 내부의 코드를 실행하기에 앞서 빈 객체를 생성한다.
> 2. 함수 내부의 `this`를 앞 단계에서 생성된 빈 객체에 바인딩한다.
> 3. 함수 내부의 코드를 실행한다.
> 4. 반환값이 없는 경우, 암묵적으로 `this`를 반환한다. `this`가 아닌 다른 객체를 명시적으로 반환하는 경우, 해당 객체가 반환된다.

```javascript
function Person(name, age) {
  this.name = name
  this.age = age
}

const person = new Person('Kim', 29) // { name: 'Kim', age: 29 }
```

### 1.4 `apply` / `call` / `bind` 호출 패턴

앞서 소개한 3가지 패턴에서는 호출 형식에 따라 `this` 바인딩이 암묵적으로 수행된다. 그러나 `Function.prototype`에 정의된 `apply` / `call` / `bind` 메소드를 이용하면 `this`를 명시적으로 바인딩하는 일이 가능해진다.

```javascript
function Person(name) {
  this.name = name
}

const person = {}

// 함수 호출 패턴이 적용되어 `this`는 전역 객체 `window`에 바인딩된다.
Person('Kim')

console.log(name) // Kim

// apply 메소드는 생성자함수 Person을 호출한다. 이때 `this`에 객체 foo를 명시적으로 바인딩한다.
Person.apply(person, ['Lee'])

console.log(person) // { name: 'Kim' }
```

#### 1.4.1 `Function.prototype.apply`

`Function.prototype.apply`는 다음과 같은 형태로 호출한다.

1. 해당 함수 내부의 `this`에 명시적으로 바인딩할 객체를 첫번째 인자로 전달한다.
2. 해당 함수에 전달할 인수의 배열을 두번째 인자로 전달한다.

```javascript
function Person(name, age) {
  this.name = name
  this.age = age
}

const person = {}

Person.apply(person, ['Kim', 29])

console.log(person) // { name: 'Kim', age: 29 }
```

#### 1.4.2 `Function.prototype.call`

`Function.prototype.call`은 기본적으로 `Function.prototype.apply`와 유사하지만 인자를 전달하는 방식에서 차이가 있다. 전달할 인수 전체를 하나의 배열로 전달하는 `Function.prototype.apply`와 달리, 각 인수를 두번째 인자부터 차례로 넘기는 형태로 호출한다.

```javascript
function Person(name, age) {
  this.name = name
  this.age = age
}

const person = {}

Person.call(person, 'Kim', 29)

console.log(person) // { name: 'Kim', age: 29 }
```

#### 1.4.3 `Function.prototype.bind`

명시적으로 `this`에 바인딩될 객체를 전달 후 함수의 호출 단계까지 수행하는 `call`, `apply`와 달리, `bind`는 인자로 전달한 객체가 `this`에 바인딩된 새로운 함수를 반환한다. `bind`에 관한 자세한 내용은 [MDN 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)를 참고하도록 한다.

```javascript
function Person(name, age) {
  this.name = name
  this.age = age
}

const aerson = {}
const berson = {}
const cerson = {}

const Aerson = Person.bind(aerson)
const Berson = Person.bind(berson, 'Kim')
const Cerson = Person.bind(cerson, 'Kim', 29)

Aerson('Kim', 29)
Berson(29)
Cerson()

console.log(aerson) // { name: 'Kim', age: 29 }
console.log(berson) // { name: 'Kim', age: 29 }
console.log(cerson) // { name: 'Kim', age: 29 }
```

`Function.prototype.bind`는 리액트에서 인스턴스 메소드를 바인딩하는 용도로 자주 사용된다.

```jsx
class TextField extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = { value: '' }
  }

  handleClick(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    const { handleChange } = this
    const { value } = this.state
    const { label } = this.props

    return (
      <label>
        <span>{label}: </span>
        <input type="text" value={value} onChange={handleChange} />
      </label>
    )
  }
}
```

## 2. 위 패턴에 해당되지 않는 경우

위 경우에 해당하지 않을 시 기본적으로 `this`는 전역 객체에 바인딩된다. 각 함수의 실행 컨텍스트에는 `this`에 바인딩될 객체 정보인 'this' value가 저장되어 있는데, `this`는 기본적으로 전역 객체를 가리키고 있다가 'this' value가 결정되는 호출 시점에서, 호출 패턴에 따른 새로운 `this`가 할당된다.

### 2.1 내부 함수에서의 this

내부 함수에서의 `this`는 전역 객체에 바인딩된다.

```javascript
function foo() {
  function bar() {
    console.log(this)
  }

  bar()
}

foo() // window
```

메소드의 내부 함수일 경우애도 `this`는 전역 객체에 바인딩된다.

```javascript
const obj = {
  foo() {
    function bar() {
      console.log('bar', this)
    }
    
    console.log('foo', this)
    bar()
  }
}

obj.foo() // 'foo' obj, 'bar' window
```

### 2.2 콜백 함수에서의 this

```javascript
function foo(callback) {
  callback()
}

foo(function() { console.log(this) })
```
### 2.3 전역 컨텍스트에서의 this

전역 컨텍스트의 경우에도 'this' value는 전역 객체를 가리키고 있다.

```javascript
console.log(this) // window
```

## 개인적 생각

`this`는 함수의 숨겨진 입력이다. 명시적인 입력값에 의한 것이 아닌, 호출 방식에 따라 `this`가 달라지는 특성으로 인해 코드를 읽기 어렵게 만든다.

## 정리

* `this`에 바인딩되는 객체는 함수 호출 패턴에 의해 결정된다.
* 화살표 함수로 선언한 함수는 'this' value에 대한 정보를 갖고 있지 않다. 오로지 자신의 상위 스코프로부터 `this`를 계승받는다.
* `this`의 잦은 사용은 코드를 읽기 어렵게 만드는 경향이 있는 것 같다(개인적 생각).)

## 참고 문서

* [함수 호출 방식에 의해 결정되는 this - Poiemaweb](https://poiemaweb.com/js-this)
