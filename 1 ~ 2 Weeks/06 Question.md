# Today I Learned

## 09 Question

### 1. 부모 요소에 `font-size: 0`으로 준 이유는?

```css
.member {
    text-transform: uppercase;
    font-size: 0;
    text-align: right;
    transform: translateX(10px); 
}
```

​	→ 마크업 구조로 인한 간극을 없애기 위해 `font-size: 0` 지정

<br />

### 2. BEM

1. BEM 방법을 사용할 때 Block 내 Block의 Element 네이밍은 어떤 방식으로?

		→ 정해진 방법은 없으나 되도록이면 최상위 Block으로 네이밍하는 것을 추천

2. 클래스 선택자만 사용할 것을 권하는데, 그렇다면 :nth-child와 같은 가상 클래스는 어떻게 대처할지?

<br />

### 3. 웹 폰트 관련

1. `font-family`와  `font-style, ` `font-weight`의 값은 지정된 키워드 값이 아니라 원하는 값으로 지정해도 되는 것인지? 그 후 그 값으로 사용하면 되는 것인지?

   → `font-family`는 자신 마음대로 지정하면 된다. `font-style`과 `font-weight`는 해당 폰트 내에서 정의한 대로 사용해야 한다.

2. `local()`과 `url()` 방식의 차이점은?

   → `local()`은 로컬 경로에서 폰트를 읽어오고, `url()`은 url을 통해 폰트를 읽어온다.

3. `src` 프로퍼티에 여러 개를 선언하는 이유는 해당 폰트가 존재하지 않을 때에 대응하기 위한 것인지?

   → 다양한 브라우저 환경에서 서로 다르게 대응하기 위함이다.

<br />

### 4. `*::after`, `*::before`에도 `box-sizing: border-box`로 설정하는 이유는?

```css
*, *::after, *::before {
  box-sizing: border-box;
}
```

​	→ `*`는 실제 존재하는 요소들을 모두 선택하는 selector이다. 이때, `:hover`는 어쨌든 `hover` 이벤트가 발생했더라도 원래 존재했던 해당 객체이지만, `::after`, `::before`는 기존에 존재하지 않던 하나의 가상 요소를 더 만든 것이므로 따로 설정해줘야 할 필요가 있다.

<br />

### 5. normalize.css의 역할은?

​	→ 브라우저마다 조금씩 다르게 보이는 스타일을 하나로 통일하기 위함.

<br />

### 8. Position 관련

1. `position: absolute` 시에 `span`은 너비를 가질 수 있었고 `div`는 너비가 콘텐츠만큼의 너비를 갖게 되었는데, `span`은 block 요소가 된 것이고 `div`는 inline-block 요소가 된 것인지? 

   → 모두 block 요소가 되고 하나의 공간을 차지할 수 있도록 width만 content에 맞게 줄어든다.

2. `position: absolute`를 설정하면 부모 `div`가 자식을 인식하지 못 하게 되는 문제는 `.clearfix`는 당연히 먹히지 않으므로 어떻게 해결할 수 있는지?

   → 해결할 수 없다. `min-height`를 지정하여 최소 높이를 지정하는 방법이 해결책이 될 수 있다.

<br />

### 9. 수직 정렬 방법

1. `position: absolute`가 되었을 때 `transform: translate()`는 적용이 안되는지?

<br />

### 10. 브런치 CSS

1. 스크롤할수록 제목이 흐려지는 효과와 일정 부분부터 네비게이션이 등장하는 효과는 어떻게 만들 수 있는지?

<br />

### 11. sup, sub 태그 

1. 장식에 관련된 속성이라 생각되는데, 이에 대응되는 CSS 스타일 속성은 없는지?

