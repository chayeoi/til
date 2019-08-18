# 텍스트 말줄임 여부 감지하기

콘텐츠 영역의 텍스트가 자신을 둘러싼 컨테이너 영역의 너비보다 길어졌을 때, 다음과 같이 CSS 속성을 활용하면 넘쳐난 텍스트를 말줄임 처리할 수 있다.

```css
.container {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 240px;
}
```

그런데 이렇게 콘텐츠가 말줄임 처리되어있을 경우, "더 보기" 버튼을 제공함으로써 사용자가 말줄임 처리된 전체 텍스트를 볼 수 있도록 하기 위한 방법이 필요했다.

방법을 검색해본 결과, Stackoverflow에서 단 한줄로 짜여진 함수를 찾을 수 있었다. Chrome에서 우선적으로 적용해보니 잘 동작하는 것 같은데, 답변에 달린 코멘트를 보니 특정 브라우저 환경에서 동작하지 않는다는 이야기가 있다. 흠.. 딱히 문제가 생길 만한 부분은 없어보이는데, 다른 브라우저에서 직접 테스트를 진행해보는 수 밖에 없을 것 같다.

```javascript
const isEllipsisActive = element => (element ? element.offsetWidth < element.scrollWidth : false);
```

## 참고

* [HTML text-overflow ellipsis detection | Italo Borssatto, Stackoverflow](https://stackoverflow.com/a/10017343/10656174)
