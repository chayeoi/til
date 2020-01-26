# 백그라운드

요소의 배경(background)은 요소의 content-box, padding-box, border-box 아래에 있는 영역이다(margin-box 제외). 모던 브라우저에서는 배경을 차지하는 영역을 `background-clip` 속성을 사용하여 변경할 수 있다.

## 백그라운드 관련 속성

* `background-color`: 배경색을 설정한다. (기본값: `transparent`)
* `background-image`: 요소의 배경에 표시할 배경 이미지를 설정한다. (기본값: `none`)
  * `none`
  * `url()`
  * `linear-gradient()`
  * `radial-gradient()`
  * `repeating-linear-gradient()`
* `background-position`: 배경이 요소 배경 안에 표시되어야 하는 위치를 설정한다. px 또는 % 단위도 사용가능하다. (기본값: `left top`)
  * 퍼센트 단위(`%`)
  * 길이 단위(`px`, `ch`, `cm`)
  * 키워드(`top`, `left`, `center`)
* `background-repeat`: 배경을 반복할지 여부를 설정한다. (기본값: `repeat`)
  * `repeat`
  * `repeat-x`
  * `repeat-y`
  * `no-repeat`
  * `space`
  * `round`
* `background-attachment`: 내용이 스크롤 될 때 요소의 배경 동작을 설정한다. (기본값: `scroll`)
  * `scroll`
  * `fixed`
  * `local`
* `background-size`: 배경 이미지의 크기를 동적으로 조정할 수 있다. (기본값: `auto`)
  * `cover`
  * `contain`
* `background`: 위에 기술한 6가지 배경 속성을 모아 작성하는 속기법이다. 이때 선언 순서는 포지션과 사이즈의 순서(선: 포지션 / 후: 사이즈)만 잘 지킨다면 나머지는 중요하지 않다. 포지션과 사이즈 사이에는 `/`로 구분하도록 한다. 또한 이미지와 색상을 함께 선언할 경우 이미지가 색상보다 상위 레이어에 위치하게 된다. 

  ```css
  .container {
    background:
      transparent
      url('image.png')
      no-repeat
      10px 40px / 200px
      fixed;
  }
  ```

* `background-clip`: 배경 이미지를 클리핑 하는 영역을 설정할 수 있다. `background` 속성보다 먼저 선언되면 적용되지 않는다는 사실에 주의해야 한다. (기본값: `border-box`)
  * `border-box`
  * `padding-box`
  * `content-box`
* `background-origin`: 배경 이미지의 시작 위치를 특정 영역으로 설정할 수 있다. (기본값: `padding-box`)
  * `padding-box`
  * `content-box`
  * `border-box`

## 멀티 백그라운드

여러 개의 백그라운드를 `background: background-1, background-2, ... background-n`과 같이 콤마(`,`)로 구분하여 겹쳐서 선언할 수 있다. 먼저 선언된 값이 상위 레이어에 쌓이게 된다.

```css
.container {
  background: url("../images/normal.jpg") no-repeat 0% 0% / 200px scroll, 
              url("../images/small.jpg") no-repeat 100% 0% / 200px scroll;
  background-color: #988574;
}
```

속기법이 아니라 각 속성별로 선언 시, 특정 속성 값이 중복된다면 한 번만 선언 가능하다.

```css
.container {
  background-color: #988574;
  background-image: url("../images/normal.jpg"), url("../images/small.jpg");
  background-repeat: no-repeat;
  background-position: 0 0, 100% 0;
  background-size: 200px, 300px;
  background-attachment: scroll;
}
```

## 그라디언트

`background-image` 속성에 `linear-gradient()`, `radial-gradient()`, `repeating-linear-gradinent()` 함수를 사용하여 그라디언트를 생성할 수 있다. 그라디언트는 `background-color`가 아닌 `background-image`임에 주의하여야 한다.

```css
.container {
  background-image: linear-gradient(red, blue);
  background-image: linear-gradient(to right, red, blue);
  background-image: linear-gradient(45deg, red, blue);
  background-image: linear-gradient(-45deg, red, blue);
  background-image: linear-gradient(180deg, red, orange, yellow, green, blue, purple);
  background-image: linear-gradient(180deg, red,red 50%, orange 50%, orange 100%);
  background-image: linear-gradient(180deg, 
  rgba(255, 0, 0, .2),
  rgba(255, 0, 0, .2) 50%, 
  rgba(0, 0, 255, .2) 50%,
  rgba(0, 0, 255, .2) 100% 
  ), url('../images/normal.jpg');
  background-image: radial-gradient(green, red);
  background-image: radial-gradient(circle, green, red);
  background-image: radial-gradient(circle, green 50%, red 50%);
  background-image: radial-gradient(circle at right top, green 50%, red 50%);
  background-image: radial-gradient(circle at 100% 0, green 50%, red 50%);
  background-image: radial-gradient(circle at 70% 20%, green 50%, red 50%);
  background-image: repeating-linear-gradient(90deg, red, red 10%, blue 10%, blue 20%);
  background-image: repeating-linear-gradient(90deg, red, red 20%, blue 20%, blue calc(20% + 20px));
  background-image: repeating-radial-gradient(green 50px, yellow 100px);
  background-image: repeating-radial-gradient(green, green 50px, yellow 50px, yellow 100px);
}
```

[WebGradients](https://webgradients.com/)에 들어가면, 미리 선언된 다양한 그라디언트 속성 값을 확인할 수 있다.
