# Using Material UI with styled components

Material UI는 기본적으로 [JSS를 스타일링 솔루션으로 사용할 것을 권장](https://material-ui.com/getting-started/faq/#do-i-have-to-use-jss-to-style-my-app)하고 있다. 그러나 이미 나는 
프로젝트에서 JSS 대신 Styled components를 사용 중인 상황이라서, 지금 와서 스타일링 방식을 JSS로 변경하는 작업은 너무 비용이 큰 작업이라 생각했다. 그 대신, 어떻게 하면 Styled components를 Material UI와 더 유기적으로 결합할 수 있을 지를 고민해보기로 했다.

## CSS 우선순위 변경하기

Styled components를 사용하여 Material UI에서 제공되는 컴포넌트 스타일을 오버라이딩할 경우, 덮어씌운 스타일이 제대로 적용되지 않는 상황이 종종 있다. 이러한 문제는 Material UI 스타일 시트가 Styled components 스타일 시트보다 `<head>` 영역의 더 하단에 삽입되기 때문에 발생한다. "선택자의 구체성 점수가 같을 경우 더 나중에 선언한 스타일이 우선 적용된다."는 캐스케이딩 규칙에 의한 것이다.

이 문제를 해결하기 위한 두 가지 방법이 있다.

### 방법 1: `&&`를 사용하여 구체성 점수 높이기

Material UI에서 사전 정의되어있는 스타일과 Styled components를 이용한 사용자 정의 스타일의 구체성 점수가 같아서 발생하는 문제였으므로, 후자의 구체성 점수를 강제로 높이는 방법을 통해 문제를 해결할 수 있다.

```javascript
import { Button } from '@material-ui/core'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  && {
    border-radius: 2px;
  }
`
```

클래스 선택자의 구체성 점수를 10점이라고 한다면, Material UI에서 `Button` 컴포넌트의 스타일을 정의한 선택자는 10점, Styled components로 정의한 선택자는 20점이 되므로 사용자 정의 스타일 속성이 우선 적용된다.

그러나 매번 스타일을 덮어씌울 때마다 `&&`를 써야하는 것은 매우 귀찮은 일일 뿐더러 깔끔하지 못하다.

### 방법 2: Styled components 스타일 시트가 더 하단에 삽입되도록 강제하기

Styled components의 스타일 시트가 Material UI의 스타일 시트보다 하단에 삽입되도록 강제할 수만 있다면 위와 같이 매번 구체성 점수를 강제로 높이지 않아도 된다. 다음 절차에 따라 Material UI의 스타일 시트가 삽입되는 위치를 변경할 수 있다.

1. HTML 파일 내에 Material UI의 스타일 시트가 삽입되길 원하는 위치에 `<noscript>`를 다음과 같이 정의한다.

```jsx
<head>
  <noscript id="jss-insertion-point"></noscript>
  <link href="..." />
</head>
```

2. `App` 컴포넌트의 최상단 계층에서 `JssProvider`로 감싼다.

```jsx
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles'

const generateClassName = createGenerateClassName()
const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: document.getElementById('jss-insertion-point'),
})

function App() {
  return (
    <JssProvider jss={jss} generateClassName={generateClassName}>
      {/* ... */}
    </JssProvider>
  )
}

export default App
```

## 루트 요소가 아닌 자식 요소의 스타일 오버라이딩하기

Material UI에서 제공되는 컴포넌트의 스타일을 커스터마이징할 때, `styled` 함수를 통해 적용한 스타일 속성은 루트 요소에만 적용된다. 만약 루트 요소가 아닌 자식 요소의 스타일을 덮어씌우고 싶을 경우, 스타일 오버라이딩의 목적으로 제공되는 `classes` prop을 활용할 수 있다. 스타일 오버라이딩을 위해 `classes`에 전달할 객체에 사용될 수 있는 속성 목록은 각 컴포넌트의 API 문서에서 확인할 수 있다.

```jsx
import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const StyledButton = styled(({ color, ...other }) => (
  <Button classes={{ label: 'label' }} {...other} />
))`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);

  & .label {
    color: ${props => props.color};
  }
`

function StyledComponentsDeep() {
  return (
    <div>
      <Button>Material-UI</Button>
      <StyledButton color="papayawhip">Styled Components</StyledButton>
    </div>
  )
}

export default StyledComponentsDeep
```

만약 굳이 prop 필터링을 해야 할 필요가 없는 경우라면, `styled(Comp).attrs`를 활용하여 다음과 같이 쓸 수도 있다.

```jsx
const DialogStyles = styled(Dialog).attrs({
  classes: { paper },
})`
  .${paper} {
    /* ... */
  }
`
```

## Theme 주입하기

Material UI가 제공하는 `MuiThemeProvider`를 활용하면 theme을 통해 앱 스타일을 전체적으로 일관성 있게 관리할 수 있다. 예를 들어서 앱의 'primary' 색상을 '#00c896'으로 설정했다면, `Button` 컴포넌트에 `color="primary"`를 전달하는 것만으로 버튼의 색상을 `primary`로 지정할 수 있다. 뿐만 아니라 `withStyles`에 함수를 인수로 사용할 경우, `theme` 객체를 전달받을 수도 있다.

```jsx
<Button color="primary" />

withStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.unit,
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main,
  },
}))
```

그러나 `MuiThemeProvider`만으로는 `styled` 함수 내부에서는 `theme` 객체를 prop으로 제공받을 수 없다. 그닥 이뻐보이는 방법은 아니지만, `MuiThemeProvider`와 Styled components에서 제공하는 `ThemeProvider`를 중첩하는 형태로 사용함으로써 이 문제를 해결할 수 있다.

```jsx
import { ThemeProvider } from 'styled-components'
import { MuiThemeProvider } from '@material-ui/core/styles'

const App = () => (
  <ThemeProvider theme={theme}>
    <MuiThemeProvider theme={theme}>
      {/* ... */}
    </MuiThemeProvider>
  </ThemeProvider>
)
```

## 참고

* [Style Library Interoperability - Styled Components | Material UI](https://material-ui.com/guides/interoperability/#styled-components)
* [How to use styled components with Material UI in a React app | Benjamin Stirrup](https://medium.com/sipios/use-styled-components-with-material-ui-react-e0759f9a15ce)
