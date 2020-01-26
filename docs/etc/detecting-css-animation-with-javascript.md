# 자바스크립트를 이용하여 CSS 애니메이션의 진행 상태 감지하기

DOM 이벤트 중에는 CSS 애니메이션과 관련된 이벤트들도 존재한다.

* `animationstart`
* `animationend`
* `animationiteration`

위 CSS 애니메이션 관련 이벤트를 이용하면 특정 DOM 요소에서 일어나는 CSS 애니메이션의 진행 상태을 감지할 수 있다.

## `animationstart`

`animationstart`는 DOM 요소에서 CSS 애니메이션이 시작되는 시점에 발생하는 이벤트이다. 만약 `animation-delay` 속성을 통해 애니메이션이 지연된 경우라면, 이 이벤트는 지연 시간이 모두 지나고난 후에 발생한다.

### 예시

```javascript
const animated = document.querySelector('.animated')

animated.addEventListener('animationstart', () => {
  console.log('Animation started')
})
```

## `animationend`

이 이벤트는 CSS 애니메이션 실행이 완전히 종료되는 시점에 발생한다. 그러나 만약 어떤 애니메이션이 완전히 종료되기 전에 취소되었다면 이 이벤트는 발생하지 않는다.

### 예시

```javascript
const animated = document.querySelector('.animated')

animated.addEventListener('animationend', () => {
  console.log('Animation ended')
})
```

## `animationiteration`

이 이벤트는 CSS 애니메이션의 한 주기가 끝나고 다음 주기가 반복될 때 발생한다. `animationend` 이벤트와 동시에 발생하지 않으며, `animation-iteration-count`가 1인 경우에는 발생하지 않는다.

### 예시

```javascript
const animated = document.querySelector('.animated')

let iterationCount = 0

animated.addEventListener('animationiteration', () => {
  iterationCount++
  console.log(`Animation iteration count: ${iterationCount}`)
})
```

## 참고 {docsify-ignore}

* [HTMLElement: animationstart event | MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationstart_event)
* [HTMLElement: animationiteration event | MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationiteration_event)
* [HTMLElement: animationend event | MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationend_event)
