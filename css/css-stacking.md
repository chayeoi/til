# CSS Stacking

## z-index 속성을 사용하지 않았을 경우의 쌓임 (Stacking without the z-index property)

어떤 요소에도 `z-index` 속성이 명시되지 않았을 경우, 요소는 다음 순서에 따라 아래에서 위로 쌓인다.

1. 루트 요소의 배경(background)과 테두리(borders)가 제일 먼저 쌓임
2. `position` 속성이 지정되지 않은 후손 요소들이 HTML에 등장한 순서대로 쌓임
3. `position` 속성이 지정된 후손 요소들이 HTMl에 등장한 순서대로 쌓임

여기서 주의해야 할 부분은 `flex` 컨테이너 내에서 어떤 요소에 `order` 속성을 사용하여 HTML에 등장한 순서대로 렌더링되는 원래의 흐름을 바꾸게 되더라도, 그것이 쌓임 컨텍스트에 미치는 영향은 기존과 유사하다는 사실이다. 즉, HTML 상에서 마지막에 등장한 요소를 `order` 속성을 사용하여 제일 윗 부분으로 옮긴다고 해서 더 아래 계층에 쌓이지는 않는다.

[예제 링크](https://codepen.io/pen/?&editable=true)

## float된 요소의 쌓임 (Stacking with floated blocks)

`float` 처리된 요소의 경우, 쌓이는 순서가 약간 달라진다. 기본적으로 `float` 처리된 블록은 `position` 속성이 지정되지 않은 요소와 지정된 요소 사이에 위치한다.

1. 루트 요소의 배경(background)과 테두리(borders)가 제일 먼저 쌓임
2. `position` 속성이 지정되지 않은 후손 요소들이 HTML에 등장한 순서대로 쌓임
3. `float` 처리된 블록이 그 위에 쌓임
4. `position` 속성이 지정된 후손 요소들이 HTMl에 등장한 순서대로 쌓임

조금 더 정확히 말해서, `position` 속성이 지정되지 않은 블록의 배경과 테두리는 `float` 처리된 요소에 영향을 받지 않지만 그 안의 내용은 영향을 받는다. 이것은 `float`의 표준 행동에 따라 발생하는 일이고, 이에 따라 다음과 같이 추가 규칙을 나타낼 수도 있다.

1. 루트 요소의 배경(background)과 테두리(borders)가 제일 먼저 쌓임
2. `position` 속성이 지정되지 않은 후손 요소들이 HTML에 등장한 순서대로 쌓임
3. `float` 처리된 블록이 그 위에 쌓임
4. `position` 속성이 지정되지 않은 후손 인라인 요소
5. `position` 속성이 지정된 후손 요소들이 HTMl에 등장한 순서대로 쌓임

[예제 링크](https://codepen.io/pen/?&editable=true)

> 위 예제에서 `position` 속성이 지정되지 않았던 `div#4` 요소에 `opacity` 속성을 설정할 경우 조금 이해할 수 없는 일이 벌어질 것이다. 제일 아랫층에 놓여있던 `div#4`의 배경와 테두리가 `float` 처리된 요소와 `position` 속성이 지정된 요소의 윗 부분으로 올라오는 것인데, 이는 "`opacity` 속성이 설정될 경우 새로운 쌓임 컨텍스트가 생성된다."는 표준 명세에 의한 것이다.

## z-index 속성을 사용하여 쌓임 순서를 사용자 정의하기 (Using z-index)

`position` 속성이 지정된 요소에 `z-index` 속성을 설정함으로써 요소가 쌓이는 순서를 변경할 수 있다.

[예제 링크](https://codepen.io/pen/?&editable=true)

## 쌓임 컨텍스트(Stacking context)

앞서 이야기한 것처럼 특정 요소가 쌓이는 순서는 `z-index` 값에 의해 영향을 받는다. 이처럼 이런 일들은 요소가 **쌓임 컨텍스트**를 형성하도록 만드는 특별한 속성을 갖게 될 때 발생한다.

쌓임 컨텍스트는 다음 시나리오 중 하나에 속하는 어떤 요소에 의해서든, 문서 어디에서든 형성될 수 있다.

- 문서의 루트 요소인 `<html>`에 의해서
- `position` 속성이 `absolute` 또는 `relative`로 지정되었고 `z-index` 속성 값이 `auto` 이외의 값으로 설정된 요소에 의해서
- `position` 속성이 `fixed` 또는 `sticky`로 지정된 요소에 의해서
- flex 컨테이너의 자식인 동시에 `z-index` 속성 값이 `auto` 이외의 값으로 설정된 요소에 의해서
- grid 컨테이너의 자식인 동시에 `z-index` 속성 값이 `auto` 이외의 값으로 설정된 요소에 의해서
- `opacity` 속성 값이 `1`보다 작게 설정된 요소에 의해서
- `mix-blend-mode` 속성 값이 `normal` 이외의 값으로 설정된 요소에 의해서
- 다음 속성들 중 하나가 `none` 이외의 값으로 설정된 요소에 의해서
  - `transform`
  - `filter`
  - `perspective`
  - `clip-path`
  - `mask` / `mask-image` / `mask-border`
- `isolation` 속성 값이 `isolate`로 설정된 요소에 의해서
- `-webkit-overflow-scrolling` 속성 값이 `touch`로 설정된 요소에 의해서
- 초기값이 아닌 값에  쌓임 컨텍스트를 생성할 것을 명시한 `will-change` 값을 갖는 요소에 의해서
- `contain` 속성 값이 `layout`, `paint` 또는 `strict`, `content` 등의 합성 값으로 설정된 요소에 의해서

각 쌓임 컨텍스트 내에서 자식 요소들은 이전에 설명한 내용들과 같은 규칙에 의해서 쌓이게 된다. 중요한 것은, 자식 쌓임 컨텍스트의 `z-index` 값은 오직 그 부모의 안에서만 의미를 갖는다는 점이다. 각 쌓임 컨텍스트는 그것의 부모 쌓임 컨텍스트 영역 내에서 개별적인 단위로써 다뤄진다.

요약해보자면,

- 쌓임 컨텍스트는 다른 쌓임 컨텍스트 안에 포함될 수 있으며, 그들은 함께 쌓임 컨텍스트의 계층 관계를 형성할 수 있다.
- 각각의 쌓임 컨텍스트는 형제 요소와는 완전히 독립적으로 존재한다. 오직 후손 요소만이 쌓임 과정에서 고려될 뿐이다.
- 각각의 쌓임 컨텍스트는 자신 스스로를 포함한다. 요소의 콘텐츠가 먼저 쌓이고 난 후에, 전체 요소는 부모 쌓임 컨텍스트의 순서에 따라 쌓이게 된다.

> 오직 몇몇 특정 요소들만이 쌓임 컨텍스트를 형성하기 때문에, 쌓임 컨텍스트 계층은 HTML 요소 계층의 부분집합이다. 개별적인 쌓임 컨텍스트를 생성하지 않는 요소는 부모 쌓임 컨텍스트에 포함된다.

> `transform` 속성에 `scale(1)`, `translated3d(0, 0, 0,)`과 같이 외관상 변화가 없는 동형 변환(Identity transform)을 설정하더라도 새로운 쌓임 컨텍스트가 형성됨에 주의하여야 한다. 즉, `none` 이 아닌 값으로 설정되기만 하면 새로운 자식 쌓임 컨텍스트가 형성된다.

[예제 링크](https://codepen.io/pen/?&editable=true)

## 참고

* [Stacking without the z-index property | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index)
* [Stacking with floated blocks | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float)
* [Using z-index | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index)
* [The stacking context | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)
* [CSS stacking contexts: What they are and how they work | Tiffany B. Brown](https://tiffanybbrown.com/2015/09/css-stacking-contexts-wtf/index.html#fn:1)
