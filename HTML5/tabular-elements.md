# 테이블 요소

`table`은 반드시 사용자에게 정보를 제공하기 위한 제목(caption)을 갖는다.

상대적으로 표는 x축, y축을 갖고 있는 상당히 복잡한 데이터이기 때문에 눈이 보이지 않는 시각 장애인같은 경우에 매우 이해하기 어렵다. 그렇기 때문에 이런 부분까지 고려해서 구조 디자인을 해줘야 할 필요가 있다.

## `<table>` 요소

* 테이블 몸체에 해당되며, 행(row)/열(column) 및 셀(cell)을 포함한다.
* 복잡한 내용을 x, y축에 따라 이해하기 쉽게 데이터를 구조화하는데 테이블을 사용한다.
* 가장 좋은 테이블 디자인은 최대한 단순하게 표를 구성하는 것이다.
* 테이블 내 테이블을 중첩해서는 안된다.
* 테이블을 레이아웃(배치) 목적으로 사용해서는 안된다.
* `border` 속성을 사용해 테두리를 그릴 수 있지만 표현 속성이기때문에 사용이 권장되지 않는다. (CSS로 대체하는 것이 좋다.)
* `scope`라는 속성을 사용하여 제목 셀(`th`)이 행에 대한 제목인지, 열에 대한 제목인지를 지정할 수 있다.
* 테이블에 대한 설명 내용이 필요하다면 `aria-describedby` 속성을 사용하여 표의 자세한 내용을 기술할 수 있다.

## `<caption>` 요소

* 테이블의 제목을 명시적으로 제공하며, 제작자는 표의 내용을 이해할 수 있도록 정보를 반드시 제공해야 한다.
* 테이블 내용이 복잡해 설명이 필요하다면 아래 나열된 방법 중 하나를 선택해 기술해야 한다.
  1. `aria-describedby` 속성을 사용해 설명 단락(paragraph)을 연결

  ```html
  <p id="summary">
    In the following table, characteristics are
    given in the second column, with the negative side in the left column and the positive
    side in the right column.
  </p>
  <table aria-describedby="summary">
    <caption>Characteristics with positive and negative sides</caption>
    <thead>
    <tr>
      <th id="n"> Negative
      <th> Characteristic
      <th> Positive
    <tbody>
    <tr>
      <td headers="n r1"> Sad
      <th id="r1"> Mood
      <td> Happy
    <tr>
      <td headers="n r2"> Failing
      <th id="r2"> Grade
      <td> Passing
  </table>
  ```

  2. <figure> 요소에 `aria-labelledby` 속성을 사용해 제목(caption)을 연결

  ```html
  <figure aria-labelledby="caption">
    <p>Characteristics are given in the second column, with the
      negative side in the left column and the positive side in the right
      column.</p>
      <table>
      <caption id="caption">Characteristics with positive and negative sides</caption>
      <thead>
        <tr>
        <th id="n"> Negative
        <th> Characteristic
        <th> Positive
      <tbody>
        <tr>
        <td headers="n r1"> Sad
        <th id="r1"> Mood
        <td> Happy
        <tr>
        <td headers="n r2"> Failing
        <th id="r2"> Grade
        <td> Passing
      </table>
  </figure>
  ```

## `<tr>` 요소

테이블의 행(row)을 말하며 내부에 셀 제목(header), 셀 내용(data)을 포함한다.

## <th> 요소

테이블 셀 제목(header cell in a table)으로 행(tr) 내부에 포함되어야 한다.

### 속성

* `scope`: 행(row) 또는 열(col), 행그룹(rowgroup), 열그룹(colgroup)의 제목임을 명시한다.
* `abbr`: 제목이 길어 축약(Abbreviation)이 필요할 때 사용한다.
* `colspan`: 열(column)을 그룹 지을 때 사용한다.
* `rowspan`: 행(row)을 그룹 지을 때 사용한다.

## `<td>` 요소

테이블 셀 내용(data cell in a table)으로 행(tr) 내부에 포함되어야 한다.

### 속성

* `colspan`: 열(column)을 그룹 지을 때 사용한다.
* `rowspan`: 행(row)을 그룹 지을 때 사용한다.
* `headers`: 셀 제목을 하나 이상 연결하여 읽기 용이하도록 구성할 때 사용한다.

## `<thead>` 요소

테이블 행 블록(row block) 내에 제목 열 그룹(column headers)으로 구성할 경우 사용한다. 필수는 아니므로 선택적(option)으로 사용한다.

## `<tbody>` 요소

행 블록 내에 테이블 데이터로 구성할 때 사용한다. `thead`와 마찬가지로 필수는 아니므로 선택적(option)으로 사용한다.

## `<tfoot>` 요소

행 블록 내에 열 요약(column summaries)로 구성할 때 사용한다. 필수는 아니므로 선택적(option)으로 사용한다.

## `<col>` 요소

테이블 열(column)을 하나 이상 묶고자 할 때 사용한다. 일반적으로 `colgroup` 요소 내부에 포함시킨다. 필수는 아니므로 선택적(option)으로 사용한다.

### 속성

* `span`: 열 묶음 개수를 설정한다.

## `<colgroup>` 요소

테이블 열(column) 그룹을 만들고자 할 때 사용한다. 내부에 `col` 요소를 포함하거나, 포함하지 않을 수 있다. 필수는 선택적(option)으로 사용한다.

### 속성

* `span`: colgroup 요소가 col을 포함하지 않을 경우, 열 묶음 개수를 설정한다.


```html
<!DOCTYPE html>
<html lang="ko-KR">
<head>
  <meta charset="UTF-8">
  <title>HTML 테이블(Table) 요소들</title>
  <style>
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
    caption.a11y-hidden { position: static; }
  </style>
</head>
<body>

  <!--


  -->

  <!-- 간단한 표 -->
  성인 남성 운동화 사이즈표

  한국(mm) 240 245 250 255 260 265 270 275 280 285 290
  미국(US) 6 6.5 7 7.5 8 8.5 9 9.5~10 10~10.5 11 11.5
  영국(UK) 5 5.5 6 6.5 7 7.5 8 8.5~9 9~9.5 10 11
  유럽(EU) 38~39 39 40 40~41 41 42 42~43 43 44 44~45 45


  <!-- 복잡한 표 -->
  최근 3개월간 실거래가
    <!-- ? -->
    국토교통부 실거래가
    제공: 국토교통부
    최근 3개월간(2018.01월~03월) 신고된 국토교통부 실거래 가격자료를
    기반으로 최저가격과 최고가격 및 거래건수를 노출합니다.
    닫기

  <!-- URL 주소: https://goo.gl/FxWHEg -->
  실거래가 기준: 2018.03 자료: 국토교통부

  공급/전용(㎡)  매매 실거래가(만원)    전세 실거래가(만원)           월세 실거래가(만원)
              최저가 최고가 거래건수  최저가 최고가 거래건수          최저가 최고가 거래건수

  80/59.91    -                 43,000(2층) 43,000(2층) 1   -

  84/59.99    47,800(4층)  55,000(22층) 10  43,000(2층)  43,000(2층) 1  5,000/120(6층) 40,000/10(4층) 5

  111/84.82   63,200(12층) 63,500(19층) 2 53,000(13층) 53,000(13층) 1 -

  112/84.92   65,000(6층)  65,000(6층)  1 52,000(10층) 52,000(10층) 1 -

  112/84.94   60,000(25층) 60,000(25층) 1 45,000(10층) 45,000(10층) 1 35,000/60(5층)  35,000/60(5층)  1

  145/114.98  76,800(15층) 80,000(14층) 2 - 5,000/200(5층)  5,000/200(5층)  1

</body>
</html>

```