# 4 Week

## 1 Day

### 1. 코드의 실행

1. 기본적으로 JavaScript 코드는 세미콜론(`;`)으로 구분된 구문(statement) 단위로 위에서부터 차례대로 실행된다.

<br />

### 2. 세미콜론 자동 삽입(ASI) 

1. JavaScript에는 몇몇 조건을 만족하면 개행을 세미콜론처럼 취급하는 세미콜론 자동 삽입(ASI, Auto Semicolon Insertion) 기능이 내장되어 있기 때문에 개행을 할 때는 주의해야 한다.

<br />

### 3. 표현식과 구문 (Expressions and Statement)

1. 표현식이란 JavaScript 문장의 구성요소를 구분하는 하나의 단위로, **값으로 변환될 수 있는 부분**을 가리킨다.
2. 구분 **세미콜론(`;`)으로 구분된 단위**를 말한다.

<br />

### 4. 개발자 도구

1. 개발자 도구를 열고 ESC 키를 토글하면 콘솔을 열고 닫을 수 있다.

<br />

### 5. ECMAscript 스펙

1. 바벨을 쓸 수 있다고 해서 모든 기능을 바꿔줄 수 있는 건 아니다. 이 [사이트](http://kangax.github.io/compat-table/esnext/)를 참조해서 사용하면 된다.

<br />

### 6. MDN (Mozilla Development Network)

1. MSDN(Microsoft Development Network)도 있었는데, Microsoft가 포기하면서 MDN 쪽으로 합쳐서 MDN이 공식 지정 문서가 되었다.

<br />

### 7. Chrome - 검색 엔진 관리

1. 크롬 환경설정의 검색엔진 관리에서 추가하고 싶은 사이트를 추가하면 주소창에서 키워드 입력후 Tab 키를 눌러 바로 검색을 할 수 있다.

<br />

### 8. 가상 메모리

1. 프로그램을 실행하게 되면 CPU에 올라간다. 이때 주기억 장치에 포함되어야 할 데이터가 꽉 차있다면, 보조기억 장치에 데이터를 저장함으로써 프로그램을 실행시키려고 시도하는데 이것을 가상 메모리라고 한다. 원래 메모리가 아니지만 메모리가 할일을 처리하기 때문에 가상 메모리라고 부르는 것이다.
2. 일반적으로 프로그램을 실행시키면 프로그램 및 프로그램에서 관리해야 할 데이터는 주기억 장치(메모리)에 저장된다.

<br />

### 9. 2진수, 8진수, 16진수 리터럴

1. 2진수, 8진수, 16진수 리터럴 표기법은 다음과 같다.

   ```javascript
   0b111; // 2진수 리터럴 (binary literal)
   0o777; // 8진수 리터럴 (octal literal)
   0xf5; // 16진수 리터럴 (hexademical literal)
   ```

<br />

### 10. 정수와 실수의 구분

1. 어떤 수가 정수인지 실수인지를 판별할 수는 있고, 이를 위해 `Number.isInteger` 메소드를 사용한다.

   ```javascript
   Number.isInteger(1); // true
   Number.isInteger(0.1); // false
   ```

<br />

### 11. 소수점 연산

1. 컴퓨터는 이진수 소수 밖에 나타내지 못한다. 따라서 `0.1 + 0.2`과  `0.3`은 정확히 같지 않다. 미묘한 오차가 발생할 수 밖에 없다.
2. 정확한 소수점 연산이 필요할 때는 라이브러리를 사용해야 한다.

<br />

### 12. 비트와 바이트

1. **비트**는 정보량의 최소 기본 단위로 1bit는 0, 1을 표현하는 이진수 1자리를 의미한다.
2. 하나의 비트만 다룰 때는 그렇게 유용하지 않아서 최소 여덟 개의 비트를 써서 문자 하나를 표현하는 것이 권장된다. 하지만 바이트는 알파벳 한 글자 밖에 나타낼 수 없기 때문에 그렇게 유용하지 않다. 그래서 바이트를 한 단위로 사용하기보다는 킬로바이트에서부터 시작을 한다.
3. 컴퓨터에서 데이터를 다루기 위해 적당한 단위를 만들기 위해서 비트를 8개씩 묶는데, 이것을 바이트라고 한다. 비트 한 칸의 저장 용량을 1비트(bit)라 하고 8비트(bit)의 저장 용량을 묶어서 1바이트(Byte)라고 한다.
4. 보통 B와 같이 대문자로 사용하면 바이트를 의미하고,  b와 같이 소문자로 사용하면 비트를 나타낸다. 100Mbps에서 b는 비트를 의미한다. bps는 bits per second의 약어이다.

<br />

### 13. NaN

1. `NaN`은 JavaScript의 값들 중 유일하게 **자기 자신과 같지 않은 값**이다. 따라서 어떤 값이 `NaN`인지 판별하기 위해서는 일반적인 비교 연산자를 사용하면 안 되고, 대신 `Number.isNaN` 또는 `Object.is` 함수를 사용해야 한다.
2. **수 연산을 하기 전에** 모든 피연산자를 확실히 number 타입으로 만들어주는 것이 좋은 습관입니다.

<br />

### 14. ASCII 코드와 유니코드

1. ASCII 코드는 미국에서 처음 탄생했다.
2. 1Byte는 8bit이므로 총 256가지의 경우의 수를 표현할 수 있다.
3. ASCII 코드는 1Byte로 어떤 문자를 어떻게 표현하자고 정해놓은 것이다.
4. 표현할 수 있는 경우의 수의 한계로 ASCII 코드로는 다른 나라의 언어를 모두 표현할 수 없었다. 이러한 상황에서 0과 1을 가지고 어떻게 문자를 확장성있게 컴퓨터에서 표현할 것인가라는 물음이 제기되었다. 이에 대한 답이 국제 표준으로 만들어졌는데 이것이 바로 유니코드이다.
5. 어떤 정보를 0과 1로 바꾸는 것을 인코딩(encode), 0과 1로 표현되어 있는 정보를 우리가 알아볼 수 있는 정보로 바꾸는 것을 디코딩이라고 한다.
6. 유니코드는 각 문자에 번호를 다 매기는데, 이것을 유니코드 코드포인트(Unicode Code Point)라고 한다. 이것은 유니코드 표준에서 문자마다 매겨놓은 번호이다.
7. ASCII는 1바이트짜리 문자 인코딩 방식을 사용한다.
8. 유니코드에 들어있는 문자의 갯수는 어마어마하게 많고,  이 큰 번호들을 어떻게 인코딩할 지에 대한 방법 중 대표적으로 **utf-8**, **utf-16** 등이 있다. 이 두 가지가 가장 자주 쓰인다.
9. utf-8은 영문을 효율적으로 표기할 수 있는 대신 다른 문자들의 용량을 좀 크게 해야 표현할 수 있다.
10. utf-16은 영문보다 다른 문자를 더 효율적으로 표기할 수 있다.
11. [graphemica](http://graphemica.com/)에서 주소 뒤에 원하는 글자 정보를 입력하면 유니코드 코드 포인트에 대한 정보를 알 수 있다.

<br />

### 15. 템플릿 리터럴

1. 템플릿 리터럴은 아래와 같이 특이한 형태의 함수 호출 기능을 지원하는데. 이를 'tagged template literal'이라고 한다.

2. 주로 다른 언어를 JavaScript와 통합할 때 사용되고, 라이브러리 제작자가 아니라면 보통은 이 기능을 사용할 일이 없다. 자세한 내용을 알고 싶다면 [이 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals#Tagged_template_literals)를 참고하면 된다.

   ```javascript
   styled.div`display: flex; border: 1px solid black;`; // styled-components
   gql`query { user { name }}`; // graphql-tag
   html`<title>Hello tagged template literal!</title>`; // lit-html
   ```

<br />

### 16. '\n'과 '\r' 

1. 라인 피드(line feed)와 캐리지 리턴(carage return)은 **개행 문자**로, 우리가 보통 엔터를 누를 때 입력되는 문자이다. 각각을 줄여서 `LF`, `CR` 이라고 표기하고, 맥과 리눅스에서는 `LF`, 윈도우에서는 `CR+LF`가 개행문자로 사용된다.

<br />

### 17. 문자열과 연산자

1. 유니코드 코드포인트 비교는 사전순 비교가 아니므로 주의해야 한다.

   ```javascript
   // 유니코드 코드포인트 비교. 앞에서부터 한 글자씩 차례대로 비교합니다.
   'a' < 'b'; // true
   'aaa' < 'abc'; // true
   'a' < 'Z'; // false
   '한글' < '한국어'; // false
   '2' < '10'; // false
   ```

2. 사전순 비교를 하려면 `localeCompare` 메소드를 사용한다.

   ```javascript
   'b'.localeCompare('a'); // 1
   'b'.localeCompare('b'); // 0
   'b'.localeCompare('z'); // -1
   'b'.localeCompare('Z'); // -1
   '가나다'.localeCompare('마바사'); // -1
   ```

<br />

### 18. Math 객체

1. JavaScript에 내장된 `Math` 객체에는 수 연산을 위한 많은 메소드와 상수들이 내장되어 있다.

   ```javascript
   // 삼각함수, 로그함수, 지수함수
   Math.sin // 사인
   Math.cos // 코사인
   Math.tan // 탄젠트
   Math.log // 밑을 자연상수로 하는 로그함수
   Math.exp // 밑을 자연상수로 하는 지수함수
   Math.sqrt // 제곱근

   // 절대값, 올림, 내림, 반올림, 소수점 아래 잘라내기
   Math.abs // 절댓값
   Math.ceil // 올림
   Math.floor // 내림
   Math.round // 반올림
   Math.trunc // 소수점 아래 잘라내기

   // 최대값, 최소값
   Math.max
   Math.min

   // 총합
   Math.sum

   // 랜덤
   Math.random

   // 상수
   Math.E // 자연상수 (2.71...)
   Math.PI // 원주율 (3.14...)
   ```

<br />

### 19. Number 타입의 메소드

1. number 타입은 객체가 아니지만, 마치 객체처럼 메소드를 사용할 수 있다

   ```javascript
   (12345).toString(); // '12345'
   (12345).toLocaleString(); // '12,345'
   (1.2345).toFixed(2); // '1.23'
   ```

<br />

### 20. String 타입의 메소드

1. number 타입과 마찬가지로 string 타입도 래퍼 객체의 속성과 메소드를 사용할 수 있다.

   ```javascript
   // 문자열의 길이
   'hello'.length; // 5

   // 여러 문자열 연결하기
   'hello'.concat('fun', 'javascript'); // 'hellofunjavascript'

   // 특정 문자열이 포함되어 있는지 확인하기
   'hello javascript'.includes('hello'); // true
   'hello javascript'.startsWith('he'); // true
   'hello javascript'.endsWith('ript'); // true
   'hello javascript'.search('java'); // 6

   // 문자열의 특정 부분 바꾸기
   'hello javascript'.replace('java', 'type'); // 'hello typescript'

   // 문자열의 일부를 얻어오기
   'hello'.slice(2, 3); // 'll'

   // 좌우 공백문자 제거하기
   '   hello  '.trim(); // 'hello'

   // 문자열을 특정 문자를 기준으로 잘라 배열로 바꾸기
   'hello!fun!javavscript'.split('!'); // ['hello', 'fun', 'javascript']
   'hello'.split(); // ['h', 'e', 'l', 'l', 'o']
   ```


<br />

<br />

## 2 Day

### 1. Boolean 타입

1. 진리값을 나타내는 자료형으로 `True` 또는 `False`의 두 가지 값을 갖는다.

<br />

#### 1.1 논리 연산자

1. 논리 부정(Logical NOT)

2. 논리합(Logical OR):

3. 논리곱(Logical AND):

4. 삼항 연산자(Tenary Operator): `A ? B : C` 형식으로 A가 true이면 B, False이면 C를 리턴

   ```javascript
   // 논리 부정 (logical NOT)
   !true; // false
   !false; // true

   // 논리합 (logical OR)
   true || true; // true
   true || false; // true
   false || true; // true
   false || false; // false

   // 논리곱 (logical AND)
   true && true; // true
   true && false; // false
   false && true; // false
   false && false; // false

   // 삼항 연산자 (ternary operator)
   true ? 1 : 2; // 1
   false ? 1 : 2; // 2
   ```

<br />

#### 1.2 연산자 우선순위

1. `&&`가 `||`보다 우선순위가 높고, `()`가 가장 높다.

<br />

#### 1.3 논리 연산의 여러가지 법칙

1. 논리 연산을 집합에 대응시키면 논리합 → 합집합, 논리곱 → 교집합, 논리 부정 → 여집합으로 생각할 수 있다.
2. 이중 부정: `!!a === a` → 부정의 부정
3. 교환 법칙
4. 결합 법칙
5. 분배 법칙
6. 흡수 법칙
7. 그 밖
   1. `a && true === a`
   2. `a && false === false`
   3. `a || !a === true`

<br />

#### 1.4 Truthy Value & Falsy Value

1. 다음 값들은 Boolean Context에서 false로 간주된다. 이들을 Falsy Value라고 한다.
   1. `false`
   2. `null`
   3. `undefined`
   4. `0`
   5. `NaN`
   6. `''` (빈 문자열)
2. 이 외의 모든 값은 Boolean Context에 들어섰을 때 true로 간주되고, 이 값들을 Truthy Value라고 한다.

<br />

> ##### 단축 평가
>
> 논리연산자가 Boolean 값과 함께 사용되지 않을 경우, Boolean 값을 반환하지 않을 수 있다. 이는 논리 연산자가 피연산자 중 하나를 반환하기 때문이다. Boolean 값으로 평가하기 위해 참조하여야 할 곳까지 진행한 후, 평가를 중지하게된 계기가 된 값을 반환한다. (참고: [PoiemaWeb](http://poiemaweb.com/js-operator))

<br />

#### 1.5 다른 타입의 값을 진리값으로 변환하기

1. 어떤 값을 명시적으로 boolean 타입으로 변환해야 할 때가 있는데, 그 때에는 두 가지 방법을 사용할 수 있다.

   ```javascript
   !!'hello'; // true
   Boolean('hello'); // true
   ```

<br />

### 2. null과 undefined

1. 의미론적으로 둘 다 없음을 나타내지만 사용 목적에 차이가 있다.
2. 비록 `undefined`가 '없음'을 나타내는 값일지라도, 대입한 적 없는 변수 혹은 속성과, 명시적으로 '없음'을 나타내는 경우를 **구분**을 할 수 있어야 코드의 의미가 명확해 질 것이다. **프로그래머의 입장에서 명시적으로 부재를 나타내고 싶다면 항상 null을 사용**하는 것이 좋다.

<br />

#### 2.1 Null Check (내가 만들지 않은 값을 확인할 때)

1. 일반적인 경우에는 보통 `===`를 사용하는데, null check를 할 때 만큼은 `==`를 자주 사용한다.

   ```javascript
   // 아래 세 개의 식은 완전히 같은 의미입니다.
   input !== null && input !== undefined;
   input != null;
   input != undefined;

   // 아래 세 개의 식은 완전히 같은 의미입니다.
   input === null || input === undefined;
   input == null;
   input == undefined;
   ```

<br />

### 3. 함수

1. **큰 프로그램을 잘게 쪼개어 특정 코드 뭉치를 반복해서 사용할 수 있도록 묶어놓은 코드 뭉치의 단위**를 말한다.

<br />

#### 3.1 함수의 구성요소

1. 다음은 add 라는 이름을 가진 함수를 정의한 것이다.

   ```javascript
   function add(x, y) {
     return x + y;
   }
   ```

2. 매개변수(Parameter) : `x, y`처럼 함수 안에 사용하는 변수, 함수 호출이 될때 선언된다.

3. 반환값: return 뒤에 오는 값을 말한다.

4. 호출: `add(2, 3)`과 같은 형식으로 함수를 호출한다. 이때 `add(x, y)`에 전달된 `2, 3`을 인자(argument)라고 한다.

<br />

#### 3.2 실행 순서

1. 함수의 실행 순서는 다음과 같다.

   ```javascript
   // ① - 함수 정의: 이 시점에서 함수는 정의만 될 뿐 내부 코드가 실행되지 않는다.
   function add(x, y) {
     return x + y; // 3 - 함수 실행
   }
   // ② - 함수 호출: 이 시점에서 함수 내부 코드가 실행된다. 
   const result = add(2, 3);
   // ③ - 나머지 코드가 실행된다.
   console.log(result);
   ```

<br />

#### 3.3 Call by Value, Call by Reference

1. 함수 호출 시 매개 변수(Parameter)에 값을 전달할 때 값이 복사되어 전달되는 것을 **Call by Value**, 참조 값이 전달되는 것을 **Call by Reference**라고 한다.
2. 자바스크립트에서 **Call by Reference**는 일어나지 않는다.
3. **Call by Sharing**이라는 것도 존재한다.

<br />

#### 3.4 반환값

1. 함수는 내부적으로 `return` 키워드를 만나면 그 다음 구문을 실행하지 않고 실행을 종료한다.

   ```javascript
   function add(x, y) {
     return x + y;
     console.log('이 부분은 절대로 실행되지 않습니다.');
   }
   ```

2. `return` 값이 명시되지 않으면 암묵적으로 `undefined`를 반환한다.

<br />

#### 3.5 스코프

1. 매개 변수와 같이 함수 안에서 정의된 변수는 자신만의 유효한 범위를 갖는다. 이 변수는 함수 외부에서는 접근할 수 없다. 이처럼 변수는 참조 가능한 유효 범위를 갖고 있는데 이를 Scope라고 한다.

<br />

#### 3.6 스코프 연쇄

1. 함수 내부에서 자신을 포함한 상위 스코프의 변수를 참조하는 것은 가능하다.

<br />

#### 3.7 변수 가리기

1. 하위 스코프에서는 상위 스코프에 있는 변수를 다시 선언할 수있다. 이를 **변수 가리기**라고 한다.

<br />

#### 3.8 어휘적 스코핑 (Lexical Scoping)

1. 스코프는 **코드가 작성된 구조**에 의해서 결정되는 것이지, **함수 호출의 형태**에 의해 결정되는 것이 아니다.

2. 변수는 **함수가 호출된 시점이 아닌 선언된 시점**에서의 유효 범위(Scope)를 갖는다.

   ```javascript
   function add5(x)
     const five = 5;
     return add(x);
   }

   function add(x) {
     return five + x; // 에러!
   }
   ```

<br />

#### 3.9 값으로서의 함수

1. 자바스크립트에서 함수는 일급 시민(또는 일급 객체)으로서 다음과 같은 특징을 갖는다.
   1. 변수에 대입하여 호출할 수 있다.
   2. 배열 또는 객체에 할당할 수 있다.
   3. 함수를 다른 함수의 인자로 전달할 수 있다.
   4. 함수가 다른 함수를 반환할 수 있다.

<br />

#### 3.10 익명함수

1. 함수를 선언할 때 꼭 **이름**을 붙여주어야 하는 것은 아니다. 자바스크립트에서 함수는 무명의 리터럴로 표현이 가능하다. 이러한 함수를 **익명 함수**라고 한다.
2. 단, 익명 함수를 호출하기 위해서는 그 전에 해당 함수를 변수에 할당해야 한다.
3. 한번만 사용할 함수는 보통 익명 함수로 표현한다. 대표적인 경우는 함수를 인자로 넘겨줄 때이다.

<br />

#### 3.11 Arrow Function

1. Arrow Function은 ES2015에서 도입된 문법으로, 함수를 보다 간결하게 표현할 수 있다.

   ```javascript
   function add(x, y){
     return x + y;
   }

   // 아래 표현은 위 표현과 동치이다.
   // 함수 몸체가 한 줄의 표현식이라면 중괄호를 생략할 수 있고 자동으로 return된다.
   // 중괄호를 사용하면 return 키워드를 생략할 수 없다.
   const add = (x,y) => x + y; 
   ```

2. 함수를 다른 함수의 인자로 넘길 때 자주 사용한다.

<br />

### 4. 제어 구문

#### 4.1 조건문

1. 경우에 따라 프로그램의 동작이 달라야 할 때, 우리는 조건문(conditional statement)을 통해 프로그램의 논리 구조를 표현할 수 있다.

<br />

##### 4.1.1 if … else 구문

1. 결과 값이 true이면 해당 Block을 실행하고, false이면 else Block을 실행한다.
2. else가 필요 없는 경우 else 생략 가능하다.
3. if Block 안에 문장이 하나일 경우 중괄호는 생략할 수 있다. (그렇다 하더라도 되도록 {}를 쓰는 것이 좋다.)

<br />

#### 4.1.2 switch 구문

1. 하나의 변수에 대해 많은 경우의 수가 있는 경우, `switch` 구문을 사용하면 코드를 조금 더 보기 좋게 만들 수 있다.
2. `case` 뒤쪽의 코드 영역 마지막에 `break`를 써주지 않으면, 해당 `case`가 실행될 때 바로 뒤의 `case` 코드 영역이 뒤이어 실행되게 된다.
3. 다만 `break`의 이런 성질을 활용해서 코드를 짧게 쓸 수도 있다.

<br />

#### 4.2 반복문

##### 4.2.1 while

1.  특정 조건을 만족하는 한 코드를 반복해서 실행시킵니다.

<br />

##### 4.2.2 do ~ while

1. `while` 구문과 사용법은 크게 다르지 않으나, **내부 코드를 무조건 한 번은 실행시킨다**는 차이점이 있다.

<br />

##### 4.2.3 for

1. while에서 자주 사용되는 패턴을 더 간결한 코드로 만들어 놓은 것이 for 문이다.

   ```javascript
   function pyramid(n) {
     let sum = '';
     for (let i = 0; i < n; i++) {
       sum += '*';
       console.log(sum);
     }
   }

   pyramid(5)

   // *
   // **
   // ***
   // ****
   // *****
   ```

<br />

##### 4.2.4 배열의 순회

1. 이전까지는 배열을 순회할 때 전통적인 `for` 구문을 많이 사용했지만, 근래에는 `forEach`나 `for... of` 구문을 더 많이 사용한다.

   ```javascript
   // forEach
   const arr = [1, 2, 3, 4, 5];

   arr.forEach((item, index) => {
     console.log(`배열의 ${index + 1} 번째 요소는 ${item} 입니다.`);
   })

   //for ... of
   const arr = [1, 2, 3, 4, 5];

   for (let item of arr) {
     console.log(`현재 요소는 ${item} 입니다.`);
   }
   ```

<br />

#### 4.3 break, continue

1. `break`를 만나면 실행을 멈추고 해당 Block을 벗어난다.
2. `continue`를 만나면 해당 루프를 건너뛰고 다음 loop를 실행한다.
3. 루프에서 벗어나지 못하는 상황을 무한 루프라고 한다.

<br />

#### 4.4 함수를 즉시 종료하기

1. `return`과 `throw`는 함수의 나머지 코드를 건너뛰고 함수를 즉시 종료시키는 결과를 낳는다.

2. 아래 코드에서 `switch` 구문을 종료하는 것 뿐 아니라 함수의 실행 자체를 종료한다.

   ```javascript
   function translateColor(english) {
     switch (english) {
       case 'red': return '빨강색';
       case 'blue': return '파랑색';
       case 'purple':
       case 'violet': return '보라색';
       default: return '일치하는 색깔이 없습니다.';
     }
   }
   ```

<br />

<br />

### 5. 객체

1. 객체는 한꺼번에 여러 값을 담을 수 있는 통(container)과 같은 자료구조(data structure)이다.
2. 객체 안에는 이름-값 쌍(name-value pair)이 저장되는데, 이를 객체의 속성(property)이라고 한다.
3. 같은 이름의 속성을 사용할수 없다. 같은 이름의 속성을 선언하면 나중에 선언한 값으로 덮어 씌워진다.
4. **JavaScript에서 식별자로 허용되지 않는 문자가 들어간 속성 이름**을 정의할 때는 **반드시 문자열 표기를 사용**해야 한다.
5. 한글은 쓰지 않는 것이 좋다.
6. 객체 리터럴을 이용해 속성을 지정할 때, 이미 정의된 변수의 이름을 그대로 사용할 수도 있다.
7. 대괄호를 사용해서 다른 변수에 저장된 문자열을 그대로 속성의 이름으로 쓰는 것도 가능하다.

<br />

#### 5.1 객체 다루기

1. 속성 접근자, `delete` 연산자, `in` 연산자 등을 이용해서 객체에 접근하고 필요한 조작을 할 수 있다.

<br />

### 6. 배열

1. 배열은 객체의 일종이지만, 내부적으로 특별하게 취급되어 일반적인 객체들과는 다른 특징을 갖고 있다.
2. 배열 안에 들어가는 값을 요소라고 한다.
3. 배열 안에는 순서가 있다. (객체는 순서가 없다.)
4. 배열 안에는 어떠한 값도 넣을 수 있다.
5. ES2015에 `Array.of` 정적 메소드가 추가되었다.

<br />

#### 6.1 요소 읽기

1. 배열의 각 요소는 인덱스(index)를 이용해 읽어올 수 있다.
2. 인덱스는 객체의 속성 이름과 비슷한 역할을 하지만, **0 이상의 정수**만이 배열의 인덱스가 될 수 있다.
3. 인덱스는 0부터 시작한다.

<br />

#### 6.2 요소 수정

1. 대문자 표기법을 이용해서 요소를 수정할 수 있다.

   ```javascript
   const arr = [false, false, false];
   arr[1] = true;
   console.log(arr); // [ false, true, false ]
   ```

<br />

#### 6.3 배열의 시작 부분에서 요소를 추가 / 제거하기

1. `push` 메소드와 `pop` 메소드 등을 사용하면 **배열의 끝 부분에서** 요소를 추가하거나 제거할 수 있다.
   1. `Array.prototype.push(e)`: 배열의 마지막에 e 요소를 추가
   2. `Array.prototype.pop()`: 배열의 마지막 요소를 삭제
   3. `Array.prototype.unshift(e)`: 배열의 첫 번째에 e 요소를 추가
   4. `Array.prototype.shift()`: 배열의 첫 번째 요소를 삭제
   5. `Array.prototype.reverse()`: 배열 뒤집기

<br />

#### 6.4 배열의 길이

1. 배열의 길이는 `length` 속성을 통해 쉽게 확인할 수 있다.

<br />

#### 6.5 배열의 순회

1. ES2015에 도입된 `for...of` 구문은, 역시 ES2015에 도입된 **iterable**을 순회하기 위해 사용할 수 있다.

   ```javascript
   for(let item of arr){
     console.log(item);
   }
   ```

2. 배열을 순회하면서 배열의 **인덱스가 필요한 경우**에는 `for...of` 구문을 사용할 수 없다. 이 때에는 `forEach` 메소드를 사용하면 되고, **코드의 실행 속도가 정말로 중요한 부분**에서는 역사와 전통의 `for` 구문을 사용하면 된다.

<br />

#### 6.6 배열로부터 새로운 값 생성

##### 6.6.1 map

1. `map` 메소드는 배열의 **각 요소에 함수를 적용**해서, 그 반환값을 요소로 갖는 **새로운 배열**을 만든다.

2. `forEach`와 비슷해 보이지만, 새로운 배열을 만든다는 점이 다르다.

   ```javascript
   const arr = [1, 2, 3, 4, 5];

   // `arr`의 각 요소를 제곱한 값으로 새 배열을 만듭니다.
   const newArr = arr.map(item => item ** 2);
   console.log(newArr); // [1, 4, 9, 16, 25]
   ```

<br />

<br />

## 3 Day

### 1. 그리드 시스템

1. 기획 단계에서 column을 미리 잡고 개발을 하는 것을 그리드 시스템이라고 한다.

2. 유지 보수가 편리하다는 장점이 있다. 기획 단계에서 미리 정한 것이므로 마크업 단계에서도 이 사실에 유의하여 마크업한다.

3. 한 칸, 두 칸 ...이 차지할 공간에 대한 너비를 미리 클래스로 정의해놓는다.

4. 너비를 계산하는 데 있어서 고민을 덜어줄 수 있다.

5. column이 존재하기 위해서는 column을 감싸는 row가 있어야 한다. 따라서 clumn의 부모는 항상 row여야 한다.

6. 웹 상에서 가장 많이 쓰는 해상도는 2010년을 기준으로 960px이고, 현재는 1280을 가장 많이 사용한다.

7. 몇 픽셀을 사용할 것인지 정했다면 몇 column을 사용할 지 정해야 한다. 한 기둥의 너비를 px로 줄 지 %로 줄 지는 자유이다.

8. 블록이 차곡차곡 옆에 쌓이도록 하기 위해 float 속성을 부여한다. 부모가 높이를 잃는 것을 방지하기 위해 row에 clearfix를 추가한다.

9. 다음은 클래스 속성이 col로 시작하는 것에 float 속성을 부여하는 코드이다.

   ```css
   [class*="col"] {
     float: left;
   }
   ```

10. 전체적인 컨텐츠를 하나의 클래스로 감싼 후 각 컬럼을 감싸는 부분을 row로 잡는 것이 일반적이다.

11. 데스크탑과 모바일을 다르게 대응하기 위해 미디어 쿼리를 사용한다.

12. 일반적으로 모바일, 데스크탑, 태블릿, 와일드 총 4가지에 대해 각각 대응을 한다.

13. 한 칸을 밀어내고 시작하는 레이아웃을 만들기 위해서 보통 push나 pull같은 클래스를 미리 정의해놓는다.

14. 실무에선 그리드 시스템을 직접 만들지는 않지만, 어떻게 쓰이는지는 알고 있어야 사용하기 편하다.

15. [부트스트랩](https://getbootstrap.com/)

16. 부트스트랩은 기본적으로 12 column을 사용한다.

17. column의 너비를 %로 지정하면 container의 크기가 바껴도 쉽게 대응할 수 있다는 장점이 있다. 그러나 부모 요소를 기준으로 하기 때문에 6컬럼만 사용하고 있는 상황에서 그 안에서 한 column을 사용하기 위해 12.5%를 적용하면 실제는 120px이 아니게 되는 문제가 발생한다.


<br />

<br />

## 4 Day

### 1. Aray.from('hello')

1. 문자열을 배열로 변환할 수 있다.

   ```javascript
   Array.from('hello') // ['h', 'e', 'l', 'l', 'o']
   ```

<br />

### 2. 프로토타입 읽고 쓰기

1. 어떤 객체의 프로토타입을 읽어오기 위해 `Object.getPrototypeOf` 함수를 사용할 수 있다.

2. `Object.setPrototypeOf` 함수를 통해 이미 생성된 객체의 프로토타입을 변경할 수 있지만, 객체가 생성된 이후에 프로토타입을 변경하는 작업은 굉장히 느리므로 **이 기능의 사용은 피하는 것이 좋다.**

   ```javascript
   const parent = {
     familyName: '윤'
   };
   const child = Object.create(parent);

   Object.getPrototypeOf(child) === parent; // true

   const newParent = {
     familyName: '신'
   };
   Object.setPrototypeOf(child, newParent);
   Object.getPrototypeOf(child) === parent; // false
   ```

<br />

### 3. 프로토타입 체인

1. 어떤 객체가 다른 객체의 프로토타입 체인에 존재하는지 확인하기 위해서 `Object.prototype.isPrototypeOf` 메소드를 사용할 수 있다.

   ```javascript
   obj1.isPrototypeOf(obj3); // true
   obj2.isPrototypeOf(obj3); // true
   ```

2. 프로토타입 체인을 이용해 프로토타입 객체의 속성을 간접적으로 삭제하거나 변경하는 것은 불가능하다. **그저 프로토타입의 속성을 읽어올 수 있을 뿐**이다.

   ```javascript
   const parent = {
     prop: '😝'
   };

   const child = Object.create(parent);

   // 프로토타입 객체의 속성을 간접적으로 삭제하는 것은 불가능합니다.
   delete child.prop;
   parent.prop; // '😝'

   // 프로토타입 객체의 속성을 간접적으로 변경하는 것은 불가능합니다.
   child.prop = '💀';
   parent.prop; // '😝'
   child.prop; // '
   ```

<br />

### 4. new.target

1. ES2015에서 도입된 `new.target` 문법은 생성자 내부에서 사용된다. 만약 생성자가 `new`를 통해 호출되면 `new.target`에는 해당 생성자가 저장된다. 만약 생성자가 일반적인 함수로서 호출되면, `new.target`에는 `undefined`가 저장된다.

   ```javascript
   function Person() {
     if (new.target) {
       console.log('생성자로 호출되었습니다.');
     } else {
       console.log('생성자로 호출되지 않았습니다.');
     }
   }

   new Person(); // 생성자로 호출되었습니다.
   Person(); // 생성자로 호출되지 않았습니다.
   ```

2. 이 기능을 이용해, 실수로 `new`를 빠트렸을 때도 문제없이 객체가 생성되도록 코드를 작성할 수 있다.

   ```javascript
   function Person(name) {
     if (!new.target) {
       // `new` 없이 호출되면, 직접 객체를 생성해 반환합니다.
       return new Person(name);
     } else {
       this.name = name;
     }
   }
   ```

<br />

### 5. 정적 메소드

1. JavaScript의 함수는 객체이기도 하다는 사실을 앞에서 언급했습니다. 생성자의 속성에 직접 지정된 메소드를 가지고 정적 메소드(static method)라고 한다. 우리가 이제까지 유용하게 사용했던 `Number.isNaN`, `Object.getPropertyOf` 등의 함수들은 모두 정적 메소드이다. 정적 메소드는 특정 인스턴스에 대한 작업이 아니라, 해당 생성자와 관련된 일반적인 작업을 정의하고 싶을 때 사용된다.

   ```javascript
   // 생성자의 속성에 함수를 직접 할당합니다.
   Person.compareAge = function(person1, person2) {
     if (person1.age < person2.age) {
       return '첫 번째 사람의 나이가 더 많습니다.';
     } else if (person1.age === person2.age) {
       return '두 사람의 나이가 같습니다.';
     } else {
       return '두 번째 사람의 나이가 더 많습니다.';
     }
   }
   ```

<br />

### 6. String.prototype.repeat()

1. 문자열을 반복하는 메소드이다.

   ```javascript
   '* '.repeat(3) // '* * * '
   ```

<br />

### 7. 정렬 알고리즘

1. 요소 중에 가장 작은 값을 찾고 해당 요소를 가장 앞에 위치시킨다. (선택 정렬 알고리즘)
2. 순차적으로 두 값을 비교하여 작은 값을 앞에 위치시킨다. (버블 정렬 알고리즘)

<br />

<br />

## 5 Day

### 1. 자료구조

1. 데이터를 어떻게 체계적으로 저장할 지에 관한 것이다.
2. 배열, Stack, Tree 등이 있다.
3. 자료구조와 알고리즘을 알고 있으면 사용할 라이브러리에 대해서 제대로 알고 사용할 수 있다.

<br />

### 2. Array.prototype.includes()

1. String 래퍼 객체와 마찬가지로 `includes()` 메소드를 사용할 수 있다.

   ```javascript
   const arr = [1, 2, 3, 4, 5]
   arr.includes(1) // true
   ```

<br />

### 3. 자바스크립트에서 정수 나눗셈을 다루는 방법

1. `Math.floor(a / b)`를 이용하여 정수 나눗셈을 처리할 수 있다.

<br />

### 4. 버블 정렬 알고리즘

1. 배열의 각 요소를 순차적으로 두 개씩 비교해보면서 큰 값을 뒤로 보내는 방법이다.

<br />

### 5. String.prototype.toUpperCase, String.prototype.toLowerCase

1. `String.prototype.toUpperCase`는 문자열을 모두 소문자로 변환한 새로운 문자열을 반환한다. 이때 원본 문자열은 바뀌지 않는다.
2. `String.prototype.toLowerCase`는 문자열을 모두 소문자로 변환한 새로운 문자열을 반환한다. 이때 원본 문자열은 바뀌지 않는다.

<br />

### 6. String.prototype.repeat()

1. 파라미터로 전달된 문자열을 반복할 수 있다.

   ```javascript
   ' '.repeat(3) + 'hello' // '   hello'
   ```

<br />

### 7. 문자열과 배열

1. 문자열을 배열처럼 다룰 수 있다.

   ```javascript
   const str = 'string'

   for (const char of str) {
     console.log(char);
   }
   ```

<br />

### 8. key in Object

1. key in Object 형식으로 속성의 존재 여부를 확인할 수 있다.

   ```javascript
   const obj = { name: 'Lee' }
   name in obj // true
   ```

   ​

