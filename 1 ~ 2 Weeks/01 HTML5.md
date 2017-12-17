# Today I Learned

## 01 HTML5

### 1. Web은 Internet의 수많은 서비스 중에 하나일 뿐이다.

<br />

### 2. 웹 접근성

1. 웹 접근성을 보장하는 방법
   1. 가이드라인 준수(WCAG 2.0)
   2. 웹 표준 준수
2. 한 가지 수단이 아니라 다양한 수단으로 접근할 수 있도록 제공되어야 한다.


<br />

### 3. 화면 구성 분할

1. 기본적으로 다음과 같은 단위와 순서로 분할한다.
   1. 헤더
   2. (네비게이션)
   3. 콘텐츠
   4. 푸터


1. 반복되지만 정보를 가진 영역이 아닐 때 그 의미에 맞게 네이밍하고 div 또는 article을 사용한다.
2. div 태그의 'role' 속성을 이용해 의미를 부여해도 괜찮지만, 역할 모델을 쓰느니 시맨틱 태그를 사용하여 분할하는 것이 더 바람직하다.
3. `div.container`로 영역을 감싸는 것은 필수가 아니라 옵션이다.

<br />

### 4. HTML5 기초

1. 특수문자

   1. `&lt;`: less than, &lt;
   2. `&gt;`: greater than, &gt;
   3. `&amp;`: ampersand, &amp;
   4. `&copy;`: copyright, &copy;
   5. [Speical Entities](http://www.htmlhelp.com/reference/html40/entities/special.html)

2. head 설정

   ```html
   <!-- 다음 2개의 meta 태그는 같은 인코딩 속성을 설정한다. -->
   <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"> <!-- HTML4.1 방식 -->
   <meta charset="UTF-8"> <!-- HTML5 방식 -->

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

3. `<abbr>`: 축약 태그

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

> #### tabindex
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
   1. Step 1: 영역을 구분한다.
   2. Step 2: 어떤 태그를 사용할지 정한다.
   3. Step 3: 각 요소를 클래스와 아이디로 네이밍한다.
   4. Step 4: 특정 이벤트가 발생했을 때 어떤 방식으로 처리할 건지 조사한다. 그 이후에 더 합리적인 방법을 고민하면서 튜닝하고 문제를 줄여나간다.


2. 섹셔닝
   1. header: 로고(h1), 멤버(ul), 검색 홈(form)
   2. nav: 메인 메뉴(ul)
   3. main: 서적(section), 뉴스(article), 게시판(section), 인기 사이트(section), 트위터(article)
      1. 트위터나 뉴스 콘텐츠처럼 배포 목적이 있을 때 article로 보는 것도 좋다.
      2. div로 구분할 시에 `헤딩 처리`를 통해 암묵적인 아웃라인을 형성햐여야 한다.
      3. section과 article도 역시 헤딩을 가져야 한다.
   4. footer: 주소(address), 저작권(div)


3. rss 피드로 배포할 목적이 있다면 article로 마크업한다.

4. article은 아웃라인에 영향을 주는 요소이므로 heading을 가져야 한다.

5. article이 독립적으로 배포할 목적을 지녔다면 h1으로 처리하기도 하지만, 요즘 스펙에서는 그렇다 하더라도 적절한 수준의 heading을 사용할 것을 권장하고 있다.

6. 연관된 콘텐츠는 section, 독립된 콘텐츠는 주로 article로 마크업한다.

7. 삭제가 되더라도 본문 콘텐츠에 영향을 주지 않는 영역은 aside로 마크업한다.

8. 사이드바이기 때문에 무조건 aside로 처리하는 것이 아니라, 그 성격을 고민해봐야 한다.


<br />

### 8. button

1. Type
   1. submit: 폼 양식 제출
   2. reset: 입력 내용 리셋
   3. button: 스크립트 실행

<br />

### 9. form

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

    <!-- tel 타입을 설정하면 모바일에서 키보드 포커싱을 받았을 때 숫자 키보드가 올라오도록 할 수 있다. pattern 어트리뷰트에 정규표현식을 설정. name은 값을 담는 변수와 비슷하다. -->
    <input type="tel" pattern="[0-9]{10}" name="tel" title="Phone Number?!?!"/>

    <!-- 소셜 계정을 입력받고자 하면 url 타입을 사용한다. -->
    <input type="url" id="url" name="earl" required />
    ```

12. 캘린더 type은 키보드 접근이 가능하다.

<br />

### 10. 명시적, 암묵적 아웃라인

1. 다음 4가지는 명시적으로 아웃라인을 형성하며 헤딩을 가져야 한다.
   1. section
   2. article
   3. nav
   4. aside


2. div 같은 경우 헤딩을 선언한 후, 또 다른 div가 존재하더라도 다른 헤딩을 만날 때까지 암묵적인 아웃라인이 형성된다.
3. [Outline 알고리즘](https://appletree.or.kr/blog/web-development/html/html5%EC%9D%98-%EC%83%88%EB%A1%9C%EC%9A%B4-%EB%AC%B8%EC%84%9C-outline-%EC%95%8C%EA%B3%A0%EB%A6%AC%EB%93%AC/)
4. [MDN 문서](https://developer.mozilla.org/ko/docs/Web/HTML/HTML5_%EB%AC%B8%EC%84%9C%EC%9D%98_%EC%84%B9%EC%85%98%EA%B3%BC_%EC%9C%A4%EA%B3%BD)
5. [슬라이드 쉐어 - 아웃라인 알고리즘](https://www.slideshare.net/NULINTS/2014-html5)

<br />

### 11. img

1. 웹 접근성을 고려해 `alt` 어트리뷰트를 부여해야 한다.
2. `alt` 어트리뷰트에 빈 값을 넣으면 스크린 리더는 해당 이미지를 읽지 않는다. 그렇다고 해서  `alt` 속성을 아예 할당하지 않으면 스크린 리더는 `src` 어트리뷰트를 읽어주게 된다. 보통 장식용으로 사용할 때 `alt` 속성에 빈 값을 넣어준다.
3. `title` 어트리뷰트는 `alt`만으로 설명이 부족할 때 보충 설명을 하는 역할이다. 모든 태그에 사용할 수 있다.
4. `alt`와 `title`의 용도는 다르기 때문에 같은 값을 설정해서 중복을 발생시키는 것은 좋은 방식이 아니다.
5. 웹 사이트의 성격을 고민해봤을 때, 이미지라 하더라도 그 뜻과 닿아있다면 heading으로 처리해도 적절하다. 적절한 텍스트를 넣은 후에 IR 기법으로 글자를 덮어씌워 처리하면 된다.

<br />

### 12. a

1. `onclick="window.open()"`을 이용하면 새 창을 열어주지만 새 창을 읽어주지 않아서 키보드 포커스가 새로운 창을 인지할 수 없다. 이 때 접근성을 제어하고 싶다면 `title="새창"`으로 알려주면 된다.
2. `target="_blank"`로 새 창을 띄울 수 있다.
3. HTML5에서 `a`는 transparent(투명) 모델로 바뀌었다. 따라서 block 요소를 a 요소로 묶을 수 있고 그 전체 영역에 링크가 적용된다.
4. ul 요소는 반드시 1개 이상의 자식 li 요소를 포함해야 하기 때문에 li 요소를 a로 마크업한다면 잘못된 접근이다.
5. button 요소를 a로 마크업하는 것 역시 잘못된 접근이다. 링크 안에 링크를 포함할 수 없다.

<br />

### 13. 문서 구조화

1. 마크업을 할 때, 항상 문서 및 콘텐츠의 논리적 순서를 고려해야 한다.

<br />

### 14. 정의형 목록 dl

1. 정의형 목록을 만들 때 `dl` 태그를 사용한다.
2. `dt`와 `dd`는 1:1, 1:n, n:1 대응 모두 가능하다.

<br />

### 15. 시맨틱 태그

1. `span`이나 `div`는 단순히 중립적인 그루핑 요소로 **non-semantic**하다. 보통 스타일링을 위한 용도로 사용한다.

<br />

### 16. WAI-ARIA

1. 웹 어플리케이션에 접근성을 개선하거나 보장할 수 있는 스펙
2. 기존 스펙과 중복되는 상황에서는 ARIA 대신 기존 스펙을 따르는 것이 좋다.
3. 이미 heading으로 명시한 상황에서 title로 중복된 내용을 명시해야 하는 상황이라면 `aria-labelledby`를 사용하는 것이 좋다.
4. `aria-labelledby`와 `aria-describedby`

- `aria-labelledby`: 명시적으로 딱 떨어지는 단어
- `aria-describedby`: 문장 단위를 명시할 때

5. `aria-hidden`: 읽지 않아도 되는 정보 처리
6. [정보화 지능원 github 계정](https://github.com/niawa)
7. [웹 접근성 연구소](www.wah.or.kr)

<br />

### 17. figure

1. caption을 포함할 수 있는 요소는 모두 figure로 마크업할 수 있다.
2. figure는 자식 요소로 figcaption을 가질 수 있다.

<br />

### 18. time

1. 시간에 관련된 정보를 마크업할 때 사용한다.
2. 반드시 `datetime` 속성을 가져야 한다.

<br />

### 19. strong과 em

1. 단순히 꾸밈을 위한 용도라면 `span`으로 마크업하면 되겠지만, 의미를 갖는 영역이라면 시맨틱한 `em`, `strong`으로 마크업한다.
2. `strong`은 좀 더 강한 강조, `em`은 비교적 약한 강조를 할 때 사용한다.

<br />

### 20. ol

1. `ol`은 순서 있는 리스트를 마크업할 때 사용한다.
2. 리스트의 순서를 `list-style: none`으로 지정하고 배경 이미지로 처리한다면 스크린 리더가 단순한 배경 이미지를 인식하지 못하므로 문제가 될 수 있다. `overflow: hidden`으로 화면에서 숨김 처리한 후 가상 요소를 적절히 사용한다면 이 문제를 해결할 수 있다.

<br />

### 21. blockquote와 q

1. `blockquote`와 `q`는 모두 인용구를 처리할 때 사용하는 태그이다.
2. `cite` 어트리뷰트로 출처 정보를 밝힐 수 있다.
3. 저작권에 대한 경각심을 가질 필요가 있다. 책에서 인용한 정보라면 *ISBN Number*를 남기면 된다.

<br />

#### 21.1 blockquote

1. `blockquote`는 block 형태의 인용 관련 태그이다.

<br />

#### 21.2 q

1. `q`는 inline 형태의 인용 관련 태그이다.

<br />

### 22. 문서 내에 header나 footer는 반드시 1개?

1. 본문의 footer 이외에 article 영역 또한 따로 footer를 가질 수도 있다.
2. header나 footer 모두 section이나 article 또는 body 안에 각각 존재할 수도 있다.

<br />

### 23. footer 

1. footer 영역은 일반적인 컨텐츠가 아닌 사이트 연락처와 저작권을 나타내는 영역이므로 굳이 제목을 따로 부여하지 않아도 된다.

<br />

### 24. address

1. 주소에 관한 정보를 마크업할 때 `address` 태그를 사용한다.
2. 본문에서 주소에 관한 정보를 나타낼 때는 `p` 태그를 사용한다. `address`는 footer에서만 사용하는 태그이다.

<br />

### 25. br

1. line break의 약자이다.
2. 줄바꿈 처리할 때 `br`을 사용하는 것보다 줄바꿈할 영역을 `span`으로 묶어서 처리한다.

<br />

### 26. picture

1. 기기 특성에 따라 다른 이미지를 지정(아트 디렉션)하려는 경우 `picture` 요소를 사용한다.
2. `srcset` 및 `x` 설명자를 `img` 요소에 사용하면, 다른 밀도를 선택할 때 사용할 최적의 이미지에 대한 힌트를 브라우저에 제공할 수 있다.
3. 마지막에 img 태그를 삽입하는 것은 source 요소를 해석할 수 없을 시에 대비한 폴백(fallback)이다. source를 보여줄 수 있으면 img는 무시된다.
4. [picturefill](https://github.com/scottjehl/picturefill/blob/master/src/picturefill.js)

<br />

### 27. 이미지는 Block으로 감싸는 것이 좋다.

1. 사용자가 올린 이미지가 가로로 길지, 세로로 길지 미리 알 수 없으므로 부모 요소의 높이와 너비를 정사각형으로 맞춘 후 `overflow: hidden`으로 처리하여 해당 크기에 맞게 들어올 수 있도록 할 수 있다.