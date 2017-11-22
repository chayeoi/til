# Today I Learned

## 01 HTML5

### 1. Web은 Internet의 수많은 서비스 중에 하나일 뿐이다.

<br />

### 2. 웹 접근성

1. 웹 접근성을 보장하는 방법

- 가이드라인 준수(WCAG 2.0)
- 웹 표준 준수

1. 한 가지 수단이 아니라 다양한 수단으로 접근할 수 있도록 제공되어야 한다.

<br />

### 3. 화면 구성 분할

1. 기본적으로 다음과 같은 단위와 순서로 분할한다.

- 헤더
- (네비게이션)
- 콘텐츠
- 푸터

1. 반복되지만 정보를 가진 영역이 아닐 때 그 의미에 맞게 네이밍하고 div 또는 article을 사용한다.
2. div 태그의 'role' 속성을 이용해 의미를 부여해도 괜찮지만, 역할 모델을 쓰느니 시맨틱 태그를 사용하여 분할하는 것이 더 바람직하다.
3. `div.container`로 영역을 감싸는 것은 필수가 아니라 옵션이다.

<br />

### 4. HTML5 기초

1. 특수문자

- `&lt;`: less than, &lt;
- `&gt;`: greater than, &gt;
- `&amp;`: ampersand, &amp;
- [Speical Entities](http://www.htmlhelp.com/reference/html40/entities/special.html)

1. head 설정

   ```html
   <!--다음 2개의 meta 태그는 같은 인코딩 속성을 설정한다.-->
   <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"> <!--HTML 4.1 방식-->
   <meta charset="UTF-8"> <!--HTML5 방식-->

   <!--'lang'은 global attribute로 웹 접근성과 밀접한 관련이 있다.-->
   <!--'id'라는 content가 있을 때 lang="ko"면 "이드"라 읽고 lang="en"일 때 "아이디"라 읽는다.-->
   <html lang="en"></html>

   <!--meta charset="UTF-8을 꼭 head가 들어가자마자 첫 줄에 선언해줘야 그 다음 줄부터 위치하는 tag들도 인코딩이 깨지지 않는다.-->

   <!--UI에 대한 변경을 해주고 싶을 때 사용하는 meta 속성-->
   <meta name="viewport">

   <!--X는 비표준, UA는 User Agent를 의미한다.-->
   <!--"ie=edge": 설치되어 있는 브라우저 중에 최신 버전으로 설정-->
   <!--"ie=8": 11 버전을 쓰고 있더라도 8 버전으로 렌더링-->
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   ```

2. `<abbr>`: 축약 태그

<br />

### 5. Cross Browsing Issue

1. 지원하지 않는 브라우저를 버릴 것이 아니라 대안을 만드는 것이 진정한 해결 방법이다.

<br />

### 6. Keyboard Focusing

1. 키보드 포커싱은 기본적으로 `a`와 `form` 관련 요소만 받을 수 있다.

2. 다른 속성들이 포커스를 받게 하려면 `tabindex` 속성을 마크업에 추가한다.

   ```html
   <span tabindex="0">HTML에 대해</span>
   ```

3. `tabindex`는 마크업 순서에 따라 접근한다.

<br />

> #### `tabindex`
>
> 1. `tabindex`의 value가 0인 이유?
>
> - `tabindex`는 링크 관련 태그 및 `input` 태그 이외의 요소가 키보드 포커싱을 받을 수 있도록 설정하는 어트리뷰트
> - `tabindex: 0`은 순차적으로 포커싱을 받을 수 있도록 하고,  `tabindex: 1`은 인접한 요소 중에 `tabindex` 속성을 가진 요소를 탐색한 후 해당 요소들에 대해 인덱싱한다.
> - `tabindex: -1`은 모든 요소들에 대하여 탭 포커스에서 제외시킬 수 있다.
>
> 1. 만약 인접한 형제 요소가 tabindex를 가지고 있다면 자식 요소보다 형제 요소에 먼저 접근하는지?
>
> - 자식 요소를 탐색 후 형제 요소에 접근한다.

<br />

### 7. 섹셔닝 ([https://seulbi.github.io/](https://seulbi.github.io/))

1. 구조 잡는 순서

- Step 1: 영역을 구분한다.
- Step 2: 어떤 태그를 사용할지 정한다.
- Step 3: 각 요소를 클래스와 아이디로 네이밍한다.
- Step 4: 특정 이벤트가 발생했을 때 어떤 방식으로 처리할 건지 조사한다. 그 이후에 더 합리적인 방법을 고민하면서 튜닝하고 문제를 줄여나간다.

1. 섹셔닝

- header: 로고(h1), 멤버(ul), 검색 홈(form)
- nav: 메인 메뉴(ul)
- main: 서적(section), 뉴스(article), 게시판(section), 인기 사이트(section), 트위터(article)
  - 트위터나 뉴스 콘텐츠처럼 배포 목적이 있을 때 article로 보는 것도 좋다.
  - div로 구분할 시에 `헤딩 처리`를 통해 암묵적인 아웃라인을 형성햐여야 한다.
  - section과 article도 역시 헤딩을 가져야 한다.
- footer: 주소(address), 저작권(div)

<br />

### 8. `button`

1. Type

- submit: 폼 양식 제출
- reset: 입력 내용 리셋
- button: 스크립트 실행

<br />

### 9. `form`

1. `form` 안의 내용은 유기적으로 정보 교환이 이루어져야 하는 부분으로 판단된다.

2. `fieldset`은 연관된 내용들을 하나로 묶는 역할을 한다.

3. `fieldset` 안에 `fieldset`이 여러 번 위치할 수 있다.

4. `legend`는 `fieldset`의 내용을 명시하는 역할을 한다.

5. `input`에 일대일로 대응하는 `label`은 항상 있어야 한다.

6. `label`의 for 어트리뷰트로 `input`의 id를 읽어옴으로써 두 요소를 묶을 수 있다.

   ```html
   <form>
     <fieldset>
       <legend>로그인 폼</legend>
       <label for="user-id"></label><input type="text" id="user-id">
       <button type="submit">제출</button>
     </fieldset>
   </form>
   ```

7. 하나의 `form` 안에 2개의 `fieldset`을 만들어 필수 입력 정보와 선택 입력 정보로 구분할 수 있다. `div`와 성격이 유사하지만 `div`는 범용적인 그루핑 요소인 반면, `fieldset`은 연관성 있는 요소들을 묶는 전용 그루핑 요소이다.

8. `label`이 필요 없을 때 `title` 어트리뷰트로 역할을 알려주는 것을 우리 나라에서 허용하지만 권장하지 않는다. 모든 `input`은 일대일로 대응하는 `label`을 가져야 한다.

9. 카드 번호를 입력받을 때 네 자리씩 끊어서 입력받는 것보다 한 번에 입력받는 것이 `label`을 하나만 사용할 수 있으므로 더 권장되는 방법이다.

10. `required` 어트리뷰트는 이 입력 상자는 필수라는 뜻이다.

11. [Web Forms 2.0](https://www.miketaylr.com/pres/html5/forms2.html)

    ```html
    <!-- 최대 글자 수를 6글자로 제한. 최소 글자 수는 정규표현식으로 제한할 수 있다. -->
    <input type="text" maxlength="6"/>

    <!-- datalist를 input의 리스트로 연결. autofocus를 설정하면 로딩되었을 때 자동 초점이 맞춰진다. -->
    <input type="search" autofocus list="search-suggestions"/> 
    	<datalist id="search-suggestions">
    		<option label="DM" value="Depeche Mode">
          	<option label="Moz" value="Morrissey">
          	<option label="NO" value="New Order">
          	<option label="TC" value="The Cure">
    	</datalist>

    <!-- tell 타입을 설정하면 모바일에서 키보드 포커싱을 받았을 때 숫자 키보드가 올라오도록 할 수 있다. pattern 어트리뷰트에 정규표현식을 설정. name은 값을 담는 변수와 비슷하다. -->
    <input type="tel" pattern="[0-9]{10}" name="tel" title="Phone Number?!?!"/>

    <!-- 소셜 계정을 입력받고자 하면 url 타입을 사용한다. -->
    <input type="url" id="url" name="earl" required />


    캘린더 type은 키보드 접근이 가능하다.
    ```

    ​

<br />

### 10. 명시적, 암묵적 아웃라인

1. 다음 4가지는 명시적으로 아웃라인을 형성하며 헤딩을 가져야 한다.

- section
- article
- nav
- aside

1. div 같은 경우 헤딩을 선언한 후, 또 다른 div가 존재하더라도 다른 헤딩을 만날 때까지 암묵적인 아웃라인이 형성된다.

<br />

### 11. `img`

1. 웹 접근성을 고려해 `alt` 어트리뷰트를 부여해야 한다.
2. `title` 어트리뷰트는 `alt`만으로 설명이 부족할 때 보충 설명을 하는 역할이다. 모든 태그에 사용할 수 있다.
3. `alt`와 `title`의 용도는 다르기 때문에 같은 값을 설정해서 중복을 발생시키는 것은 좋은 방식이 아니다.

<br />

### 12. `a`

1. `onclick="window.open()"`을 이용하면 새 창을 열어주지만 새 창을 읽어주지 않아서 키보드 포커스가 새로운 창을 인지할 수 없다. 이 때 접근성을 제어하고 싶다면 `title="새창"`으로 알려주면 된다.
2. `target="_blank"`로 새 창을 띄울 수 있다.
3. `a`의 클릭 범위를 늘리고 싶을 때 `display: block`을 지정하면 부모 요소의 너비만큼으로 범위가 확대된다.

<br />

### 13. 문서 구조화

1. 마크업을 할 때, 항상 문서의 논리적 순서를 고려해야 한다.

<br />

### 14. 정의형 목록 `dl`

1. 정의형 목록을 만들 때 `dl` 태그를 사용한다.
2. `dt`와 `dd`는 1:1, 1:n, n:1 대응 모두 가능하다.

<br />

### 15. 시맨틱 태그

1. `span`이나 `div`는 단순히 중립적인 그루핑 요소로 **non-semantic**하다. 보통 스타일링을 위한 용도로 사용한다.

