# Today I Learned

## 08 Git

### 1. 과제 및 강의 내용 요약본 제출 방법

1. [https://github.com/kwonjounghun/FDS_7s](https://github.com/kwonjounghun/FDS_7s)를 자신의 저장소로 fork한다.

2. fork한 저장소를 clone한다.

   ```bash
   git clone https://github.com/chayeoi/FDS_7s.git
   cd FDS_7s
   ```

3. upstream이라는 이름으로 새로운 원격 저장소를 추가한다. (origin 다음 저장소 이름을 관례적으로 upstream이라 명명)

   ```bash
   git remote add upstream https://github.com/kwonjounghun/FDS_7s.git
   ```

4. 정리한 내용을 자신의 폴더 안에 파일명은 201716.md로 저장한 후 자신의 원격 저장소에 push한다.

   ```bash
   git add .
   git commit -m "20171116 과제"
   git push origin master
   ```

5. 자신의 저장소에서 'Pull requests' → 'New pull request'한다.

6. request 내용: '20171116 김찬연 과제입니다.'

7. 과제를 다시 받아오려면

   ```bash
   git pull upstream master
   ```

8. fork를 뜬 저장소로 직접 push하려면 해당 저장소로부터 키를 받아야 한다. 키를 받지 않아도 pull은 가능하다.

> #### github 계정 2개 사용법
>
> 1. 하나의 맥에서 github 계정을 2개 사용하려면?