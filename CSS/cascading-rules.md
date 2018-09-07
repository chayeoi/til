# 케스케이드 규칙

## cascading의 의미

"The process of combining several style sheets and resolving conflicts between them."

Håkon Wium Lie (CSS 공동 창시자)는 CSS에 관한 PHD 논문에서 "여러 스타일 시트를 결합하고 이들 사이의 충돌을 해결하는 프로세스"라는 용어로 'Cascade'를 말하고 있다.

CSS(Cascading Style Sheets)라는 용어는 'Cascade' 개념이 중요하다는 것을 약어에서 강조하고 있다.

### 중요성(Importance)

`!important` 선언은 다른 모든 선언보다 우선권을 가진다.

#### NOTE
`!important`가 적용된 속성을 덮어 쓰려면, 다시 `!important`를 사용해야하기에 최대한 사용하지 않도록 노력해야 한다.

### 특성(Specificity)

선택자의 우선권에 대한 척도로, 각 척도를 1, 10, 100, 1000 단위로 생각하면 이해하기 쉽다.

```plain
요소 선택자 < 클래스 선택자 < ID 선택자 < 인라인 스타일
0,0,0,1    0,0,1,0      0,1,0,0   1,0,0,0
```

#### NOTE

`*`, `>`, `+`, `~` 등 콤비네이터(Combinators), `:not()` 가상 클래스는 특성에 영향을 주지 않는다.

#### 예시

`*`                         - 0000
`a`                         - 0001
`.link`                     - 0010
`a[href]`                   - 0011
`li:nth-child(2) a:hover`   - 0022
`.nav:nth-child(2) a:hover` - 0031
`#outer a`                  - 0101
`#outer #inner a`           - 0201
`style="color: tan"`        - 1000
                            - !important

### 소스 순서

중요성, 특성이 설정되지 않았거나 동일한 경우 나중에 나온 소스의 스타일이 우선권을 갖는다.

#### 예시

```css
p { color: #930212; }
p { color: #d5727e; } /* 우선권을 갖는다. */
```

## 레퍼런스

* [MDN - Cascade and inheritance](https://goo.gl/BAhjiN)