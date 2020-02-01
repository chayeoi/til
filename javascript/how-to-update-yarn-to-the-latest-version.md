# Yarn을 최신 버전으로 업데이트하는 방법

패키지 매니저 [Yarn의 v2가 곧 릴리즈 예정](https://dev.to/arcanis/introducing-yarn-2-4eh1)이라고 한다. 흥미로운 기능이 많아서 stable 버전이 릴리즈되면 바로 업데이트해볼 예정이다. 그래서 버전 업데이트하는 방법을 찾아보았다. 터미널에 다음 명령을 입력하면 된다.

```sh
curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
```

## 참고

* [yarn self-update | yarn](https://legacy.yarnpkg.com/en/docs/cli/self-update/)
