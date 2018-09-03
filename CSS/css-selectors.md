# CSS 선택자

## 가상 클래스

### `:active`

클릭한 상태일 때 적용할 스타일을 지정한다.

### `:focus`

키보드 접근성과 관련이 있는 가상 선택자이다. 포커싱되었을 때 아웃라인에 대한 디자인이 브라우저별로 다른데, 이 부분을 커스터마이징함으로써 공통적으로 적용할 수 있다.

```css
a:focus {
  outline-offset: 3px;
  outline: 3px solid #333;
}
```

### `:nth-child(n)`

* `nth-child(odd)`: 홀수 번째 자식들을 선택한다.
* `nth-child(even)`: 짝수 번째 자식들을 선택한다.

### `:lang()`

`lang` 속성이 사용되었을 때 사용된 언어에 따라서 다른 스타일을 지정해줄 수 있다.

```css
:lang(ko-KR) {
  font-family: "Spoqa Han Sans";
}

:lang(en) {
  font-family: "Times New Roman";
}
```

## 가상 요소

버전 2까지는 가상 요소를 `:` 1개로 표현했지만 3부터는 가상 클래스와의 혼동을 막기 위해 2개로 표현한다. 그러나 브라우저의 하위 호환을 위한 목적으로 1개로 표현하든 2개로 표현하든 모두 정상 작동한다.

### `::first-letter`

첫 글자에 적용할 스타일을 지정한다.

### `::first-line`

첫 줄에 적용할 스타일을 지정한다.

