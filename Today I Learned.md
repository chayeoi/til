# Today I Learned

## 01 HTML5

### 1. Web은 Internet의 수많은 서비스 중에 하나일 뿐이다.

<br />

### 2. 웹 접근성을 보장하는 방법

1. 가이드라인 준수(WCAG 2.0)
2. 웹 표준 준수

<br />

### 3. 화면 구성 분할

1. 기본적으로 다음과 같은 단위와 순서로 분할한다.

- 헤더
- (네비게이션)
- 콘텐츠
- 푸터

2. 반복되지만 정보를 가진 영역이 아닐 때 그 의미에 맞게 네이밍하고 div 또는 article을 사용한다.
3. div 태그의 'role' 속성을 이용해 의미를 부여해도 괜찮지만, 역할 모델을 쓰느니 시맨틱 태그를 사용하여 분할하는 것이 더 바람직하다.
4. `div.container`로 영역을 감싸는 것은 필수가 아니라 옵션이다.

<br />

### 4. HTML5 기초

1. 특수문자

- `&lt`: less than, <
- `&gt`: greater than, >

2. head 설정

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

<br />

> #### `tabindex`
>
> 1. `tabindex`의 value가 0인 이유?
>
> - `tabindex`는 링크 관련 태그 및 `input` 태그 이외의 요소가 키보드 포커싱을 받을 수 있도록 설정하는 어트리뷰트
> - `tabindex: 0`은 순차적으로 포커싱을 받을 수 있도록 하고,  `tabindex: 1`은 인접한 요소 중에 `tabindex` 속성을 가진 요소를 탐색한 후 해당 요소들에 대해 인덱싱한다.
> - `tabindex: -1`은 모든 요소들에 대하여 탭 포커스에서 제외시킬 수 있다.

<br />
<br />

## 02 CSS3

### 1. `overflow: hidden`의 특성

1. `overflow: hidden`은 `overflow: visible`일때는 인식하지 못 했던 몇 가지를 인식하게 한다.

- **float** 처리된 요소
- 자식 요소의 **margin 값**

2. 만약 `overflow` 프로퍼티의 값이 `visible`이고 내부 여백(padding)과 테두리(border)가 없는 상태에서 자식 요소가 'margin-top'을 가지고 있을 경우, 마치 요소 자신의 'margin-top'처럼 보여진다. 하지만, `hidden`인 상태에서는 그 'margin-top'이 자신의 요소 안에서 이뤄진다. 물론 부모 요소가 해당 margin이나 border를 가지고 있다면 `hidden`처럼 인식할 수 있다.
3. `overflow: hidden;`*을 적용하면 content가 border 이외로 흘러넘치는 영역을 숨길 뿐, padding 영역에서는 content를 숨기지 않고 그대로 표시한다.

<br />

> #### Box Model
>
> 1. 부모 요소 내에 위치한 자식 요소에 margin을 설정하면 그 margin은 부모 요소 내의 Content Box를 기준으로 설정되는지?
>
>    → Me: 해보니깐 그런 것 같음. `overflow: hidden`일 때 자식 요소의 margin을 인식한다는 글을 보니깐 아닌 것 같기도 하고?
>
> 2. `overflow: visible`일 때 자식 요소의 margin을 마치 자신의 margin처럼 인식한다는데, 그렇게 되면 해당 요소의 margin은 자신과 자식 요소의 margin 중 어떤 것이 적용되는 것인지?
>
> 3. `overflow: visible`이고 `border-width: 1px`일 때 자식 요소의 margin은 border를 기준으로 인식하는 듯 한데, 만약 padding에도 값이 있으면  padding 영역으로부터 margin을 인식? 아니면 똑같이 border를 기준으로 인식?

<br />

### 2. 레이아웃

1. 높이는 auto로 설정하여 컨텐츠에 따라 자연스럽게 늘어나게 하는 것이 좋다.
2. 배치 조정 방법

- `float`: 구형 브라우저까지 고려
- `flexbox`: 모던 브라우저에 맞출 때 사용
- `grid`: 모던 브라우저에 맞출 때 사용

3. flexbox(CSS3) vs float(CSS2)
4. 레이아웃 구성 시 헷갈리지 않도록 `box-sizing: border-box`로 설정한다.

<br />

#### 2.1 flexbox

1. `display: flex: 해당 요소 안의 모든 엘리먼트가 **flex item으로 변경**된다.

2. `flex-direction`의 default는 **row**이다.

3. 모바일 웹 개발 시 box-sizing은 **content-box보다 border-box가 더 유리**하다.

4. `justify-content: flex-direction`에 설정된 방향에 대한 정렬 설정 (**메인 축**)

5. `align-items`: 교차점 정렬 설정 (**교차점**)

6. `justify-content`의 default는 **flex-start**이다.

7. `justify-content`

   ```css
   .between {
     justify-content: space-between; /* 남는 역역을 잘라서 between 값을 자동 계산 */
   }

   .around {
     justify-content: space-around; /* 양쪽에 여백까지 할당 */
   }
   ```


8. `align-items`는 해당 요소 내의 모든 아이템을 정렬할 때, align-self는 자신만 정렬할 때 사용한다.

9. 요소 간에 정렬 순서를 변경할 때에는 마크업 순서로 배치를 바꾸는 것이 아니라 `flexbox`의 order 프로퍼티를 사용하여 정렬 순서를 변경한다. order 프로퍼티의 **default는 0**이다.

10. `flexbox`는 자신의 container보다 width가 클 때, **각 아이템의 width를 알아서 비율에 맞게 계산**한다.

11. `flexbox`의 width가 container보다 width를 넘었을 때 줄을 변경하고 싶다면 `flex-wrap: wrap`을 설정하면 된다.

12. `flex-wrap`의 **default는 no-wrap**이다.

13. `flex-flow`로 `flex-direction`과 `flex-wrap`을 한 번에 설정할 수 있다.

14. `align-items`는 단일 행, 열을 정렬할 때 사용하고 `align-content`는 다중 행, 열을 정렬할 때 사용한다.

<br />

> #### `justify-content: space-around`
>
> 사이 여백과 끝 여백이 다르게 나타나는데 그 계산 방법은 그리드와 관련이 있다.

<br />

#### 2.2 float

1. `float`의 **default는 none**이다.
2. `float`는 left, right 정렬만 가능할 뿐, 속성 값에 center를 주는 것은 불가능하다.
3. `clear` 프로퍼티는 **Block Element**에만 사용 가능하다.
4. 가상 요소 선택자(:after, ::after)
   - :을 하나만 찍는 것은 예전 방식이고, 2개를 찍는 것이 요즘 방식이다.

<br />

#### 2.3 Grid

1. 제일 좋은 그리드 컬럼은 12 컬럼 기반이고, 좀 복잡할 경우 16 컬럼을 사용한다. 더 세밀함이 요구될 때에는 24 컬럼을 사용한다.

<br />

### 3. 색상 조정

1. rgb 16진수 방식

- 앞에서부터 두 자리씩 Red, Green, Blue 색상을 나타낸다.
- 색상별로 같은 값이 반복될 때, short-hand로 세 자리로 축약하여 나타낼 수 있다. (#AA55BB → #A5B) 

2. rgb 10진수 방식

- 앞에서부터 Red, Green, Blue, 불투명도를 나타낸다. (rgba(255, 0, 0,  0.5))

<br />

### 4. vh(Viewport Height)

1. 높이를 나타내는 단위로 px, %, em 이외에 vh를 사용할 수 있다.
2. 1vh는 디바이스 화면 높이의  1 / 100의 크기를 의미한다.
3. vh와 % 모두 상대 크기를 나타내는 단위로 헷갈릴 수 있다.

- vh: 디바이스 화면 높이를 기준으로 상대적 크기를 정함.
- %: 해당 요소가 속한 부모 요소의 content 영역의 높이를 기준으로 상대적 크기를 정함. 

<br />

### 5. Selector

1. 그룹 선택자

- 그룹 선택자(,)를 이용하면 공통된 성질을 한 번에 선언할 수 있다.
- 모든 스타일에 대해 공통으로 적용할 수 있으므로 유지보수하기 편리하다.

2. 같은 `header`라도 본문과 섹션에서 사용되는 `header`는 서로 다르므로 서로 다른 클래스명으로 스타일을 지정한다.

<br />

### 6. 가운데 정렬

1. CSS2에서는 가운데 정렬이 없지만(`margin: 0 auto`는 트릭에 불과하다) CSS3에서는 `flexbox`를 이용하면 가운데 정렬이 가능하다.
2. `margin: 0 auto`는 브라우저 뷰포트에서 width를 제외한 나머지를 자동으로 절반으로 나누어 처리한다. 즉, 실제로 가운데 정렬이 일어난 것이 아니라 **margin 영역은 눈에 보이지 않는 영역이기 때문에 가운데 정렬처럼 보이는 것**이다.
3. 수평 정렬: `position` 프로퍼티 설정 후 `left: 50%`와 `transform: translateX(-50%)`를 적용
4. 수직 정렬: `position` 프로퍼티 설정 후 `top: 50%`와 `transform: translateY(-50%)`를 적용
5. `line-height`를 이용하여 수직 정렬을 할 수 있다.

- line-height에서 font-size를 제외한 나머지를 이등분해서 상하 여백을 설정한다.
- 그러나 글꼴에 따라 정확히 가운데 정렬이 되지 않을 수도 있다.

6. `flex-box`의 `align-items: center`를 이용하여 정렬할 수도 있다.

<br />

> #### `translate` 프로퍼티
>
> 1. 더 공부해보기
>
> `line-height` 프로퍼티
>
> 1. 상하 여백은 margin과 padding  중 어떤 것에 해당하는지?

<br />

### 7. outline

1. `border` 프로퍼티는 border의 속성을 정의하고, `outline` 프로퍼티는 border의 바깥쪽 선 속성을 정의한다.

<br />

### 8. SASS

1. CSS 전처리기이다. 브라우저는 사스를 바로 해석할 수 없고, 컴파일(빌드)로 CSS로 변환 후 해석을 시작한다.
2. SASS를 이용해 CSS를 프로그래밍적으로 다룰 수 있다.

<br />

### 9. `display: none`와 `visibility: hidden`

1. `display: none`은 영역까지 감춘다.
2. `visibility: hidden`은 영역은 남겨둔다.

<br />

### 10. 음수 margin

1. padding은 음수를 사용할 수 없다.

<br />

### 11. `position`

1. `position` 프로퍼티 이용 시, 먼저 마크업된 태그가 아래에 놓이게 된다.
2. 간혹 `position`과 `float`를 같이 사용할 수 없냐고 묻는 사람들이 있는데, 같이 사용될 수 있다.
3. `position` 프로퍼티의 기준점은 `box-sizing: content-box`일 때 padding 영역을 기준으로 하고, `box-sizing: border-box`일 때 border 영역을 기준으로 한다.
4. `position: relative`는 자시의 top-left를 기준(0, 0)으로 하여 움직인다.

<br />

> #### `z-index`
>
> 1. `z-index`의 기본값은?

<br />

### 12. 구체성 점수

1. 이진수로 표현된다.
2. !important는 VIP이다.
3. 같은 구체성 점수일 때 나중에 정의한 부분이 적용된다.

<br />

### 13. `background`

1. `background` 지정

   ```css
   .example1 {
     background: url('url'); /* 'url'을 배경으로 지정 */
   }

   .example2 {
     background: linear-gradient(to bottom, #f4bd30 0%, #ed802d 30%, #ed802d 70%, #f4bd30 100%); /* 배경에 그라디언트를 적용 */
   }
   ```

2. 하나의 속성에 값을 두 번 지정하면 나중에 적용된 속성을 최종적으로 인식한다.

<br />

### 14. `border-radius`

1. `border-radius: 0 0 15px 15px`: bottom-right와 bottom-left에 x와 y 방향의 반지름이 15px인 곡률을 생성
2. `border-radius: 0 0 15px 15px / 0 0 10px 10px`: x와 y 방향의 반지름을 다르게 설정할 수 있다. 

<br />

### 15. 디자인 시안에 각 속성을 적어보면서 체크한다.

<br />

### 16. 상속

1. 배치와 관련된 속성이 아닌 것들은 보통 상속된다.
2. 배치와 관련된 속성들은 상속되지 않는다.

<br />

### 17. `cursor: pointer`

1. `cursor: pointer`는 해당 요소에 커서가 위치했을 때 커서의 모양을 포인터로 설정한다.

<br />

### 18. `text-shadow`

1. `text-shadow` 프로퍼티

   ```css
   .example1 {
     /* 각 값은 순서대로 offset-x, offset-y, blur, color를 나타낸다. */
     text-shadow: 1px 1px 0 #000; 
   }

   .example2 {
     /* 그림자의 두께를 조정하려면 다음과 같이 설정한다. */
     text-shadow: 1px 1px 5px #000, 2px 2px 5px #000, 3px 3px 5px #000, 4px 4px 0 #000;
   }

   .example3 {
     /* 그림자를 활용한 윤곽체를 만들려면 다음과 같이 설정한다.  */
     text-shadow: 1px 0 0 #000, 0 1px 0 #000, -1px 0 0 #000, 0 -1px 0 #000;
   }

   ```

<br />

### 19.  `box-sizing`

1. `box-sizing: content-box`는 패딩 영역까지 포함한 넓이이다.
2. `background-color` 프로퍼티를 적용하면 padding 영역까지 적용된다.

<br />

### 20. `white-space: nowrap`

1. `white-space`은 공백문자 처리에 관한 방법이다.
2. `white-space: nowrap`은 상자 크기가 작더라도 줄바꿈을 하지 말고 한 줄에 보여달라는 뜻이다.

<br />

### 21. `display`

1. 작은 상자가 큰 상자를 포함하는 건 바람직하지 않다.
2. block > inline-block > inline

<br />
<br />

## 03 Javascript

<br />
<br />

## 04 ES6

<br />
<br />

## 05 React.js

<br />
<br />

## 06 Basic

### 1. 컴파일 언어 vs 인터프리트 언어

1. 컴파일 언어: 파일에 오류가 있어야 정확한 결과를 보여준다.
2. 인터프리트 언어: 어플리케이션이 코드를 순차적으로 한 줄씩 해석

<br />
<br />

## 07 Git

### 1. 과제 및 강의 내용 요약본 제출 방법

1. [https://github.com/kwonjounghun/FDS_7s](https://github.com/kwonjounghun/FDS_7s)를 자신의 저장소로 fork한다.

2. fork한 저장소를 clone한다.

   ```bash
   git clone https://github.com/chayeoi/FDS_7s.git
   cd FDS_7s
   ```

3. upstream이라는 이름으로 새로운 원격 저장소를 추가한다. (origin 다음 저장소 이름을 관례적으로 upstream이라 명명)

   ```bash
   git remote add upstream https://github.com/kwonjounghun/FDS_7s.git
   ```

4. 정리한 내용을 자신의 폴더 안에 파일명은 20171116.md로 저장한 후 자신의 원격 저장소에 push한다.

   ```bash
   git add .
   git commit -m "20171116 과제"
   git push origin master
   ```

5. 자신의 저장소에서 'Pull requests' → 'New pull request'한다.

6. request 내용: '20171116 김찬연 과제입니다.'

7. 과제를 다시 받아오려면

   ```bash
   git pull upstream master
   ```

8. fork를 뜬 저장소로 직접 push하려면 해당 저장소로부터 키를 받아야 한다. 키를 받지 않아도 pull은 가능하다.



> #### github 계정 2개 사용법
>
> 1. 하나의 맥에서 github 계정을 2개 사용하려면?


<br />
<br />

## 08 ETC

### 1. Tool

1. Slack
2. Trello
3. Git
4. Google Drive
5. Naver Cafe

<br />

### 2. Shortcut

1. VScode

- 커서가 위치한 줄 삭제: cmd + shift + K
- 커서가 위치한 코드 라인 변경: opt + ↑, ↓
- 명령 팔레트 실행: cmd + shift + P
- indent, miniMap, fontSize 수정: formatter config를 통해 수정 가능
- 약어로 래핑: 래핑할 블록 선택 → 명령 팔레트 실행 → 약어로 래핑, cmd + G

2. Emmet

- !: 기본 골격 완성

<br />

### 3. Naming Convention

1. 카멜 케이스: mainContent
2. 파스칼 케이스: MainContent
3. 스네이크 케이스: main_content
4. 케밥 케이스: main-content

<br />

### 4. DTD(Document Type Definition)

1. Strict DTD
2. Transitional DTD
3. Frame DTD

<br />

### 5. Bookmark(/FDS07)

1. ***[seulbinim/FC-FDS](https://github.com/seulbinim/FC-FDS)***
2. ***[Emmet](https://docs.emmet.io/)***
3. ***[W3schools](https://www.w3schools.com/)***
4. ***[w3.org](https://www.w3.org/)*** -  'Markup Validation Service'를 이용하여 HTML 문법을 검사할 수 있다.
5. ***[html5test](html5test.com)*** - 사용 중인 브라우저가 HTML5 스펙을 얼마나 지원하는지 확인할 수 있다.
6. ***[css3test](http://css3test.com/)*** - 사용 중인 브라우저가 CSS3 모듈을 얼마나 지원하는지 확인할 수 있다.
7. ***[csszengarden](http://csszengarden.com/)*** - 하나의 html 문서에 대해 다양한 CSS 레이아웃을 적용해볼 수 있다.
8. ***[naradesign](naradesign.net/wp/)*** - 웹 관련 기술 블로그
9. ***[flexboxfroggy](http://flexboxfroggy.com/)***
10. ***[Responsive Logos](http://responsivelogos.co.uk/)***
11. ***[Troy - Responsive web tester](http://troy.labs.daum.net/)***
12. ***[Can I use](https://www.caniuse.com/)***
13. ***[Nth master](http://nthmaster.com/)***
14. ***[Colorzilla](http://www.colorzilla.com/gradient-editor/)***
15. ***[Prefix free](https://leaverou.github.io/prefixfree/)*** - 해당 사이트에서 제공하는 스크립트 파일을 html 파일에 연동하면 css 파일에 자동으로 prefix를 추가해준다. (브라우저 별로 다른 지원이 필요할 경우에 사용. 특히 gradient를 적용할 때 prefix를 붙이는 습관을 들여야 한다.)
16. ***[Fontello](http://fontello.com/)*** - 아이콘을 폰트로 변환해준다.

<br />

### 6. CLI Command

1. `ls`: List의 약어. 현재 위치한 디렉토리 내의 파일들을 나열한다.
2. `cd`: Change Directory의 약어
3. `touch test.html`: test.html 생성
4. `rmdir dirname`: 빈 디렉토리 dirname 삭제
5. `vim config`: config 파일을 vim editor로 열기

<br />

### 7. Book Recommend

1. 제프리 젤드만의 웹 표준 가이드

<br />

### 8. VS Extension

1. Path Autocomplete: path 자동 완성 기능
2. ​

<br />

### 9. User Agent Style 

1. 브라우저가 갖고 있는 default style을 의미한다.

<br />

### 10. Reference

1. http://naradesign.net/wp/2008/05/27/144/
2. 웹 접근성 가이드라인: WCAG 4대 원칙

<br />

### 11. Tip

1. 영문 번역이 어색할 때 일본어 문서 보기가 있으면 일본어 문서를 한국어로 번역한다. (일본어 어순이 한국어 어순이랑 비슷하기 때문)

<br />

### 12. 경로 설정

1. ''./css/style.css'와 'css/style.css'는 같은 의미이다.