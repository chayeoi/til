# Passed props in Styled Components

`styled`에 의해 생성된 컴포넌트에 대한 props 전달 방식은 `styled` 대상의 유형에 따라 달라진다.

## 'styled' 대상이 HTML 엘리먼트인 경우 (e.g. `styled.div`)

'styled' 대상이 `div`와 같은 DOM 엘리먼트인 경우, 사용자 정의 prop을 제외한 실제로 존재하는 HTML 표준 속성만이 DOM 노드에 넘겨진다.

## 'styled' 대상이 리액트 컴포넌트인 경우 (e.g. `styled(MyComponent)`)

'styled' 대상이 React 컴포넌트인 경우, 모든 prop이 타겟 컴포넌트에 전달된다.

## 예시

```jsx
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || 'palevioletred'};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`

render(
  <div>
    <Input defaultValue="@probablyup" type="text" />
    <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
  </div>
)
```

위의 예시에서 사용자 정의 prop인 `inputColor`는 `input` DOM 노드까지 전달되지 않는 반면, HTML 표준 속성인 `type`과 `defaultValue`는 정상적으로 넘겨질 것이다.

## 참고 {docsify-ignore}

* [Passed props | Styled components](https://www.styled-components.com/docs/basics#passed-props)
