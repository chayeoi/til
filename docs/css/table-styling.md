# 테이블 스타일링

## 시각 디자인에서 자취를 감춘 테이블 요소

테이블 디자인 시, 접근성을 고려하여 작성된 테이블 제목(caption) 또는 테이블 요약(summary)을 시각 디자인 과정에서 그리지 않기도 한다. 이렇게 시각 디자인 상에서 그려지지 않았다 하더라도, 프론트엔드 개발자는 모든 사용자를 고려하여 테이블 요약 내용을 구조화 해야 한다. 디자인의 본질은 '사람'이고, 사람을 위한 디자인이 우리의 목표이기 때문이다.

## 구조화는 되었으나, 화면에 감춰야 한다면?

스크린리더(Screen Reader) 사용자가 테이블 요약을 들을 수 있도록 요약을 제공하되, 시각 디자인 결과와 같이 화면에서는 감춰야 한다.

접근성을 고려하여 콘텐츠를 화면에 감추려면 CSS를 사용하여 재사용(Reusable) 가능하도록 클래스(class)로 설계(design)하여 사용한다. 클래스 `a11y-hidden`에 대해 알고 싶다면 Jonathan Snook의 [Hiding Content for Accessibility](https://snook.ca/archives/html_and_css/hiding-content-for-accessibility) 기사 글을 참고하자.

```css
/* 접근성(accessibility, a11y)을 고려한 화면에서 숨기기 */
.a11y-hidden {
  overflow: hidden;
  position: absolute;
  clip:     rect(0,0,0,0);
  width:    1px;
  height:   1px;
  margin:   -1px;
  border:   0;
  padding:  0;
}

/*
 * 화면에 표시되는 caption 요소의 공간 제거를 위한 설정.
 * caption의 경우, 특이하게도 해당 클래스를 적용하게 되면 1px 정도의 공간이 발생하는 문제가 발생한다.
 * 이 공간을 제거하기 위해 `position: static;`으로 설정하게 된다.
 */
caption.a11y-hidden {
  position: static;
}
```

## 테이블 스타일링

1. 테이블, 셀(제목/내용)의 테두리(border)를 디자인 할 수 있다.
2. 테이블 셀 사이 간격을 접거나(collapse), 나눌(separate) 수 있다.
3. 테이블 테두리 사이 간격을 설정할 수 있다. (`border-collapse: separate;` 설정 필요)
4. 테이블 캡션 위치(top, bottom)를 설정 할 수 있다.
5. 테이블 레이아웃(auto, fixed) 설정을 통해 콘텐츠의 양에 따라 셀의 크기를 변경하거나, 고정 할 수 있다. (`fixed` 설정 시, `width` 설정 필요)
6. 테이블 셀은 마진(margin)이 설정되지 않는다.
7. 테이블 셀은 패딩(padding)은 설정 가능하다.
8. 빈 셀(empty cells)의 표시(`show | hide`) 설정이 가능하다. (`hide` 설정 시 빈 셀은 화면에 그려지지 않음)

```css
table, th, td {
  /* [1] 테이블, 제목/내용 셀 테두리 표시 설정. */
  border: 1px solid #212121;
}

table {
  /* [2] 테이블 셀 사이 간격을 접음. */  
  border-collapse: collapse;
  /* [3] 
     테이블 보더 사이 간격 설정. 
     border-collapse: separate 설정 필요. 
   */
  border-spacing: 10px;
  /* [4] 캡션 위치 설정. (top | bottom) */
  caption-side: bottom;
  /* [5]
    테이블 레이아웃 설정. (auto | fixed)
    auto 설정 시, 콘텐츠에 따라 셀이 늘어남.
    fixed 설정은 고정. (width 속성 필요)
   */
  table-layout: fixed;
}

th, td {
  /* [6] 테이블 셀은 마진이 설정되지 않음. */
  margin: 10px;
  /* [7] 테이블 셀은 패딩은 설정 가능. */
  padding: 0.4em 0.6em;
  /* [8]  
    빈 셀의 표시 설정. (show | hide) 
    hide 설정 시 빈 셀은 화면에 그려지지 않음(테두리가 그려지지 않음).
   */
  empty-cells: hide;
}

/* 접근성(accessibility, a11y)을 고려한 화면 감춤 */
.a11y-hidden {
  overflow: hidden;
  position: absolute;
  clip:     rect(0,0,0,0);
  width:    1px;
  height:   1px;
  margin:   -1px;
  border:   0;
  padding:  0;
}

/* 화면에 표시되는 caption 요소의 공간 제거를 위한 설정 */
caption.a11y-hidden {
  position: static;
}
```

> `border: 1px solid currentColor`와 같이 `currentColor`를 사용하게 되면 해당 요소가 가지고 있는 `color` 속성을 그대로 사용할 수 있다.
