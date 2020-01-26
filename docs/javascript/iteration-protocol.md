# Iteration Protocol

## Iterable

이터러블(Iterable)은 ES2015에서 새롭게 추가된 순회가능한 자료 구조를 일컫는다. `Symbol.iterator`를 키로 사용한 메소드를 구현하는 것에 의해 순회 가능한 자료구조인 이터러블이 된다.

## Iterator

`Symbol.iterator`를 프로퍼티 key로 사용한 메소드는 이터레이터를 반환한다. 이터레이터는 순회 가능한 자료 구조인 이터러블의 요소를 탐색하기 위한 포인터로서 `next()` 메소드를 갖는 객체이다. `next()` 메소드는 `value`, `done` 프로퍼티를 갖는 객체를 반환하며 이 메소드를 통해 이터러블 객체를 순회할 수 있다.

## Built-in Iterable

Iteration Protocol을 준수하고 있는 Built-in Iterable 객체는 다음과 같은 것들이 있다.

* Array
* String
* Map
* Set
* DOM data structures

## 이터러블 프로토콜과 이터레이터 프로토콜

yield* 표현식을 사용하면, 다른 generator 함수에서 넘겨준 값을 대신 넘겨줄 수도 있습니다.

function* numberGen() {
  yield 1;
  yield 2;
  yield 3;
}

function* numberGen2() {
  yield* numberGen();
  yield* numberGen();
}

// 1, 2, 3, 1, 2, 3이 순서대로 출력됩니다.
for (let n of numberGen2()) {
  console.log(n);
}
이제 조금 더 흥미로운 generator 함수를 만들어 보겠습니다. yield 키워드를 제외하면, generator 함수 내부의 동작 방식은 일반적인 함수와 별반 다르지 않습니다. 즉, 다른 함수에서 할 수 있는 일이라면 generator 함수 안에서도 모두 할 수 있습니다.

// 등차수열 생성하기
function* range(start = 0, end = Infinity, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}

// 피보나치 수열 생성하기
function* fibonacci(count = Infinity) {
  let x = 1;
  let y = 1;
  for (let i = 0; i < count; i++) {
    yield x;
    [x, y] = [y, x + y];
  }
}

// 하나의 항목을 계속 넘겨주기
function* repeat(item, count = Infinity) {
  for (let i = 0; i < count; i++) {
    yield item;
  }
}

// 여러 요소를 반복해서 넘겨주기
function* repeatMany(array) {
  while (true) {
    for (let item of array) {
      yield item;
    }
  }
}
Generator 함수를 사용할 때 주의할 점이 있습니다.

Generator 함수로부터 생성된 iterable은 한 번만 사용될 수 있습니다.2
Generator 함수 내부에서 정의된 일반 함수에서는 yield 키워드를 사용할 수 없습니다.
// Generator 함수로부터 생성된 iterable은 한 번만 사용될 수 있습니다.
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const iter = gen();

for (let n of iter) {
  // 잘 출력됩니다.
  console.log(n);
}
for (let n of iter) {
  // `iter`는 한 번 사용되었으므로, 이 코드는 실행되지 않습니다.
  console.log(n);
}
// Generator 함수 내부에서 정의된 일반 함수에서는 `yield` 키워드를 사용할 수 없습니다.
function* gen2() {
  // 아예 문법 오류가 납니다. (Unexpected token)
  function fakeGen() {
    yield 1;
    yield 2;
    yield 3;
  }
  fakeGen();
}

Iterator Protocol
이제 iterable의 동작 원리를 살펴보겠습니다. (여기서부터는 말이 조금 어렵습니다. iterable과 iterator를 잘 구분하세요!)

앞에서 'iterable 객체는 iterable protocol을 만족한다. 즉, Symbol.iterator 속성에 특별한 형태의 함수가 저장되어 있다'고 했습니다.

Iterable protocol을 만족하려면, Symbol.iterator 속성에 저장되어 있는 함수는 iterator 객체를 반환해야 합니다.

Iterator 객체는 아래의 특별한 조건을 만족하는 객체입니다.

Iterator는 next라는 메소드를 갖습니다.
next 메소드는 다음 두 속성을 갖는 객체를 반환해야 합니다.
done - 반복이 모두 끝났는지를 나타냅니다.
value - 현재 순서의 값을 나타냅니다.
위 조건을 iterator protocol이라고 합니다.

조금 어렵나요? next를 직접 호출해보면 감이 올 것입니다.

// 문자열은 iterable이므로 이로부터 iterator를 생성할 수 있습니다.
const strIterator = 'go'[Symbol.iterator]();
strIterator.next(); // { value: 'g', done: false }
strIterator.next(); // { value: 'o', done: false }
strIterator.next(); // { value: undefined, done: true }
strIterator.next(); // { value: undefined, done: true }

// generator 함수로부터 생성된 객체 역시 iterable이므로 이로부터 iterator를 생성할 수 있습니다.
function* gen() {
  yield 1;
  yield 2;
}
const genIterator = gen()[Symbol.iterator]();
genIterator.next(); // { value: 1, done: false }
genIterator.next(); // { value: 2, done: false }
genIterator.next(); // { value: undefined, done: true }
genIterator.next(); // { value: undefined, done: true }
Iterable protocol과 iterator protocol을 모두 이해하셨다면, 이제 직접 iterable을 만들 수 있습니다. 앞의 예제에 있었던 range 함수를 generator 함수를 사용하지 않고 똑같이 구현해보겠습니다.

function range(start = 0, end = Infinity, step = 1) {
  // `range` 함수는 iterable을 반환합니다.
  return {
    currentValue: start,
    [Symbol.iterator]() {
      // iterable의 `Symbol.iterator` 메소드는 iterator를 반환해야 합니다.
      return {
        next: () => {
          if (this.currentValue < end) {
            const value = this.currentValue;
            this.currentValue += step;
            return {
              done: false,
              value
            }
          } else {
            return {
              done: true
            }
          }
        }
      };
    }
  }
}
Generator 함수를 사용했을 때보다 훨씬 복잡해졌습니다. 이 때문에 iterator protocol을 직접 구현하는 대신 generator 함수를 사용하는 경우가 많습니다. 다만, next 메소드를 사용하면 iterable을 세부적으로 제어할 수 있으므로, iterator 대해서 알아둘 필요는 있습니다.

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Iteration_protocols

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

## 참고 {docsify-ignore}

* [Poiemaweb - Iteration Protocol](http://poiemaweb.com/es6-iteration-for-of)
