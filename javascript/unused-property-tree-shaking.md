# 사용되지 않는 객체 프로퍼티 트리쉐이킹

ES6 Module 방식으로 불러온 객체에서 사용되지 않은 프로퍼티들은 트리쉐이킹 과정에서 제거된다고 한다. 트리쉐이킹 작업이 모듈을 named export 형태로 불러오는 상황에서 사용되지 않는 모듈을 제거해주는 것으로만 알고 있었는데, 사용되지 않는 객체의 프로퍼티까지 제거해준다고 하니 정말 놀랍다.

```javascript
// myInfo.js
export const myInfo = {
    name: 'Ire Aderinokun',
    birthday: '2 March',
}

// main.js
import { myInfo } from './myInfo.js'

console.log(myInfo.name)
```

위 코드에서는 `myInfo` 객체를 named import 형태로 불러오고 있는데, 실제로 사용되는 프로퍼티는 `name` 밖에 없기 때문에 트리쉐이킹 과정에서 `birthday` 프로퍼티가 제거되어 최종 번들링된 파일에는 포함되지 않는다.

## 객체 프로퍼티 트리쉐이킹 동작 테스트

앞서 이야기했던 객체 프로퍼티 트리 쉐이킹에 관한 내용을 공식 문서에서 읽은 것은 아니라서, 실제로 잘 동작하는지 몇몇 케이스에 관해 직접 테스트해보았다. 진입 파일인 'main.js'에서는 `exporter.sagas`만 참조하는 상황을 만들었는데, 최종 번들링된 파일에 `exporter.selectors`가 포함되어있지 않으면 트리쉐이킹이 정상 동작한 것으로 판단했다.

> 트리쉐이킹은 `webpack.config.js`에서 `mode`가 `'producution'`일 경우에만 동작한다.

### 케이스 1: named import로 불러온 객체를 default export로 내보내기

```javascript
// exporter.js
import * as sagas from './sagas'
import * as selectors from './selectors'

export default { sagas, selectors }

// main.js
import exporter from './exporter'

console.log(exporter.sagas)
```

이 경우에 최종 번들링된 파일에 `exporter.selectors`가 포함되어있었으므로 **트리쉐이킹이 정상 동작하지 않은 것으로 판단**했다.

### 케이스 2: named import로 불러온 객체를 named export로 내보내기

```javascript
// exporter.js
import * as sagas from './sagas'
import * as selectors from './selectors'

export { sagas, selectors }

// main.js
import * as exporter from './exporter'

console.log(exporter.sagas)
```

이 경우에 최종 번들링된 파일에 `exporter.selectors`가 포함되어있지 않았으므로 **트리쉐이킹이 정상 동작한 것으로 판단**했다.

이러한 최적화가 이뤄진 이유는 아마도 `optimization.providedExports` 옵션 덕분인 것으로 추측된다.

### 케이스 3: 직접 정의한 프로퍼티를 갖는 객체를 default export로 내보내기

```javascript
// exporter.js
export default {
  sagas: { foo: () => console.log('foo') },
  selectors: { bar: () => console.log('bar') },
}

// main.js
import exporter from './exporter'

console.log(exporter.sagas)
```

이 경우에 최종 번들링된 파일에 `exporter.selectors`가 포함되어있지 않았으므로 **트리쉐이킹이 정상 동작한 것으로 판단**했다.

### 케이스 4: named import로 불러온 객체(sagas)를 직접 정의한 프로퍼티와 함께 default export로 내보내기

```javascript
// exporter.js
import * as sagas from './sagas'

export default {
  sagas,
  selectors: { bar: () => console.log('bar') },
}

// main.js
import exporter from './exporter'

console.log(exporter.sagas)
```

이 경우에 최종 번들링된 파일에 `exporter.selectors`가 포함되어있지 않았으므로 **트리쉐이킹이 정상 동작한 것으로 판단**했다.

### 케이스 5: named import로 불러온 객체(selectors)를 직접 정의한 프로퍼티와 함께 default export로 내보내기

```javascript
// exporter.js
import * as selectors from './selectors'

export default {
  sagas: { foo: () => console.log('foo') },
  selectors,
}

// main.js
import exporter from './exporter'

console.log(exporter.sagas)
```

이 경우에 최종 번들링된 파일에 `exporter.selectors`가 포함되어있었으므로 **트리쉐이킹이 정상 동작하지 않은 것으로 판단**했다.

케이스 4와 5의 결과를 바탕으로 추측해보았을 때, named export한 객체를 default export한 객체의 프로퍼티로 포함시킬 경우에는 최적화가 적용되지 않는 듯하다. 정확한 이유는 파악하지 못했다.

## 참고 {docsify-ignore}

* [What is tree shaking and how does it work? | Ire Adeinokun](https://bitsofco.de/what-is-tree-shaking/)
