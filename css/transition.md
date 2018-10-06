# 트랜지션

## 속성

* `transition-property`: 트랜지션 속성
* `transition-duration`: 트랜지션 시간
* `transition-timing-function`: 트랜지션 타이밍 함수
* `transition-delay`: 트랜지션 지연시간
* `transition`: 트랜지션 속기형

## `timing-function`

CSS에서 기본적으로 지원하고 있는 Timing function은 다음과 같다.

* `linear`
* `ease`
* `ease-in`
* `ease-out`
* `ease-in-out`

이 이외의 Timing function을 사용하기 위해서는 `cubic-bezier` 함수를 사용하여야 한다. 모든 Timing function에 대한 속성 선언을 직접 외워서 사용하는 일은 어려우므로, [Ceaser](https://matthewlein.com/tools/ceaser)나 [easing.net](https://easings.net/ko)과 같은 사이트에서 도움을 받는 게 좋다. 그뿐만 아니라 크롬 개발자 도구에서도 `cubic-bezier`가 선언된 지점을 클릭하면 원하는 형태로 물리 곡선을 수정해볼 수도 있다.
