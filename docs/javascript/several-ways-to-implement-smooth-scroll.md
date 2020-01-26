# 부드러운 스크롤 애니메이션을 구현할 수 있는 여러가지 방법들

## Only CSS: `scroll-behavior` 속성 이용하기

CSS의 `scroll-behavior` 속성은 스크롤 컨테이너에 내비게이션 또는 CSSOM Scrolling API 등에 의해 스크롤이 발동되었을 때 스크롤의 동작 방식을 정의한다. `auto`와 `smooth` 키워드를 사용할 수 있으며 기본값은 `auto`이다.

* `auto`: 스크롤 컨테이너 영역 내에서 타겟 요소로 즉각적으로 스크롤한다.
* `smooth`: 스크롤 컨테이너 영역 내에서 부드러운 전환 효과와 함께 스크롤한다.

> 스크롤 컨테이너(Scrolling box)란, 어떤 요소의 콘텐츠가 자신의 경계 영역을 넘쳐남으로써 스크롤이 가능하게 된 요소를 뜻한다.

```html
<style>
  .scrolling-box {
    overflow: scroll;
    height: 750px;
    scroll-behavior: smooth;
  }

  .section {
    width: 500px;
    height: 500px;
    margin-bottom: 500px;
  }
</style>
<div class="scrolling-box">
  <nav>
    <a href="first">First</a>
    <a href="second">Second</a>
    <a href="third">Third</a>
  </nav>
  <section id="first">First.</section>
  <section id="first">Second.</section>
  <section id="first">Third.</section>
</div>
```

뷰포트 영역에 대해 부드러운 스크롤 효과를 적용하고 싶을 경우, 루트 요소(`<html>`)에 `scroll-behavior: smooth;`를 선언하면 된다. 만일 `<html>`이 아닌 `<body>` 요소에 이 속성을 선언할 경우에는 뷰포트 영역에 대한 부드러운 스크롤 효과가 적용되지 않는다. 

### 한계

간단한 CSS 코드 몇 줄만을 사용해서 부드러운 스크롤 애니메이션을 구현할 수 있다는 이점이 있지만 몇 가지 한계점도 존재한다.

1. 개발자가 스크롤 속도를 직접 제어할 수 없다.
2. 타이밍 함수 등의 애니메이션 방식을 직접 제어할 수 없다.
3. [IE와 Edge 브라우저에서 지원되지 않는다.](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior#Browser_compatibility)

다행히도 이 속성이 지원되지 않는 브라우저에서 사용한다고 한들, 부드러운 스크롤 애니메이션 효과가 적용되지 않는 것일 뿐 본연의 동작은 정상적으로 수행하기 때문에 별다른 문제가 되지 않는다.

스크롤 속도와 애니메이션 방식을 직접 제어하고 싶다면 Javascript를 이용해야 한다.

## Javascript: `Element.scrollIntoView` 이용하기

`Element.scrollIntoView()`는 요소가 브라우저 화면 상에 보일 수 있도록 스크롤을 발생시키는 메서드이다. Boolean 타입 또는 객체 타입의 인자를 전달할 수 있는데, 객체 타입의 인자를 전달할 경우 몇 가지 다양한 옵션을 설정할 수 있다. 메서드 호출 시 부드러운 애니메이션 효과를 발생시키려면 `behavior` 속성을 `smooth`로 지정한다.

```javascript
const element = document.querySelector('#target');

element.scrollIntoView({ behavior: 'smooth' });
```

> 그 외의 옵션과 Boolean 타입의 인자에 대한 자세한 설명은 [MDN 문서](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)를 참고하도록 한다.

`Element.scrollIntoView()` 메서드는 IE8 버전 이상을 포함한 대부분의 브라우저에서 지원하고 있지만, 객체 형식의 옵션 인자를 전달하는 방식은 글 작성 시점을 기준으로 IE와 iOS Safari에서 현재 지원하지 않는 것으로 보인다. 구형 브라우저에서 이 방식을 사용하고 싶을 경우 [이와 관련한 polyfill](https://github.com/iamdustan/smoothscroll)을 적용하면 된다.

## `requestAnimationFrame` API를 이용하여 구현하기



## 라이브러리 1: smooth-scroll

requestAnimationFrame을 사용하여 구현된 자바스크립트 라이브러리이다.

## 라이브러리 2: react-scroll

https://scotch.io/tutorials/implementing-smooth-scrolling-in-react

## 참고 {docsify-ignore}

* [scroll-behavior | Geoff Graham - CSS Tricks](https://css-tricks.com/almanac/properties/s/scroll-behavior/)
* [스크롤과 관련된 CSS 속성 3가지: 자바스크립트 없어도 가능한 스크롤 기능 | 김태곤](https://taegon.kim/archives/9807)
* [Element​.scroll​Into​View() | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
