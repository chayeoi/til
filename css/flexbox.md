# Flex 레이아웃

## 정렬

`space-evenly`는 `space-around`와 달리, 양 끝 공간을 flex item 간의 간격과 동일하게 설정한다.

## flex-grow

flex item의 너비에 대한 확대 인자(flex grow factor)를 지정한다. 기본값은 0이고 음수값은 무효하다. `flex-grow: 0;`이 아니고 flex item의 너비 합게가 flex container의 너비보다 작을 시, flex item들은 지정된 `width` 값을 무시한 채 flex container의 너비에 맞게 확대된다.

## flex-shrink

flex item의 너비에 대한  축소 인자(flex shrink factor)를 지정한다. 기본값은 1이고 음수값은 무효하다. 0을 지정하면 축소가 해제되어 원래의 너비를 유지한다. `flex-shrink: 0;`이 아니고 flex item의 너비 합게가 flex container의 너비보다 클 시, flex item들은 지정된 `width` 값을 무시한 채 flex container의 너비에 맞게 축소된다.

## flex-basis

flex item의 너비 기본값을 px, % 등의 단위로 지정한다. 기본값은 auto이다.

## References

* [CSS3 Flexbox Layout - Poiemaweb](https://poiemaweb.com/css3-flexbox)
