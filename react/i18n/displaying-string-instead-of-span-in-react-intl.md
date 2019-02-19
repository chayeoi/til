# Displaying string instead of span in react-intl

`react-intl` 라이브러리의 `Formatted*` 컴포넌트를 사용하여 텍스트를 출력하면 해당 텍스트가 기본적으로 `span` 요소로 래핑되어 보여진다. 이 기본 설정을 피하고 문자열 그 자체만 보여주고 싶다면 `IntlProvider`의 `textComponent` prop으로 `Fragment`를 전달하면 된다.

```jsx
import React, { Fragment } from 'react'
import { IntlProvider } from 'react-intl'

const App = () => (
  <IntlProvider textComponent={Fragment}>
    {/* ... */}
  </IntlProvider>
)
```

## 참고

* [Display string instead of <span> element - yahoo/react-intl](https://github.com/yahoo/react-intl/issues/987#issuecomment-355724948)
