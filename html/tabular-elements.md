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
      <td id="r1"> Mood
      <td> Happy
    <tr>
      <td headers="n r2"> Failing
      <td id="r2"> Grade
      <td> Passing
  </table>
  ```

  2. <figure> 요소에 `aria-labelledby` 속성을 사용해 제목(caption)을 연결

  ```html
  <figure aria-labelledby="caption">
    <p>Characteristics are given in the second column, with the negative side in the left column and the positive side in the right column.</p>
    <table>
      <caption id="caption">Characteristics with positive and negative sides</caption>
      <thead>
        <tr>
          <th id="n"> Negative</th>
          <th> Characteristic</th>
          <th> Positive</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td headers="n r1"> Sad</td>
          <th id="r1"> Mood</th>
          <td> Happy</td>
        </tr>
        <tr>
          <td headers="n r2"> Failing</td>
          <th id="r2"> Grade</th>
          <td> Passing</td>
        </tr>
      </tbody>
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

테이블 행 블록(row block) 내에 제목 열 그룹(column headers)으로 구성할 경우 사용한다. 필수는 아니므로 선택적으로 사용한다.

## `<tbody>` 요소

행 블록 내에 테이블 데이터로 구성할 때 사용한다. `thead`와 마찬가지로 필수는 아니므로 선택적으로 사용한다.

## `<tfoot>` 요소

행 블록 내에 열 요약(column summaries)로 구성할 때 사용한다. 필수는 아니므로 선택적으로 사용한다.

## `<col>` 요소

테이블 열(column)을 하나 이상 묶고자 할 때 사용한다. 일반적으로 `colgroup` 요소 내부에 포함시킨다. 필수는 아니므로 선택적으로 사용한다.

### 속성

* `span`: 열 묶음 개수를 설정한다.

## `<colgroup>` 요소

테이블 열(column) 그룹을 만들고자 할 때 사용한다. 내부에 `col` 요소를 포함하거나, 포함하지 않을 수 있다. 선택적으로 사용한다.

`col`, `colgroup` 요소를 작성하는 위치는 `caption` 뒤에 `tr`, `thead`, `tbody`, `tfoot` 앞에 작성해야 한다.
또한 `colgroup` 요소에 span 속성이 있을 경우 자식 요소로 `col`을 사용하면 안된다. span 속성은 `colgroup`이 몇 개의 `col`을 묶는지 나타내기 때문에 자식 요소로 `col`을 포함할 필요가 없기 때문이다.

### 속성

* `span`: `colgroup` 요소가 `col`을 포함하지 않을 경우, 열 묶음 개수를 설정한다.
