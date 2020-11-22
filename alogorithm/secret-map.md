# 비밀지도

출처: [프로그래머스 - 비밀지도](https://programmers.co.kr/learn/courses/30/lessons/17681)

```javascript
const format = (string, n) => (n - string.length >= 0 ? '0'.repeat((n - string.length)) : '') + string

function solution(n, arr1, arr2) {
    const a = arr1.map(item => format(item.toString(2), n))
    const b = arr2.map(item => format(item.toString(2), n))

    return a.map((item, index) => {
        const target = b[index]

        return Array.from(item).reduce((acc, cur, key) => acc + (cur === '1' || target[key] === '1' ? '#' : ' '), '')
    })
}
```
