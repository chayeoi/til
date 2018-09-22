# 동질성 비교

## Strict Equal, Shallow Equal and Deep Equal

### Strict Equal(using '===')

두 비교 대상이 Primitive type인 경우, 단순히 값이 같은지 확인한다. 만일 두 비교 대상이 Reference type(객체)이라면, 비교 대상인 두 객체가 참조하고 있는 대상이 같은지 확인한다.

```javascript
const foo = {
  name: 'Kim',
  schedules: [
    { date: '2018-07-10', content: 'Meet friends' },
    { date: '2018-07-15', content: 'Join a party' },
  ],
}

const bar = foo

console.log('Strict Equal', bar === foo) // Strict Equal true
console.log('Shallow Equal', shallowEqual(foo, bar)) // Shallow Equal true
console.log('Deep Equal', deepEqual(foo, bar)) // Deep Equal true
```

### Shallow Equal

비교 대상인 두 객체의 각 프로퍼티에 대하여 Strict Equality(===)를 체크한 후 그 결과가 모두 참이면 `true`를 반환하고, 하나라도 같지 않다면 `false`를 반환한다.

```javascript
const foo = {
  name: 'Kim',
  schedules: [
    { date: '2018-07-10', content: 'Meet friends' },
    { date: '2018-07-15', content: 'Join a party' },
  ],
}

const bar = {
  name: 'Kim',
  schedules: foo.schedules,
}

console.log('Strict Equal', bar === foo) // Strict Equal false
console.log('Shallow Equal', shallowEqual(foo, bar)) // Shallow Equal true
console.log('Deep Equal', deepEqual(foo, bar)) // Deep Equal true
```

### Deep Equal

비교 대상인 두 객체 내부에 중첩되어진 Primitive type을 갖는 모든 속성을 비교한 후, 그 결과가 모두 참이면 true를 반환한다.

```javascript
const foo = {
  name: 'Kim',
  schedules: [
    { date: '2018-07-10', content: 'Meet friends' },
    { date: '2018-07-15', content: 'Join a party' },
  ],
}

const bar = {
  name: 'Kim',
  schedules: [
    { date: '2018-07-10', content: 'Meet friends' },
    { date: '2018-07-15', content: 'Join a party' },
  ],
}

console.log('Strict Equal', bar === foo) // Strict Equal false
console.log('Shallow Equal', shallowEqual(foo, bar)) // Shallow Equal false
console.log('Deep Equal', deepEqual(foo, bar)) // Deep Equal true
```

## Reconciliation

* [Reconciliation](https://reactjs.org/docs/reconciliation.html) - React Docs

## Redux: connect()

* [connect API](https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) - react-redux
* [The most unknown redux performance trick](https://medium.com/@jidefr/the-most-unknown-redux-performance-trick-986fdfe871fa)
* [Redux's Mysterious Connect Function](https://medium.com/mofed/reduxs-mysterious-connect-function-526efe1122e4)
* [Optimizing Redux Components](https://medium.com/riipen-engineering/optimizing-redux-components-cbaad062abc7)

## Arrow Function in Class Property vs. Bound Function Using 'bind(this)'

* [Demystifying Memory Usage using ES6 React Classes](https://medium.com/dailyjs/demystifying-memory-usage-using-es6-react-classes-d9d904bc4557)
* [Use arrow functions or bind manually in es6 classes? Any performance difference?](https://github.com/facebook/react/issues/9851)
* [Arrow Functions in Class Properties Might Not Be As Great As We Think](https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1)
* [Arrow function vs bound function with 100 instances](https://jsperf.com/arrow-function-vs-bound-function-with-100-instances)