# 블로킹 없이 CSS 로드하기

CSS를 불러올 때 다음과 같이 설정하면 스타일 시트를 비동기로 다운로드하여 가능한 빨리 콘텐츠를 가져 올 수 있다. 쉽게 말해 폰트 파일과 CSS를 다운로드 받는 동안 페이지가 멈추지 않도록 설정하여 속도를 증진시키는 기법이다.

```html
<link
  rel="stylesheet"
  href="fonts/webfonts.css"
  media="none"
  onload="if(media!='all')media='all'">
```

## 참고 {docsify-ignore}

* [Loading CSS without blocking render](https://keithclark.co.uk/articles/loading-css-without-blocking-render/)
