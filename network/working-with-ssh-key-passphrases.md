# SSH key passphrases로 작업하기

만약 내가 사용 중인 SSH 키를 가진 사용자가 내 컴퓨터에 접근할 경우, 그 사용자는 그 키를 사용하는 모든 시스템에도 접근할 수 있게 된다. 이러한 문제를 방지하기 위해 SSH 키에 passphrase를 추가함으로써 보안을 강화할 수 있다. 또한 ssh-agent에 passphrase를 안전하게 보관함으로써 SSH 키를 이용하여 접속할 때마다 매번 그 값을 입력하지 않아도 되도록 설정할 수 있다.

## passphrase 추가 또는 변경하기

passpharse 설정을 위해 키페어를 재생성할 필요없이 다음 명령에 따라 기존 비밀 키에 대한 passphrase를 변경할 수 있다.

```bash
$ ssh-keygen -p
# Start the SSH key creation process
> Enter file in which the key is (/Users/you/.ssh/id_rsa): [Hit enter]> Key has comment '/Users/you/.ssh/id_rsa'
> Enter new passphrase (empty for no passphrase): [Type new passphrase]> Enter same passphrase again: [One more time for luck]> Your identification has been saved with the new passphrase.
```

## 참고 {docsify-ignore}

* [Working with SSH key passphrases | GitHub Help](https://help.github.com/en/github/authenticating-to-github/working-with-ssh-key-passphrases)
