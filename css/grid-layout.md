# Grid 레이아웃

## Grid 용어

### Grid

그리드 컨테이너(Container)는 행(Rows)과 열(Columns)을 가지며, 그리드 아이템(Items)을 배치할 수 있다.

### Grid Line

그리드의 행/열을 그리는 선을 말하며, 각 선은 라인 넘버를 갖는다. 그리드 아이템을 배치하는 기준으로 사용된다.

### Grid Track

그리드 트랙은 그리드 라인 사이의 행 또는 열 공간을 말한다.

### Grid Cell

그리드 셀은 4개의 그리드 라인이 묶여 그려지는 가장 작은 단위(유닛)이다.

### Grid Area

그리드 에어리어는 그리드 유닛이 묶인 영역으로 고유한 식별자를 가지며, 식별자를 통해 요소를 배치할 수 있다.

### Grid Gutters

그리드 거터는 행 또는 열 사이 간격(Gap)을 말한다.

## Grid vs Flexbox

Grid와 Flexbox는 모던 레이아웃 모듈의 대표 주자로 다양한 레이아웃을 구현할 수 있다. 하지만 각각 특성이 있어 전문으로 하는 분야가 달라 상황에 따라 적합한 방법을 사용하면 된다. 

Grid 레이아웃은 박스 및 콘텐츠의 크기와 위치를 제어 할 수 있는 강력한 기능을 가진 새로운 레이아웃 모델이다. X 또는 Y 중 하나의 축을 통해 요소를 배치하는 Flexbox와 달리, Grid는 2차원 축을 모두 사용해 요소를 배치할 수 있어 보다 강력하다.

Grid 레이아웃은 요소를 그리드에 자유롭게 배치 할 수 있기 때문에 HTML 마크업 순서와 상관 없이 시각적으로 레이아웃 구조를 변형하는데 제약이 없다. 뿐만 아니라 미디어 쿼리와 그리드를 함께 사용하면 다양한 디바이스에 최적화된 인터페이스를 사용자에게 제공할 수 있다.

Grid는 2차원 방향으로 배치 또는 정렬이 가능하고, 레이아웃에 대한 하향식(Top-Down) 접근법을 사용합니다. 요소를 명시적으로 겹치거나, 강력한 스패닝(Span) 기능을 제공한다.

Flexbox는 축(Axis) 내의 공간 분배에 중점을 두고 레이아웃에 대한 간단한 상향식 접근법을 사용한다. 컨텐츠 크기 기반의 줄 바꿈 시스템을 사용하여 보조 축을 제어하고 기본 마크업 계층을 사용하여 보다 복잡한 레이아웃을 작성한다. 

## Grid 속성

### Grid 컨테이너

그리드 컨테이너는 display 속성을 사용해 설정할 수 있다. 설정 값에 따라 블록(Block) 그리드와 인라인(Inline) 그리드로 설정된다. 그리드 컨테이너 요소를 블록 또는 인라인 요소처럼 처리한다.

```css
.grid-container {
  display: grid; /* grid 또는 inline-grid 설정 가능 */
}
```

그리드 컨테이너는 그리드 시스템 영역을 구축하며, 내부에 포함된 자식 요소는 그리드 아이템이 된다. 또한 `overflow` 속성은 그리드 컨테이너에 적용 가능하지만 `float`, `clear`, `vertical-align` 속성은 그리드 아이템에 영향을 주지 않는다. 뿐만 아니라 `::first-letter`, `::first-line` 모두 적용되지 않는다.

### Grid 아이템

그리드 컨테이너 내부에 포함한 자식 요소는 그리드 아이템으로 설정된다. (자식 요소가 아니면 그리드 아이템이 아니다.) 그리드 아이템에 설정된 `float` 속성은 적용되지 않으며, 그리드 아이템 사이에는 공백이 사라진다. 또한 요소가 아닌 텍스트가 자식으로 포함된 경우, 암시적인 그리드 아이템이 된다. 하지만 암시적으로 생성된 그리드 아이템은 스타일 규칙을 설정할 수 없다. 다만 상속 가능한 스타일은 적용된다.

> 그리드 아이템에 설정된 display 속성은 모두 무시된다.

```html
<div class="grid-container" style="display: grid">
​
  <!-- block 그리드 아이템 -->
  <div class="grid-item"> block </div>
​
  <!-- float 속성 설정 무시 -->
  <div class="grid-item" style="float: left"> float </div>
​
  <!-- 암시적으로 블록 그리드 아이템 생성 -->
  anonymous item 3
​
  <!-- inline 그리드 아이템 ⟹ display:block 처리 -->
  <span>
    item 4
    <!-- 그리드 아이템이 아님 -->
    <q style="display: block" id=not-an-item> item 4 </q>
    item 4
  </span>
  
</div>
```

### Grid 템플릿 행 / 열

공백으로 구분된 값 리스트를 해석하여 그리드 행(Row), 열(Column)을 설정한다. 각 값은 트랙 크기를 나타낸다.

#### 값

* `<track-size>`: 그리드에서 사용 가능한 공간의 길이 (`px`, `rem`, `em`, `%`, `fr` 등)
* `<line-name>`: 사용자가 설정한 임의의 선 이름

#### 예시

```css
.grid-container {
  grid-template-rows: 25% 100px auto;
  grid-template-columns: 40px 50px auto 50px 40px;
}
```

사용자가 임의로 설정한 선 이름(`[이름]`)을 사용할 수도 있다.

```css
.grid-container {
  grid-template-rows: 
    [row-1-start] 25% [row-1-end] 100px [third-line] auto [last-line];
  grid-template-columns: 
    [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
}
```

선 이름을 1개 이상 설정하는 것도 가능하다. 방법은 [이름-1 이름-2]와 같이 [] 내부에 공백으로 구분된 이름을 추가하면 된다.

```css
.grid-container {
  grid-template-rows: [row-1] 100px [rows-1-end row-2-start] 30% [row-2-end];
}
```

설정이 반복되는 경우, `repeat()` 함수를 사용하여 손쉽게 설정할 수 있다.

```css
.grid-container {
  grid-template-rows: repeat(3, 80px [row-start]) 5%;
  /* 결과: 80px [row-start] 80px [row-start] 80px [row-start] 5% */
  grid-template-columns: repeat(2, 15% 30px) auto;
  /* 결과: 15% 30px 15% 30px auto */
}
```

`fr` 단위를 사용하여 `<track-size>`를 그리드의 남은 공간 일부를 설정할 수 있다.

```css
.grid-container {
  grid-template-columns: repeat(3, 1fr); /* 1fr 1fr 1fr */
}
```

`fr` 단위는 고정 값(`px`, `rem` 등) 단위가 먼저 계산된 후, 남은 공간을 사용하여 계산 처리된다.

```css
.grid-container {
  grid-template-rows: 1fr 100px 2fr;
}
```

### Grid 템플릿 영역

`grid-area` 속성으로 설정된 그리드 영역의 이름을 참조하여, 그리드 템플릿 영역을 설정할 수 있다. 그리드 영역 이름을 반복하면 그리드 셀을 병합한다. 그리고 마침표(`.`)는 비어있는 그리드 셀을 말한다.

그리드 템플릿 영역 설정은 그리드 라인 설정이 아니라, 영역을 설정하는 것이다. 영역을 설정하면 그리드 라인 이름이 자동으로 설정된다. `grid-area`로 설정된 이름을 사용하여 각 행 / 열의 시작은 `-start`, 끝은 `-end`로 이름이 설정된다. 예를 들면 다음과 같다.

```plain
[header-start]                               [header-end]
[main-start]  [main-end ] . [sidebar-start]  [sidebar-end]
[footer-start]                               [footer-end]
```

#### 값

* `<grid-area-name>`: 사용자가 grid-area 속성 값으로 설정한 임의의 그리드 영역 이름
* 마침표(`.`): 비어있는 그리드 셀
* `none`: 그리드 영역으로 정의되지 않은 셀


#### 예시

```css
.grid-container {
  grid-template-rows: repeat(3, 300px);
  grid-template-columns: repeat(4, 1fr);
​
  /**
   * 그리드 템플릿 영역 설정
   * 각 행은 동일한 개수의 열 설정이 요구됩니다.
   */
  grid-template-areas:
    "header header header header"  /* 1행: 4열 모두 header                */
    "main main . sidebar"          /* 2행: 2열 main 1열, 공백 1열, sidebar */
    "footer footer footer footer"; /* 3행: 4열 모두 header                */
}
​
/* 그리드 영역 이름 설정 */
.grid-header  { grid-area: 'header';  }
.grid-main    { grid-area: 'main';    }
.grid-sidebar { grid-area: 'sidebar'; }
.grid-footer  { grid-area: 'footer';  }
```

### Grid 템플릿 속기형

그리드 템플릿 행 / 열 / 영역 이름 설정을 속기형으로 설정 가능하다.

#### 값

* `none`: 3가지 설정을 모두 초기 값으로 적용
* `grid-template-rows / grid-template-columns`:  행 / 열 그리드 템플릿 설정
* 라인이름(옵션) 영역이름(필수) 트랙 크기(옵션) 라인이름(옵션)

#### 예시

다음 예시는 그리드 행/열 템플릿을 속기형 속성으로 설정한 예이다.

```css
.grid-container {
  grid-template: repeat(3, 100px) / repeat(2, 20px 40px) auto;
}
```

### Grid 거터

그리드 라인(행, 열) 사이 간격(gap)을 조정한다.

* `row-gap`
* `column-gap`
* `gap`

> 그리드 거터 속성의 이름 앞에 붙어 있던 `grid-` 는 모두 제외되었다. 이전에 사용되던 이름은 `grid-row-gap`, `grid-column-gap`, `gap`이다.
> (모든 브라우저 호환 이전까지는 예전 이름을 사용하거나, `postcss-gap-properties`를 사용하도록 한다.)

### Grid 아이템 배치

그리드 컨테이너 내부에 아이템을 자유롭게 배치할 수 있는 방법은 다음과 같다.

#### Grid 라인(Line) 기반 배치

* `grid-row-start`
* `grid-row-end`
* `grid-column-start`
* `grid-column-end`
* `grid-row`
* `grid-column`

#### ​Grid 영역(Area) 기반 배치​

* `grid-area`

#### ​Grid 아이템(Item) 순서 정렬​

* `order`

## 참고 {docsify-ignore}

* [CSS Grid Layout Guidebook - Gitbook(by 야무)](https://uid.gitbook.io/css-grid/)
