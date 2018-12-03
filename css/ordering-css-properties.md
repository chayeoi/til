# CSS 프로퍼티 선언 순서

CSS 프로퍼티 나열 방식에 대한 여러 방법론(Randomly, Grouped by type, By line length, lphabeitcal...)이 존재하지만, 다수에 의해 보편적으로 선호되는 방식은 **타입에 의한 분류법(Grouped by type)**이다.

```css
.selector {
  /* Positioning */
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;

  /* Display & Box Model */
  display: inline-block;
  overflow: hidden;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 10px solid #333;
  margin: 10px;

  /* Color */
  background: #000;
  color: #fff
  
  /* Text */
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.4;
  text-align: right;

  /* Other */
  cursor: pointer;
}
```

CSS 속성 선언을 그룹 단위로 조직화시키고 개인 또는 팀 내부의 표준으로 채택하는 일은 중요하다. 일관셩 있지 못한 코드는 얼마 지나지 않아 질척해보이기 시작할 것이고, 사소한 포맷을 수정하기 위해 더 많은 시간을 할애하게 만들 것이기 때문이다. 그러나 무엇보다도, 각 룰셋에서 타입별로 그룹화된 속성들을 항상 일관된 순서로 위치시킴으로써 이전보다 CSS 코드를 덜 살펴보고도 더 빠르게 이해할 수 있게 만들 것이다.

## Ordering rules

1. Positioning
2. Layout
3. Display
4. Visibility
5. Box model
6. Color
7. Text
8. Animation
9. Others
10. Pseudo elements

### Positioning

1. `position`
2. `z-index`
3. `top`
4. `bottom`
5. `left`
6. `right`
7. `trasnform`

### Layout

1. `float`
2. `clear`

### Display

1. `display`
2. `flex-direction`
3. `flex-wrap`
4. `justify-content`
5. `align-content`
6. `align-items`
7. `order`
8. `flex-grow`
9. `flex-shrink`
10. `flex-basis`
11. `align-self`

### Visibility

1. `visibility`
2. `overflow`
3. `clip`

### Box model

이 범주에 속하는 속성들은 밖에서 안으로 향하는 순서(From outside in)로 나열한다. 원래대로라면 `border` 속성도 Box model 범주에 포함시켜야하겠지만, **`border` 영역은 두께만 단독으로 선언하지 않고 색상(Color)을 함께 선언하는 경우가 대부분이므로 Color 범주로 포함**시킨다.

1. `box-sizing`
2. `width`
3. `min-width`
4. `max-width`
5. `height`
6. `min-height`
7. `max-height`
8. `margin`
9. `padding`

### Color

2. `color`
3. `border`
4. `border-radius`
1. `background`
5. `box-shadow`
6. `opacity`

### Text

1. `font`
2. `font-family`
3. `font-size`
4. `font-weight`
5. `font-style`
6. `font-variant`
7. `font-size-adjust`
8. `font-stretch`
9. `font-effect`
10. `font-emphasize`
11. `font-emphasize-position`
12. `font-emphasize-style`
13. `font-smooth`
14. `line-height`
15. `letter-spacing`
16. `white-space`
17. `word-break`
18. `text-overflow`

### Animation

1. `transition`
2. `animation`

### Others

1. `cursor`
2. `outline`
3. `outline-width`
4. `outline-style`
5. `outline-color`
6. `outline-offset`

### Pseudo elements

1. `:hover`
2. `:focus`
3. `:active`
4. `:first-child`
5. `:last-child`
6. `::before`
7. `::after`

## Example

```css
.selector {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  width: 100%;
  max-width: 1280px;
  margin: 40px;
  padding: 20px;

  color: #00c896;
  border: 1px solid #00c896;

  font-family: Lato sans-serif;
  font-size: 18px;
  font-weight: 500;
}
```

## References

* [Poll Results: How do you order your CSS properties?](https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/)
* [idiomatic-css](https://github.com/necolas/idiomatic-css)
* [“Outside In” — Ordering CSS Properties by Importance](https://webdesign.tutsplus.com/articles/outside-in-ordering-css-properties-by-importance--cms-21685)
