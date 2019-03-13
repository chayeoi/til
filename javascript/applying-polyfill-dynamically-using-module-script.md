# `script` 태그의 `nomodule` 속성을 활용하여 구형 브라우저를 위한 폴리필 적용하기

`script` 태그에 `type="module"`을 지정하면 해당 타입이 지정된 스크립트 내에서 ES Module 기능을 사용할 수 있다. 그런데 이 `module` 타입은 Chrome, Firefox, Safari 등의 최신 브라우저에서만 지원되고 IE와 같은 구형 브라우저에서는 인식할 수 없는 타입이기 때문에, 구형 브라우저가 `module` 타입의 스크립트를 만나면 리소스를 다운로드받지 않고 무시해버린다.

`script` 태그에 boolean 형식의 `nomodule` 속성을 지정할 수도 있는데, 모듈 스크립트를 지원하는 최신 브라우저는 `nomodule` 속성이 지정된 스크립트를 무시해버린다. 반면 모듈 스크립트를 지원하지 않는 구형 브라우저의 경우, `nomodule`에 관한 명세가 따로 구현되어있지 않기 때문에 해당 속성이 지정된 `script`라고 할 지라도 문제없이 리소스를 다운로드받는다.

이런 특징을 활용하면 최신 브라우저와 구형 브라우저가 각각 필요로 하는 코드를 분리할 수 있다. `type="module"`이 지정된 `script`는 최신 브라우저에서만 사용될 것이고, `nomodule`이 지정된 `script`는 구형 브라우저에서만 사용될 것이기 때문이다. 따라서 구형 브라우저 지원을 위한 폴리필 코드를 `nomodule` 속성이 명시된 `script` 태그로 연결하면, 구형 브라우저에서만 폴리필 코드를 다운로드받도록 만들 수 있다.

```javascript
<script src="polyfills.js" nomodule></script>
```

## 참고

* [What’s the purpose of the HTML “nomodule” attribute for script elements if the default is text/javascript? | Stackoverflow](https://stackoverflow.com/questions/45943494/what-s-the-purpose-of-the-html-nomodule-attribute-for-script-elements-if-the-d)
