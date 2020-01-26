# 메타데이터 요소

## `head`

문서의 제목과 스타일시트, 스크립트 링크 또는 선언을 포함하는 문서의 일반적인 정보(메타데이터)를 제공한다.

> 대부분 브라우저는 마크업에서 `head` 요소가 생략될 경우, 자동으로 `head` 요소를 생성하지만 일부는 그렇지 않다.
> * Android <= 1.6
> * iPhone  <= 3.1.3
> * Opera   <= 9.27
> * Safari  <= 3.2.1.
> * Nokia 90

## `meta`

다른 메타 요소들(`title`, `base`, `link`, `style`)로 나타낼 수 없는 메타데이터를 정의할 때 사용한다.

### 메타데이터의 종류

#### `charset`이 설정된 경우

즉 웹페이지를 작성하는 일련의 형식에 사용되는 문자 인코딩(charset)에 대한 설정이다.

#### `http-equiv`이 설정된 경우

`pragma` 지시어(Directive)로 일반적으로 웹서버가 제공하는 웹페이지가 어떻게 제공되어야 하는지에 대한 정보를 제공한다.

* HTML 5에서는 더 이상 아래와 같이 사용되길 권장하지 않는다.

  ```html
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
  ```

* 3초 뒤에 `url` 값에 설정된 페이지로 이동하게 한다.

  ```html
  <meta http-equiv="refresh" content="3;url=https://google.com">
  ```

#### `name` 속성이 설정된 경우

문서 수준 메타 데이터의 이름을 정의하며, `content` 속성 값을 통해 설정한다.

### 속성

#### `charset`

#### `http-equiv`

#### `content`

이 속성은 컨텍스트에 따라 `http-equiv` 또는 `name`속성 과 연결된 값을 제공한다.

#### `name`

##### `application-name`

웹 페이지에서 실행중인 웹 애플리케이션 이름 정의한다. 간단한 웹 페이지는 `application-name` 메타를 정의해서는 안된다. 많은 페이지를 갖고 있고 애플리케이션 역할을 수행할 때 지정해주어야 한다.

##### `description`

페이지의 내용에 대한 짧고 정확한 요약을 설정한다(검색 엔진 최적화 관점에서 매우 유용한, 권장되는 값).

##### `keywords`

쉼표로 구분된 문자열로 페이지의 내용과 관련된 키워드를 설정한다(검색 엔진 최적화 관점에서 매우 유용한, 권장되는 값).

##### `author`

문서 작성자의 이름을 정의한다(검색 엔진 최적화 관점에서 매우 유용한, 권장되는 값).

##### `robots`

검색 로봇이 웹 페이지를 크롤링하는 동작에 대해 정의한다.

* `index`
* `noindex`
* `follow`
* `nofollow`
* `noarchive`
* `nosnippet`
* `noimageindex`

##### `viewport`

표준은 아니지만, 모바일 시대에 접어들면서 대다수의 모바일 디바이스가 이 속성을 지원한다. 지원되는 값의 목록은 다음과 같고, 일반적으로 `width`와 `initial-scale` 정도만 설정된다.

* `width`
* `height`
* `initial-scale`
* `maximum-scale`
* `minimum-scale`
* `user-scalable`

모바일 폰에서는 `width`에 대한 설정이 없을 경우, 기본적으로 960px만큼의 너비로 화면을 표시하게 되어있다. 이는 과거 1024px의 모니터 사이즈를 갖고있던 17인치 모니터가 1024px의 해상도를 갖고 있었기 때문에, 양쪽 여백을 생각했을 때 가장 보편적으로 사용되는 문서의 폭이 960px이었기 때문이다. 하지만 모바일 시대에 접어들게 되면서 스마트폰의 디바이스는 더 작아지게 되었고, 작아지는 화면에 맞게끔 최적화된 형태로 내용을 기숧하기 위해서는 폰이 갖고 있는 가로 폭에 맞춰서 설정될 필요가 있었다.

```html
<meta name="viewport" content="width=480px">
```

하지만 이와 같이 고정된 형태의 숫자의 경우, 수평 형태로 긴 landscape의 모드에서의 width 값은 처리할 수 없었다. 이 문제를 해결하기 위해서 수시로 변할 수 있는 변수를 사용할 필요가 있었는데, `device-width` 값을 적용하게 되면 기기의 폭에 맞춰서 화면이 최적화된다.

```html
<meta name="viewport" content="width=device-width">
```

`initial-scale`은 화면을 처음 보여줄 때 배율을 설정할 수 있는데, `2`로 설정하게 되면 2배로 커진 형태로 보여지게 되고, `1`로 설정하게 되면 원래 배율로 보여지게 된다.

이렇게 `viewport` 속성을 설정해줌으로써 모바일 최적화 코드를 구현할 수 있다. 단, 이 속성은 비표준 속성임을 명심해야 한다.

## `link`

현재 문서와 외부 리소스와의 관계(relation)를 명시한다.

### 속성

* `rel`: 문서와의 관계를 명시한다.
* `type`: 링크된 리소스의 MIME 타입을 정의한다. (기본 값: `text/css`)
* `href`: 링크된 리소스의 URL을 설정한다.
* `hreflang`: 링크된 리소스의 언어를 설정한다.
* `media`: 링크된 리소스가 적용될 미디어(media)를 설정한다.

### 사용 예시

#### 기본 스타일 시트 설정

```html
<link href="style.css" rel="stylesheet">
```

#### 대체 스타일시트 설정

View > Page Style 메뉴에서 사용할 스타일 시트를 선택 가능하도록 설정할 수 있다. (Chrome은 해당 X)

```html
<link href="default.css" rel="stylesheet" title="기본 스타일">
<link href="fancy.css" rel="alternate stylesheet" title="팬시">
<link href="basic.css" rel="alternate stylesheet" title="베이직">
```

## `style`

문서나 문서 일부에 대한 스타일 정보를 포함한다. 기본적으로 CSS 언어가 사용된다.

### 속성

* `type`: 기본값은 `text/css`이다.
* `media`
* `scoped`: 이 속성을 지정하게 되면, 스타일 시트는 해당 스코프 내에서만 적용되게 된다.
* `title`
* `disabled`

### 사용 예시

#### 일반적인 사용 예시

```html
<style type="text/css">
  body {
    color: #323232;
  }
</style>
```

#### `scoped` 속성 사용 예시

매우 유용한 속성이지만, 아쉽게도 현재 제대로 지원하는 브라우저가 없다.

```html
<section>
  <style scoped>
    p { color: #902c1f; }
  </style>
  <p><!-- ... --></p>
</section>
```

## `base`

문서에 포함된 모든 상대 URL들의 기준 URL을 나타낸다. 한 문서에 하나의 `base` 요소만 존재해야 한다.

### 사용 예시

```html
<base target="_blank" href="http://www.example.com/">
```
