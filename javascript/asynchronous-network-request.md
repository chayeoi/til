# AJAX

> 2018년 12월 11일 JS 스터디 준비 자료입니다.

AJAX(Asynchronous Javascript and XML)가 등장하기 이전에는, 웹 브라우저에서 어떤 정보를 요청하면 서버는 해당 정보가 결합된 새로운 웹 페이지(HTML)를 응답하는 식이었다. 새로운 웹 페이지를 전달받은 브라우저는 해당 페이지를 사용자에게 보여주기 위해 화면을 새로고침하게 되는데, 이는 화면의 극히 일부 정보만 변경되었을 경우에 매우 비효율적인 방식이었다.

AJAX(Asynchronous Javascript and XML)은 **자바스크립트를 이용해서 비동기적(Asynchronous)으로 서버와 브라우저가 데이터를 교환할 수 있는 통신 방식**을 의미한다. 이 방식을 통해 웹 페이지 전체를 새로고침할 필요없이, 클라이언트에서 실제로 필요한 데이터만 비동기적으로 서버에 요청한 후 화면을 업데이트하는 일이 가능해졌다.

## AJAX라는 용어의 유래

AJAX는 Asynchronous JavaScript and XML의 약자로, 말그대로 JavaScript와 XML을 이용한 비동기적 정보 교환 기법을 의미한다. 여기서 XML(Extensible Markup Language)은 클라이언트와 서버가 주고받을 수 있는 데이터 표현 형식 중의 하나로, 마치 HTML과 같은 트리 형태로 구조적인 데이터를 표현한다.

이름에 XML이라고 명시되어있긴 하지만, 이는 AJAX라는 용어가 처음 생겨날 당시의 주 데이터 교환 형식이 XML이었기 때문이어서 그랬을 뿐, JSON이나 일반 텍스트 파일과 같은 데이터 형식도 사용 가능하다. 현재는 거의 JSON 형식의 데이터를 주고 받는다. 용어와 실제 기술간의 차이가 커져서 요즘에는 약어가 아닌 고유명사처럼 취급된다.

## JSON

JSON(JavaScript Object Notation) 역시 XML과 같은 데이터 표현 형식 중의 하나인데, 자바스크립트의 객체 리터럴과 매우 흡사한 방식으로 구조화된 데이터를 표현한다. XML보다 표현이 간결하고 가독성이 좋기 때문에 오늘날 가장 널리 사용되는 데이터 형식이다.

JSON은 용어 그대로 자바스크립트의 객체 표기법을 따른 데이터 형식일 뿐, 자바스크립트 객체가 아니라는 사실에 주의해야 한다. JSON은 **순수한 텍스트로 구성된 규칙이 있는 데이터 구조**이다. 그렇기 때문에 주의해야할 몇 가지 중요한 사항이 존재한다.

1. 키는 반드시 큰따옴표(작은따옴표 사용불가)로 둘러싸야 한다.

  ```json
  {
    "name": "Lee",
    "gender": "male",
    "age": 20,
    "alive": true
  }
  ```

2. 서버로부터 전달받은 JSON 데이터는 텍스트로 구성되어있기 떄문에 자바스크립트 객체와 달리 키를 통해 값을 참조할 수 없다. JSON 데이터를 객체화하기 위해서는 내장 객체인 `JSON`의 static 메소드인 `JSON.parse`를 사용해야 한다. 이러한 과정을 역직렬화(Deserializing)이라고 한다.
3. 자바스크립트 객체를 JSON 형식의 문자열로 변환하기 위해서는 `JSON.stringify`를 사용한다.

## AJAX 요청의 생성

브라우저에서 AJAX 요청을 생성하도록 돕는 다양한 빌트인 API 및 라이브러리가 존재한다.

### XMLHttpRequest

비동기 네트워크 요청을 생성하기 위해 AJAX 초창기에 널리 사용되었던 브라우저 빌트인 API이다. 현재는 거의 사용되지 않는다.

### fetch

XMLHttpRequest 이후에 도입된 브라우저 빌트인 API로, XMLHttpRequest보다 사용법이 훨씬 간편하다. IE와 같은 Outdated Browser에서는 [지원되지 않는 기능](https://caniuse.com/#search=fetch)이므로, IE 지원을 위해서는 Fetch polyfill을 사용하여야 한다.

```javascript
const API_URL = 'https://api.github.com'

fetch(`${API_URL}/repos/facebookincubator/create-react-app/issues?per_page=10`)
  .then(res => res.json())
  .then(issues => {
    console.log('최근 10개의 이슈:')
    issues
      .map(issue => issue.title)
      .forEach(title => console.log(title))
  })
```

### axios

[axios](https://github.com/axios/axios)는 현재 비동기 네트워크 요청을 위해 가장 널리 사용되는 라이브러리로 매우 간편한 API를 제공한다.

```javascript
const API_URL = 'https://api.github.com'

axios.get(`${API_URL}/repos/facebookincubator/create-react-app/issues?per_page=10`)
  .then(({ data }) => console.log(data))
```

## AJAX의 활용 예시

* Gmail
* Google Map
* Google의 자동검색 완성
* Facebook의 News Feed 기능

## CORS

기본적으로 클라이언트가 스크립트 내에서 출처가 다른 서버에 http 요청을 보내게 되면 동일 출처 정책(Same Origin Policy)을 적용받는다. 즉, 웹페이지의 리소스를 불러올 때 리소스의 출처가 웹페이지의 출처와 같으면 안전하다고 보고, 출처가 다르면 해당 리소스는 안전히지 않다고 보는 것을 말한다. 이 정책이 초기에는 웹사이트의 보안을 위한 좋은 정책이라고 생각되었으나, REST API를 이용한 외부 호출이 잦아지는 상황에서 이 정책은 거추장스러운 일이 되어버렸다.

이러한 이유로 새롭게 나온 정책이 바로 CORS이다. CORS는 클라이언트 측 Cross-Origin 요청을 안전하게 보낼 수 있는 방법을 정한 표준으로, 다른 출처를 가진 서버로부터 선택된 자원에 대해 접근할 수 있는 권한을 갖도록 추가적인 HTTP 헤더를 사용하는 메카니즘이다. 서버와 클라이언트는 정해진 HTTP 헤더를 통해 서로 요청이나 응답에 대해 반응할 지를 결정하게 된다.

## JSONP

JSONP(JSON with Padding)를 통해 동일 출처 정책을 우회할 수 있다. `script` 태그의 원본 주소에 대한 제약은 존재하지 않는데, 이것을 이용하여 다른 도메인의 서버에서 데이터를 수집하는 일이 가능하다.

## References

* [비동기식 처리 모델과 AJAX - Poiemaweb](https://poiemaweb.com/js-ajax)
* [AJAX - 나무위키](https://namu.wiki/w/AJAX)]
