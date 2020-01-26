# Dynamic language selection in React Intl

`IntlProvider`에 제공되는 `locale` prop을 런타임에 동적으로 변경하더라도 자식 컴포넌트가 리렌더링되지 않기 때문에 문제가 발생할 수 있다. 이 문제를 해결하기 위해서는 `IntlProvider` 컴포넌트에 `key` prop을 추가하고 `locale` prop에 전달한 것과 같은 값으로 설정하면 된다. 이를 통해서 React는 로케일 정보가 변경되는 순간 바로 리렌더링되어야 함을 알 수 있다.

```jsx
<IntlProvider
  locale={localeProp}
  key={localeProp}
  messages={messagesProp}
>
  <App />
</IntlProvider>
```

## 참고 {docsify-ignore}

* [Dynamic language selection | React Intl](https://github.com/yahoo/react-intl/wiki/Components#dynamic-language-selection)
