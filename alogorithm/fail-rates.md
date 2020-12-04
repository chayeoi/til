# 실패율

출처: [프로그래머스 - 실패율](https://programmers.co.kr/learn/courses/30/lessons/42889)

```js
/**
 * 1. 각 단계의 실패율을 계산한다.
 * 2. 실패율 값에 대해 내림차순 정렬한다.
 */

function solution(N, stages) {
    const failRates = [...Array(N).keys()].map(stage => {
        const currentStages = stages.filter(currentStage => currentStage >= stage + 1)

        return ([
            currentStages.length
                ? (
                    currentStages.filter(currentStage => currentStage === stage + 1).length /
                    currentStages.length
                ) : 0,
            stage + 1,
        ])
    })

    return failRates.sort((a, b) => b[0] - a[0]).map(([, stage]) => stage)
}
```
