# `Element.requestFullscreen` API

`Element.requestFullscrreen` API를 이용하면 특정 요소의 풀스크린 모드 여부를 Javascript로 제어할 수 있다.

이 API는 풀스크린 모드 접근이 허용된 경우, resolved된 Promise를 반환하고 해당 요소는 `fullscreenchange` 이벤트를 수신한다. 거부되었다면, Promise는 rejected되고 요소는 `fullscreenerror` 이벤트를 수신한다.

## 사용 가능한 요소

이 API를 사용하려면 다음의 몇 가지 요구 사항을 충족해야 한다.

1. 표준 HTML 요소 중 하나이거나 `<svg>` 또는 `<math>`여야 한다.
2. `<dialog>` 요소가 아니어야 한다.
3. 최상위 문서 또는 `allowfullscreen` 속성이 적용된 `<iframe>`에 있어야 한다.
4. 정책저으로 전체 화면이 허용되어야 한다.

## 데모

[이 링크](https://fullscreen-requestfullscreen-demo.glitch.me/)에서 `requestFullscreen` API를 이용한 비디오의 전체 화면 모드 전환 데모를 확인할 수 있다.

코드는 [Glitch](https://glitch.com/edit/#!/fullscreen-requestfullscreen-demo)에서 확인 가능하다.

## 브라우저 호환성

거의 모든 최신 브라우저에서 사용할 수 있지만, 몇몇 브라우저의 경우 vendor prefix를 사용햐여야 한다. 따라서 크로스 브라우징을 고려할 경우, 다음과 같은 방식으로 사용하는 게 안전하다.

```javascript
document.fullscreenElement = document.fullscreenElement || document.mozFullscreenElement || document.msFullscreenElement || document.webkitFullscreenDocument;
  document.exitFullscreen = document.exitFullscreen || document.mozExitFullscreen || document.msExitFullscreen || document.webkitExitFullscreen;
```

또한 Safari와 Safari on iOS에선 Promise를 반환하지 않기 때문에 실패 처리가 까다롭다는 문제가 있으며, Firefox에서는 `requestFullscreen`을 이벤트 핸들러 내부에서 호출하지 않았을 경우, 요청 처리가 거부되는 문제가 발생한다.

## 참고

- [Element.requestFullscreen() | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen)
- [](https://fullscreen-requestfullscreen-demo.glitch.me/)
- [](https://glitch.com/edit/#!/fullscreen-requestfullscreen-demo?path=script.js%3A20%3A0)
