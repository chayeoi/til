# 배경 이미지 자동 변경 애니메이션 구현하기

```html
<header class="header">
  <div class="hero"></div>
  <div class="hero"></div>
  <div class="hero"></div>
</header>
```

```css
/**
  Backgorund auto changing animation
  이미지 갯수: n, 한 이미지 당 노출 시간: T, 트랜지션 시간: t이라고 하면,
  애니메이션 재생 시간(animation-duration) = nT,
  키프레임 구간 값: [0, ((T - t) / nT) * 100, (1 / n) * 100, ((nT - t) / nT) * 100, 100]
  (이때 키프레임 내 구간의 opacity 값은 순서대로 [1, 1, 0, 0, 1]),
  애니메이션 지연 시간은 순서대로 [T(n-1), T(n-2), T(n-3), ...]
*/

@keyframes fade {
  0% {
    opacity: 1;
  }
  29.16666% {
    opacity: 1;
  }
  33.33333% {
    opacity: 0;
  }
  95.83333% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.header {
  position: relative;
  height: 100vh;
}

.hero {
  position: absolute;
  z-index: -1000;
  width: 100%;
  height: 100%;
  animation: fade 24s infinite;
  background: #fff center / cover no-repeat;
}

.hero:nth-of-type(1) {
  background-image: url('./images/nature-1.jpg');
  animation-delay: 16s;
}

.hero:nth-of-type(2) {
  background-image: url('./images/nature-2.jpg');
  animation-delay: 8s;
}

.hero:nth-of-type(3) {
  background-image: url('./images/nature-3.jpg');
}
```

## 참고 {docsify-ignore}

* [Changing background images automatically by using css3 | stackoverflow](https://stackoverflow.com/questions/25789673/changing-background-images-automatically-by-using-css3/25789783)
