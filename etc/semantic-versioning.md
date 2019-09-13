# 유의적 버전(Semantic versioning)

## Software versioning

소프트웨어 개발 생태계는 수많은 사람들이 서로의 기술과 성과를 이어받아 오며 믿을 수 없는 수준의 협력 체제를 구축해오고 있다. 의존성은 이러한 협력체제에서 나오게 된 요소로, 다른 사람들이 만들어온 기능을 다시 만들 필요 없이 손쉽게 가져와서 재활용하는 방식으로 빠르게 소프트웨어를 만들 수 있게 되었다.

하지만 이렇게 여러 사람에게 이용되는 패키지가 새롭게 업데이트될 때 생각보다 다양한 문제에 직면하게 되었다. 기능의 사용법을 바꾸어버리거나 동작 방식의 변경 같은 변화들은 그에 의존하는 다른 소프트웨어를 의도대로 동작하지 못하게 하므로 새로운 변화와 기존의 것을 구분할 필요가 생겼다. 버전이라는 개념은 이러한 패키지의 변화를 구분하기 위해 사용하기 시작하였다.

## Semantic versioning

Semantic Versioning은 Github의 공동창업자인 Tom Preston-Werner가 위의 문제를 해결하기 위해 기존의 현안을 모아 만든 제안이다. 스펙 문서는 RFC 2119에 의해 규칙을 표기하여 의미적 엄격함을 높이고, 패키지 개발 생명주기에 발생할 수 있는 여러 상황을 포괄적으로 담아 일관성과 유연성을 균형 있게 갖추고 있다.

주요 규칙을 요약하면 다음과 같다.

1. 기존 버전과 호환되지 않게 API가 바뀌면 MAJOR 버전을 올리고,
2. 기존 버전과 호환되면서 새로운 기능을 추가할 때는 MINOR 버전을 올리고,
3. 기존 버전과 호환되면서 버그를 수정한 것이라면 PATCH 버전을 올린다.

`MAJOR.MINOR.PATCH` 형식에 더해, 정식배포를 앞둔 버전이나 빌드 메타데이터를 위한 추가적인 라벨을 덧붙일 수도 있다.

자세한 내용은 [유의적 버전](https://semver.org/lang/ko/)을 참고한다.

## Pre-release 버전 표기 종류

### unstable

보안 이슈 등을 포함한 해결되지 않은 수많은 이슈가 존재할 경우에 사용한다. 이 태그가 사용된 버전에 대해서 아무런 알림없이 API가 변경될 수 있으며 사용법이 문서화되어있지 않을 수도 있다. 오직 사전 검토를 원하는 이들을 위한 버전 태그이다.

### alpha

현재까지 보고된 대부분의 에러가 해결되었으나 여전히 꽤 심각한 문제가 존재할지도 모르는 경우에 이 태그를 사용한다. 이 태그가 붙은 버전에 대해서는 아직 전반적인 테스트가 모두 이뤄지지 않았으므로 잠재적인 버그가 존재할 수도 있다. 아직 프로덕션으로 내보내기에는 적합하지 않다. 보통 R&D 팀 전용 또는 개발자 컨퍼런스 등에서 공개하는 용도로 사용된다.

### beta

모든 치명적 버그와 보안 이슈가 해결된 버전이다. 만일 이 태그가 붙은 버전에서 새 API를 제공하고 있다면 사용자들이 해당 API를 사용하여 프로젝트를 업데이트할 수 있도록 더 이상의 변경이 이뤄져서는 안된다. 이에 따라 모든 문서 역시 최신화되어야 할 필요가 있고 사용자들이 데이터 손실없이 프로젝트를 업데이트할 수 있는 방법을 제공해야 한다. 일반적으로 프로덕션 용으로 적당하진 않으나 관리자가 잔존하고 있는 이슈들을 다룰 방법을 잘 파악하고 있는 경우라면 프로덕션에서도 사용될 수도 있다.

### rc(Release Candidate)

출시 후보(Release candidate)를 뜻하는 rc 버전은 이슈가 존재한다고 보고된 모든 치명적 버그들이 프로젝트 이슈 목록에서 해결되어 거의 출시 제품에 다다른 버전을 의미한다. rc 태그가 붙은 후로부터 정식 출시가 이뤄지기까지는 검토가 이루어져야 하는데, 보통 이 기간을 한 달 정도로 잡는다. 만일 이 기간동안 치명적인 버그가 발견되는 등의 새 릴리즈가 필요한 상황이 오면 새로운 rc 버전이 생성되어야 하며 이로부터 역시 한 달의 검토 기간을 갖는다. 또한 이 태그가 붙은 해당 버전에 대해서는 새로운 기능의 추가가 더 이상 이뤄지지 않는다. 이 태그는 개발자가 판단하기에 프로덕션 레벨에서 사용할 준비가 되었을 때에만 사용될 수 있다.

## References

* [유의적 버전](https://semver.org/lang/ko/)
* [Beta, RC, RTM… 의미는 무엇일까요? - Microsoft](https://blogs.technet.microsoft.com/koalra/2009/07/26/beta-rc-rtm/)
* [What does rc stand for? when to use alpha, beta and dev instead? - StackExchange](https://drupal.stackexchange.com/questions/99612/what-does-rc-stand-for-when-to-use-alpha-beta-and-dev-instead)
* [Release naming conventions - Drupal](https://www.drupal.org/node/1015226)
* [Release types - Drupal](https://www.drupal.org/node/467020)
* [유의적 버전(Smenatic Versioning) - lesstif](https://www.lesstif.com/pages/viewpage.action?pageId=24445279)
* [Semantic Versioning 소개 - Spoqa 기술 블로그](https://spoqa.github.io/2012/12/18/semantic-versioning.html)
