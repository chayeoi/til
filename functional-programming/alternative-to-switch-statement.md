# switch 문의 대안

```javascript
const matched = x => ({
  on: () => matched(x),
  otherwise: () => x,
})
const match = x => ({  
  on: (pred, fn) => (pred(x) ? matched(fn(x)) : match(x)),
  otherwise: fn => fn(x),
})
```

```javascript
match(50)
  .on(x => x < 0, () => 0)
  .on(x => x >= 0 && x <= 1, () => 1)
  .otherwise(x => x * 10)
// => 500
```

https://codeburst.io/alternative-to-javascripts-switch-statement-with-a-functional-twist-3f572787ba1c

https://toddmotto.com/deprecating-the-switch-statement-for-object-literals/
