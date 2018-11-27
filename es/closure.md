# 클로저

## 1. 클로저란?

함수가 선언되었을 때, 그 함수와 해당 함수가 선언된 렉시컬 환경(Lexical environment)을 함께 일컫어 클로저라고 한다.

```javascript
function outer() {
  let count = 0

  function inner() {
    count += 1
    console.log('count: ', count)
  }

  return inner
}

const count = 10

const foo = outer()

foo() // 1
foo() // 2
foo() // 3
```

위 코드의 실행 과정을 순서대로 살펴보면 다음과 같다.

1. 외부 함수 `outer`를 선언하면서 그 안에 내부 함수 `inner`를 선언하였다. `inner`는 `outer` 내부의 지역 변수인 `count`를 참조하고 있다. `outer`는 `inner`를 반환한다.
2. `outer`를 호출한 결과, 전역 변수 `foo`에는 `outer`의 내부 함수였던 `inner`가 할당되었다.
3. `outer`는 내부 함수 `inner`를 반환 후 생을 마감하였다. 따라서 `outer` 내부의 스코프에 선언된 `count`를 참조할 방법은 더 이상 없어보인다.
4. 그러나 `foo`를 호출한 결과를 보면, 여전히 `foo`는 전역 변수 `count`가 아닌 `outer`의 스코프에 선언된 `count`를 참조하고 있음을 확인할 수 있다.

이런 일이 가능한 이유는 다음과 같다.

1. 자바스크립트의 함수는 자신이 호출된 시점이 아닌 선언된 시점에서 유효한 스코프를 갖는다. 이러한 특성을 렉시컬 스코프(Lexcial scope)라고 한다.
2. `outer`에 의해 `inner`가 외부 환경으로 반환될 때, `inner` 함수와 함께 `inner`가 참조하고 있는 렉시컬 환경(Lexcial environment)에 대한 정보가 함께 반환되었다.

## 2. 클로저의 활용

클로저는 함수형 프로그래밍에서 적극 사용되는 중요한 특성 중 하나이다. **상태 변경이나 가변(mutable) 데이터를 피하고 불변성(Immutability)을 지향하는 함수형 프로그래밍에서 부수 효과(Side effect)를 최대한 억제하여 오류를 피하고 프로그램의 안정성을 높이기 위해** 클로저는 적극적으로 사용된다.

### 2.1 상태 유지

```javascript
const box = { style: { display: none } }

const toggle = (function () {
  const isShow = false

  // ① 클로저를 반환
  return function () {
    box.style.display = isShow ? 'block' : 'none'
    // ③ 상태 변경
    isShow = !isShow
  }
})()

toggle()
console.log(box.display.style) // true

toggle()
console.log(box.display.style) // false
```

### 2.2 전역 변수의 사용 억제

```javascript
const incleaseBtn = document.getElementById('inclease')
const count = document.getElementById('count')

function increase() {
  // 카운트 상태를 유지하기 위한 지역 변수
  const counter = 0
  return ++counter
}

incleaseBtn.onclick = function () {
  count.innerHTML = increase()
}
```

### 2.4 디바운스

```javascript
function debounce(cb, time) {
  let timeoutId
  return function() {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      cb()
      timeoutId = null
    }, time)
  }
}
```

## 참고 문서

* [클로저 - Poiemaweb](https://poiemaweb.com/js-closure)
