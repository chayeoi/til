# Today I Learned

## 2 Day

### 1. Iterable

#### 1.1 Iterable이란?

1. 반복 가능한 객체(Iterable object)는 `for...of` 구문과 함께 ES2015에서 도입되었다. 반복 가능한 객체를 다른 객체와 구분짓는 특징은, 객체의 `Symbol.iterator` 속성에 **특별한 형태의 함수**가 들어있다는 것이다.

   ```javascript
   const str = 'hello';
   str[Symbol.iterator]; // [Function]

   const arr = [];
   arr[Symbol.iterator]; // [Function: values]

   const map = new Map();
   map[Symbol.iterator]; // [Function: entries]

   const obj = new Object();
   obj[Symbol.iterator]; // undefined
   ```

2. 객체의 `Symbol.iterator` 속성에 특정 형태의 함수가 들어있다면, 이를 반복 가능한 객체(Iterable object) 혹은 줄여서 **Iterable**이라 부르고, **해당 객체는 Iterable protocol을 만족한다**고 말한다. 이런 객체들에 대해서는 ES2015에서 추가된 다양한 기능들을 사용할 수 있다.

3. 내장된 생성자 중 iterable 객체를 만들어내는 생성자에는 아래와 같은 것들이 있다.

   1. `String`
   2. `Array`
   3. `TypedArray`
   4. `Map`
   5. `Set`

4. `Symbol.iterator`는 자바스크립트 엔진이 미리 만들어놓은 내장 Symbol 값이다.

<br />

#### 1.2 Iterable의 사용

1. 어떤 객체가 Iterable이라면, 그 객체에 대해서 아래의 기능들을 사용할 수 있다.

   1. `for...of` 루프
   2. spread 연산자 (`...`)
   3. 분해대입(destructuring assignment)
   4. 기타 Iterable을 인자로 받는 함수

2. 즉, **문자열에 대해서도 위 기능들을 사용할 수 있다.**

   ```javascript
   // 'for...of'
   for (let c of 'hello') {
     console.log(c);
   }

   // spread 연산자
   const characters = [...'hello'];

   // 분해대입
   const [c1, c2] = 'hello';

   // `Array.from`은 iterable 혹은 array-like 객체를 인자로 받는다.
   Array.from('hello');
   ```

<br />

#### 1.3 Generator 함수

1. 그러면 우리가 직접 Iterable인 객체를 만들 수는 없을까? 결론부터 말하면, Iterable protocol을 구현하기만 하면 **어떤 객체든 Iterable이 될 수 있다.**

2. Iterable을 구현하는 가장 쉬운 방법은 ES2015에 도입된 **Generator 함수**를 사용하는 것이다.

3. Generator 함수는 **iterable 객체를 반환하는 특별한 형태의 함수**이다. 아래와 같은 문법을 통해 Generator 함수를 정의할 수 있다.

   ```javascript
   // generator 함수 선언하기
   function* gen1() {
     // ...
   }

   // 표현식으로 사용하기
   const gen2 = function* () {
     // ...
   }

   // 메소드 문법으로 사용하기
   const obj = {
     * gen3() {
       // ...
     }
   }
   ```

4. Generator 함수를 호출하면 객체가 생성되는데, 이 객체는 Iterable Protocol을 만족한다. 즉, `Symbol.iterator`속성을 갖고 있다.

   ```javascript
   function* gen1() {
     // ...
   }

   // 'gen1'를 호출하면 Iterable이 반환된다.
   const iterable = gen1();

   iterable[Symbol.iterator]; // [Function]
   ```

5. Generator 함수 안에서는 `yield`라는 특별한 키워드를 사용할 수 있다. Generator 함수 안에서 `yield` 키워드는 `return`과 유사한 역할을 하며, Iterable의 기능을 사용할 때 **`yield` 키워드 뒤에 있는 값들을 순서대로 넘겨준다.**

   ```javascript
   function* numberGen() {
     yield 1;
     yield 2;
     yield 3;
   }

   // 1, 2, 3이 순서대로 출력된다.
   for (let n of numberGen()) {
     console.log(n);
   }
   ```

6. `yield*` 표현식을 사용하면, 다른 generator 함수에서 넘겨준 값을 대신 넘겨줄 수도 있다.

   ```javascript
   function* numberGen() {
     yield 1;
     yield 2;
     yield 3;
   }

   function* numberGen2() {
     yield* numberGen();
     yield* numberGen();
   }

   // 1, 2, 3, 1, 2, 3이 순서대로 출력된다.
   for (let n of numberGen2()) {
     console.log(n);
   }
   ```

7. 아래는 다양한 Generator 함수이다. `yield` 키워드를 제외하면, Generator 함수 내부의 동작 방식은 일반적인 함수와 별반 다르지 않다. 즉, 다른 함수에서 할 수 있는 일이라면 Generator 함수 안에서도 모두 할 수 있다.

   ```javascript
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
   ```

8. Generator 함수를 사용할 때 주의할 점이 있다.

   1. Generator 함수로부터 생성된 iterable은 한 번만 사용될 수 있다.
   2. Generator 함수 내부에서 정의된 일반 함수에서는 `yield` 키워드를 사용할 수 없다.

   ```javascript
   // Generator 함수로부터 생성된 iterable은 한 번만 사용될 수 있다.
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
     // `iter`는 한 번 사용되었으므로, 이 코드는 실행되지 않는다.
     console.log(n);
   }
   ```

   ```javascript
   // Generator 함수 내부에서 정의된 일반 함수에서는 'yield' 키워드를 사용할 수 없다.
   function* gen2() {
     // 아예 문법 오류가 발생한다. (Unexpected token)
     function fakeGen() {
       yield 1;
       yield 2;
       yield 3;
     }
     fakeGen();
   }
   ```

<br />

#### 1.4 Iterator Protocol

1. Iterable Protocol과 Iterator Protocol은 서로 다른 것이다. 두 개를 구분해야 한다.

2. Iterable 객체는 Iterable protocol을 만족한다. 즉, `Symbol.iterator` 속성에 **특별한 형태의 함수가 저장되어 있다**. Iterable protocol을 만족하려면, `Symbol.iterator` 속성에 저장되어 있는 함수는 **Iterator** 객체를 반환해야 한다.

3. Iterator 객체는 아래의 특별한 조건을 만족하는 객체이다. 아래 조건을 **Iterator protocol**이라 한다.

   1. Iterator는 `next`라는 메소드를 갖는다.
   2. `next` 메소드는 다음 두 속성을 갖는 객체를 반환해야 한다.
      1. `done` - 반복이 모두 끝났는지를 나타낸다.
      2. `value` - 현재 순서의 값을 나타낸다.

   ```javascript
   // 문자열은 iterable이므로 이로부터 iterator를 생성할 수 있다.
   const strIterator = 'go'[Symbol.iterator]();
   strIterator.next(); // { value: 'g', done: false }
   strIterator.next(); // { value: 'o', done: false }
   strIterator.next(); // { value: undefined, done: true }
   strIterator.next(); // { value: undefined, done: true }

   // generator 함수로부터 생성된 객체 역시 iterable이므로 이로부터 iterator를 생성할 수 있다.
   function* gen() {
     yield 1;
     yield 2;
   }
   const genIterator = gen()[Symbol.iterator]();
   genIterator.next(); // { value: 1, done: false }
   genIterator.next(); // { value: 2, done: false }
   genIterator.next(); // { value: undefined, done: true }
   genIterator.next(); // { value: undefined, done: true }
   ```

4. Iterable protocol과 Iterator protocol을 모두 이해했다면, 이제 직접 Iterable을 만들 수 있다. 아래는 앞의 예제에 있었던 `range` 함수를 제너레이터 함수를 사용하지 않고 똑같이 구현한 결과이다. 제너레이터 함수를 사용했을 때보다 훨씬 복잡한데, 이 때문에 Iterator protocol을 직접 구현하는 대신 제너레이터 함수를 사용하는 경우가 많다. 다만, `next` 메소드를 사용하면 Iterable을 세부적으로 제어할 수 있으므로, Iterator 대해서 알아둘 필요는 있다.

   ```javascript
   function range(start = 0, end = Infinity, step = 1) {
     // 'range' 함수는 iterable을 반환한다.
     return {
       currentValue: start,
       [Symbol.iterator]() {
         // iterable의 'Symbol.iterator' 메소드는 iterator를 반환해야 한다.
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
               };
             };
           };
         };
       };
     };
   };
   ```

5. 제너레이터 함수에 의해 반환된 제너레이터 객체는 Iterable이고, Iterable 객체의 `Symbol.iterator` 속성에 저장된 함수를 호출하면 iterator 객체가 반환된다. 

6. 제너레이터 함수는 특이하게도 `Symbol.iterator` 프로퍼티에 저장된 함수가 자신과 같다. Iterable인 동시에 Iterator이다.

   ```javascript
   function* gen() {
     yield 1;
     yield 2;
   }

   const o = gen();

   o[Symbol.iterator]() === o; // true
   ```

7. [Iteration Protocol](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Iteration_protocols)

<br />

#### 1.5 Generator와 Iterator

1. 제너레이터 함수로부터 만들어진 객체는 일반적인 Iterable처럼 쓸 수 있지만, iterator와 관련된 특별한 성질을 갖고 있다.

2. 제너레이터 함수로부터 만들어진 객체는 **iterable protocol과 iterator protocol을 동시에 만족한다.** 즉, `Symbol.iterator`를 통해 Iterator를 생성하지 않고도 바로 `next`를 호출할 수 있다.

   ```javascript
   function* gen() {
     // ...
   }

   const genObj = gen();
   genObj[Symbol.iterator]().next === genObj.next; // true
   ```

3. Generator 함수 안에서 `return` 키워드를 사용하면 반복이 바로 끝나면서 `next` 메소드에서 반환되는 객체의 속성에 앞의 반환값이 저장된다. 다만, `return`을 통해 반환된 값이 반복 절차에 포함되지는 않는다.

   ```javascript
   function* gen() {
     yield 1;
     return 2; // Generator 함수는 여기서 종료된다.
     yield 3;
   }

   const iter = gen();

   iter.next(); // { value: 1, done: false }
   iter.next(); // { value: 2, done: true }
   iter.next(); // { value: undefined, done: true }

   // '1'만 출력된다.
   for (let v of gen()) {
     console.log(v);
   }
   ```

4. Generator 함수로부터 생성된 객체의 `next` 메소드에 인자를 주어서 호출하면, Generator 함수가 멈췄던 부분의 `yield` 표현식의 결과값은 앞에서 받은 인자가 된다.

   ```javascript
   function* gen() {
     const received = yield 1;
     console.log(received);
   }

   const iter = gen();
   iter.next(); // { value: 1, done: false }

   // 'hello'가 출력됩니다.
   iter.next('hello'); // { value: undefined, done: true }
   ```

5. Generator 함수의 이런 성질은 비동기 프로그래밍을 위해 활용되기도 한다.

<br />

#### 1.6 Generator Examples

1. 다음은 Iterable을 활용하는 몇 개의 Generator 함수 예제이다.

   ```javascript
   // 각 항목을 변환한 후 넘겨주기
   function* map(iterable, mapper) {
     for (let item of iterable) {
       yield mapper(item);
     }
   }

   // 각 순서까지의 누적값을 넘겨주기
   function* reduce(iterable, reducer, initial) {
     let acc = initial;
     for (let item of iterable) {
       acc = reducer(acc, item);
       yield acc;
     }
   }

   // 조건에 만족하는 항목만 넘겨주기
   function* filter(iterable, predicate) {
     for (let item of iterable) {
       if (predicate(item)) {
         yield item;
       }
     }
   }

   // 여러 iterable을 연결하기
   function* concat(iterables) {
     for (let iterable of iterables) {
       yield* iterable;
     }
   }

   // 앞쪽 몇 개의 항목만 넘겨주기
   function* take(iterable, count = Infinity) {
     const iterator = iterable[Symbol.iterator]();
     for (let i = 0; i < count; i++) {
       // 'yield*'와는 다르게, iterator의 'next' 메소드를 이용하면 iterable의 일부만 가져올 수 있다.
       const {value, done} = iterator.next();
       if (done) break;
       yield value;
     }
   }
   ```

<br />

### 2. 클래스

#### 2.1 ES2015 Class

1. 문법이 아니라 동작방식의 측면에서 보면, ES2015 이전의 생성자와 ES2015의 클래스는 다음과 같은 차이점이 있다.
   1. 클래스는 **함수로 호출될 수 없다.** 즉, new 키워드를 붙이지 않으면 호출할 수 없다.
   2. 클래스 선언은 `let`과 `const`처럼 **블록 스코프**에 선언되며, **호이스팅(hoisting)**이 일어나지 않는다.
   3. 클래스의 메소드 안에서 **super 키워드**를 사용할 수 있다.

<br />

#### 2.2 메소드 정의하기

1. 객체 리터럴의 문법과 마찬가지로, 임의의 표현식을 **대괄호**로 둘러싸서 메소드의 이름으로 사용할 수도 있다.

   ```javascript
   const methodName = 'introduce';
   class Person {
     constructor({name, age}) {
       this.name = name;
       this.age = age;
     }
     // 아래 메소드의 이름은 'introduce'가 된다.
     [methodName]() {
       return `안녕하세요, 제 이름은 ${this.name}입니다.`;
     }
   }

   console.log(new Person({name: '윤아준', age: 19}).introduce()); // 안녕하세요, 제 이름은 윤아준입니다.
   ```

2. Generator 메소드를 정의하려면, 메소드 이름 앞에 `*` 기호를 붙여주면 된다. 아래와 같이 `Symbol.iterator` 메소드를 Generator로 정의해주면, 클래스의 인스턴스를 쉽게 Iterable로 만들 수 있다.

   ```javascript
   class Gen {
     *[Symbol.iterator]() {
       yield 1;
       yield 2;
       yield 3;
     }
   }

   // 1, 2, 3이 차례대로 출력된다.
   for (let n of new Gen()) {
     console.log(n);
   }
   ```

3. 아래는 `Symbol.iterator`에 제너레이터 함수를 정의함으로써 Gen의 인스턴스를 Iterable 객체로 구현한 예제이다.

   ```javascript
   class Gen {
     constructor() {
       this.count = 0;
     }
     *[Symbol.iterator]() {
       while (true) {
         yield this.count++;
       }
     }
   }

   const genObj = new Gen();

   for (let n of genObj) {
     console.log(n);
     if (n > 10) break;
   }
   ```

<br />

#### 2.3 클래스 필드(Class Field)

1. 클래스 블록 안에서 할당 연산자(`=`)를 이용해 인스턴스 속성을 지정할 수 있는 문법을 **클래스 필드(class field)**라고 한다.

   ```javascript
   class Counter {
     static initial = 0; // static class field
     count = Counter.initial; // class field
     inc() {
       return this.count++;
     }
   }

   const counter = new Counter();
   console.log(counter.inc()); // 0
   console.log(counter.inc()); // 1

   Counter.initial = 10;
   console.log(new Counter().count); // 10
   ```

2. 클래스 필드는 아직 정식 표준으로 채택된 기능은 아니지만, 다음 표준에 채택될 것으로 확실시된다. 아직 이 기능을 구현한 브라우저는 없는 상태이고, Babel, TypeScript 등의 트랜스파일러를 통해 일부 기능을 사용할 수 있다.

<br />

#### 2.4 클래스 필드와 this 

1. `class` 블록은 새로운 블록 스코프를 형성하고, 이 내부에서 사용된 `this`는 인스턴스 객체를 가리키게 된다.

   ```javascript
   class MyClass {
     a = 1;
     b = this.a;
   }

   new MyClass().b; // 1
   ```

2. 이 성질을 이용하면, **화살표 함수를 통해서 메소드를 정의할 수 있다.** (화살표 함수 안에서의 `this` 키워드는 바로 바깥쪽 스코프에 존재하는 `this`와 같은 객체를 가리킨다.)

   ```javascript
   class MyClass {
     a = 1;
     getA = () => {
       return this.a;
     }
   }

   new MyClass().getA(); // 1
   ```

3. 이렇게만 보면 일반적인 메소드와 별로 차이가 없어 보이지만, 사실 동작방식 측면에서 굉장히 큰 차이점이 있다.
   1. 일반적인 메소드는 클래스의 `prototype` 속성에 저장되는 반면, **클래스 필드는 인스턴스 객체에 저장된다.**
   2. 화살표 함수의 `this`는 호출 형태에 관계없이 항상 인스턴스 객체를 가리키게 된다.

4. 2번 성질때문에, **메소드를 값으로 다루어야 할 경우**에는 일반적인 메소드 대신 화살표 함수가 사용되는 경우가 종종 있다. 하지만, 1번 성질 때문에 **상속** 기능을 사용할 때 문제가 생긴다는 단점이 있다. 상속 기능을 활용할 예정에 있다면, 가급적 **화살표 함수를 메소드로 사용하지 않는 것이 좋다.**

5. 메소드는 해당 클래스의 프로토타입 객체에 저장된다. 하지만 **클래스필드는 생성될 인스턴스에 저장**된다.

6. 클래스필드는 마치 생성자(constructor) 안에 들어있는 것처럼 동작한다.

7. 다음 예제에서 부모 클래스 `Parent`에서 클래스 필드로 정의한 `foo` 메소드는 자식 클래스 `Child`의 프로토타입 객체에 존재하지 않고 `Child`의 인스턴스인 `child`에 담기게 된다.

   ```javascript
   class Parent {
     foo = function() {
       console.log('Parent');
     };
   };

   class Child extends Parent {
     boo = function() {
       console.log('Child');
     };
   }

   const child = new Child();
   console.dir(Parent.prototype) // Parent {}
   console.dir(Child.prototype) // Child {}
   console.dir(child) // Child { foo: [Function], boo: [Function] }
   ```

<br />

### 3. DOM API

#### 3.1 html 데이터 속성

1. 엘리먼트에 대한 어떤 정보를 저장하고자 할 때 `data-*` 형식으로 데이터 속성을 사용한다.

2. `data-*`의 *에는 원하는 어떤 값이든 사용할 수 있으며, 이때 이 값은 해당 엘리먼트의 `dataset` 프로퍼티를 통해 접근할 수 있다.

   ```html
   <div data-index="1" data-count="2" data-key="3"></div>
   <script>
     const el = document.querySelector('div');

     console.log(el.dataset.index);
     console.log(el.dataset.count);
     el.dataset.key = 4;
   </script>
   ```

<br />

#### 3.2 offsetParent 프로퍼티

1. `offsetParent` 프로퍼티는 특정 엘리먼트의 `position` 속성을 이용하여 위치를 잡을 때, 그 기준이 되는 요소를 나타낸다.

<br />

#### 3.3 getBoundingClientRect()

1. `getBoundingClientRect()`를 통해 해당 엘리먼트의 크기 및 위치 정보를 확인할 수 있다.

<br />

#### 3.4 캡처링과 버블링

1. 버블링이 일어나는 이벤트도 있고, 일어나지 않는 이벤트(submit, focus, blur, change 등)도 있다. 

<br />

#### 3.5 screenX, Y & clientX, Y

1. `screenX`, `screenY`는 스크린을 기준으로 한 좌표를 나타낸다.
2. `clientX`, `clientY`는 브라우저 화면(뷰포트)의 가장 왼쪽 위를 기준으로 한 좌표를 나타낸다.



<br />

<br />

## 3 Day

### 1. 큐, 스택, 트리

1. 어떤 데이터의 구체적인 구현 방식은 생략한 채, **데이터의 추상적 형태**와 **그 데이터를 다루는 방법**만을 정해놓은 것을 가지고 **ADT(Abstract Data Type)** 혹은 **추상 자료형**이라고 한다.

<br />

#### 1.2 큐(Queue)

1. 데이터를 집어넣을 수 있는 선형(linear) 자료형이다.
2. **먼저 집어넣은 데이터가 먼저 나온다.** 이 특징을 줄여서 FIFO(First In First Out)라고 부른다.
3. 데이터를 집어넣는 enqueue, 데이터를 추출하는 dequeue 등의 작업을 할 수 있다.
4. JavaScript에서는 배열을 이용해서 간단하게 큐를 구현할 수 있다.
5. 큐는 **순서대로 처리해야 하는 작업을 임시로 저장해두는 버퍼(buffer)**로서 많이 사용된다.
6. 유튜브에서 동영상을 재생할 때 끊김없이 재생하기 위해 서버에서 동영상의 일부가 조금 씩 우리 컴퓨터에 버퍼로 저장된다. 이때 네트워크 연결 상태가 불안정해지고 컴퓨터에 저장된 버퍼가 모두 소진되면 버퍼링이 발생한다.

<br />

#### 1.3 스택(Stack)

1. 데이터를 집어넣을 수 있는 선형(linear) 자료형이다.
2. **나중에 집어넣은 데이터가 먼저 나온다.** 이 특징을 줄여서 LIFO(Last In First Out)라고 부른다.
3. 데이터를 집어넣는 push, 데이터를 추출하는 pop, 맨 나중에 집어넣은 데이터를 확인하는 peek 등의 작업을 할 수 있다.
4. JavaScript에서는 배열을 이용해서 간단하게 스택을 구현할 수 있다.
5. 스택은 서로 관계가 있는 여러 작업을 연달아 수행하면서 **이전의 작업 내용을 저장해 둘 필요가 있을 때** 널리 사용된다.

<br />

#### 1.4 트리(Tree)

1. 트리(tree)는 여러 데이터가 **계층 구조** 안에서 서로 연결된 형태를 나타낼 때 사용된다.
2. 다음은 트리를 다룰 때 사용되는 몇 가지 용어이다.
   1. 노드(node) - 트리 안에 들어있는 각 항목을 말한다.
   2. 자식 노드(child node) - 노드는 여러 자식 노드를 가질 수 있다.
   3. 부모 노드(parent node) - 노드 A가 노드 B를 자식으로 갖고 있다면, 노드 A를 노드 B의 '부모 노드'라고 부른다.
   4. 뿌리 노드(root node) - 트리의 가장 상층부에 있는 노드를 말한다.
   5. 잎 노드(leaf node) - 자식 노드가 없는 노드를 말한다.
   6. 조상 노드(ancestor node) - 노드 A의 자식을 따라 내려갔을 때 노드 B에 도달할 수 있다면, 노드 A를 노드 B의 조상 노드라고 부른다.
   7. 자손 노드(descendant node) - 노드 A가 노드 B의 조상 노드일 때, 노드 B를 노드 A의 자손 노드라고 부른다.
   8. 형제 노드(sibling node) - 같은 부모 노드를 갖는 다른 노드를 보고 형제 노드라고 부른다.
   9. 트리는 계층 구조를 나타내기 위해, 또한 계층 구조를 통해 알고리즘의 효율을 높이고자 할 때 널리 사용된다.

<br />

### 2. 비동기 프로그래밍

#### 2.1 Motivation - 타이머 API

1. `setTimeout`과 `setInterval`은 각각 **타이머 식별자**를 반환한다. 이 식별자를 가지고 실행 중인 타이머를 취소할 수 있다.

   ```javascript
   const timeoutId = setTimeout(() => {
     console.log('setTimeout이 실행된 지 2초가 지났습니다.');
   }, 2000);

   const intervalId = setInterval(() => {
     console.log('3초마다 출력됩니다.');
   }, 3000);

   clearTimeout(timeoutId);
   clearInterval(intervalId);

   // 아무것도 출력되지 않는다.
   ```

2. 다음 코드를 실행하면 로그를 3번 기록한다.

   ```javascript
   const intervalId = setInterval(() => {
     console.log('3초마다 출력됩니다.');
   }, 3000);

   setTimeout(() => {
     clearInterval(intervalId)
   }, 10000);
   ```

3. `setTimeout`과 `setInterval`은 **정확한 지연시간을 보장해 주지 않는다.**

   ```javascript
   const start = new Date();

   setTimeout(() => {
     console.log(new Date() - start);
   }, 100);

   // 실제 지연시간과 약간의 차이가 존재한다.
   ```

4. 또한 **지연시간을 0으로 주었을 때**는 코드가 기대한대로 동작하지 않는다. `setTimeout` 호출 시 지연시간으로 0을 넘기면 다음과 같은 순서로 출력된다. 어떻게 된 일일까? 이를 이해하기 위해서는 먼저 **브라우저에서 JavaScript 코드가 실행되는 과정**을 알아야 할 필요가 있다.

   ```javascript
   setTimeout(() => {
     console.log('hello');
   }, 0);

   console.log('world');

   // 출력 결과:
   // world
   // hello
   ```

<br />

#### 2.4 브라우저의 JavaScript 코드 실행 과정

1. 호출 스택(call stack)은 스택 형태의 저장소로, JavaScript 엔진은 **함수 호출과 관련된 정보**를 이 곳에서 관리한다.

2. 에러를 발생시키면 호출 스택을 확인할 수 있다.

   ```javascript
   function add(x, y) {
     throw new Error('add');
     return x + y;
   }

   function add2(x) {
     return add(x, 2); // 'add'를 호출
   }

   function add2AndPrint(x) {
     const result = add2(x); // 'add2'를 호출
     console.log(result); // 'console.log'를 호출
   }

   add2AndPrint(3); // 'add2AndPrint'를 호출

   // Uncaught Error: add
   //   at add(debug.html: 14)
   //   at add2(debug.html: 19)
   //   at add2AndPrint(debug.html: 23)
   //   at debug.html: 27
   ```

3. 브라우저에서는 다음과 같은 절차를 통해 **오래 기다려야 하는 일**을 처리할 수 있다.

   1. 기다려야 하는 일을 JavaScript 엔진에서 직접 처리하는 것이 아니라 **API를 통해 브라우저에 위임**한다. 이 때, 일이 끝나면 실행시킬 **콜백**을 같이 등록한다.
   2. 위임된 일이 끝나면, 그 결과와 콜백을 **작업 큐(task queue)**에 추가한다.
   3. 브라우저는 호출 스택이 비워질 때마다 작업 큐에서 가장 오래된 작업을 꺼내와서 해당 작업에 대한 콜백을 실행시킨다. 브라우저는 이 과정을 끊임없이 반복하는데, 이를 **이벤트 루프(event loop)**라고 부른다.

<br />

> ##### VS Debugger
>
> 1. 명시적으로 debugger 키워드를 사용하여 디버그용 브라우저에서 해당 시점의 정보를 확인할 수 있다.

<br />

#### 2.5 debounce와 throttle

1. 직접 구현해서 사용하기보단 npm에서 debounce, throttle 라이브러리를 검색해서 사용한다.

2. 다음은 debounce, throttle을 직접 구현한 코드이다.

   ```javascript
   function delay(cb, time) {
     return function() {
       setTimeout(cb, time);
     }
   }

   function debounce(cb, time) {
     let timeoutId;
     return function() {
       if (timeoutId) {
         clearTimeout(timeoutId);
       }
       timeoutId = setTimeout(() => {
         cb();
         timeoutId = null;
       }, time)
     }
   }

   function throttle(cb, time) {
     let throttled = false;
     let timeoutId;
     return function() {
       if (!throttled) {
         cb();
       }
       throttled = true;
       if (!timeoutId) {
         timeoutId = setTimeout(() => {
           throttled = false;
           timeoutId = null;
         }, time);
       }
     }
   }
   ```

3. [SMILECAT'S BLOG](http://egaoneko.github.io/javascript/2017/03/19/debounce-and-throttle.html)

4. [코딩 공부방](https://moonspam.github.io/Throttle-and-Debounce/)

5. [Daily Engineering](https://hyunseob.github.io/2016/04/24/throttle-and-debounce/)

<br />

#### 2.6 Promise

1. 콜백의 여러가지 문제(콜백 헬, 에러 처리의 한계)를 해결하기 위해 여러 라이브러리들이 등장했고, 그 중에서 개발자들에게 널리 선택받은 것이 바로 Promise 패턴을 사용한 라이브러리들([jQuery Deffered](https://api.jquery.com/category/deferred-object/), [Q](http://documentup.com/kriskowal/q/), [Bluebird](http://bluebirdjs.com/docs/getting-started.html))이었다. 이 라이브러리들이 [표준화](https://promisesaplus.com/)되어, 결국 ES2015에 이르러 JavaScript 언어 자체에 포함되게 되었다.

2. Promise는 **'언젠가 끝나는 작업'의 결과값**을 담는 통과 같은 객체이다. Promise 객체가 만들어지는 시점에는 그 통 안에 무엇이 들어갈지 모를 수도 있다. 대신 `then` 메소드를 통해 콜백을 등록해서, 작업이 끝났을 때 결과값을 가지고 추가 작업을 할 수 있다.

   Promise 객체를 생성하는 가장 쉬운 방법은 `Promise.resolve` 정적 메소드를 사용하는 것이다. 다음 코드에서 `1`이라는 결과값을 갖는 Promise 객체를 생성한다. 그러나 이 코드는 비동기 작업을 하고 있지는 않다.

   ```javascript
   const p = Promise.resolve(1);
   ```

3. 비동기 작업을 하는 Promise 객체는 `Promise` 생성자를 통해 만들 수 있다. 다음 예제에서는 `setTimeout`을 이용해 2초가 지난 뒤에 콜백이 실행되도록 했으므로  `p` 변수에 저장된 Promise 객체는 2초 동안은 결과값이 없는 상태가 된다. 그리고 2초가 지나면, `resolve` 함수가 호출되어 `p` 객체는 결과값을 갖는 객체가 된다.

   ```javascript
   const p = new Promise((resolve, reject) => {
     setTimeout(() => {
       console.log('2초가 지났습니다.');
       resolve('hello');
     }, 2000);
   });
   ```

4. `Promise` 생성자는 콜백을 인자로 받는다. 이 콜백의 첫 번째 인자로 `resolve` 함수가 들어오는데, 콜백 안에서 `resolve`를 호출하면 **resolve에 인자로 준 값이 곧 Promise 객체의 궁극적인 결과값이 된다.**

5. Promise 객체의 **결과값을 사용해 추가 작업**을 하려면 `then` 메소드를 호출해야 한다. `then` 메소드에 콜백을 넘겨서, 첫 번째 인자로 들어온 결과값을 가지고 추가 작업을 할 수 있다.

   ```javascript
   p.then(msg => {
     console.log(msg); // hello
   });
   ```

6. `then` 메소드에는 아주 중요한 특징이 있는데, 바로 **then 메소드 자체도 Promise 객체를 반환한다**는 것이다. 이 때, 콜백에서 반환한 값이 곧 Promise의 결과값이 된다.

7. 또한, `then` 메소드에 넘겨준 콜백에서 Promise 객체를 반환하면, `then` 메소드가 반환한 Promise 객체는 앞의 Promise 객체의 결과를 따르게 된다.


   ```javascript
   // Promise 객체를 반환하는 함수
   function delay(ms) {
     return new Promise(resolve => {
       setTimeout(() => {
         console.log(`${ms} 밀리초가 지났습니다.`);
         resolve();
       }, ms);
     });
   }

   delay(1000)
     .then(() => delay(2000))
     .then(() => Promise.resolve('끝'))
     .then(console.log);

   console.log('시작');
   ```

   ​

<br />

<br />

## 4 Day

### 1. Promise

#### 1.1 then

1. then 메소드의 인자로 전달된 콜백함수가 반환하는 값은 Resolved Promise로 래핑되어, 뒤이어 체이닝된 then 메소드에 인자로 전달된다.

   ```javascript
   const p = new Promise((resolve, reject) => {
     setTimeout(() => {
       console.log('2초가 지났습니다.');
       resolve('hello');
     }, 2000);
   });

   p.then(msg => {
     return Promise.resolve(msg + 'world'); // return msg + 'world'와 같다.
   }).then(msg => {
     console.log(msg);
   });
   ```

2. Promise를 사용하면 비동기 작업을 연이어 수행하는 것이 간단해진다.

   ```javascript
   function delayHello() {
     return new Promise((resolve, reject) => {
       setTimeout(() => {
         console.log('2초가 지났습니다.');
         resolve('hello');
       }, 2000);
     });
   }

   delayHello().then(value => {
     return delayHello();
   }).then(value => {
     return delayHello();
   }).then(value => {
     return delayHello();
   });
   ```

3. 이렇게 비동기 처리 작업을 위해 Promise를 반환하는 함수 패턴이 자주 쓰였고, 결국 ES2017에서는 `async, await` 키워드를 이용하여 Promise를 반환하는 함수를 정의하는 기능이 표준 스펙으로 채택되었다.

4. HTTP 통신을 할 때 Promise가 어떻게 사용되는지 살펴보자. 최신 브라우저에는 HTTP 통신을 위한 `fetch` 함수가 내장되어 있는데, 이 함수는 Promise 객체를 반환한다.

   ```javascript
   const API_URL = 'https://api.github.com';

   fetch(`${API_URL}/repos/facebookincubator/create-react-app/issues?per_page=10`)
     .then(res => res.json())
     .then(issues => {
       console.log('최근 10개의 이슈:');
       issues
         .map(issue => issue.title)
         .forEach(title => console.log(title));
       console.log('출력이 끝났습니다.');
     });
   ```

5. `fetch`를 호출해서 반환된 Promise 객체의 결과값은 `Response` 객체로, HTTP 응답에 대한 내용을 담고 있다. 이 객체의 `json` 메소드는, HTTP 응답에 포함된 JSON 문자열을 JavaScript 객체로 바꾸어주는 역할을 한다. 특이한 점은 `json` 메소드 역시 Promise 객체를 반환한다는 것이다.

6. HTTP 응답 헤더의 전송이 끝난 즉시 Response 객체가 만들어진다. 즉, 이 시점에는 응답 바디를 전송받았다는 보장이 없기 때문에 이와 관련된 `json` 메소드가 Promise 객체를 반환하는 것이다.

7. fetch 함수는 최신 브라우저에만 있는 기능이다. Internet Explorer를 위해서는 Polyfill을 사용해야 한다.

8. Promise의 진가는, **복잡한 비동기 데이터 흐름을 다룰 때** 발휘된다.

   1. `then` 메소드는 Promise 객체를 반환하므로, **콜백을 중첩하지 않고도 비동기 작업을 연이어 할 수 있다.**
   2. 비동기 작업이라는 동작 자체를 **값으로 다룰 수 있게 된다.** 즉, 이제까지 값을 다루면서 해왔던 모든 작업을 Promise 객체에 대해서도 할 수 있다.

9. 아래 코드는 Promise를 이용한 비동기 데이터 흐름 예제이다. 3번 과정에서 사용한 `Promise.all` 정적 메소드는, '인자로 들어온 iterable에 들어있는 모든 Promise 객체가 완료되었을 때' 그 자신도 완료되는 새 Promise 객체를 반환한다. `Promise.all`과 `map` 메소드를 함께 사용하는 부분을 잘 살펴보길 바란다.

   ```javascript
   const API_URL = 'https://api.github.com';
   const starCount = {};

   // 1. Github에 공개되어있는 저장소 중, 언어가 JavaScript이고 별표를 가장 많이 받은 저장소를 불러온다.
   fetch(`${API_URL}/search/repositories?q=language:javascript&sort=stars&per_page=1`)
     .then(res => res.json())
     // 2. 위 저장소에 가장 많이 기여한 기여자 5명의 정보를 불러온다.
     .then(result => fetch(`${API_URL}/repos/${result.items[0].full_name}/contributors?per_page=5`))
     .then(res => res.json())
     // 3. 해당 기여자들이 최근에 Github에서 별표를 한 저장소를 각각 10개씩 불러온다.
     .then(users => {
       const ps = users.map(user => fetch(`${API_URL}/users/${user.login}/starred?per_page=10`));
       return Promise.all(ps);
     })
     .then(responses => Promise.all(responses.map(r => r.json())))
     // 4. 불러온 저장소를 모두 모아, 개수를 센 후 저장소의 이름을 개수와 함께 출력한다.
     .then(repoArrs => {
       for (let repoArr of repoArrs) {
         for (let repo of repoArr) {
           if (repo.full_name in starCount) {
             starCount[repo.full_name]++;
           } else {
             starCount[repo.full_name] = 1;
           }
         }
       }
       console.log(starCount);
     })

   console.log('fetching...');
   ```

10. `Promise.race(iterable)` 메소드는 Promise 객체를 반환한다. 이 Promise 객체의 결과값은 iterable 안에 있는 Promise 중에 가장 먼저 resolve 또는 reject된 Promise의 결과값이 된다.

<br />

### 2. 비동기 함수 (Async Function)

1. Promise를 사용하는 비동기 프로그래밍 방식은 이전의 방식과 비교하면 여러가지 장점을 갖지만, **여전히 콜백을 사용한다**는 점 때문에 '불편하다', '가독성이 좋지 않다'는 비판을 받아왔다.

2. ES2017에서 도입된 **비동기 함수(async function)**를 사용하면, 동기식 코드와 거의 같은 구조를 갖는 비동기식 코드를 짤 수 있다.

3. 함수 앞에 **async 키워드**를 붙이면, 이 함수는 비동기 함수가 된다.

   ```javascript
   // 비동기 함수
   async function func1() {
     // ...
   }

   // 비동기 화살표 함수
   const func2 = async () => {
     // ...
   }

   // 비동기 메소드
   class MyClass {
     async myMethod() {
       // ...
     }
   }
   ```

4. 비동기 함수는 **항상 Promise 객체를 반환한다**는 특징을 갖는다. 이 Promise의 결과값은 비동기 함수 내에서 무엇을 반환하느냐에 따라 결정되며, **then 메소드와 똑같은 방식으로 동작한다.**

   ```javascript
   async function func1() {
     return 1;
   }

   async function func2() {
     return Promise.resolve(2);
   }

   func1().then(console.log); // 1
   func2().then(console.log); // 2
   ```

5. 또 하나의 중요한 특징은 비동기 함수 내에서 **await 키워드**를 쓸 수 있다는 것이다. `await`는 Promise의 `then`메소드와 유사한 기능을 하는데, **await 키워드 뒤에 오는 Promise가 결과값을 가질 때까지 비동기 함수의 실행을 중단시킨다.** 여기서의 '중단'은 비동기식이며, 브라우저는 Promise가 완료될 때까지 다른 작업을 처리할 수 있다.

6. `await`는 연산자이기도 하며, **await 연산의 결과값은 뒤에 오는 Promise 객체의 결과값**이 된다.

   ```javascript
   // Promise 객체를 반환하는 함수
   function delay(ms) {
     return new Promise(resolve => {
       setTimeout(() => {
         console.log(`${ms} 밀리초가 지났습니다.`);
         resolve();
       }, ms);
     });
   }

   async function main() {
     await delay(1000);
     await delay(2000);
     const result = await Promise.resolve('끝');
     console.log(result);
   }

   main();
   ```

7. 비동기 함수의 가장 큰 장점은 **동기식 코드를 짜듯이 비동기식 코드를 짤 수 있다**는 것이다. 아래 예제는 Github 데이터를 불러오는 예제를 비동기 함수를 사용해 작성한 것이다.

   ```javascript
   const API_URL = 'https://api.github.com';

   async function fetchStarCount() {
     const starCount = {};

     // 1. Github에 공개되어있는 저장소 중, 언어가 JavaScript이고 별표를 가장 많이 받은 저장소를 불러온다.
     const topRepoRes = await fetch(`${API_URL}/search/repositories?q=language:javascript&sort=stars&per_page=1`);
     const topRepoData = await topRepoRes.json();

     // 2. 위 저장소에 가장 많이 기여한 기여자 5명의 정보를 불러온다.
     const topMemberRes = await fetch(`${API_URL}/repos/${topRepoData.items[0].full_name}/contributors?per_page=5`);
     const topMemeberData = await topMemberRes.json();

     // 3. 해당 기여자들이 최근에 Github에서 별표를 한 저장소를 각각 10개씩 불러온다.
     const ps = topMemeberData.map(user => fetch(`${API_URL}/users/${user.login}/starred?per_page=10`));
     const starredReposRes = await Promise.all(ps);
     const starredReposData = await Promise.all(starredReposRes.map(r => r.json()));

     // 4. 불러온 저장소를 모두 모아, 개수를 센 후 저장소의 이름을 개수와 함께 출력한다.
     for (let repoArr of starredReposData) {
       for (let repo of repoArr) {
         if (repo.full_name in starCount) {
           starCount[repo.full_name]++;
         } else {
           starCount[repo.full_name] = 1;
         }
       }
     }
     return starCount;
   }

   fetchStarCount().then(console.log);
   ```

8. `await` 키워드는 `for`, `if`와 같은 제어 구문 안에서도 쓰일 수 있기 때문에, `then` 메소드를 사용할 때보다 **복잡한 비동기 데이터 흐름을 아주 쉽게 표현할 수 있다**는 장점이 있다. 다만, 비동기 함수 역시 Promise를 사용하기 때문에, 비동기 함수를 잘 쓰기 위해서는 여전히 Promise에 대해 잘 알고 있어야 한다.

9. 비동기 함수는 `await` 도중 에러가 났을 때 이를 편하게 처리할 수 있는 방법도 지원한다.

10. 다음 코드는 비동기 함수 방식과 Promise 방식을 비교한 것이다.

  ```javascript
  // 비동기 함수
  async function main() {
    await delay(1000);
    await delay(2000);
    const result = await Promise.resolve('끝');
    console.log(result);
  }

  // Promise
  funciton main2() {
    delay(1000)
    .then(() => delay(2000))
    .then(() => Promise.resolve('끝'))
    .then(result => {
      console.log(result);
    })
  }
  ```

<br />

### 3. Generator

1. generator 함수는 **'함수를 잠시 멈춰둘 수 있다'**는 특징을 갖고 있다. 이 특징으로 인해 Generator가 비동기 프로그래밍을 위해 사용되기도 한다.

2. 아래는 Generator를 비동기식으로 작동시킬 수 있는 [co](https://github.com/tj/co) 라이브러리를 사용해서 Github에서 데이터를 불러오는 예제를 작성한 것이다.

   ```javascript
   const co = require('co');

   const API_URL = 'https://api.github.com';

   function* fetchStarCount() {
     const starCount = {};

     // 1. Github에 공개되어있는 저장소 중, 언어가 JavaScript이고 별표를 가장 많이 받은 저장소를 불러온다.
     const topRepoRes = yield fetch(`${API_URL}/search/repositories?q=language:javascript&sort=stars&per_page=1`);
     const topRepoData = yield topRepoRes.json();

     // 2. 위 저장소에 가장 많이 기여한 기여자 5명의 정보를 불러온다.
     const topMemberRes = yield fetch(`${API_URL}/repos/${topRepoData.items[0].full_name}/contributors?per_page=5`);
     const topMemeberData = yield topMemberRes.json();

     // 3. 해당 기여자들이 최근에 Github에서 별표를 한 저장소를 각각 10개씩 불러온다.
     const ps = topMemeberData.map(user => fetch(`${API_URL}/users/${user.login}/starred?per_page=10`));
     const starredReposRes = yield Promise.all(ps);
     const starredReposData = yield Promise.all(starredReposRes.map(r => r.json()));

     // 4. 불러온 저장소를 모두 모아, 개수를 센 후 저장소의 이름을 개수와 함께 출력한다.
     for (let repoArr of starredReposData) {
       for (let repo of repoArr) {
         if (repo.full_name in starCount) {
           starCount[repo.full_name]++;
         } else {
           starCount[repo.full_name] = 1;
         }
       }
     }
     return starCount;
   }

   co(fetchStarCount).then(console.log);
   ```

3. 비동기 함수를 사용한 예제와 비교해서 보면, 코드의 구조가 굉장히 비슷하다. 실제로, ES2017에서 비동기 함수가 도입되기 전에는 Generator가 비동기 프로그래밍을 위해 널리 사용되었다. 최근에는 언어에 내장되어 있고 더 쉬운 비동기 함수를 많이 사용하는 편이다.

4. 다만 generator는 **함수의 재개를 프로그래머가 직접 제어할 수 있다**는 장점을 갖고 있기 때문에, 일부러 비동기 함수 대신 generator를 사용하는 경우도 있다. React에서 비동기 프로그래밍을 하기 위해 널리 사용되는 라이브러리인 [redux-saga](https://redux-saga.js.org/) 역시 generator를 활용하고 있다.

5. co 라이브러리는 비동기 함수가 표준으로 채택되기 전에 Generator를 비동기식으로 사용해보자해서 만들어진 것이었다. 그러나 이제 비동기 함수가 표준으로 채택되었으므로 굳이 사용할 필요는 없다.

6. 물론 Geneator만의 장점도 존재한다. 비동기 함수는 비동기 함수 내부의 동작을 자바스크립트 엔진이 관리하기 때문에 프로그래머가 제어할수 없는 데 반해, Generator로 정의한 비동기 함수는 `next()` 메소드를 통해 각 동작을 프로그래머가 제어할 수 있다.

7. 또한 TDD 기법을 사용하여 우리가 작성한 코드가 정말 잘 동작하는지 검사하는 경우, 일부러 비동기 함수 대신 Generator를 사용하기도 한다.

<br />

### 4. DOM 

#### 4.1 Drag & Drop

1. Drag & Drop을 구현하기 위해 움직이려는 요소에 mousemove 이벤트를 에 등록하면, 마우스를 빠르게 움직일 때 요소가 속도를 잘 따라오지 못하는 등의 이슈가 발생한다. 따라서 mousemove 이벤트는 document 객체에 등록하도록 한다.

2. mouseup 이벤트는 브라우저 화면 내에서 마우스를 놨을 때만 발생한다. 따라서 드래그 중이던 요소를 브라우저 외부에서 놓은 후 다시 브라우저 내부로 가져오면  마우스가 눌려있지 않았음에도 해당 요소가 여전히 마우스에 따라 움직인다. 이런 이슈를 해결하기 위해서는 mouseup 이벤트 역시 document 객체에 등록해야 한다.

   ```html
      <!DOCTYPE html>
      <html lang="en">

      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
          .outer {
            position: relative;
            margin: 50px;
            height: 300px;
            background-color: aquamarine;
          }

          .box {
            position: absolute;
            width: 50px;
            height: 50px;
            top: 10px;
            left: 10px;
            background-color: blue;
            cursor: pointer;
          }

        </style>
      </head>

      <body>
        <div class="outer">
          <div class="box"></div>
        </div>
        <script>
          let dragging = false;

          const box = document.querySelector('.box');
          let originalX;
          let originalY;
          let originalLeft;
          let originalTop;

          box.addEventListener('mousedown', e => {
            console.log('mousedown');
            dragging = true;
            originalX = e.clientX;
            originalY = e.clientY;
            originalLeft = box.offsetLeft;
            originalTop = box.offsetTop;
            // 클릭이 일어난 순간에 상대적 위치 저장
            // el.offsetLeft, el.offsetTop
            // el.getBoundingClientRect()
          })
          document.addEventListener('mouseup', e => {
            console.log('mouseup');
            dragging = false;
          })
          document.addEventListener('mousemove', e => {
            console.log('mousemove');
            if (dragging) {
              // 상대적 위치를 유지하며 박스 위치 변경
              const diffX = e.clientX - originalX;
              const diffY = e.clientY - originalY;
              const largeBox = document.querySelector('.outer').getBoundingClientRect();
              const smallBox = box.getBoundingClientRect();
              const resultX = Math.min(
                Math.max(0, originalLeft + diffX),
                largeBox.width - smallBox.width
              );
              const resultY = Math.min(
                Math.max(0, originalTop + diffY),
                largeBox.height - smallBox.height
              );
              box.style.left = `${resultX}px`;
              box.style.top = `${resultY}px`;
            }
          })

        </script>

      </body>

      </html>
   ```


<br />

#### 4.2 form 이벤트: change vs input 

1. input 이벤트는 값이 입력될 때마다 발생하고, change 이벤트는 입력 값이 바뀐 상태에서 포커스가 이동할 때 발생한다.

2. 텍스트를 입력받는 태그(text, tel, password 등)에는 input 이벤트를 붙여야 하고, 텍스트를 입력하지 않는 요소(checkbox 등)에는 change 이벤트를 붙이도록 한다.

3. [devdocs - input 이벤트](http://devdocs.io/dom_events/input)

4. `contenteditable` 속성을 이용하여 사용자로부터 입력을 받을 수도 있다. `contenteditable` 속성을 가진 경우 또한 `input` 이벤트를 수신할 수 있다.

   ```html
   <div contenteditable>Hello World</div>
   ```

<br />

> ##### 크롬 개발자 도구의 네트워크 탭
>
> 1. 크롬 개발자 도구의 네트워크 탭에서 현재 페이지에서 요청을 보내거나 응답 데이터를 받을 때 일어나고 있는 모든 네트워크 전송을 확인할 수 있다.

<br />

#### 4.3 Parallax Scroll

1. 페이지에 이벤트를 걸어 UI 효과를 만드는 방법을 parallax scroll이라 한다. 직접 구현하는 것은 어려움 작업이고, 관련 라이브러리를 사용하면 된다.
2. Bootstrap의 Scrollspy 등이 있다.
3. scroll 이벤트에 대한 이벤트 객체는 일반적인 우리의 기대와 다르게, scroll 관련 이벤트 정보를 갖고 있지 않다. 얼만큼 스크롤되었는지 확인하고 싶다면 window 객체의 `window.scrollY` 속성을 이용한다.

<br />

> ##### 텍스트 자동 채우기
>
> 1. html 문서에서 lorem2000 입력 후 탭 키를 누르면 그 내부에 2000단어가 자동으로 채워진다.

<br />

#### 4.4 progress 이벤트

1. viedo 요소의 progress 이벤트에 event listener를 등록하면 짧은 시간 간격마다 progress 이벤트가 발생하면서 얼만큼 재생되었는지에 대한 정보를 제공받을 수 있다.

<br />

### 5. 파이어베이스 

#### 5.1 시작하기

1. 파이어베이스 Console에서 프로젝트를 생성한다.
2. Project Overview 탭에서 '웹 앱에 Firebase 추가'를 클릭한다.
3. 위 과정을 거치면 코드 스니펫을 확인할 수 있는데, 해당 코드 스니펫은 프로젝트에 대한 식별 번호이다. 해당 코드를 복사 후 사용하고자 하는 프로젝트에 붙여넣는다.
4. [Web에서 Firebase 시작하기](https://firebase.google.com/docs/web/setup)

<br />

#### 5.2 인증

1. firebase를 우리가 사용할 자원을 저장하고 있는 '자원 서버', github을 인증을 가능케할 계정을 제공하는 '인증 서버'라고 할 때, 인증 서버와 자원 서버가 다름에도 통신을 가능케 해주는 규약을 OAuth라고 한다.

2. github 계정을 통해 firebase 앱에 로그인할 때, github 페이지가 잠시 보이고, 로그인이 이뤄진 뒤에 인증 정보를 파이어베이스에 전송해주는 과정을 거치는데, 이 과정을 redirect 절차라고 한다.

3. Github 계정을 통한 인증 기능 구현 절차는 다음과 같다.

   1. 자바스크립트 프로젝트에 Firebase를 추가한다.
   2. GitHub에서 개발자 애플리케이션으로 [앱을 등록](https://github.com/settings/applications/new)한다. 이때 Authorization callback URL 입력란이 있는데, Authorization callback은 인증 결과를 firebase에 전송하는 것을 의미한다. 해당 입력란에 입력할 url 정보는 [프로젝트 Console] - [DEVELOP] - [Authenticaiton] - [로그인 방법 설정] - [Github]으로 이동하여 확인할 수 있다.
   3. 앱의 OAuth 2.0 **클라이언트 ID**와 **클라이언트 비밀번호**를 가져온다. 파이어베이스 Console에서 [Authenticaiton] - [로그인 방법] - [Github]으로 이동하여 '사용 설정'하고 클라이언트 ID 및 비밀번호 입력란을 확인할 수 있는데, 이 곳에 입력할 정보는 Github 계정에서 [Settings] - [Developer Settings]로 이동하여 확인할 수 있다.
   4. 위 과정을 모두 거쳤으면 Github 계정을 통한 인증 기능을 구현할 준비가 된 것이다. 각 제공 업체마다 설정 방법은 조금씩 다르지만, 이와 비슷한 방법으로 설정할 수 있다.

4. Github 인증 기능 통신을 위한 Github Auth Provider 인스턴스를 생성하기 위해 프로젝트에 다음 코드를 추가한다.

   ```javascript
   var provider = new firebase.auth.GithubAuthProvider();
   ```

5. 나머지 절차는 [Github으로 인증하기](https://firebase.google.com/docs/auth/web/github-auth)에서 확인할 수 있다.

6. 토큰은 자신이 누구인지 밝혀주는 정보이다. REST API에서 아이디 및 비밀번호 대신 토큰을 사용하여 인증한다.

<br />

<br />

## 5 Day

### 1. 파이어베이스 

#### 1.1 실시간 데이터베이스

1. Backend에서 사용하는 데이터베이스는 그들만의 데이터 저장소가 따로 존재하는 반면, 실시간 데이터베이스는 그냥 하나의 JSON 통이라 할 수 있다(JSON 트리).
2. 실시간 데이터베이스라는 그 이름대로, 실시간으로 데이터의 업데이트를 감지한다.
3. 규칙 설정을 통해 데이터 보안을 설정할 수 있다. 이를 인증 기능과 연계하여 인증한 사용자만 접근할 수 있는 데이터를 관리할 수 있다.
4. **배열은 지원하지 않는다**는 단점이 있다. 오로지 **객체**만 지원한다.
5. 여러 필터, 혹은 여러 정렬 기준이 필요한 복잡한 쿼리는 지원하지 않는다. 이러한 기능이 필요한 경우라면, 현 시점에서 베타 단계에 있는 [Firestore](https://firebase.google.com/docs/firestore/?hl=ko)의 사용을 고려해볼 수 있다.
6. 규칙 설정에서 `.read`는 실시간 데이터베이스를 읽을 수 있는 조건을 나타내고, `.write`는 쓸 수 있는 조건을 나타낸다.
7. `auth != null`에서 auth는 사전 정의 변수로, 인증이 된 상태일 때 해당 변수에 사용자 객체가 담겨있고, 인증이 되지 않은 상태일 때 `null`이 담겨있다. 기본 규칙 설정을 그대로 사용한다면, 인증이 된 상태이기만 하면 모든 데이터를 읽고 쓸 수 있다.
8. 채팅 방에 대한 데이터베이스가 있다고 가정해보자. 채팅 방에 대한 정보, 메세지에 대한 정보를 따로 저장한 다음, 속성 필드를 이용해 관계를 명시해주는 것을 정규화(normalize)라고 한다.
9. 데이터를 일부만 변경하고 싶을 때 `update()`를 사용하고, 통째로 변경하고 싶을 때 `set()`을 사용한다.
