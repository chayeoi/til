# CSS 그레디언트

## 선형 그레디언트

## 원형 그레디언트

`radial-graddient()`를 사용하여 원형 그레디언트 배경 이미지를 설정할 수 있다. 기본 모양은 타형(`ellipse`)이며 `circle`로 설정하면 정원형 모양의 그레디언트를 설정할 수 있다.

정원의 가장 가까운 부분까지만 그레디언트를 설정하고 싶다면 아래와 같이 선언한다.

```css
.example {
  background: radial-gradient(circle closest-side, #f73763, #6c52da, #2e2f32);
}
```

기본값은 `fathest-corner`로, 가장 멀리있는 코너까지 그레디언트가 확장된다.

## 오버레이 그레디언트

그레디언트에 알파값은 갖는 색상을 지정하면, 멀티 백그라운드를 사용하여 오버레이 그레디언트 효과를 나타낼 수 있다.

```css
.example-1 {
  background:
    linear-gradient(180deg, hsla(12, 100%, 50%, 0.4), hsla(54, 90%, 68%, 0.4)),
    url('sample.jpg');
  background-size: contain, 120px;
}

.example-2 {
  background:
    linear-gradient(217deg, rgba(255, 0, 0, 0.78), rgba(255, 0, 0, 0) 65.70%),
    linear-gradient(127deg, rgba(0, 255, 0, 0.78), rgba(0, 255, 0, 0) 65.70%),
    linear-gradient(336deg, rgba(0, 0, 255, 0.78), rgba(0, 0, 255, 0) 65.70%),
}

.example-2 {
  background:
    radial-gradient(circle at 50% 0, rgba(255, 0, 0, 0.45), rgba(255, 0, 0, 0) 65.70%),
    radial-gradient(cirdle at 6.7% 75%, rgba(0, 255, 0, 0.45), rgba(0, 255, 0, 0) 65.70%),
    radial-gradient(circle at 93.3% 75%, rgba(0, 0, 255, 0.45), rgba(0, 0, 255, 0) 65.70%),
}
```

## 반복 그레디언트

```css
.example-1 {
  background: repeating-linear-gradient(
    -45deg,
    #f7e763,
    #f7e763 10px,
    #5d5a40 10px,
    #5d5a40 20px
  );
}

.example-2 {
  background: repeating-radial-gradient(
    circle at 50% 15%,
    #f7e763,
    #f7e763 10px,
    #5d5a40 10px,
    #5d5a40 20px
  );
}
```

## 박스 그림자

`box-shadow` 속성에 순서대로 `x y blur spread color`를 선언할 수 있다.

```css
.example-1 {
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.35);
}
```

`inset` 키워드를 추가하면 박스의 안쪽 그림자를 설정할 수 있다.

```css
.example-2 {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 80px;
  border-bottom: 2px solid rgba(120, 120, 120, 0.1);
}

.example-2::after {
  content: '';
  position: absolute;
  z-index: -1;
  top: -5px;
  right: -20px;
  bottom: -5px;
  left: -20px;
  background: #fff;
  box-shadow: inset 0 -5px 15px 4px rgba(0, 0, 0, 0.35);
}
```

## 멀티 박스 그림자

```css
.example-1 {
  box-shadow:
    0 25px 20px -20px rgba(0, 0, 0, 0,.25),
    0 3px 15px rgba(0, 0, 0, 0.5);
}
```

## 광택 효과 설정

```css
.example-1 {
  background: linear-gradient(
    148deg,
    rgba(255, 255, 255, 0) 20%,
    rgba(255, 255, 255, 0.15) 47%,
    rgba(255, 255, 255, 0.3) 47%,
    rgba(255, 255, 255, 0.3) 47.1%,
    transparent 47.1%
  )
}
```
