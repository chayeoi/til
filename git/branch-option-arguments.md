# git-branch에 사용 가능한 옵션들

다음 내용은 터미널에서 `man git-branch`를 실행했을 때 나온 설명에서 필요한 부분만 옮겨적은 것이다.

## `--list` 또는 옵션 플래그를 제공하지 않음

`--list` 또는 옵션 플래그를 아예 제공하지 않으면 모든 브랜치 목록을 나열하며 현재 위치하고 있는 브랜치는 에스터리스크(*)로 표시된다.

특정 패턴에 일치하는 브랜치만 보고 싶을 경우, 와일드카드 기호를 `<pattern>`으로 사용하여 나열될 브랜치 목록을 제한수 있다. 패턴을 여러 개 입력하면 일치하는 패턴이 하나라도 존재하는 브랜치를 모두 나열한다. 또한 패턴을 사용하여 브랜치 목록을 나열하고 싶은 경우에는 반드시 `--list` 옵션을 사용해야 한다. 그렇게 하지 않으면 새로운 브랜치를 생성하는 것으로 간주된다.

### `-r`

`-r` 옵션과 함께 사용할 경우 원격에 위치한 브랜치를 나열한다.

### `-a`

`-a` 옵션과 함께 사용할 경우 로컬과 원격 브랜치를 함께 나열한다.

### `--contains`또는 `--no-contains`

`--contains`를 사용하면 명명된 커밋이 포함된 브랜치만 나열한다. `--no-contains`는 이와 반대로 동작한다.

### `--merged`또는 `--no-merged`

`--merged`를 사용하면 명명 된 커밋으로 병합 된 브랜치만 나열된다. --no-merged를 사용하면 명명 된 커밋에 병합되지 않은 브랜치만 나열됩니다. `<commit>` 인수가 없으면 기본값은 `HEAD`이다 

## `-m`과 `-M`

With a -m or -M option, <oldbranch> will be renamed to <newbranch>. If <oldbranch> had a corresponding reflog, it is renamed to match <newbranch>, and a reflog entry is created to remember the branch renaming. If <newbranch> exists, -M must be used to force the rename to happen.
The -c and -C options have the exact same semantics as -m and -M, except instead of the branch being renamed it along with its config and reflog will be copied to a new name.
With a -d or -D option, <branchname> will be deleted. You may specify more than one branch for deletion. If the branch currently has a reflog then the reflog will also be deleted.
Use -r together with -d to delete remote-tracking branches. Note, that it only makes sense to delete remote-tracking branches if they no longer exist in the remote repository or if git fetch was configured not to fetch them again. See also the prune subcommand of git-remote(1) for a way to clean up all obsolete remote-tracking branches.

`-m` 또는 `-M` 옵션을 사용하면 <oldbranch>의 이름이 <newbranch>로 변경된다. <oldbranch>에 해당 reflog가 있는 경우 <newbranch>와 일치하도록 이름이 바뀌고, 브랜치 이름 변경에 대한 reflog 항목이 작성된다. 만약 <newbranch>가 존재하고 있으면 `-M`을 사용하여 이름 변경을 강제 실행하여 덮어씌울 수 있다.

## `-c`또는 `-C`

`-c` 및 `-C` 옵션은 브랜치가 설정과 함께 이름을 바꾸는 대신 reflog가 새 이름으로 복사된다는 점만 제외하면 `-m` 및 `-M`과 완전히 동일한 의미를 갖는다.

## `-d` 또는 `-D

`-d` 또는 `-D` 옵션을 사용하면 <branchname>이 삭제된다. 삭제할 브랜치를 둘 이상 지정할 수 있다. 브랜치에 현재 reflog가있는 경우 reflog도 삭제된다. `-d`는 `--delete`, `-D`는 `--delete --force`의 약어이다.

원격 추적 브랜치를 삭제하려면 `-r`을 `-d`와 함께 사용하면 된다.

## 참고 {docsify-ignore}

- `man git-branch`
