# Firestore에서 전문 검색(Full text search)이 필요한 경우라면 어떡해야 할까

어떤 사이트 내에 여러 개의 포스트가 등록되어 있고, 이들 중 특정 포스트를 검색하는 기능을 구현한다고 생각해보자.

먼저 Firestore에 `posts` 컬렉션이 아래와 같이 저장되어 있다고 가정한다.

```json
"posts": {
  "postId1": {
    "title": "Learning react",
    "content": "Learning react is exciting!",
    "category": "react"
  },
  "postId2": {
    "title": "Learning vue",
    "content": "Learning vue is exciting!",
    "category": "vue"
  },
  "postId3": {
    "title": "Learning angular",
    "content": "Learning angular is exciting!",
    "category": "angular"
  },
  "postId4": {
    "title": "Learning django",
    "content": "Learning django is exciting!",
    "category": "django"
  },
  "postId5": {
    "title": "Teaching react",
    "content": "Teaching react is exciting!",
    "category": "react"
  },
  "postId6": {
    "title": "Teaching vue",
    "content": "Teaching vue is exciting!",
    "category": "vue"
  },
  "postId7": {
    "title": "Teaching angular",
    "content": "Teaching angular is exciting!",
    "category": "angular"
  },
  "postId8": {
    "title": "Teaching django",
    "content": "Teaching django is exciting!",
    "category": "django"
  }
}
```

사용자가 'Learning react'를 입력한 다음 검색 버튼을 클릭했을 때, 제목(title)이 'Learning react'인 포스트를 검색하고 싶다면? 다음 쿼리는 제목이 정확하게 'Learning react'에 매칭되는 포스트를 검색한다.

```javascript
const postsRef = db.collection('posts')
const query = postsRef.where('title', '==', 'Learing react')
```

그런데 대부분의 사용자는 검색하고자 하는 포스트의 제목을 정확히 입력하지 않는다. 제목의 일부만 입력하여 검색한 다음 원하는 포스트를 탐색한다. 만약 사용자가 'react'만 입력하고 검색했을 때 제목에 'react'를 포함하는 포스트(여기서는 'Learning react'와 Teaching react')를 모두 불러오고 싶다면 어떡해야 할까? 제일 보편적인 방법으로 다음과 같이 정규표현식(regExp)을 쿼리하는 방법을 생각해볼 수 있을 것이다.

```javascript
const postsRef = db.collection('posts')
const query = postsRef.where('title', '==', '/react/gi')
```

그러나 Firestore는 기본적으로 패턴 검색 또는 정규표현식 쿼리가 불가능하다. 결국 우리가 희망하는 유연한 사용자 경험을 제공하기 위해서는 전문 검색(Full text search) 기능을 활용할 수 밖에 없다.



## 'OR' query

OR 쿼리하는 것도 불가능하다. react, vue, angular에 대해 모두 쿼리한 후 검색된 두 결과를 클라이언트에서 병합하는 방식을 사용한다. 대안으로, react, vue, angular가 모두 참일 때 javascript 필드를 추가한 다음 true를 저장.

## 'NOT' query

