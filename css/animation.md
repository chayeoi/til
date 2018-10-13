# CSS 애니메이션

CSS 애니메이션은 자바스크립트를 이용한 애니메이션보다 성능이 좋고 부드럽다. 브라우저는 현재 보이지 않는 엘리먼트에 대한 애니메이션은 업데이트 주기를 줄여 부하를 최소화함으로써 애니메이션의 성능을 효율적으로 최적화할 수 있다.

## 관련 속성

* `animation-name`: 애니메이션 이름
* `animation-duration`: 애니메이션 시간
* `animation-timing-function`: 애니메이션 타이밍 함수
* `animation-delay`: 애니메이션 지연시간
* `animation-direction`: 애니메이션 종료 후, 진행 (순/역)방향
* `animation-iteration-count`: 애니메이션 반복 횟수 (infinite: 무한반복)
* `animation-play-state`: 애니메이션 재생/일시정지 설정
* `animation-fill-mode`: 애니메이션 시작 전/종료 후 키프레임 설정 (forwards: 유지)
* `animation`: 애니메이션 속기형

## 예시

시작 지점(`from`)부터 끝 지점(`to`)까지의 속성 값을 설정할 수 있으며 시작 지점(`from`)에 대한 스타일 선언은 생략 가능하다. 

```css
.sonic {
  animation-name: sonic-running;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: forwards;
  animation-delay: 400ms;
  /* 속기법 */
  animation: sonic-running 1s linear infinite alternate forwards 0.4s paused;
}

.sonic-adventure:active .soinc {
  animation-play-state: paused;
}

@keyframes sonic-running {
  from {}
  to {
    transform: trnslateX(740px);
  }
}
```
