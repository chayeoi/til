# Linked List에서 삽입 & 삭제 연산의 시간복잡도가 𝑂(𝟏)인이유

"Linked List는 삽입 및 삭제를 𝑂(𝟏)에 처리할 수 있다."는 내용에 대해 곰곰히 생각해보다가 이런 의문이 생겼다.

"맨 앞 또는 뒤에 요소를 삽입 또는 삭제하는 게 아니라면 위치를 먼저 탐색해야 하므로 𝑂(𝑛)의 시간이 소요되는 거 아닌가?"

Linked List를 실제로 구현한 코드를 찾아보더라도 삽입 및 삭제 메서드에 반복문으로 순회하며 요소의 위치를 탐색하는 작업이 포함되어 있었고, 관련 내용을 좀 더 찾아보았다.

- [Why is inserting in the middle of a linked list O(1)? | Stackoverflow](https://stackoverflow.com/questions/840648/why-is-inserting-in-the-middle-of-a-linked-list-o1)
- [Why does linked list delete and insert operation have complexity of O(1) ? shouldn't it be of O(n) | Stackoverflow](https://stackoverflow.com/questions/42849486/why-does-linked-list-delete-and-insert-operation-have-complexity-of-o1-shoul/42849562)
- [[자료구조] Array vs LinkedList | VictoryWoo](https://woovictory.github.io/2018/12/27/DataStructure-Diff-of-Array-LinkedList/)
- [자료구조 List - ArrayList와 LinkedList 비교](https://manducku.tistory.com/33)
- [Linked List의 삽입/삭제 시간 복잡도에 관해서 | OKKY](https://okky.kr/article/536061?note=1591525)
- [리스트(List), 배열(Array), 연결 리스트(Linked List) | 라이](https://m.blog.naver.com/PostView.nhn?blogId=kks227&logNo=220781402507&proxyReferer=https:%2F%2Fwww.google.com%2F)

찾아본 내용에 의하면,

1. Linked List의 맨 앞 또는 뒤에 요소를 추가 / 삭제하는 경우 𝑂(𝟏)의 시간이 소요된다.
2. Linked List의 중간에 요소를 추가 / 삭제하는 경우, 특정 노드를 가리키고 있는 포인터가 있지 않는 한, 탐색하는 과정이 수반되므로 𝑂(𝑛)의 시간이 소요된다.
3. Linked List에서 노드의 추가 / 삭제에 𝑂(𝟏)의 시간이 소요된다고 하는 것은 이미 리스트에서 해당 노드를 순회 중이라고 가정한 것이고, 그렇기 때문에 추가 / 삭제 그 자체는 𝑂(𝟏)의 시간이 소요되는 것이 맞다.
4. Linked List에서 요소를 중간에 추가 / 삭제할 경우 배열과 같은 𝑂(𝑛)의 시간이 소요되지만, 그럼에도 Array보다 빠른 성능을 보인다.

## 참고

- [Why is inserting in the middle of a linked list O(1)? | Stackoverflow](https://stackoverflow.com/questions/840648/why-is-inserting-in-the-middle-of-a-linked-list-o1)
- [Why does linked list delete and insert operation have complexity of O(1) ? shouldn't it be of O(n) | Stackoverflow](https://stackoverflow.com/questions/42849486/why-does-linked-list-delete-and-insert-operation-have-complexity-of-o1-shoul/42849562)
- [[자료구조] Array vs LinkedList | VictoryWoo](https://woovictory.github.io/2018/12/27/DataStructure-Diff-of-Array-LinkedList/)
- [자료구조 List - ArrayList와 LinkedList 비교](https://manducku.tistory.com/33)
- [Linked List의 삽입/삭제 시간 복잡도에 관해서 | OKKY](https://okky.kr/article/536061?note=1591525)
- [리스트(List), 배열(Array), 연결 리스트(Linked List) | 라이](https://m.blog.naver.com/PostView.nhn?blogId=kks227&logNo=220781402507&proxyReferer=https:%2F%2Fwww.google.com%2F)
