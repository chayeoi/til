# 협업 개발 모델(Collaborative development models)

Pull Request 사용 방식은 프로젝트에서 사용하고 있는 개발 모델 유형에 따라 달라지는데, 유형은 크게 다음 두 가지로 나뉜다.

## Fork and pull model

이 방식에서는 먼저 PR을 보내고자 하는 원본 저장소를 fork한 다음, fork된 개인 저장소에 변경 사항을 push한다. 이렇게 만든 fork 브랜치에서 원본 저장소(upstream) 브랜치로 pull request를 생성하고나면, 원본 저장소(upstream)에 push 권한을 갖는 누구든 내가 생성한 pull request에 대한 변경을 허용할 수 있다. 이 방식은 프로젝트에 기여하고자 하는 사람들이 특별한 선행 조건없이 독립적으로 작업할 수 있게 하므로 오픈소스 프로젝트에서 널리 사용된다.

## Shared repository model

이 모델에서 모든 공동 작업자들은 공유된 단일 저장소에 대한 push 권한을 부여받고 변경사항이 필요할 경우 공유 저장소에 topic 브랜치를 생성한다. 이 과정에서 pull request는 변경사항들이 메인 브랜치에 병합되기 전에 코드 리뷰와 논의를 시작하도록 돕는다는 점에서 매우 유용하다. 이 모델은 개인 프로젝트에서 협업하는 소규모 팀 또는 조직에서 널리 사용된다.

## 참고 {docsify-ignore}

* [About collaborative development models | Github Help](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-collaborative-development-models)
