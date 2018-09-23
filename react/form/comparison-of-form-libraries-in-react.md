# 리액트 폼 관련 라이브러리 비교

굳이 라이브러리를 쓰지 않더라도 React에서 form state를 관리할 수 있지만, 라이브러리를 활용하면 입력 값 검증(Input validation)을 훨씬 더 쉽게 관리할 수 있다. 이러한 이유로 지금까지 총 세 종류의 form 관련 라이브러리를 사용해보았다.

1. redux-form
2. react-final-form
3. formik

이들 세 라이브러리를 모두 사용해보고 나서, 앞으로 쭉 **`formik`**을 사용하기로 결정했다. (물론, 더 나이스한 라이브러리가 나오지 않는다는 전제 하에)

## Why not redux-form?

사실, 리액트 생태계에서 가장 인기있는 form 라이브러리는 redux-form이었다. (아마 지금도 해당되는 이야기다.) 그러나, formik 문서에 따르자면 redux-form은 다음과 같은 문제를 지녔다.

* [form state는 수명이 짧고 지역적으로 사용되는 정보](https://github.com/reduxjs/redux/issues/1287#issuecomment-175351978)이다. 따라서 redux 스토어에 form 관련 데이터를 저장하는 일은 불필요하다.
* 매번 키를 누를 때마다 Redux state가 업데이트되고 애플리케이션 내의 모든 리듀서가 호춣된다. 규모가 작은 앱에서는 괜찮겠지만, 점점 그 규모가 커짐에 따라 성능 문제와 직결된다.
* redux-form 라이브러리 자체가 꽤나 무겁다.

## Why not react-final-form?

react-final-form은 주 메인테이너가 redux-form의 주 메인테이너와 같은 사람인 것으로 보아, redux-form이 지녔던 이러한 문제들을 해결하고자 등장한 것으로 보인다. 꽤 괜찮아보였지만, 사용하면서 몇 가지 찝찝한 부분이 존재했다.

* redux-form과 formik에 비교했을 때 github 저장소의 스타 갯수가 많이 빈약하다. 이는 곧 사람들이 즐겨 사용하지 않고, 검증되지 않았다는 뜻이기도 하다. (최소 5,000개 이상은 되어야 믿고 사용하는 편이다. 물론 현재는 내가 사용했을 당시보다 2배 가까이 늘긴 했다.)
* 업데이트되면서 변경된 API 내용이 문서에는 반영되어있지 않아서 하루 종일 헤맸던 적이 있다.
* `FieldArray`를 사용하려면 `final-form-arrays`와 `react-final-form-arrays` 패키지를 추가로 설치해야 한다.

## Why formik?

formik 또한 앞서 언급했던 redux-form의 문제들을 해결하고자 등장했다.

* form state를 관리하기 위해 **리액트 컴포넌트의 내장 스테이트를 사용**한다.
* redux-rorm과 비교해보았을 때 매우 가볍다.(Redux-form is 22.5 kB minified gzipped (Formik is 7.8 kB))

무엇보다 [문서화](https://jaredpalmer.com/formik)가 매우 잘 되어있어서 사용법을 금방 익힐 수 있다.

인기의 척도를 github 저장소의 스타 갯수로 판단한다면, formik은 redux-form의 인기를 거의 따라잡았다. 2018년 9월 22일 기준으로 redux-form은 10,520개, formik은 9,556개의 스타를 받은 상태이다. 이러한 인기와 활발히 업데이트가 이루어지고 있는 점을 생각했을 때, 앞으로 당분간 formik을 믿고 사용해도 괜찮을 것 같다.
