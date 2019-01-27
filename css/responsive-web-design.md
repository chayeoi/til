# 반응형 웹 디자인

## 반응협 웹 프로젝트를 시작하기 전에 고려해야 할 점

1. 콘텐츠 전략(Content strategy)
2. 유연한 그리드 레이아웃(Flexible grid layout)
3. 유연한 이미지 / 미디어 (Flexible images and media)
4. 디바이스 픽셀 밀도 (Device pixel density)
5. 중단점 / 미디어 쿼리 (Breakpoint and Media queries)

### 1. 콘텐츠 전략

콘텐츠에 대한 사전 분석 없이 좋은 서비스는 제작될 수 없다. 각 뷰에서 그려질 콘텐츠 구조를 치밀하게 분석하지 않고는 좋은 사용자 경험을 제공하기 어렵다.

#### 1.1 콘텐츠 구성

고정된 가로 폭과 해상도에서 콘텐츠가 영구적으로 자리잡았던 디자인은 과거의 것이 되었다. 다양하게 변화되는 가로 폭과 해상도에 최적의 경험을 제공할 수 있는 무용술이 요구된다.

#### 1.2 콘텐츠 쌓임

4컬럼 레이아웃 디자인의 화면 폭이 줄어들 경우 콘텐츠가 쌓이는 것은 불가피하다. 화면 폭이 작은 환경에서 먼저 표시되는 콘텐츠가 가장 중요한 콘텐츠가 아닐 수도 있기 때문에 이에 대한 고민이 필요하다.

#### 1.3 콘텐츠 순서

콘텐츠가 쌓이는 구조의 레이아웃이 아니라, 주요 콘텐츠가 보조 콘텐츠보다 우선적으로 화면에 보여져야 한다. 이와 같은 접근은 화면 크기가 작은 모바일 환경에서 우선적으로 보여져야 할 콘텐츠가 무엇인지 고려해야 함을 말한다.

### 2. 유연한 그리드 레이아웃

유연한 그리드(Fluid Grid)는 일관되게 콘텐츠를 구성하지만, 디스플레이 사이즈에 따라 크기와 위치가 변경된다. 유연한 그리드를 구현하는 방법은 고정 그리드를 기반으로 상대적인 수치를 도출하는 것에서 시작된다.

RWD애서는 픽셀(Pixel)이 아닌, 상대 단위(em, rem, % 등)를 사용해야 하기에 픽셀을 상대 단위로 바꾸는 계산식을 사용해야 한다.

*(Target / Context) * 100 = Result*

#### 2.1 기술적 이슈

유연한 레이아웃(Fluid Layout)을 구현할 경우 발생하는 기술적 이슈는 웹 브라우저가 퍼센트(%) 값을 픽셀(px) 값으로 변경하는 과정에서 발생한다. 정확하게 정수로 떨어지지 않는 픽셀의 경우 각 브라우저마다 처리하는 방식이 다르기 때문이다. 하지만 이것은 `Float`를 사용한 레이아웃을 만들 때 생기는 문제이고, Flex 레이아웃을 활용하게 되면 이런 고민을 할 필요가 없게 된다.

### 3. 유연한 이미지

유연한 이미지(Fluid Image)는 이미지를 포함하는 컨테이너 요소의  폴에 맞춰 크기가 변경되는 이미지를 말한다.

이미지는 콘텐츠로 사용되는 이미지와 배경으로 사용되는 이미지의 2가지 경우가 있다.

#### 3.1 콘텐츠 이미지

콘텐츠로 사용되는 이미지의 경우, 해당 이미지 요소에 `width`을 `100%`로 설정하고 `height`를 `auto`로 설정하게 되면, 너비 또는 높이에 맞춰서 자동으로 콘텐츠의 크기를 변경시킬 수 있다. 이를 클래스로 만들어서 사용하게 되면 매우 편리하다.

```css
.responsive-scale {
  width: 100%;
  height: auto;
}
```

#### 3.2 배경 이미지

배경 이미지는 `width: 100%`일 때 `padding-top` 또는 `padding-bottom`을 사용하여 이미지의 비율대로 계산을 해줘야한다. 이때, `height` 속성의 값은 `0`이어야 한다. 오직 `padding-top` 또는 `padding-bottom`만 사용해서 퍼센트(%) 비율을 사용해서 이미지를 화면에 출력해야 한다.

```css
.responsive-scale-bg {
  width: 100%;
  padding-bottom: 66.6666667%;
  background: url('img/fluid/image-1440x960.jpg');
  background-size: cover;
}
```

### 4. 재단 이미지

재단 이미지(Crop Image)는 이미지를 포함하는 컨테이너 요소의 폭에 맞춰 크기가 동적으로 잘려지는 이미지를 말한다.

#### 4.1 콘텐츠 이미지

```css
.responsive-crop-container {
  position: relative;
  overflow: hidden;
  height: 120px;
}

.responsive-crop-content {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: auto;
}
```

#### 4.2 배경 이미지

```css
.responsive-crop {
  width: 100%;
  height: 960px;
  background: url('img/fulid/image-1440x960.jpg') center top;
  background-size: cover;
}
```

### 5. 유연한 미디어

#### 5.1 `video` 요소

HTML `video` 요소의 경우, `img` 요소와 마찬가지로 `wdith: 100%`와 `height: auto`로 유연한 미디어를 구현할 수 있다.

#### 5.2 `iframe` 요소

유연한 아이프레임을 구현하기 위해서는 `iframe` 요소를 감싸는 컨테이너 요소가 필요하다.

```css
.responsive-container {
  position: relative;
    /* 4:3 => 75%,
       16:9 => 56.25%,
       21:9 => 42.857142857% */
  padding-bottom: 56.25%; /* calc(9 / 16 * 100%); */
  height: 0;
  overflow: hidden;
  max-width: 100%;
}

.responsive-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

### 6. 장치 별 픽셀 밀도에 대응하는 방법

#### 6.1 디바이스 별 UI 크기

물리적으로 동일한 UI 크기를 유지하려면 픽셀 면적이 x2배일 때, 44px 크기 버튼은 88px이 되어야 한다. 각기 다른 디바이스에 이와 같은 UI 개념을 적용하기 위해 디자이너는 원래 x1 크기 제작은 물론 x2 크기 제작이 필요해졌다.

디자이너는 기본적으로 시안은 1배수로 작업을 한 뒤, 픽셀 밀도의 영향을 받는 비트맵 이미지만 배수에 맞게끔 원본 크기를 키운 상태에서 작업을 해야 한다.

또한 수치 측정 단위 중 픽셀 밀도를 측정하는 독립적인 단위가 없어 디자인 제작 과정이 곤란해졌는데, 이에 대한 해결책으로 애플은 `Point(pt)`를 제시했다. 이 단위는 장치 독립적이기 때문에, 더 이상 각 배율에 맞는 픽셀을 환산하여 개별적으로 작업할 필요가 없어지게 되었다.

> 단, 이 단위는 웹이 아닌 앱에서 사용되는 단위이다.

애플과 달리 안드로이드 진영은 장치 독립적인 픽셀 밀도(DIP) 단위인 `DP`를 만들어낸다. 문제는 정수 배율을 가진 애플과 달리 실수 배열을 가졌다는 점이다.

#### 6.2 사람이 보는 크기의 인식 고려

태블릿에서의 앱 아이콘은 폰보다 크기가 커야 한다. 그렇게 하기 위한 2가지 방법 중 하나는 픽셀 밀도를 낮추는 것이고, 다른 하나는 버튼 크기를 조정하는 것이다.

##### 6.2.1 픽셀 밀도 낮추기

대형 스크린은 멀리서 보기에 보통 낮은 픽셀 밀도를 가지고 있다. 일반적으로 TV는 생각보다 아주 낮은 인치당 40픽셀을 가지고 있는데 반해, 아이폰 레티나는 326ppi로 매우 높은 픽셀 밀도를, 아이패드 레티나는 대략 226ppi 정도의 픽셀 밀도를 가지고 있다. 아이패드의 큰 픽셀(스크린은 덜 빽빽함)이 인터페이스를 약간 크게 보이게 해준다.

##### 6.2.2 크기 바꾸기

픽셀 밀도를 낮추는 것만으로는 충분하지 않아 특정 디자인 요소들은 큰 크기로 만들어야 하기도 한다. 아이패드 앱 아이콘에서 이러한 경우가 발생하는데, 아이폰에서는 앱 아이콘이 60x60 크기인데 반해 아이패드의 큰 스크린은 더 많은 공간을 필요로 하기에 76x76 크기의 앱 아이콘을 사용하여 시각적인 크기 개선을 해야 한다.

#### 6.3 디자인 시작점

사진 같은 비트맵 이미지를 제외하고는 대부분의 UI는 벡터를 사용하여 제작하며 디자인 배율은 x1에서 시작해야 한다. (비트맵 이미지는 스마트 오브젝트를 사용하여 내보낸다.)

## References

* [Responsive Web Design - Ethan Marcotte](https://alistapart.com/article/responsive-web-design)
* [Content Choreography - Trentwalton](https://trentwalton.com/2011/07/14/content-choreography/)
* [Fluid Grids - Ethan Marcotte](https://alistapart.com/article/fluidgrids)
* [Fluid Images - Ethan Marcotte](https://alistapart.com/article/fluid-images)
* [How to center crop an image (<img>) in fluid width container - Stackoverflow](https://stackoverflow.com/questions/18247356/how-to-center-crop-an-image-img-in-fluid-width-container?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa)
* [Responsive Iframes with One Great CSS Trick - Theodo](https://blog.theodo.fr/2018/01/responsive-iframes-css-trick/)
* [Pixel Density, Demystified - Peter Nowell](https://medium.com/@pnowelldesign/pixel-density-demystified-a4db63ba2922)
* [픽셀 밀도(Pixel Density)에 대한 설명 - 정윤선(번역본)](https://brunch.co.kr/@blackindigo-red/18)
* [Responsive Wevb Design - Google](https://developers.google.com/web/fundamentals/design-and-ux/responsive/?hl=ko)
