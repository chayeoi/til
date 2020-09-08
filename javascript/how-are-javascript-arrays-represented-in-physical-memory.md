# JavaScript에서 배열의 메모리 할당

컴퓨터 공학 기초 지식이 부족하다고 느끼던 차, 퇴사하고 남아도는 시간을 활용하여 전 회사 동료 분들과 자료구조 스터디를 시작했다.

배열을 공부하던 중 궁금증이 생겼다. 배열은 한 번 정해진 메모리 공간을 변경할 수 없고 연관된 데이터를 연속적으로 저장한다던데, Javascript에서의 배열도 정말 이런 식으로 동작하는지에 대한 점이었다.

[Stackoverflow에서 찾은 답변](https://stackoverflow.com/questions/20321047/how-are-javascript-arrays-represented-in-physical-memory)에 의하면, Javascript에서의 배열은 사실 Object 타입의 특별한 경우라고 한다.

```jsx
var arr = new Array(100000);
```

그렇기 때문에 위 코드는 실제로 메모리 상에 100000개의 공간을 할당하지 않고 단순히 배열의 `length` 프로퍼티에 값 `100000`을 할당하기만 할 뿐이다. 값의 참조 역시 오프셋이 아닌 키를 통한 접근으로 이루어진다고 한다.

만약 Javascript Array를 연속적인 메모리 블록으로 사용하려면 [TypedArray](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)를 사용해야 한다. TypedArray를 사용하면 메모리 블록을 바이트 배열로 할당하고 원시 바이너리 데이터에 보다 효율적으로 액세스 할 수 있다고 한다.

## 참고

- [How are JavaScript arrays represented in physical memory? | Stackoverflow](https://stackoverflow.com/questions/20321047/how-are-javascript-arrays-represented-in-physical-memory)
