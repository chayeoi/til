# 커서 커스터마이징하기

## CSS `cursor` 속성

CSS의 `cursor` 속성은 해당 속성이 설정된 요소 위에서 마우스 커서가 어떤 모양으로 보여질지를 정의한다.

```css
.auto            { cursor: auto; }
.default         { cursor: default; }
.none            { cursor: none; }
.context-menu    { cursor: context-menu; }
.help            { cursor: help; }
.pointer         { cursor: pointer; }
.progress        { cursor: progress; }
.wait            { cursor: wait; }
.cell            { cursor: cell; }
.crosshair       { cursor: crosshair; }
.text            { cursor: text; }
.vertical-text   { cursor: vertical-text; }
.alias           { cursor: alias; }
.copy            { cursor: copy; }
.move            { cursor: move; }
.no-drop         { cursor: no-drop; }
.not-allowed     { cursor: not-allowed; }
.all-scroll      { cursor: all-scroll; }
.col-resize      { cursor: col-resize; }
.row-resize      { cursor: row-resize; }
.n-resize        { cursor: n-resize; }
.e-resize        { cursor: e-resize; }
.s-resize        { cursor: s-resize; }
.w-resize        { cursor: w-resize; }
.ns-resize       { cursor: ns-resize; }
.ew-resize       { cursor: ew-resize; }
.ne-resize       { cursor: ne-resize; }
.nw-resize       { cursor: nw-resize; }
.se-resize       { cursor: se-resize; }
.sw-resize       { cursor: sw-resize; }
.nesw-resize     { cursor: nesw-resize; }
.nwse-resize     { cursor: nwse-resize; }
```

일부 속성 값은 모든 브라우저에서 지원되지 않기 때문에, 브라우저 지원 범위를 잘 확인한 후 사용해야 한다.

커서를 이미지로 대체할 수도 있다.

```css
.custom {
  cursor: url(images/my-cursor.png), auto;
}
```

## Animated cursor

GIF 포맷은 커서의 이미지로 사용할 수 없다. 살아움직이는 듯한 커서를 만들기 위해서는 일종의 트릭을 사용해야 한다.

### 1. 자바스크립트로 커서의 위치를 추적하는 방법

우선 `cursor: none;`을 통해 커서를 숨긴 후, 자바스크립트를 사용하여 커서의 위치를 추적하는 방식으로 움직이는 다른 무언가를 보여주면 된다.

```html
<div id="follower">
  <div id="circle1"></div>
  <div id="circle2"></div>
</div>
```

```css
html {
  cursor: none;
  background: #666;
}

#follower {
  position: absolute;
  top: 50%;
  left: 50%;
}

#follower #circle1 {
  position: absolute;
  -webkit-animation: pulse 2s infinite; /* Chrome, Safari, Opera */
  animation: pulse 2s infinite;
  background: #fff;
  border-radius: 50%;
  height: 0em;
  width: 0em;
  margin-top: 0em;
  margin-left: 0em;
}

#follower #circle2 {
  position: absolute;
  -webkit-animation: pulse 4s infinite; /* Chrome, Safari, Opera */
  animation: pulse 4s infinite;
  background: rgba(200,0,0,0.8);
  border-radius: 50%;
  height: 0em;
  width: 0em;
  margin-top: 0em;
  margin-left: 0em;
}

@keyframes pulse {
  0% {
    opacity: 0.2;
    height: 1em;
    width: 1em;
    margin-top: -0.5em;
    margin-left: -0.5em;
  }
  50% {
    opacity: 0.9;
    height: 3em;
    width: 3em;
    margin-top: -1.5em;
    margin-left: -1.5em;
  }
  100% {
    opacity: 0.2;
    height: 1em;
    width: 1em;
    margin-top: -0.5em;
    margin-left: -0.5em;
  }
}
```

```javascript
(function() {
  var follower, init, mouseX, mouseY, positionElement, printout, timer

  follower = document.getElementById('follower')

  printout = document.getElementById('printout')

  mouseX = event => event.clientX
  }

  mouseY = event => {
    return event.clientY
  }

  positionElement = (event) => {
    var mouse = {
      x: mouseX(event),
      y: mouseY(event)
    }
    follower.style.top = mouse.y + 'px'
    return follower.style.left = mouse.x + 'px'
  }

  timer = false

  window.onmousemove = init = (event) => {
    var _event
    _event = event
    return timer = setTimeout(() => positionElement(_event), 1)
  }

}).call(this)
```

### 2. 자바스크립트 없이 CSS만 사용하는 방법

일정한 시간 간격으로 커서의 이미지를 교체하는 방식을 통해 커서가 살아 움직이는 것처럼 보이게 만들 수 있다.

```html
<h1>Hover over the div</h1>
<div id="playground"></div>
```

```css
#playground {
  width: 100%;
  height: 100px;
  border: 1px solid grey;
  animation: animate 0.25s infinite;
}

@keyframes animate {
  0%{ 
    cursor: url("http://jantimon.nl/running_man/running_man_1.png"), auto;
  }
  20%{ 
    cursor: url("http://jantimon.nl/running_man/running_man_2.png"), auto;
  }
  40%{ 
    cursor: url("http://jantimon.nl/running_man/running_man_3.png"), auto;
  }
  60%{ 
    cursor: url("http://jantimon.nl/running_man/running_man_4.png"), auto;
  }
  80%{ 
    cursor: url("http://jantimon.nl/running_man/running_man_5.png"), auto;
  }
  100%{ 
    cursor: url("http://jantimon.nl/running_man/running_man_1.png"), auto;
  }
}
```

### 3. CSS와 함께 최소한의 자바스크립트만 사용하는 방법

```html
<h1>Hover over the div</h1>
<div id="playground"></div>
```

```css
#playground {
  border: 1px solid grey;
  width: 100%;
  height: 100px;
}
```

```javascript
var playground = document.querySelector('#playground')

var cursorArray = [
  'url("http://jantimon.nl/running_man/running_man_1.cur"), auto',
  'url("http://jantimon.nl/running_man/running_man_2.cur"), auto',
  'url("http://jantimon.nl/running_man/running_man_3.cur"), auto',
  'url("http://jantimon.nl/running_man/running_man_4.cur"), auto',
  'url("http://jantimon.nl/running_man/running_man_5.cur", auto',
]

i = 0

(function cursor(){
  playground.style.cursor  = cursorArray[i]
  i++
  if (i === cursorArray.length) {
    i = 0 
  }
  setTimeout(cursor, 50)
})()
```

## References

* [Cursor - CSS TRICKS](https://css-tricks.com/almanac/properties/c/cursor/)
* [Changing the Cursor with CSS for Better User Experience (or Fun) - CSS TRICKS](https://css-tricks.com/using-css-cursors/)
* [Animated cursor - CSS TRICKS](https://css-tricks.com/forums/topic/animated-cursor/)
