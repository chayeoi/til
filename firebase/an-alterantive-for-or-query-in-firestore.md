# Firestore에서 OR 쿼리를 사용하기 위한 한 가지 대안

어떤 사이트 내에 여러 개의 포스트가 등록되어 있고, 이들 중 특정 카테고리에 속하는 포스트를 필터링하는 기능을 구현한다고 생각해보자.

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

'react' 카테고리에 속하는 포스트를 필터링하고 싶다면 아래와 같이 쿼리한다.

```javascript
const postsRef = db.collection('posts')
const query = postsRef.where('category', '==', 'react')
```

그런데 만약 'react' 또는 'vue' 카테고리에 해당하는 포스트를 모두 보여주고 싶다면? `postsRef.where('category', '==', ['react', 'vue'])`와 같은 쿼리가 가능하면 좋았겠지만, 안타깝게도 OR 절을 쿼리할 수 있는 방법은 없다. 이런 경우에는 'react' 카테고리와 'vue' 카테고리에 속한 포스트 목록을 가져오는 각각의 쿼리를 만든 후, 클라이언트에서 병합하는 방법을 사용해야 한다.

## References

* [Firebase: Cloud Firestore - 단순 쿼리 및 복합 쿼리 실행](https://firebase.google.com/docs/firestore/query-data/queries?hl=ko)
* [How do queries work in Cloud Firestore? | Get to Know Cloud Firestore #2](https://youtu.be/Ofux_4c94FI)
