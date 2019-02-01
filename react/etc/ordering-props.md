# Ordering props

모든 컴포넌트에 일관성 있는 props 정렬 규칙을 적용하기 위한 몇 단계의 질문지를 만들어보았다.

이에 덧붙여, **생성된 각 범주 내에서는 알파벳 순(Alphabetical order)에 따라 정렬**하도록 하는 규칙을 정했다.

## 1. Does a prop have a boolean value?

Boolean value를 갖는 prop을 제일 나중에 나열한다.

* `checked`
* `selected`
* `disabled`

### 1.1 Is it a bit of a shorthand?

Boolean prop을 나열하는 경우, 축약 표기된 prop을 마지막에 나열한다.

```jsx
<input
  type="checkbox" // Non-boolean prop
  onChange={handleChange} // Non-boolean prop
  selected={selected} // 축약 표기되지 않은 boolean prop
  disabled // 축약 표기된 boolean prop
/>
```

## 2. Is prop's name reserved?

React 내부적으로 예약된 이름을 갖는 prop을 우선적으로 나열한다.

### 2.1 Isn't it a prop?

`key`와 `ref`는 React에서 prop이 아니지만 예약된 키워드이므로 이 범주에 집어넣었다. `key`와 `ref`를 제일 우선 나열한다.

* `key`
* `ref`

### 2.2 Is it reserved by React?

React 내부적으로 사용법이 약속된 이름의 prop을 `key`, `ref`의 다음 순서로 나열한다. 

* `chilren`: prop name을 직접 명시하기보다 네스팅된 구조로 표현하는 방식을 권장한다.
* `dangerouslySetInnerHTML`

## 3. Is it a DOM-related props?

DOM 관련 prop을 예약된 이름의 prop 다음 순서로 나열한다. 또한, 이 범주로 묶인 prop들 간에는 알파벳 순 정렬 규칙을 적용하지 않는다. 알파벳 순이 아닌 중요도에 따라 나열하는 것이 더 자연스러운 방식이기 때문이다.

* `img` related props
  1. 'src'
  2. 'alt'
* `a` related props
  1. `href`
  2. `target`
* `input` related props
  1. `type`
  2. `name`
  3. `value`

### 3.1 Is it a global props? 

DOM 요소의 global attribute에 대응되는 prop이 요소 element-specific attribute에 대응되는 prop보다 우선 위치한다.

* `style`
* `className`
* `id`
* `data-*`
* `aria-*`

### 3.2 Is it a element-specific props?

* `href`
* `type`
* `value`
* `htmlFor`
* 
## 4. Is it a render prop?

render prop을 boolean prop의 바로 앞에 나열한다.

## 5. Is prop's name prefixed with 'on'?

'on' 접두사로 시작하는 이벤트 핸들링 prop을 render prop의 바로 앞에 나열한다.

### 5.1 Is it a real event name?

실제 존재하는 이벤트 핸들링을 위한 prop을 우선적으로 나열한다.

* `onBlur`
* `onFooBlur`
* `onChange`
* `onFooChange`
* `onClick`
* `onFooClick`
* `onSubmit`

```jsx
<input
  type="text"
  onBlur={onBlur}
  onFooBlur={onFooBlur}
  onChange={onChange}
  onFooChange={onFooChange}
  onClick={onClick}
  onFooClick={onFooClick}
  onSubmit={onSubmit}
  onClose={onClose}
  onSearch={onSearch}
/>
```

### 6. Is there nothing to be matched?

위 질의 사항에 해당한 케이스가 없다면 custom prop으로 간주하고 남은 자리에 나열한다.

## 최종 정렬 순서

최종적으로 다음과 같은 순서를 가질 것이다.

```
Non-boolean
  Reserved
    Not a prop
    React-specific
  DOM-related
    Global
    Element-specific
  Custom
  Prefixed at 'on'
  'render' prop
Bolean
  Non-shorthand
    DOM-related
    Custom
  Shorthand
    DOM-related
    CUstom
```

간략한 예시를 들어보자면 다음과 같다.

```jsx
<Example
  key={key}
  ref={ref}
  dangerouslySetInnerHTML={dangerouslySetInnerHTML}
  className={className}
  id={id}
  style={style}
  href={href}
  src={src}
  type={type}
  value={value}
  foo={foo}
  bar={bar}
  baz={baz}
  onBlur={handleBlur}
  onChange={handleChange}
  onFooChange={handleFooChange}
  onBarChange={handleBarChange}
  onClick={handleClick}
  onSubmit={handleSubmit}
  onClose={handleClose}
  onSearch={handleSearch}
  render={render}
  checked={checked}
  selected={selected}
  disabled={disabled}
  active
>
  {children}
</Example>
```

## References

* [eslint-plugin-react - Enforce props alphabetical sorting (react/jsx-sort-props)](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md)
