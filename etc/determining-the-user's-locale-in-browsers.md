# 브라우저에서 사용자의 locale 정보를 확인하는 방법

프로그래밍적으로 사용자의 locale 정보를 확인하고 싶다면 다음 방법을 통해 읽어들일 수 있다.

```javascript
console.log(navigator.language || navigator.browserLanguage)
```
