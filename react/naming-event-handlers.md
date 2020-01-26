# 이벤트 핸들러 네이밍 규칙

## For props

`on*` 접두사를 사용한다.

## For function names

`props`와 같은 규칙을 적용하되, `on*`을 `handle*` 접두사로 대체한다. 비즈니스 관점에서 동작(Verb)의 이름을 해석(ex: dismiss, remove)하기보다는, 실제로 수행될 액션의 이름을 사용(ex: click)하도록 한다.

## More complicated naming

이벤트와 핸들러가 여러 개 있는 경우라면, `onAlertClick={handleAlertClick}`과 같이 명사를 앞에 두고 동사가 뒤따르는 방식으로 명명한다. 그러고나서 이들을 알파벳 순으로 나열한다.

## 참고 {docsify-ignore}

* [Eveng handler naming in react](https://jaketrent.com/post/naming-event-handlers-react/)
