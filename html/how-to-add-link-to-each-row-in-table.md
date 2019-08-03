# HTML 테이블 행 전체에 링크 추가하기

HTML 테이블에서는 행을 나타내기 위해 `tr` 태그를 사용할 수 있다. 오늘 내가 시도했던 작업은 테이블의 각 행을 클릭했을 때 그 행에 해당하는 상세 화면으로 이동하도록 하는 일이었다.

단순히 생각해보면 `a` 태그를 사용해서 각각의 `tr` 태그를 감싸주기만 하면 끝날 것 같은데, 문제는 `tr` 요소가 `a` 요소의 자식으로 위치할 수 없다는 점이다. [W3C](https://www.w3.org/TR/html52/tabular-data.html#the-tr-element) 및 [WHATWG](https://html.spec.whatwg.org/multipage/tables.html#the-tr-element) 명세에 따르면 `tr` 태그는 오직 `thead`, `tbody`, `tfoot`, `table` 요소의 자식으로만 위치할 수 있다. 이 중에서도 `table`의 자식으로 위치한 `tr`의 경우에는 브라우저가 암묵적으로 `tr`의 부모 요소로서 `tbody` 요소를 삽입해주기 때문에, 사실상 `tr`의 부모가 될 수 있는 요소는 `thead`, `tbody`, `tfoot` 뿐이다.

처음으로 생각했던 해결책은 `tr`의 자식 셀(`th` 또는 `td`) 요소마다 다시 그의 자식으로 `a` 태그를 위치시킨 후, `a` 태그의 너비와 높이를 각 셀 영역만큼으로 늘리는 방법이었다.

```html
<style>
  .table__anchor {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>

<tr>
  <td>
    <a class="table__anchor" href="#">
      내용 1
    </a>
  </td>
  <td>
    <a class="table__anchor" href="#">
      내용 2
    </a>
  </td>
  <td>
    <a class="table__anchor" href="#">
      내용 3
    </a>
  </td>
</tr>
```

이렇게 하고나면 테이블 행의 어떤 영역을 클릭하더라도 상세 화면으로 이동할 수 있지만, 키보드 접근성에는 오히려 불편함을 초래할 수 있다. 
