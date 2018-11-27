# Quiz

## 1. this

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

## 2. closure

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
