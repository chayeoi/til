# Tagged template literals

> 2019년 1월 3일 JS 스터디 준비 자료입니다.

ES6에서 소개된 템플릿 리터럴 문법을 이용하면, `+` 연산자를 이용할 필요없이 문자열 중간에 변수(또는 표현식)를 끼워넣는 **문자열 인터폴레이션(interpolation)**을 허용할 수 있다.

```javascript
const name = 'Kim'

console.log(`Hello, ${name}!`)
```

ES6를 학습해본 경험이 있는 개발자라면, 방금 언급한 문자열 인터폴레이션은 이미 익숙한 기능일 것이라고 생각한다. 하지만 템플릿 리터럴의 활용은 여기에 그치지 않는다. 템플릿 리터럴의 한층 더 강화된 형태인 태그된 템플릿 리터럴(Tagged template literals)을 활용하면, **마치 함수인 것처럼 템플릿 리터럴을 실행**하는 일이 가능해진다. 이를 통해 템플릿 리터럴이 실제 문자열로 변환되는 과정을 더욱 강력히 제어할 수 있게 된다.

```javascript
const person = 'Mike'
const age = 28

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0] // 'That '
  const str1 = strings[1] // ' is a '
  const ageStr = ageExp > 99 ? 'centenarian' : 'youngster'

  return `${str0}${personExp}${str1}${ageStr}`
}

const output = myTag`That ${person} is a ${age}`

console.log(output) // That Mike is a youngster
```

위 예제에서 보는 것과 같이, **템플릿 리터럴 앞에 붙는 태그는 해당 템플릿 문자열을 파싱할 함수**로 정의된다.

태그 함수의 첫 번째 인자로 전달된 값은 문자열 인터폴레이션에 의해 나눠진 부분 문자열들의 배열이다. (위 예제의 경우 `['That ', ' is a ', '']`) 그 이후의 두 번째 인자부터는 템플릿 리터럴에 관계된 표현식들을 순차적으로 전달받게 된다. (위 예제의 경우 `'Mike'`, `28`을 순차적으로 전달받음)

## 무엇이 태그된 템플릿 리터럴을 강력하게 만드는가?

일반적인 템플릿 리터럴의 경우, 문자열 인터폴레이션(Interpolation)을 통해 전달된 표현식의 값은 문자열로 강제 형 변환이 일어난다.

```javascript
console.log(`1 + 1 = ${1 + 1}`) // "1 + 1 = 2"
console.log(`obj: ${{ a: 1 }}`) // obj: [object Object]
console.log(`func: ${x => x ** x}`) // func: x => x ** x
```

그러나 태그된 템플릿 리터럴의 경우, 문자열 인터폴레이션을 통해 전달된 표현식을 태그 함수 내부에서 직접 제어할 수 있다는 특징이 있다. 이를 통해 문자열 인터폴레이션을 통해 함수 또는 객체를 전달받은 후에 태그 함수 내부에서 원하는 작업을 수행하는 일이 가능해진다.

```javascript
const myFunction = () => {
  return 'Returned from myFunction!'
}

const templateResult = `Function expression in template: ${() => myFunction()}`
console.log(templateResult) // Outputs -> Function expression in template: () => myFunction()

const myTag = (literals, func) => {
  return literals[0] + func()
}

const taggedResult = myTag`Function expression in template: ${() => myFunction()}`
```

또한, 태그된 템플릿 리터럴이 반드시 문자열을 반환해야 할 필요는 없다. 그 어떤 값이라도 반환값으로 사용될 수 있다. 이러한 특징을 가장 잘 활용하는 라이브러리 중 하나가 바로 리액트 컴포넌트 스타일링을 위한 `styled-components`이다.

```jsx
const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
`
```

## References

* [Template literals (Template strings) - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
* [ES6 Tagged Template Literals - freeCodeCamp](https://medium.freecodecamp.org/es6-tagged-template-literals-48a70ef3ed4d)
