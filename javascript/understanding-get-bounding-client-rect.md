1. 뷰포트 상대적인 좌표. 따라서 top, left, bottom, right가 스크롤된 양에 따라 변할 수 있다.
2. 뷰포트가 아닌 document(문서)의 좌측상단을 기준으로 측정하고 싶다면 현재 스크롤된 포지션 값에 window.scrollX, Y를 더해라.
3. `in`이나 `for...in` 키를 잘 반환하지만, `Object.keys()`, `Object.assign()`, `rest/spread operator`에선 실패하고 빈 객체를 반환할것이다. 
