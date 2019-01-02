# 클릭한 지점의 상대적 좌표 계산하기

`pageX`, `pageY`, `screenX`, `screenY`, `clientX`, `clientY`, `offsetX` 그리고 `offsetY`는 모두 특정 기준점(Reference point)으로부터 클릭 이벤트 발생 지점(Event point, 좌측 상단)까지의 물리적 CSS 픽셀 거리를 반환한다.

## `pageX`, `pageY`

렌더된 전체 콘텐츠 영역 내(스크롤 영역 포함)에서 좌측 상단 꼭지점(Reference point)을 기준으로 하는 상대적 좌표를 나타낸다.

## `screenX`, `screenY`

모니터 화면 영역의 좌측 상단 꼭지점(Reference point)을 기준으로 하는 상대 좌표를 나타낸다. 브라우저 창의 뷰포트 영역이 기준이 아닌 모니터 화면 전체 영역이 기준이라는 사실에 주의해야 한다.

## `clientX`, `clientY`

브라우저 창 뷰포트 영역의 좌측 상단 꼭지점(Reference point)을 기준으로 하는 상대 좌표를 나타낸다. 사용자가 스크롤바를 내렸더라도 이 값에 영향을 주지는 못한다.

## `offsetX`, `offsetY`

이벤트가 발생한 대상 요소의 좌측 상단 꼭지점(Reference point)을 기준으로 하는 상대 좌표를 나타낸다.

## References

* [What is the difference between screenX/Y, clientX/Y and pageX/Y? - Stackoverflow](https://stackoverflow.com/questions/6073505/what-is-the-difference-between-screenx-y-clientx-y-and-pagex-y)
* [MouseEvent.offsetX - MDN](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetX)
* [MouseEvent.offsetY - MDN](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetY)
