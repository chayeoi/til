# Naming Styled Components

`styled components`를 사용하면 전통적인 CSS 작업에서 스타일 대상 요소와 `className`을 일일이 연결지어야 했던 수고를 덜 수 있다. 그저 스타일이 덧씌워진 컴포넌트를 선언한 후 `render` 메서드에서 그 컴포넌트를 렌더링하도록 하면 된다. `styled components`를 사용한 이후부터 클래스 네이밍을 고민할 필요가 없어졌지만, 반대로 styled 컴포넌트 네이밍에 관한 고민이 생겼다. 그리고 이는 클래스 네이밍보다 더 많은 문제를 고민하게 만들었다.

## 고민 1: Root 요소 네이밍

예를 들어, `Header` 컴포넌트를 다음과 같은 구조로 작성한 상황이라고 하자.

```jsx
// Header.js

const Header = () => (
  <header>
    <h1>chayeoi</h1>
    <p>Welcome to your visit.</p>
  </header>
)
```

이제 여기에 스타일을 덧씌우기 위해서 `header`, `h1` , `p` 각 요소에 대한 styled 컴포넌트를 정의해야 한다. 보통 HTML 태그 이름을 그대로 따서 컴포넌트의 이름을 짓는데, 이 상황에서 그렇게 할 경우 `Header` 이름의 중복이 발생한다.

```jsx
// Header.js

const Header = styled.header``

const Title = styled.h1``

const Paragraph = styled.p``

const Header = () => (
  <Header> {/* 에러 발생! */}
    <Title>chayeoi</Title>
    <Paragraph>Welcome to your visit.</Paragraph>
  </Header>
)
```

이름이 충돌하는 문제를 피하기 위해서 루트 요소의 이름을 항상 `Wrapper`로 짓거나 `StyledHeader`와 같이 'Styled' 접두사를 붙이는 방법을 사용하곤 한다.

```jsx
// Header.js

const Wrapper = styled.wrapper`` // 또는 const StyledHeader = styled.header``

const Title = styled.h1``

const Paragraph = styled.p``

const Header = () => (
  <Wrapper>
    <Title>chayeoi</Title>
    <Paragraph>Welcome to your visit.</Paragraph>
  </Wrapper>
)
```

그러나 `Wrapper`라는 이름은 너무 일반적이면서 역할을 잘 드러내지 못하고 있는 듯 했다. `Styled` 접두사를 붙이는 방식은 스타일이 덧씌워진 컴포넌트라는 사실을 명확히 드러내주지만, 불필요하게 컴포넌트의 이름을 길게 만들어버린다는 느낌을 주었다.

## 고민 2: semantic한 네이밍과 단순 스타일 목적을 나타내는 네이밍의 혼재

styled 컴포넌트에 `Styled` 접두사를 붙이는 방식은 내가 생각했을 때 아래와 같은 문제들을 갖고 있었다.

1. 컴포넌트 이름이 쓸데없이 장황해짐
2. 스타일링된 컴포넌트임을 명확히 드러내주는 반면, 컴포넌트의 역할과 책임은 잘 드러내주지 못함

그렇다고 해서 앞선 경우의 `Title`, `Pargraph`와 같이 semantic한 네이밍을 사용할 경우, 어떤 컴포넌트가 스타일링된 컴포넌트인지 한 눈에 파악하기 힘들다는 문제가 생겼다. 어느 것도 마음에 완벽히 들지 않았기 때문에, 결국 명확한 기준없이 두 가지 방식을 혼합해서 사용해오고 있었다.

## 고민 3: UI 라이브러리에서 제공하는 컴포넌트와 충돌하는 이름

Material UI와 같은 UI 라이브러리를 사용할 때, 대부분의 경우에 제공되는 형태를 그대로 사용하지 않고 어느정도 커스터마이징하여 사용한다. 예를 들어서, 언어 변경 드롭다운 UI를 구현하기 위해 Material UI에서 제공하는 `Select` 컴포넌트 스타일을 커스터마이징할 수 있을 것이다.

```jsx
import { Select } from '@material-ui/core'

const StyledSelect = styled(Select)``

const LanguageSelect = () => (
  <StyledSelect>
    <option>Korean</option>
    <option>English</option>
    <option>Japanese</option>
  </StyledSelect>
)
```

별 문제가 없긴 하지만, 앞서 얘기한 것처럼 매번 `Styled` 접두사를 붙이는 건 그리 마음에 들지 않았다. 그래서 다음과 같이 import하는 컴포넌트에 별칭을 지어주는 방식도 생각해봤다.

```jsx
import { Select as MuiSelect } from '@material-ui/core'

const Select = styled(MuiSelect)``

const LanguageSelect = () => (
  <Select>
    <option>Korean</option>
    <option>English</option>
    <option>Japanese</option>
  </Select>
)
```

그런데 import하는 모든 컴포넌트마다 이렇게 매번 새 별칭을 짓는건 불필요하게 코드가 장황해지고, 그렇다고 반드시 필요한 상황에서만 별칭을 짓는 건 일관성이 없어보여서 마음에 들지 않았다.

## 해결책: styled 컴포넌트의 네임스페이스 정의하기

styled 컴포넌트를 묶어줄 네임스페이스 `S`를 정의함으로써 앞서 했던 모든 고민들을 꽤 말끔하게 해결할 수 있다.

```jsx
// Header.js
import { Select } from '@material-ui/core'

const S = {
  Header: styled.header``,
  Title: styled.h1``,
  Paragraph: styled.p``,
  Select: styled(Select)``,
}

const Header = () => (
  <S.Header>
    <div>
      <S.Title>chayeoi</S.Title>
      <S.Paragraph>Welcome to your visit.</S.Paragraph>
    </div>
    <S.Select>
      <option>Korean</option>
      <option>English</option>
      <option>Japanese</option>
    </S.Select>
  </S.Header>
)
```

1. `S.ComponentName`과 같이 `S` 네임스페이스에 정의된 컴포넌트는 스타일링된 컴포넌트임을 한 눈에 파악할 수 있음
2. semantic한 컴포넌트 이름을 그대로 사용할 수 있음
3. `Styled` 접두사를 붙이는 것만큼 장황하지 않음
4. 루트 요소 이름 충돌이 발생하지 않음
5. UI 라이브러리에서 제공된 컴포넌트에 별칭을 붙이지 않아도 이름 충돌이 발생하지 않음

네임스페이스의 이름을 `Styled` 또는 styled components를 줄여서 `SC`로 지을까도 생각해봤지만, 제일 간단하게 한 글자로 `S`를 사용하기로 했다.

현재 진행 중인 프로젝트에서 우선적으로 shared 컴포넌트들에 이 패턴을 적용했고, 아직까진 별다른 문제를 찾지 못했다. 조만간 모든 feature에 대해서도 이 패턴을 적용하도록 리팩토링할 생각이다.

## 참고 {docsify-ignore}

* [Naming Styled Components | Orry Baram](https://medium.com/inturn-eng/naming-styled-components-d7097950a245)
