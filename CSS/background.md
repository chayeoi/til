# 백그라운드

요소의 배경(background)은 요소의 content-box, padding-box, border-box 아래에 있는 영역이다(margin-box 제외). 모던 브라우저에서는 배경을 차지하는 영역을 background-clip 속성을 사용하여 변경할 수 있다.

## 백그라운드 관련 속성

* `background-color`: 배경색을 설정한다. (기본값: `transparent`)
* `background-image`: 요소의 배경에 표시할 배경 이미지를 설정한다. (기본값: `none`)
  * `url()`
* `background-position`: 배경이 요소 배경 안에 표시되어야 하는 위치를 설정한다. px 또는 % 단위도 사용가능하다. (기본값: `left top`)
* `background-repeat`: 배경을 반복할지 여부를 설정한다. (기본값: `repeat`)
  * `repeat`
  * `repeat-x`
  * `repeat-y`
  * `no-repeat`
* `background-attachment`: 내용이 스크롤 될 때 요소의 배경 동작을 설정한다. (기본값: `scroll`)
  * `fixed`
* `background`: 위에 기술한 5가지 배경 속성을 모아 작성하는 속기법이다. 이때 선언 순서는 중요하지 않다.

  ```css
  .container {
    background:
      transparent
      url('image.png')
      no-repeat
      10px 40px
      fixed;
  }
  ```
* `background-size`: 배경 이미지의 크기를 동적으로 조정할 수 있다. (기본값: `auto`)
  * `cover`
* `background-clip`: 배경 이미지를 클리핑 하는 영역을 설정할 수 있다. `background` 속성보다 먼저 선언되면 적용되지 않는다는 사실에 주의해야 한다. (기본값: `border-box`)
  * `border-box`
  * `padding-box`
  * `content-box`
* `background-origin`: 배경 이미지의 시작 위치를 특정 영역으로 설정할 수 있다. (기본값: `padding-box`)
  * `padding-box`
  * `content-box`
  * `border-box`