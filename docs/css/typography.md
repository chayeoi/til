# 타이포그래피

## 폰트 스타일 속성

* `font-family`
* `font-size`
* `font-weight`
* `font-style`
* `font-variant`: `small-caps`, `all-small-caps`
* `color`
  * color keywords: red, gree, blue, pink, black
  * hex color code: #RRGGBB / 0 ~ 9, a ~ f 예) #1868a7
  * rgb, rgba: RED, GREEN, BLUE, ALPHA 예) rgba(127,255,0,0.3)
  * hsl, hsla: HUE, SATURATION, LIGHTNESS, ALPHA 예) hsla(360,60%,70%,1)

### 웹 안전 폰트

웹브라우저는 운영체제가 지원하는 기본 폰트(웹 안전 폰트)만 화면에 렌더링한다. (참고: cssfontstack.com) 즉, 사용된 폰트가 사용자 컴퓨터에 없으면 렌더링하지 않는다. 다음은 웹 안전 폰트 목록이다.

* Arial            [sans-serif]  고딕체
* Verdana          [sans-serif]  고딕체
* Courier New      [monospace]   코드체(공간이 동일)
* Georgia          [serif]       명조체
* Times New Roman  [serif]       명조체
* Trebuchet MS     [serif]       명조체

저작권 걱정 없는 폰트는 [구글 폰트](font.google.com)를 통해 확인할 수 있다.

## 텍스트 레이아웃 속성

텍스트 간격 및 레이아웃 기능에 영향을 주는 속성으로 행간, 자간, 어간, 정렬, 변형, 꾸밈, 그림자 등이 속한다.

* `line-height`
* `letter-spacing`: 글자 간의 간격(자간)을 설정한다.
* `word-spacing`: 단어 간의 간격(어간)을 설정한다.
* `text-align`
* `text-indent`
* `text-transform`: `lowercase`, `uppercase`
* `text-decoration`: `overline`, `underline`, `line-through`
* `text-shadow`: `x y blur spread color` 순으로 값을 설정한다. 또한 `,`로 구분하여 여러 개의 값을 지정할 수 있다.
* `white-space`: HTML의 `pre` 요소와 같이 공백 라인 또는 공백 문자를 그대로 보여주고 싶을 때 사용한다.
  * `normal`: `white-space` 속성의 기본값이다.
  * `pre`: HTML의 `pre` 요소와 같은 스타일을 적용한다.
  * `pre-line`: `pre` 요소의 스타일에 더해 들여쓰기를 제거한다.
  * `nowrap`: 콘텐츠를 한 줄로 길게 나열한다.
* `word-break`: 단어의 분리를 어떻게 할 것인지 결정한다.
  * `normal`
  * `break-all`
  * `keep-all`
* `word-wrap`: 박스의 가로 영역을 넘친 단어 내에서 임의의 분리 여부를 결정하여 줄바꿈에 관여한다.
  * `normal`
  * `break-word`


## 웹 폰트 다운로드

[google-webfonts-helper](https://google-webfonts-helper.herokuapp.com/fonts)

## 참고 {docsify-ignore}

* [WIT - word-break 속성과 word-wrap 속성 알아보기](http://wit.nts-corp.com/2017/07/25/4675)
* 
