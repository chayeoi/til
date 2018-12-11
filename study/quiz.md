# Quiz

## 1주차

### 1. this

다음 코드를 보고 물음에 답하세요.

```javascript
const name = 'Kim'

function Person(name) {
  this.name = name
}

Person.prototype.name = 'Lee'
Person.prototype.sayName = function() {
  console.log(this.name)
}

const person = new Person('Park')

const sayName = person.sayName

person.sayName() // ①

sayName() // ②
```

1-1. ①의 출력 결과는?

1-2. ②의 출력 결과는?

### 2. closure

다음 코드를 보고 물음에 답하세요.

```javascript
let name = 'Kim'

function outer() {
  const name = 'Lee'
  function inner() {
    console.log(name)
  }

  return inner
}

const foo = outer()

name = 'Park'

foo() // ①
```

2. ①의 출력 결과는?

## 3주차

1. JSON에 관한 다음 설명 중 **틀린 것**을 모두 고르세요.
   1. JSON 데이터 형식의 키는 반드시 작은 따옴표로 둘러싸야 한다.
   2. JSON 데이터는 텍스트로 구성되어있기 떄문에 자바스크립트 객체와 달리 키를 통해 값을 참조할 수 없다.
   3. JSON 데이터를 자바스크립트 객체화시키기 위해 빌트인 메소드인 `JSON.parse`를 사용할 수 있는데, 이 과정을 직렬화라고 한다.

2. AJAX에 관한 다음 설명 중 **옳은 것**을 모두 고르세요.
   1. AJAX는 Asynchronous JavaScript and XML의 약자로, XML 형식의 데이터만 교환이 가능하다.
   2. AJAX 요청을 생성할 때 사용하는 빌트인 `fetch` API는 IE에서 지원되지 않기 때문에 사용할 수 있는 방법이 없다.
   3. AJAX 요청을 통해 비동기적으로 데이터를 전달받은 후 화면을 갱신하기 위해서는 새로고침이 필요하다.
