# 5 Week

## 1 Day

### 1. Array

#### 1.1 Array.of()

1. 일관적이지 못한 생성자의 동작방식 때문에, ES2015에 `Array.of` 정적 메소드가 추가되었다.

   ```javascript
   Array.of(1) // [1]
   Array.of(1, 2, 3) // [1, 2, 3]
   ```

<br />

#### 1.2 다른 객체로부터 배열 생성하기

1. JavaScript에는 **유사 배열 객체(array-like object)**와 **iterable**이라는 개념이 있어서, 이에 해당하는 값들은 `Array.from` 정적 메소드를 통해 배열로 쉽게 변환될 수 있다.

   ```javascript
   // `string` 타입은 래퍼 객체를 통해 iterable로 다루어질 수 있다.
   Array.from('hello'); // ["h", "e", "l", "l", "o"]
   ```

<br />

#### 1.3 요소 수정하기

1. `fill` 메소드를 사용하면 한꺼번에 많은 요소를 같은 값으로 바꾸어 버릴 수도 있다.

   ```javascript
   const arr = [1, 2, 3, 4, 5];

   // 전체를 0으로 채우기
   arr.fill(0);
   console.log(arr); // [ 0, 0, 0, 0, 0 ];

   // 인덱스 2와 4 사이를 1로 채우기
   arr.fill(1, 2, 4);
   console.log(arr); // [ 0, 0, 1, 1, 0 ];
   ```

<br />

#### 1.4 배열 정렬하기

1. `sort` 메소드의 인자에는 **비교 함수**를 넘겨주어야 한다. 비교 함수는 인자 두 개를 받아서, 아래의 조건에 따라 잘 정렬되도록 적절한 값을 반환해주어야 한다.

2. 만약 어떤 두 값 `a`, `b`에 대해서 비교 함수 `compare`를 `compare(a, b)`와 같이 호출했을 때

   1. 음수를 반환하면, `a`가 `b` 앞에 오도록 정렬한다.
   2. 0을 반환하면, `a`와 `b`를 같은 순서로 간주한다.
   3. 양수를 반환하면, `b`가 `a` 앞에 오도록 정렬한다.

3. 따라서, 어떤 배열을 정렬할 때에는 **어떤 값을 기준으로 정렬할 지**를 생각해 본 다음, 정렬함수를 만들 때 **오름차순으로 정렬할 지, 내림차순으로 정렬할 지**를 생각해보면 된다. 예를 들어, **문자열의 길이를 기준으로 내림차순 정렬**을 하고 싶다면 아래와 같이 하면 된다.

   ```javascript
   const names = ['Denton', 'Kathleen', 'Ebba', 'Bruce'];
   names.sort((x, y) => y.length - x.length);
   console.log(names); // [ 'Kathleen', 'Denton', 'Bruce', 'Ebba' ]
   ```

4. 여기서 주의할 점이 하나 있는데, 비교 함수를 넘기지 않더라도 정렬이 잘 되는 것처럼 보일 수 있다. 하지만 비교 함수를 인자로 넘겨주지 않으면, **sort 메소드는 먼저 요소를 전부 문자열로 변환한 후, 유니코드 코드포인트를 비교하는 방식으로 정렬한다.** 따라서 기대했던 것과는 전혀 다른 결과가 나올 수 있으니, `sort` 함수를 사용할 때는 꼭 비교함수를 넘겨주자.

<br />

#### 1.5 배열의 순회

##### 1.5.1 `for...of` 구문

1. ES2015에 도입된 `for...of` 구문은, 역시 ES2015에 도입된 **iterable**을 순회하기 위해 사용할 수 있다. 배열 역시 iterable이므로, `for...of` 구문을 사용해 순회할 수 있다.

<br />

#### 1.6 배열로부터 새로운 값 생성

##### 1.6.1 reduce

1. `reduce` 메소드는 모든 요소의 값을 **종합**해서 하나의 값으로 만드는 계산을 할 때 사용한다.

2. 아래 코드에서 일어나는 일을 순서대로 나열하면 다음과 같다.

   1. 초기값 `0`과 배열의 첫 번째 요소인 `1`을 인자로 해서 함수를 호출한다. 즉, `acc` 매개변수에 `0`이 대입되고, `item` 매개변수에 `1`이 대입됩니다. 결과값은 `1`이 됩니다. 이 값을 **누적값(accumulator)**라고 부른다.
   2. 누적값 `1`과 배열의 두 번째 요소인 `2`를 인자로 해서 함수를 호출한다. 결과값 `3`이 다시 누적값이 된다.
   3. 누적값 `3`과 배열의 세 번째 요소인 `3`을 인자로 해서 함수를 호출한다. 결과값은 `6`이다.
   4. 더 이상 요소가 남아있지 않으므로 `reduce` 호출의 결과값은 `6`이 된다.

   ```javascript
   const arr = [1, 2, 3];

   arr.reduce((acc, item) => acc + item, 0); // 6
   ```

3. `reduce`에 주어지는 함수 역시 `forEach`나 `map`과 마찬가지로 여러 개의 인자를 받는데, 맨 앞에 누적값이 추가되어 `(누적값, 현재 요소, 인덱스, 배열)`와 같은 인자를 받는다.

4. `reduce` 메소드에 초기값 인자를 주지 않으면, 첫 번째 인자가 초기값으로 지정되어 첫 번째 요소와 두 번째 요소에 대한 계산부터 시작한다. 즉, 위 두 예제에서 초기값을 생략해도 같은 결과가 나온다. 다만, 배열의 요소가 하나 밖에 없다면 아래와 같이 계산이 수행되지 않고 첫 번째 요소가 그대로 반환되므로, **초기값은 항상 제공해주는 것이 좋다.**

5. 계산을 오른쪽부터 수행하는 `reduceRight` 메소드도 있다.

6. 초기값을 따로 주지 않으면 마치 두 번째 인덱스가 첫 번째 값인 것처럼 동작한다. 그러나 우리가 받을 배열이 어떤 모양일지 모르는 상황이기 때문에 초기값을 설정하지 않는다면 원치 않는 결과를 얻게 될 수 있다. 따라서 명시적으로 초기값을 설정해주는 것이 좋다.

   ```javascript
   const arr = ['one'];

   // 문자열의 길이를 모두 더하려고 했지만...
   // 계산을 수행할 대상이 하나밖에 없어서 함수가 호출되지 못하고 결과값으로 'one'이 반환된다.
   arr.reduce((acc, item) => {
     return acc + item.length;
   }); // 'one'

   // 초기값을 주면 계산이 제대로 수행된다.
   arr.reduce((acc, item) => {
     return acc + item.length;
   }, 0); // 3
   ```

   ​

<br />

#### 1.7 요소 찾기

1. `indexOf`와 `lastIndexOf` 메소드를 사용하면 특정 요소가 배열의 몇 번째에 위치하는 지를 알아낼 수 있다.

2. `indexOf`는 배열의 왼쪽부터, `lastIndexOf`는 오른쪽부터 검색해서 처음 만나는 요소의 인덱스를 반환한다. 만약 일치하는 요소가 없다면, 두 메소드 모두 `-1`을 반환한다.

3. 두 메소드 모두 두 번째 인자로 **시작 인덱스**를 받는다. 시작 인덱스가 주어지면 해당 인덱스부터 검사를 시작한다.

   ```javascript
   const arr = ['a', 'b', 'c', 'b', 'a'];

   arr.indexOf('b', 2); // 3
   arr.lastIndexOf('b', 2); // 1
   ```

4. `find` 메소드와 `findIndex` 메소드를 사용하면 특정 조건을 만족하는 요소를 찾을 수 있다. 두 메소드 모두 predicate을 이용해 왼쪽부터 검사해서 처음 만나는 요소를 찾는다. `find`는 요소 자체를 반환하며, `findIndex`는 요소의 인덱스를 반환한다는 차이점이 있다. 조건을 만족하는 요소를 찾지 못하면, `find`는 `undefined`를, `findIndex`는 `-1`을 반환한다.

   ```javascript
   const names = ['Denton', 'Kathleen', 'Ebba', 'Bruce'];

   names.find(item => item.length < 6); // 'Ebba'
   names.findIndex(item => item.length < 6); // 2

   names.find(item => item.length > 8); // undefined
   names.findIndex(item => item.length > 8); // -1
   ```

<br />

#### 1.8 배열인지 아닌지 판별하기

1. `arr instanceof Array`와 같이 할 수 있다고 생각하실지도 모르지만, 아래와 같이 `instanceof` 연산자를 속이는 것은 매우 쉬운 일이므로, 어떤 값이 배열인지 아닌지 판별하기 위해서는 꼭 용도에 맞는 `Array.isArray`를 사용하자.

   ```javascript
   const obj = {};
   Object.setPrototypeOf(obj, Array.prototype);
   obj instanceof Array; // true
   Array.isArray(obj); // false
   ```

<br />

#### 1.9 정규 표현식

1. `split(/\s+/)`에서 `/\s+/`은 연속된 1개 이상의 공백을 의미한다.



<br />

<br />

## 2 Day

### 1. 객체

#### 1.1 객체 리터럴

1. 객체 리터럴을 이용해 속성을 지정할 때, 아래와 같이 이미 정의된 변수의 이름을 그대로 사용할 수도 있다.

   ```javascript
   const name = '윤아준'
   const phoneNumber = '010-1234-5678';

   const person = {
     name, // `name: name`과 똑같이 동작합니다.
     age: 19,
     phone: phoneNumber
     // ...
   };
   ```

2. 혹은 아래와 같이 대괄호를 사용해서 다른 변수에 저장된 문자열을 그대로 속성의 이름으로 쓰는 것도 가능하다.

   ```javascript
   const propName = 'prop';

   const obj = {
     [propName]: 1
   };

   obj.prop; // 1
   ```

<br />

#### 1.2 객체 다루기

1. 속성이 객체 안에 존재하는지 확인하는 방법은 다음과 같다. 프로퍼티명을 따옴표로 감싸줘야 한다.

   ```javascript
   const person = {
     name: '윤아준',
     age: 19,
     languages: ['Korean', 'English']
   };

   'name' in person; // true
   'phoneNumber' in person; // false
   ```

<br />

### 2. Github- Clone with SSH

1. SSH로 clone하기 위해 우선 터미널에 다음 명령어를 입력한다. keygen은 Key Generation의 약어이다.

   ```bash
   ssh-keygen
   ```

2. 다음으로 진행되는 과정에서 모두 엔터를 눌러 설정을 완료한다.

3. 홈 폴더의 .ssh 폴더로 이동한다. `~`은 홈 폴더를 의미한다.

   ```bash
   cd ~/.ssh
   ```

4. ls 명령을 실행하여 `id_rsa`와 `id.rsa.pub` 파일이 있는지 확인한다. 존재하면 잘 사전 세팅은 완료된 것이다.

5. 사전 세팅을 완료했으면, github 홈페이지에서 자신의 Profile을 누른 후 Settings로 이동한다.

6. 좌측 메뉴에서 SSH and GPG Keys로 이동한 후, 우측 상단의 New SSH key를 클릭한다.

7. ~/.ssh 폴더에서 다음 명령어를 실행하면 출력되는 내용을 복사 후, Key 창에 붙여넣기하고 추가한다.

<br />

### 3. 터미널에서 바로 vscode 실행하기

1. 터미널에서 다음 명령을 실행하면 현재 폴더를 프로젝트 영역으로 하는 vscode를 바로 실행할 수 있다.

   ```bash
   code .
   ```

<br />

### 4. netlify

1. 서버를 잘 모르더라도 서버와 관련된 여러가지 기능들을 사용할 수 있도록 만들어진 서비스이다.


<br />

<br />

## 4 Day

### 1. 소스맵(Sourcemap)

1. 소스맵을 설정하면 Webpack은 bundle.js에 대한 bundle.js.map 파일을 만들고 bundle.js의 각 라인들이 어떤 파일에서 불러온 것인지 기록한다. 번들러를 거치기 전과 후의 파일이 어떻게 매칭이 되어있는지 기록을 해주는 것이다.

2. webpack/development.js 파일에 다음과 같이 설정하면 소스맵을 만들어준다.

   ```javascript
   module.exports = merge(common, {
     devtool: 'cheap-module-source-map',
     devServer: {
       contentBase: './dist',
       hot: true
     },
     plugins: [
       new webpack.NamedModulesPlugin(),
       new webpack.HotModuleReplacementPlugin()
     ]
   });
   ```

<br />

### 2. 번들러의 세대 교체

1. 기존의 Webpack은 약간 느리다는 단점이 있어서 차세대 번들러들이 등장했다.
2. 대표적으로 Rollup, Fusebox, Brunch 등이 있다.
3. 최근 Parcel이란 이름의 번들러가 등장했는데 굉장히 혁신적이다. 기존의 Webpack에서 번들링 속도를 느리게 하던 요소들을 제거했다. 그러나 아직 Sourcemap과 같은 기능이 없어서 실무에서 사용할 순 없는 상태이다.

<br />

### 3. LF와 CRLF

1. LF는 현재 커서의 위치에서 아래쪽으로 줄만 바꾸는 것이고 CR은 현재 커서의 위치를 현재 행의 맨 앞으로 이동시키는 것을 의미한다.
2. 리눅스와 맥은 줄바꿈 문자로 LF를 사용하고, 윈도는 CR과 LF를 모두 사용한다.

<br />

### 4. .editorconfig

1. 서로 다른 개발 환경에서 작업하는 개발자들이 서로 다른 옵션을 사용하게 되면 혼란을 겪게 되는데, 이러한 규칙을 미리 지키도록 강제해놓은 파일이 바로 .editorconfig이다.

2. vscode에는 .editorconfig가 내장되어있지 않아서 Extension으로 추가적으로 설치해줘야 한다.

   ```javascript
   root = true

   [*]
   charset = utf-8
   indent_style = space
   indent_size = 2
   trim_trailing_whitespace = true
   insert_final_newline = true
   ```

<br />

### 4. Prototype

1. 어떤 객체의 프로토타입에 메소드를 정의하기 위해 메소드를 정의한 객체를 통째로 프로토타입에 할당할 수 있지만, 이렇게 하게 되면 프로토타입 객체가 기본적으로 가지고 있던 constructor를 잃게 되므로 좋지 않은 방식이다.

<br />

### 5. VSCode 설정

#### 5.1 환경 설정 

1. 환경 설정 열기: `CMD` + `,`
   1. 좌측은 기본 설정, 우측은 기본 설정을 참고하여 수정할 내용을 써넣는다.
   2. editor.renderWhitespace 속성으로 공백 문자를 렌더링하는 방법을 제어할 수 있다. boundary는 글자와 글자 사이의 점을 제외한 공백에 점을 표시하고, all은 글자와 글자 사이의 점까지 표시한다. 공백을 깔끔하게 관리할 필요가 있으므로 설정하는 것을 추천한다.

<br />

#### 5.2 Debugger for Chrome

1. Debugger를 활용하여 버그를 쉽게 캐치할 수 있다.

   1. Debugger for Chrome 익스텐션을 설치한다.
   2. `CMD` + `Shift` + `P`를 눌러 명령어 입력창을 실행한 후, launch를 검색한다.
   3. 검색 목록에서 chrome을 선택하면 .vscode 폴더 안에 launch.json 파일이 생성된다.

   ```javascript
   {
     // IntelliSense를 사용하여 가능한 특성에 대해 알아보세요.
     // 기존 특성에 대한 설명을 보려면 가리킵니다.
     // 자세한 내용을 보려면 https://go.microsoft.com/fwlink/?linkid=830387을(를) 방문하세요.
     "version": "0.2.0",
     "configurations": [
       {
         "type": "chrome",
         "request": "launch",
         "name": "Launch Chrome against localhost",
         "url": "http://localhost:8080",
         "webRoot": "${workspaceRoot}"
       }
     ]
   }
   ```

2. 이후 다음 순서를 따라 Debugger를 실행할 수 있다.

   1. 좌측의 bug 버튼을 클릭하여 재생 버튼을 클릭하면 Debugger for Chrome이 실행된다.
   2. 일반 브라우저에 찍혀야 할 로그가 에디터 콘솔에 표시되는 것을 확인할 수 있다.
   3. 코드의 좌측을 클릭하여 점을 고정시키면 중단점을 설정할 수 있다. 코드가 실행될 때 해당 부분이 실행되는 시점에 멈추라는 의미이다. 따라서 해당 시점에 코드 내부를 들여다볼 수 있게 된다. 재생 버튼을 한 번 더 클릭하여 재개할 수 있다.
   4. 디버거를 사용하지 않는다면 `console.log()`를 사용해서 일일이 확인해봐야하지만,  Debugger를 사용하면 `console.log()`를 하나도 사용하지 않고 코드 내부에서 무슨일이 일어나는지 들여다볼 수 있다.
   5. 재생 버튼의 우측에 위치한 버튼을 누르면 코드의 실행 흐름을 따라 한 줄씩 실행하므로 코드의 실행 흐름을 직접 확인할 수 있다.

<br />

#### 5.3 Multiple Cursor

1. 같은 단어를 순차적으로 여러 개 선택하기: `CMD` + `D`
2. 다중 커서 지정하기: `CMD` + `Option` + `↑`, `↓` 또는 `CMD` 키를 누른 채로 커서를 위치시킬 부분을 클릭한다.

<br />

#### 5.4 git

1. VSCode에 git 관련 기능이 내장되어 있다.

2. git 버튼 클릭 후 Message에 commit 메세지 입력 후 체크 버튼을 클릭하면 add와 commit이 자동으로 처리된다.

    하단의 변경 내용 동기화 버튼으로 push를 처리할 수 있다.

<br />

#### 5.5 라인 추가

1. 커서의 위치에 상관없이 아랫쪽에 한 줄 추가: `CMD` + `Return`
2. 커서의 위치에 상관없이 윗쪽에 한 줄 추가: `CMD` + `Shift` + `Return`

<br />

### 6. Predicate

1. 진리값을 반환하는 함수를 Predicate라고 한다.

<br />

<br />

## 5 Day

### 1. 이벤트와 뷰, 상태 

1. 과거에 제이쿼리를 사용하던 시절엔 이벤트가 발생했을 때 중간 계층을 거치지 않고 바로 화면에 반영했다.
2. 리액트에서는 이벤트가 발생하면 중간 계층인 상태를 변경하고 그 상태를 화면에 반영한다. 이 방식에 익숙해져야 한다.


<br />

### 2. vim 

1. 파일 열기


   ```bash
   vim 파일명
   ```

2. 파일 수정하기: vim 에디터에서  `a`를 한 번 누른 후 수정 가능

3. 파일 저장하기: vim 에디터에서 `:` + `q` 입력 후 엔터

4. 종료하기: vim 에디터에서 `:` + `q` 입력 후 엔터. `!` 추가하면 강제 종료 가능

<br />

### 3. .zshrc

1. rc는 Run Command의 준말로 보통 줄여서 '런컴'이라고 읽는다.

<br />

### 4. 힙

1. 객체가 변수에 할당될 때 실제 객체가 저장되는 것이 아니라 해당 객체가 어디에 저장되어있는지에 대한 참조값이 저장된다. 이때 실제로 저장된 공간을 힙이라고 한다.

<br />

### 5. parseInt()

1. 두 번째 인자로 해당 값을 몇 진법으로 해석할 것인지 설정할 수 있다.

<br />

### 6. String.prototype.concat()

1. 문자열의 래퍼 객체도 concate 메소드를 가지고 있다.

<br />

### 7. reduce를 이용하여 배열의 다양한 메소드 구현하기

1. map

   ```javascript
   const map = (arr, func) => {
     return arr.reduce((acc, item) => {
       acc.push(func(item));
       return acc;
     }, []);
   };
   ```

2. filter

   ```javascript
   const filter = (arr, func) => {
     return arr.reduce((acc, item) => {
       if (func(item)) {
         acc.push(item);
       };
       return acc;
     }, []);
   };
   ```

3. every

   ```javascript
   function every(arr, func) {
     return arr.reduce((acc, item) => {
       return acc && func(item);
     }, true);
   }
   ```

4. some

   ```javascript
   function some(arr, func) {
     return arr.reduce((acc, item) => {
       return acc || func(item)
     }, false);
   }
   ```

<br />

### 8. 참조

1. **참조(reference)**란, **객체가 컴퓨터 메모리 상에서 어디에 저장되었는 지를 가리키는 값**이다. J다vaScript에서는 우리가 참조를 직접 읽거나 조작할 수 없다. 하지만, 언어를 제대로 이해하기 위해서 참조가 무엇인지 알아야 할 필요는 있다.
2. 우리가 객체라고 생각하고 다루어왔던 값은 실제로는 **객체에 대한 참조**이다. 객체의 속성에 접근하면, JavaScript 엔진은 **참조를 통해 메모리에 저장되어 있는 객체에 접근해서 해당 객체의 속성을 읽는다.** 이런 동작을 가지고 역참조(dereference)라고 한다.

