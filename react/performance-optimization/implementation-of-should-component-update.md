# 얕은 비교를 활용하는 `shouldComponentUpdate` 구현하기

클래스 컴포넌트가 `React.Component`를 상속하고 있고 `shouldComponentUpdate`를 개발자가 직접 오버라이딩하지 않는 경우라면, `shouldComponentUpdate`는 기본적으로 `true`를 반환하기 때문에 컴포넌트의 업데이트 라이프사이클이 발생할 시 `render` 메소드의 재호출은 반드시 일어날 수 밖에 없다.

그러나 클래스 컴포넌트가 `React.PureComponent`를 상속하도록 하면, React는 내부적으로 `shouldComponentUpdate`에서 [얕은 동질성 비교(Shallow euqality check)](https://github.com/chayeoi/TIL/blob/master/react/performance-optimization/equality-comparison.md) 방식을 사용하여 다음 단계(`render` 메소드 재호출)의 진행 여부를 결정한다.

만일 단순히 `React.PureComponent`를 상속받는 방식으로는 부족하고 그보다 더 디테일한 비교가 필요한 경우라면, `shouldComponentUpdate` 내에 개발자가 직접 동질성 비교 로직을 작성하는 방식도 가능하다.

그렇다면 `React.PureComponent`를 상속할 때, 얕은 비교를 사용하는 `shouldComponentUpdate`의 내부 구현은 어떤 모습일까? 아마도 다음 코드와 비슷한 모습일 것이라고 생각된다.

```javascript
const shouldComponentUpdate = (nextProps) => (
  Object.keys(this.props).reduce((res, k) => (
    res && this.props[k] === nextProps[k]
  ), true)
)
```
