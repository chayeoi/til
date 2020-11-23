# 문자열 압축

출처: [프로그래머스 - 문자열 압축](https://programmers.co.kr/learn/courses/30/lessons/60057)

```javascript
const splitByLength = (string, length) => string.match(new RegExp(`.{1,${length}}`, 'g'))

function solution(s) {
    const n = Math.floor(s.length / 2)

    return [...Array(n).keys()]
        .reduce((acc, cur) => {
            const chunks = splitByLength(s, cur + 1)
            const result = chunks
                .reduce((acc, cur, key) => {
                    return (!acc.length || acc[acc.length - 1][0] !== cur)
                        ? [...acc, [cur, 1]]
                        : [...acc.slice(0, acc.length - 1), [cur, acc[acc.length - 1][1] + 1]]
                }, [])
                .reduce((acc, [chunk, count]) => `${acc}${count === 1 ? '' : count}${chunk}`, '')

            return Math.min(result.length, acc)
        }, s.length)
}
```
