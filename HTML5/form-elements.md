# 폼 관련 요소

## `label`

컨트롤에 레이블(이름)을 붙이고자 할 경우에 사용한다.

### 사용 방법

1. `label` 요소로 `input` 요소를 감싸기

  ```html
  <label>이름 <input type="text"></label>
  ```

2. `label` 요소의 `for` 속성을 사용하여 `input` 요소의 `id` 속성을 연결

  ```html
  <label for="u_pass">비밀번호</label>
  <input id="u_pass" name="u_pass" type="password" maxlength="8" placeholder="비밀번호를 입력해주세요">
  ```

## `input`

### 속성

* `maxlength`: 최대 입력 글자 수의 제한을 설정할 수 있다.
* `minlength`: 최소 입력 글자 수의 제한을 설정할 수 있다.
* `readonly`: 읽기만 가능하고 사용자가 값을 입력할 수 없도록 설정한다.
* `value`: 필드에 기본 입력값을 설정한다.
* `required`: 필수 입력 필드로 만들어서 값을 입력하지 않으면 서버에 전송할 수 없도록 설정한다.
* `checked`: `[type="radio"]` 또는 `[type="checkbox"]`에서 기본 선택 값을 설정하는 데 사용할 수 있다.
* `disabled`
* `name`
* `placeholder`
* `list`

### 유형

* text
* password
* checkbox
* radio
* file
* submit
* button
* image: 이미지가 삽입된 버튼을 만들 때 사용한다.
* reset: 폼 데이터를 초기화할 때 사용한다.
* hidden: 사용자에게 보여지지 않는 상태로 데이터를 전송할 때 사용한다.
* search: 검색 영역을 만들 때 사용한다.
* url: `url`을 입력받을 때 사용하며, 데이터 주소 목록을 보여주고 싶다면 `datalist` 요소를 사용한다.

  ```html
  <label>웹 주소: <input type="url_ex" list="" name="user_url" id="user_url"></label>
  <datalist id="url_ex">
    <option value="http://naver.com">naver</option>
    <option value="http://google.com">google</option>
  </datalist>
  ```

* tel
* email
* date
* month
* week
* time
* datetime-local
* number
* range
* color

#### 사용 예시

```html
<input type="text">
<input type="submit" value="전송">
<input type="button" value="버튼">
<input type="image" src="https://goo.gl/Ng66oQ" alt="체크인" width="20" height="20">
<input type="reset" value="초기화">
<input type="hidden" name="using-ajax" value="true">
<input type="number" name="" id="" min="100" step="10" max="1000" value="150">
<input type="range" name="" id="" min="10" step="5" max="25" value="15">
<input type="color" name="" id="" value="#F7CC60">
```

### 기타

* `[type="radio"]` 또는 `[type="checkbox"]`에서 연관된 필드끼리는 동일한 `name` 속성 값을 가져야 한다.
* 파일을 전송할 때는 `form` 요소에 `enctype` 속성을 `multipart-formdata`, `method` 속성은 `POST`로 설정해줘야 한다.

  ```html
  <form action="/" method="POST" enctype="multipart-formdata">
  </form>
  ```

## `select`

* 드롭 다운 메뉴(옵션을 선택 할 수 있는) 컨트롤을 만들 때 사용한다.
* 내부에 `option` 요소를 포함하여 사용자에게 선택할 수 있도록 작성한다.
* `option`을 묶어 그룹으로 만들고자 한다면 `optgroup` 요소를 사용하고 `label` 속성을 사용해 그룹 이름을 설정한다.

### 속성

* `name`
* `multiple`
* `disabled`
* `required`
* `size`

### 사용 예시

```html
<label for="user_hobby">취미</label>
<select name="user_hobby" id="user_hobby">
  <!-- ... -->
</select>
```

## `option`

`select`, `datalist`, `optgroup` 내부에 포함 가능한 컨트롤로 항목을 만드는데 사용된다.

### 속성
* value
* selected
* label
* disabled

### 사용 예시

```html
<label for="user_hobby">취미</label>
<select name="user_hobby" id="user_hobby" required>
  <option value="0">없음</option>
  <option value="1" selected>축구</option>
  <option value="2" label="basketball" disabled>농구</option>
  <option value="3">독서</option>
  <option value="3">영화관람</option>
</select>
```

## `optgroup`

`option` 컨트를을 그룹지을 때 사용한다.

### 속성

* disabled
* label

### 사용 예시

```html
<p>
  <label for="user_hobby">취미</label>
  <select name="user_hobby" id="user_hobby" required>
    <option value="0">없음</option>
    <optgroup label="구기종목">
      <option value="1" selected>축구</option>
      <option value="2" label="basketball" disabled>농구</option>
    </optgroup>
    <optgroup label="문화생활" disabled>
      <option value="3">독서</option>
      <option value="3">영화관람</option>
    </optgroup>
  </select>
</p>
```

## `textarea`

멀티라인 일반 텍스트 편집 컨트롤을 말한다.

### 속성

* `name`
* `placeholder`
* `rows`
* `cols`
* `readonly`
* `required`
* `disabled`
* `minlength`
* `maxlength`

    [사용 예시]
      <div>
        <label for="user_comments">코멘트</label>
        <p>
          <textarea name="user_comments" id="user_comments" cols="24" rows="5">남기고 싶은 말을 작성해주세요.</textarea>
        </p>
      </div>

### 기타

* 일반적으로 `textarea`는 브라우저 화면에서 사용자가 사이즈를 조정할 수 있다. CSS를 통해 `textarea` 요소에 `resize: none` 속성을 설정함으로써 사용자가 사이즈를 마음대로 조정하지 못하게 만들 수 있다.

## `output`

계산된 결과를 출력하는 데 사용된다.

### `속성`

* `name`
* `for`

### 사용 예시

```html
<form oninput="result_sum.value = parseInt(n1.value + n2.value, 10)">
  <p>
    <input type="number" name="n1" value="4"> +
    <input type="number" name="n2" value="10"> =
    <output name="result_sum">14</output>
  </p>
</form>
```

## `datalist`

데이터 목록 요소 컨테이너 컨트롤을 나타낼 때 사용한다. 내부에 `option` 요소를 사용해 항목을 만든다.

### 사용 예시

```html
<label>이동할 웹주소 <input list="url_ex" type="url" name="user_url" id="user_url"></label>
<datalist id="url_ex">
  <option value="http://naver.com">naver</option>
  <option value="http://nate.com">nate</option>
  <option value="http://google.com">google</option>
  <option value="http://goo.gl">google short url</option>
</datalist>
```

## `progress`

작업의 완료 **진행 상황**을 표시하는 데 사용된다.

### 속성

* `value`
* `max`

### 사용 예시

```html
  <progress value="10" max="100">10%</progress>
```

## `meter`

알려진 범위 내에서의 **스칼라 측정 또는 분포 비율**을 나타낼 때 사용한다. 디스크 사용 현황, 쿼리 결과의 관련성, 특정 후보에 대한 투표율 등이 해당된다.

### 속성

* `value`
* `min`
* `max`
* `low`
* `high`
* `optimum`

### 사용 예시

```html
<meter value="20" min="5" max="40">20</meter>
```

## 기타

* 버튼을 마크업할 때에는 '버튼' 텍스트를 넣으면 안된다. 화면을 읽어주는 스크린 리더는 이미 `button` 요소임을 인식하고 '버튼'을 읽어주기 때문이다.
* `button` 요소는 타입을 지정하지 않으면 `submit` 타입으로 지정된다.