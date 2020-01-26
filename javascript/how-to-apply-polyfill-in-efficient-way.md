# 폴리필(Polyfill) 적용 방식에 대한 고민

폴리필을 어떤 식으로 적용하는 게 효율적일지 몇 가지 방식을 고민해보았다.

## 방법 1: Dyanmic imports

Dynamic imports를 사용하여 타겟 브라우저에 특정 기능이 구현되어있지 않을 경우에만 폴리필을 불러오도록 할 수 있다.

```javascript
const polyfills = []
if (window.fetch) {
  polyfills.push(import(/* webpackChunkName: "polyfill-fetch" */, 'fetch'))
}

Promise.all(polyfills)
  .then(app)
  .catch((error) => {
    console.error('Failed fetching polyfills', error)
  })
```

그런데 Dynamic imports를 사용하기 위해선 타겟 브라우저에 `Promise`가 구현되어있어야 하는데, 당연하게도 폴리필을 적용하려는 브라우저에는 `Promise` 역시 구현되어있지 않을 확률이 높다. 그렇기 때문에 `Promise` 폴리필만큼은 어쩔 수 없이 정적인 방식으로 번들된 파일에 포함시켜야 하기 때문에 그리 깔끔하지 못한 방법이다.

### 방법 2: @babel/polyfill 이용하기

`@babel/polyfill`을 통해 오래된 브라우저에서 지원되지 않는 기능의 폴리필 코드를 번들 파일에 추가할 수 있다.

```javascript
// index.js (Your entry point)
import '@babel/polyfill'
```

그러나 위와 같은 형태로 사용할 경우, 굳이 필요하지도 않은 모든 폴리필 코드가 함께 번들링되기 때문에 최종 번들링된 파일의 코드가 불필요하게 커지는 문제가 발생한다. 하지만 `@babel/preset-env`의 `useBuiltIns` 옵션과 함께 사용하면 이 문제를 손쉽게 해결할 수 있다. `@babel/preset-env`는 내부적으로 `browserslist`, `compat-table`, 또는 `electron-to-chromium`와 같은 정보를 바탕으로 타겟 브라우저의 정보를 파악한 후 필요한 바벨 플러그인들을 추가한다.

`@babel/preset-env`의 `useBuiltIn` 옵션을 `entry`로 설정할 경우, 타겟 브라우저에 필요한 폴리필 코드를 선택적으로 추가한다. `usage`로 설정한 경우, 각 파일에서 쓰이는 코드를 파악한 후 사용되어지는 기능들에 대한 폴리필 코드만을 선택적으로 추가한다. `.babelrc` 파일에서 다음과 같은 형태로 설정할 수 있다.

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "usage"
      }
    ]
  ]
}
```

어찌되었든 간에 이 방식은 폴리필 코드를 최종 번들된 파일에 포함시키는 것이기 때문에, 사용자의 브라우저 환경에 따라 폴리필 코드를 필요할 경우에만 동적으로 불러오는 방식을 취하고픈 내 생각과는 맞지 않았다.

### 방법 3: polyfill.io 서비스 이용하기

[polyfill.io](https://polyfill.io/v3/) 서비스는 요청된 브라우저의 유저 에이전트 정보를 polyfill.io 서버에서 분석 후 해당 브라우저 환경에 필요한 폴리필 코드만 반환하는 방식으로 문제를 해결한다. 이렇게 폴리필을 동적으로 불러오도록 함으로써, 번들된 파일의 용량이 불필요하게 커지는 문제를 없앨 수 있다.

```javascript
<script crossorigin="anonymous" href="https://polyfill.io/v3/polyfill.min.js"></script>
```

polyfill.io에서는 서버로 요청이 들어오면 다음 순서로 작업을 처리한다고 한다. (참고: [자체 polyfill.io 서버 구축하여 프론트엔드 최적화하기 | 임형주](https://slides.com/odyss/deck-8#/5/5))

1. Resolve aliases
2. Filter for UA targeting(Filter the features object to remove features not suitable for the current UA)
3. Resolve dependencies
4. Filter for UA targeting
5. Filter for excludes
6. Topological sort(feature)
7. Output stream

아래 코드처럼 클라이언트 측에서 지원되는 기능을 미리 감지한 후 꼭 필요한 폴리필만 요청하도록 할 수도 있다.

```javascript
var features = []
('Promise' in window) || features.push('Promise')
('IntersectionObserver' in window) || 
features.push('IntersectionObserver')

if (features.length) {
  document.write(
    '<script src="https://cdn.polyfill.io/v2/polyfill.min.js?unknown=polyfill&features=' + features.join(',') + '&flags=gated,always"><\x2fscript>',
  )
}
```

단, CDN 서비스를 이용해서 폴리필 코드를 추가하기 때문에 만약 polyfill.io 서버에 문제가 생긴다면 스크립트를 불러오지 못하는 상황이 발생할 수도 있다.

## 방법 4: `script` 태그의 `nomodule` 속성을 활용하여 구형 브라우저를 위한 폴리필 적용하기

`script` 태그에 `type="module"`을 지정하면 해당 타입이 지정된 스크립트 내에서 ES Module 기능을 사용할 수 있다. 그런데 이 `module` 타입은 Chrome, Firefox, Safari 등의 최신 브라우저에서만 지원되고 IE와 같은 구형 브라우저에서는 인식할 수 없는 타입이기 때문에, 구형 브라우저가 `module` 타입의 스크립트를 만나면 리소스를 다운로드받지 않고 무시해버린다.

`script` 태그에 boolean 형식의 `nomodule` 속성을 지정할 수도 있는데, 모듈 스크립트를 지원하는 최신 브라우저는 `nomodule` 속성이 지정된 스크립트를 무시해버린다. 반면 모듈 스크립트를 지원하지 않는 구형 브라우저의 경우, `nomodule`에 관한 명세가 따로 구현되어있지 않기 때문에 해당 속성이 지정된 `script`라고 할 지라도 문제없이 리소스를 다운로드받는다.

이런 특징을 활용하면 최신 브라우저와 구형 브라우저가 각각 필요로 하는 코드를 분리할 수 있다. `type="module"`이 지정된 `script`는 최신 브라우저에서만 사용될 것이고, `nomodule`이 지정된 `script`는 구형 브라우저에서만 사용될 것이기 때문이다. 따라서 구형 브라우저 지원을 위한 폴리필 코드를 `nomodule` 속성이 명시된 `script` 태그로 연결하면, 구형 브라우저에서만 폴리필 코드를 다운로드받도록 만들 수 있다.

```javascript
<script src="polyfills.js" nomodule></script>
```

단, 이 방법은 `type="module"`을 지원하지 않는 브라우저에 한해 적용되기 때문에, 더 최신 기능을 위한 폴리필을 추가하고자 할 때 정확한 타겟 브라우저 설정이 어려울 수 있다.

## 참고 {docsify-ignore}

* [Polyfill을 사용하는 보다 쉬운 방법 | ingeeKim](http://hacks.mozilla.or.kr/2014/12/an-easier-way-of-using-polyfills/)
* [[B5] 자체 polyfill.io 서버 구축하여 프론트엔드 최적화하기 - 임형주 | FEConf Korea](https://www.youtube.com/watch?v=8GcVBTBI4Ew)
* [@babel/polyfill | Babel](https://babeljs.io/docs/en/babel-polyfill)
* [What’s the purpose of the HTML “nomodule” attribute for script elements if the default is text/javascript? | Stackoverflow](https://stackoverflow.com/questions/45943494/what-s-the-purpose-of-the-html-nomodule-attribute-for-script-elements-if-the-d)
