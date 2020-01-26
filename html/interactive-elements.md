# 인터랙티브 요소

인터랙티브 요소란, 사용자와 상호작용이 가능한 엘리먼트를 뜻한다.

## `details`

디스클로저 위젯(disclosure widget, 참고: https://goo.gl/uznvFY)으로 정보를 감추거나, 펼쳐서 보여준다. 모든 정보를 일시에 공개하지 않고 사용자의 요구에 맞춰 정보를 공개할 수 있다. 아코디언(Accordion) 컴포넌트와 비슷하게 작동한다. 이 아코디언 컴포넌트는 브라우저에서 기본 제공되지 않기 때문에, 자바스크립트를 통해서 제어했어야 했다. 그러나 HTML5 표준에서는 `details` 요소를 제공해줌으로써 브라우저가 자체적으로 내장된 위젯 컴포넌트를 제공할 수 있게 되었다. 참고로 각주(footnote)에는 적합하지 않다.

### 속성

* `open`: 페이지 로딩 시, 위젯을 펼쳐 표시하도록 설정한다.

```html
<details open>
  <!-- ... -->
</details>
```

### `summary`

`details` 요소의 레이블/캡션(제목), 요약 등을 표시한다. `fieldset` 요소의 제목을 `legend`로 표현하는 것과 비슷하다.

```html
<section class="progress window">
  <h1>"Really Achieving Your Childhood Dreams" 파일 복사</h1>
  <details>
  <summary>복사중... <progress max="375505392" value="97543282"></progress> 25%</summary>
  <dl>
    <dt>초당 전송 속도:</dt>
    <dd>452KB/s</dd>
    <dt>로컬 파일이름:</dt>
    <dd>/home/rpausch/raycd.m4v</dd>
    <dt>원격 파일이름:</dt>
    <dd>/var/www/lectures/raycd.m4v</dd>
    <dt>재생시간:</dt>
    <dd>01:16:27</dd>
    <dt>컬러 프로파일:</dt>
    <dd>SD (6-1-6)</dd>
    <dt>영상 크기(너비×높이):</dt>
    <dd>640×480</dd>
  </dl>
  </details>
</section>
```

## `dialog`

다이얼로그(Dialog, 참고: https://goo.gl/pQ7gSX)는 사용자의 결정 또는 정보 입력을 요구하는 컴포넌트를 의미한다. '모달 윈도우' 또는 '대화상자'로도 불린다.

### 속성

* `open`: 페이지 로딩 시, 위젯을 표시하도록 설정한다.
