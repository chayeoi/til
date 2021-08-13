# MacBook 세팅

(macOS Big Sur v11.5.1 기준으로 작성)

## 기본 설정

### 시스템 환경 설정

#### 트랙패드

##### 포인트 및 클릭

- [탭하여 클릭하기] 옵션 체크
- [찾아보기 및 데이터 탐색기] 옵션 '세 손가락으로 탭하기' 선택
- [보조 클릭] 옵션 '두 손가락으로 클릭 또는 탭하기' 선택
- [클릭] '가볍게' 선택
- [이동 속도] '빠르게' 세 번째 단계 선택

##### 추가 제스처

- [전체 화면 앱 쓸어넘기기] 옵션 '네 손가락으로 왼쪽 또는 오른쪽으로 쓸어넘기기' 선택
- [Mission Control] 옵션 '네 손가락으로 위로 쓸어올리기' 선택

#### 손쉬운 사용

##### 확대/축소

- [키보드 단축키를 사용하여 확대/축소] 옵션 선택
- [확대/축소하려면 스크롤 제스처를 다음 보조 키와 함께 사용] 옵션 선택

##### 포인터 제어기

- [마우스와 트랙패드] - [트랙패드 옵션] - [스크롤 속도] '빠르게' 세 번째 단계 선택 
- [마우스와 트랙패드] - [트랙패드 옵션] - [드래그 활성화] 옵션 체크 및 '세 손가락으로 드래그하기' 선택

#### 키보드

- [키보드] - [키 반복] 옵션 '빠르게' 선택, [반복 지연 시간] 옵션 '짧게' 선택
- [텍스트] - 모든 자동 변경 옵션 체크 해제
- [키보드 탐색을 사용하여 컨트롤 간에 초점 이동] 체크

#### Mission Control

- [Spaces를 최근 사용 내역에 따라 자동으로 재정렬] 옵션 체크 해제

#### 날짜 및 시간

- [시계] - [날짜 옵션] - [날짜 보기] 체크

#### Dock 및 메뉴 막대

##### Dock 및 메뉴 막대

- [자동으로 Dock 가리기와 보기] 체크
- [Dock에서 최근 사용한 응용 프로그램 보기] 체크 해제

##### Bluetooth

- [메뉴 막대에서 보기] 체크

##### 배터리

- [퍼센트 보기] 체크

#### Touch ID

- [Touch ID 사용] 모두 체크

### 기타

#### 파인더

##### 보기 옵션

- '다운로드' 폴더에서 우측 상단의 '...' 아이콘을 누른 다음 보기 옵션 선택(⌘ + J)
- [다음으로 그룹화]: '추가된 날짜' 선택
- [정렬]: '이름' 선택

##### 일반

- [새로운 Finder 윈도우에서 보기] - 홈 폴더 선택

- [일반] - 새로운 Finder 윈도우에서 보기 - '홈' 폴더로 설정

##### 사이드바

- 즐겨찾기 목록에 '응용 프로그램', '데스크탑', '문서', '다운로드'만 체크

## 개발 환경

### homebrew

- homebrew 설치

  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```

### Git

#### 설치

```bash
brew install git git-lfs
```

#### 설정

```bash
git config --global init.defaultBranch <name>
git config --global user.name "Your Name"
git config --global user.email "you@your-domain.com"
git config --global core.precomposeunicode true
git config --global core.quotepath false
```

### VSCode

#### 익스텐션

- Atom Keymap
- Atom One Dark Theme
- Auto Close Tag
- Auto Rename Tag
- Color Highlight
- Color Picker
- Debuuger for Chrome
- DotENV
- EditorConfig for VS Code
- ESLint
- Git History
- GitLens
- GraphQL for VSCode
- HTML CSS Support
- IntelliSense for CSS
- Jest
- Live Server
- Markdown All in One
- Material Icon Theme
- Material Theme
- npm
- npm Intellisense
- Path Autocomplete
- Prettier
- React Native Tools
- Reactjs code snippets
- TODO Highlight
- TSLint
- vscode-styled-components

#### 환경 설정

- 탭 사이즈: 2로 변경

  ```json
  "editor.tabSize": 2,
  ```

- 공백 표시

  ```json
  "editor.renderWhitespace": "boundary",
  ```

- TODO Highlight에 `XXX:` 추가

  ```json
  "todohighlight.keywords": [
      {
          "text": "XXX:",
          "color": "#ffffff",
          "backgroundColor": "#f00045",
          "overviewRulerColor": "grey"
      }
  ]
  ```

#### 기타

- `code` 명령 설치: ⌘ + ⇪ + P 입력 후 '셸 명령: PATH에 'code' 명령 설치' 입력 후 클릭
- [바로 가기 키] - 'ESLint: Fix all auto-fixable Problems'에 단축키 ⌘ + ⇧ + E 지정, '탐색기 표시'에 단축키 ⌘ + ⌥ + E로 변경

### iTerm & Zsh

- iterm2 설치

  ```bash
  brew install --cask iterm2
  ```

- [Snazzy.itemcolors](https://raw.githubusercontent.com/sindresorhus/iterm2-snazzy/master/Snazzy.itermcolors) 파일을 오른쪽 마우스를 클릭해 저장 후 실행하면 iterm 'Color Presets'에 추가되고, `⌘ + ,`를 눌러 환경설정 창을 실행한 다음 [Profiles] - [Colors]에서  'Color Presets': Snazzy를 선택

- [Appearance] > [Theme]: Minimal로 설정
- [Appearance] > [Hide scrollbars]: 체크
- [Appearance] > [Show line under title bar when the tab bar is not visible]: 체크 해제
- [Appearance] > [Panes]: Side margins 12로 변경
- [Appearance] > [Panes]: Top & bottom margins: 8로 변경
- [Profiles] > [Text]: 폰트사이즈 12로 변경
- [Profiles] > [Text]: n/n 줄간격 110으로 변경
- [Profiles] > [Unicode]: Unicode normalization form: NFC로 변경 (한글 자/모음 분리 방지)
- Profiles > Keys > Presets: Natural Text Editing 선택 (Option ⌥ + ← 또는 →를 이용하여 단어 단위로 이동할 수 있게 단축키 설정 변경)
- Advanced: 'In the Minimal theme, how prominent should the tab outline be?': 0으로 변경

- zsh 설치

  ```bash
  brew install zsh zsh-completions
  ```

- oh-my-zsh 설치

  ```bash
  sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
  ```

- 플러그인 설치

  ```bash
  # zsh-syntax-highlighting
  git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
  
  # zsh-autosuggestions
  git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
  ```

  .zshrc 파일을 실행 후 플러그인 추가

  ```bash
  open ~/.zshrc
  ```

  ```bash
  plugins=(
    git
    zsh-syntax-highlighting
    zsh-autosuggestions
  )
  ```

  새 설정 적용을 위해 터미널 재시작 또는 다음 명령 실행

  ```bash
  source ~/.zshrc
  ```

- fzf 설치
  
  ```bash
  brew install fzf
  ```
  
  .zshrc 파일을 실행 후 플러그인 추가
  
  ```bash
  plugins=(
    ...
    fzf
  )
  ```
  
  새 설정 적용을 위해 터미널 재시작 또는 다음 명령 실행

  ```bash
  source ~/.zshrc
  ```
  
- fasd 설치

  ```bash
  brew install fasd
  ```
  
  ```bash
  plugins=(
    ...
    fasd
  )
  ```

  새 설정 적용을 위해 터미널 재시작 또는 다음 명령 실행

  ```bash
  source ~/.zshrc
  ```

- 'pure' 테마 설치

  ```bash
  npm install --global pure-prompt
  ```

  ~/.zshrc 파일에 추가

  ```bash
  autoload -U promptinit; promptinit
  prompt pure
  ```

  `ZSH_THEME=""`로 변경


### Node

- nvm 설치

  ```zsh
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
  ```

  ```bash
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
  ```

- node 설치

  ```bash
  nvm install node
  ```

### vim:TODO

- neovim 및 개발용 폰트 설치

  ```bash
  brew install neovim
  brew tap caskroom/fonts
  brew cask install font-hack-nerd-font
  ```

- .zshrc에 다음 항목을 추가

  ```text
  alias vim="nvim"
  alias vi="nvim"
  alias vimdiff="nvim -d"
  export EDITOR=/usr/local/bin/nvim
  ```

- SpaceVim 설치

  ```bash
  curl -sLf https://spacevim.org/install.sh | bash
  ```

- 설치 완료 후 `vi` 실행(모드 설정을 위해 `1` 입력)

- ~/.SpaceVim.d/init.toml에서 `theme="onedark"`로 변경

- iterm 설정 창의 [Text] 탭에서 'Use a different font for non-ASCII text' 체크

### fzf

- 설치

  ```bash
  brew install fzf
  $(brew --prefix)/opt/fzf/install
  ```

- 이후 묻는 질문에 모두 'y' 입력

### yarn

- yarn 설치

  ```bash
  brew install yarn --without-node
  ```

- ~/.zshrc에 다음 코드 추가

  ```bash
  export PATH="$PATH:/opt/yarn-[version]/bin"
  ```

- 터미널 재실행

### Git

- git 설치

  ```bash
  brew install git git-lfs
  ```

- git 초기 설정

  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "you@your-domain.com"
  git config --global core.precomposeunicode true
  git config --global core.quotepath false
  ```

#### Github SSH

- 이미 보유 중인 SSH key가 있는지 확인

  ```bash
  ls -al ~/.ssh
  ```

- 없다면 새로 생성

  ```bash
  ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
  ```

- "Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]"가 뜨면 엔터 입력

- 절차에 따라 비밀번호를 설정

  ```bash
  Enter passphrase (empty for no passphrase): [Type a passphrase]
  Enter same passphrase again: [Type passphrase again]
  ```

- ssh-agent 실행

  ```bash
  eval "$(ssh-agent -s)"
  ```

- 새로운 키를 에이전트에 추가

  ```bash
  ssh-add -K ~/.ssh/id_rsa
  ```

- 방금 생성한 키를 클립보드에 저장

  ```bash
  pbcopy < ~/.ssh/id_rsa.pub
  ```

- Github 접속 후 [Settings] - [SSH and GPG keys] - [New SSH key] 클릭

- Title에 MacBook Pro 입력

- Key: 방금 복사한 키를 붙여넣기 

- Add SSH key 클릭

## 앱 스토어

### Xcode

- [환경 설정] - [Locations] - [Command Line Tools]: Xcode 최신 버전 선택

### Slack

- Classting: classting.slack.com
- React Korea: react-korea.slack.com
- Vue.js Korea: vuejs-korea.slack.com
- Typescript Korea: typescriptkr.slack.com
- 9XD: 9xd.slack.com
- 2017_fds7: 2017fds7.slack.com
- Mash-Up: mash-up-kr.slack.com

### 무비스트

- [재생] - 이전•다음 시간으로 이동 간격 3초, 15초로 변경
- 키 프레임 탐색 사용 (FFmpeg만 지원) 체크 해제

### Evernote

### 카카오톡

### Dr. Antivirus

### Dr. Cleaner

### GIPHY Capture

### Keynote

### Numbers

### Pages

## 앱

### Chrome:TODO

#### 익스텐션

- React Devtools

### Firefox

### Typora

#### 환경 설정

- [일반] - [윈도우 스타일]: Seamless
- [에디터] - [저장 시 들여쓰기 크기] - '이쁘게 들여쓰기' 선택

### Adobe 제품군

#### Photoshop

#### Illusturator

### 스케치

