# Today I Learned

## 1 Day

### 1. 값 더 알아보기

#### 1.1 블록 스코프

1. 특별한 기능이 없는 블록을 만들 수도 있다. 객체와 유사하게 중괄호로 코드의 일부분을 둘러싸면 된다.

   ```javascript
   {
     let i = 0;
   }
   console.log(i); // ReferenceError: i is not defined
   ```

<br />

#### 1.2 함수 호출

1. 만약 함수 호출 시에 객체를 인자로 넘긴다면, 이 때 역시 **실제로 복사되는 것은 객체 자체가 아니라 참조**이다. 그래서, 우리는 이 참조를 이용해 **원본 객체의 내용을 변경할 수 있다.** 원본이나, 복사된 참조나 **같은 객체를 가리키기 때문이다.**

2. 아래 코드에서 `obj`가 실제 heap에 저장된 객체에 대한 참조를 담고 있을 때, `obj`를 `addProp(o)` 함수에 인자로 전달하면 `o`에는 `obj`가 참조하고 있는 같은 객체에 대한 참조 주소가 복사된다.

   ```javascript
   const obj = {};

   function addProp(o) {
     o.prop = 1;
   }

   // 변수 'obj'에 저장되어 있는 참조가 매개변수 'o'에 복사된다.
   addProp(obj);

   console.log(obj.prop); // 1
   ```

<br />

#### 1.3 객체의 같음

1. 프로그램을 작성하다가 객체에 대한 비교를 하는 코드를 짜고 있는 자신을 발견하게 되면, 지금 객체의 내용을 비교하려고 하는 것인지, 또는 객체의 참조를 비교하려고 하는 것인지를 꼭 생각해보자. 객체의 내용을 통해 비교하고 싶다면, 깊은 비교 기능을 지원하는 [라이브러리](https://www.npmjs.com/package/fast-deep-equal)를 이용하거나, 정확히 어떤 내용을 비교하고 싶은지를 가지고 **함수 혹은 메소드**를 작성한 후 그것을 이용하면 된다.

   ```javascript
   // npm install fast-deep-equal
   var equal = require('fast-deep-equal');
   console.log(equal({foo: 'bar'}, {foo: 'bar'})); // true 
   ```

<br />

#### 1.4 불변성(Immutability)

1. 가변인 값은 어디서 어떻게 변경될 지 알 수 없다. 변경되지 말아야 할 객체가 있다면, 정말로 변경되지 않도록 신경 써서 코드를 작성해야 한다. 그러나 객체가 정말로 변경되지 않았는지를 확인하는 일은 쉽지 않아서, 때때로 **객체의 가변성 때문에 프로그래밍이 어려워지기도 한다.**

2. 객체의 가변성 때문에 어려움을 겪고 있다면, 두 가지 해결책을 시도해볼 수 있다.

   1. 먼저 `Object.freeze`의 사용을 고려해볼 수 있다. `Object.freeze`는 객체를 **얼려서** 속성의 추가, 변경, 삭제를 막는다. 다만 `Object.freeze`를 호출한다고 해서 **객체 안에 있는 객체**까지 얼려버리지는 않으므로, 중첩된 객체에는 `Object.freeze`를 사용하기가 조금 까다롭다. 그리고, 다음에 소개할 방법과 비교하면 여러모로 편의성이 떨어진다.

      ```javascript
      const obj = {prop: 1};

      Object.freeze(obj);

      // 모두 무시된다.
      obj.prop = 2;
      obj.newProp = 3;
      delete obj.prop;

      console.log(obj); // { prop: 1 }
      ```

   2. 다음으로 [Immutable.js](https://facebook.github.io/immutable-js/) 같은 라이브러리의 사용을 고려해보자. 이런 라이브러리들은 `Object.freeze`처럼 객체를 정말로 얼려버리지는 않지만, 객체를 **마치 불변인 것처럼** 다룰 수 있는 방법을 제공한다. 다시 말하면, 이 객체들은 메소드를 통해 내용이 조금이라도 변경되면 아예 새로운 객체를 반환한다. 즉, **내용이 달라지면 참조 역시 달라지게 되어** 객체의 내용이 변경되었는지를 확인하는 작업이 아주 쉬워진다. 아래는 Immutable.js에서 제공하는 `List`를 활용한 예제이다.

      ```javascript
      import {List} from 'immutable';

      // Immutable.js에서 제공하는 `List`는 배열과 유사하지만, 불변인 것처럼 다룰 수 있는 자료구조이다.
      const list = List.of(1, 2, 3);
      const newList = list.push(4); // 새 List 인스턴스를 반환한다.

      // 내용이 달라지면, 참조도 달라진다.
      list === newList; // false
      ```

   <br />

#### 1.5 래퍼 객체(Wrapper Object)

1. `String.prototype.valueOf()` 메소드를 이용하여 String 객체 타입을 원시 타입의 값으로 되돌릴 수 있다.

<br />

### 2. 함수 더 알아보기

#### 2.1 객체로서의 함수

1. 함수 객체는 두 가지 유용한 속성을 갖고 있다.

   1. `length` - 함수의 매개변수의 갯수를 반환한다.
   2. `name` - 함수의 이름을 반환한다.

   ```javascript
   function add(x, y) {
     return x + y;
   }
   console.log(add.length); // 2
   console.log(add.name); // add
   ```

<br />

#### 2.2 엄격 모드(Strict Mode)

1. JavaScript에는 **엄격 모드(strict mode)**라는 것이 있다. 엄격 모드에서는 JavaScript 언어의 동작 방식이 미묘하게 바뀌는데, 예전 버전 JavaScript의 특징으로 인해 프로그래머가 실수하기 쉬운 **몇 가지 문법에 대해 제약사항을 추가한다.** 예를 들어, 생성자 함수를 new 키워드를 사용하지 않고 호출했을 때 `this`가 전역 객체에 바인딩되지만, 엄격 모드에서는 전역 객체 대신 `undefined`를 반환한다.

2. 엄격 모드를 활성화하려면 `.js` 파일 또는 함수의 가장 위에 `'use strict';`와 같이 문자열을 써 주면 된다. 파일 위에서 엄격 모드를 선언하면 해당 파일 전체가 엄격 모드로 동작하고, 함수 위에서 선언한다면 해당 함수만 엄격 모드로 동작한다.

3. Strict Mode를 사용하면 안전하지 않은 동작을 수행했을 때 차단되거나 예외가 발생해서 더 안전한 스크립트를 작성할 수 있도록 도와준다.

4. `"use strict";`로 Strict Mode를 켤 수 있지만 보는 바와 같이 그냥 문자열일 뿐이고 Strict Mode를 위해서 새로운 문법을 추가하지 않았다. 이는 호환성에 아무런 문제가 없기 때문에 호환성 걱정없이 Strict Mode를 사용할 수 있다는 것이고 구형 브라우저에서는 단순 문자열이기 때문에 무시할 것이다. 즉 Strict Mode는 지금 당장이라도 사용할 수 있는 기능이다. 


   ```javascript
   function Person(name) {
     // 엄격 모드를 활성화한다.
     'use strict';

     // `undefined`의 속성을 변경하려고 하고 있기 때문에, 에러가 발생한다.
     this.name = name;
   }

   Person('john'); // TypeError: Cannot set property 'name' of undefined
   ```

5. 엄격 모드에서 달라지는 점은 다음과 같다. (출처: [Outsider's Dev Story](https://blog.outsider.ne.kr/823))
   1. 정의되지 않은 변수에는 할당을 할 수 없다.
   2. 프로퍼티의 경우 `writable` 속성이 `false`인 프로퍼티에 값을 작성하거나 `configurable` 속성이 `false`인 프로퍼티를 지우거나 `extensible` 속성이 `false`인 객체에 프로퍼티를 추가하는 등의 시도를 하면 TypeError 오류가 발생한다. Strict Mode가 아닌 경우 이러한 시도는 아무런 노티없이 실패한다.
   3. 객체 리터럴에서 같은 프로퍼티를 두번이상 정의하면 SyntaxError 예외가 발생한다.
   4. `eval`이라는 이름의 사용자체를 막고 SyntaxError를 발생시킨다.
   5. `eval` 함수를 사용해서 새로운 변수를 정의하는 것도 차단한다.
   6. 함수의 `arguments` 객체를 덮어쓰면 오류가 발생한다.
   7. 함수의 파라미터에서 같은 이름의 파라미터를 정의하면 오류가 발생한다.
   8. `with(){}` 문은 Strict Mode에서 제거되었다. 실제로도 문법 오류라고 나오며 `with` 문이 이해하기도 어렵고 잘못사용될 여지가 크기 때문이다.
   9. "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"는 미래를 위한 예약어가 되었다.
   10. 또한 this가 참조하는 객체가 없는 경우 자동으로 전역객체로 바꾸지 않는다.
6. 이처럼 엄격 모드는 프로그래머의 실수를 미연에 방지해주기 때문에, **항상 사용하는 것이 좋다.**
7. 엄격 모드를 사용하기 위해 매번 `'use strict';`를 직접 써주어야 할까? 다행히도 그렇지는 않다. **ES2015 모듈**을 이용해 작성된 코드는 **항상 엄격 모드로 동작**하기 때문에, 함수 위에 `'use strict';`를 붙여주지 않아도 엄격 모드로 동작한다. 요즈음 만들어지는 클라이언트 측 JavaScript 코드는 대부분 Babel과 TypeScript같은 트랜스파일러를 통해 ES2015 모듈 방식으로 작성되기 때문에, 이런 도구를 사용하고 있다면 **본인이 작성하는 코드가 항상 엄격 모드로 동작하고 있다**고 생각해도 무방하다.
8. 엄격 모드에 대해서 자세히 알고 싶다면 [MDN 문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)를 참고하자.

<br />

#### 2.3 this 바꿔치기

1. `function` 구문을 통해 정의된 함수 내부의 `this` 키워드가 **실제로 무엇을 가리킬 것인가**는, 메소드가 어떻게 **정의**되는가에 의해 결정되는 것이 아니라 메소드가 어떻게 **사용**되는가에 의해 결정된다. 아래와 같이 `introduce`라는 함수가 객체 외부에서 정의되었고, `person1`과 `person2`에서 재사용되었는데도 불구하고 메소드는 잘 동작한다.

   ```javascript
   function introduce() {
     return `안녕하세요, 제 이름은 ${this.name}입니다.`;
   }

   const person1 = {
     name: '윤아준',
     introduce
   };

   const person2 = {
     name: '신하경'
     introduce
   };

   person1.introduce(); // 안녕하세요, 제 이름은 운아준입니다.
   person2.introduce(); // 안녕하세요, 제 이름은 신하경입니다.
   ```

2. 함수 객체의 `bind` 메소드를 호출하면, 메소드의 **인자로 넘겨준 값이 this가 되는 새로운 함수**를 반환한다. 원래 함수를 바꾸지 않고 인자로 넘겨준 값을 this에 바인딩하는 새로운 함수를 만든다.

   ```javascript
   function printGrade(grade) {
     console.log(`${this.name} 님의 점수는 ${grade}점입니다.`);
   }

   const student = {name: 'Mary'};
   const printGradeForMary = printGrade.bind(student);

   printGradeForMary(100); // Mary 님의 점수는 100점입니다.
   ```

<br />

#### 2.4 arguments와 나머지 매개변수 (Rest Parameters)

1. `function` 구문을 통해 생성된 함수가 호출될 때는, `arguments`라는 변수가 함수 내부에 자동으로 생성된다.

2. `arguments`는 유사 배열 객체(array-like object)이자 반복 가능한 객체(iterable object)로, 함수에 주어진 인자가 순서대로 저장되기 때문에 인덱스를 가지고 인자를 읽어오거나 `for...of`를 통해 순회할 수 있다.

3. `arguments`는 ES2015 이전까지 **인자의 갯수에 제한이 없는 함수**를 정의하는 데에 사용되고는 했다. 하지만, ES2015에서 도입된 **나머지 매개변수(rest parameters)** 문법을 통해 똑같은 기능을 더 깔끔한 문법으로 구현할 수 있기 때문에, `arguments`는 더 이상 사용되지 않는 기능이 되었다.

   ```javascript
   // arguments
   function sum() {
     let result = 0;
     for (let item of arguments) {
       result += item;
     }
     return result;
   }

   sum(1, 2, 3, 4); // 10

   // rest parameters
   function sum(...ns) {
     let result = 0;
     for (let item of ns) {
       result += item;
     }
     return result;
   }

   sum(1, 2, 3, 4); // 10
   ```

4. 위의 예제와 같이, 매개변수 앞에 `...`을 붙여주면, 해당 매개변수에 모든 인자가 저장된다. `arguments`와는 달리 나머지 매개변수는 **실제 배열**이기 때문에, 배열의 메소드를 활용할 수 있다.

   ```javascript
   function sum(...ns) {
     // `for...of` 루프 대신에 `reduce` 메소드를 사용해서 합계를 구할 수 있다.
     return ns.reduce((acc, item) => acc + item, 0);
   }

   sum(1, 2, 3, 4); // 10
   ```

5. 단, `...` 문법은 마지막 매개변수에만 사용할 수 있다.

   ```javascript
   function printGrades(name, ...grades) {
     console.log(`${name} 학생의 점수는 ${grades.join(', ')} 입니다.`);
   }

   printGrades('Mary', 96, 78, 68); // Mary 학생의 점수는 96, 78, 68 입니다.
   ```

<br />

#### 2.5 화살표 함수

1. `function` 구문으로 정의되는 함수와 비교했을 때, 화살표 함수는 문법 측면에서만 다른 것이 아니라 특별한 성질을 갖고 있다.
   1. 화살표 함수는 **생성자로 사용될 수 없다.** 따라서 `prototype` 속성을 갖고 있지 않다. 그리고 스스로의 `new.target`을 가지지 않는다.
   2. 화살표 함수 내부에서 **yield 키워드를 사용할 수 없다.** 즉, 제너레이터로 사용될 수 없다.
   3. 화살표 함수로 정의한 함수는 한 번 정의되고나면 `call`, `apply`, `bind`로도 `this`에 바인딩된 객체를 변경할 수 없다.

<br />

### 3. 브라우저 측 JavaScript

1. [Web API](https://developer.mozilla.org/en-US/docs/Web/API)

2. 어떤 태그를 DOM API에서 다룰 때 그 객체를 가리켜서 Element라고한다.

3. DOM API는 특정 언어에 상관없이 사용 가능해야 하기 때문에 `querySelectorAll()`에 의해 반환되는 객체는 Javascript만의 배열 객체가 아니라 `NodeList`라는 특별한 객체이다.

4. `NodeList`는 배열은 아니지만 배열의 `forEach`와 비슷한 `forEach`를 제공하기 때문에 이 메소드를 사용해서 순회할 수 있다.

5. `Array.from()`을 사용하면 인자로 전달된 객체를 배열로 변환할 수 있다.

   ```javascript
   Array.from(document.querySelectorAll('div'));
   ```

6. 다음과 같은 방법으로 선택된 Element에 대해 특정 조건을 만족하는지 확인할 수 있다.

   ```javascript
   const logo = document.querySelector('.logo');

   // logo의 id가 hplogo인지 확인한다.
   logo.matches('#hplogo');

   // logo가 div 요소이고 id는 hplogo이며 title 속성을 갖고 있는지 확인한다.
   logo.matches('div#hplogo[title]')
   ```

7. 자신을 포함하여 조상 중에 id가 dood인 가장 가까운 요소를 탐색한다.

   ```javascript
   const logo = document.querySelector('.logo');
   const dood = logo.closest('#dood');
   ```

<br />

### 4. SVG

1. **확장가능한 벡터 그래픽 (SVG)**은 2차원의 벡터 그래픽을 기술하기 위한 [XML](https://developer.mozilla.org/ko/docs/XML) 마크업 언어이다. SVG는 본질적으로 어떤 XHTML을 그래픽화하기 위해 텍스트화하기 위한 것이다.
2. SVG는 Adobe사가 소유한 Flash 기술과 유사하지만, [W3C 권고](http://www.w3.org/Graphics/SVG/)라는 점에서 Flash 기술과는 차별된다(즉, 표준이다). 그리고 플래시가 폐쇄적인 바이너리 형식인 데 반해 SVG는 XML 기반 포맷이다. 이는 [CSS](https://developer.mozilla.org/ko/docs/CSS), [DOM](https://developer.mozilla.org/ko/docs/DOM), [SMIL](http://www.w3.org/AudioVideo/)과 같은 다른 [W3C](http://www.w3.org/) 표준들과 함께 작업하는 것을 고려해서 설계되었다는 것을 보여준다.
3. [MDN 문서](https://developer.mozilla.org/ko/docs/Web/SVG)

<br />

<br />

## 2 Day

### 1. 객체 더 알아보기

#### 1.1 객체 자신의 속성

1. 객체 자신이 어떤 속성을 가지고 있는지를 확인하기 위해 `Object.prototype.hasOwnProperty` 메소드를 사용할 수 있다.
2. 상속받은 속성을 인자로 전달하면 `false`를 반환한다.

<br />

#### 1.2 데이터 속성(Data Property)의 부수속성(Property Attribute) 

1. `delete` 연산자를 통해 객체의 속성을 지울 수 있다는 것을 배운 적이 있다.

   ```javascript
   const obj = {prop: 1};
   delete obj.prop; // true
   obj.prop; // undefined;
   ```

2. 하지만, 객체의 속성을 항상 삭제할 수 있는 것은 아니다. 내장 객체 중에 어떤 속성은 `delete` 연산자를 통해 삭제하려고 해도 삭제가 되지 않는 것이 있다.

   ```javascript
   delete Math.PI; // false
   Math.PI; // 3.141592653589793
   ```

3. 이처럼, JavaScript에서는 **각 속성마다 동작 방식이 다를 수 있다.** 이에 대한 정보는 **속성의 부수속성(property attribute)**이라고 불리는 곳에 숨겨져 있다.

4. 객체의 부수속성을 알아보기 위해, `Object.getOwnPropertyDescriptor`라는 정적 메소드를 사용해 부수속성을 나타내는 객체를 얻을 수 있다. 이 객체를 **속성 기술자(property descriptor)**라고 부른다.

   ```javascript
   const obj = {prop: 1};

   Object.getOwnPropertyDescriptor(obj, 'prop');
   // { value: 1, writable: true, enumerable: true, configurable: true }

   Object.getOwnPropertyDescriptor(Math, 'PI');
   // { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }
   ```

5. 이처럼 **'데이터 속성(data property)'**에 대한 속성 기술자는 네 가지 속성을 갖는다.

   1. `value`: 속성에 어떤 값이 저장되어 있는지를 나타낸다.
   2. `writable`: 변경할 수 있는 속성인지를 나타낸다.
   3. `enumerable`: 열거 가능한 속성인지를 나타낸다.
   4. `configurable`: 부수속성을 변경하거나 속성을 삭제할 수 있는지를 나타낸다.

6. 위 코드 예제에서 얻은 속성 기술자를 살펴보면,  `obj.prop`의 `configurable` 부수속성은 `true`이고 `Math.PI`의 `configurable` 부수속성은 `false` 이다. 이 때문에 `Math.PI`를 삭제하려고 해도 삭제가 되지 않았던 것이다.

7. 두 속성의 `writable` 부수속성에도 차이가 있다. `Math.PI`는 속성의 값을 변경하려고 해도 변경이 되지 않는다.

   ```javascript
   Math.PI = 10;
   Math.PI; // 3.141592653589793
   ```

8. 어떤 객체의 전체 속성에 대한 속성 기술자를 얻어오려면, `Object.getOwnPropertyDescriptors` 정적 메소드를 사용하면 된다.

   ```javascript
   Object.getOwnPropertyDescriptors(Math);
   // ...
   ```

9. 참고로, 엄격 모드가 아닐 때에는 `writable: false`, `configurable: false`인 속성을 변경하거나 삭제하려고 해도 에러가 나지 않고 그냥 무시되지만, 엄격 모드일 때에는 에러가 발생한다.

   ```javascript
   function func1() {
     delete Math.PI;
   }

   function func2() {
     'use strict';
     delete Math.PI;
   }

   func1(); // 에러가 발생하지 않는다.
   func2(); // TypeError: Cannot delete property 'PI' of #<Object>
   ```

<br />

#### 1.3 속성 기술자를 통해 객체의 속성 정의하기

1. 속성 기술자는 속성의 부수속성을 얻어올 때에만 사용하는 것이 아니다. 우리가 직접 속성 기술자를 이용해 속성을 정의할 수도 있다. 프로토타입 상속을 위해 사용했던 `Object.create` 정적 메소드는, 사실 두 번째 인자에 속성 기술자로 이루어진 객체를 받는다.

   ```javascript
   const obj = Object.create(Object.prototype, {
     prop: {
       value: 1,
       writable: false,
       enumerable: true,
       configurable: false
     },
     another: {
       value: 2
     }
   });

   console.log(obj); // {prop: 1}

   obj.prop = 2;
   console.log(obj.prop); // 1

   delete obj.prop;
   console.log(obj.prop); // 1
   ```

2. 속성 기술자에 `writable`, `enumerable`, `configurable` 속성을 주지 않으면, 해당 부수속성은 모두 `false`로 취급된다. 위 예제의 `another` 속성을 시험해보면 알 수 있다.

3. `Object.create` 외에, `Object.defineProperty` 혹은 `Object.defineProperties` 정적 메소드를 사용해서 이미 만들어진 객체에 대한 속성을 정의할 수도 있다.

   ```javascript
   const obj = {};
   Object.defineProperty(obj, 'prop', {
     value: 1,
     writable: false,
     enumerable: true,
     configurable: false
   });

   const obj2 = {};
   Object.defineProperties(obj2, {
     'property1': {
       value: true,
       writable: true
     },
     'property2': {
       value: 'Hello',
       writable: false
     }
     // etc. etc.
   });
   ```


<br />

#### 1.4 객체의 속성 열거하기

1. `enumerable` 부수속성은 객체의 속성을 열거할 때에 그 결과에 영향을 미친다. 객체의 속성을 열거할 때에 사용할 수 있는 방법에는 여러가지가 있다.

   1. `Object.keys` - **객체 자신의 속성** 중 **열거 가능한(enumerable) 속성**의 이름을 배열로 반환한다.
   2. `Object.values` - **객체 자신의 속성** 중 **열거 가능한(enumerable) 속성**의 속성 값을 배열로 반환한다.
   3. `Object.entries` - **객체 자신의 속성** 중 **열거 가능한(enumerable) 속성**의 속성, 값 쌍의 배열을 요소로 갖는 배열로 반환한다.
   4. `Object.getOwnPropertyNames` - **객체 자신의 모든 속성**의 이름을 배열로 반환한다. 열거 불가능한 속성도 포함한다.
   5. `for...in` 구문 - **객체 자신의 속성** 및 **상속받은 속성** 중 **열거 가능한(enumerable) 속성**의 이름을 배열로 반환한다.
   6. 대개의 경우 `Object.keys`를 사용하면 되지만, 상속받은 속성까지 열거하고 싶을 때는 `for...in`을, 열거 불가능한 속성도 열거하고 싶을 때는 `Object.getOwnPropertyNames`를 사용하면 된다.

2. `enumerable`이 `false`이면 `console.log`를 찍더라도 출력되지 않는다. 그러나 `Object.hasOwnProperty`를 이용하면 `true`를 반환한다.

   ```javascript
   const obj = {};
   Object.defineProperties(obj, {
     prop1: {
       value: 'hello',
       enumerable: true,
     },
     prop2: {
       value: 'world',
       enumerable: true
     },
     prop3: {
       value: 'javascript',
       enumerable: false
     }
   })

   console.log(obj) // { prop1: 'hello', prop2: 'world' }

   obj.hasOwnProperty('prop3') // true

   Object.keys(obj) // ['prop1', 'prop2']

   Object.values(obj) // ['hello', 'world']

   Object.entries(obj) // [['prop1', 'hello'], ['prop2', 'world']]

   Object.keys(Math) // []
   ```


<br />

#### 1.5 접근자 속성(Accessor Property)과 그 부수속성

1. 속성을 읽거나 변경하려고 할때 특정 속성에 대한 getter, setter를 통해 어떤 함수가 실행되도록 할 수 있다.

2. 접근자 속성의 필요성을 설명하기 위해, 화폐를 다루면서 환전 기능이 있는 프로그램을 짜야 한다고 가정해보자. 아래와 같이 '원' 단위와 '달러' 단위를 저장하는 객체를 만들 수 있을 것이다.

   ```javascript
   const money = {
     won: 1086,
     dollar: 1
   };
   ```

3. 하지만 위의 코드에는 문제가 있다. `won` 속성이 변경되었을 때 `dollar` 속성까지 자동으로 변경되지 않으므로, 둘 사이의 동기화가 깨지게 된다.

   ```javascript
   money.won += 1086;
   money.dollar; // 1
   ```

4. 이를 해결하기 위해, 객체에는 `_won` 속성을 저장하고 달러 단위가 필요할 때는 원 단위로부터 계산해내도록 메소드를 두는 방법을 사용할 수 있다.

   ```javascript
   function Money(won = 0) {
     Object.defineProperty(this, '_won', {
       value: won,
       writable: true
     }); // enumerable: false, configurable: false
   }
   Money.prototype.getWon = function() {
     return this._won;
   };
   Money.prototype.setWon = function(amount) {
     this._won = amount;
   };
   Money.prototype.getDollar = function() {
     return this._won / 1086;
   };
   Money.prototype.setDollar = function(amount) {
     this._won = amount * 1086;
   };

   const m = new Money();

   m.setWon(1086);
   m.getDollar(); // 1

   m.setDollar(2);
   m.getWon(); // 2172
   ```

5. 이제 원하던대로 두 단위 사이의 동기화가 잘 유지되지만, 코드가 조금 길어졌다. 특히, 속성을 사용하기 위해 매번 메소드를 호출해야 하는 것이 조금 불편하게 느껴진다. JavaScript는 위와 같은 코드를 조금 더 깔끔하게 작성할 수 있도록 도와주는 기능을 제공한다. 먼저 간단한 예제를 통해 살펴보자.

   ```javascript
   const obj = {
     get prop() {
       console.log('getter가 호출되었습니다.');
       return this._hidden;
     },
     set prop(arg) {
       console.log('setter가 호출되었습니다.');
       this._hidden = arg;
     }
   }

   // 'set prop' 메소드가 '1'을 인자로 해서 호출된다.
   obj.prop = 1;

   // 'get prop' 메소드가 호출되고 해당 메소드의 반환값을 읽어온다.
   obj.prop; // 1

   Object.getOwnPropertyDescriptors(obj);
   // {
   //   prop: {
   //     get: [Function: get],
   //     set: [Function: set],
   //     enumerable: true,
   //     configurable: true
   //   },
   //   ...
   // }
   ```

6. `obj` 객체 리터럴 안에서 함수 앞에 `get`과 `set` 키워드를 사용했다. 이 두 함수는 각각 `prop`이라는 속성의 getter와 setter가 된다. getter는 속성을 읽어올 때, setter는 속성을 변경할 때 호출된다. 이렇게 getter와 setter가 정의된 속성을 접근자 속성(accessor property)이라고 한다. 접근자 속성에 대한 속성 기술자는 네 가지 속성을 갖는다.

   1. `get`: getter 함수
   2. `set`: setter 함수
   3. `enumerable`: 열거 가능한 속성인지를 나타낸다.
   4. `configurable`: 부수속성을 변경하거나 속성을 삭제할 수 있는지를 나타낸다.

7. 데이터 속성의 속성 기술자와 비교해보면 `value`와 `writable`이 빠진 대신에 `get`, `set`이 포함되어 있다.

8. 이제 위 `Money` 생성자 예제를 접근자 속성을 통해 재작성해 보자. 접근자 속성 역시 속성 기술자를 통해 정의할 수 있다.

   ```javascript
   function Money(won) {
     this._won = won;
   }

   Object.defineProperties(Money.prototype, {
     won: {
       get: function() {
         return this._won;
       },
       set: function(arg) {
         this._won = arg;
       }
     },
     dollar: {
       get: function() {
         return this._won / 1086;
       },
       set: function(arg) {
         this._won = arg * 1086;
       }
     }
   });

   const w = new Money(1086);

   w.won += 1086;
   console.log(w.dollar); // 2

   w.dollar += 1;
   console.log(w.won); // 3258

   ```

   `Money` 생성자를 사용하는 쪽의 코드가 훨씬 더 알아보기 쉬워졌고, 덧셈 할당 연산자(`+=`)을 사용할 수도 있게 되었다.

9. 간단한 코드를 짜는 경우라면 getter, setter는 잘 쓰이지 않는다. 리액트 생태계에 최근 [mobx.js](mobx.js.org)가 생겼는데 이 라이브러리에서 getter와 setter를 사용한다.

   > ##### Class의 getter와 setter
   >
   > 1. Class 내부에 정의한 getter와 setter는 해당 클래스의 프로토타입에 정의된다.
   >
   >    ```javascript
   >    Class Foo {
   >      constructor() {
   >        this._a = 1;
   >      }
   >      
   >      get a() {
   >        return this._a
   >      }
   >      
   >      set a(e) {
   >        this._a = e
   >      }
   >    }
   >
   >    Object.getOwnPropertyDescriptors(Foo.prototype)
   >    // {constructor: {…}, b: {…}}
   >    // b:
   >    // {get: ƒ, set: ƒ, enumerable: false, configurable: true}
   >    // constructor:
   >    // {value: ƒ, writable: true, enumerable: false, configurable: true}
   >    // __proto__:
   >    // Object
   >    ```
   >
   > <br />
   >
   > ##### underscore
   >
   > 1. 코드 예제에서 볼 수 있는 것처럼, 숨기고 싶은 속성의 이름을 언더스코어(`_`)로 시작하도록 짓는 관례가 널리 사용된다.

<br />

#### 1.6 얕은 복사(Shallow Copy) & 깊은 복사(Deep Copy)

1. `Object.assign` 정적 메소드는 인자로 받은 객체들의 **모든 열거 가능한 속성**을 대상 객체에 복사한다.

   ```javascript
   const obj = {};
   Object.assign(obj, {a: 1}, {b: 2});

   console.log(obj); // { a: 1, b: 2 }
   ```

2. `Object.assign`은 객체를 복제하는 수단으로도 사용된다.

   ```javascript
   const obj = {
     a: 1,
     b: 2
   };

   // 빈 객체를 대상으로 'Object.assign'을 사용하면, 객체를 간단히 복제할 수 있다.
   const obj2 = Object.assign({}, obj);
   console.log(obj2); // { a: 1, b: 2 }
   ```

3. 다만, 여기서 주의해야 할 점이 있다. 객체가 중첩되어 있다면, 내부에 있는 객체는 복제되지 않는다. `Object.assign을 통해 속성의 값이 복사될 때, 실제로 복사되는 것은 중첩된 객체라 아니라 그에 대한 **참조**이기 때문이다.

   ```javascript
   const obj = {
     innerObj: {
       a: 1,
       b: 2
     }
   };

   const obj2 = Object.assign({}, obj);

   // 'innerObj'는 복제되지 않았다.
   obj.innerObj === obj2.innerObj;
   obj.innerObj.a = 3;
   obj2.innerObj.a; // 3
   ```

4. 프로그래밍 분야에서는 중첩된 자료구조까지 모두 복사하는 것을 가지고 **깊은 복사(deep copy)**라고 한다. JavaScript에는 깊은 복사를 위한 기능이 내장되어 있기 않기 때문에, 직접 구현을 해서 사용해야 한다. 그런데 깊을 복사를 할 때 고려해야 할 것들이 많아서 (순환참조, 프로토타입, 열거 불가능한 속성, getter/setter 등) 정말로 직접 구현하기는 어렵고, [관련 라이브러리](https://www.npmjs.com/package/clone)를 사용하는 것을 추천한다.

5. 비슷한 객체의 복제가 빈번하게 이루어져야 하는 경우에는 [Immutable.js](https://facebook.github.io/immutable-js/)와 같은 라이브러리의 사용도 고려해보면 좋다.

<br />

#### 1.7 Object.preventExtensions

1. JavaScript는 특정 객체에 더 이상 속성을 추가하지 못하도록 막아버리는 기능을 제공한다.

   ```javascript
   const obj = {};

   // 객체에 속성이 추가되는 것을 막는다.
   Object.preventExtensions(obj);

   function func() {
     'use strict';
     obj.a = 1;
   }

   func(); // TypeError: Cannot add property a, object is not extensible
   ```

2. JavaScript의 모든 객체에는 `[[Extensible]]`이라는 숨겨진 속성이 있다. 이 속성의 기본값은 `true`인데, 이 값이 `false`가 되면 해당 객체에 속성을 추가하는 것이 불가능해진다. `Object.preventExtensions` 정적 메소드는 `[[Extensible]]` 속성을 `false`로 바꿔주는 역할을 한다.

3. 객체의 `[[Extensible]]` 속성 값은 `Object.isExtensible` 정적 메소드를 통해 알아볼 수 있다.

   ```javascript
   const obj = {};
   Object.isExtensible(obj); // true
   Object.preventExtensions(obj);
   Object.isExtensible(obj); // false
   ```

4. `Object` 생성자의 정적 메소드 중에 `[[Extensible]]` 속성을 바꿔버리는 메소드가 두 개 더 있다.

   1. `Object.seal` - 인자로 들어온 객체의 `[[Extensible]]` 속성을 `false`로 바꾸고, 객체 자신의 속성을 모두 `configurable: false` 상태로 바꾼다.
   2. `Object.freeze` - 인자로 들어온 객체의 `[[Extensible]]` 속성을 `false`로 바꾸고, 객체 자신의 속성을 모두 `configurable: false, writable: false` 상태로 바꾼다.

5. 아래의 표는 앞에서 다뤘던 세 정적 메소드를 호출한 뒤에 객체가 어떻게 변하는지를 나타낸다. O는 가능, X는 불가능을 나타낸다.

   | 메소드                        | 속성 추가 | 속성 읽기 | 속성 변경 | 속성 삭제 및 재정의 |
   | -------------------------- | ----- | ----- | ----- | ----------- |
   | `Object.preventExtensions` | X     | O     | O     | O           |
   | `Object.seal`              | X     | O     | O     | X           |
   | `Object.freeze`            | X     | O     | X     | X           |

6. 객체에 `Object.seal` 혹은 `Object.freeze`가 호출되었는지를 확인하기 위해 다음 메소드를 사용할 수 있다. 단, 객체에 대해 `Object.seal` 혹은 `Object.freeze`가 호출된 적이 없더라도 아래 조건만 충족하면 이 메소드들은 `true`를 반환할 수 있다.

   1. `Object.isSealed` - 객체가 확장 불가능하고 객체 자신의 모든 속성에 대한 부수속성이 `configurable: false`에 해당하면 `true`를, 아니면 `false`를 반환한다.
   2. `Object.isFrozen` - 객체가 확장 불가능하고 객체 자신의 모든 속성에 대한 부수속성이 `configurable: false, writable: false`에 해당하면 `true`를, 아니면 `false`를 반환한다.

<br />

### 2. 함수형 프로그래밍

1. 객체보다 함수를 더 많이 사용하자는, 함수로 프로그래밍하자는 패러다임을 말한다.
2. 함수형 프로그래밍에서 중요한 두 가지 키워드는 '함수'와 '불변성'이다.
3. 공유되어있는 가변 상태(Shared Mutable State)를 지양한다.
4. 함수형 프로그래밍을 가장 잘 구현한 언어로 하스켈(Haskell)이 있다. 하스켈에서는 가변 데이터가 아예 존재하지 않는다.
5. React.js 또한 이러한 철학으로부터 만들어진 라이브러리이다. 이러한 사고 방식을 잘 이해해야 한다(물론 객체도 많이 쓰이긴 한다).

<br />


#### 2.1 클로저(Closure)

1. 때때로 클로저의 성질은 **데이터를 숨기고 정해진 방법을 통해서만 데이터에 접근할 수 있도록 제한**을 두는 데 활용되기도 한다.

   ```javascript
   function personFactory(initialAge) {
     let age = initialAge;
     return {
       getOlder() {
         age++;
       },
       getAge() {
         return age;
       }
     };
   }
   // `age`를 직접 변경할 수 있는 방법이 없다!
   ```

<br />

### 3. 연산자 더 알아보기 

1. 코드 중에 **값으로 변환될 수 있는** 부분을 **표현식(expression)**이라고 부른다. 아래 목록은 표현식의 예이다.

   1. 리터럴
      1. `1`
      2. `null`
      3. `'hello'`
      4. `{prop: 1}`
      5. `[1, 2, 3]`
      6. `function(x, y) { return x + y }`
      7. `(x, y) => x + y`
   2. 연산자
      1. `1 + 2`
      2. `true && false`
      3. `'prop' in obj`
      4. `delete obj.prop`
      5. `typeof null`
      6. `obj instanceof Object`
      7. `new Object()`
      8. (`variable` 변수가 선언되어 있다면) `variable = 1`
   3. 기타
      1. `this`
      2. `variable` (변수)
      3. `obj.prop` (속성)
      4. `func()` (함수 호출)

2. 표현식을 값으로 변환하기 위해 실제로 해당 표현식을 실행시키는 절차를 **평가(evaluation)**라고 한다.

   ```javascript
   // 표현식. 1을 반환.
   variable = 1;

   // 표현식이 아니다.
   const variable = 1;

   // 변수에 대입할 수 있다.
   const foo = boo = 'hello';
   ```

<br />

#### 3.1 Short-circuit Evaluation 

1. 연산자를 활용하여 **if 구문을 흉내낼 수 있다.**

2. 특히 `||` 연산자는 '기본 매개변수' 문법이 생기기 전까지 매개변수의 기본값을 지정하는 용도로 많이 사용되었다.

3. 다음 코드에서 볼 수 있듯이 short-circuit evaluation을 사용하면 코드의 길이가 줄어드는 효과가 있다. 다만 코드의 의미가 불명확해질 수 있고 논리적으로 놓치는 부분이 생길 수 있으니 주의해서 사용하여야 한다.

   ```javascript
   // 'func1'과 'func2'는 동일하게 동작한다.
   function func1(cond) {
     if (cond) {
       console.log('조건을 만족합니다.');
     }
   }

   function func2(cond) {
     cond && console.log('조건을 만족합니다.');
   }

   // 'func3'과 'func4'는 동일하게 동작한다.
   function func3(arg) {
     if (!arg) {
       arg = 'hello';
     }
     console.log(arg)
   }

   function func4(arg) {
     arg = arg || 'hello';
     console.log(arg);
   }
   ```

<br />

#### 3.2 Falsy Value

1. Falsy는 원시 타입에만 있고 참조 타입에는 없다. 빈 객체나 빈 배열은 Falsy가 아니다.

<br />

#### 3.3 연산자 결합 순서 (Operator Associativity)

1. **거듭제곱 연산자, 할당 연산자, 삼항 연산자**가 우결합성을 가진다는 사실은 기억해 둘 필요가 있다.


<br />

### 4. 브라우저 측 Javascript

#### 4.1 노드 선택

1. `document.querySelector`
2. `document.querySelectorAll`
3. `el.querySelector`
4. `el.closest`
5. `el.matches`

<br />

#### 4.2 엘리먼트 내용 조작하기 

1. `el.textContent`
2. `el.innerHTML`

<br />

#### 4.3 엘리먼트 어트리뷰트 조작하기 

1. `el.hasAttribute`
2. `el.getAttribute`
3. `el.setAttribute`
4. `el.removeAttribute`

<br />

#### 4.4 classList

1. `el.classList.add`
2. `el.classList.remove`
3. `el.classList.contains`

<br />

#### 4.5 인라인 스타일

1. `el.style`

<br />

#### 4.6 이벤트 리스너

1. `el.addEventListener`
2. `el.removeEventListener`

<br />

#### 4.7 DOM 노드 생성

1. `document.createElement`
2. `el.createTextNode`
3. `el.cloneNode`

<br />

#### 4.8 DOM 트리 조작

1. `el.appendChild`
2. `el.insertBefore`
3. `el.replaceChild`
4. `el.removeChild`

<br />

#### 4.9 dataset 

1. `el.dataset`

<br />

#### 4.10 노드 간 관계

1. `el.childNodes`
2. `el.firstChild`
3. `el.lastChild`
4. `el.previousSibling`
5. `el.nextSibling`
6. `el.parentNode`
7. `el.offsetParent`

<br />

#### 4.11 엘리먼트 크기 및 위치

1. `el.getBoundingClientRect()`
2. `el.offsetHeight` / `el.offsetWidth`
3. `el.clientHeight` / `el.clientWidth`
4. `el.scrollHeight` / `el.scrollWidth`
5. `el.offsetTop` / `el.offsetLeft`
6. `el.scrollTop` / `el.scrollLeft`
7. `el.clientTop` / `el.clientLeft`

<br />

<br />

## 4 Day

### 1. 함수형 프로그래밍

#### 1.1 클로저(Closure)

1. 때때로 클로저의 성질은 **데이터를 숨기고 정해진 방법을 통해서만 데이터에 접근할 수 있도록 제한**을 두는 데 활용되기도 한다.

   ```javascript
   function makeCounter(x = 1) {
     return function() {
       return x++;
     }
   }
   // `x`를 직접 변경할 수 있는 방법이 없다!

   const counter = makeCounter();
   console.log(counter()); // 1
   console.log(counter()); // 2
   ```


   ```javascript
   function personFactory(initialAge) {
     let age = initialAge;
     return {
       getOlder() {
         age++;
       }
       getAge() {
         return age;
       }
     };
   }
   // `age`를 직접 변경할 수 있는 방법이 없다!
   ```

2. 근래의 JavaScript 디버거는 클로저에 어떤 값이 들어있는지를 보여주는 기능을 포함하고 있다.

<br />

#### 1.2 화살표 함수와 고차 함수

1. 화살표 함수 문법을 이용하면, 적은 양의 코드만 사용해서 고차 함수를 만들 수 있다.

   ```javascript
   const makeCounter = (x = 1) => () => x++;

   const counter = makeCounter();
   console.log(counter()); // 1
   console.log(counter()); // 2
   ```

<br />

#### 1.3 재귀 함수(Recursive Function)

1. 함수 내부에서 **자기 자신을 호출하는 함수**를 **재귀 함수(recursive function)**라고 부른다.

   ```javascript
   function func() {
     func();
   }
   ```

2. 대부분의 루프는 재귀함수를 통해 다시 구현될 수 있다.

   ```javascript
   // 루프로 구현된 팩토리얼
   function factorialLoop(n) {
     let result = 1;
     for (let i = 2; i <= n; i++) {
       result *= i;
     }
     return result;
   }

   // 재귀 함수로 구현된 팩토리얼
   function factorialRec(n) {
     return n <= 1 ? 1 : n * factorialRec(n - 1);
   }

   // factorialRec(4)의 실행 결과
   // 4 * f(3)
   //	   3 * f(2)
   //		   2 * f(1)
   //			   1
   // 이전까지 f(3), f(2), f(1)의 결과를 알 수 없으므로 f(1)부터 순차적으로 계산하기 시작한다.
   // ① f(1)의 결과로 1이 반환된다.
   // ② f(2)의 결과로 2가 반환된다.
   // ③ f(3)의 결과로 6이 반환된다.
   // ④ f(4)의 결과로 24가 반환된다.
   // 계산된 결과가 순차적으로 콜 스택에 쌓인다.
   ```


   ```javascript
   // 루프로 구현된 피보나치 수
   function fiboLoop(n) {
     let x = 0;
     let y = 1;
     for (let i = 0; i < n; i++) {
       [x, y] = [y, x + y];
     }
     return x;
   }

   // 재귀 함수로 구현된 피보나치 수
   function fiboRec(n) {
     return (
       n < 1 ? 0 :
       n === 1 ? 1 :
       fiboRec(n - 1) + fiboRec(n - 2)
     );
   }
   ```

3. 거의 모든 재귀함수는 계속적으로 진행할지 말지에 대한 조건을 포함한다. 또한 다음 함수 호출 시에 넘겨지는 인자를 변경하는 부분을 갖는다.

4. 위에서 볼 수 있듯이, 재귀 함수를 사용하면 루프를 사용했을 때보다 **코드의 의미가 명확해지고 코드의 길이를 줄일 수 있다**는 장점이 있다.

5. 재귀함수를 사용하면 기존 방식보다 알고리즘 효율을 효과적으로 높일 수 있다.

<br />

#### 1.4 분할 정복(Divide and Conquer)

1. 분할 정복(divide and conquer)은 **문제를 작은 부분 문제로 나누어서 푼 뒤, 그 결과를 합치는 식**으로 알고리즘을 작성하는 기법이며, 재귀 함수가 활용되는 대표적인 사례이다. 바로 위의 `fiboRec` 역시 분할 정복의 일종이라 할 수 있다.

2. 피보나치 수열을 예로 들어 설명하면 다음과 같다.
   1. 피보나치 수열에서 4항의 값을 얻기 위해 3항, 2항의 값을 얻는다.
   2. 3항, 2항의 값을 얻기 위해 각각 2항과 1항, 1항과 0항의 값을 얻는다.

3. 분할 정복 기법을 활용하는 알고리즘 중 대표적인 예로 **병합 정렬(merge sort)**을 들 수 있다.

   ```javascript
   function mergeSort(arr) {
     // 입력된 배열의 길이가 1 이하이면 더 이상 재귀 호출을 하지 않는다.
     if (arr.length <= 1) return arr;

     // 배열을 절반으로 잘라 두 개의 작은 배열로 분할하고,
     // 두 작은 배열에 대해 재귀 호출을 수행한다.
     const slicer = Math.floor(arr.length / 2);
     const arr1 = mergeSort(arr.slice(0, slicer));
     const arr2 = mergeSort(arr.slice(slicer));

     // 'arr1', 'arr2'는 이미 정렬되어있는 상태이므로,
     // 이 성질을 이용해 두 배열을 정렬되어있는 큰 배열로 합칠 수 있다.
     const newArr = [];
     for (let i = 0, j = 0; i < arr1.length || j < arr2.length; ) {
       if (arr1[i] == undefined || arr1[i] > arr2[j]) {
         newArr.push(arr2[j]);
         j++;
       } else {
         newArr.push(arr1[i]);
         i++;
       }
     }

     // 큰 배열을 반환한다.
     return newArr;
   }
   ```

4. 병합 정렬이 선택 정렬과 비교했을 때 훨씬 빠르다.

   ```javascript
   function mergeSort(arr) {
     if (arr.length <= 1) return arr;
     const slicer = Math.floor(arr.length / 2);
     const arr1 = mergeSort(arr.slice(0, slicer));
     const arr2 = mergeSort(arr.slice(slicer));
     const newArr = [];
     for (let i = 0, j = 0; i < arr1.length || j < arr2.length; ) {
       if (arr1[i] == undefined || arr1[i] > arr2[j]) {
         newArr.push(arr2[j]);
         j++;
       } else {
         newArr.push(arr1[i]);
         i++;
       }
     }
     return newArr;
   }

   function selectionSort(arr) {
     for (let i = 0; i < arr.length; i++) {
       let minIndex = i;
       for (let j = i + 1; j < arr.length; j++) {
         if (arr[j] < arr[minIndex]) {
           minIndex = j;
         }
       }
       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
     }
     return arr;
   }

   const arr = new Array(50000).fill(null).map(Math.random);

   // mergeSort: 71ms
   console.time('mergeSort');
   mergeSort(arr);
   console.timeEnd('mergeSort');

   // selectionSort: 2104ms
   console.time('selectionSort');
   selectionSort(arr);
   console.timeEnd('selectionSort');
   ```

5. 재귀 함수는 알고리즘을 간결하고 명확하게 서술할 수 있게 해 주지만, 사용할 때 주의해야 할 점이 몇 가지 있다.

   1. 재귀 함수가 실행되는 동안에는 **종료되지 않은 함수**가 아주 많이 생기게 되므로, 코드의 실행 속도가 느려지거나 컴퓨터 메모리에 큰 부담을 줄 수 있다. 이 때문에 대부분의 JavaScript 구동 환경에서는 **특정 깊이 이상의 재귀 호출이 일어날 수 없도록 제한**을 두고 있다. Chrome 브라우저의 경우 대약 10000번 정도의 재귀 호출이 일어나면 아래와 같은 에러를 발생시킨다(이 제한을 뛰어넘을 수 있게 해주는 'tail call optimization'이라는 기능이 ES2015 명세에 포함되었지만, 사파리 외에는 아직 이 기능을 구현한 브라우저가 없는 상태이다). 만약 재귀 호출에 대한 제한 때문에 원하는 작업을 수행할 수 없게 됐다면, 재귀 함수 대신 **루프 혹은 스택(stack)**을 사용해서 코드를 재작성하면 된다.

      ```javascript
      factorialRec(20000); // RangeError: Maximum call stack size exceeded
      ```

   2. 또한, 주의하지 않으면 쓸데없는 재귀 호출이 아주 많이 일어나게 될 수 있다. 위의 피보나치 수를 구하는 예제에서, 100번째 피보나치 수를 구하기 위해 `fiboRec(100)`을 호출하면, `fiboRec(90)`는 89번, `fiboRec(80)`은 10946번, `fiboRec(70)`은 1346269번... 이런 식으로 **같은 인자에 대한 호출이 쓸데없이 많이 일어나게 된다.** 더군다나 `fiboRec` 함수는 재귀 호출이 깊이가 깊어질 수록 같은 호출 횟수가 기하급수적으로 증가하게 되므로, 인자의 크기가 조금만 커져도 답을 구할 수 없을 정도로 함수의 실행 시간이 길어지게 된다. 사실 `fiboRec(70)`을 한 번 호출했다면 우리는 이미 **그 답을 알고 있으므로 다시 계산할 필요가 없다.** 그래서, 일단 한 번 구해놓은 답은 별도의 저장소에 기억하고, 후에 같은 인자로 함수가 호출되면 이전에 계산해놓았던 답을 바로 반환하는 식으로 재귀 함수를 작성할 수 있다. 이런 방식을 통해 함수의 호출 횟수를 극단적으로 줄일 수 있다. 이런 기법을 **메모이제이션(memoization)**이라고 부른다. 위의 `fiboRec` 함수를 메모이제이션 기법을 통해 아래와 같이 재작성할 수 있다.

      ```javascript
      const fiboRecMemoized = (() => {
        // 계산 결과를 저장하는 저장소를 만든다.
        const memo = new Map();

        const fiboRec = n => {
          // 만약에 이전에 같은 인자로 계산한 적이 있다면
          // 해당 결과를 바로 반환한다.
          let result = memo.get(n);
          if (result != undefined) return result;

          result = (
            n < 1 ? 0 :
            n === 1 ? 1 :
            fiboRec(n - 1) + fiboRec(n - 2)
          );

          // 계산 결과를 저장소에 저장한 후 반환한다.
          memo.set(n, result);
          return result;
        }

        return fiboRec;
      })();
      ```

      ​

   <br />

   > ##### 순수 함수
   >
   >  단, 메모이제이션 기법은 '반환값이 오로지 주어진 인자에 의해서만 결정되는 함수'에 대해서만 적용할 수 있다. 이와 같은 함수를 순수 함수(pure function)라고 부른다.
   >
   > ##### IIFE
   >
   > `fiboRecMemoized`를 만들 때, 클로저에 `memo`라는 저장소를 숨기기 위해서 화살표 함수 리터럴을 통해 함수를 만든 후 이 함수를 바로 호출했다. 이렇게 함수 리터럴을 바로 호출하는 기법을 IIFE(Immediately Invoked Function Expression) 혹은 '즉시 호출 함수 표현식'이라고 부른다. 이전에는 전역 스코프를 오염시키지 않고 변수를 선언하려는 목적에서 IIFE가 널리 사용되었지만, CommonJS 혹은 ES2015 모듈이 같은 역할을 해 줄 수 있기 때문에 최근에는 IIFE가 자주 사용되지는 않는다.

<br />

### 2. 연산자 더 알아보기

#### 2.1 값을 비교하는 여러가지 방법

1. JavaScript에서는 두 값이 같은지를 비교하기 위해 아래 세 가지 방법을 사용할 수 있다.
   1. `==`, `!=`
   2. `===`, `!==`
   3. `Object.is`

<br />

##### 2.1.1 추상적 동일성((Abstract Equality)

1. `==` 연산자는 두 피연산자의 타입이 다를 때는 **타입을 변환**한 후 비교한다. 두 피연산자의 타입이 같다면 `===` 연산자와 같은 방식으로 동작한다.
2. null check를 할 때 만큼은 유용하게 사용된다. `==` 연산자는 `null` 과 `undefined`를 동일하지만, 이 두 값을 다른 어떤 값과도 동일하지 않은 것으로 취급하기 때문이다.

<br />

##### 2.1.2 엄격한 동일성(Strict Equality)

1. `===`, `!==` 연산자는 **두 피연산자의 타입이 다른 경우 무조건 false를 반환한다.** 따라서 `==`, `!=` 연산자와는 달리, 서로 다른 타입의 피연산자에 대해서도 안심하고 사용할 수 있다.

2. 다만, number 타입에 대한 비교를 할 때에는 다음과 같이 특이한 동작을 한다.

   ```javascript
   // '===' 연산에서, 'NaN'은 number 타입의 모든 값과 다르다. 이는 자기 자신에 대해서도 마찬가지이다.
   NaN === NaN; // false

   // '0'과 '-0'은 서로 다른 값이지만, '===' 연산은 이 둘을 같은 것으로 취급한다.
   0 === -0; // true
   ```

<br />

##### 2.1.3 Object.is

1. `Object.is` 정적 메소드는 두 인자가 **정말로 같은 값인지**를 검사한다. 아래의 두 예외를 제외하고는 `===` 연산자와 같은 방식으로 동작한다.

   ```javascript
   Object.is(NaN, NaN); // true
   Object.is(0, -0); // false
   ```

<br />

#### 2.2 Spread Syntax

1. ES2015에서 배열을 다른 배열에 쉽게 삽입할 수 있게 해 주는 spread 문법이 추가되었다. 나머지 매개변수(rest parameters) 문법과 같은 기호인 `...`가 사용되지만, 그 의미는 다르다.

2. 객체에 대한 spread 문법은 아직 정식 표준으로 확정되지는 않았지만, 후보(candidate) 단계의 표준으로 [이미 여러 브라우저에 구현이 되어 있다.](http://kangax.github.io/compat-table/esnext/)

3. Spread 문법을 통해 배열 리터럴의 중간에 다른 배열을 이어붙일 수 있다. 이 때, `arr1` 안에 있는 요소들이 `arr2` 안으로 **복사**된다.

   ```javascript
   const arr1 = [3, 4];
   const arr2 = [1, 2, ...arr1, 5]; // [1, 2, 3, 4, 5]

   // 이전에는 같은 작업을 하기 위해 'Array.prototype.concat' 메소드를 사용했다.
   [1, 2].concat(arr1).concat([5]) // [1, 2, 3, 4, 5]
   ```

4. 또한 배열 리터럴 안에 다른 요소를 써주지 않음으로써, 배열 전체를 쉽게 복사할 수 있다.

   ```javascript
   const arr1 = [1, 2, 3];
   const arr2 = [...arr];

   // 이전에는 같은 작업을 하기 위해 'Array.prototype.slice' 메소드를 사용했다.
   arr1.slice();
   ```

5. 다만, 이 때 역시 깊은 복사가 아니라 **얕은 복사**가 이루어진다.

6. Spread 문법은 함수 호출 시에도 사용할 수 있다. 이 때 배열의 모든 요소를 함수의 인자로 넘긴다.

   ```javascript
   const arr = [1, 2, 3, 4, 5];

   // 아래 코드는 'Math.max(1, 2, 3, 4, 5)'와 동일하다.
   Math.max(...arr); // 5

   // 이전에는 같은 작업을 하기 위해 'Function.prototype.apply' 메소드를 사용했다.
   Math.max.apply(null, arr); // 5
   ```

7. 아직 정식 표준에 포함되지는 않았지만, 객체에 대해서도 spread 문법을 사용할 수 있다. 이 때 자기 자신의(own) 열거 가능한(enumerable) 속성만을 복사한다. 아직 몇몇 브라우저에 이 문법이 구현되어 있지 않기 때문에, 이 문법을 사용하려면 [Babel 플러그인](http://babeljs.io/docs/plugins/transform-object-rest-spread/) 혹은 [TypeScript](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#object-spread-and-rest) 등의 트랜스파일러를 사용해야 한다.

   ```javascript
   const obj1 = {prop: 1};
   const obj2 = {...obj1};

   // 이전에는 같은 작업을 하기 위해 'Object.assign' 정적 메소드를 사용했다.
   Object.assign({}, obj1);
   ```

<br />

#### 2.3 분해 대입 (Destructuring Assignment)

##### 2.3.1 배열의 분해 대입

1. 다음과 같이, 변수의 선언과 동시에 배열의 요소를 해당 변수에 대입할 수 있다.

   ```javascript
   const [a, b, c] = [1, 2, 3];

   console.log(a, b, c); // 1 2 3
   ```

2. 만약 요소의 순서와 일치하는 변수가 좌측 목록에 들어있지 않으면, 해당 요소는 무시된다.

   ```javascript
   // 여기서 '2', '4'는 무시된다.
   const [a, , c] = [1, 2, 3, 4];

   console.log(a, c); // 1 3
   ```

3. 이미 선언된 변수에 대해서도 분해대입을 할 수 있다.

   ```javascript
   let a, b;
   [a, b] = [1, 2];

   console.log(a, b); // 1 2
   ```

4. 배열이 중첩되어 있으면, 해당 배열에 대해서도 분해대입을 할 수 있다. 이 때에는 등호의 좌측에서도 배열이 중첩된 것처럼 써주면 된다.

   ```javascript
   const [a, b, [c, d]] = [1, 2, [3, 4]];

   console.log(a, b, c, d); // 1 2 3 4
   ```

5. 만약 분해대입 시 배열의 뒷부분을 새로운 배열로 만들고 싶다면, 해당 위치의 변수 앞에 `...`을 붙여주면 된다. 나머지 매개변수(rest parameter)에서와 같이, `...`은 맨 마지막 요소에만 붙을 수 있다.

   ```javascript
   const [a, b, ...c] = [1, 2, 3, 4, 5];

   console.log(c); // [3, 4, 5]
   ```

<br />

##### 2.3.2 객체 분해 대입

1. 다음과 같이, 변수의 선언과 동시에 객체의 속성을 해당 변수에 대입할 수 있다.

   ```javascript
   const {a: prop1, b: prop2} = {a: 1, b: 2};

   console.log(prop1, prop2); // 1 2
   ```

2. 좌측 객체 표기에서 속성값 부분을 생략하면, 속성 이름 부분이 곧 새 변수의 이름이 된다.

   ```javascript
   const {a, b} = {a: 1, b: 2};

   console.log(a, b); // 1 2
   ```

3. 만약 어떤 속성의 이름과 같은 이름을 갖는 변수가 좌측에 들어있지 않으면, 해당 속성은 무시된다.

   ```javascript
   // 여기서 'b'는 무시된다.
   const {a} = {a: 1, b: 2};

   console.log(a); // 1
   ```

4. 이미 선언된 변수에 대해서도 분해대입을 할 수 있다.

   ```javascript
   let a, b;
   // 문장이 여는 중괄호('{')로 시작되면 이는 '블록'으로 간주되므로,
   // 아래와 같이 분해대입을 할 때는 식 전체를 괄호로 둘러싸주어야 한다.
   ({a, b} = {a: 1, b: 2});

   console.log(a, b); // 1 2
   ```

5. 객체가 중첩되어 있으면, 해당 객체에 대해서도 분해대입을 할 수 있다. 이 때에는 등호의 좌측에서도 객체가 중첩된 것처럼 써주면 된다.

   ```javascript
   const {a, b: {c}} = {a: 1, b: {c: 2}};

   console.log(a, c); // 1 2
   ```

6. 배열과 객체가 함께 중첩되어 있는 경우에서도 분해대입이 가능하다.

   ```javascript
   const {
     arr: [
       a, b, {
         c
       }
     ]
   } = {
     arr: [
       1, 2, {
         c : 3
       }
     ]
   };

   console.log(a, b, c); // 1 2 3
   ```

<br />

##### 2.3.3 객체의 나머지 속성(Object Rest Properties)

1. 만약 분해대입 시 무시된 속성들을 가지고 새로운 객체를 만들고 싶다면, `...`을 붙여주면 된다. 나머지 매개변수(rest parameter)에서와 같이, `...`은 맨 마지막에만 붙을 수 있다.

   ```javascript
   const {a, b, ...rest} = {a: 1, b: 2, c: 3, d: 4};

   console.log(rest); // { c: 3, d: 4 }
   ```

2. 아직 몇몇 브라우저에 이 문법이 구현되어 있지 않기 때문에, 이 문법을 사용하려면 [Babel 플러그인](http://babeljs.io/docs/plugins/transform-object-rest-spread/) 혹은 [TypeScript](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#object-spread-and-rest) 등의 트랜스파일러를 사용해야 한다.

<br />

##### 2.3.4 분해 대입의 기본값

1. 분해대입 시, 만약 좌측 변수의 위치에 해당하는 값이 우측의 배열 혹은 객체에 존재하지 않으면 해당 값에는 대입이 일어나지 않는다.

   ```javascript
   let a, b, c;

   [a, b, c] = [1, 2];

   console.log(c); // undefined
   ```

2. 이 때에 좌측 변수에 기본으로 대입될 값을 미리 지정해둘 수 있다.

   ```javascript
   // 'c' 위치에는 대입될 값이 없으므로, 기본값인 '3'이 대신 사용된다.
   let [a, b, c = 3] = [1, 2];

   console.log(c); // 3
   ```

3. 이 동작은 객체에 대한 분해대입에서도 적용된다.

   ```javascript
   let {a, b, c = 3} = {a: 1, b: 2};

   console.log(c); // 3
   ```

<br />

##### 2.3.5 매개변수에서의 분해대입

1. 함수의 매개변수에서도 분해대입을 할 수 있다.

   ```javascript
   function func({prop, array: [item1, item2, item3 = 4]}) {
     console.log(prop);
     console.log(item1);
     console.log(item2);
     console.log(item3);
   }

   // 1, 2, 3, 4가 차례대로 출력된다.
   func({prop: 1, array: [2, 3]});
   ```

<br />

> ##### 레이블 구문
>
> 1. 반복문에 레이블을 붙이고, break나 continue 구문을 사용해 반복문의 어느 위치에서 작업을 멈추고 어느 위치에서 다시 수행할지를 알려줄 수 있다.
> 2. 자바스크립트에는 goto 구문이 없다는 것에 주의한다. break나 continue에서만 레이블을 사용할 수 있다.
> 3. [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)  코드에서 "let"을 레이블 이름으로 사용할 수 없다. [`SyntaxError`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)를 발생시킨다. (let은 허용되지 않는 식별자이다.)
> 4. [MDN - label](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/label)

<br />

### 3. 내장 객체 및 생성자

#### 3.1 JSON

1. 프로그래밍을 하다 보면 '프로그래밍 언어에서 사용하는 자료구조'를 보조기억장치에 **저장**하거나, 혹은 네트워크를 통해 **전송**해야 할 일이 생긴다. 이 때 자료구조를 **그대로** 저장/전송할 수는 없으니, 저장/전송 가능한 형태로 변환하는 절차가 필요하다. 이 절차를 일러 **직렬화(serialization)**라고 한다. 반대로, 직렬화된 데이터를 프로그래밍 언어에서 다시 사용할 수 있도록 변환해주는 절차를 **역직렬화(deserialization)**라고 한다.

2. **JSON(JavaScript Object Notation)**은 웹의 세계에서 가장 많이 사용되는 직렬화 형식이다. 그 이름이 말해주듯이, **JavaScript 객체와 유사한 표기법**을 사용하는 **텍스트**를 통해 복잡한 자료구조를 나타낸다.

   ```json
   {
     "key": "value",
     "arr": [1, 2, 3],
     "nullProp": null
   }
   ```

3. JSON은 언어에 관계없이 사용할 수 있는 직렬화 형식이고, 실제로 많은 프로그래밍 언어들이 JSON 관련 기능을 내장하고 있다.

4. JavaScript 역시 JSON 관련 기능을 내장하고 있다. 같은 이름의 `JSON` 내장 객체의 메소드를 통해 직렬화와 역직렬화를 할 수 있다.

   ```javascript
   // `JSON.stringify`로 직렬화를 할 수 있다.
   JSON.stringify({
     key: 'value',
     arr: [1, 2, 3],
     nullProp: null,
     undefinedProp: undefined // 값이 `undefined`인 속성은 직렬화 과정에서 제외된다.
   }); // '{"key":"value","arr":[1,2,3],"nullProp":null}'

   // `JSON.parse`로 역직렬화를 할 수 있다.
   JSON.parse('{"key":"value","arr":[1,2,3],"nullProp":null}');
   ```

5. 또다른 저장 포맷 형식으로 YAML, XML 등이 있다.

6. JSON을 직접 편집해야 할 때는 **JSON이 JavaScript가 아니라는 사실에 주의**해야 한다. JavaScript 객체와 유사한 표기법을 비슷하게 빌려 쓴 것 뿐이다. 따라서 Javascript 메소드를 사용할 수 없다.

   1. 속성 이름은 꼭 쌍따옴표를 둘러주어야 한다. 홑따옴표도 안 된다.
   2. `Map`, `Set`, `Date`, `Error`, `RegExp`, `Function`, `Promise`와 같이 특별한 동작방식을 가지는 객체들을 제대로 표현할 수 없다.
   3. `undefined`, `NaN`, `Infinity`과 같은 값을 표현할 수 없다.
   4. 주석을 쓸 수 없다.

<br />

#### 3.2 Date

1. Date 객체는 기능이 부족한 편이기 때문에, 실무에서 다른 라이브러리와 함께 쓰이는 경우가 많다. 그렇다 하더라도 관련 라이브러리를 잘 쓰기 위해서는 우선 Date 객체를 잘 이해해야 한다.
2. Date 객체를 사용하기 위해서 일단 아래의 개념들을 알아둘 필요가 있다.
   1. **협정 세계시 (UTC)** - 지구 상의 여러 지역에서는 **시간대(timezone)**와 **일광 절약 시간제(DST)**에 따라 서로 다른 시각을 사용한다. 이 때문에 발생하는 혼동을 피하기 위해 **위치 및 DST의 사용 여부와 상관 없이 같은 기준으로** 시각을 다룰 필요가 있는데, 이 때 사용되는 것이 협정 세계시(UTC)이다. UTC가 만들어지기 이전에는 **그리니치 평균시(GMT)**라는 용어가 널리 쓰였다. 또한 조금씩 느려지는 지구 자전 속도에 맞추기 위해 UTC에는 가끔씩 **윤초(leap second)**가 추가되기도 한다. GMT를 쓰다가 윤초라는 개념을 추가해서 UTC를 만들었는데, 간혹 두 용어가 혼용되기도 한다.
   2. **유닉스 시간** - 컴퓨터에서는 시간 데이터를 편하게 다루기 위해서 유닉스 시간이라는 특별한 단위를 사용한다. 유닉스 시간은 UTC 기준 1970년 1월 1일 0시 0분 0초부터 경과한 시간을 초 단위의 정수로 나타낸다. 예를 들어, 한국 시간대의 `2017-12-10 12:26:11`라는 시간을 유닉스 시간으로 나타내면 `1512876371`이 된다. 유닉스 시간은 **POSIX 시간 또는 Epoch 시간**이라는 이름으로 불리기도 한다.

<br />

##### 3.2.1 Date 객체의 생성

1. Date 생성자는 아래와 같은 방법으로 사용할 수 있다.
   1. `new Date()` - **현재 시각**을 나타내는 Date 객체를 반환한다.
   2. `new Date(value)` - `value`가 정수인 경우, 이를 **밀리초 단위**의 유닉스 시간으로 간주해서 이에 해당하는 Date 객체를 반환한다. `value`가 문자열인 경우, 이 문자열이 나타내는 Date 객체를 반환한다.
   3. `new Date(year, month, day, hour, minutes, seconds, milliseconds)` - 년, 월, 일, 시, 분, 초, 밀리초를 **직접 입력**해서 Date 객체를 생성할 수도 있다. '월' 부분은 0부터 11까지의 값을 가진다. 월 이후의 인자는 생략 가능하고, 인자를 생략하면 '일'은 1로, 나머지는 모두 0으로 지정된다.

<br />

##### 3.2.2 문자열로 변환하기

1. `Date` 객체가 나타내는 시각을 여러가지 방법으로 문자열로 변환할 수도 있다.

   ```javascript
   const now = new Date();
   console.log(now.toString()); // Sun Dec 10 2017 12:49:31 GMT+0900 (KST)
   console.log(now.toLocaleString()); // 2017. 12. 10. 오후 12:49:31
   console.log(now.toDateString()); // Sun Dec 10 2017
   console.log(now.toTimeString()); // 12:49:31 GMT+0900 (KST)
   console.log(now.toISOString()); // 2017-12-10T03:49:31.145Z
   console.log(now.toUTCString()); // Sun, 10 Dec 2017 03:49:31 GMT
   ```

2. 날짜를 표기하는 방법에 국제 표준이 있다. 그 중 하나가 ISO 표준이다.

<br />

##### 3.2.3 시간 간격 측정하기

1. `-` 연산자를 사용해서 두 `Date` 객체 사이의 시간 간격이 얼마나 되는지를 밀리초 단위로 측정할 수 있다. 그러나 `+` 연산을 사용하면 단순히 두 문자열을 이어붙인다.

   ```javascript
   const start = new Date();
   alert('시간이 가고 있습니다...');
   const end = new Date();
   alert(`${end - start} 밀리초 만큼의 시간이 경과되었습니다.`);
   ```

2. 현재 시간으로부터 한 시간 뒤의 시간을 구하려면 아래와 같이 구한다.

   ```javascript
   const now = new Date()
   new Date(now.valueOf() + 3600000)
   ```

<br />

##### 3.2.3 라이브러리 사용하기

1. 물론 Date 객체의 내장 메소드를 사용하여 원하는 시간을 표현할 수도 있지만, 매우 번거로운 일이다.

2. moment.js는 ECMAScript 2015와 잘 맞지 않아서 data-fns로 세대교체가 일어나고 있는 중이다.

3. JavaScript에 내장되어 있는 `Date` 객체는 컴퓨터에서 시간 데이터를 다루기 위한 기본적인 기능들을 제공하지만, 실제 서비스에서 사용하기에는 부족한 점이 많다. 이 때문에, 실무에서는 [moment.js](https://momentjs.com/) 혹은 [date-fns](https://date-fns.org/)와 같은 별도의 라이브러리를 사용하는 경우가 많다. [이 링크](https://runkit.com/seungha-kim/moment-example)에서 가장 널리 사용되는 시간 관련 라이브러리인 moment.js를 시험해볼 수 있다.

   ```javascript
   const moment = require("moment")
   moment.locale('ko');

   const now = moment();
   console.log(now.format("dddd, MMMM Do YYYY, h:mm:ss a")); // 일요일, 12월 10일 2017, 1:02:42 오후
   console.log(now.subtract(7, 'days').calendar()); // 2017.12.03
   console.log(moment("20120101", "YYYYMMDD").fromNow()); // 6년 전
   ```

<br />

#### 3.3 Symbol

1. 심볼은 ES2015에서 도입된 새로운 원시 타입이다.

2. `Symbol` 내장 함수를 통해 새 심볼을 생성할 수 있다.

   ```javascript
   const sym = Symbol();
   console.log(typeof sym); // symbol
   console.log(sym); // Symbol()
   ```

3. `obj`라는 이름의 객체가 있고 해당 객체에 외부로 공개하고 싶지 않은 `_won` 속성이 있다고 하자. `_`를 사용하여 그 뜻을 밝혔다 하더라도 `obj._won`으로 접근하여 해당 속성을 마음대로 읽고 수정할 수 있었는데, 이 문제를 해결하기 위해 Symbol 원시 타입이 고안되었다.

4. ES2015 이전에는 객체의 속성 키로 문자열만 사용할 수 있었다. 즉, 숫자나 객체 등은 객체의 속성 키로 사용할 수 없다. ES2015에서 추가된 Symbol은 객체의 속성 키로 사용될 수 있고, 해당 키를 호출할 때는 대괄효 표기법으로만 호출할 수 있다.

   ```javascript
   // 심볼은 객체의 속성 키로 사용될 수 있다.
   const mySymbol = Symbol('my symbol');

   const obj = {
     [mySymbol]: 'hello'
   };

   console.log(obj); // { [Symbol(my symbol)]: 'hello' }
   ```

5. `Symbol` 함수에 문자열을 넘겨서, 해당 심볼에 대한 설명을 포함한 심볼을 생성할 수 있다. 이 때 넘겨지는 문자열은 그저 심볼의 설명일 뿐이므로, 심볼의 비교 연산에 영향을 주지 않는다. 즉, 어떤 문자열이 인자열에 들어오는 지와 상관없이 **새로 생성된 심볼은 다른 모든 심볼과 다른 것으로 취급된다.**

   ```javascript
   console.log(Symbol('my symbol')); // Symbol(my symbol)
   console.log(Symbol('my symbol') === Symbol('my symbol')); // false
   console.log(Symbol() === Symbol()); // false
   ```

6. Symbol이 처음 고안되었던 것은 정보를 숨기기 위함이었는데, 시간이 지나 용도가 많이 변경되었다. 보통 객체의 기능을 확장하고자 할 때 사용된다. **내장 심볼(well-known symbol)**을 객체의 속성 키로 사용하면, 특정 상황에서의 객체의 동작 방식을 마음대로 바꿀 수 있다.

   1. `Symbol.hasInstance` - 객체가 `instanceof` 연산자의 피연산자로 왔을 때의 동작을 바꾼다.
   2. `Symbol.isConcatSpreadable` - 객체가 `Array.prototype.concat` 메소드의 인자로 넘겨질 때의 동작을 바꾼다.
   3. `Symbol.iterator` - 객체가 `for...of` 구문을 통해 사용될 때의 동작 방식을 바꾼다.
   4. `Symbol.match` - 객체가 `String.prototype.match` 메소드의 인자로 넘겨질 때의 동작을 바꾼다.
   5. `Symbol.replace` - 객체가 `String.prototype.replace` 메소드의 인자로 넘겨질 때의 동작을 바꾼다.
   6. `Symbol.search` - 객체가 `String.prototype.search` 메소드의 인자로 넘겨질 때의 동작을 바꾼다.
   7. `Symbol.species` - `Array.prototype`을 상속받은 객체에 대해 `Array.prototype.map` 등의 메소드를 호출할 때, 반환되는 객체의 생성자를 지정한다.
   8. `Symbol.split` - 객체가 `String.prototype.split` 메소드의 인자로 넘겨질 때의 동작을 바꾼다.
   9. `Symbol.toPrimitive` - 객체가 원시 타입의 값으로 변환되어야 할 때, 정확이 어떤 값으로 변환되어야 하는 지를 지정한다.
   10. `Symbol.toStringTag` - `Object.prototype.toString()` 메소드를 객체에 대해 직접 호출할 때의 동작을 바꾼다.
   11. `Symbol.unscopable` - `with` 블록 안에서 어떤 속성을 참조할 수 있는 지를 지정한다.
   12. 나머지 심볼에 대해 자세히 알아보려면 [MDN 문서](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)를 참고한다.

<br />

#### 3.4 Map

1. 객체와 비슷하게 사용될 수 있는 자료 구조이다. 그러나 객체와 사용법이 다르고, 동작 방식도 다르다.

2. ES2015에서 도입된 `Map` 생성자는 객체와 유사하게 **키-값 쌍(key-value pair)**을 저장할 수 있는 새로운 자료구조를 제공한다.

   ```javascript
   const m = new Map();

   m.set('hello', 'world');
   console.log(m.get('hello')); // 'world'
   console.log(m.has('hello')); // true

   m.delete('hello');
   console.log(m.get('hello')); // undefined
   console.log(m.has('hello')); // false
   ```

3. `Map`으로 생성된 객체는, 일반적인 객체와 비교했을 때 아래와 같은 차이점을 갖는다.

   1. 객체는 속성 접근자(property accessor) 문법을 통해서, `Map`은 **메소드**를 통해서 내부의 데이터를 조작한다.
   2. 문자열과 심볼만이 객체의 속성 키가 될 수 있는 반면, **어떤 값이라도 Map 객체의 키로 사용될 수 있다.** 객체 또한 `Map` 객체의 키로 사용할 수 있다.
   3. 객체의 속성을 확인할 때는 프로토타입 체인을 확인하는 과정에 필요하지만, `Map` 객체 안에 들어있는 데이터는 **프로토타입의 영향을 받지 않는다.**
   4. `Map` 객체의 `size` 속성을 통해 내부에 들어있는 **데이터의 갯수**를 쉽게 알 수 있다.

4. `Map` 객체는 **데이터의 추가 / 삭제가 빈번하게 일어나는 경우** 일반적인 객체보다 훨씬 빠르게 동작한다는 장점이 있는 반면, JSON 등으로 **직렬화 하기 어렵다**는 특징이 있다. 키-값 쌍 형태의 데이터를 다루면서 속도가 중요한 경우에는 `Map`의 사용을 고려해보도록 한다.

5. 객체에 속성 키의 값으로 어떤 것을 넘기던 간에 문자열로 바뀌어 처리된다.

<br />

#### 3.5 Set

1. ES2015에서 도입된 `Set` 생성자는 **집합** 형태의 자료구조를 제공한다. `Set` 객체 내부에 이미 존재하는 데이터를 추가하려고 하면, 이는 무시된다. 즉, `Set` 객체는 내부에 **중복된 데이터가 저장되는 것을 허용하지 않는다**.

   ```javascript
   const s = new Set();

   s.add(1);
   s.add(1);
   s.add(2);

   console.log(s); // Set { 1, 2 }
   ```

2. **배열과 유사한 형태의 자료구조**가 필요하지만 **순서가 중요하지 않은 경우,** 그리고 **중복된 데이터의 저장을 허용하지 않아야** 할 경우, `Set`의 사용을 고려해보도록 한다.

3. 객체를 추가할 때에는 참조에 대한 값이 복사되므로 모양이 같더라도 참조가 다르면 추가될 수 있다.

4. `Set.prototype.delete(value)`로 원소를 삭제할 수 있다.

5. 집합에는 index의 개념이 없다. Set이 갖고 있는 원소로 어떤 작업을 수행하려면 `for ~ of`로 수행한다.

6. 자주 사용되진 않으나 중복을 제거할 때 사용할 수 있다.

   ```javascript
   const s = new Set();
   s.add(1) // Set { 1 }
   s.add(1) // Set { 1 }
   s.add(2) // Set { 1, 2 }
   s.add([1]) // Set { 1, 2, [ 1 ] }
   s.add([1]) // Set { 1, 2, [ 1 ], [ 1 ] }

   const obj = { b: 2 }

   s.add(obj) // Set { 1, 2, [ 1 ], [ 1 ], { b: 2 } }
   s.add(obj) // Set { 1, 2, [ 1 ], [ 1 ], { b: 2 }, { b: 2 } }

   const s2 = new Set('aaaa') // Set { 'a' }

   for (let item of s) {
     console.log(item)
   }
   ```

7. [MDN - Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

<br />

#### 3.6 기타

1. 이 밖에, ES2015 또는 그 이후에 추가된 여러가지 내장 객체 및 생성자들이 있다.
   1. `Proxy` - 다른 객체처럼 행세하면서, 특정한 행동에 대해서는 다른 동작 방식을 보이는 새로운 객체를 만들고 싶을 때 사용한다.
   2. `Reflect` - `Reflect` 객체의 메소드를 통해, JavaScript의 몇 가지 내장 기능을 메소드로서 사용할 수 있다.
   3. `Intl` - `Intl` 객체를 이용하면, 사용 중인 언어에 따라 문자열 비교, 숫자 표현 형식, 시간 표현 형식을 바꿀 수 있다.
   4. `WeakMap` - `Map` 생성자와 사용법이 같지만, 키로 사용된 값에 대한 메모리 누수를 방지할 수 있다.
   5. `WeakSet` - `Set` 생성자와 사용법이 같지만, 집합에 추가된 값에 대한 메모리 누수를 방지할 수 있다.
   6. `TypedArray` - 이진 데이터(binary data)를 다룰 수 있는 방법을 제공한다. File API, Canvas, Fetch API 등에서 사용된다.
2. 위 내장 객체들을 직접 사용할 일은 별로 없다. 후에 라이브러리를 개발할 정도의 개발자가 되었을 때 사용을 고려해볼 수 있다.

<br />

> ##### garbage collection
>
> 1. 함수 내에서 선언된 변수는 함수가 종료되는 동시에 그 주기는 끝나게 된다. 이때 버려지는 소속 변수들을 처리하는 것을 garbage collection이라고 한다.

<br />

### 4. 브라우저 측 JavaScript

1. 코드의 중복은 유지보수를 어렵게 만든다. 같은 코드가 재사용되는 부분은 함수 단위로 만들어 관리한다.


<br />

<br />

## 5 Day

### 1. UI 종류

1. Tab UI
2. Modal UI
3. Accoridion UI
4. Dropdown UI
5. Date Pickup UI

<br />

### 2. Pesticide for Chrome 

1. Chrome extension 중 하나로, 아웃라인을 보여준다.
2. border는 box-sizing에 영향을 주지만, 아웃라인은 영향을 주지 않는다.

<br />

### 3. flex-grow

1. flex로 정렬 시, 특정 요소가 남은 공간을 모두 차지하게 하고 싶을 때 `flex-grow: 1`로 설정한다.