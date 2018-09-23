# Firestore에서 전문 검색(Full text search)이 필요한 경우

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

그런데 대부분의 사용자는 검색하고자 하는 포스트의 제목을 정확히 입력하지 않는다. 제목의 일부만 입력하여 검색 결과를 확인한 다음 원하는 포스트를 탐색하는 게 일반적이다. 만약 사용자가 'react'만 입력하고 검색했을 때 제목에 'react'를 포함하는 포스트(여기서는 'Learning react'와 Teaching react')를 모두 불러오고 싶다면 어떡해야 할까? 제일 보편적인 방법으로 다음과 같이 정규표현식(regExp)을 쿼리하는 방법을 생각해볼 수 있을 것이다.

```javascript
const postsRef = db.collection('posts')
const query = postsRef.where('title', '==', '/react/gi')
```

그러나 Firestore는 기본적으로 패턴 검색 또는 정규표현식 쿼리를 지원하지 않는다.

생각해볼 수 있는 다른 대안은, 모든 포스트 목록을 클라이언트로 한 번에 불러와 저장한 다음 검색어에 매칭된 결과만 필터링하여 화면에 보여주는 것이다. 이 방법은 포스트 목록의 갯수가 적은 경우에는 꽤 괜찮은 방법일 수 있으나, 포스트 목록의 갯수가 늘어날수록 한 번에 불러와야 하는 양도 늘어날 것이므로 성능 상에 문제를 일으킬 수 있기 때문에 그닥 실용적이지 못하다.

결국 우리가 희망하는 유연한 사용자 경험을 제공하기 위해서는 전문 검색(Full text search) 기능을 도입해야 한다. Firestore에서 전문 검색을 지원하려면 써드 파티 앱과의 통합이 필요하다. 대표적인 서비스로 [Algolia](https://www.algolia.com/)가 있는데, [Cloud function](https://firebase.google.com/docs/functions/?hl=ko)과 함께 사용하여 제목(content)과 내용(contents)을 바탕으로 색인(Index)을 생성하고 검색을 지원할 수 있다.

## References

* [Cloud Firestore - 전체 텍스트 검색](https://firebase.google.com/docs/firestore/solutions/search?hl=ko)
