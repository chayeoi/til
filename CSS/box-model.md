# 박스 모델

## 블록(Block) vs 인라인(Inline)

HTML4.01 버전에서는 블록(Block)과 인라인(Inline)으로 통칭했는데, HTML5에서는 블록 요소를 플로우 컨텐츠(Flow contents), 인라인 요소를 (Phrasing contents)로 통칭하게 되었다.

## 인라인 박스

인라인 박스는 좌/우 방향으로 마진, 패딩 공간을 설정할 수 있으나, 상/하 방향으로는 공간이 설정되지 않는다. 패딩의 경우, 적용되지 않는다기보다는 패딩으로 인한 공간이 벌어지지 않는다.

> **콘텐츠를 정중앙에 위치시키는 방법**
> `height`와 동일한 높이값을 `line-height` 속성에 사용햐게 되면 요소를 상하 방향에서 중앙에 위치시킬 수 있다.
> 
> ```html
> <head>
>   <style>
>     .demo {
>       width: 100px;
>       height: 100px;
>       background: #eee;
>       text-align: center;
>       line-height: 100px;
>     }
>   </style>
> </head>
> <body>
>   <div class="box">
>     box
>   </div>
> </body>
> ```

## `overflow`

부모 박스의 영역을 자식 박스가 넘어서게 될 때 화면에 어떻게 렌더링할지를 결정한다.

### `overflow: auto`

흐름이 넘치면 x / y 축 모두 스크롤 바가 자동으로 생겨난다. 흐름이 넘치지 않으면 스크롤바는 보이지 않는다.

### `overflow: hidden`

흐름이 넘친 영역이 모두 감춰진다.

### `overflow: visible`

흐름이 넘친 영역이 모두 보여진다.

### `overflow: scroll`

x / y축 스크롤이 무조건 보여진다.

### `overflow-x: hidden`

x축 방향에 대해서만 overflow 설정을 수행한다.

### `overflow-y: hidden`

y축 방향에 대해서만 overflow 설정을 수행합니다.

