# 예산

출처: [프로그래머스 - 예산](https://programmers.co.kr/learn/courses/30/lessons/12982)

```js
/**
 * `budget >= 0`일 때까지 `d`에서 가장 작은 값을 차례로 빼면서 부서의 갯수를 센다.
 */
function solution(d, budget, count = 0) {
    const min = Math.min(...d)
    const index = d.indexOf(min)

    return budget >= min
        ? solution(d.slice(0, index).concat(d.slice(index + 1)), budget - min, count + 1)
        : count
}
```
