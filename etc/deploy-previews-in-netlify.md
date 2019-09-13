# Deploy Previews in Netlify

여러 사람이 협업하는 환경에서는 각자 개발할 기능에 대한 개별 브랜치를 만들고, 기능 개발이 완료되면 타겟 브랜치에 대한 Pull Request를 생성하여 상대방의 코드를 리뷰하는 과정을 거친다. 이렇게 코드 리뷰를 거치는 가장 큰 목적 중 하나는 "버그를 조기 발견하기 위함"인데, 실제로 앱을 실행해보지 않은 채로 코드만 읽고서 모든 동작을 예상하기에는 어느 정도 한계가 있다. 특히나 프론트엔드 개발에서 UI와 관련한 부분은 눈으로 직접 확인해보지 않는 이상 문제를 찾아내는 일이 매우 어렵다.

현재 서울시 Maas 해커톤 프로젝트로 진행 중인 '집으로' 앱은 Netlify를 통해 배포 프로세스를 구축해놓은 상태인데, Netlify에서 제공하는 Deploy Previews를 활용하여 앞서 언급한 문제를 손쉽게 해결할 수 있었다. 이 기능을 활성화시켜놓을 경우, 새로운 Pull Request가 생성될 때마다 소스 브랜치 상의 코드가 타겟 브랜치로 병합되었을 때 보여질 형태의 앱이 별도의 URL로 자동 배포된다. 덕분에 리뷰에 참여하는 사람들은 해당 URL로 접속하여 실제 앱의 형태를 소스 코드와 함께 확인할 수 있으므로 문제가 되는 부분을 더욱 쉽게 발견할 수 있다.

무료 플랜에서도 이 기능을 사용할 수 있으며, 다음 순서에 따라 간단한 몇 가지 설정만 거치면 된다.

1. Netlify에서 Deploy Previews를 설정하려는 앱의 [Settings] - [Build & Deploy]로 이동한다.
2. *Deploy contexts* 섹션에서 Deploy previews 설정을 "Automatically build deploy previews for all pull requests"로 변경한다.
3. *Deploy contexts* 섹션에서 Branch deploys 설정을 "All"로 변경한다. 만약 "None"으로 설정할 경우 오직 운영용 브랜치(master)를 대상으로 생성한 Pull Request에 대해서만 Deploy previews가 동작한다. 새로 추가된 기능을 운영용 브랜치(master)로 바로 병합하는 협업 플로우를 취하고 있다면 "None"으로 설정해도 무방하다. 그러나 개발용 브랜치(develop)를 별도로 운영하고 있다면, 이 브랜치에 대해 생성한 Pull Request에 대해서도 Deploy previews가 동작할 수 있도록 설정을 "All"로 변경해야 한다.
4. Deploy preview가 시작, 완료 및 실패했을 때 이에 관한 코멘트를 자동으로 받아볼 수 있도록 *Deploy notifications* 섹션에 "Github pull request comment"를 추가한다.

## 참고

* [Introducing Deploy Previews in Netlify | David Calavera](https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/?_ga=2.158759103.481212986.1561538104-1752285197.1552925102)
