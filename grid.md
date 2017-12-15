select

input

button



onhover

#### Animaiton

1. h2.content-2__product
   1. z-index: 1
   2. color: #222222 → #ffffff
2. strong.content-1__badge
   1. z-index: 1
3. em.content-1__price
   1. z-index: 1
   2. color: #222222 → #ffc12b(HIT), #ff3f2b(SALE),  #68bf7b(NEW)
4. content-1__list li::after
   1. background-color: #ffffff
   2. opacity: 0 → 0.7

<br />

### Javascript

1. select
2. button.content-1__add-to-wish
3. button.content-1__add-to-cart


li가 hover일 때 h3도 함꼐 hover를 받도록 하는 방법?



github에서 clone with HTTPS와 clone with SSH의 차이?

보통 개발자들은 SSH 방식을 선호

```bash
ssh-keygen
```

ssh-keygen(키 제너레이션)

그 후 엔터엔터입력해서 설정 끝냄.

```bash
cd ~/.ssh
```

~은 홈폴더를 뜻하고 홈폴더밑에 있는 .ssh 폴더로 이동하라는 뜻

ls 했을 때

id_rsa랑 id_rsa.pub 2개 있으면 잘된거.



프로필 세팅스에서 SSH and GPG Keys 누른 후 오른쪽 상단 New SSH keys 누른 후 우리가 방금 만든 키를 입력하면 된다.

현재 폴더에서 cat id_rsa.pub 입력하면 나오는 내용을 복사

그내용을 깃헙 new ssh keys의 key 부분에 붙여넣어준다.





cd만 입력하면 홈폴더로 이동

터미널에서

code . 으로 해당 폴더를 프로젝트영역으로 비쥬얼코드를 실행



디렉토리 구조 설명

src 폴더: 직접 수정할 파일들이 들어있는 곳



netlify: 프론트엔드 개발자들이 서버를 1도몰라도 서버와 관련된 여러가지 기능들을 쓸수있또록 잘 만들어진 서비스





