# 컨테이닝 블록

요소의 크기와 위치는 컨테이닝 블록(Containing block)에 의해 영향을 받는다. 대부분의 경우에 어떤 요소의 컨테이닝 블록은 그 요소에 가장 가까운 블록 레벨 조상의 콘텐츠 영역이지만 항상 그런 것은 아니다.

## 박스 모델

사용자 에이전트(브라우저 등)는 문서를 그릴 때 모든 요소에 대해 박스 모델을 생성한다. 각각의 박스는 아래의 네 가지 영역으로 나눠진다.

1. 콘텐츠 영역 (Content area)
2. 패딩 영역 (Padding area)
3. 테두리 영역 (Border area)
4. 마진 영역 (Margin area)

## 컨테이닝 블록의 효과

컨테이닝 블록을 결정하는 요인에 대해 알아보기 전에 이게 왜 중요한지를 알아야 할 필요가 있다.

요소의 크기와 위치는 컨테이닝 블록의 영향을 자주 받는다. 백분율 값을 사용한 `width`, `height`, `padding`, `margin` 속성의 값과 절대적 위치(`absolute`나 `fixed` 등)로 설정된 요소의 오프셋 속성 값은 자신의 컨테이닝 블록으로부터 계산된다.

## 컨테이닝 블록의 식별

컨테이닝 블록의 식별 과정은 전적으로 `position` 속성 값에 의존한다.

1. `position` 속성이 `static`이나 `relative`이면, 컨테이닝 블록은 블록 컨테이너(inline-block, block, list-item 등의 요소) 또는 서식 문맥을 형성하는 요소(table, flex, grid, 아니면 블록 컨테이너 자기 자신)의 콘텐츠 영역(Content area)이 된다.
2. `position` 속성이 `absolute`인 경우, 컨테이닝 블록은 `position` 속성 값이 `static`이 아니고(`fixed`, `absolute`, `relative`, `sticky`) 가장 가까운 조상의 패딩 영역이다.
3. `position` 속성이 `fixed`인 경우, 컨테이닝 블록은 뷰포트 영역 또는 (페이지로 나뉘는 미디어의 경우) 페이지 영역이다.
4. `position` 속성이 `absolute`나 `fixed`인 경우, 다음 조건 중 하나를 만족하는 가장 가까운 조상의 패딩 영역이 컨테이닝 블록이 될 수도 있다.
   1. `transform`이나 `perspective` 속성 값이 `none`이 아닌 경우
   2. `will-change` 속성 값이 `transform`이나 `perspective`인 경우
   3. `filter` 속성 값이 `none`인 경우 (Firefox에선 `will-change`가 `filter`일 때도 적용)
   4. `contain` 속성 값이 `paint`인 경우

> 루트 요소(`<html>`)의 컨테이닝 블록은 초기 컨테이닝 블록이라고 불리는 사각형이다. 초기 컨테이닝 블록은 뷰포트 영역 또는 (페이지로 나뉘는 미디어에선) 페이지 영역의 크기와 같다.

## 컨테이닝 블록으로부터 백분율 값 계산하기

특정 속성의 값이 백분율이라면 그 계산값은 요소의 컨테이닝 블록에 의해 결정된다. 이렇게 동작하는 속성으로 박스 모델 속성과 오프셋 속성이 있다.

- `height`, `top`, `bottom` 속성은 컨테이닝 블록의 `height`를 사용해 백분율을 계산한다. 컨테이닝 블록의 `height`가 콘텐츠의 크기에 따라 달라질 수 있는 경우(`height: auto`), 컨테이닝 블록의 `position`이 `relative` 또는 `static`이면 계산값은 0이 된다.
- `width`, `left`, `right`, `padding`, `margin` 속성은 컨테이닝 블록의 `width`를 사용해 백분율을 계산한다.

> 상하 패딩, 상하 마진 역시 `height`가 아닌 `width`를 사용하여 백분율을 계산한다.

## 참고 {docsify-ignore}

* [컨테이닝 블록의 모든 것 | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/All_About_The_Containing_Block)
