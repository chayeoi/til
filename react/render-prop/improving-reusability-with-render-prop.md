# Render prop 기법을 활용하여 컴포넌트의 재사용성 높이기

가령, 버튼이 클릭되었을 때 사용자 연락처 리스트를 나열하는 `Contacts` 컴포넌트를 다음과 같이 구현할 수 있다.

```jsx
import React, { Component } from 'react'

class Contacts extends Component {
  state = { open: false }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }))
  }

  render() {
    const { handleClick } = this
    const { open } = this.state
    return (
      <div>
        <button type="button" onClick={handleClick}>연락처</button>
        {open && (
          <ul>
            <li>김찬연: 010-1111-1111</li>
            <li>정일영: 010-2222-2222</li>
            <li>조명곤: 010-3333-3333</li>
          </ul>)}
      </div>
    )
  }
}
```

이에 더해, 일정 목록을 나열하는 `Schedules` 컴포넌트가 있다고 한다면 `Contacts`와 매우 흡사한 방식으로 구현할 수 있을 것이다. 화면에 보여져야하는(Presentional) 부분을 제외한 두 컴포넌트의 인터랙션 로직은 완전히 동일하다.

```jsx
import React, { Component } from 'react'

class Schedules extends Component {
  state = { open: false }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }))
  }

  render() {
    const { handleClick } = this
    const { open } = this.state
    return (
      <div>
        <button type="button" onClick={handleClick}>일정</button>
        {open && (
          <ul>
            <li>2018년 10월 28일: 사내 FE 스터디</li>
            <li>2018년 10월 29일: Mash-Up 신입 기수 오리엔테이션</li>
            <li>2018년 10월 30일: Mash-Up 웹 FE 스터디</li>
          </ul>)}
      </div>
    )
  }
}
```

이처럼 매번 비슷한 동작을 하는 컴포넌트를 복사 + 붙여넣기하면서 개발해나가는 방식이 완전히 잘못된 것은 아니지만, 너무나도 비효율적인 방법이 아닐 수 없다. `Contacts`와 `Schedules`에서 달라진 부분은 오직 뷰 뿐이므로 그 이외의 부분을 재사용할 수 있다면 훨씬 더 유연하게 코드를 작성해나갈 수 있을 것이다.

## 해결책 1: 특정 prop의 값에 따라 렌더링 로직 분기시키기

첫 번째 해결책은 `Contacts`와 `Schedules`를 `Collapse`라는 이름의 컴포넌트로 추상화시킨 다음, `type` prop에 따라 렌더링 로직을 분기시키는 것이다.

```jsx
import React, { Component } from 'react'

class Collapse extends Component {
  state = { open: false }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }))
  }

  render() {
    const { handleClick } = this
    const { open } = this.state
    const { type } = this.props

    switch (type) {
      case 'contacts':
        return (
          <div>
            <button type="button" onClick={handleClick}>연락처</button>
            {open && (
              <ul>
                <li>김찬연: 010-1111-1111</li>
                <li>정일영: 010-2222-2222</li>
                <li>조명곤: 010-3333-3333</li>
              </ul>)}
          </div>
        )
      case 'schdeules':
        return (
          <div>
            <button type="button" onClick={handleClick}>일정</button>
            {open && (
              <ul>
                <li>2018년 10월 28일: 사내 FE 스터디</li>
                <li>2018년 10월 29일: Mash-Up 신입 기수 오리엔테이션</li>
                <li>2018년 10월 30일: Mash-Up 웹 FE 스터디</li>
              </ul>)}
          </div>
        )
      default:
        return null
    }
  }
}
```

이렇게 함으로써 일단은 연락처 목록과 일정 목록 간에 인터랙션 로직을 재사용할 수 있게 되었다. 그런데 만약 메세지 목록을 보여주기 위해 `contacts`, `schedules`와 동일한 인터랙션 로직을 재사용하는 `messages`가 추가되어야한다면? 어쩔 수 없이 기존 `Collapse` 컴포넌트의 렌더링 로직에 `messages`에 대한 케이스를 직접 추가하는 수 밖에 없다. 기존에 존재하던 케이스에서 아주 사소한 부분만 달라지더라도 
매번 그에 대한 새로운 케이스를 추가해야하기 때문에 그닥 유연한 방법은 아닌 듯하다.

## 해결책 2: 리액트 엘리먼트를 prop으로 전달하기

`Collapse` 컴포넌트에 리액트 엘리먼트를 prop으로 전달하는 방법도 가능하다. 이때 prop으로 전달된 리액트 엘리먼트에 이벤트 핸들러를 맵핑하기 위해, 일반적인 방법은 아니지만 `React.Children`과 `React.cloneElement`를 사용하여 새 리액트 엘리먼트를 반환하도록 해야 한다.

(참고로 [리액트 컴포넌트와 엘리먼트](https://medium.com/@dan_abramov/react-components-elements-and-instances-90800811f8ca)는 다르다. 간단히 구분하자면, `<Comp />`는 리액트 엘리먼트이고 `Comp`는 리액트 컴포넌트이다.)

```jsx
import React, { Component } from 'react'

class Collapse extends Component {
  state = { open: false }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }))
  }

  render() {
    const { handleClick } = this
    const { open } = this.state
    const { button, children } = this.props

    return (
      <div>
        {React.Children.map(button, children => React.cloneElement(child, { onClick: handleClick }))}
        {open && children}
      </div>
    )
  }
}

const Contacts = () => (
  <Collapse button={<button type="button">연락처</button>}>
    <ul>
      <li>김찬연: 010-1111-1111</li>
      <li>정일영: 010-2222-2222</li>
      <li>조명곤: 010-3333-3333</li>
    </ul>
  </Collapse>
)

const Schedules = () => (
  <Collapse button={<button type="button">일정</button>}>
    <ul>
      <li>2018년 10월 28일: 사내 FE 스터디</li>
      <li>2018년 10월 29일: Mash-Up 신입 기수 오리엔테이션</li>
      <li>2018년 10월 30일: Mash-Up 웹 FE 스터디</li>
    </ul>
  </Collapse>
)
```

이 패턴을 활용하여 더 이상 `Collapse` 컴포넌트 내부의 로직을 건드릴 필요없이 동일한 인터랙션 로직을 재사용할 수 있기 때문에, 이전 방법보다 더 쉽고 유연한 확장이 가능해졌다. 그러나, `Collapse` 내부의 `handleClick` 이벤트 핸들러는 오로지 `button` prop으로 전달된 엘리먼트에 대해서만 맵핑되며, `children` prop으로 전달된 엘리먼트는 `open` 스테이트에 따라 조건부 렌더링이 일어날 수 밖에 없다는 제약을 갖고 있다. 만일 이러한 맵핑 방식 또는 `open` 스테이트에 따른 처리 방식을 변경하고 싶다면 어쩔 수 없이 `Collapse` 컴포넌트를 수정하는 방법 밖에는 없을 것이다.

## 해결책 3: Render prop 기법 활용하기

리액트 엘리먼트가 아닌 리액트 컴포넌트를 prop으로 전달하도록 코드를 변경한다.

```jsx
import React, { Component } from 'react'

class Collapse extends Component {
  state = { open: false }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }))
  }

  render() {
    const { handleClick } = this
    const { open } = this.state
    // 방법 1: `children()`
    const { children, ...rest } = this.props
    return children({ onClick: handleClick, open, ...rest })

    // 방법 2: `<Component />`
    // const { children: Component, ...rest } = this.props
    // return <Component onClick={handleClick} open={open} {...rest} />
  }
}

const Contacts = () => (
  <Collapse>
    {({ onClick, open }) => (
      <div>
        <button type="button" onClick={onClick}>연락처</button>
        {open && (
          <ul>
            <li>김찬연: 010-1111-1111</li>
            <li>정일영: 010-2222-2222</li>
            <li>조명곤: 010-3333-3333</li>
          </ul>)}
      </div>)}
  </Collapse>
)

const Schedules = () => (
  <Collapse>
    {({ onClick, open }) => (
      <div>
        <button type="button" onClick={onClick}>연락처</button>
        {open && (
          <ul>
            <li>2018년 10월 28일: 사내 FE 스터디</li>
            <li>2018년 10월 29일: Mash-Up 신입 기수 오리엔테이션</li>
            <li>2018년 10월 30일: Mash-Up 웹 FE 스터디</li>
          </ul>)}
      </div>)}
  </Collapse>
)
```

앞선 두 번째 해결책과 달라진 점은, `handleClick` 이벤트 핸들러와 `open` 스테이트를 외부로 공개(expose)하여 뷰 렌더링에 대한 제어권을 완전히 `Collapse` 밖으로 넘겼다는 것이다. `Collapse` 컴포넌트는 정확히 인터랙션 로직에 대해서만 관여하고 있다. 이전과 달리 `Collapse` 상위 레벨에서 `handleClick` 이벤트 핸들러를 원하는 엘리먼트에 맵핑할 수 있고, `open` 스테이트에 따라 어떤 작업을 수행할 지 직접 처리하는 일이 가능해졌다.

## A few questions

개인적으로 `this.props.children(props)`보다 `this.props.children`을 `Component`라는 이름의 변수에 저장한 다음 `<Component {...props} />`로 표현하는 방법이 좀 더 깔끔하다는 느낌을 받았다. JSX 표현식과 동일하게 `<>` 기호를 사용하는 방식이 더 일관되어 보였기 때문이다. 그런데 지금까지 Render prop 기법에 대해 설명하는 여러 글들을 읽어봤지만, 후자의 방식을 사용한 경우는 한 번도 보지 못했다. 후자의 방식은 개인적으로 Render prop 기법을 공부하다가 "저런 형식으로 표현할 수도 있지 않을까"하고 생각해봤던 방식인데, 이 방식에 어떤 문제가 존재하는 것인지 궁금하다.

## References

* [Learn Render Props by Example](https://engineering.dollarshaveclub.com/learn-render-props-by-example-da3e2524dd2e)
