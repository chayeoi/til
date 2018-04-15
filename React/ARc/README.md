# ARc(Atomic React)

## 1. What is ARc?

ARc는 Atomic Design Methodology에 기반한 React Starter Kit으로, 다음 3가지 형태의 boilerplate을 제공하고 있다:

1. master: The basic stack with React, Webpack, react-router and Jest
2. redux: Master plus redux, redux-saga and redux-form
3. redux-ssr: Redux plus Server Side Rendering

## 2. Features

컴포넌트를 아주 작은 단위까지 나누고 특정 부분에 종속되도록 설계하지 않으므로 재사용성이 높아진다.
CRA(create-react-app)와 달리 Redux, Storybook, Enzyme, Styled Components 등에 관한 기본 설정이 모두 내장되어있으므로 개발 환경 세팅에 소요되는 시간을 단축시킬 수 있다.
webpack의 require.context와 정규식을 사용하여 컴포넌트를 한꺼번에 export하기 때문에, 특정 컴포넌트를 import할 때는 해당 컴포넌트가 어떤 하위 디렉토리에 있느냐에 상관없이 항상 'components'로 import하면 된다. 따라서 앱의 규모가 커지면서 특정 컴포넌트의 경로가 변경되더라도 해당 컴포넌트를 import하는 컴포넌트를 모두 일일이 수정할 필요가 없어지므로 유지보수하기 쉬워진다.
Testing을 위한 Jest, Enzyme 지원
UI 개발을 위한 Storybook 지원
Airbnb Style Guide 준수

## 3. Caveats

require.context를 통해 모든 컴포넌트를 한꺼번에 export하기 때문에 Code Splitting에 관한 이슈가 있다고 한다. Code Splitting이 필요한 경우라면 처음부터 직접 개발 환경을 구성하거나 CRA 같은 Scaffolding 도구를 이용하는 것이 더 좋을 것 같다.