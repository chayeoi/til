# 노치 디스플레이 환경 최적화하기

아이폰X에서 적용된 노치 디스플레이 등 기기 디스플레이의 형태가 다양해지면서 웹 앱을 개발할 때도 이 부분에 대한 대응이 필요해졌다. 대표적인 이슈로는 아이폰X의 Portrait 모드에서는 뷰포트가 노치 영역까지 공간을 정상적으로 차지하지만, Landscape 모드로 변경 시 iOS Safari가 자동으로 패딩을 적용하여 상단 영역을 밀어낸다는 문제가 있다.

## `viewport-fit` 설명자(`viewport-fit` Descriptor)

`viewport meta` 태그에 `viewport-fit=cover` 설명자를 설정하면 Landscape 모드에서도 자동 적용된 패딩 영역을 제외한 전체 영역을 차지하도록 만들 수 있다.

```html
<meta name="viewport" content="width=device-width, minimal-ui, viewport-fit=cover">
```

## CSS `env()` 함수

위와 같이 `viewport-fit` 설명자만 설정할 경우, 중요한 내용이 디스플레이 밖으로 밀려나는 문제가 발생할 수 있다. 이 설명자를 사용할 때 CSS `env()` 함수에 Safa Area Inset 변수를 함꼐 설정하여 이 문제를 방지할 수 있다.

CSS `env()` 함수는 사용자 에이전트에서 정의된 환경변수 값을 CSS에 삽입하는 용도로 사용된다. CSS 커스텀 속성을 삽입하는 데 사용하는 `var()` 함수와 비슷해보이지만, 다음 두 가지 차이점이 있다.

1. 사용자가 정의한 값이 아닌 사용자 에이전트에서 정의된 값을 삽입하는 용도로 쓰인다.
2. 커스텀 속성의 경우 그 값이 선언된 요소로 사용할 수 있는 범위가 한정되지만, 환경 변수는 문서 전체 범위에서 지정된 값이다.

`safe-area-inset-*` 형식으로 환경 변수 값을 읽어올 수 있으며, 이를 통해 직사각형 형태가 아닌 디스플레이에서도 콘텐츠가 항상 안전 영역에 보여지도록 만들 수 있다.

```css
.wrapper {
  padding:
    /* 폴백 값 없이 사용 */
    env(safe-area-inset-top);
    env(safe-area-inset-right);
    env(safe-area-inset-bottom);
    env(safe-area-inset-left);

    /* 폴백 값과 함꼐 사용 */
    env(safe-area-inset-top, 20px);
    env(safe-area-inset-right, 1em);
    env(safe-area-inset-bottom, 0.5vh); 
    env(safe-area-inset-left, 1.4rem);
}
```

> 주의: 다른 CSS 속성들과는 달리 사용자 에이전트에서 정의된 속성 이름은 대소문자를 구분해야 한다.

## 참고

* [[META] IOS11의 viewport-fit=cover 속성 | F.E.D](https://frontdev.tistory.com/entry/META-IOS11%EC%9D%98-viewport-fitcover-%EC%86%8D%EC%84%B1)
* [env() | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/env)
