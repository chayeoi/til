



### 4 Day





AWS ubuntu에서 마리아 디비 세팅하기

https://downloads.mariadb.org/mariadb/repositories/#mirror=kaist&distro=Ubuntu

여기서 16.04 버전을 기준으로 10.2 stable 선택 후 나오는 명령어를 차례대로 실행하면 된다.



RDS(Relational Database Service)



EC2 3대 정도면 웬만한 트래픽은 다 커버함. 데이터베이스를 이 3대에 따로따로 설치하는게 아니라 RDS로 하나의 데이터베이스를 쓰고 

ELB(Elsatic load balancing)으로 처리

만약 데이터베이스를 EC2 한대에 설치하면 데이터베이스를 다른 컴퓨터에도 또 만들어야됨. 원래 정석은 RDS같은 서비스를 두고 ec2 컴퓨터에서



const pool= mysql.createPOol(obj) 할때 obj 객체에 host값에 rds 서버의 ip주소를 설정하면 됨.



서비스가 대박이 나면 elb를 통해서 서버가 자동으로 늘어남. 그러다 트래픽이 줄어들면 또 줄어듬. 이렇게 해노면 갑자기 댑가이 낫는데 서버가 죽어서 서비스 못한다 그러면 고객이 다 떨어짐. 이걸 통해서 계속 늘어나게 설정을 해놓으면 아무리 많은 사용자가 접속하더라도 많아지면 계속 늘어나고 줄어들면 한두대로 줄어듬.



rds 생성쪽으로 가면 어떤 데이터베이스를 쓸지 고를 수가 있음.

보통 rds, ec2, s3, elb 정도를 구축해서 씀. 이게 최소한의 구성.

ec2를 만들게 되면 하드디스크 8기가를 주는데 ec2에다가 이미지를 저장하게 되면 다른 ec2엔 없게되므로 S3로 업로드해서 그것을 가져와서 사용한다. 

ec2의 하드디스크에 업로드하면 안된다. 세대가 떠잇다고 하면 어디에 저장되어있는지 클라이언트 입장에서도 찾기가 힘듬. 따라서 S3에 업로드하면 db(rds)엔 업로드된 장소를 저장해놓음. 그러면 ec2에서 db를 타고 s3에서 가져올수가 있음.



s3는 버킷을 만들어서 프로그래매 상에서 업로드를 하면 거기에 저장이 됨.



aws 컴퓨팅에서 lambda는 서버리스, 서버없이 구축할수있는 서비스.그러나 아직 성숙하지 않았음.



데이터베이스에서

아래 3개는 nosql

dynamoDB

ElsatiCache -redis랑 같은거. 메모리상에서 빨리 캐시하는거.

Amazon Redshift- 이것도 비슷한 형태의 nosql



aws에서 mongodb는 지원을 안해줌. 그래서 어떻게 하냐면 ec2에 mongodb를 깔고 몇대를 묶어줘서 클러스터로 묶어줘서 환경을 구축을하고 그렇게 사용함.

몽고디비가 보조적인역할을 한다면 Ec2 한대만 간단하게 몽고디비로 사용.

아마존 웹서비스로 엄청난걸 안하겠다고 하면 싼 서비스도 있는데 digitalocean.com 이란 곳에서 5달러 짜리 사용할 수 있음. 요거만 가져도 웬만한 테스트는 다 해볼 수 있음. 리눅스 서버 한대인데 아주 쌈. 간단한거 테스트할땐 여기서 하면 된다.



아마존웹서비스가 유일한 방법은아니다.

http://fun25.co.kr/

위와 같은 간단한 서비스도 있다.



https://mlab.com/

여기서 서버없이 500mb까지 무료로 몽고디비를 쓸수가 있다. 



분석 - EMR은 맵 리듀스라고 해서 빅데이터 처리. 여기서 처리할 수 있다. 원래 빅데이터를 할려면 컴퓨터가 엄청 좋아함. 피씨에서 하면 한달이 걸리는 작ㅇ버을 EMR에서는 하루만에 끝낼수있음. 시간만큼 돈을 받으니깐 좋다.





updateform.ejs에서

​        <td>

​          <input type="hidden" name="num" value="<%=row.num%>">



이렇게 히든으로 글번호에 대한 정보를 다음페이지로 넘겨야 한다.

히든처리하면 글번호는 화면엔 앙ㄴ보이지만, 소스보기에선 나온다. 따라서 중요한 정보는 히든처리로 담으면 안된다.



```javascript
router.post('/update', (req, res, next) => {
  console.log('req.body=', req.body);
  const num = req.body.num; // writeform.ejs에서 정의한 <input type="hidden" ...>에 정의한 글 번호 받기
  const writer = req.body.writer;
  const pwd = req.body.pwd;
  const subject = req.body.subject;
  const content = req.body.content;
  pool.getConnection((err, conn) => {
    if (err) { return next(err) }
    // 글번호랑 비번이 맞아야 업데이트 해준다
    const sql = "update set writer=?, subject=? content=? where num=? and pwd=?";
    const arr = [writer, subject, content, num, pwd];
    conn.query(sql, arr, (err, result) => {
      if (err) { return next(err) };
      console.log("result=", result);
      conn.release();
      res.redirect('/list'); // 리다이렉트
    });
  });
});
```





affectedRows라는 값이 0이면 업데이트가 안됫다는 뜻. 1이 되야 업데이트가 된 것.



history.back(); 이전으로 뒤돌아감.



textarea태그는 여는, 닫는 태그 사이에 엔터로 줄바꿈하지 말고 붙여서 쓰는게 정석. 줄바꿈하면 공백 공간이 그대로 드러남.



데이터베이스 접속.

mysql -uroot -p 후 비밀번호 입력하면 접속됨



show databases;로 데이터베이스가 뭐뭐있는지 볼 수 있음.



create database test;



터널링: 보통 데이터베이스에서 포트번호를 열지 않음. 왜냐면 무한루프를 돌면서 해킹툴로 공격하면 언젠간 뚫수있기 때문.

포트를 여는 순간 무한루프를 돌면서 자주쓰는 비밀번호를 하나씩 대입해봄. 그러다보면뚫릴수가 있음.

우회방법은 아마존 웹서비스 시큐어셀 22번 포트를 타고가서 ec2는 내컴퓨터이므로 터널타고 가면 로컬호스트로 접속할 수 있음.

내가 아마존 웹서비스 EC2로 접속하는 순간, 내컴퓨터가 아니라 EC2가 되기때문에 자유롭게 쓸수있음. 그렇게 우회할수있는것이 터널링.

헤이디 sql이 이 터널링을 지원함.





자신의 로컬 repostitory에 원격 repository를 연동한 후 push 명령을 실행했을 때, 따로 설정한 적이 없기 때문에 내 로컬 repository의 master 브랜치를 원격 repository의 어떤 branch로 push할지 알 수 없다. 이때 -u 옵션을 붙여서 push 명령을 실행하게 되면 자동으로 로컬 repository의 master 브랜치가 원격 repository의 master 브랜치로 push되고, 그 이후부터는 -u 옵션을 붙이지 않더라도 local의 master 브랜치가 원격의 master 브랜치로 push되고, 원격의 master 브랜치가 local의 master 브랜치로 pull된다.