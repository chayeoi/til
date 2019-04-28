# CSS 값

## 지정값(Specified values)

CSS 속성의 지정값은 다음 세 가지 방법 중 하나로 설정된다.

1. 문서의 스타일시트가 속성값을 지정했다면 그러면 그 값이 사용된다. 예를 들어, `color` 속성이 `green` 으로 설정된 경우 대응하는 요소(element)의 텍스트 색은 녹색이 된다.
2. 문서의 스타일시트가 값을 지정하지 않은 경우 부모 요소로부터 상속된다(가능하다면). 예를 들어, `<div>` 내부에 단락(`<p>`)이 있고 `<div>`의 CSS `font` 속성값이 `Arial`, `<p>`가 정의된 `font` 속성이 없다면 Arial 폰트가 상속된다.
3. 위 중 어느 것도 이용할 수 없는 경우, CSS 스펙에 지정된 대로 요소의 초기값이 적용된다.

## 계산값(Computed values)

CSS 속성의 계산값은 상속을 거치는 동안 부모로부터 자식으로 전달되는 값이다. 계산값은 지정값(Specified values)으로부터 다음 방법에 따라 계산된다.

1. `inherit`, `initial`, `unset`, 그리고 `revert`와 같은 특수값을 처리
2. 속성 정의 테이블의 "Computed value"에 기술된 값에 이르기 위해 요구되는 계산을 수행

계산값에 이르기 위해 요구되는 계산은 전형적으로 상대값을 절대값으로 변환하는 과정을 포함한다. 예를 들어서, 어떤 요소가 `font-size: 16px`과 `padding-top: 2em` 지정값을 갖는다고 하면, `padding-top`의 계산값은 `font-size`의 2배인 `32px`이 된다.

그러나 레이아웃을 결정하기 위해 필요할 지도 모르는 무언가에 대해 상대적인 퍼센트를 갖는 속성(`width`, `margin-right`, `text-indent`, `top`)들의 경우, 퍼센트 지정값은 퍼센트 계산값이 된다. 게다가, `line-height` 속성에 지정된 단위 없는 수는 지정된 대로 계산값이 된다. 계산값에 남아 있는 이러한 상대값은 사용값이 결정될 때 절대값이 된다.

## 사용값(Used values)

CSS 속성의 사용값은 계산값에 모든 계산을 수행한 후의 결과 값이다.

사용자 에이전트가 계산을 끝내면 모든 CSS 속성은 사용값을 갖는다. 크기(`width`, `line-height` 등)는 픽셀 단위로 정해진다. 단축 속성(`background` 등)의 값은 그 구성요소(`background-color`, `background-size` 등)가 가질 값과 일치한다.

### 계산값과의 차이

CSS 2.0은 속성의 계산에서 마지막 단계로 계산값만 정의했다. 그 뒤에, CSS 2.1은 요소가 계산값이 퍼센트인 부모의 너비/높이를 명시해서 상속할 수 있도록 사용값의 분명한 정의를 도입했다. 레이아웃에 의존하지 않는 CSS 속성(가령, `display`, `font-size`, `line-height`)의 경우, 계산값 및 사용값은 같다. 다음은 레이아웃에 의존하는 CSS 2.1 속성으로, 그들은 서로 다른 계산값 및 사용값을 갖는다.

1. `background-position`
2. `bottom`, `left`, `right`, `top`
3. `height`, `width`
4. `margin-bottom`, `margin-left`, `margin-right`, `margin-top`
5. `min-height`, `min-width`
6. `padding-bottom`, `padding-left`, `padding-right`, `padding-top`
7. `text-indent`

## 결정값(Resolved values)

`getComputedStyle()`에서 반환되는 값들을 결정값(Resolved values)이라고 한다.

속성 대부분은 결정값이 계산값이지만, 일부 기존 속성(`width`, `height` 등)은 사용값이다.

이 값들은 일반적으로 CSS 2.1 계산값(Computed values)과 같지만, 일부 오래된 속성(`width`, `height` 또는 `padding`)에 대해서는 사용값(Used values)이다. 원래, CSS 2.0에서 계산값(Computed values)은 케스케이딩과 상속을 거친 후에 "사용준비완료"된 최종값을 의미했다. 하지만, CSS 2.1에서는 계산값(Computed values)은 pre-layout으로, 사용값(Used values)은 post-layout으로 재정의했다. `getComputedStyle`은 CSS 2.0 속성들에 대해서는 지금은 사용값이라고 불리는 옛 의미의 계산값을 반환한다. pre-layout과 post-layout값의 차이를 나타내는 예로써 요소의 `width` 또는 `height`(layout이라고도 함)를 나타내는 백분율(퍼센트)이 있는데, 이 값들은 사용값의 경우에만 픽셀(에 상당하는 대체물)로 대체된다.

## 참고

* [지정값 | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/specified_value)
* [Computed value | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/computed_value)
* [계산값 | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/computed_value)
* [사용값 | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/used_value)
* [결정값 | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/resolved_value)
* [Window​.get​Computed​Style() | MDN](https://developer.mozilla.org/ko/docs/Web/API/Window/getComputedStyle)
