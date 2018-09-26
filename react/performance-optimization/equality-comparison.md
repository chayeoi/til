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
