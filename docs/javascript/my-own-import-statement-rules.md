# import 구문 규칙

## import 구문 나열 규칙

크게 다음 순서로 import 구문을 나열한다.

1. 절대 경로
2. Webpack alias 경로
3. 상대 경로

### 1. 절대 경로

1. 코어 라이브러리 순으로 나열한다. React 프로젝트인 경우, 다음 순서로 나열한다.
   1. Must(`react`)
   2. `prop-types`
   3. `react-intl`

### 2. Webpack alias 경로

### 3. 상대 경로

1. Webpack alias 경로가 있을 경우, 상대 경로
2. core (사용 빈도 순)
3. type에 따른 순서로 분류한다.
  1. 사용 중인 메인 라이브러리 또는 프레임워크가 있다면 제일 먼저 import한다.
4. 상대 경로 import 시, 상위 폴더에 대한 접근은 현재 폴더에 대한 접근보다 우선 위치한다.
5. 

Consider leaving one empty line between third party imports and application imports.
Consider listing import lines alphabetized by the module.
Consider listing destructured imported symbols alphabetically.
Why? The empty line separates your stuff from their stuff.
Why? Alphabetizing makes it easier to read and locate symbols.

third party imports vs application imports

core imports

core 라이브러리를 정하고 중요도 순으로 그 순서를 정하자.

## default, named

## global import

Absolute javascript (.js, .jsx, .es6, .es) modules, not type imports
Absolute typescript (.ts, .tsx) modules, not type imports
Absolute styles (.css, .scss, .less) modules, not type imports
Absolute any other type of modules, not type imports
Absolute type imports (import type ... from '...';)
Relative javascript (.js, .jsx, .es6, .es) modules, not type imports
Relative typescript (.ts, .tsx) modules, not type imports
Relative styles (.css, .scss, .less) modules, not type imports
Relative any other type of modules, not type imports
Relative type imports (import type ... from '...';)

```javascript
import * as Foo from 'a'
import Foo from 'a'
import { boo, foo, Bar, Foo } from 'a'
import { Foo as foo } from 'a'

```

폴더랑 파일 직접 참조 간의 우선순위 결정

https://palantir.github.io/tslint/rules/ordered-imports/
https://github.com/airbnb/javascript/issues/616
