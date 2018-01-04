# Today I Learned

## 1 Day

### 1. Iterable

#### 1.1 Iterable이란?

1. 반복 가능한 객체(iterable object)는 `for...of` 구문과 함께 ES2015에서 도입되었다. 반복 가능한 객체를 다른 객체와 구분짓는 특징은, 객체의 `Symbol.iterator` 속성에 **특별한 형태의 함수**가 들어있다는 것이다.

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

2. 객체의 `Symbol.iterator` 속성에 특정 형태의 함수가 들어있다면, 이를 반복 가능한 객체(iterable object) 혹은 줄여서 **iterable**이라 부르고, **해당 객체는 iterable protocol을 만족한다**고 말한다. 이런 객체들에 대해서는 ES2015에서 추가된 다양한 기능들을 사용할 수 있다.

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

   - `for...of` 루프
   - spread 연산자 (`...`)
   - 분해대입(destructuring assignment)
   - 기타 iterable을 인자로 받는 함수

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

1. 그러면 우리가 직접 iterable인 객체를 만들 수는 없을까? 결론부터 말하면, iterable protocol을 구현하기만 하면 **어떤 객체든 iterable이 될 수 있다.**

2. Iterable을 구현하는 가장 쉬운 방법은 ES2015에 도입된 **generator 함수**를 사용하는 것이다.

3. Generator 함수는 **iterable 객체를 반환하는 특별한 형태의 함수**이다. 아래와 같은 문법을 통해 generator 함수를 정의할 수 있다.

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

4. Generator 함수를 호출하면 객체가 생성되는데, 이 객체는 iterable protocol을 만족한다. 즉, `Symbol.iterator`속성을 갖고 있다.

   ```javascript
   function* gen1() {
     // ...
   }

   // `gen1`를 호출하면 iterable이 반환된다.
   const iterable = gen1();

   iterable[Symbol.iterator]; // [Function]
   ```

5. Generator 함수 안에서는 `yield`라는 특별한 키워드를 사용할 수 있다. Generator 함수 안에서 `yield` 키워드는 `return`과 유사한 역할을 하며, iterable의 기능을 사용할 때 **yield 키워드 뒤에 있는 값들을 순서대로 넘겨준다.**

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

7. 아래는 다양한 generator 함수이다. `yield` 키워드를 제외하면, generator 함수 내부의 동작 방식은 일반적인 함수와 별반 다르지 않다. 즉, 다른 함수에서 할 수 있는 일이라면 generator 함수 안에서도 모두 할 수 있다.

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
   // Generator 함수 내부에서 정의된 일반 함수에서는 `yield` 키워드를 사용할 수 없다.
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

2. iterable 객체는 iterable protocol을 만족한다. 즉, `Symbol.iterator` 속성에 **특별한 형태의 함수가 저장되어 있다**. Iterable protocol을 만족하려면, `Symbol.iterator` 속성에 저장되어 있는 함수는 **iterator** 객체를 반환해야 한다.

3. Iterator 객체는 아래의 특별한 조건을 만족하는 객체이다. 아래 조건을 **iterator protocol**이라 한다.

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

4. Iterable protocol과 iterator protocol을 모두 이해했다면, 이제 직접 iterable을 만들 수 있다. 아래는 앞의 예제에 있었던 `range` 함수를 generator 함수를 사용하지 않고 똑같이 구현한 결과이다. Generator 함수를 사용했을 때보다 훨씬 복잡한데, 이 때문에 iterator protocol을 직접 구현하는 대신 generator 함수를 사용하는 경우가 많다. 다만, `next` 메소드를 사용하면 iterable을 세부적으로 제어할 수 있으므로, iterator 대해서 알아둘 필요는 있다.

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

5. 제너레이터 함수에 의해 반환된 제너레이터 객체는 iterable이고, iterable 객체의 Symbol.iterator 속성에 저장된 함수를 호출하면 iterator 객체가 반환된다. 

6. 제너레이터 함수는 특이하게도 Symbol.iterator 프로퍼티에 저장된 함수가 자신과 같다. iterable인 동시에 iterator이다.

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

1. Generator 함수로부터 만들어진 객체는 일반적인 iterable처럼 쓸 수 있지만, iterator와 관련된 특별한 성질을 갖고 있다.

2. generator 함수로부터 만들어진 객체는 **iterable protocol과 iterator protocol을 동시에 만족한다.** 즉, `Symbol.iterator`를 통해 iterator를 생성하지 않고도 바로 `next`를 호출할 수 있다.

   ```javascript
   function* gen() {
     // ...
   }

   const genObj = gen();
   genObj[Symbol.iterator]().next === genObj.next; // true
   ```

3. 두 번째로, generator 함수 안에서 `return` 키워드를 사용하면 반복이 바로 끝나면서 `next` 메소드에서 반환되는 객체의 속성에 앞의 반환값이 저장된다. 다만, `return`을 통해 반환된 값이 반복 절차에 포함되지는 않는다.

   ```javascript
   function* gen() {
     yield 1;
     return 2; // generator 함수는 여기서 종료된다.
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

4. generator 함수로부터 생성된 객체의 `next` 메소드에 인자를 주어서 호출하면, generator 함수가 멈췄던 부분의 `yield` 표현식의 결과값은 앞에서 받은 인자가 된다.

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

1. 다음은 iterable을 활용하는 몇 개의 generator 함수 예제이다.

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
       // `yield*`와는 다르게, iterator의 `next` 메소드를 이용하면 iterable의 일부만 가져올 수 있다.
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

2. Generator 메소드를 정의하려면, 메소드 이름 앞에 `*` 기호를 붙여주면 된다. 아래와 같이 `Symbol.iterator` 메소드를 generator로 정의해주면, 클래스의 인스턴스를 쉽게 iterable로 만들 수 있다.

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

3. 아래는 Symbol.iterator에 제너레이터 함수를 정의함으로써 Gen의 인스턴스를 이터러블 객체로 구현한 예제이다.

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

1. `offsetParent` 프로퍼티는 특정 엘리먼트의 position 속성으로 위치를 잡을 때 기준이 되는 요소를 나타낸다.

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

## 2 Day

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
2. **나중에 집어넣은 데이터가 먼저 나옵니다.** 이 특징을 줄여서 LIFO(Last In First Out)라고 부른다.
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

1. `setTimeout`과 `setInterval`은 각각 **타이머 식별자**를 반환합니다. 이 식별자를 가지고 실행 중인 타이머를 취소할 수 있다.

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

   // 실제 지연시간과 약간의 차이가 존재합니다.

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
     return add(x, 2); // `add`를 호출
   }

   function add2AndPrint(x) {
     const result = add2(x); // `add2`를 호출
     console.log(result); // `console.log`를 호출
   }

   add2AndPrint(3); // `add2AndPrint`를 호출

   // Uncaught Error: add
   //   at add(debug.html: 14)
   //   at add2(debug.html: 19)
   //   at add2AndPrint(debug.html: 23)
   //   at debug.html: 27
   ```

3. 브라우저에서는 다음과 같은 절차를 통해 **오래 기다려야 하는 일**을 처리할 수 있습니다.

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

2. 다음은 debounce, throttle을 구현한 코드이다.

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

1. 위에서 설명한 콜백의 문제를 해결하기 위해 여러 라이브러리들이 등장했고, 그 중에서 개발자들에게 널리 선택받은 것이 바로 Promise 패턴을 사용한 라이브러리들([jQuery Deffered](https://api.jquery.com/category/deferred-object/), [Q](http://documentup.com/kriskowal/q/), [Bluebird](http://bluebirdjs.com/docs/getting-started.html))이었다. 이 라이브러리들이 [표준화](https://promisesaplus.com/)되어, 결국 ES2015에 이르러 JavaScript 언어 자체에 포함되게 되었다.

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

