# CSS 멀티 컬럼 레이아웃

단락의 행 폭이 넓어지게 되면, 다음 행으로 시선을 이동시키기 위한 거리가 멀어지기 때문에 글을 읽는 독자는 쉽게 피로해질 수 밖에 없다.

다양한 화면 너비의 디바이스 환경을 고려해야 하는 웹 디자인에서는 이 문제를 어떻게 해결할 수 있을까?

먼저, 단락의 최대 폭을 고정시키는 방법을 생각해볼 수 있다. 다양한 환경 대응에 대한 고민을 줄일 수 있지만, 유연한 대응은 어렵다는 단점이 있다.

또 한 가지 방법은 **다단(multi-columns) 디자인**을 적용하는 것이다.

과거에는 다단 디자인을 구현하기 위해 `float` 속성을 사용했었다. 예를 들어, 2컬럼 레이아웃을 구현하기 위해서 모든 단락에 `float: left` 속성을 선언 후 컨테이너의 절반만큼을 차지하도록 `50%`만큼의 너비를 구현하는 식이다. 여기서 생기는 문제점 중 하나는 정확히 절반(`50%`)만큼을 차지하는 너비로 인해 단을 구분할 수 없다는 것이다. 단과 단을 구분하기 위해서는 적절한 `margin-right`를 설정하고 `width`를
일일이 조정해줘야 하는데, 이는 숙련된 개발자에게도 매우 번거로운 작업이 아닐 수 없었다. 또한 오른쪽 컬럼의 단락은 `margin-right`를 가지면 안되기 때문에 `:nth-of-type(even)`의 가상 클래스를 사용해야 하는 등의 작업이 추가적으로 필요했다.

이러한 문제를 해결하기 위해서 CSS3에서 **멀티 컬럼 레이아웃** 기술이 새롭게 소개되었다. 그러나 [IE의 경우 10 이상의 버전부터 지원](https://caniuse.com/#search=columns)되는 등, 호환성 문제가 존재하기 때문에 아직까지 자주 사용되지는 않고 있다. 그러나 꼭 필요한 기술인만큼, 점차 사용 빈도가 증가할 것으로 보인다.

## 속성

* `column-count`: 컬럼의 갯수를 설정한다.
* `column-width`: 컬럼의 너비를 설정한다.
* `columns`: `column-count`와 `column-width`를 한 번에 선언하는 속기 형식의 속성이다.
* `column-gap`: 컬럼 사이의 간격을 설정한다.
* `column-rule`: 컬럼 사이의 구분선을 설정하는 속기 형식의 속성이다.
* `column-rule-color`: 컬럼 사이의 구분선 색을 설정한다.
* `column-rule-style`: 컬럼 사이의 구분선 스타일을 설정한다.
* `column-rule-width`: 컬럼 사이의 구분선 두께를 설정한다.
* `column-span`: 컬럼 간에 셀을 병합한 것처럼 보이도록 설정한다.
* `column-fill`: 각 컬럼에 콘텐츠를 채워넣는 방식을 설정한다. `balance` 또는 `auto` 값을 설정할 수 있다.

```css
.example {
  columns: 12em;       /* column-width: 12em; column-count: auto */
  columns: auto 12em;  /* column-width: 12em; column-count: auto */
  columns: 2;          /* column-width: auto; column-count: 2 */
  columns: 2 auto;     /* column-width: auto; column-count: 2 */
  columns: auto;       /* column-width: auto; column-count: auto */
  columns: auto auto;  /* column-width: auto; column-count: auto */
  columns: 12 320px;   /* column-width: 320px; column-count: 12 */
}

.column-headline {
  column-span: all;
}
```

`column-width`에 적절한 값을 설정 시, 컨츠이너 폭에 따라 유연하게 변화하는 멀티 컬럼 레이아웃을 구현할 수 있다.

멀티 컬럼 레이아웃이 분명히 좋은 기술이지만, 문제가 아예 없는 것은 아니다. 대표적으로 이미지 삽입이 필요한 경우, 컬럼이 변경되는 접점에서 이미지가 잘려나간 것처럼 보여지는 문제가 있다. 이 부분에 대해서는 기술의 발전이 좀 더 필요한 상황이다.
