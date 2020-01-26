# Why am I getting HTML attribute warnings?

`styled-components`를 사용하여 Material UI와 같은 UI 라이브러리에서 제공하는 컴포넌트를 커스터마이징하는 경우, 간혹 개발자 콘솔에서 다음과 같은 경고를 마주하게 된다.

> 1. Warning: Received `true` for a non-boolean attribute XXX
> 2. Warning: React does not recognize the `fooBar` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `foobar` instead. If you accidentally passed it from a parent component, remove it from the DOM element.

위 경고들은 스타일링을 위한 목적으로 사용한 HTML-Unknown prop이 DOM 엘리먼트까지 전달되었을 때 발생한다.

```jsx
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  color: ${props => props.active ? '#00c896' : '#000'};
`

// 이 경우에 `active`는 HTML 속성이 아니지만 `a` DOM 엘리먼트에 전달되므로 경고 발생
<StyledLink to="/" active>Home</StyledLink>
```

이 경고를 피하기 위해 스타일 관련 prop을 제외한 나머지 것들만 아래로 전달하도록 prop을 필터링하는 방법을 사용할 수 있다.

```jsx
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(({ active, ...otherProps }) => <Link {...otherProps} />)`
  color: ${props => props.active ? '#00c896' : '#000'};
`

<StyledLink to="/" active>Home</StyledLink>
```

## 참고 {docsify-ignore}

* [Why am I getting HTML attribute warnings? | Styled components](https://www.styled-components.com/docs/faqs#why-am-i-getting-html-attribute-warnings)
* [Prevent All Props Being Passed Down By Styled Components | Darren Lester](https://www.darrenlester.com/blog/prevent-all-props-being-passed)
* [Allow mapping and filtering props | styled-components/styled-components #411, wmertens](https://github.com/styled-components/styled-components/issues/411)
* [Separate HTML attributes from styling props | styled-components/styled-components #439, jspangler](https://github.com/styled-components/styled-components/issues/439)
