# 특정 파일에 대한 변경 이력 확인하기

간혹 모든 파일의 변경 이력을 확인하는 대신 특정 파일 하나에 대한 변경 이력만 확인하고 싶은 경우가 있다. 이런 경우에는 `git log [filename]`과 같이 변경 이력을 확인하고 싶은 파일을 대상으로 로그 명령을 실행하면 된다. 만약 각 라인에 대한 자세한 변경사항을 확인하고 싶다면 `-p` 옵션을 활용할 수 있다.

```bash
git log -p [filename]
```

## 참고

* [git log -p 파일 하나의 변경 이력을 한번에 보기 | 김용균](https://edykim.com/ko/post/git-log-p-view-a-single-change-history-of-a-file/)
