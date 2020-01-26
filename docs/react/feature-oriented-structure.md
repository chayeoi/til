# Feature oriented structure for scalable applications

## 'By features' vs 'By types'

React를 처음 시작할 때 접하는 폴더 구조

```
actions/
components/
constants/
containers/
reducers/

```

핵심은 **네비게이션**이다.

## 원칙

### 원칙 1. 특정 feature 내에 파일명에는 도메인 네임을 붙이고, 폴더명에는 붙이지 않는다.

1. 가령, 'REQUEST' 키워드로 탐색기에서 검색했을 때 actions.js 파일명이 여러 개 나타나고 구분하기 힘들어진다. 그러나 파일명에 도메인네임을 붙여주면 훨씬 쉬워진다.
2. 어짜피 검색되는 것은 폴더명이 아닌 파일명이기때문에, 폴더명에는 도메인 네임을 붙이지 않아도 무관하다.

