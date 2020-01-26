# 3차원 변형 함수를 축약 표기법으로 사용할 때의 이점

CSS 3차원 변형 시에 X, Y, Z축에 대한 속성 값을 한 번에 설정할 수 있는 변형 함수들이 있다.

* `translate3d(tx, ty, tz)`
* `scale3d(sx, sy, sz)`
* `rotate3d(x, y, z, a)`

이렇게 속기법 형태의 3차원 변형 함수를 사용할 경우, 하드웨어 가속(Hardware acceleration)의 이점을 얻을 수 있다고 한다. CSS 3D transform의 명세를 작성한 Dean Jackson은 다음과 같이 언급했다.

> In essence, any transform that has a 3D operation as one of its functions will trigger hardware compositing, even when the actual transform is 2D, or not doing anything at all (such as translate3d(0,0,0)). Note this is just current behaviour, and could change in the future (which is why we don’t document or encourage it). But it is very helpful in some situations and can significantly improve redraw performance.

위 글은 2010년에 쓰여진 것이고 그 이후로 대부분의 브라우저들이 이러한 행동 변화를 적용시켰다고 한다. 

## 참고 {docsify-ignore}

* [3D transform functions | David DeSandro](https://3dtransforms.desandro.com/3d-transform-functions)
