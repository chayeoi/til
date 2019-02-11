# Dynamic import

## 동기(Motivation)

모듈을 불러오기 위해 기존에 구문 형태로 사용해오던 방식은 완전히 정적(static)이다. 문자열 리터럴을 사용해 불러올 모듈을 지정한 다음, 런타임 실행 전에 "연결" 과정을 통해 모든 모듈을 미리 불러오고 바인딩한다. 이러한 정적 import 방식을 통해 거의 90%에 가까운 사용 사례를 지원할 수 있다.

그러나 애플리케이션의 일부분을 동적으로(dynamically) 불러오는 게 더 바람직한 상황도 존재한다. 사용자 언어와 같이 런타임에서만 알 수 있는 요인, 성능 상의 이유로 모든 코드를 한 번에 불러오지 않고 실제로 코드가 사용될 때 불러오도록 하는 경우 등이 해당한다. 안타깝게도 기존의 정적인 import 방식으로는 이러한 사용 사례를 대처할 수 없었고, 이 문제를 해결하기 위해 모듈을 동적으로 불러올 수 있는 방법인 동적 import(Dynamic import)가 제안되었다.

## 동적 import(Dynamic import) 사용하기

마치 함수인 것처럼 동작하는 `import(specifier)`를 사용하여 모듈을 동적으로 불러올 수 있다. 이 함수는 요청된 모듈의 네임스페이스 객체를 위한 `Promise`를 반환하는데, 모듈 그 자체뿐만 아니라 해당 모듈이 갖는 모든 종속성을 불러오고 인스턴스화시킨 후에 완료된다.

모듈 로딩이 완료되면, 요청된 모듈의 네임 스페이스 객체가 `Promise`의 결과값이 된다. 따라서 해당 모듈에서 export할 때 사용한 변수명을 사용하면 원하는 값에 접근할 수 있다.

```javascript
import('./myModule.js')
  .then(({ export1, export2 }) => {
    /* Do something */
  })
```

default export의 경우, 네임 스페이스 객체의 `default` 속성명을 통해 접근할 수 있다. 단, `default`는 자바스크립트에서 예약어이기 때문에 직접 변수명으로 사용할 수 없으며 점 표기법을 사용해서 접근해야 한다.

```javascript
import('./myModule.js')
  .then(myModule => {
    console.log(myModule.default)
  })
```

또한 정적 import 구문에서는 오로지 문자열 리터럴만 모듈 지정자로 사용할 수 있었던 것과 달리, 동적 `import()` 함수에서는 `./language-packs/${navigator.language}.js`와 같은 것도 모듈 지정자로 사용할 수 있다.

## 예제

다음은 간단한 싱글 페이지 애플리케이션에서 `import()`를 사용하여 지연 로딩(Lazy loading)을 어떻게 구현할 수 있는지를 보여준다.

```html
<!DOCTYPE html>
<meta charset="utf-8">
<title>My library</title>
<nav>
  <a href="books.html" data-entry-module="books">Books</a>
  <a href="movies.html" data-entry-module="movies">Movies</a>
  <a href="video-games.html" data-entry-module="video-games">Video Games</a>
</nav>
<main>This is a placeholder for the content that will be loaded on-demand.</main>
<script>
  const main = document.querySelector('main')
  const links = document.querySelectorAll('nav > a')
  for (const link of links) {
    link.addEventListener('click', async (event) => {
      event.preventDefault()
      try {
        const module = await import(`/${link.dataset.entryModule}.mjs`)
        // The module exports a function named `loadPageInto`.
        module.loadPageInto(main)
      } catch (error) {
        main.textContent = error.message
      }
    })
  }
</script>
```

## 사용 사례

### 1. 요구가 들어온 시점에 로딩하기

대부분의 경우에 앱이 처음 로딩되는 시점에 모든 코드가 필요한 것은 아니다. `import()`를 사용하면 모든 모듈을 한 번에 불러오도록 하지 않고, 요구가 생긴 시점에 특정 모듈을 불러오도록 할 수 있다.

```javascript
button.addEventListener('click', event => {
  import('./dialogBox.js')
    .then(dialogBox => dialogBox.open())
    .catch(error => {
        /* Error handling */
    })
})
```

### 2. 조건부 로딩하기

조건의 참, 거짓 여부에 따라 모듈을 불러오고 싶을 수도 있다. 예를 들어, 레거시 플랫폼일 경우에만 폴리필을 로딩하거나, 운영용 환경일 경우에만 에러 로깅 서비스를 사용하고 싶은 경우가 해당한다.

```javascript
if (isLegacyPlatform()) {
  import(moduleSpecifier)
    .then(module => { /* Do something */ })
}
```

### 3. 계산된 모듈 지정자

국제화 같은 경우, 모듈 지정자로 동적으로 지정할 수 있다면 사용자 언어 정보에 따라 필요한 번역 데이터만 불러올 수 있으므로 도움이 된다.

```javascript
import(`messages_${getLocale()}.js`)
  .then(module => { /* Do something */ })
```

## 참고

* [Dynamic import() - Web Fundamentals](https://developers.google.com/web/updates/2017/11/dynamic-import)
* [ES proposal: import() – dynamically importing ES modules - 2ality](http://2ality.com/2017/01/import-operator.html)
