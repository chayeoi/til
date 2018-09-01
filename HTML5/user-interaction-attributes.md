# 사용자와 상호작용하는 속성들

## `hidden` 속성

모든 HTML 요소들은 `hidden` 속성을 가질 수 있으며, 요소가 아직 페이지의 현재 상태와 직접적으로 관련이 없거나 페이지의 다른 부분에서 내용을 재사용하도록 선언하는 데 사용된다. 브라우저는 `hidden` 속성이 설정된 요소를 화면에 렌더링하지 않는다.

> 브라우저의 기본 스타일 중 `hidden` 속성은 다음과 같이 스타일이 정의되어 있다.
> ```css
> [hidden], template {
>   display: none;
> }
> ```
> 즉, `hidden` 속성이 설정되었을 때 콘텐츠가 화면에 감춰지는 원리는 브라우저의 기본 스타일에 있다.

## `tabindex` 속성

요소를 키보드로 탐색할 수 있도록 설정하거나, 제외 또는 순서대로 탐색할 수 있도록 설정할 수 있다.
"탭(Tab) 이동"이란 용어는 순차적 포커스 탐색을 사용하여 포커스 가능(Focusable) 요소 사이를
이동하는 것을 의미한다.

### [기본적으로 포커스 가능한 요소들](https://allyjs.io/data-tables/focusable.html)

* 폼 컨트롤 요소들: input, button, textarea, select 등
* `href` 속성을 가진 요소들: `a`, `area`
* `controls` 속성을 가진 요소들 : `video`, `audio`

### 사용 예시

#### 양수

탭 포커스 순서를 설정한다(논리적 포커스 흐름에 방해가 되기에 사용을 권장하지 않음).

```html
<button
  type="button"
  class="button is-play"
  tabindex="2">재생</button>
```

#### `0`

`div` 요소는 포커스를 가지지 않는 요소이지만, 포커스가 적용되게 할 수 있다. 컴포넌트 제작 시, 비 포커스 요소에 포커스를 적용해야 할 경우 유용하게 사용된다.

```html
<div tabindex="0"></div>
```

#### `-1`

일반적인 포커스 순서에서 제외시킬 수 있다(JavaScript 프로그래밍으로 포커스 처리 가능). 컴포넌트의 일부 요소를 일시적으로 포커스 순서에서 제외한 후,목표에 따라 포커스를 다시 활성화 처리할 수 있다.

```html
<ol class="TOC">
  <li><a href="#pinch">위기</a></li>
  <li><a href="#overcome" tabindex="-1">극복</a></li>
</ol>
```

## `accesskey` 속성

모든 HTML 요소는 `accesskey` 속성을 가질 수있다. 속성 값은 키보드 단축키로 설정된다. 하지만 `accesskey` 속성의 단축키는 브라우저와 운영체제 플랫폼에 의존하고 있어 운영체제마다
사용자 경험이 달라지게 되는 문제를 발생시킨다. 쉽게 말해 Windows 사용자와 Mac OSX 사용자가 사용하는
단축키는 달라지는 것이다.

### 브라우저 및 운영체제 플랫폼

#### Windows

* Chrome: Alt + 단축키
* IE: Alt + 단축키
* Safari: Alt + 단축키
* Opera: Alt + 단축키
* Firefox: Alt + Shift + 단축키

#### Mac OSX

* Chrome  : Control + Alt + 단축키
* Safari  : Control + Alt + 단축키
* Opera   : Control + Alt + 단축키
* Firefox : Control + 단축키

#### Linux

* Chrome  : Alt + 단축키
* Opera   : Alt + 단축키
* Firefox : Alt + Shift + 단축키

### 사용 예시

```html
<button
  type="button"
  class="button is-collect"
  accesskey="C"
  onclick="collect()">
  수집
</button>
```

## `contenteditable` 속성

`contenteditable` 속성이 설정된 요소는 사용자가 직접 편집하는 일이 가능해진다. 값이 `true` 또는 빈 문자열("")일 경우 편집 가능하고, 값이 `false` 일 경우 편집이 허용되지 않는다. 또한 `contenteditable` 속성이 부여된 요소는 포커스가 가능해진다.

```html
<p contenteditable>
  <!-- ... -->
</p>
```

## `draggable` 속성

모든 HTML 요소는 `draggable` 속성을 가질 수 있다. 값이 `true`로 설정된 요소는 드래그(Drag)할 수 있게 된다. 값이 `false` 또는 빈 문자열("")일 경우 드래그가 불가능하다.

```html
<p draggable="true">
  <!-- ... -->
</p>
```