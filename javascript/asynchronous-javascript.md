# 자바스크립트 비동기 프로그래밍

## 동기식 처리 모델과 비동기식 처리 모델

동기식 처리 모델에서는 순차적으로 태스크를 수행한다. 즉, 어떤 작업이 완료될 때까지 코드의 실행을 멈추고 기다리는 식이다. 이와는 달리, 비동기식 처리 모델에서는 현재 진행 중인 작업이 완료되기를 기다리지 않고 다음 작업을 계속해서 실행해나간다.

두 방식의 차이에 대한 이해를 돕기 위해, 서버에서 데이터를 받아와 화면에 표시하는 작업을 수행하는 상황을 가정해보자.

먼저, 클라이언트는 필요한 데이터를 서버에 요청한다. 이렇게 요청을 보낸 이후에 서버로부터 데이터를 응답을 받기까지는 비교적 오랜 시간을 필요로 한다. 만약 이를 동기식으로 처리하게 되면, 서버로부터 응답을 받기 전까지 모든 태스크의 수행은 블로킹(Blocking)된 상태로 남아있게 된다. 이는 사용자 경험을 완전히 망가뜨릴 수 있다. 따라서 동기식 처리 모델은 데이터 통신과 같은 오랜 시간을 필요로 하는 작업에 적합하지 않다.

위 상황에 비동기식 처리 모델을 적용하면 훨씬 더 효율적인 방식으로 작업을 수행할 수 있다. 동기식 모델과 달리, 클라이언트는 요청을 보낸 후 서버로부터 응답을 받을 때까지 코드의 실행을 중지하지 않는다. 다음 태스크를 계속해서 실행한 후, 요청에 대한 응답이 완료되었을 때 해당 태스크에 대한 처리를 재개하는 식이다. 이러한 AJAX 요청 작업과 타이머 함수, DOM 이벤트 등은 모두 비동기식 처리 모델로 동작하도록 설계되어있다.

## 자바스크립트 실행 환경

동기식/비동기식 처리 모델이 구체적으로 어떻게 동작하는지를 이해하기 위해, 먼저 자바스크립트 코드의 실행 환경에 대해 알아볼 필요가 있다. 브라우저 환경의 경우, 크게 다음의 영역들로 구성된다.

* 자바스크립트 엔진
* 태스크 큐
* 이벤트 루프
* Web APIs

![자바스크립트 실행 환경](./assets/2019-01-15-asynchronous-javascript-1.png)

### 자바스크립트 엔진

자바스크립트 코드를 해석하고 실행하는 인터프리터를 자바스크립트 엔진이라고 한다. 가장 널리 알려져있고 많이 사용되는 엔진 중 하나는 크롬 V8 엔진이다. V8 엔진은 크롬 브라우저, Node.js 등에서 사용되고 있으며, 크게 다음 두 부분으로 구성된다.

* 메모리 힙(Memory Heap): 동적으로 생성된 객체 인스턴스의 할당이 이루어지는 영역이다.
* 호출 스택(Call Stack): 요청된 작업의 스택 프레임을 순차적으로 담아 관리하는 영역이다. 싱글 스레드 기반의 자바스크립트는 단 하나의 호출 스택을 사용하기 때문에 해당 태스크가 종료되기 전까지는 다른 어떤 태스크도 수행될 수 없다.

### 태스크 큐(또는 이벤트 큐)

비동기 처리 함수의 콜백 함수, 비동기식 이벤트 핸들러, 타이머 함수(`setTimeout`, `setInterval`)의 콜백 함수가 보관되는 영역으로 이벤트 루프에 의해 특정 시점(호출 스택이 비어졌을 때)에 순차적으로 호출 스택으로 이동되어 실행된다.

### 이벤트 루프

호출 스택 내에서 현재 실행중인 태스크가 있는지, 그리고 태스크 큐에 태스크가 있는지를 반복하여 확인한다. 만약 호출 스택이 비어있다면 태스크 큐 내의 태스크가 호출 스택으로 이동되고 실행된다.

### Web APIs

브라우저가 제공하는 `setTimeout` 등의 타이머 함수, `XMLHttpRequest`와 같은 AJAX 관련 객체 등을 일컫어 Web APIs라고 한다.

### 동기식 처리 모델 예시

다음은 동기식 처리 모델의 예시 코드이다.

```javascript
// 인자로 주어진 시간만큼 코드의 실행을 미루는 함수
function sleep(ms) {
  const start = Date.now()
  while ((Date.now() - start) < ms) {}
  console.log('Sleeping..')
}

function sayHello(name) {
  sleep(3000)
  console.log(`Hello, ${name}!`)
}

sayHello('Kim')
```

시간에 따른 호출 스택의 모습은 다음과 같다.

![동기식 처리 모델에서의 호출 스택](./assets/2019-01-15-asynchronous-javascript-2.png)

### 비동기식 처리 모델 예시

앞서 본 예시처럼, 자바스크립트 엔진은 요청된 작업을 순차적으로 호출 스택에 쌓아올려 한 번에 하나의 작업씩만 수행할 뿐이다. 동시성을 지원하기 위한 비동기 처리는 자바스크립트 엔진을 구동하는 환경이 담당한다.

비동기식 처리 모델로 동작하는 대표적인 함수인 `setTimeout`의 호출 과정을 순차적으로 살펴보자.

```javascript
function sayHello(name) {
  setTimeout(() => console.log('Sleeping..'), 0)
  console.log(`Hello, ${name}!`)
}

sayHello('Kim')
```

1. 코드를 실행하는 순간, 전역 실행 컨텍스트(Global Execution Context)가 호출 스택의 최상단에 쌓인다.
2. `sayHello('Kim')`가 전역 실행 컨텍스트 위에 쌓인다.
3. `setTimeout(/* ... */)`이 `sayHello('Kim')` 위에 쌓인다.
4. `setTimeout(/* ... */)`에서 지정된 시간만큼 기다려야 하는 일에 대한 처리를 web APIs를 통해 브라우저에 위임하고 다음 작업을 진행한다. 지정된 시간이 지나면, 첫 번째 인자로 전달된 콜백 함수는 태스크 큐로 이동 후 호출 스택이 모두 비워질 때까지 대기할 것이다.
5. `setTimeout(/* ... */)`이 호출 스택에서 제거된다.
6. `console.log(/* ... */)`이 `sayHello('Kim')` 위에 쌓인다.
7. `console.log(/* ... */)`이 호출 스택에서 제거된다.
8. `sayHello('Kim')`이 호출 스택에서 제거된다.
9. 전역 실행 컨텍스트가 호출 스택에서 제거된다.
10. 이벤트 루프를 돌며 호출 스택이 비워진 것이 확인되면, 태스크 큐 내에 존재하는 태스크를 호출 스택으로 이동시켜 순차적으로 처리한다.

## 비동기 프로그래밍 기법

이처럼 오랜 시간을 필요로 하는 작업에 비동기식 처리 모델을 적용하면, 동기식 처리 모델을 사용할 경우보다 성능과 응답성을 향상시킬 수 있다는 장점이 있다. 한편, 실제 코드의 실행 순서가 읽는 순서와 다르게 뒤죽박죽이 되어버리므로 가독성이 나빠진다는 문제가 생기기도 한다. 다음 예제를 살펴보자. 

```javascript
import $ from 'jquery'

const API_URL = 'https://api.github.com/repos/facebookincubator/create-react-app/issues?per_page=10'
let issues

$.get(API_URL, (result) => {
  issues = result
})

console.log('최신 이슈 10개 목록: ', issues) // '최신 이슈 10개 목록: undefined'
```

위 예제의 6행에서는 'jquery' 라이브러리를 사용하여 'create-react-app' 저장소의 최신 이슈 목록 10개를 받아오고 있다. 이후 응답을 받은 데이터를 미리 선언해놓았던 `issues` 변수에 할당하였고, 10행에서는 해당 값을 로깅하도록 했다. 그러나 예상했던 것과 달리, `issues`는 `undefined`를 로깅한다.

그 이유는 `$.get(/* ... */)`이 데이터 요청 작업을 비동기적으로 처리하기 때문이다. 즉, 서버에 데이터를 요청 후 응답을 받기까지 다음 작업의 수행을 중지하는 것이 아니라, 해당 요청에 대한 처리를 브라우저에 위임한 후 10행에서 로그를 출력하는 작업을 먼저 수행했기 때문에 위와 같은 결과를 출력했던 것이다. 응답받은 데이터를 `issues` 변수에 할당하는 작업은 그 이후에 이뤄진다.

> "만일 데이터를 응답받은 시점이 로그를 출력하고 있는 10행 코드의 실행 시점보다 빨랐다면, 출력 결과는 달라질 수도 있지 않았을까?" 하는 생각을 할 수도 있을 것이다. 그러나 절대 그런 일은 발생할 수 없다. 두 번째 인자로 전달한 콜백 함수는 데이터 응답이 완료된 후 태스크 큐로 이동하여 대기하고 있다가, 호출 스택이 모두 비워졌을 때 비로소 호출 스택으로 이동되어 실행되기 때문이다. 즉, 데이터를 응답받은 시점이 10행의 로그 출력 코드의 실행 시점보다 아무리 빨랐다 하더라도, 로그 출력이 이뤄지고 호출 스택이 완전히 비워진 후에야 비로소 값의 할당이 이루어진다.

그러나 이 문제는 다양한 비동기 프로그래밍 기법을 활용해 어렵지 않게 해결할 수 있다. 콜백 패턴부터 시작된 비동기 프로그래밍 기법들이 이 문제를 해결하기 위해 어떻게 발전해왔는지에 대해 지금부터 하나씩 살펴보자.

### 콜백 패턴(Callback)

콜백 함수는 보통 다른 함수의 인수로 넘겨질 수 있는 함수를 말한다. 위 예제에서 `$.get` 함수의 두 번째 인자로 전달한 함수가 바로 콜백 함수이다. 이 콜백 함수는 클라이언트가 요청에 대한 응답을 전달받는 시점에 호출된다. 따라서 이 함수 내부에서 `issues`를 로깅한다면 원하는 결과를 얻을 수 있을 것이다.

```javascript
import $ from 'jquery'

const API_URL = 'https://api.github.com'
let issues

$.get(`${API_URL}/repos/facebookincubator/create-react-app/issues?per_page=10`, (result) => {
  issues = result
  console.log('최신 이슈 10개 목록: ', issues)
})
```

### 콜백 패턴의 문제점

콜백 패턴은 자바스크립트 개발자들 사이에서 비동기 프로그래밍을 위해 널리 사용되는 패턴이었지만, 몇 가지 치명적인 문제점을 갖고 있었다.

#### 콜백 지옥(Callback Hell)

만일 여러 비동기 작업 간에 순서를 보장하기 위해 콜백 함수를 중첩해서 사용하게 될 경우, 가독성을 심각하게 떨어트린다는 문제가 있었다. 아래와 같은 상황을 가정해보자.

1. Github에 공개되어있는 저장소 중, 언어가 Javascript이고 별표를 가장 많이 받은 저장소를 불러온다.
2. 위 저장소에 가장 많이 기여한 기여자 5명의 정보를 불러온다.
3. 해당 기여자들이 최근에 Github에서 별표를 한 저장소를 각 기여자마다 10개씩 불러온다.
4. 불러온 저장소를 모두 모아, 개수를 센 후 저장소의 이름을 개수와 함께 출력한다.

```javascript
import $ from 'jquery'

const API_URL = 'https://api.github.com'
const starCount = {}

$.get(`${API_URL}/search/repositories?q=language:javascript&sort=stars&per_page=1`, result => {
  $.get(`${API_URL}/repos/${result.items[0].full_name}/contributors?per_page=5`, users => {
    repoArrs.push(repos)
    if (repoArrs.length === 5) {
      for (let repoArr of repoArrs) {
        for (let repo of repoArr) {
          if (repo.full_name in starCount) {
            starCount[repo.full_name]++
          } else {
            starCount[repo.full_name] = 1
          }
        }
      }
      console.log(starCount)
  })
})
```

비동기 작업 간에 순서를 보장하기 위해 콜백 함수를 중첩 사용함으로 인해 이른 바 콜백 지옥(Callback Hell)이 발생하였다. 이로 인해 코드의 가독성은 심각하게 나빠져버렸다.

#### 에러 처리의 한계

자바스크립트에서 에러는 호출자(Caller) 방향으로 전파된다. 호출자 방향을 타고 전파되다가 가장 가까이 위치한 `try ~ catch` 블록에서 해당 에러는 캐치된다.

그러나 아래 코드의 경우, `setTimeout(/* ... */)`의 콜백 함수에서 던져진 에러는 캐치되지 못한다.

```javascript
try {
  setTimeout(() => { throw 'Error!' }, 1000)
} catch (e) {
  console.log('에러를 캐치하지 못한다.')
  console.log(e)
}
```

이는 `setTimeout(/* ... */)`의 콜백 함수의 호출자(Caller)가 `setTiemout`이 아니기 때문에 발생하는 문제이다. `setTimeout(/* ... */)`의 콜백 함수는 호출 스택이 완전히 비어진 후에야 호출 스택으로 이동되어 실행된다. 결국, 콜백 함수에서 발생한 에러는 상위 `try ~ catch` 블록에서 캐치할 수 없으므로 프로세스가 종료되어버리는 문제가 발생한다.

## 프로미스(Promise)

앞서 살펴본 콜백 패턴의 문제점을 해결하기 위해 여러 라이브러리들이 등장했다. 그 중에서 개발자들에게 널리 선택받은 것이 바로 `Promise` 패턴이었다. 이 패턴이 표준화되어 ES6에 이르러 표준으로 도입되었다.

### 프로미스의 동작 방식

프로미스는 `Promise` 생성자 함수를 통해 인스턴스화할 수 있다. `Promise` 생성자 함수는 비동기 작업을 수행할 콜백 함수를 인자로 전달받는데, 이 콜백 함수는 `resolve`와 `reject` 함수를 인자로 전달받는다.

```javascript
// Promise 객체의 생성
const promise = new Promise((resolve, reject) => {
  // 비동기 작업을 수행한다.

  if (/* 비동기 작업 수행 성공 */) {
    resolve('result')
  }
  else { /* 비동기 작업 수행 실패 */
    reject('failure reason')
  }
})
```

`Promise`는 비동기 처리가 성공(fulfilled)하였는지 또는 실패(rejected)하였는지 등의 상태(state) 정보를 갖는다.

| 상태       | 의미                            | 구현
|-----------|--------------------------------|--------------
| pending   | 비동기 처리가 아직 수행되지 않은 상태   | resolve 또는 reject 함수가 아직 호출되지 않은 상태
| fulfilled | 비동기 처리가 수행된 상태 (성공)  | resolve 함수가 호출된 상태
| rejected  | 비동기 처리가 수행된 상태 (실패)  | reject 함수가 호출된 상태
| settled   | 비동기 처리가 수행된 상태 (성공 또는 실패) | resolve 또는 reject 함수가 호출된 상태

프로미스 인스턴스는 후속 처리 메소드를 통해 체이닝하는 방식으로 비동기 처리 결과를 전달받을 수 있다.

* `then`: `then` 메소드는 두 개의 콜백 함수를 인자로 전달 받는다. 첫 번째 콜백 함수는 성공(fulfilled, resolve 함수가 호출된 상태) 시 호출되고 두 번째 함수는 실패(rejected, reject 함수가 호출된 상태) 시 호출된다.
* `catch`: 예외(비동기 처리에서 발생한 에러와 then 메소드에서 발생한 에러)가 발생하면 호출된다.

중요한 사실은 `then` 메소드 역시 `Promise` 객체를 반환한다는 것이다. `then` 메소드의 인자로 전달된 콜백 함수에서 반환된 값이 `then` 메소드가 반환하는 `Promise` 객체의 결과값이 된다.

### 프로미스가 해결한 문제들

프로미스를 활용한 다음 예제 코드를 보자.

```javascript
function getGreetTo(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name) {
        resolve(`Hello, ${name}!`)
      } else {
        reject('`name` is undefined!')
      }
    }, 3000)
  })
}

getGreetTo('Kim')
  .then(greet => console.log(greet))
  .catch(reason => console.log(reason))

getGreetTo()
  .then(greet => console.log(greet))
  .catch(reason => console.log(reason))
```

먼저, 콜백 함수를 중첩 사용하던 방식이 아닌 `.` 표기법을 사용해 순차적 처리가 필요한 작업을 체이닝할 수 있으므로 콜백 지옥이라는 문제가 해결되었다. 이에 더해, `catch` 메소드를 통해 비동기 처리 과정에서 발생한 에러를 캐치할 수 있게 되었다.

### 프로미스 패턴 활용 예시

'axios' 라이브러리는 Promise 패턴을 잘 활용하고 있는 http 클라이언트 라이브러리이다. `axios.get`은 `Promise` 인스턴스를 반환하므로 `then` 메소드를 통해 체이닝하는 방식으로 후속 처리를 진행할 수 있다.

```javascript
import axios from 'axios'

const API_URL = 'https://api.github.com'

axios.get(`${API_URL}/repos/facebookincubator/create-react-app/issues?per_page=10`)
  .then(res => {
    console.log('최근 10개의 이슈:')
    res.data
      .map(issue => issue.title)
      .forEach(title => console.log(title))
    console.log('출력이 끝났습니다.')
  })
```

다음은 Github 데이터를 불러오는 에제를 콜백 패턴으로 작성했던 것을 프로미스 패턴으로 다시 작성한 것이다.

```javascript
import axios from 'axios'

const API_URL = 'https://api.github.com'
const starCount = {}

axios.get(`${API_URLconsole.log()}/search/repositories?q=language:javascript&sort=stars&per_page=1`)
  .then(res => axios.get(`${API_URL}/repos/${res.data.items[0].full_name}/contributors?per_page=5`))
  .then(res => {
    const ps = res.data.map(user => axios.get(`${API_URL}/users/${user.login}/starred?per_page=10`))
    return Promise.all(ps)
  })
  .then(ress => Promise.all(ress.map(r => r.data)))
  .then(repoArrs => {
    for (let repoArr of repoArrs) {
      for (let repo of repoArr) {
        if (repo.full_name in starCount) {
          starCount[repo.full_name]++
        } else {
          starCount[repo.full_name] = 1
        }
      }
    }
    console.log(starCount)
  })
```

### `Promise.all`

## 비동기 함수(Async Function)

`Promise`를 사용하는 비동기 프로그래밍 방식은 이전의 방식과 비교하면 여러 가지 장점을 갖지만, 여전히 콜백을 사용한다는 점 때문에 '불편하다', '가독성이 좋지 않다'는 비판을 받아왔다.

ES2017에서 도입된 비동기 함수(Async Function)를 사용하면, 동기식 코드와 거의 같은 구조를 갖는 비동기식 코드를 짤 수 있다.

함수 앞에 `async` 키워드를 붙이면, 이 함수는 비동기 함수가 된다.

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

비동기 함수는 항상 `Promise` 객체를 반환한다는 특징을 갖는다. 이 `Promise`의 결과값은 비동기 함수 내에서 무엇을 반환하느냐에 따라 결정되며, `then` 메소드와 똑같은 방식으로 동작한다.

```javascript
async function func1() {
  return 1
}

async function func2() {
  return Promise.resolve(2)
}

func1().then(console.log) // 1
func2().then(console.log) // 2
```

또 하나의 중요한 특징은 비동기 함수 내에서 `await` 키워드를 쓸 수 있다는 것이다. `await`는 `Promise`의 `then` 메소드와 유사한 기능을 하는데, `await` 키워드 뒤에 오는 `Promise`가 결과값을 가질 때까지 비동기 함수의 실행을 중단시킨다. 여기서의 '중단'은 비동기식이며, 브라우저는 `Promise`가 완료될 때까지 다른 작업을 처리할 수 있다.

`await`는 연산자이기도 하며, `await` 연산의 결과값은 뒤에 오는 `Promise` 객체의 결과값이 된다.

```javascript
// Promise 객체를 반환하는 함수.
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`${ms} 밀리초가 지났습니다.`)
      resolve()
    }, ms)
  })
}

async function main() {
  await delay(1000)
  await delay(2000)
  const result = await Promise.resolve('끝')
  console.log(result)
}

main()
```

비동기 함수의 가장 큰 장점은 동기식 코드를 짜듯이 비동기식 코드를 짤 수 있다는 것이다.

```javascript
import axios from 'axios'
const API_URL = 'https://api.github.com'

async function fetchStarCount() {
  const starCount = {}

  const topRepoRes = await axios.get(`${API_URL}/search/repositories?q=language:javascript&sort=stars&per_page=1`)

  const topMemberRes = await axios.get(`${API_URL}/repos/${topRepoRes.data.items[0].full_name}/contributors?per_page=5`)

  const ps = topMemberRes.data.map(user => axios.get(`${API_URL}/users/${user.login}/starred?per_page=10`))
  const starredReposRess = await Promise.all(ps)
  const starredReposData = starredReposRess.map(r => r.data)

  for (let repoArr of starredReposData) {
    for (let repo of repoArr) {
      if (repo.full_name in starCount) {
        starCount[repo.full_name]++
      } else {
        starCount[repo.full_name] = 1
      }
    }
  }
  return starCount
}

fetchStarCount().then(console.log)
```

`await` 키워드는 `for`, `if`와 같은 제어 구문 안에서도 쓰일 수 있기 때문에, `then` 메소드를 사용할 때보다 복잡한 비동기 데이터 흐름을 아주 쉽게 표현할 수 있다는 장점이 있다. 다만, 비동기 함수 역시 `Promise`를 사용하기 때문에, 비동기 함수를 잘 쓰기 위해서는 여전히 `Promise`에 대해 잘 알고 있어야 한다.

또한 비동기 함수의 에러 처리는 동기식 예외 처리 방식과 동일하게 처리할 수 있다.

```javascript
async function func() {
  try {
    const res = await fetch('https://nonexistent-domain.nowhere')
  } catch (e) {
    console.log(e.message)
  }
}

func() // 출력 결과: Failed to fetch
```

## References

* [프로미스 - Poiemaweb](https://poiemaweb.com/es6-promise)
* [이벤트 - Poiemaweb](https://poiemaweb.com/js-event)
* [How JavaScript works: an overview of the engine, the runtime, and the call stack - Alexander Zlatkov](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)
* [How JavaScript works: Event loop and the rise of Async programming + 5 ways to better coding with async/await - Alexander Zlatkov](https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5)
* [비동기 프로그래밍 - Javascript로 만나는 세상](https://helloworldjavascript.net/pages/285-async.html)
