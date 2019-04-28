# 요소에 적용된 CSS 스타일을 읽어들이는 방법

`Window.getComputedStyle()` 메서드를 통해 인자로 전달받은 요소의 모든 CSS 속성을 담은 객체를 반환받을 수 있다. 이 속성값들은 해당 요소에 대하여 활성 스타일시트와 속성값에 대한 기본 연산이 모두 반영된 결과값이다. 개별 CSS 속성 값은 객체를 통해 제공되는 API 또는 CSS 속성 이름을 사용해서 간단히 색인화해서 액세스할 수 있다.

## `element.style` 속성과의 차이점

메소드의 호출에서 반환되는 객체의 자료형은 요소의 `style` 속성에서 반환되는 객체와 동일한 `CSSStyleDeclaration`형이다. 그러나 두 객체는 다른 목적을 가지고 있다. `getComputedStyle`에서 반환된 객체는 읽기 전용이며 요소의 (`<style>` 또는 외부 스타일시트로 설정되는 것도 포함해서) 스타일을 검사하는 데 사용할 수 있다. `element.style` 객체는 특정한 요소에 스타일을 설정하는 데 사용해야 한다.

## 의사요소 사용하기

`getComputedStyle`을 통해 의사요소(`::after`, `::before`, `::marker`, `::line-marker`)에 선언된 스타일 정보를 가져올 수 있다.

```html
<style>
 h3::after {
   content: ' rocks!';
 }
</style>

<h3>generated content</h3> 

<script>
  const h3 = document.querySelector('h3')
  const result = getComputedStyle(h3, ':after').content

  console.log('the generated content is: ', result) // returns ' rocks!'
</script>
```

## 브라우저 호환성

Chrome, Firefox 등을 포함한 최신 브라우저들은 물론 IE9 이상 버전에서도 사용 가능하다. 

## 참고

* [Window​.get​Computed​Style() | MDN](https://developer.mozilla.org/ko/docs/Web/API/Window/getComputedStyle)
