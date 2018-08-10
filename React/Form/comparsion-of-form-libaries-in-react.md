# 리액트 form 라이브러리 비교

## Why not Redux-Form?

Redux-Form은 리액트 생태계에서 가장 인기있는 form 라이브러리 중 하나로, 복잡한 형태의 form에 대해서도 input validation을 매우 쉽게 처리해준다. 그러나 나는 다음과 같은 이유로 Redux-Form을 별로 선호하지 않는다.

* [form state는 수명이 짧고 지역적인 데이터](https://github.com/reduxjs/redux/issues/1287#issuecomment-175351978)이다. 따라서 Redux에서 그들에 대한 정보를 저장하고 있는 일은 불필요한 메모리 낭비로 이어진다.
* 매번 키를 누를 때마다 Redux state가 업데이트되고 애플리케이션 내의 모든 리듀서가 호춣된다. 규모가 작은 앱에서는 괜찮지만, 점점 그 규모가 커짐에 따라 성능 문제와 직결된다.
* Redux-Form 라이브러리 자체가 꽤 무겁다.

이런 이유로 나는 또 다른 인기 form 라이브러리 중 하나인 Formik을 사용해보기로 결정했다. 그 이유는 다음과 같다.

* form state를 관리하기 위해 리액트 컴포넌트의 내장 스테이트를 사용한다.
* Redux-Form과 비교해보았을 때 매우 가볍다.(Redux-Form is 22.5 kB minified gzipped (Formik is 7.8 kB))

