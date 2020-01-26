# SSH 프로토콜을 이용하여 Github에 연결하기

Github에서는 SSH 프로토콜을 이용하여 원격 서버 및 서비스에 연결하고 인증할 수 있는 방법을 제공하고 있다.

## SSH란?

SSH(Secure Shell Protocol)란 네트워크 프로토콜 중 하나로 컴퓨터와 컴퓨터가 인터넷과 같은 Public Network를 통해 서로 통신을 할 때 보안적으로 안전하게 통신을 하기 위해 사용하는 프로토콜을 말한다.

SSH는 다른 컴퓨터와 통신을 하기 위해 접속을 할 때 우리가 일반적으로 사용하는 비밀번호의 입력을 통한 접속을 하지 않는다. 기본적으로 SSH는 한 쌍의 Key를 통해 접속하려는 컴퓨터와 인증 과정을 거치게 되는데, 이 한 쌍의 Key는 다음과 같다.

* 공개 키(Public Key)
* 비밀 키(Private Key)

먼저 공개 키(Public Key)는 단어 뜻 그대로 공개되어도 비교적 안전한 키를 말한다. 이 공개 키를 통해 메시지를 전송하기 전 암호화를 하게 된다. 공개 키로는 암호화는 가능하지만 복호화는 불가능하다.

그리고 이와 쌍을 이루는 비밀 키(Private Key)는 절대로 외부에 노출이 되어서는 안되는 키로, 본인의 컴퓨터 내부에 저장하게 되어있다. 이 비밀 키를 통해 암호화된 메시지를 복호화할 수 있다.

이렇게 한 쌍의 공개 키와 비밀 키는 서로 매우 복잡한 수학적인 관계를 맺고 있다.

이러한 공개 키와 비밀 키를 통해 다른 컴퓨터와 통신을 하기 위해서는 먼저 공개 키를 통신하고자 하는 컴퓨터에 복사하여 저장한다. 그리고 요청을 보내는 클라이언트 사이드 컴퓨터에서 접속 요청을 할 때 응답을 하는 서버 사이드 컴퓨터에 복사되어 저장된 공개 키를 클라이언트 사이드에 해당 공개 키와 쌍을 이루는 비밀 키와 비교를 하여 서로 한 쌍의 키인지 아닌지를 검사한다.

이렇게 서로 관계를 맺고 있는 키라는 사실이 증명이 되면 비로소 두 컴퓨터 사이에 암호화된 채널이 형성이 되어 키를 활용해 메시지를 암호화하고 복호화하며 데이터를 주고 받을 수 있게 된다.

## SSH 키(SSH Keys)를 SSH 에이전트에 등록하기

SSH 키를 SSH 에이전트에 등록하면 접속할 때마다 매번 passphrase라고 부르는 일종의 비밀번호를 입력하는 절차없이 Github에 연결할 수 있다. SSH 에이전트는 SSH 키에 대한 passphrase를 기억하고 관리하는 역할을 수행한다.

먼저 SSH 키를 생성하기 전에, 터미널에서 다음 명령을 수행하여 로컬에 이미 만들어진 SSH 키가 있는지 확인한다.

```bash
$ ls -al ~/.ssh
# Lists the files in your .ssh directory, if they exist
```

만약 다음 중 하나가 리스트에 보여진다면 SSH 공개 키가 이미 만들어진 것이다.

* *id_rsa.pub*
* *id_ecdsa.pub*
* *id_ed25519.pub*

만약 SSH 공개 키와 비밀 키 쌍이 없거나 새로 만들기를 원한다면, 다음 명령을 수행하여 새 SSH 키 쌍을 생성할 수 있다.

```bash
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

키를 저장할 파일의 위치를 묻는 프롬프트가 나타나면 "enter"를 눌러 기본 위치를 선택한다.

```bash
> Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]
```

다음으로 passphrase를 설정하기 위한 프롬프트가 나타나면 원하는 passphrase를 설정한다.

```bash
> Enter passphrase (empty for no passphrase): [Type a passphrase]> Enter same passphrase again: [Type passphrase again]
```

SSH 키를 ssh-agent에 추가한다. 이때, macports나 homebrew와 같은 외부 소스에 의해 설치된 것이 아닌 macOS 기본 커맨드인 `ssh-add`를 이용하여 추가하도록 한다.

먼저 ssh-agent를 백그라운드에서 실행한다.

```bash
$ eval "$(ssh-agent -s)"
> Agent pid 59566
```

macOS Sierra 10.12.2 이상을 사용하는 경우, ssh-agent로 키를 자동적으로 불러오고 키체인에 passphrase를 저장할 수 있도록 ~/.ssh/config 파일을 수정해야 한다.

```bash
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa
```

SSH 비밀 키를 ssh-agent에 추가하고 암호를 키 체인에 저장한다. 만약 키를 다른 이름으로 생성했거나 다른 이름을 가진 기존 키를 추가했을 경우, 다음 명령에서 id_rsa 부분을 비밀 키 파일 이름으로 변경한다.

```bash
$ ssh-add -K ~/.ssh/id_rsa
```

이제 SSH 키를 Github 계정에 추가해야한다. 먼저 SSH 키를 클립보드에 복사한다.

```bash
$ pbcopy < ~/.ssh/id_rsa.pub
# Copies the contents of the id_rsa.pub file to your clipboard
```

Github 페이지 우측 상단의 프로필 사진을 클릭 후 Settings 메뉴를 클릭한다. 그러고나서 Personal settings 사이드바에서 SSH and GPG keys 메뉴를 선택한 후, New SSH key를 클릭한다.

"Title" 필드에 새로 추가할 키를 설명하는 라벨을 추가한다. 방금 클립보드에 복사한 키는 "Key" 필드에 붙여넣는다. 마지막으로 Add SSH key를 눌러 작업을 완료한다.

## 참고 {docsify-ignore}

* [About SSH | GitHub Help](https://help.github.com/en/github/authenticating-to-github/about-ssh)
* [Checking for existing SSH keys | GitHub Help](https://help.github.com/en/github/authenticating-to-github/checking-for-existing-ssh-keys)
* [Generating a new SSH key and adding it to the ssh-agent | GitHub Help](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
* [Adding a new SSH key to your GitHub account | GitHub Help](https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)
