# `float`

float된 요소는 내부의 float된 요소를 인식한다.

```html
<head>
  <style>
    .float-frame {
      overflow: hidden;
    }

    .big-area {
      float: left;
      width: 100px;
      margin: 0 10px 0 0;
      padding: 10px;
      background: #999;
    }

    .small-unit {
      float: left;
      width: 48px;
      height: 48px;
      color: #fff;
      background: #333;
      margin: 1px;
    }
  </style>
</head>
<body>
  <div class="float-frame">
    <div class="big-area">
      <div class="small-unit">1</div>
      <div class="small-unit">2</div>
      <div class="small-unit">3</div>
      <div class="small-unit">4</div>
    </div>
    <div class="big-area">
      <div class="small-unit">A</div>
      <div class="small-unit">B</div>
      <div class="small-unit">C</div>
      <div class="small-unit">D</div>
    </div>
  </div>
</body>
```