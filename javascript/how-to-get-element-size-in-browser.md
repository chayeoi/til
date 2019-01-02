# 브라우저에서 DOM 엘리먼트의 크기 구하기

## `HTMLElement.offsetWidth`, `HTMLElement.offsetHeight`

border, padding, margin 영역을 포함한 엘리먼트의 레이아웃 크기를 반환하는 읽기 전용(read-only) 속성이다. 만일 스크롤바가 렌더되었을 경우, 스크롤바 영역 역시 `offSet*`의 계산 범위에 포함된다.

요소가 `display: none` 처리 등으로 인해 숨김 처리되었을 경우, `0`이 반환된다.

또한 위 두 속성은 실제 값을 소수 첫째 자리에서 반올림하여 정수화시킨 값을 반환하기 때문에, 정확한 값이 필요할 경우에는 위 두 속성 대신 `Element.getBoundingClientRect()`를 이용하여야 한다. 단, 이 함수는 요소가 화면에 실제로 렌더링된 크기를 반환한다는 사실에 주의할 필요가 있다. 예를 들어 해당 요소에 CSS 속성이 `width: 100px; transform: scale(0.5);`로 설정되어있을 때, `offsetWidth`는 100을 반환하지만 `getBoundingClientRect().width`는 50을 반환하게 된다.

## `HTMLElement.clientWidth`, `HTMLElement.clientHeight`

실제로 컨텐츠가 화면에 보여지는 영역의 레이아웃 크기를 반환하는 읽기 전용(read-only) 속성이다. padding 영역을 포함하지만 border, margin 및 렌더된 스크롤바의 영역은 계산 범위에 포함되지 않는다.

## `HTMLElement.scrollWidth`, `HTMLElement.scrollHeight`

컨텐츠가 실제 보여지는 영역을 넘쳐남(overflow)으로 인해 보이지 않게 되었더라도, 보이지 않는 부분을 포함한 전체 컨텐츠 영역의 레이아웃 크기를 반환하는 읽기 전용(read-only) 속성이다. `HTMLElement.clientWidth` 및 `HTMLElement.clientHeight` 속성과 마찬가지로, 계산 범위에 padding 영역은 포함하지만 border, margin 및 렌더된 스크롤바의 영역은 포함시키지 않는다.

## 사용자가 스크롤을 끝까지 내렸는지 확인하기

가령, 어떤 앱에서는 사용자가 스크롤을 끝까지 내려 모든 내용을 읽었을 경우에만 다음 단계 진행이 가능하도록 해야하는 경우가 있다. 이런 경우라면 아래와 같이 비교 연산을 수행하면 된다. 영역의 제일 아랫 부분까지 스크롤되었을 경우에만 연산 결과는 `true`를 반환한다.

```javascript
element.scrollHeight - element.scrollTop === element.clientHeight
```

## References

* [HTMLElement.offsetWidth - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth)
* [HTMLElement.offsetHeight - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight)
* [HTMLElement.cleientWidth - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth)
* [HTMLElement.cleientHeight - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight)
* [HTMLElement.scrollWidth - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollWidth)
* [HTMLElement.scrollHeight - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight)
* [Determining the dimensions of elements - MDN](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
