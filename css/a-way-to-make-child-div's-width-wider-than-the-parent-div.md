## 특정 요소의 자식 요소 너비가 뷰포트 영역에 꽉 들어차도록 하기

보통 문서의 레이아웃을 잡을 때 이런 요구 사항이 생기는데, 기본적으로 `postion` 속성을 이용하는 방법을 생각해볼 수 있다.

```css
.child {
  position: absolute;
  left: 0;
  right: 0;
}
```

그러나 조상 요소 중에 위치를 갖는 요소가 있다면 absolute 포지셔닝의 기준이 뷰포트가 아닌 해당 요소가 되기 때문에 원하던 것과 다를 결과를 얻을 수 있다. 또한 absolute 포지셔닝된 `.child` 의 공간을 뒤에 있는 요소들이 인식하지 못하기 때문에 이런 부분까지 모두 고려해야 하는 문제도 있다.

`vh` 단위를 사용하여 뷰포트 너비에 맞게 너비를 설정한 후 위치를 조정하는 방식으로 처리하면 이런 문제들을 해결할 수 있다.

```css
.child {
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
}
```

- [Is there are way to make a child DIV's width wider than the parent DIV using CSS? | Stackoverflow](https://stackoverflow.com/questions/5581034/is-there-are-way-to-make-a-child-divs-width-wider-than-the-parent-div-using-css)
