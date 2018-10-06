# 폼 스타일링

폼 컨트롤 디자인은 매우 까다롭다. 기술적인 이유로 CSS로 폼 컨트롤을 완벽하게 스타일링할 수 없다.

## 폼 스타일링이 어려운 이유

웹의 초창기인 1995년에 폼 컨트롤이 HTML2 사양에 추가되었지만, 당시 기술력으로는 폼 컨트롤 위젯을 스타일링 할 수 없었다. 그러한 이유로 브라우저가 아닌, 운영체제(Windows, Mac OSX 등)마다의 네이티브 컴포넌트에 힘입어 화면에 렌더링 되었다.

시간이 흘러 CSS가 만들어졌고, 기술적으로 폼 컨트롤 스타일링 기술이 요구되기 시작했다. 하지만 초창기 CSS는 폼 컨트롤을 꾸미기에는 많이 부족했다.

사용자는 각 운영체제가 가진 컨트롤의 시각적인 모양에 익숙하므로, 브라우저 제조사는 폼 컨트롤을 스타일리쉬 하게 만드는데 소흘했고, 오늘날에도 모든 폼 컨트롤을 스타일링하는 것은 쉽지 않다.

하지만 브라우저 제조사는 전과 달리 폼 컨트롤에 대한 CSS 지원을 향상 시키려 노력하고 있다. 오래된 브라우저 호환 문제가 걸림돌이 되기는 하지만, CSS를 사용하여 HTML 폼을 스타일링하는 범위가 강화되고 있고, 앞으로 더욱 발전하게 될 것이다.

## 폼 스타일링 등급

### The Good

CSS를 사용해 완벽하게 스타일링 할 수 있는 요소들

* `<form>`
* `<fieldset>`
* `<label>`
* `<output>`

### The Bad

CSS를 사용해 완벽하게 스타일링 할 수 없는 요소들

* `<legend>`
* `placeholder` 속성

### The Ugly

CSS를 사용한 스타일링이 전혀 적용되지 않는 요소들

* `<select>`
* `<optoion>`
* `<optgroup>`
* `<datalist>`
* `<progress>`
* `<meter>`

## 폼 컨트롤 가상 클래스(Pseudo Classes)

폼 컨트롤 요소의 상태에 따라 스타일을 동적으로 처리할 수 있다. 단, 여기 소개한 가상 클래스 선택자는 브라우저 호환에 문제가 있으니 주의해서 사용해야 한다.

### `:checked` (IE 9+)

`input:radio`, `input:checkbox`, `option` 컨트롤 체크 상태 표시 

### `:enabled` (IE 9+)

활성화된 컨트롤 상태 표시 

### `:disabled` (IE 9+)

비활성화된 컨트롤 상태 표시 

### `:indeterminate` (IE 9+)

불확실한(indeterminate) 상태의 컨트롤 표시 

### `:required` (IE 10+)

필수(required) `input`, `textarea`, `select` 컨트롤의 상태 표시 

### `:optional` (IE 10+)

선택(optional) `input`, `textarea`, `select` 컨트롤의 상태 표시 

### `:valid` (IE 10+)

유효(valid)한 `input`, `form` 컨트롤의 상태 표시 

### `:invalid` (IE 10+)

유효하지 않은(invalid) `input`, `form` 컨트롤의 상태 표시 

### `:default` (IE ×)

`button`, `input:checkbox`, `input:radio`, `option` 컨트롤 기본 상태 표시 

### `:in-range` (IE ×)

`min`, `max` 값을 가지는 `input` 컨트롤의 허용 범위(in range) 상태 표시 

### `:out-of-range` (IE ×)

`min`, `max` 값을 가지는 `input` 컨트롤의 비허용 범위(out of range) 상태 표시 

### `:read-only` (IE ×)

읽기만 가능한 `input`, `textarea`의 상태 표시 

### `:read-write` (IE ×)

읽기 쓰기 가능한 `input`, `textarea`의 상태 표시 

## 기타

### 인풋 요소의 폰트 속성

보통 `input` 요소는 `body` 요소의 폰트 속성을 따르지 않는다. 그렇기 때문에 명시적으로 `font-family: inherit`을 지정해줘야 한다.

### `user-select` 속성

`user-select: none`을 지정하게 되면 해당 요소를 사용자가 선택하는 행동을 막을 수 있다. 

`label`을 클릭하면 연결된 `input`으로 포커싱이 이동하게 되는데, 더블 클릭 시 해당 요소의 텍스트를 블럭 지정하게 된다는 문제가 있다. 이때 `user-select: none`을 사용하여 이러한 문제를 방지할 수 있다.

### 체크박스 디자인 커스터마이징

네이티브 `input` 요소를 사용하면 확대했을 때 레이아웃이 깨져보일 수 있다는 문제가 발생한다. 따라서 네이티브 `input` 요소는 `.a11y-hidden`을 사용하여 숨기고, 연결된 `label`의 가상 요소에 이미지를 삽입하는 방법을 사용할 수 있다. 체크 상태에 따라 이미지를 변경하려면 :checked` 가상 클래스를 사용한다.

```css
.modal-form #keep_signed_in + label::before {
  content: '';
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 5px;
  background: url("../images/icons/icon-no-check.svg") no-repeat;
  background-size: cover;
  vertical-align: -2.5px;
}

.modal-form #keep_signed_in:checked + label::before {
  background-image: url("../images/icons/icon-check.svg");
}
```

## 레퍼런스

* [How to build custom form widgets - MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/How_to_build_custom_form_widgets)
* [Advanced styling for HTML forms - MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Advanced_styling_for_HTML_forms)
