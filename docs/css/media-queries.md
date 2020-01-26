# 중단점과 미디어 쿼리

## 중단점

반응형 프로젝트를 진행 전, 주요 사용자 층이 사용하는 디바이스 환경을 분석한 후, 최적화되고 유효한 중단점(Breakpoint)을 설계한다.

## 미디어쿼리

미디어쿼리는 각 디바이스 환경을 식별하는 조건 처리 구문으로 CSS3에서 정식 지원한다. 이를 사용하여 설계된 중단점에 맞는 최적화된 뷰 디자인을 구현할 수 있다.

```css
@media (type) and (expression) { ... }
```

### 미디어 쿼리 작성 예시

```css
/* width */
@media screen and (max-width: 600px) { /* ... */ }
@media screen and (min-width: 200px) and (max-width: 400px) { /* ... */ }

/* height */
@media screen and (max-height: 768px) { /* ... */ }
@media (min-height: 500px) and (max-height: 580px) { /* ... */ }

/* portrait */
@media screen and (orientation: portrait) { /* ... */ }

/* landscape */
@media screen and (orientation: landscape) { /* ... */ }

/* 300 DPI */
@media print and (min-resolution: 300dpi) { /* ... */ }

/* x2 Device Pixel Density */
@media screen and (min-resolution: 2dppx) { /* ... */ }

/* AND */
@media all and (color) { /* ... */ }

/* NOT + AND */
@media not screen and (color) { /* ... */ }

/* ONLY + AND */
@media only screen and (orientation: portrait) { /* ... */ }

/* COMMA */
@media all and (orientation: landscape),
       all and (min-width: 480px) { /* ... */ }
```

## 모바일 퍼스트(Mobile First)

현 시대 사용자 대부분이 모바일 환경에서 우선 접속한ㄷ가. 필요에 따라서는 데스크탑 환경이 필요할 수도 있다. 사용자를 고려한 설계 관점에서 사용자 대다수가 우선하는 모바일 환경 디자인이 우선시되어야 한다.

## 중단점을 설계할 때 참고할 수 있는 통계

### [글로벌 서비스](https://goo.gl/xQZwY6)

1. 360 x 640: 23.4%
2. 1366 x 768: 11.82%
3. 1920 x 1080: 7.69%

### [대한민국 서비스](https://goo.gl/dAQZG8)

1. 1920 x 1080: 22.90%
2. 360 x 640: 20.63%
3. 375 x 667: 7.54%

