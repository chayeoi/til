# 스킬트리

출처: [프로그래머스 - 스킬트리](https://programmers.co.kr/learn/courses/30/lessons/49993)

```javascript
function solution(skill, skill_trees) {
  return skill_trees.reduce((acc, cur) => (
    acc + (skill.indexOf(cur.replace(new RegExp(`[^${skill}]`, 'g'), '')) === 0 ? 1 : 0)
  ), 0)
}
```
