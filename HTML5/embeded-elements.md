# Embeded elements

# `<picture>` 요소

0개 이상의 `source` 요소와 1개 이상의 `img`를 포함하는 컨테이너 요소이다. 다양한 스크린 환경에 맞는 적합한 이미지를 제공하기 위한 목적으로 사용하며, `source` 요소를 사용할 수 없을 경우, `img` 요소가 화면에 표시된다.

`media` 속성을 사용하여 미디어 쿼리를 지정할 수 있다.

```html
<picture>
  <source srcset="bamboo-pen.png" media="(min-width: 600px)">
  <img src="bamboo-pen-narrow.png" alt="Bamboo Pen">
</picture>
```

svg나 다른 확장자 같은 경우에 브라우저가 올바르게 인식할 수 없다고 판단되면 type 속성을 지정해서 svg 파일 등에 대한 타입을 지정할 수 있다.

```html
<picture>
  <source srcset="bamboo-pen.svg" type="image/svg+xml">
  <img src="bamboo-pen-narrow.png" alt="Bamboo Pen">
</picture>
```

## `<source>` 요소

`<picture>`, `<audio>`, `<video>` 요소의 다중 미디어 리소스를 지정하기 위해 사용한다.

```html
<video src="videofile.mp4" poster="posterimage.jpg" controls>
  <source src="videofile.webm" type="video/webm">
  <source src="videofile.ogg" type="video/ogg">
  <source src="videofile.mov" type="video/quicktime">
  HTML5 <code>video</code> 요소를 지원하지 않는 구형 웹 브라우저를 사용 중입니다.
  <a href="http://outdatedbrowser.com/ko">최신형 브라우저로 업데이트</a> 하세요.
</video>
```

## `<video>` 요소

동영상 콘텐츠를 HTML 문서에 포함하기 위해서 사용한다. `src` 속성이나 `<source>` 요소을 이용해 여러 개의 동영상 소스 중 하나를 표시한다. 영상이 재생되기 전에 포스터를 보여주고 싶다면 `poster` 속성을 사용해 이미지를 지정하면 된다.

HTML5의 `video` 태그를 지원하지 않는 구형 브라우저를 위해서 업데이트 요청 문구를 `video` 태그 안에 넣을 수도 있다.

```html
<video src="videofile.mp4" poster="posterimage.jpg">
  HTML5 <code>video</code> 요소를 지원하지 않는 구형 웹 브라우저를 사용 중입니다.
  <a href="http://outdatedbrowser.com/ko">최신형 브라우저로 업데이트</a> 하세요.
</video>
```

동영상 자동 재생 설정은 접근성 측면에서 좋지 않다. 만약 자동 재생이 필요하다면 음소거를 기본값으로 설정하고, 자바스크립트를 이용해서 동영상 위에 커서가 올려졌을 때 소리가 출력되도록하는 방법이 권장된다.

### 속성

* `src`: 비디오 파일 경로
* `poster`: 포스터 이미지 경로
* `preload`: 브라우저를 미리 읽어옴으로써 사용자 경험을 향상(메타데이터 / * 비디오 다운로드)시키기 위한 설정 [none, metadata, auto(기본값)]
* `controls`: 재생 컨트롤 표시 설정
* `autoplay`: 자동 재생 설정
* `loop`: 반복 설정
* `muted`: 음소거 설정

## `<audio>` 요소

오디오 콘텐츠를 포함하기 위해서 사용한다.

```html
<figure>
  <img src="cover.jpg">
  <figcaption>
    <audio src="audiofile.mp3">
      HTML5 <code>audio</code> 요소를 지원하지 않는 구형 웹 브라우저를 사용 중입니다.
      <a href="http://outdatedbrowser.com/ko">최신형 브라우저로
      업데이트</a>로 업데이트 하세요.
    </audio>
  </figcaption>
</figure>
```

### 속성

* `src`: 오디오 파일 경로
* `volume`: 볼륨 조절(0.0 ~ 1.0)
* `muted`: 음소거 설정
* `poster`: 포스터 이미지 경로
* `preload`: 사용자 경험 향상(메타데이터 / 비디오 다운로드)에 관한 설정 [none, metadata, auto]
* `controls`: 재생 컨트롤 표시 설정
* `autoplay`: 자동 재생 설정
* `loop`: 반복 설정

### 파일 포맷

현재는 mp3나 mp4를 사용하면 거의 모든 브라우저에서 호환 가능하다. 그러나 모든 브라우저가 `mp4`를 지원하지 않던 시절도 있었는데, 이 당시에는 다른 브라우저가 각기 다른 포맷을 지원하다보니깐 부득이하게 여러 개의 `source` 요소를 사용해서 지원되는 포맷을 브라우저가 재생되도록 만들었었다. 다행히 현 시대에는 mp3, mp4 포맷만 있으면 거의 모든 브라우저에서 호환된다.

```html
<video src="videofile.mp4" poster="posterimage.jpg" controls>
  <source src="foo.webm" type="video/webm">
  <source src="foo.ogg" type="video/ogg">
  <source src="foo.mov" type="video/quicktime">
  죄송합니다. 당신의 브라우저는 HTML5 동영상을 지원하지 않습니다.
</video>
```

## `<track>` 요소

비디오/오디오 재생 시, 자막을 표시해주는 요소이다.

기본값으로 보여주고 싶은 값이 있다면 `default` 속성을 부여한다. `default` 속성을 설정하지 않을 경우, 기본값은 '사용 안함'으로 설정된다.

### 속성

* `kind`: track의 종류 지정(`kind="subtitles"`)
* `src`: 자막 파일 경로(`src="videofile.ko.vtt"`, video text track, vtt는 웹 표준 자막 파일 형식)
* `srclang`: 소스의 인코딩 언어 설정(`srclang="ko"`)
* `label`: 우측 하단에 표시될 레이블 값(`label="한국어"`)

```html
  <video src="videofile.mp4" poster="posterimage.jpg">
    <track kind="subtitles" src="videofile.ko.vtt" srclang="ko" label="한국어" default>
    <track kind="subtitles" src="videofile.en.vtt" srclang="en" label="English">
  </video>

  <audio src="audiofile.mp3">
    <track kind="subtitles" src="audiofile.ko.vtt" srclang="ko" label="한국어">
    <track kind="subtitles" src="audiofile.en.vtt" srclang="en" label="English">
  </audio>
```

## `<iframe>` 요소

인라인 프레임(Inline Frame)에 다른 HTML 페이지를 포함하여 화면에 표시할 때 사용한다.

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/0wlXaHmmOVc?rel=0&amp;showinfo=0"
  frameborder="0"
  allow="autoplay; encrypted-media"
  allowfullscreen>
</iframe>

<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12643.636820892792!2d127.01610674058901!3d37.60429582641849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cbc91e5ca4f03%3A0x18820a16e406c8ea!2z7ISc7Jq47Yq567OE7IucIOyEseu2geq1rCDquLjsnYwx64-ZIDUzMC0zNg!5e0!3m2!1sko!2skr!4v1520001155674" width="600"
  height="450"
  style="border: 0"
  allowfullscreen>
</iframe>
```

### 속성

* `src`: 프레임 소스 설정
* `width`: 프레임 너비 설정
* `height`: 프레임 높이 설정
* `allowfullscreen`: 프레임 전체화면 설정
* `allow`: 허용할 속성 범위 지정. 비표준 속성.
* `frameborder`: 테두리 두께 설정. CSS로 설정하는 것이 권장된다.

## `<map>` 요소

이미지 맵(클릭 가능한 링크 영역)을 정의하기 위해 <area>와 함께 사용된다.

예를 들어, `map`은 `name` 속성을 가지고 있어야 하고 해당 `img`의 `usemap` 속성에 마치 id 값을 연결해주는 것처럼 이어주게 되면 이미지에 맵이 설정된다.

```html
<img src="products-map.jpg" alt="제품 모음" usemap="#products-map">
<map name="products-map">
  <area
    shape="circle"
    coords="200,250,25"
    hreflang="en-GB"
    href="another.html"
    alt="Another Page"
    target="_blank">
</map>
```

## `<area>` 요소

이미지 내의 핫스팟 지역 정의, 하이퍼링크를 설정하는 데 사용된다. `<map>` 내부에서만 사용 가능하다.

`area` 요소로 지정한 영역은 눈에 직접적으로 보이지 않기 때문에 그리기 쉽지 않다. 따라서 별도의 전용 소프트웨어가 필요하다. [이미지 맵 좌표 생성 사이트](https://www.image-map.net/)를 이용하면 온라인 상에서 이 문제를 해결할 수 있다.

`alt` 속성을 반드시 지정해줘야 한다.

### 속성

* `shape`: 핫스팟 모양 설정
* `coords`: 모양의 좌표 값 설정
* `href`: 하이퍼링크 주소 설정
* `target`: 새 창(탭) 열림 설정
* `alt`: 대체 텍스트 설정
* `hreflang`: 연결된 페이지의 언어 속성 설정
* `download`: canvas 데이터 다운로드 설정

## `<svg>` 요소
확장가능한 벡터 그래픽(SVG)은 2차원의 벡터 그래픽을 기술하기 위한 XML 마크업 언어이다.

> XML은 HTML과 비슷하지만 확장 가능한 마크업 언어로, 사용자가 보다 많은 일들을 수행할 수 있다.

`svg`의 사용 방법은 크게 두 가지로 나뉠 수 있다.

첫 번째는 img 요소를 사용해서 확장자가 svg인 파일을 소스로 불러오는 방법이다.

```html
<img src="svgfile.svg" alt="SVG File">
```

두 번째는 `svg` 요소를 사용해서 내부에 원하는 도형을 그리는 방법이다. HTML과 다르게 닫는 태그를 사용해줘야 한다.

```html
<svg width="150" height="150" viewBox="0 0 150 150">
  <circle r="50" cx="75" cy="75" fill="#333" stroke="#900" stroke-width="4" />
</svg>
```

직접적으로 코드를 따라서 그래픽에 있는 디자인을 변경하려면 `svg`를 문서 내에 직접 삽입해줘야 한다. `img`로 `svg` 파일을 연결시키는 경우라면 css 코드를 통해 디자인을 변경할 수 없다.  