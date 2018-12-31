# 보더 이미지

`border-image` 속성을 사용하면 보더 영역에 이미지를 적용할 수 있다.

## 문법

`border-image: source [slice / width / outset repeat]` 형식으로 선언한다. `source`는 필수로 넣어줘야 하며 나머지는 선택이다. 선택 속성에 값을 채우지 않으면 기본 속성 값이 사용된다.

### 개별 속성

일반적으로 개별 속성을 분리해서 선언하기보다는, `border-image`의 속기법 형식으로 선언하는 방식이 사용된다.

* `border-image-source`: `url` 함수를 사용하여 이미지 경로를 설정한다.
* `border-image-slice`: 이미지의 상(⬆︎), 우(➡︎), 하(⬇︎), 좌(⬅︎) 가장자리 오프셋을 설정한다. 보더 이미지를 9개 영역으로 나눌(slice) 수 있다. 해당 속성에 `px` 단위를 사용할 경우 단위를 명시하지 않는다는 사실에 주의해야 한다.
* `border-image-width`: 요소의 상 / 우 / 하 / 좌 테두리 이미지 너비(width)를 설정한다. 이때 실제 테두리의 너비는 영향을 받지 않고 이미지는 맨 위에 배치된다. 또한 `border-image` 너비가 `border-width` 보다 클 경우 채우기 영역 또는 내용 영역을 포함하게 되며, 단위 없는 값은 요소의 테두리 너비의 배수로 해석된다. 테두리 이미지의 너비는 기본적으로 테두리 너비와 같다.
* `border-image-outset`: 테두리와 콘텐츠 사이 안쪽 여백 크기를 조정한다. 해당 속성에 주어진 값만큼 테두리 이미지의 패딩(안쪽) 영역을 설정한다. 단위가 없는 값을 사용할 경우, 요소의 테두리 너비(width)에 곱한 값을 오프셋으로 설정한다.
* `border-image-repeat`: `stretch`(기본 값), `repeat`, `round`, `space` 중 하나를 설정할 수 있다.

### 예시

```css
.example {
  /* 슬라이스 10px 설정, 가장자리 섹션 stretch 사용 */
  border-image: url('image-url') 10;
  /* 각 테두리 방향에서 5% 조각 이미지 사용, 가장자리 반복 설정 */
  border-image: url('image-url') 5% round;
  /* 슬라이스 오프셋 ⇒ 순서: 위 오른쪽 아래 왼쪽 */
  border-image: url('image-url') 10 20 30 40;
  /* 테두리를 2배 큰 border-width 값으로 크기 조정 */
  border-image: url('image-url') 10 / 2 repeat;
  /* 테두리를 2배 큰 border-width 값으로 크기 조정하고 여백 테두리는 1배 border-width 값으로 설정 */
  border-image: url('image-url') 5 / 2 / 1;
  /* 4개의 가장자리마다 각기 다른 설정 */
  border-image: url('image-url') 5 8 6 10 / 1 2 1 3 / 0 1 .5 .5;
}
```
