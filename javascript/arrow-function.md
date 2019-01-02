# 화살표 함수(Arrow function)

> 2019년 1월 3일 JS 스터디 준비 자료입니다.

화살표 함수는 ES2015에서 도입된 새로운 유형의 함수로, 화살표(`=>`)를 사용하여 보다 간결하게 함수를 선언할 수 있는 방법을 제공한다.

```javascript
// function add(a, b) { return a + b }
const add = (a, b) => a + b
```

## 1. 화살표 함수의 선언

### 1.1 매개변수

#### 1.1.1 매개변수가 없을 경우

```javascript
() => { /* ... */ }
```

#### 1.1.2 매개변수가 한 개인 경우

매개변수가 한 개인 경우, 소괄호를 생략할 수 있다.

```javascript
x => { /* ... */ }
```

#### 1.1.3 매개변수가 여러 개인 경우

매개변수가 여러 개인 경우, 소괄호를 생략할 수 없다.

```javascript
(x, y) => { /* ... */ }
```

### 1.2 함수 실행 블록

화살표(`=>`) 뒤의 중괄호로 둘러싸여진 영역에 함수의 실행 코드를 작성한다.

```javascript
const add = (x, y) => {
  return x + y
}
```

이때 함수의 실행 블록이 반환 값만 갖는 경우라면, 중괄호와 `return` 키워드를 생략할 수 있다. 

```javascript
const pow = x => x * x // x => { return x * x }
```

단 객체 리터럴 형식의 값을 반환하는 경우, 반환 값을 반드시 소괄호로 감싸야 한다.

```javascript
const foo = () => ({ a: 1 })
```

## 2. 화살표 함수의 호출

화살표 함수는 익명 함수로만 사용할 수 있기 때문에, 화살표 함수를 호출하기 위해서는 함수 표현식을 사용해야 한다.

```javascript
const pow = x => x * x
```

화살표 함수를 콜백 함수로 사용 시, 일반 함수를 사용할 때보다 표현이 더 간결하다.

```javascript
const arr = [1, 2, 3]

// 일반 함수
const pow = arr.map(function (x) { return x * x })

// 화살표 함수
const pow = arr.map(x => x * x})
```

## 3. `function` 키워드를 통해 선언된 함수와의 차이점

화살표 함수로 선언된 함수는 `function` 키워드를 통해 선언된 일반적인 함수와 몇 가지 중요한 차이점을 갖는다.

### 3.1 생성자로 사용될 수 없다.

화살표 함수는 일반 함수와는 달리 `prototype` 프로퍼티를 갖지 않는다. 때문에 화살표 함수를 `new` 키워드를 붙여서 생성자로 호출하게 되면 에러가 발생한다.

```javascript
const Foo = () => {}
const foo = new Foo() // Uncaught TypeError: Foo is not a constructor
```

### 3.2 `this` value가 호출 시점이 아닌 상위 스코프에 의해 결정된다.

`function` 키워드로 선언된 함수 내부의 `this`는 선언 시점에는 전역 객체를 가리키고 있다가, 호출 패턴에 따라 할당되는 값이 동적으로 결정된다. 이와는 달리, 화살표 함수는 자신의 `this` value를 갖고 있지 않다. 따라서 `this`가 가리키는 값은 오로지 자신의 상위 스코프에 의해 정적으로 결정된다. 이러한 특징을 **Lexical `this`**라고 한다.

```javascript
function Prefixer(prefix) {
  this.prefix = prefix
}

Prefixer.prototype.prefixArray = function (arr) {
  // this는 상위 스코프인 prefixArray 메소드 내의 this를 가리킨다.
  return arr.map(x => `${this.prefix}  ${x}`)
}

const pre = new Prefixer('Hi')
console.log(pre.prefixArray(['Lee', 'Kim']))
```

### 3.3 제너레이터로 사용될 수 없다.

화살표 함수 내부에서 `yield` 키워드를 사용할 수 없다. 그 결과 화살표 함수는 제너레이터로 사용될 수 없다.

## References

* [화살표 함수 - Poiemaweb](https://poiemaweb.com/es6-arrow-function)
* [함수 더 알아보기 - Javascript로 만나는 세상](https://poiemaweb.com/es6-arrow-function)
* [화살표 함수 - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98)
