# How does tree shaking work in webpack v4?

트리 쉐이킹(Tree shaking)이란, 사용되지 않아 필요가 없어진 코드를 번들링을 수행하는 과정에서 제거하는 작업을 일컫는다. 마치 나무를 흔들면 말라버린 잎사귀가 떨어지는 모습처럼 말이다.

웹팩 v4에서 수행되는 트리 쉐이킹은 다음과 같은 특징을 갖는다.

1. commonJS 모듈 방식을 사용한 코드에 대해서는 수행되지 않는다. ES Module 문법과 같은 정적 모듈 구조(Static sturcture)에 대해서만 트리 쉐이킹 작업이 수행된다.
2. 웹팩 v4는 기본적으로 프로덕션 빌드에 대해서만 트리 쉐이킹 작업을 수행한다.
3. 웹팩 v4의 `optimization.providedExports` 옵션은 `export * from ...`와 같은 문법에 대해서도 최적화된 코드를 생성할 수 있는 방법을 제공한다. 기본적으로 활성화되어 있는 옵션이므로 `false`로 명시하지 않을 시 위 문법에 대한 최적화 작업이 진행된다.
4. 트리 쉐이킹 작업을 수행 시 사용하지 않는 코드는 자동적으로 탈락된다. 이로 인해 부수 효과(Side effect)가 발생할 수 있는데, 웹팩은 코드를 직접 수행해보지 않는 이상 잠재적인 부수 효과의 발생 여부를 판단할 수 없다. 그 대신 외부 라이브러리의 package.json에 개발자가 직접 명시한 `sideEffects` 필드를 보고 부수 효과의 발생 여부를 판단한다. 이 필드가 `false`로 설정되어있어야만 번들링 과정에서 트리 쉐이킹을 적용받을 수 있다.

## References

* [Tree shaking - Webpack](https://webpack.js.org/guides/tree-shaking/)
* [Webpack 4의 Tree Shaking에 대한 이해 - Huns.me.](http://huns.me/development/2265)
