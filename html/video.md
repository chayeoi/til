# 웹에서 비디오 사용하기

웹에서 비디오를 사용할 때, 기본적으로 YouTube 또는 Vimeo 같은 서비스에 비디오를 업로드하는 방법이 있다. 이들 서비스는 비디오 포맷팅, 파일 타입 변환을 적절히 처리해주는 기능을 제공할 뿐더러 비디오를 웹에 임베딩(embeding)할 방법 역시 제공하고 있다.

하지만 비디오를 웹에서 직접 다뤄야하는 상황이라면 `video`와 `source` 요소를 사용을 고려해볼 수 있다.

## 비디오 파일 포맷 1개만 지정하기

권장되진 않지만, `video` 요소에 `src` 속성으로 단일 비디오 파일을 연결할 수 있다. `type`을 지정하면 브라우저는 지원 가능한 비디오 파일 타입인지 판단한 후, 지원 불가능한 타입일 경우 `video` 요소 안의 콘텐츠를 표시한다.

```html
<video src="chrome.webm" type="video/webm">
  <p>Your browser cannot play the provided video file.</p>
</video>
```

## 비디오 파일 포맷 복수 개 지정하기

모든 브라우저가 동일한 미디어 포맷을 지원하는 것은 아니기 때문에, `source` 요소를 사용해 복수 개의 비디오 파일을 지정하고 차례대로 폴백으로 사용하도록 할 수 있다.

```html
<video controls>
  <source src="https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.webm" type="video/webm">
  <source src="https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4" type="video/mp4">
  <p>Your browser cannot play the provided video file.</p>
</video>
```

> `video` 요소에 `controls` 속성을 사용하여 사용자가 볼륨, 탐색, 캡션 선택, 재생 일시 중지/재개를 비롯한 비디오 재생을 제어할 수 있도록 브라우저에 지시할 수 있다.

`source` 태그에 사용한 `type` 속성은 선택 사항이지만, 이 속성을 지정하면 브라우저가 재생할 수 있는 파일만 다운로드하도록 할 수 있기 때문에 항상 지정하는 것이 좋다.

## 시작 & 종료 시간 지정하기

미디어 프래그먼트(Media fragments)를 사용하여 비디오의 시작, 종료 시간을 지정하면 대역폭을 아끼고 반응성을 높일 수 있다.

미디어 URL에 `#t=[start_time][,end_time]`과 같이 지정하여 미디어 프래그먼트를 사용할 수 있다.

```html
<source src="video/chrome.webm#t=5,10" type="video/webm">
```

`<hours>:<minutes>:<seconds>` 단위로 시간을 지정할 수도 있다. 예를 들어 `#t=00:01:05`는 1분 5초에 동영상을 시작한다. 비디오의 처음 1분만 재생하려면 `#t=,00:01:00`을 지정한다.

이 기능을 사용하면 여러 파일을 인코딩하고 제공할 필요 없이 DVD의 큐 포인트와 같이 동일한 비디오에서 여러 보기를 제공할 수 있다.

이 기능이 작동하려면 서버에서 범위 요청을 지원해야 하고 해당 기능을 활성화해야 한다. 대부분의 서버는 기본적으로 범위 요청을 활성화한다. 일부 호스팅 서비스에서는 이 기능을 사용하지 않으므로 프래그먼트를 사용하기 위해 범위 요청을 사용할 수 있는지 확인해야 하는데, 브라우저 개발자 도구에서 확인 가능하다. 비디오 요청에 대한 응답에 `Accept-Ranges` 헤더가 `bytes`라면 미디어 프래그먼트를 지원하는 것이므로 이 기능을 사용할 수 있다.

## 포스터 이미지 삽입하기

`poster` 속성을 지정하면 요소가 로드되는 즉시 사용자가 콘텐츠를 확인할 수 있고, `video`의 `src`에 연결한 파일이 손상되었거나 제공된 비디오 형식이 지원되지 않는 경우 포스터로 대체될 수 있다. 유일한 단점이라면 일부 대역폭을 소비하고 렌더링이 필요한 추가 파일을 요청한다는 점이다.

## Autoplay

`autoplay` 속성은 브라우저가 비디오를 즉시 다운로드하고 재생할지 여부를 제어한다. 정확한 작동 방식은 플랫폼과 브라우저에 따라 차이가 있다.

- Chrome: 데스크톱에서 재생 중인지, 모바일 사용자가 홈 화면에 사이트 또는 앱을 추가했는지 여부 등을 포함해 다양한 요인에 따라 달라진다.
- Firefox: 모든 비디오 및 사운드를 차단하지만, 사용자에게 모든 사이트 또는 특정 사이트에 대해 이러한 제한을 완화할 수 있는 기능을 제공한다. 자세한 내용은 [Allow or block media autoplay in Firefox](https://support.mozilla.org/en-US/kb/block-autoplay)에서 확인 할 수 있다.
- Safari: 기존까진 사용자 제스처가 필요했지만 최근 버전에서는 이 요구 사항을 완화했다. 자세한 내용은 [New <video> Policies for iOS](https://webkit.org/blog/6784/new-video-policies-for-ios/)에서 확인 가능하다.

Autoplay가 지원되는 플랫폼이라도, 활성화 여부는 신중히 고려할 필요가 있다.

- 데이터 사용량이 비쌀 수 있다.
- 사용자가 원하기 전에 미디어를 재생하면 대역폭과 CPU를 소모하여 페이지 렌더링이 지연될 수 있다.
- 사용자는 비디오 또는 오디오 재생이 방해가 되는 상황에 있을 수 있다.

## Preload

`preload` 속성은 브라우저에 미리 로드할 정보나 콘텐츠의 양에 대한 힌트를 제공한다.

`preload` 속성은 플랫폼마다 다른 영향을 미친다. 예를 들어 Chrome은 데스크톱에서 25초 분량의 동영상을 버퍼링하지만 iOS 또는 Android에서는 버퍼링하지 않는다. 즉, 모바일에서는 데스크톱에서는 발생하지 않는 재생 시작 지연이 있을 수 있다.

Chrome 64부터 `preload` 속성의 기본값은 `metadata`로 변경되었다.

`preload` 속성을 사용할 때 몇 가지 주의사항이 존재한다. 이 속성은 단지 힌트를 제공할 뿐이므로, `preload` 속성은 브라우저에 의해 무시될 수도 있다.

- Data Saver 옵션을 설정한 경우, Chrome은 강제로 `preload`를 `none`으로 설정한다.
- Android 4.3에서 Chrome은 Android 버그로 인해 `preload`를 `none`으로 설정한다.
- 셀룰러 사용 환경(2G, 3G, 4G)에서 Chrome은 `preload`를 `metadata`로 강제 적용한다.

웹 사이트가 많은 비디오 리소스를 포함하고 있다면 `preload`를 `metadata`로 설정하거나, `poster` 속성을 정의하고 `preload`를 `none`으로 설정하는 게 좋다. 그렇게 하면 리소스 로드를 중단을 유발할 수도 있는 최대 HTTP 커넥션 수에 도달하는 걸 방지할 수 있고, 동영상이 사용자 경험의 핵심이 아니라면 페이지 속도를 향상시킬 수도 있다.

## 참고

- [The <video> and <source> tags | Sam Dutton & Joe Medley & Derek Herman - web.dev](https://web.dev/video-and-source-tags/)
- [Fast playback with audio and video preload | François Beaufort - web.dev](https://web.dev/fast-playback-with-preload/)
