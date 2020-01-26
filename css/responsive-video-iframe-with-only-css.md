# CSS만으로 반응형 비디오 iframe 구현하기

CSS의 viewport 단위(`vw`, `vh`)를 사용하여 스크린 너비에 상관없이 일정한 비율을 유지하는 iframe을 구현할 수 있다.

```css
iframe {
    width: 100vw;
    height: 56.25vw; /* 100/56.25 = 560/315 = 1.778 */
    background: red;
}
```

## 참고 {docsify-ignore}

* [Responsive video iframes (keeping aspect ratio) with only CSS? - Stackoverflow](https://stackoverflow.com/questions/25302836/responsive-video-iframes-keeping-aspect-ratio-with-only-css)
