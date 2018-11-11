# 크로스 브라우징 문제 해결하기

[Modernizr](https://modernizr.com/)를 활용하면 필터링 방식으로 크로스 브라우징 문제를 해결할 수 있다.

1. 먼저 [Modernizr Download](https://modernizr.com/download?setclasses)에서 필터링 할 기능을 검색한 후 선택한다.

2. 원하는 기능을 모두 선택한 후, BUILD 버튼을 눌러 Modernizr 커스텀 코드를 생성한 후, 다운로드 받는다.

3. 다운로드 받은 Modernizr 커스텀 라이브러리를 `</head>` 앞에 `<script>` 요소를 사용해 로드 하는 코드를 추가한다.

```html
  <!-- ... -->
  <script src="modernizr-custom.js"></script>
</head>
```

4. 이어서 `<html>` 요소에 class="no-js"를 추가한다. (JavaScript 미지원 환경 임을 필터링 하기 위한 목적)

```html
<!DOCTYPE html>
<html lang="ko-KR" class="no-js">
```

5. 브라우저 개발도구에서 요소 탭을 확인해보면 `<html>` 요소 `class` 속성에 동적으로 필터링 추가 선택한 기능이 사용자 브라우저에서 지원하는지 유무를 값으로 설정해준다. 만약 지원하지 않는 기능이 있다면 `no-` 접두사가 붙은 값이 설정된다.

예를 드어 CSS Flex를 지원하는 브라우저는 `flexbox`, 미지원 브라우저는 `no-flexbox`로 설정된다.

6. 이제 Modernizr를 사용할 준비가 마무리 되었다. 아래 코드와 같이 `<html>` 요소에 설정된 클래스를 통해 코드를 분기하여 디자인하면 크로스 브라우징 대응이 가능하다.

```css
.box {
   /* flexbox, rem 단위를 지원하는 브라우저에 반영할 디자인 */
}

.no-flexbox .box {
   /* flexbox를 지원하지 않는 브라우저에 반영할 디자인 */
}

.no-cssremunit .box {
   /* rem 단위를 지원하지 않는 브라우저에 반영할 디자인 */
}
```

## References

* [크로스 브라우징 / CSS모듈화 / 반응형 관련 질문드립니다. - Hashcode](https://fast-frontend.hashcode.co.kr/questions/5824/%ED%81%AC%EB%A1%9C%EC%8A%A4-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A7%95-css%EB%AA%A8%EB%93%88%ED%99%94-%EB%B0%98%EC%9D%91%ED%98%95-%EA%B4%80%EB%A0%A8-%EC%A7%88%EB%AC%B8%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4)
* [Modernizr](https://modernizr.com/)
