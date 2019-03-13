# Chrome 개발자 도구

지금까지 크롬 개발자 도구에서 주로 활용하던 탭은

1. Elements
2. Console
3. Network
4. Application

딱 이 정도였다. 사용한다고 해서 각 탭의 모든 기능을 완벽하게 알고 있던 것도 아니었기 때문에 개발자 도구 활용법에 대해서 하나씩 살펴보기로 했다. 세세히 들여다보니 정말 간단하지만 새로 알게 된 기능들도 꽤 많았다.

## 2. Console

### 2.1 DOM 요소를 선택할 때 JQuery 선택자와 같은 `$`을 사용할 수 있다.

개발자 도구에서 DOM 요소를 선택할 때 `document.querySelector`를 줄곧 사용해오고 있었다. 그런데 글자 수가 무려 22자에 달하기 때문에 매번 직접 입력하는 건 꽤나 귀찮은 일이었다. 이번에 새로 알게 된 사실인데, Chrome 개발자 콘솔에서는 JQuery를 사용하지 않더라도 `$`을 사용하여 `document.querySelector`와 똑같은 작업을 수행할 수 있다. 또한 `$$`와 같이 달러 기호 2개를 연달아 사용하면 `document.querySelectorAll`을 사용할 수 있기 때문에 앞으로 매우 자주 활용하게 될 듯하다.

### 2.2 특정 DOM 요소에 등록된 이벤트 리스너 목록 확인

디버깅할 때 특정 DOM 요소에 등록된 이벤트 리스너를 확인하고 싶은 경우가 종종 있었다. `getEventListeners($(selector))`를 사용하면 원하는 요소에 등록된 이벤트 리스너의 목록을 확인할 수 있다고 한다. 이 기능 역시 이번에 새로 알았다.

### 2.3 이벤트 모니터링

특정 DOM 요소에서 발생하는 모든 이벤트를 모니터링하고 싶을 경우, `monitorEvents($(selector))`를 호출하면 된다.

만약 특정 이벤트만 모니터링하고 싶다면 `monitorEvents($(selector), eventName)`과 같이 두 번째 인자에 이벤트 이름을 전달하면 된다.

여러 개의 이벤트를 모니터링하고 싶을 경우, 두 번째 인자에 이벤트 이름의 문자열을 넘기는 대신 여러 개의 이벤트 이름을 담고 있는 배열을 인자로 전달한다.

이벤트 모니터링을 중지하고 싶을 경우, `unmonitorEvents($(selector))`를 호출하면 된다.

### 2.4 DOM 요소 검사하기

`inspect($(selector))`를 사용하면 선택자에 매칭된 요소를 조사할 수 있다. 화면 상에서 뿐만 아니라 개발자 도구의 Elements 탭에서 매칭된 요소의 위치로 초점을 이동시킨다.

`$0`, `$1`, `$2`에는 최근 조사했던 요소들이 순서대로 저장된다. 예를 들어, `$0`을 통해 가장 마지막에 탐색헀던 요소를 참조할 수 있다.

### 2.5 요소 속성 목록 확인하기

`dir($(selector))`는 해당 DOM 요소와 관련된 모든 속성을 담고 있는 객체를 반환한다.

## 참고 문서

* [Things you probably didn’t know you could do with Chrome’s Developer Console | Swagat Kumar Swain](https://medium.freecodecamp.org/10-tips-to-maximize-your-javascript-debugging-experience-b69a75859329)
