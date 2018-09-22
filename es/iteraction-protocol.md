# Iteration Protocol

## Iterable

이터러블(Iterable)은 ES2015에서 새롭게 추가된 순회가능한 자료 구조를 일컫는다. `Symbol.iterator`를 키로 사용한 메소드를 구현하는 것에 의해 순회 가능한 자료구조인 이터러블이 된다.

## Iterator

`Symbol.iterator`를 프로퍼티 key로 사용한 메소드는 이터레이터를 반환한다. 이터레이터는 순회 가능한 자료 구조인 이터러블의 요소를 탐색하기 위한 포인터로서 `next()` 메소드를 갖는 객체이다. `next()` 메소드는 `value`, `done` 프로퍼티를 갖는 객체를 반환하며 이 메소드를 통해 이터러블 객체를 순회할 수 있다.

## Built-in Iterable

Iteration Protocol을 준수하고 있는 Built-in Iterable 객체는 다음과 같은 것들이 있다.

* Array
* String
* Map
* Set
* DOM data structures

## References

* [Poiemaweb - Iteration Protocol](http://poiemaweb.com/es6-iteration-for-of)