# 3 Week

## 1 Day

### 1. 강사님 소개

1. 이메일: sungback@naver.com - 질문할 내용 있을 때 이용할 것
2. 블로그: [메멘토](http://blog.naver.com/sungback)

<br />

### 2. 운영체제 점유율

1. 서버 운영체제

- 리눅스: 96.91%
- 윈도: 1.78%
- FreeBS(맥): 1.31%

→ 실제 서버를 운영할 때에는 리눅스를 써야 한다!

2. PC 운영체제

- 윈도: 90%

<br />

### 3. 운영체제의 역사와 Linux

1. Unix → Linux

   ​	 → DOS → Windows(10 버전부터 리눅스 셸인 Bash를 지원)

   ​	 → FreeBSD  → Mac OS

2. 결국은 모두 UNIX의 자손들이고 친척이다.

3. UNIX가 유료로 운영되며 무료로 쓸 수 있는 것이 사라졌고 상표를 그대로 쓸 수 없었기 때문에 '리누스 토르발스'가 Linux를 무료로 만들어서 배포하기 시작했다. 슈퍼 컴퓨터는 수많은 컴퓨터를 엮어서 쓰기 때문에 Unix를 쓰는 데에는 비용이 많이 들기 때문에 Linux를 쓸 수 밖에 없었다.

4. 안드로이드, 아이폰, 아마존 웹서비스의 EC2 컴퓨터 모두 리눅스 기반이다.

5. [ssh](https://ko.wikipedia.org/wiki/%EC%8B%9C%ED%81%90%EC%96%B4_%EC%85%B8)라는 셸 터미널로 원격 컴퓨터에 접속을 하게 되는데, 역시 리눅스를 알아야 한다.

6. 맥에서는 `brew install`로 쉽게 설치할 수 있다.

7. 간단히 노트북에 Linux를 깔아서 사용할 수도 있다.

<br />

### 4. AWS 

#### 4.1 탄생 배경

1. 아마존 웹 서비스의 탄생 배경은 다음과 같다. 전자 쇼핑몰을 운영하던 아마존에서 블랙 프라이데이에 트래픽이 몰리는 일에 대응하기 위해 수많은 가상 컴퓨터를 구입했다. 그러나 쓸 데가 없어져서 개발자들을 쥐어짰고 그렇게 해서 탄생하게 되었다.

<br />

#### 4.2 이용 기간

1. 아마존 웹 서비스(AWS)를 이용하면 1년동안 서버를 무료로 사용할 수 있다. 그러나 새로운 이메일로 또 가입할 수 있기 때문에 결국 평생 무료이다.

<br />

### 5. React

#### 5.1 특징

1. 컴포넌트
2. Virtual DOM
3. 단방향 데이터 플로우

<br />

### 6. jQuery의 단점

1. jQuery로는 DOM을 컨트롤하기 불편하다.

<br />

### 7. Cloud Computing

#### 7.1 클라우드 서비스

1. Google Drive
2. iCloud
3. Naver Cloud

<br />

### 8. 컴퓨터의 작동 원리

1. 컴퓨터의 자동 원리는 논리 회로이다.
2. 하드웨어와 소프트웨어 사이에 커널이 있다.

<br />

### 9. 서버와 클라이언트

1. 클라이언트 - 브라우저(소프트웨어)
2. 서버 - 웹 서버(소프트웨어)

<br />

### 10. noSQL

#### 10.1 SQL과 noSQL

1. SQL(Structured Query Language)은 관계형 데이터베이스를 의미한다.
2. noSQL(not only sql)은 관계형 데이터베이스가 아닌 것을 말한다. 대표적으로 MongoDB가 있다.

<br />

#### 10.2 MongoDB

1. MongoDB의 어원은 humongous(거대한)이다.
2. MongoDB는 Javascript 형태로 만들어져있다. (JSON)

<br />

### 11. JSON

1. JSON(JavaScript Object Notation)은 Javascript에서 객체를 표현하는 방법이라는 뜻이다.
2. 이전에는 데이터를 문자열 형태로 자료를 주고받았고, 그 부분이 힘이 들어서 XML이 나왔는데 XML은 태그들이 너무 많이 중첩되서 표현되는 부분이 잡다해서 네트워크를 타고 흐르기에는 적합하지 않았다. 그렇게 해서 JSON으로 넘어가게 되었다.
3. JSON은 현재 데이터를 주고받는 표준이다.
4. Javascript 입장에서 서버에서 작업한 것이 그대로 자신의 형태로 넘어온다면 이것은 엄청난 장점이다.
5. MongoDB에서 넘어온 데이터를 JSON 형식으로 저장하는데, 이는 데이터베이스까지 모든 기술을 자바스크립트로 사용할 수 있음을 뜻한다.

<br />

### 12. 프론트엔드와 백엔드

1. 서버로 Open API를 요청하는 것이 프론트엔드의 역할이며, 서버에서는 응답을 처리한다.
2. 이전에는 서버에서 응답 결과로 항상 html 문서만 보내줘서, 전체 중에서 일부만 바뀌었음에도 매번 새로 받아야 했다. 이러한 부분을 개선하기 위한 방법으로 AJAX가 등장했고, AJAX 방식을 통해 필요한 부분에 대한 데이터만 JSON 형식으로 받아서 교체할 수 있게 되었다. 이것으로 속도 문제가 해결되고 서버의 부하가 줄어들었다. 
3. 모바일에서도 마찬가지로 JSON 형식의 데이터를 가져와서 바뀔 부분만 html 코드로 변환하여 Javascript로 화면에 뿌려주게 된다. React가 이러한 일을 담당한다. 따라서 데이터 저장이 되지 않는 것들은 서버가 필요없지만 데이터 저장이 필요한 것은 서버가 필요하다.
4. 프론트엔드에선 서버에서 받은 데이터를 끼워맞추는 일을 처리한다.
5. 서버에선 요청을 받아서 클라이언트에 보내주는 일을 처리한다.
6. 클라이언트가 서버에 요청을 하면 MongoDB에선 그 데이터를 가져와서 보여준다.

<br />

### 13. NVM(Node Version Manager) 

1. 내 컴퓨터에서 사용하는 node.js의 버전이 서버와 다르면 문제가 될 수 있는데, NVM은 버전을 관리함으로써 이런 문제를 해결할 수 있게 한다.

2. brew를 통해 설치할 수 있다.

   ```bash
   brew install nvm
   ```

3. https://github.com/creationix/nvm에서 코드를 복사해 다음과 같이 설치할 수도 있다.

   ```bash
   curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash

   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
   ```

4. 삼성이 node.js를 인수했다.

<br />

### 14. ECMAscript

1. Internet Explorer가 ES5를 사용한다.
2. Chrome, Firefox, Safari, Opera 등의 브라우저들은 항상 최신 Spec을 사용한다. 이러한 브라우저들은 항상 새로운 버전을 사용하기 때문에 Ever-green Browser라고도 한다.
3. ES6(2015), ES7(2016), ES8(2017) 버전까지 나온 상태이고, 보통 ES6 이상을 통틀어 ES6라고 이야기한다.
4. node.js에서는 ES6를 지원하고 있지만, 프론트엔드에선 지원을 못해서 Babel 패키지를 이용하여 ES6로 작성한 코드를 ES5로 변환해줘야 한다. 모든 브라우저들이 ES6를 100% 완벽하게 지원하고 있는 상황은 아니다.
5. 책 추천
   1. 러닝 자바스크립트(ES6로 제대로 입문하는 모던 자바스크립트 웹 개발)
   2. 블루 프린트

<br />

### 15. Functional Programming

1. 기존 OOP에서 불가능하고 문제가 되었던 부분들을 FP에서 해결할 수 있기 때문에 현재 함수형 프로그래밍으로 무게 중심이 넘어가고 있다.
2. OOP에서 대표적인 문제로 멀티 스레드가 있었는데, 멀티 스레드 환경에선 100% 안전한 코드가 존재하지 않는다. 동시에 들어가기 때문에 변수가 생길 수 있기 때문이다.
3. Javascript는 OOP와 FP의 성격을 모두 가지고 있다. 하지만 함수형으로 가고자 한다.
4. PC에도 코어(CPU)가 4 ~ 8개가 붙고, 서버에는 더 많이 붙는다.

<br />

### 16. C10K Problem

1. C10K Problem은 하나의 System에 얼마나 많은 Client가 붙을 수 있냐는 의문과 그에 대한 도전에서 제기되는 문제이다.
2. 한 사람당 하나의 스레드가 만들어진다고 하자. 한 스레드가 10MB 정도의 용량을 차지한다고 할때 1만명이 접속한다면 10만MB, 즉 100GB가 필요하다. 서버 1대로 100GB를 감당할 수 없다. 따라서 스레드를 무작정 많이 띄우는 것은 답이 아니다. Context Switching 비용이 훨씬 많이 든다.
3. 스레드를 만드는 것이 근본적인 해결책이 아니다. 이것을 요청이 들어왔을 때 하나를 처리하고 넘기는 이벤트 기반의 함수형 기법으로 해결할 수 있다.
4. Javascript는 싱글 스레드 기반이다.
5. 비동기 방식의 가장 큰 단점은 이른 바 '콜백 헬'이라는 것인데, async 패키지 모듈을 설치하여 비동기 형식을 동기 형식처럼 코딩할 수 있다. ES6로 넘어오면서 async_await이라는 모듈을 사용하면 더 쉽게 이 문제를 해결할 수 있다.

<br />

### 17. 프로그램 vs 프로세스 vs 스레드

#### 17.1 차이점

1. 프로그램: 프로그램을 실행하기 전의 상태
2. 프로세스: 프로그램을 실행하여 메모리에 로드된 상태.
3. 스레드: 하나의 프로세스에 종속된 작업의 단위. 하나의 프로세스 안에 여러 개의 스레드를 띄울 수 있고, 스레드를 많이 쓰면 쓸수록 더 느려지는 문제가 발생한다.

<br />

#### 17.2 프로세스 방식

1. 스레드 방식보다 용량이 작은 프로세스를 여러 개 띄워서 사용하는 것이 더 효율적이다.
2. 보통 프로세스 하나의 용량은 크지만 scala로 만든 AKA는 프로세스 하나당 10KB밖에 차지하지 않는다.
3. 프로세스는 CPU 코어 간에 서로 협업을 할 수 있다. 반면에 스레드는 한 프로세스 안에 갇히게 되기 때문에 다른 프로세스와 협업을 할 수 없게 된다. 그래서 프로세스 단위로 가는 것이 더 좋다.
4. 멀티 스레드 방식에서는 스레드가 들어왔을 때 데이터를 수정하기 때문에 문제가 발생했는데, 함수형 언어는 한 번 만들어지면 변하지 않는 불변 데이터로 처리해서 동시에 몇 명이 들어오든 간에 안전하도록 처리했다. 함수형 언어는 이러한 방식으로 멀티 스레드 문제를 해결하였다.
5. Javascript는 ES6 이후 함수형 프로그래밍의 특징을 적극적으로 도입하였다.

<br />

### 18. 웹 서버

1. 웹 서버는 80번 포트를 사용한다. 이것은 TCP/IP 프로토콜에서의 약속이다.
2. 보통 node.js에서는 테스트 포트로 3000번을 자주 사용한다.
3. 현재 전 세계에서 제일 많이 쓰이는 웹 서버는 Apache이다.
4. Apache는 동시 접속자 수가 많아질수록 느려지지만, node.js는 일정하다.
5. 자바스크립트 자체는 싱글 스레드이지만, 서버 사이드로 들어가게 되면 운영체제의 스레드를 사용하게 된다. 자체 멀티 스레드는 없지만 운영체제의 스레드를 빌려쓰므로 속도가 빠르다.
6. ngineX라는 웹 서버가 node.js처럼 이벤트 기반 비동기 방식으로 동작한다. 여기서 이벤트 기반이란, 계속 대기하는 것이 아니라 이벤트가 발생하면 그때 가서 처리하고 끝내는 방식을 말한다.
7. 싱글 스레드도 단점이 있는데, 해당 스레드가 죽으면 서버가 끝나버린다는 것이다. 이걸 보완하기 위해 서버를 3개 이상 동시에 띄웠다가 하나가 죽었을 때 다른 걸 띄우는 방식으로 대처한다. 이러한 방식을 로드 밸런싱이라 한다.

<br />

### 19. express-generator, nodemon 모듈

1. express-generator 모듈을 이용해 프로젝트 개발 환경을 빠르게 구축할 수 있다.

   ```bash
   npm install express-generator -g
   ```

2. 매번 소스를 수정할 때마다 서버를 다시 실행시키는 것은 매우 번거로운 일이다. 이것을 해결하기 위한 모듈이 nodemon이다. nodemonitor의 약어이며, -g의 선언 위치는 모듈명 앞, 뒤 어디에다 선언해도 된다. 

   ```bash
   npm install -g nodemon
   ```

3. nodemon으로 서버를 실행할 때 확장자를 생략하면 안된다.

   ```javascript
   nodemon server.js
   ```

4. nodemon으로 서버를 실행하면 콘솔에 watching이 보이는데, 변화를 지켜보고 있다는 뜻이다.

<br />

### 20. MVC 패턴

1. Model: 데이터의 대부분은 DB에 존재한다.
2. View: html을 보내준다. 그러나 일반적인 html이 아니라 .asp, .jsp, .php와 같이 변환되기 전의 형태이다. Express는 .jade와 .ejs 템플릿을 지원한다.
3. Controller: 전체적인 관리를 담당한다.
4. Express가 C를, .ejs 템플릿이 V를 담당한다.

<br />

### 21. html 템플릿

1. .jade는 닫는 기호가 없고 indent로 구분하기 때문에, 가독성이 떨어질 수도 있다.

2. [JADE LANGUAGE](http://jade-lang.com/)

3. 템플릿을 따로 지정하지 않으면 Express를 개발한 사람이 .ejs를 좋아했기 때문에 .ejs로 설정된다.

4. 단순한 html은 정적인 데이터이기 때문에, 변화를 주기 위해서 이러한 템플릿을 사용한다.

5. <%= %> 안에 화면에 표시할 데이터를 입력한다.

6. ejs 템플릿으로 스캐폴딩하는 방법은 다음과 같다.

   ```bash
   express --ejs (프로젝트명)

   cd (프로젝트명) && npm install
   ```

7. 서버를 시작하려면 다음과 같이 입력한다.

   ```bash
   npm start
   ```

<br />

### 22. package.json 

1. 프로젝트에 관한 정보를 담고 있는 파일이다.

   ```json
   // package.json
   {
     "name": "myproject",
     "version": "0.0.0",
     "private": true,
     "scripts": {
       "start": "node ./bin/www"
     }, // 'npm start'로 'node ./bin/www'를 실행한다.
     "dependencies": {
       "body-parser": "~1.18.2",
       "cookie-parser": "~1.4.3",
       "debug": "~2.6.9",
       "ejs": "~2.5.7",
       "express": "~4.15.5",
       "morgan": "~1.9.0",
       "serve-favicon": "~2.4.5"
     }
   }
   ```

<br />

### 23. 기본 프로젝트 구조

#### 23.1 ./bin

1. 포트 번호를 수정하려면 ./bin/www에서 다음 코드를 수정한다.

   ```javascript
   var port = normalizePort(process.env.PORT || '3000');
   ```

2. bin 폴더는 지워도 된다. 대신 app.js의 아랫 줄 위에 다음 코드를 추가해야 한다.

   ```javascript
   // bin 폴더를 지운 대신 이 부분을 추가한다.
   app.listen(5000);
   console.log('Server started!!!');
   ```

3. bin 폴더를 지웠기 때문에 `npm start` 스크립트를 실행할 수 없다.

<br />

#### 23.2 Project Structure

1. node_modules: 모듈이 설치된 저장소이다.

2. public: 정적인 데이터들이 저장된 폴더이다.

   1. images: 이미지 파일
   2. javascripts: 서버 쪽 자바스크립트가 아닌 클라이언트 측 자바스크립트 파일
   3. stylesheets: 스타일시트 관련 파일

3. routes: MVC중 Controller를 담당하는 부분. index.js는 시작 파일이다.

   ```javascript
   var express = require('express');
   var router = express.Router();

   /* GET home page. */
   router.get('/', function(req, res, next) {
     // 결과를 렌더링한다. 첫 번째 인자에 전달된 인수는 index.ejs를 뜻한다.
     // 확장자 .ejs는 생략 가능하다. app.js의 13 ~ 15번 line에서 views 폴더를 여기서
     //  사용하겠다고 선언하고 view engine을 ejs로 정의해놨기 때문에 생략해도 된다.
     // view engine setup
     // app.set('views', path.join(__dirname, 'views'));
     // app.set('view engine', 'ejs');
     res.render('index', { title: 'Express' });
   });

   module.exports = router;
   ```

4. views: *.ejs 파일 형식의 view 파일이 담긴 폴더이다.

5. 우리는 *.js와 *.ejs만 다루면 될 뿐이다.

<br />

### 24. Routing

1. '/'는 루트 위치를 의미한다.

   ```javascript
   // http://localhost:5000/
   router.get('/', function(req, res, next) {
     res.render('index', { title: 'Express' });
   });

   // http://localhost:5000/abc
   router.get('/abc', (req, res, next) => {
   	res.send('여기는 /abc 입니다!');
   })   
   ```

2. 두 번째 파라미터로 전달된 함수의 next 파라미터는 에러를 처리할 때 사용한다.

<br />

### 25. 서버 사이드 렌더링

1. html은 정적인 페이지이다. 반면에 .ejs는 서버 측 렌더링을 통해서 동적으로 생성되는 페이지이다.
2. 물론 프론트엔드 기술을 이용하여 Javascript로 고칠 수 있지만 위에서 다룬 방식은 서버에서 동적으로 페이지를 만들어낸 것이다.
3. 클라이언트 측에서 자바스크립트 렌더링도 좋지만 때에 따라 서버 사이드 렌더링이 필요한 경우도 있다. 클라이언트 사이드 렌더링은 자바스크립트의 해석이 완료되어야 페이지가 렌더링되는데 이 부분을 검색 엔진이 알 수가 없다. 구글은 이 문제를 해결했지만 다른 회사는 해결하지 못하고 있다. 따라서 이 시점에 서버 사이드 렌더링이 필요한 것이다.
4. 본문 내용의 어느 정도는 서버 사이드 렌더링을 통해서, 나머지는 클라이언트 사이드 렌더링을 통해 그려낸다.둘 모두 어느 정도씩 필요하다.

<br />

### 26. mySQL과 mariaDB

#### 26.1 역사

1. mySQL은 한 회사 이름이었는데, SUN에 팔렸다가 Oracle에 다시 팔리는 바람에 Oracle 입장에서는 경쟁 업체를 떠안게 되었다. 그러나 인수만 해놓고 관리를 하지 않아 사람들이 나와서 mySQL의 업그레이드 버전을 만들었는데 그것이 MariaDB이다.
2. mySQL 사장의 둘째 딸 이름을 따서 MariaDB로 이름지었다.

<br />

#### 26.2 특징

1. MariaDB는 mySQl과 완벽하게 호환된다.
2. 기본 엔코딩은 스웨덴어로 설정되어있어서 반드시 use utf-8로 설정해야 한다.

<br />

#### 26.3 명령어

1. INSERT - CRUD에서 Create에 해당한다.
2. SELECT - CRUD에서 Read에 해당한다.
3. UPDATE - CRUD에서 Update에 해당한다.
4. DELETE - CRUD에서 Delete에 해당한다.

<br />

### 27. 디스크 액세스 시간

1. 디스크 액세스 시간은 CPU, RAM, HDD 순으로 빠르다. 따라서 되도록이면 하드 디스크에서 덜 읽는 것이 좋다.
2. CPU, RAM, HDD 사이에 캐시를 넣어서 자주 쓸 것은 미리 올려 놓는다.
3. 데이터베이스는 디스크에서 읽어오기 때문에 속도가 느리고, 이에 디스크에서 읽지 않고 메모리에서 읽는 데이터베이스가 등장했다. 그것이 Redis라는 noSQL이다. 속도가 엄청 빠르다.

<br />

### 28. 빅데이터

1. Apach의 Spark가 메모리에서 처리하기 때문에 Hadoop보다 100배 빠르다. 디스크에서 처리해도 10배 빠르다. 이유는 함수형 언어이기 때문이다.
2. Spark는 Scala로 만들어졌다.

<br />

### 29. RDBMS

1. RDB는 테이블 형태로 구성되어 있다. 반면에 MongoDB는 키와 값의 쌍으로 구성되어 있다.
2. Redissms 키와 값 형태로 넣는다.

<br />

### 30. 자료구조와 알고리즘

1. 데이터를 어떻게 넣고 관리할 것인가에 관한 것이 자료 구조이다.
2. 데이터를 어떻게 처리할 것인가에 관한 것이 알고리즘이다.

<br />

### 31. 기타

1. Blog는 we**B** + **Log**의 합성어
2. 나중에 시간이 된다면 python(머신 러닝)과 scala(빅데이터)를 배워보자!
3. Node.js + Electron으로 데스크톱 GUI 앱을 만들 수도 있다.

<br />

<br />

## 2 Day

### 1. Node.js의 특징

1. Javascript로 코딩할 뿐, 그 내부 구조는 C++로 만들어졌다.
2. 동시에 접속하는 멀티 환경에서 객체지향은 좋은 방법이 아니다. 그런 환경에서는 함수형 언어로 가는 것이 좋다.

<br />

### 2. 프로그래밍 언어의 발전

1. 위로 갈수록 기계에 가깝고, 아래로 갈수록 사람에 가깝다.
   1. 기계어 (호스를 연결하는 방식이 코딩이었다)
   2. 어셈블리어 (기호가 등장)
   3. C 언어 (조건문, 반복문 등의 로직이 등장)
   4. C++ (절차 지향에 객체 지향의 특징을 얹었다)
   5. 자바 (완전한 OOP)
2. 이러한 발전의 방향은 결국 인간이 생각하고 처리하기 좋도록 하기 위함이었다.
3. 기계어가 속도는 젤 빠르지만 그것은 미친 짓이고, 현재는 언어 자체에서 처리 속도가 나는 것은 거의 없어서 중요하지 않다. 데이터베이스의 처리 속도가 중요하다.

<br />

### 3. OOP와 FP, 그리고 Hybrid

#### 3.1 OOP

1. 객체 = 속성(명사, 변수) + 행위(동사, 메소드)
2. 동시에 들어와서 처리해야 하는 상황에서 문제가 있다. 그거를 해결하기 위해서 함수형을 찾게 되었다.

<br />

#### 3.2 FP

1. 함수형 언어에서 불변이라는 개념이 추가되었다. (const 키워드)
2. OOP에 비해 자료구조가 5개 정도로 매우 적고 모든 것을 함수로 처리해서 코드가 깔끔하다.

<br />

#### 3.3 Hybrid

1. Javascript, Python, Ruby, Swift, Kotlin
2. 함수만 호출하면 되므로 객체 지향보다 훨씬 단순하다.
3. 함수형 언어에 포커스를 맞추자!

<br />

### 4. 배열 메소드

1. 반복문으로 처리하는 것은 절차적인 코드이다. 다음 메소드처럼 어떤 일을 하라고 선언만 하는 것은 선언적인 코드이다.

#### 4.1 Array.prototype.map

1. 배열의 각 요소를 순회하면서 새로운 배열을 만든다.

<br />

#### 4.2 Array.prototype.filter

1. 배열의 각 요소를 순회하면서 반환값이 true인 요소들만으로 이루어진 새로운 배열을 만든다.

<br />

#### 4.3 Array.prototype.reduce

1. 배열의 각 요소를 순회하면서 두 번째 파라미터로 전달된 콜백 함수의 첫, 두 번째 인자에 각 요소를 전달한다.

<br />

### 5. package.json의 의존성 관리

1. body-parser: 응답, 요청 객체의 body를 파싱해준다.
2. cookie-parser
3. morgan
4. serve-favicon: favicon은 favorite icon을 뜻한다. 자신을 나타내는 아이콘을 표현할 때 favicon을 사용한다. 현재의 브라우저는 서버에 요청이 필요할 때 두 번에 걸쳐서 하는데 첫 번째에는 파비콘을, 두 번째에는 데이터를 요청한다.

<br />

### 6. ASP, PHP, JSP

1. 동적 페이지를 생성하기 위한 목적으로 마이크로 소프트에서 ASP(Active Server Page)를 만들었다.
2. ASP는 윈도에서만 작동했으므로 Linux에서도 사용하고자 하는 목적으로 PHP(Personal HomePage, 지금은 그 뜻이 바뀌었음)가 탄생하였다. 
3. 뒤늦게 Java 진영이 참여해서 JSP를 만들었다. 가장 대중적으로 쓰였는데, 가장 큰 이유는 Java가 플랫폼 독립적으로 어떤 운영체제에서든 돌아갔기 때문이다. 따라서 메이저 언어로 자리잡았다.

<br />

### 7. HTTP(HyperText Transfer Protocol)

1. 원래 http는 이름대로 원래 html 문서만 주고받기 위해 만들어진 프로토콜이다. 그러다 보니깐 html만 전송하고 나면 연결을 끊어버리게 되어있다. 따라서 브라우저가 특정 사이트에서 문서를 요청했을 때 전송만 하고 연결을 끊는 문제가 있었다. 이렇게 연결이 계속 유지되지 않고 끊어지는 프로토콜을 stateless 프로토콜이라 한다. 따라서 상태가 없기 때문에 상태를 유지할 필요가 생겼다.

<br />

### 8. 상태를 유지하는 방법

#### 8.1 GET 방식

1. 웹 페이지 주소를 계속 이어붙여서 유지하는 방식이다.

<br />

#### 8.2 POST 방식

1.  form 태그 안에 `<input type="hidden">`으로 이 안에 정보를 담는다. 이렇게 하여 정보를 다음 페이지로 넘기는 방식이다.

<br />

#### 8.3 쿠키(Cookie)

1. 동화 헨젤과 그레텔에서 지나온 길을 찾아가기 우해 과자 부스러기로 뿌렸다는 것에서 유래되었다.
2. 웹 사이트에 최초로 접속할때 서버가 클라이언트에게 그에 대한 쿠키를 주고, 그 정보는 사용자의 컴퓨터에 저장되고 그 정보가 쿠키(cookie)이다. 두 번째 접속할 때는 그 url에 대한 쿠키를 갖고 있으므로 바로 찾아갈 수 있다.
3.  *.txt와 같은 파일의 형태로 저장된다. 따라서 이 파일에 비밀번호와 같은 정보를 넣어두면 안된다. 보안에 중요하지 않은 내용을 담아두는 것이 보통이다. 그래서 쿠키만으로는 로그인에 관한 정보를 기록할 수 없다. 이것을 위한 것이 세션(Session)이다. 

<br />

#### 8.4 세션(Session)

1. 서버의 메모리. 그 사용자의 정보를 관리하는 것을 말한다.
2. 서버의 메모리에 생성이 되기 때문에 보안이 가능하다. 따라서 서버에서 해당 사용자를 관리할 수 있다.
3. 키와 값의 형태로 저장되어있다.(ex: id: hong).
4. 쇼핑몰의 장바구니에 세션을 활용할 수 있다. `키 = 상품코드: 값 = 수량` 형태로 저장하면 세션이 저장되어있기 때문에 매번 물어볼 필요 없이 장바구니를 유지할 수 있다.

<br />

### 9. mariaDB와 Sequel Pro 

1. mySQL과 mariaDB는 같은 포트를 사용하기 때문에 함꼐 설치하면 충돌이 일어난다. 거의 똑같다고 할 수 있으므로 하나만 설치해서 사용하면 된다.

2. 맥에서 다음 명령어로 mariaDB를 설치할 수 있다.

   ```bash
   brew install mariadb
   ```

3. Sequel Pro는 맥에서 사용할 수 있는 mySQ을 그래픽 환경에서 다룰 수 있도록 만들어진 GUI 툴이다.

<br />

### 10. 데이터베이스 설계

#### 10.1 논리적 모델링

1. 게시판 테이블

   | 글 번호 | 제목   | 내용   | 작성자  | 날짜   | 조회수  |
   | ---- | ---- | ---- | ---- | ---- | ---- |
   | 숫자   | 문자   |      |      |      |      |

<br />

#### 10.2 물리적 모델링

1. board

   | num  | subject | content | writer  | regdate  | hit  |
   | ---- | ------- | ------- | ------- | -------- | ---- |
   | int  | varchar | text    | varchar | datetime | int  |

2. varchar: variable character. 글자 수를 지정해줘야 한다. 최대 3000자까지 가능하다.

3. text: 좀 더 길은 데이터를 써야 할 때는 text를 사용한다. 약 65000자까지 가능하다.

4. 전체에서 유일한 값을 PK(Primary Key)로 지정한다. (글 번호)

5. 먼저 종이에 적어보면서 논리적 모델링을 하고 나서 물리적 모델링(자료형, 크기, NOT NULL 등을 지정)을 하는 것이 순서이다. 그 후 실제로 데이터를 만들어낸다.

<br />

#### 10.3 SQL 문

1. 다음은 board table을 만드는 SQL문이다.

   ```sql
   CREATE TABLE board(
     num INT AUTO_INCREMENT,
     pwd VARCHAR(20) NOT NULL,
     subject VARCHAR(100) NOT NULL,
     content TEXT NOT NULL,
     writer VARCHAR(20) NOT NULL,
     regdate DATETIME DEFAULT NOW() NOT NULL,
     hit INT DEFAULT 0 NOT NULL,
     PRIMARY KEY(num)
   );
   ```

2. 반드시 입력되야 되는 값은 `NOT NULL`로 지정한다. default는 `NULL`이다.

3. TEXT는 자체적으로 관리하는 크기가 있기 때문에 따로 크기를 지정할 필요가 없다.

4. datetime을 `DEFAULT NOW()`로 지정하면 데이터가 테이블에 저장되는 순간 그 시간이 자동으로 저장된다.

5. hit는 처음 조회수가 0이므로 `DEFAULT 0`으로 지정한다.

6. `PRIMARY KEY(num)`는 num을 Primary Key로 지정하는 부분이다.

7. `VARCHAR(10)`일 때 세 글자만 입력했을 때 남은 공간에 공백이 생기지 않지만, `CHAR(10)`이면 세 글자를 입력했을 때 나머지 공간에 0이 채워진다. 정해진 글자 수를 가져야할 때는 `CHAR`을 사용한다.

<br />

### 11. mysql 모듈

#### 11.1 설치

1. 다음 명령으로 mysql 모듈을 설치한다.

```bash
npm install mysql
```

<br />

#### 11.2 예제

1. [mysql](https://github.com/mysqljs/mysql)

   ```javascript
   // mysql 모듈 import
   var mysql = require("mysql");

   // 데이터베이스에 연결하기 위해 createConnection 명령으로 연결 객체를 얻어온다.
   var connection = mysql.createConnection({ // 
     host: "localhost",
     user: "root",
     password: "", // 비밀번호가 없으면 빈 칸으로 놔둔다.
     database: "test"
   });

   // 데이터베이스를 연결한다.
   connection.connect();

   // 데이터 작업을 처리한다.
   connection.query("SELECT 1 + 1 AS solution", function(error, results, fields) {
     if (error) throw error;
     console.log("The solution is: ", results[0].solution);
   });

   // 연결 해제
   connection.end();
   ```

2. `SELECT 1 + 1 AS solution`: 테이블 없이 코드를 실행할 수 있다. AS는 별칭(Alias)을 뜻한다. `AS solution`은 별칭을 solution으로 지정하겠다는 뜻이다.

3. 동기 방식은 코드에서 오른쪽의 실행 결과가 왼쪽으로 돌아가고, 비동기 방식은 오른쪽의 실행결과가 오른쪽으로 간다.

4. 테이블에서 가로 방향의 한 줄을 레코드 또는 row라고 한다. 세로 방향의 한 줄은 column이라고 한다.

5. 테이블을 만드는 것을 CREATE, 선택하는 것을 SELECT, 레코드 한줄(row)를 넣는 것을 INSERT, 지우는 것을 DELETE, 수정하는 것을 UPDATE라고 한다.

6. mySQL을 다루는 것은 액셀 파일을 직접 클릭해서 만드는 게 아니라 sql을 이용해서 이런 작업을 수행한다고 생각하면 된다.

<br />

### 12. 아마존 웹 서비스 (AWS)

#### 12.1 개요

1. 아마존 웹 서비스 관련 도서 추천 - [아마존 웹 서비스를 다루는 기술](http://pyrasis.com/book/TheArtOfAmazonWebServices)
2. AWS에서 가장 많이 사용하는 서비스는 다음과 같다.
   1. EC2 (Elastic Cloud Computing): 컴퓨터 1대라고 생각하면 된다.
   2. S3 (Simple Storage Service): 외장 하드
   3. RDS (Relational Database Service): 관계형 데이터베이스 서비스
3. 1개까지 무료로 만들 수 있고 추가로 생성하려면 일정 금액을 지불해야 한다.

<br />

#### 12.2 키 페어

1. 키 페어는 비밀 키를 뜻한다. 이 비밀 키가 있어야 아마존 웹 서비스에 접속할 수 있다.

2. 키 페어는 유출되면 안된다. 분실하게 되면 아무도 서버에 접속할 수 없다. 분실 시 사용하던 EC2를 버리고 새로 만들어야 한다.

3. AWS 사이트의 EC2 서비스에서 연결할 EC2 컴퓨터를 선택 후 연결 버튼을 누르면 인스턴스 연결 방법을 확인할 수 있다.

4. 키 페어가 위치한 폴더로 이동한 후 다음 명령을 실행하면 EC2 인스턴스에 연결할 수 있다.

   ```bash
   chmod 400 [pem 파일명]
   ssh -i [pem 파일명] [퍼블릭 DNS]
   ```

5. `chmod`는 change mode를 의미한다.

<br />

#### 12.3 접근 권한

1. `400`은 사용할 수 있는 접근 권한에 관한 것으로, 첫 자리는 자신, 둘째 자리는 그룹, 셋째 자리는 다른 사람에 대한 권한을 지정하는 값이다.
2. 권한의 종류는 R(Read, 읽기 권한), W(Write, 쓰기 권한), X(excute, 실행 권한)로 3가지가 있고, R만 지정하면 읽기만 가능하다.
3. RWX 순으로 4(2의 제곱), 2, 1의 값을 가지며 값의 총 합으로 권한을 표현한다. 즉, 모든 권한을 갖고 있으면 4 + 2 + 1로 7을 갖게 되고 읽기 권한만 가지고 있으면 4의 값을 갖게 된다.
4. 최종적으로 `400`은 자신에게 읽기 권한만 부여하고 그룹과 다른 사람들에게는 권한을 부여하지 않겠다는 의미가 된다.
5. 자신에게 읽기 권한만 부여하는 이유는 자신이 다른 파일을 작업하다가 이 pem 파일을 수정하면 안되기 때문에 읽기 전용 파일로 만들기 위함이다.
6. 보통 `755`로 설정하기도 하는데 이때 자신은 읽기, 수정, 실행을 모두 할 수 있게 된다. 위 상황에서는 자신도 이 파일을 고치면 안된다는 의미로 400을 부여한 것이다.

<br />

#### 12.4 서버 실행

1. 서버를 실행했더라도 열리지 않는데, 그 이유는 해킹을 막기 위해 서버를 막아놨기 때문이다. 보안 그룹 탭에서 인바운드를 클릭하고 규칙 추가로 3000번 포트를 추가하면 해제할 수 있다.

2. 푸티로 서버를 띄웠을 때 푸티를 종료하면 서버도 함께 종료되버린다. 이때 forever 또는 pm2와 같은 모듈을 이용하면 서버를 백그라운드에서 띄워둘 수 있다. 다음 명령어로 pm2를 설치한다.

   ```bash
   npm i -g pm2
   ```

3. 다음 명령어로 pm2 서버를 띄울 수 있다.

   ```bash
   pm2 start app.js
   ```

4. 다음 명령어로 서버를 종료할 수 있다.

   ```bash
   pm2 stop app
   ```

<br />

#### 12.5 SSH

1. SSH는 Secure SHell을 의미하며, 보안이 되는 도스 창이다.

2. 다음 명령어는 SSH 프로그램을 통해서 해당 pem 파일을 가지고 퍼블릭 DNS url에 접속하겠다는 의미이다.

   ```bash
   ssh -i [pem 파일명] [퍼블릭 DNS]
   ```

<br />

### 13. CLI 명령어

1. `apt-get`에서 apt는 Advanced Packaging Tool을 의미한다.
2. 우분투(Ubuntu)를 포함안 데비안(Debian)계열의 리눅스에서 쓰이는 패키지 관리 명령어 도구이다.
3. `ls -al`: 현재 폴더의 내용을 숨김 파일까지 모두 보여준다.
4. 리눅스에서 파일명이 .으로 시작하는 파일은 숨김 파일을 의미한다.
5. `curl`은 인터넷으로 다운받겠다는 뜻이다.
6. `nano .bashrc`은 nano 에디터로 .bashrc 파일을 편집하기 위한 명령어이다.
7. `rm -r [폴더명]`으로 하위 폴더까지 모두 삭제할 수 있다. `-r` 옵션은 recursive를 의미한다.
8. 리눅스에서는 휴지통이 없으므로 `rm` 명령을 수행하면 바로 지워지므로 조심해야한다. 윈도와 맥에서는 휴지통으로 이동된다.
9. `sudo rm -rf /` 명령으로 컴퓨터를 날릴 수 있다.
10. nano 에디터에서 `⌃X`로 에디터를 종료할 수 있다.
11. `cat [파일명]`으로 파일의 내용을 확인해 볼 수 있다.

<br />

<br />

## 4 Day

### 1. Activity 

1. 적응형 웹 디자인은 들어오는 사용자의 디바이스를 감지해서 그에 적합한 마크업과 CSS를 제공하는 것을 뜻한다.
2. 반응형은 마크업을 한번만 하면 된다는 장점이 있다.
3. 제공하려는 정보가 많지 않을 경우 반응형이 매우 좋을 수 있지만, 포털 사이트와 같이 굉장히 많은 내용을 제공해야 하는 사이트라면 어려울 수 있다.
4. 제공되는 내용은 많지 않은데 웹과 모바일을 모두 대응해야 하는 상황이라면 반응형으로 제작하는게 오히려 나을 수 있다.
5. 상황에 따라 적응형과 반응형 중 어떤 것으로 대응하는 것이 더 좋을지 고민해야 한다.

<br />

### 2. 관계형 데이터베이스 (RDBMS)

1. 관계형 데이터베이스 시스템에서 데이터는 포도 알, 데이터베이스는 포도송이에 비유할 수 있다.
2. mariaDB는 이러한 데이터베이스를 쉽게 다룰 수 있도록 해주는 소프트웨어이다.
3. 데이터베이스는 2차원 테이블이 여러개 있는 것이라 생각하면 된다.
4. A,B,C 테이블이 있을 때, 서로 간에 어떤 연관을 맺고 있는 줄 알아야 각 테이블이 서로의 테이블을 참조할 수 있다. 그것을 관계라고 한다.
5. 관계를 맺으려면 서로 간에 연결 고리가 있어야 한다. 그 연결 고리로 프라이머리 키가 존재한다. 모든 테이블에는 프라이머리 키(PK)가 존재하고 그 프라이머리 키가 다른 테이블에 연결이 되어있다. 그 프라이머리키를 다른 테이블에 집어넣음으로써 관계를 맺을 수 있다. 이러한 형태로 각 테이블과 테이블이 관계를 맺고 있다.
6. 간단한 예로 회원 테이블과 게시판 테이블이 있다고 가정할 때, 회원 테이블과 게시판 테이블의 PK는 각각 회원 ID, 글 번호라고 하자. 글을 작성할 때 글쓴이 대신 회원 ID를 집어 넣게 되면 게시판 입장에서 해당 회원 ID를 찾아가면 해당 회원에 대한 데이터를 알 수 있을 것이다. 이러한 형식으로 회원 테이블과 게시판 테이블이 관계를 맺고 있고 결국 모든 테이블이 이와 같은 방법으로 모두 연결되어 있다.
7. 모든 테이블은 PK를 가져야 하고 회원 테이블의 PK가 게시판 테이블에 저장이 되면, 게시판 테이블에서 회원 테이블로 가서 해당 회원의 정보를 알아낼 수 있다. 각 테이블의 PK가 다른 테이블로 넘어갈 때 그것을 FK(Foreign Key, 외래 키)라고 한다. 회원 테이블의 회원 ID는 회원 테이블에서는 PK였지만, 게시판 테이블에서는 FK가 된다.
8. PK가 필요한 이유는 게시판 테이블에 존재하는 PK를 통해 회원 테이블을 찾아가서 해당 정보를 알아내기 위해서이다.
9. 프라이머리 키와 비슷한 유니크 키란 것이 있는데, 차이점은 유니크 키는 NULL도 하나의 값으로 넣을 수 있다는 것이다. 두 개를 넣을 수는 없다.

<br />

### 3. 웹 서버와 모바일 서버

1. 웹 서버와 모바일 서버는 한 끝 차이다. 굳이 구분을 하긴 하지만 실은 같은 것이다.
2. 웹 서버는 결과를 html로 돌려주고 모바일 서버는 json으로 돌려준다.
3. Express에서 html로 돌려줄 때는 `res.render()`로, json으로 돌려줄 때는 `res.json`으로 보낸다.

<br />

### 4. mySQL 모듈 사용하기

1. 다음은 mySQL 모듈을 사용하는 간단한 예제 코드이다.

   ```javascript
   var mysql = require("mysql");

   var obj = {
     host: "localhost",
     user: "root",
     password: "",
     database: "test"
   };

   var connection = mysql.createConnection(obj);

   connection.connect();

   connection.query("SELECT 1 + 1 AS solution", (error, results) => {
     if (error) throw error;
     console.log("The solution is: ", results[0].solution);
   });

   connection.end();
   ```

2. `createConnection()`에 인자로 전달되는 객체는 데이터베이스 연결에 대한 정보를 담고 있다.

   1. `host`는 데이터베이스가 저장되어있는 컴퓨터를 알려주는 부분이다. 이때 localhost 또는 127.0.0.1은 자신의 컴퓨터를 뜻한다.
   2. 데이터베이스에 접속하려면 사용자명과 비밀번호가 필요하고 그것에 대한 정보가 `user`와 `password`이다.
   3. 어떤 데이터베이스를 쓸 것인지에 대한 정보가 `database`이다.

3. 연결 객체를 만든 후 `connection.connect()`로 데이터베이스에 접속한다.

4. `connection.end()`로 연결을 종료 한다.

5. mySQL GUI 툴에서도 위와 똑같은 과정과 정보가 필요하다.

6. SELECT의 결과는 배열이다.

<br />

### 5. Pooling Connections

1. 연결(Connection)을 카페 운영에 비유하면 다음과 같다.

   1. 손님이 커피를 주문하면, 머그 잔에 커피를 담아서 주게 된다.
   2. 커피를 2,500원, 머그 잔의 가격을 10,000원이라고 하자. 이때 손님이 커피를 먹고 나서 머그 잔을 깨버리고 간다면 카페 입장에선 손해보는 장사가 된다. 머그 잔을 원래 그대로 돌려 받을 수 있어야 한다.
   3. 또한 손님이 와서 주문을 할 때마다 머그 잔을 새로 구워야 한다고 가정하면, 이것 또한 상당한 시간을 요구하는 작업이 될 것이다. 따라서 손님이 여러 명 들어올 것을 대비해 머그 잔을 미리 준비를 해놓는다. 그러면 매번 새로 만들어야 하는 시간을 절약할 수 있다. 따라서 100명의 손님이 몰려오더라도 즉시 제공해줄 수 있다.
   4. 연결(Connection) 역시 절대 싼 자원이 아니다. 부담이 많이 가는 자원이다.
   5. Pooling을 하는 것은 머그 잔을 돌려받는 것과 같다. 사용자가 연결을 다 사용하고 나면 반납을 한다.
   6. 또한 미리 적절한 갯수의 연결 객체를 만들어 놓고 사용자가 들어왔을 때 그 갯수만큼 들어올 수 있도록 하고 나머지는 대기하다가 빠져나가면 들어올 수 있도록 하는데, 이러한 개념을 커넥션 풀(Connection Pool)이라고 한다. 매번 새로 만들지 않기 때문에 생성 비용이 들지 않는다.

2. Pooling이 없다는 것은 한 번 쓰고 버린다는 뜻이다. 실습할 때는 이렇게 Pooling이 없는 형태로 진행해도 되지만, 실무 환경에서는 Pooling이 필요하다.

3. 다음은 Pooling Connection을 사용하는 예제 코드이다.

   ```javascript
   // ...

   const pool = mysql.createPool(obj);

   pool.getConnection((err, conn) => {
     // console.log('conn', conn);
     // if (err) return console.log('err=', err);
     // if (err) { console.log('err=', err); return; } 

     if (err) {
       console.log('err=', err);
       return;
     }
     conn.query('SELECT 1 + 1 as solution', (err, rows) => {
       console.log('rows=', rows);
       const a = rows[0];
       console.log('rows[0]=', a);
       console.log("rows[0].solution=", a.solution);
       conn.release();
     })
   });
   ```

   1. `conn.release()`는 머그 잔을 사용하고 나서 반납하는 것과 같다. 사용하고 난 후 항상 `release()`해야 한다.
   2. 자바스크립트의 콜백 함수의 대부분은 관행적으로 첫 번째 파라미터로 에러 객체를 전달받는다.

<br />

### 6. 로드 밸런싱

1. 실제 서비스를 할 때에는 웹 서버를 한 대가 아니라 여러 대를 사용하게 된다. 한 대만 사용할 경우 그 서버가 종료되버리면 큰 일 나지만, 여러 대를 사용하면 그 동안 하던 일을 다른 쪽으로 넘겨줄 수 있는데, 이것을 로드 밸런싱이라고 한다.
2. 지금은 컴퓨터 한 대에 모든 것을 설치했지만, 실제로는 로드 밸런싱을 통해 node, express가 설치된 서버를 여러 대 두고 이 서버들이  데이터베이스를 둔 서버를 바라보는 형태로 구성한다. 이때에는 연결 정보를 담고 있는 객체의 host 프로퍼티에 데이터베이스가 설치된 서버의 IP 주소를 적어줘야 한다.

<br />

### 7. 테이블 생성 (member 테이블)

1. 다음은 member 테이블 생성을 위한 코드이다.

   ```mysql
   CREATE TABLE member(
   	id VARCHAR(20) NOT NULL,
   	name VARCHAR(20) NOT NULL,
   	email VARCHAR(50) NOT NULL,
   	tel VARCHAR(13) NOT NULL,
   	PRIMARY KEY(id)
   );
   ```

<br />

### 8. 데이터베이스 관계의 유형

#### 8.1 일 대 일 관계

1. A 테이블은 자주 쓰는 정보, B는 덜 쓰는 정보와 같은 형태로 구성된, 결국은 하나지만 편의 상 2개로 구별해놓은 하나로 합칠 수 있는 관계이다.

<br />

#### 8.2 일 대 다 관계

1. 부서 테이블과 사원 테이블의 관계로 생각할 수 있다. 사원 테이블과 부서 테이블은 사번과 부서 번호라는 각각의 PK를 갖는다. '일 대 다'라는 것은 어느 쪽은 하나, 어느 쪽은 많다는 것을 뜻하는데 그것은 한 레코드를 기준으로 한다. 부서 번호가 10번인 레코드는 하나 밖에 없고 그 부서에 속한 사원은 여러 명이다. 따라서 부서 테이블에 있는 부서 번호라는 PK는 사원 테이블에서 여러 번 나타나게 되는데, 이러한 관계가 일 대 다 관계이다.
2. 부서 테이블에 있는 부서 번호라는 PK가 사원 테이블에 FK로 가게 되었을 때 그 관계가 일 대 다 관계가 되는 것이다.

<br />

#### 8.3 다 대 다 관계

1. 사실 상 거의 없고 존재하지 않는 관계이다. 그런데도 다 대 다 관계를 이야기하는 이유는 쇼핑몰을 생각해보면 된다. 쇼핑몰의 회원과 상품이 있다고 할 때, 학 회원이 상품 여러 개를 구매할 수 있고 한 상품이 여러 명에게 팔릴 수 있지만 그 관계를 컴퓨터에 하나의 단일 구조로 표현할 수는 없다. 그래서 회원과 상품이 만나서 중간에 파생 테이블이라는 것이 만들어진다. 이 테이블이 구매 테이블이 된다. 구매 테이블은 첫째로 회원 테이블에서 회원 아이디를 가져오고 둘째로 상품 테이블에서 상품 코드를 가져온다. 회원 테이블과 상품 테이블은 모두 구매 테이블에 일 대 다로 붙게 되고, 이것을 '다 대 다' 관계를 해소한다고 한다. '다 대 다' 관계는 현실적으로 있을 수 없는 관계이다. 모든 것을 '일 대 다'로 바꿔주는 것이고 이게 핵심이다.
2. [다 대 다 관계](https://fmhelp.filemaker.com/help/16/fmp/ko/index.html#page/FMP_Help/many-to-many-relationships.html)

<br />

### 9. mySQL 명령어

#### 9.1 INSERT

1. INSERT는 다음과 같이 실행한다.

   ```mysql
   INSERT INTO 테이블명(컬럼명1, 컬럼명2, ...)
   VALUES (값1, 값2, ...);
   ```

2. 실제 사용 예시는 다음과 같다.

   ```mysql
   INSERT INTO member(id, name, email, tel)
   VALUES('hong', '홍길동', 'hong@a.com', '010-1234-5678')l
   ```

<br />

#### 9.2 UPDATE

1. UPDATE는 다음과 같이 실행한다.

   ```mysql
   UPDATE 테이블명
   SET 컬럼명1=값1, 컬럼명2=값2, ...
   WHERE 조건;
   ```

2. 실제 사용 예시는 다음과 같다.

   ```mysql
   UPDATE member
   SET name='홍길순', email='sun@abc.com', tel='010-1234-5678'
   WHERE id='hong';
   ```

3. UPDATE를 수행할 때, WHERE 문을 써서 고치고 싶은 부분을 정확히 지정해주지 않으면 모든 것이 바뀔 수도 있다. 이런 문제를 해결하기 위해 테이블에 유일한 키가 존재해야 한다.

<br />

#### 9.3 DELETE

1. DELETE는 다음과 같이 실행한다.

   ```mysql
   DELETE FROM 테이블명
   WHERE 조건;
   ```

2. 실제 사용 예시는 다음과 같다.

   ```mysql
   DELETE FROM member
   WHERE id='hong';
   ```

3. 명령어로 대문자를 사용하고 직접 설정한 값을 소문자로 쓰는 것은 반드시 지켜야 하는 것은 아니지만, 가독성을 위해 구분해주는 것이 좋다.

<br />

#### 9.4 SELECT

1. SELECT는 다음과 같이 실행한다.

   ```mysql
   SELECT 컬럼명1, 컬럼명2, ... FROM 테이블명
   ```

2. 실제 사용 예시는 다음과 같다.

   ```mysql
   SELECT * FROM member;
   ```

3. 컬럼명을 지정하지 않고 *를 사용하면 모든 값을 조회할 수 있다. 이때 데이터베이스 내부의 Query Optimizer 엔진이 쿼리를 최적화하고 관리하는 일을 수행하는데, *로 모든 컬럼을 선택하면 어떤 컬럼이 있는지 일일이 검색해가며 찾고 순서를 맞춰야 하기 때문에 속도가 느려지는 문제가 발생한다. 따라서 실제 사용할 때는 컬럼을 정확히 지정해주는 것이 좋다. 직접 지정함으로써 Query Optimizer 입장에서 어떤 컬럼을 출력할 지 바로 확인할 수 있다.

<br />

<br />

## 5 Day

### 1. CRUD - Create 

1. 연결 정보에서 `connectionLimit` 프로퍼티로 최대 동시 접속자 수를 설정할 수 있다.

   ```javascript
   const obj = {
     connectionLimit: 100, // 동시에 몇 명까지 받을 것인지 설정
     host: "localhost",
     user: "root",
     password: "H@pp2n!ng!",
     database: "test"
   };
   ```

2. `<input type="text" name="writer">`와 같이 input에 `name` 속성을 지정하면 `req.body.writer`로 값을 넘겨받을 수 있다.

3. 에러는 다양할 수 있고, 서버는 죽으면 안된다. 따라서 서버를 죽지 않도록 하는 방법이 필요한데, 그 역할을 하는 것이 바로 콜백 함수의 `next` 파라미터이다. next로 인해 서버는 에러가 발생해도 죽지 않고 에러 처리를 Express에게 넘기고 Express는 에러를 화면에 뿌려준다.

   ```javascript
   router.post('/write', (req, res, next) => {
     // ...
     
     pool.getConnection((err, conn) => {
       // 에러가 발생하면, 서버를 종료하지 않고 Express에게 에러 처리를 넘긴다.
       if (err) {
         return next(err);
       }  
     // ...
       
     });
   })
   ```

<br />

### 2. AWS에 작업한 내용 업로드하기

1. 데이터를 저장할 시점이 되면 서버가 필요하다.
2. 다음과 같은 순서로 작업한 내용을 업로드할 수 있다.
   1. 내 PC에서 작업한 내용을 github에 push한다.
   2. github에 올린 내용을 AWS EC2에서 pull한다.
3. 웹 서버는 default로 80번 포트를 사용한다. 네이버도 마찬가지로 뒤에 :80이 생략되어 있다.

<br />

### 3. CRUD - Read

#### 3.1 응답을 화면에 뿌려주는 방법

1. `res.send()`
2. `res.render()`
3. `res.json()`

<br />

#### 3.2 웹 서버와 모바일 서버의 응답을 전송하는 방법

1. 웹 서버에서 사용하는 방식은 다음과 같다.

   ```javascript
   res.render('list', obj);
   ```

2. 모바일 서버에서 사용하는 방식은 다음과 같다.

   ```javascript
   res.json(obj);
   ```

<br />

#### 3.3 데이터 정렬

1. mySQL에서는 ORDER BY로 데이터 정렬 순서를 지정할 수 있다. `DESC`는 descending의 약어로, 역 순으로 정렬한다.

   ```mysql
   SELECT * FROM board ORDER BY num DESC
   ```

<br />

### 4. Chrome Extension - JSONView

1. 크롬 확장 도구인 JSONView를 설치하면 JSON으로 전송된 데이터를 보기 좋게 변환해준다.

<br />

### 5. 날짜 형식을 지정하는 방법 

1. 데이터베이스에서 SELECT할 때 변경하는 방법과 자바스크립트에서 바꿔주는 방법이 있다.

2. 데이터베이스에서 `DATE_FORMAT`을 이용하여 날짜 형식을 포맷할 수 있다.

   ```mysql
   DATE_FORMAT(regdate, '%Y-%c-%d%T')
   ```

<br />

### 6. 문자열 템플릿

1. 백쿼트를  사용하여 여러 줄 문자열을 입력할 수 있다.

   ```javascript
       const sql = `SELECT num,
                           subject,
                           writer,
                           regdate,
                           hit
                   FROM board
                   ORDER BY num DESC`;
   ```

<br />

### 7. Express에서 url로 넘겨받은 값을 변수로 사용하는 방법

1. :을 사용하여 url로 넘어온 값을 변수 num에 할당할 수 있다.

2. POST 방식으로 넘어온 변수를 받을 땐 `req.body.*`으로 받았지만 GET 방식으로 넘어온 변수를 받을 땐 `req.params.*` 형식으로 받아야 한다.

   ```javascript
   router.get('/read/:num', (req, res, next) => {
     let num = req.params.num;
     // ...
     });
   });
   ```

<br />

### 8. route 

1. app.js의 다음 설정에서 route 처리를 담당할 파일을 지정할 수 있다.

   ```javascript
   app.use('/', index); // '/'로 요청을 받으면, index.js에서 route 처리를 담당한다.
   app.use('/users', users); // '/users'로 요청을 받으면, users.js에서 route 처리를 담당한다.
   ```

2. 일반적으로 index는 보통 root에 대한 관리를 하는 부분, users는 유저에 관한 관리를 하는 부분으로 묶어서 많이 사용한다.

<br />

### 9. 트렌드 검색

1. [구글 트렌드](https://trends.google.com/trends/)에서 탐색 기능을 이용하여 검색 순위를 비교해 볼 수 있다.

<br />

### 10. 콜백 지옥 

1. `async`나 `async await` 모듈을 사용하면 콜백 지옥을 빠져나올 수 있다.

<br />

### 11. VSCode Extension - Rainbow Brackets

1. 괄호를 색으로 구분하여 열고 닫히는 괄호를 한 눈에 쉽게 파악할 수 있다.

<br />

### 12. input과 textarea

1. `input`은 받아올 값을 `value` 속성에 할당하고, `textarea`는 content에 내용을 입력해준다.

<br />

### 13. git

1. github과 비슷한 서비스로 BitBucket이 있는데, BitBucket은 최대 팀원 5명까지 Private 공간으로 저장소를 사용 가능하다.

2. git으로 추적하는 폴더는 .git이라는 숨김 폴더를 갖고 있다.

3. 다음 명령으로 README.md을 생성하고 "#board"를 입력한다.

   ```bash
   echo "# board" >> README.md
   ```

4. .gitignore를 생성한다. 파일을 생성한 후 node_modules를 입력하여 node_modules를 추적할 파일에서 제외한다.

   ```bash
   touch .gitignore
   ```

5. 전체적 과정은 아래와 같다.

   ```bash
   cd fastcampus/work/board
   echo "# board" >> README.md
   git init
   touch .gitignore
   git add .
   git commit -m "first commit"
   git remote add origin https://github.com/chayeoi/exp1.git
   git push origin master
   ```

6. `push`의 `-u` 옵션: 자신의 로컬 repostitory에 원격 repository를 연동한 후 push 명령을 실행했을 때, 따로 설정한 적이 없기 때문에 내 로컬 repository의 master 브랜치를 원격 repository의 어떤 branch로 push할지 알 수 없다. 이때 -u 옵션을 붙여서 push 명령을 실행하게 되면 자동으로 로컬 repository의 master 브랜치가 원격 repository의 master 브랜치로 push되고, 그 이후부터는 -u 옵션을 붙이지 않더라도 local의 master 브랜치가 원격의 master 브랜치로 push되고, 원격의 master 브랜치가 local의 master 브랜치로 pull된다.

<br />

### 14. AWS Ubuntu에 MariaDB 세팅하기

1. EC2에 SSH를 이용하여 접속한다.

2. [MariaDB Foundation](https://downloads.mariadb.org/mariadb/repositories/#mirror=kaist&distro=Ubuntu)에서 [Ubuntu 선택] → [16.04 LTS 선택] → [10.2 [stable] 선택] 후 나오는 명령어를 차례대로 실행한다.

   ```bash
   sudo apt-get install software-properties-common
   sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xF1656F24C74CD1D8
   sudo add-apt-repository 'deb [arch=amd64,i386,ppc64el] http://ftp.kaist.ac.kr/mariadb/repo/10.2/ubuntu xenial main'

   sudo apt update
   sudo apt install mariadb-server
   ```

<br />

### 15. RDS (Relational Database Service)와 그 외 서비스

1. 실제 서비스를 운영할 때 EC2 3대 정도를 사용하면 웬만한 트래픽은 다 커버할 수 있다. 이때 데이터베이스를 각 3대에 따로 설치하는 것이 아니라 RDS로 하나의 데이터베이스를 사용하고 ELB(Elastic Load Balancing)으로 트래픽을 분산시켜 사용한다.

2. 만일 데이터베이스를 특정 EC2 한 대에 설치한다고 하면 데이터베이스를 다른 컴퓨터에도 또 만들어야 한다.

3. 다음 코드로 host 값에 RDS 서버의 IP 주소를 설정하면 된다.

   ```javascript
   const obj = {
     // ...
     host: "RDS 서버의 IP 주소", // localhost가 아닌 RDS 서버의 IP 주소를 설정한다.
     // ...
   };

   const pool = mysql.createPool(obj);
   ```

4. 트래픽이 증가하면 ELB를 통해서 서버가 자동으로 늘어나고, 트래픽이 줄어들면 자동으로 줄어든다. ELB를 통해 서버가 갑자기 죽는 일을 방지할 수 있다.

5. AWS 사이트에서 RDS 생성 버튼을 누르면 어떤 데이터베이스를 쓸 지 선택할 수 있다.

6. 보통 실제 서비스를 운영할 때, RDS EC2, S3, ELB를 구축해서 사용한다. 이게 최소한의 구성이다.

7. EC2를 생성하면 8기가 정도의 저장 공간이 주어진다. 이때 해당 EC2 컴퓨터에 이미지를 저장하게 되면 다른 EC2에는 이미지가 없는 상태가 되어버리므로 S3로 업로드 후 그것을 가져오는 방식으로 사용한다. 따라서 EC2 하드 디스크에 이미지를 업로드하면 안된다. 클라이언트 입장에서도 어떤 EC2에 저장되어있는지 찾기 힘든 일이다. S3에 업로드하고 DB(RDS)에 업로드된 장소를 저장해놓으면 EC2에서 RDS를 타고 S3에서 이미지를 가져올 수 있게 된다.

8. S3에서 버킷을 만들고 프로그램 상에서 파일을 업로드를 하면 해당 버킷에 저장이 된다.

9. AWS의  컴퓨팅 서비스로 Lambda라는 것이 있는데, 이 서비스를 이용하면 서버리스 애플리케이션을 구축할 수 있다. 그러나 아직 성숙하지 않은 단계에 있다.

10. 데이터베이스 서비스 중 DynamoDB, ElasticCache, Amazon Redshift는 noSQL을 위한 서비스이다.

11. AWS에서 MongoDB는 지원하지 않는다. 그래서 MongoDB를 사용하기 위한 방법으로 EC2에 MongoDB를 설치하고 몇 대를 클러스터로 묶어줘서 환경을 구축하여 사용한다.

12. 분석 서비스의 EMR은 Elastic MapReduce로 빅데이터 처리를 할 수 있다. 빅데이터를 처리하려면 컴퓨터 성능이 엄청 좋아야 하는데, 일반 PC에서 하면 한 달이 걸릴 작업을 EMR에서는 하루 만에 끝낼 수 있다. 사용한 시간만큼만 금액을 지불하면 된다.

<br />

### 16. CRUD - UPDATE

1. hidden 타입으로 처리하는 한이 있더라도 글 번호를 다음 화면으로 넘겨야 한다. 해당 글 번호(PK)를 찾아 DB를 수정해야 하기 때문이다. hidden 처리한 요소는 화면에 보이진 않지만 소스 보기에서 확인할 수 있다. 따라서 중요한 정보는 hidden 처리로 담으면 안 된다.

   ```ejs
   <input type="hidden" name="num" value="<%=row.num%>">
   ```

2. '/update'에 대한 라우팅 처리는 다음과 같다.

   ```javascript
   router.post('/update', (req, res, next) => {
     console.log('req.body=', req.body);
     
     // writeform.ejs에서 정의한 <input type="hidden" ...>에 정의한 글 번호 받기
     const num = req.body.num;
     const writer = req.body.writer;
     const pwd = req.body.pwd;
     const subject = req.body.subject;
     const content = req.body.content;
     pool.getConnection((err, conn) => {
       if (err) { return next(err) };
       
       // 글 번호랑 비밀번호가 일치하면 DB를 업데이트한다.
       const sql = "update set writer=?, subject=?, content=? where num=? and pwd=?";
       const arr = [writer, subject, content, num, pwd];
       conn.query(sql, arr, (err, result) => {
         if (err) { return next(err) };
         console.log("result=", result);
         conn.release();
         
         // DB가 업데이트되면 affectedRows == 1이고 affectedRows == 0이면 업데이트가 안 된 것이다.
         if (result.affectedRows == 1) {
           res.redirect('/list');
         } else {
           // history.back()은 이전으로 되돌아간다.
           res.send("<script>alert('비밀번호가 틀려서 되돌아갑니다!'); history.back();</script>");
         }
       });
     });
   });
   ```

<br />

### 17. 터널링

1. 보통 데이터베이스에서 포트 번호를 열지 않는다. 해커가 자주 쓰는 비밀 번호를 하나 씩 대입해보는 방식의 무한 루프를 돌면서 해킹 툴로 공격하면 언젠간 뚫릴 수 있기 때문이다. 이것을 우회하여 우리가 DB를 설치한 EC2 컴퓨터에 연결하는 방법은 SSH(Secure SHell) 22번 포트를 타고 들어가면 EC2는 내 컴퓨터이므로 localhost로 접속할 수 있다. 





