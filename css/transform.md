# 트랜스폼

## 2D 트랜스폼

`transform-origin` 속성을 사용하면 회전의 중심이 되는 지점을 변경할 수 있다. (기본값: 50%, 50%)

### 회전

Degree(deg) 외에도 Gradians(grad), Radians(rad), Turns(turn)과 같은 단위를 사용할 수도 있다.

* `rotateX(angle)`
* `rotateY(angle)`
* `rotate(angle)`

### 크기

deg, radian, turn 등의 단위를 사용할 수 있다.

* `scaleX()`
* `scaleY()`
* `scale(x, y)`

### 이동

* `translateX()`
* `translateY()
* `translate(x, y)`

### 비틀기

비틀기 속성은 X와 Y를 함께 지정할 수 있는 방법이 없고 개별적으로 적용해야 한다.

* `skewX()`
* `skewY()`
* `skew(x, y)`

## 3D 트랜스폼

### 회전

* `rotateX()`
* `rotateY()`
* `rotateZ()`: `roate()`와 같다.
* `rotate3d()`: x, y, z축에 대한 회전율을 한 번에 선언할 수 있다.

### 이동

* `translateX()`
* `translateY()`
* `translateZ()`
* `translate3d()`: x, y, z축에 대한 이동을 한 번에 선언할 수 있다.

### 크기

* `scaleX()`
* `scaleY()`
* `scaleZ()`
* `scale3d()`: x, y, z축에 대한 확대 배율을 한 번에 선언할 수 있다.

### 비틀기

3D 관련 속성이 아니기때문에 `skew3d()`는 존재하지 않는다.

* `skewX()`
* `skewY()`
* `skew()`

### 원근

* `perspective()`

### 자식 요소를 3D 처리할 부모 요소에 설정하는 속성

* `perspective`
* `perspective-origin`: 원근의 기준이 되는 지점(소실점)을 설정한다.
* `transform-style: preserve-3d` (요소의 자식이 3D 공간에 배치)

### 기타 속성

* `transform-origin`: 회전시킬 축을 결정한다. 기본값은 엘리먼트의 중앙 지점을 나타내는 (50%, 50%)이다.
* `backface-visibility`: 속성의 기본 값은 `visible`이며, 값에 `hidden`을 설정하면 뒤집혀진 요소를 화면에서 숨길 수 있다. 그러나 기본적으로 요소는 부모의 영역 안에서 평면 상태로 위치하고 있기 때문에 해당 속성은 제대로 적용되지 않는다. 이 속성을 적용하려면 해당 요소의 부모 요소가 3d 공간에 있음을 자식 요소들에게 알리기 위해, 부모 요소에 `transform-style: preserve-3d`를 선언하여야 한다.

## 참고

* [Alternative Units for CSS3 Rotation Transforms | Louis Lazaris](https://www.impressivewebs.com/alternative-units-css3-rotate-transforms/)
