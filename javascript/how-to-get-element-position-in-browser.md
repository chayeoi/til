# 요소의 상대 위치 구하기

## `HTMLElement.offsetParent`

`HTMLElement.offsetParent`는 계층 관계에서 위치가 정해진(`static` 포지션이 아닌) 가장 가까운 요소에 대한 참조를 반환하는 읽기 전용 속성이다. 요소의 위치가 정해지지 않았을 경우, 가장 근접한 `td`, `th`, `table` 또는 `body` 요소에 대한 참조를 반환한다. 만일 `display` 속성이 `none`이면 `null`을 반환한다.

## `HTMLElement.offsetTop`, `HTMLElement.offsetLeft`

`offsetParent` 노드로부터 현재 요소까지의 상대적 거리를 반환하는 읽기 전용 속성이다.

## `Element.scrollTop`, `Element.scrollLeft`

요소의 콘텐츠가 수직 또는 수평 방향으로 스크롤된 픽셀 값을 반환 또는 설정할 수 있는 속성이다. 좀 더 정확히 말하자면, 스크롤된 영역을 포함한 요소의 최상단(또는 좌측) 모서리로부터 실제 보여지는 영역의 상단(또는 좌측) 모서리까지의 거리를 나타낸다.

## `HTMLElement.clientTop`, `HTMLElement.clientLeft`

`clientTop`의 값은 `border-top-width`, `clientLeft`의 값은 `border-left-width`의 값과 항상 같다.

## `getBoundingClientRect`

이 메소드는 요소의 크기 및 뷰포트에 대한 상대적 위치 값을 반환한다.

## References

* [HTMLElement.offsetParent - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent)
* [HTMLElement.offsetTop - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop)
* [HTMLElement.offsetHeight - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight)
* [Element.scrollTop - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop)
* [Element.scrollLeft - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft)
* [Element.clientTop - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientTop)
* [Element.clientLeft - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientLeft)
* [Element.getBoundingClientRect() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)

