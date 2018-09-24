# React 스터디 6주차: redux-saga

> 2018년 6월 7일 사내 React 스터디 준비 자료입니다.

이미 redux-saga를 시작하기 위한 친절한 공식 문서와 한글 번역본이 나와있습니다. 그렇기 때문에 이 글에서 redux-saga의 사용법 자체에 대해 자세히 설명하기보다는, redux-saga의 핵심 개념을 정리하고 redux-thunk와의 비교를 통해 그 특징을 가볍게 살펴보는 것에 초점을 두겠습니다.

## redux-saga가 하는 일: 사이드 이펙트 처리

redux-saga는 **리덕스 앱에서 '사이드 이펙트'를 특별한 방법으로 처리하기 위한 Redux 미들웨어**입니다. 여기서 '사이드 이펙트'라 함은 **우리가 작성한 코드가 외부 세계와 영향을 주고 받는 일**을 일컫습니다. 예를 들어, 어떤 함수가 그 내부에서 비동기적으로 API를 호출한다거나 브라우저 캐시에 접근하고 있다면, 이 함수는 사이드 이펙트를 갖는 것으로 간주됩니다. 그런데 도대체 이런 '사이드 이펙트'가 뭐가 문제길래, 사람들은 리덕스 앱에서 redux-saga와 같은 미들웨어를 사용하여 사이드 이펙트를 별도로 처리해주려 하는 걸까요?

어떤 함수가 사이드 이펙트를 갖고 있다, 즉 외부 세계와 영향을 주고 받는다는 것은 결국 함수의 내부적인 처리 결과가 외부 세계의 상태에 따라 달라질 것이므로 동일한 입력값에 대해 일관된 결과를 보장하지 못한다(순수하지 못하다)는 것을 의미합니다. 이처럼 순수하지 못한 작업은 우리가 작성한 코드를 예측 불가능하게 만들고 이로 인해 해당 코드를 테스트하는 일 역시 어려워지게 됩니다. 리덕스는 이러한 문제가 발생하는 것을 사전에 방지하고자, 애초부터 **스토어의 상태 변화를 기술하는 리듀서는 순수 함수로 작성되어야 한다**는 핵심 원칙을 세웠습니다.

리듀서만큼은 완벽하게 순수 함수로 작성되었다고 해도, 대부분의 경우에 앱의 규모가 커질수록 그 어딘가에서는 사이드 이펙트를 갖는 코드가 생겨날 수 밖에 없을 것입니다. 오늘날의 거의 모든 앱들이 비동기 API 통신을 필요로 하기 때문이죠. 결국 사이드 이펙트를 아예 갖지 않는 앱을 만든다는 것이 사실상 불가능에 가깝다는 것을 알았으므로, 어떻게 해서든 존재할 수 밖에 없는 사이드 이펙트를 효율적으로 처리할 방법이 필요해졌습니다. 이러한 상황 속에서 사이드 이펙트를 처리하기 위한 초창기 미들웨어로 redux-thunk가 생겨났고, 곧이어 redux-thunk가 풀지 못했던 많은 문제를 해결해줄 수 있는 redux-saga가 등장했습니다.

## redux-saga 시작하기

redux-saga를 시작하기 위해, 먼저 프로젝트에 redux-saga 패키지를 설치합니다.

```bash
yarn add redux-saga
```

리덕스 앱에 redux-saga 미들웨어를 아래와 같이 주입할 수 있습니다.

먼저, createSagaMiddleware를 이용해 Saga 미들웨어를 생성합니다. Saga 미들웨어를 실제로 동작시키기 위해서는 미들웨어를 주입한 뒤 sagaMiddleware.run을 통해 태스크를 실행해야 하는데, 현재는 루트 파일에서 configureStore를 통해 스토어의 인스턴스를 생성한 후 태스크를 실행시킬 것이므로 store.runSaga에 sagaMiddleware.run을 할당합니다.

```javascript
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducer'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    reducer,
    compose(applyMiddleware(sagaMiddleware))
  )
  store.runSaga = sagaMiddleware.run

  return store
}

export default configureStore
```

다음으로 루트 파일에서 configureStore를 통해 스토어를 생성하고, store.runSaga를 통해 다른 Saga들을 시작해야 할 책임을 갖고 있는 rootSaga 태스크를 실행합니다.(여기선 작성하진 않았지만 rootSaga 태스크가 있다고 가정하겠습니다.)

```jsx
import React from 'react'
import { render } from 'react-dom'
import { Proivder } from 'react-redux'
import configureStore from './configureStore'
import rootSaga from './sagas'

const store = configureStore()
store.runSaga(rootSaga)

const App = () => (
  <Provider store={store}>
    {/* some components here. */}
  </Provider>
)

render(<App />, document.getElementById('root'))
```

## redux-saga의 이펙트

### 이펙트

이펙트는 **미들웨어에 의해 수행되는 명령을 담고있는 간단한 자바스크립트 객체**입니다. 우리는 단지, Saga 미들웨어에 의해 수행되어야 할 명령을 담고 있는 이펙트 객체를 Saga 내부에서 yield하기만 하면 됩니다. 미들웨어는 Saga가 yield한 이펙트를 순차적으로 해석하며 작업을 수행할 것이고, 각 이펙트에 명시된 작업이 수행될 때까지 정지되어 있을겁니다. 아래에 나열된 이펙트 생성자들은 모두 미들웨어가 어떤 작업을 수행해야 할 지에 대한 정보를 담고 있는 순수한 자바스크립트 객체를 리턴합니다. 이들을 이펙트 생성자(Effect Creator)라고 부릅니다.

* `put`: 스토어에 액션을 dispatch합니다.
* `call`: 인자로 전달된 함수를 실행합니다.
* `fork`: call과 비슷하지만, 태스크를 백그라운드에서 실행시키는 non-blocking 프로세스를 발생시킵니다.
* `select`: 스토어의 특정 상태 중 일부를 가져옵니다.
* `race`: 인자로 전달된 여러 개의 태스크를 병렬로 실행한 후, 어느 하나가 완료(resolve 혹은 reject)되면 나머지 태스크를 모두 취소시킵니다.
* `take`: 스토어로 전달되는 특정한 액션들을 기다립니다.
* `cancel`: fork되었던 태스크를 취소합니다.
* `canceled`: 현재 태스크가 취소되었는지 확인합니다.

### 헬퍼 함수(헬퍼 이펙트)

redux-saga는 스토어에 몇몇 지정된 액션들이 dispatch되었을 때 새 태스크를 수행하기 위해 내부 함수들을 감싸는 몇몇 헬퍼 이펙트들을 제공합니다.

* `takeEvery`: 지정한 액션이 dispatch될 때마다 인자로 전달된 태스크 인스턴스를 생성합니다. 종료되지 않은 한 개 혹은 여러 개의 동일 태스크 인스턴스가 있더라도 새로운 태스크 인스턴스가 생성됩니다.
* `takeLatest`: takeEvery와 달리, takeLatest는 어느 순간에서도 단 하나의 태스크 인스턴스만 시작되게 합니다. 지정한 액션이 dispatch되었을 때 이전에 시작된 태스크가 있다면, 이전 태스크를 취소하고 새 태스크를 시작할겁니다.

## 'redux-thunk'도 있는데 왜 'redux-saga'를 써야 할까

redux-thunk와 redux-saga는 모두 사이드 이펙트를 처리하기 위한 리덕스 미들웨어입니다. 리덕스 미들웨어는 **액션이 보내지는 순간부터 스토어에 도착하는 순간까지의 사이에 서드파티 확장을 사용할 수 있는 지점을 제공**합니다.

redux-thunk는 스토어에 일반적인 액션 '객체'가 아닌 '함수'가 dispatch되면, 해당 함수를 스토어로 전달하지 않고 함수의 첫 번째 파라미터에 store.dispatch 메소드를 전달하여 함수 내부의 로직을 수행하도록 합니다. 보통의 경우에, 이렇게 dispatch된 함수가 내부적으로 사이드 이펙트를 갖고 있습니다.

```javascript
// Action Creator인 userLogin이 일반적인 액션 객체가 아닌 함수를 반환합니다.
// store.dispatch(userLogin({ id, password })이 실행되면, `redux-thunk` 미들웨어는
// dispatch된 함수의 첫 번째 파라미터에 `store.dispatch` 메소드를 전달하여 해당 함수의 내부 로직을 수행할 것입니다.
const userLogin = ({ id, password }) => async (dispatch) => {
  try {
    dispatch(requestLogin())
    // ... perform the login logic
    dispatch(loginSuccess())
  } catch (e) {
    dispatch(loginError(e))
  }
}
```

redux-saga는 특정 액션을 감시하고 있다가, 해당 액션이 dispatch되면 특정 태스크를 가동시켜 내부 로직을 수행합니다.

```javascript
import { fork, call, take, put } from 'redux-saga/effects'
import Api from '...'

function* authorize(user, password) {
  try {
    const token = yield call(Api.authorize, user, password)
    yield put({type: 'LOGIN_SUCCESS', token})
    yield call(Api.storeItem, {token})
  } catch(error) {
    yield put({type: 'LOGIN_ERROR', error})
  }
}

function* loginFlow() {
  while (true) {
    const {user, password} = yield take('LOGIN_REQUEST')
    yield fork(authorize, user, password)
  }
}
```

여기까지만 봐서는 redux-thunk를 쓸 때와 특별한 차이점이 없어 보입니다. 그럼 지금부터 redux-saga의 장점을 하나 씩 이야기해보겠습니다.

### 복잡한 흐름을 쉽게 제어할 수 있습니다

유저가 로그인하는 시점부터 로그아웃하는 순간까지의 흐름을 redux-thunk로 구현한다고 생각해보세요. '로그인'과 '로그아웃'으로 나뉘어진 두 개의 thunk를 작성해야 할 겁니다. 누군가 진행 상황을 이해하기 위해서 우리의 코드를 읽는다면, 두 개의 핸들러의 소스를 읽고, 이 두 소스를 연결시켜 생각해야 합니다.

그러나 redux-saga의 풀 모델을 사용하면 우리는 같은 액션을 반복해서 핸들링하지 않고 같은 곳에 우리의 플로우를 작성할 수 있습니다.

```javascript
function* loginFlow() {
  while (true) {
    yield take('LOGIN')
    // ... perform the login logic
    yield take('LOGOUT')
    // ... perform the logout logic
  }
}
```

### 친숙한 try ~ catch 구문으로 에러를 핸들링할 수 있습니다

```javascript
import { takeLatest, all, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { getAuthToken } from 'modules/services'
import { LOAD_PROFILE_REQUEST, loadProfileSuccess, loadProfileFailure } from './actions'

export function* loadProfile() {
  try {
    const accessToken = yield call(getAuthToken)
    const userConfig = {
      url: '/v2/users/me',
      baseURL: 'https://api.classting.net/',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      },
    }
    const clazzListConfig = {
      url: '/v2/users/me/joined_classes',
      baseURL: 'https://api.classting.net/',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      },
    }
    const [userResponse, clazzListResponse] = yield all([
      call(axios, userConfig),
      call(axios, clazzListConfig),
    ])
    const profile = {
      ...userResponse.data,
      clazzList: clazzListResponse.data,
    }
    yield put(loadProfileSuccess(profile))
  } catch (e) {
    yield put(loadProfileFailure(e.message))
  }
}

export function* watchLoadProfile() {
  yield takeLatest(LOAD_PROFILE_REQUEST, loadProfile)
}
```

### 테스트 코드를 작성하는 일이 쉬워집니다

redux-thunk는 액션 생성자 함수에 의해 반환되는 함수가 직접적으로 API를 호출하기 때문에 테스트하기 까다롭습니다. 그러나 `redux-saga`에서 실제 API 호출을 담당하는 것은 Saga 미들웨어의 책임이므로, 우리는 오로지 우리가 작성한 Saga가 미들웨어에게 올바른 작업을 수행하도록 하는 명령을 담고 있는 이펙트 객체를 yield하는지만 테스트하면 됩니다.

```javascript
import { takeLatest, all, call, put } from 'redux-saga/effects'
import axios from 'axios'
import { getAuthToken } from 'modules/services'
import { watchLoadProfile, loadProfile } from './saga'
import { LOAD_PROFILE_REQUEST, loadProfileSuccess, loadProfileFailure } from './actions'

describe('watchLoadProfile saga', () => {
  const generator = watchLoadProfile()
  it('should start task to watch for `LOAD_PROFILE_REQUEST`', () => {
    expect(generator.next().value).toEqual(takeLatest(LOAD_PROFILE_REQUEST, loadProfile))
  })
})

describe('loadProfile saga', () => {
  const generator = loadProfile()
  it('should call `getAuthToken` correctly with no arguments', () => {
    expect(generator.next().value).toEqual(call(getAuthToken))
  })

  it('handles all', () => {
    const accessToken = '1234567890'
    const userConfig = {
      url: '/v2/users/me',
      baseURL: 'https://api.classting.net/',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      },
    }
    const clazzListConfig = {
      url: '/v2/users/me/joined_classes',
      baseURL: 'https://api.classting.net/',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      },
    }
    expect(generator.next(accessToken).value).toEqual(all([
      call(axios, userConfig),
      call(axios, clazzListConfig),
    ]))
  })

  it('should dispatch an action `LOAD_PROFILE_SUCCESS` with payload `profile`', () => {
    const userResponse = { data: { name: 'Kim ' } }
    const clazzResponse = { data: [] }
    const profile = { ...userResponse.data, clazzList: clazzResponse.data }
    expect(generator.next([userResponse, clazzResponse]).value)
      .toEqual(put(loadProfileSuccess(profile)))
  })

  describe('if an error occurs', () => {
    it('should dispatch an action `LOAD_PROFILE_FAILURE` with payload `error`', () => {
      const error = { message: 'Error!' }
      expect(generator.throw(error).value).toEqual(put(loadProfileFailure(error.message)))
    })
  })
})
```

## 레퍼런스

* [redux-saga 공식 문서 번역본](https://mskims.github.io/redux-saga-in-korean/introduction/BeginnerTutorial.html)
* [Redux-thunk vs Redux-saga](http://flywithfan.net/web/204/)
