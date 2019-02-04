# Styles are not autoprefixed in 'style' attribute

Styled components와 같은 CSS-in-JS 라이브러리를 사용할 경우 autoprefixed 기능이 자동 지원된다. 그러나 JSX 내에서 인라인 스타일 방식을 사용하여 선언한 스타일 속성은 autoprefixed되지 않으므로, 오래된 브라우저를 지원하기 위해서는 속성 선언 시에 직접 접두사를 붙여주어야 한다. 이때 각 속성 이름의 첫 글자는 대문자로 시작되어야 한다는 점을 주의하자. 단, vendor prefix 중 'ms'는 유일하게 소문자로 시작되어야 한다.

```jsx
const divStyle = {
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all', // 'ms' is the only lowercase vendor prefix
}

function ComponentWithTransition() {
  return <div style={divStyle}>This should work cross-browser</div>
}
```

## 참고 문서

* [DOM Elements - React docs](https://reactjs.org/docs/dom-elements.html#style)
