# When to use Component or PureComponent

`PureComponent`를 상속받은 컴포넌트는 업데이트 라이프사이클이 발생할 시, `shouldComponentUpdate`에서 얕은 동질성 비교(Shallow euqality check) 방식을 사용하여 `render` 메소드의 호출 여부를 결정한다. 따라서 실제 전달받는 props 또는 state에 변화가 없을 경우 불필요한 `render`의 호출을 막을 수 있다. 반면에, 일반적인 `Component`를 상속받은 컴포넌트는 기본적으로 `shouldComponentUpdate`가 항상 `true`를 반환하므로 실제 전달받는 props 또는 state에 변화가 없더라도 무조건 `render` 메소드를 다시 호출하게 된다.

따라서 모든 컴포넌트에서 `Component`대신 `PureComponent`를 상속받도록 하면 성능 상의 이점을 얻을 수 있지 않을까 생각했다. 그런데 실제로 그렇게 시도하기 전에, 여태껏 이런 시도를 했던 프로젝트를 본 적이 있는지 스스로 곰곰히 생각해보았다. 아마 한 번도 못 봤던 듯하다. `PureComponent`가 훨씬 더 좋아보이는데 어째서? 단순히 사람들이 `PureComponent`를 어떻게 사용할 지 잘 몰라서일까?

당연하게도 그럴 리는 없다. 만약 `PureComponent`가 무조건 더 좋은 녀석이었더라면 리액트 팀은 `PureComponent`의 기본 동작을 기본값으로 세팅해놓았을 것이다. 오히려 모든 경우를 `PureComponent`로 대체하는 것은 앱을 더 느리게 만들 수 있다고 한다. [Dan의 트윗](https://twitter.com/dan_abramov/status/759383530120110080)을 읽어보면 그 이유를 짐작할 수 있다.

"*Plase don't think shallow equality checks are extremely cheap. They can help your app when placed strategically but just making every single component pure can actually make your app slower. Tradeoffs.*"

얕은 동질성 비교(Shallow euqality check)는 비교적 비용이 적게 드는 작업인 것은 맞지만, 그렇다고해서 비용이 아예 들지 않는 건 아니다. 하나의 앱 안에는 무수히 많은 컴포넌트가 존재하는데 모든 컴포넌트에서 얕은 동질성 비교 작업을 수행하고 있다면 당연히 성능 문제로 이어질 수밖에 없다.

앞서 이야기할 때 컴포넌트가 `PureComponent`가 아닌 `Component`를 상속받도록 하면 업데이트 라이프사이클이 발생할 시에 어떠한 비교 절차도 거치지 않고 `render` 메소드를 호출한다고 했다. 이 점을 잘 활용하여, 상황에 따라 `PureComponent`를 적절히 사용하기 위한 전략이 필요하다.

## PureComponent와 Component 간의 업데이트 비용 비교

리액트에서 뷰를 업데이트하는 과정은 총 세 단계에 걸쳐 일어난다.

1. `shouldComponentUpdate`에서 얕은 동질성 비교(Shallow euqality check) 수행 (`PureComponent`를 상속하지 않는다면 이 단계는 생략된다.)
2. Virtual DOM 업데이트 (1단계에서 `shouldComponentUpdate`가 `false`를 반환했다면 이 단계는 진행되지 않는다.)
3. Real DOM 업데이트 (2단계에서 새로 반환된 Virtual DOM을 이전 Virtual DOM과 비교한 후, 실제 변경이 일어난 부분에 대해서만 Real DOM 업데이트를 진행한다.)

리액트에서 이런 단계적 과정을 거쳐 뷰를 업데이트하는 이유는 Virtual DOM을 업데이트하고 비교하는 작업이 Real DOM을 비교하는 일보다 비용이 적게 들기 때문이다. 만일 Virtual DOM이 불필요하게 자주 업데이트되고 있다고 판단되면 `PureComponent`를 상속받거나 `shouldComponentUdpate` 내부에 직접 동질성 비교 로직을 작성하는 방식으로 불필요한 Virtual DOM 업데이트조차 막을 수도 있다. 단계가 높아질수록 더 많은 비용을 필요로 한다.

아래와 같이 각 단계별로 얼추 대략적인 비용을 매겨 각 상황에서 필요한 총 비용을 계산해보았다. 

* 1단계를 진행할 때 발생되는 비용: 1
* 2단계를 진행할 때 발생되는 비용: 10
* 3단계를 진행할 때 발생되는 비용: 100

### 뷰에 변화가 발생하지 않는 경우

|         상속 컴포넌트         | 1단계  | 2단계  | 3단계  | 총 비용 |
| ------------------------- | ----- | ----- | ----- | ----- |
|         `Component`       |   X   |   O   |   X   |  010  |
|       `PureComponent`     |   O   |   X   |   X   |  001  |

뷰에 실제적인 변화가 일어나지 않았을 경우에는 `PureComponent`를 상속받을 때 더 적은 비용이 발생한다.

### 뷰에 변화가 발생한 경우

|         상속 컴포넌트         | 1단계  | 2단계  | 3단계  | 총 비용 |
| ------------------------- | ----- | ----- | ----- | ----- |
|         `Component`       |   X   |   O   |   O   |  110  |
|       `PureComponent`     |   O   |   O   |   O   |  111  |

뷰에 변화가 일어났을 경우에는 오히려 `PureComponent`를 상속받을 때 더 많은 비용을 필요로 한다.

## 결론

컴포넌트의 인스턴스에 불필요한 리렌더링이 발생하고 있는 경우라면 해당 컴포넌트가 `PureComponent`를 상속받도록 선언한다. 예를 들어, 부모 컴포넌트가 업데이트되었지만 자식 컴포넌트에 전달되는 props 또는 state에는 변경이 없는 경우에 `PureComponent`의 이점을 얻을 수 있다.

반면에 업데이트 발생에 따라 리렌더링이 잦은 경우라면, 오히려 `Component`를 상속하도록 하여 얕은 동질성 비교조차 수행하지 않는 것이 이득이 된다.

## References

* [When to use Component or PureComponent](https://codeburst.io/when-to-use-component-or-purecomponent-a60cfad01a81)
* [Don't use PureComponent everywhere. - Dan Abramov's twitter](https://twitter.com/dan_abramov/status/759383530120110080)
* [Should I use React.PureComponent everywhere? - Stackoverflow](https://stackoverflow.com/questions/42756354/should-i-use-react-purecomponent-everywhere)
* [Optimizing React Rendering](https://news.ycombinator.com/item?id=14418054)
