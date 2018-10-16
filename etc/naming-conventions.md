# 네이밍 컨벤션

네이밍은 항상 어렵다. 서버로부터 데이터를 응답받기 위한 메소드를 정의할 때만 해도 어쩔때는 get이고 또 어쩔 때는 fetch이다. load. 이런 부분들이 항상 너무 혼란스러웠다. 

'카멜케이스를 사용해야한다' 등의 당연한 얘기를 하려는 것이 아니고, 구체적으로 변수명을 어떻게 지어야 하는가, 규칙을 통일하기 위함이다.

## Arrays

복수형으로 작성한다.

```javascript
fruit
fruits
students
// great - "names" implies strings
const fruitNames = ['apple', 'banana', 'cucumber'];
// great
const fruits = [{
    name: 'apple',
    genus: 'malus'
}, {
    name: 'banana',
    genus: 'musa'
}, {
    name: 'cucumber',
    genus: 'cucumis'
}];
```

## Booleans

Booleans can hold only 2 values, true or false. Given this, using prefixes like “is”, “has”, and “can” will help the reader infer the type of the variable.

// bad
const open = true;
const write = true;
const fruit = true;
// good
const isOpen = true;
const canWrite = true;
const hasFruit = true;

What about predicate functions (functions that return booleans)? It can become tricky to name the value, after naming the function.

const user = {
    fruits: ['apple']
}
const hasFruit = (user, fruitName) => (
    user.fruits.includes(fruitName)
);
// what do we name this boolean?
const x = hasFruit(user, 'apple');
We can’t name the boolean hasProjectPermission, as we’ve already given that name to the function. In this case, I like to prefix my predicates with either check or get.

const checkHasFruit = (user, fruitName) => (
    user.fruits.includes(fruitName)
);
const hasFruit = checkHasFruit(user, 'apple');

Functions
Functions should be named using a verb, and a noun. Since functions perform some type of action on a resource, our name should reflect that. A good format to follow is actionResource. For example, getUser.

// bad
userData(userId)
userDataFunc(userId)
totalOfItems(items)
// good
getUser(userId);
calculateTotal(items);
A common convention I’ve seen used for transforming values is prefixing function names with to.

// I like it!
toDollars('euros', 20);
toUppercase('a string');
Another common naming pattern I like is when iterating over items. When receiving the argument inside the function, use the singular version of the array name.

// bad
const newFruits = fruits.map(x => {
    return doSomething(x);
});
// good
const newFruits = fruits.map(fruit => {
    return doSomething(fruit);
});

## 스타일드 컴포넌트

스타일드 컴포넌트에 Styled prefidx를 사용할 경우, 한 파일 내에서 다른 역할을 하는 두 개의 버튼에 대해 네이밍을 어떻게 할 것인지에 대한 고민이 생긴다.

Wrapper? Box? Container?

한 파일 내에서 사용된 스타일드 컴포넌트를 별도의 파일로 분리? 예를 들어, Modal.js와 Modal.sc.js

Some of my thoughts:

A naming prefix for the styled components could be a good solution. Eg: styledImage, styledWrapper
They have to be immediately recognisable as a styled-component, and not be confused with a component-component :)
It would be great to cut down on the number of 'wrappers'
Your styled components should really be reusable across your project - this means a naming convention that 'groups' it with the component may not be the best idea

Card.Header와 같이 . 오퍼레이터 사용

## 리덕스 사가

사이드 이펙트를 갖는 액션 타입에 대해서는 REQUEST, SUCCESS, FAILURE prefix를 붙인다.


https://github.com/styled-components/styled-components/issues/1604

http://www.informit.com/articles/article.aspx?p=131025&seqNum=3

https://tech.decisiv.com/structuring-our-styled-components-part-i-2bf21fa64b28
