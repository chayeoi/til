# 숨김 콘텐츠

문서의 구조상 존재할 필요가 있지만 화면 상에는 보여질 필요가 없는 콘텐츠(ex: `legend` 요소)를 CSS로 숨김 처리할 수 있는 다양한 방법이 존재한다.

## 비권장 방식(Not recommended)

접근성을 고려하지 않을 때 사용할 수 있는 방식이다.

### `display` 속성을 `none`으로 변경

화면에서 감춰지는 뿐만 아니라, 스크린 리더와 같은 보조장치로 접근할 수 없게 만든다. 물론 각 스크린 리더마다 차이가 있어서, `display: none`으로 처리된 콘텐츠를 읽어주는 기기도 존재하기는 한다. 그렇다고 하더라도 모든 기기에서 읽을 수 있는 방식은 아니므로 권장되지 않는다.

```css
legend {
  display: none;
}
```

### `visibility` 속성을 `hidden`으로 변경

콘텐츠는 숨겨지지만, 원래 자신이 차지했던 공간은 그대로 남아있게 된다. 이 또한 보조 장치에서 접근할 수 없게 만들기 떄문에 권장되지 않는다.

```css
legend {
  visibility: hidden;
}
```

### `width`와 `height` 속성을 `0`으로 변경 후 `overflow: hidden` 처리

스크린 리더는 가상 커서를 이용해서 눈에 보이지 않는 콘텐츠를 탐색한다. 그런데 이때 `width`와 `height` 속성이 `0`으로 설정되어있으면 내용이 없는 콘텐츠라고 인식해버리게 된다.

```css
legend {
  width: 0;
  height: 0;
  overflow: hidden;
}
```

## 권장 방식(Recommended)

접근성을 고려한 숨김 콘텐츠로 만들고 싶다면 다음 방식을 사용해야 한다.

우선, 콘텐츠 상자의 크기를 `width: 1px; height: 1px;`로 조정한다. 앞서 말했던 이유와 같은 접근성 이슈때문에, 너비와 높이를 `0`으로 만들지 않고 `1`로 설정하는 것이다. 또한 넘치는 텍스트를 숨김 처리하기 위해 `overflow: hidden`을 설정한다.

```css
legend {
  width: 1px;
  height: 1px;
  overflow: hidden;
}
```

여기까지 적용한 후 결과를 확인해보면, 너비와 높이가 여전히 1px씩 남아있기 때문에 경우에 따라 콘텐츠가 완전히 숨겨지지 않았을 수도 있다. 이 부분에 음수 마진(Negative margin)을 1px씩 적용하게 되면 요소의 바깥으로 완전히 밀어낼 수 있게 된다.

```css
legend {
  width: 1px;
  height: 1px;
  overflow: hidden;
  margin: -1px;
}
```

마지막으로 `position: absolute`와 `clip: rect(0, 0, 0, 0)`을 지정한다. `cilp` 속성에 `rect()` 함수를 사용하여 보여질 영역을 사각형 모양으로 잘라내는 것인데, 이 함수는 `position`이 `absolute` 또는 `fixed`로 설정된 요소에만 사용 가능하다. `rect(0, 0, 0, 0)`으로 설정함으로써 요소는 화면에서 완전히 숨겨지게 된다.

```css
legend {
  width: 1px;
  height: 1px;
  overflow: hidden;
  margin: -1px;
  position: absolute;
  clip: rect(0, 0, 0, 0);
}
```

여기까지 적용했더라도 사용하는 브라우저의 종류에 따라 작은 점 형태로 보여지는 경우가 있다. 이런 경우라면 `font-size: 0; line-height: 0;`을 추가하면 된다. 최종 선언된 속성들의 모음은 다음과 같을 것이다.

```css
legend {
  width: 1px;
  height: 1px;
  overflow: hidden;
  margin: -1px;
  position: absolute;
  clip: rect(0, 0, 0, 0);
  font-size: 0;
  line-height: 0;
}
```