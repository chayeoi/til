##  5 Day

### 1. CSS

1. 개발을 하다보면 Tab, Modal, Accordion UI, Dropdown, Date Pickup 등의 UI를 직접 만들어야 할 수도 있다.
2. body 태그에 `height: 100%`를 지정하여 높이를 유동적으로 변하도록 할 수 있다.
3. transform: skew()
4. 부모 요소에 overflow: hidden 처리하면 자식 요소의 마진이 부모 요소를 뚫고 가는 것을 막을 수 있다.

Chrome extension Pesticide for Chrome : 아웃라인을 보여줌.

보더와 차이는 보더는 박스 사이징에 영향을 주지만 아웃라인은 박스사이징에 영향을 주지 않는다.

남은 공간을 모두 차지하게 만들 때 flex-grow:1을 사용함. 기존에 있던 녀석은 flex-grow 기본값이 0이기 때문.



자바스크립트로 스타일을 바꿀 때 인라인 스타일로 추가하는 방법은 유지보수 측면에서 좋지 않다. 자바스크립트에서 인라인을 수정하는 것은 좋은 방법은 아니다. 그보다는 클래스를 추가하고 제거하는 것이 좋다는 것이 정설이다.



vscode 디버거를 활용하여 중단점을 설정하면 해당 시점에서의 this, 참조 변수, 클로저 등을 확인할 수 있다.



깃으로관리할때 프로젝트별로 네임과 이메일을 다르게 설정하려면 해당 깃 저장소안에서 글로벌 키워드를 빼고 설정하면 된다.

```bash
git config user.name "ddd"
git config user.email "ddd"
```



그냥 cloneNode()를 하면 얕은 복사를 실시해서 내부 요소는 복사하지 않고 해당 요소만 복사한다. 깊은 복사를 하려면 클론노드 메소드에 true라는 인자를 넘겨주면 된다. (자바스크립트에서의 깊은 복사, 얕은 복사랑은 다름)





```javascript
var insertedNode = parentNode.insertBefore(newNode, referenceNode);

replacedNode = parentNode.replaceChild(newChild, oldChild);

var oldChild = node.removeChild(child);
OR
node.removeChild(child);
```



문서에 이미 들어있는 엘리먼트를 다른 엘리먼트에 어펜드차일드하면 복사가 되는게 아니라 위치가 바뀐다. insertBefore도 마찬가지.



```html
<div></div>
<script>
  for (let i = 0; i < 3; i++) {
  const el = document.createElement('p');
  el.textContent = `hello ${i}`;
  
  const span = document.createElement('span');
  span.textContent = '!!!';
  el.appendChild(span);
  document.querySelector('div').appendChild(el);
}


const newDiv = document.querySelector('div').cloneNode(true);

const body = document.querySelector('body');

body.appendChild(newDiv);

const newNode = document.createElement('div');
newNode.textContent = '안녕하세요';

body.insertBefore(newNode, newDiv);

const newNewNode = document.createElement('div');
newNewNode.textContent = '안녕히 가세요';
body.replaceChild(newNewNode, newNode);

body.removeChild(newNewNode);

document.querySelector('div:last-child').appendChild(document.querySelector('div p'));
</script>
```





querySelector는 모든 돔을 탐색해서 찾아내는 작ㅇ버으로 시간이 많이 걸리는 작업. 매번 수행해야한다면 비효율적. 한번에 설정해서 변수에 저장해서 에드이벤트리스너 밖으로 빼놓고 그 안에는 눈에 보이는 필요한 로직만 남아있게 짜는 것이 효율적.



변수명에서 f2키 누르고 입력하면 비슷한 변수명 다 찾아서 알아서 바꿔줌.





https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo





브레이크 주 과제

1. RGB Challenge 개선
2. Todo list 개선
3. 오목 만들기(선택)
4. 부트스트랩에 있는 UI Component 직접 구현해보기 ( Carousel, modal, collapse, popover, scrollspy)

scroll에도 이벤트를 걸수있다.

특정위치이상으로 스크롤이 내려가면 각 버튼의 클래스를 바꾸는 방식으로.





