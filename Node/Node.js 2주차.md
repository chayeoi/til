# Node.js

## 03 노드의 자바스크립트와 친해지기

### 03-2 배열 이해하기

1. 배열의 모든 요소 하나씩 확인하기

- for 문을 사용할 수도 있지만 forEach() 메소드를 사용하여 배열의 각 요소를 순회할 수도 있다. forEach() 메소드를 호출할 때는 함수를 파라미터로 전달하게 되는데 이 함수는 배열에 들어 있는 각 요소를 확인할 때마다 반복해서 호출된다.
- forEach() 메소드를 호출할 때 전달하는 함수에는 세 개의 파라미터가 들어가는데, 첫 번째는 배열의 각 요소이며 두 번째는 각 요소의 인덱스 값, 세 번째는 순회하는 대상 배열에 대한 값이다.

```javascript
var members = [
  {name: '규산', age: 27},
  {name: '상은', age: 25},
  {name: '종원', age: 26},
  {name: '찬연', age: 28}
];

members.forEach(function(item, index) {
    console.log((index + 1) + '번째 스터디원 정보\n이름: ' +item.name +'\n나이: ' + item.age)
})
```

2. 배열에 값 추가 및 삭제하기

| 속성 / 메소드 이름                      | 설명                             |
| -------------------------------- | ------------------------------ |
| push(item)                       | 배열의 끝에 요소를 추가한다.               |
| pop()                            | 배열의 끝에 있는 요소를 삭제한다.            |
| unshift(item)                    | 배열의 앞에 요소를 추가한다.               |
| shift()                          | 배열의 앞에 있는 요소를 삭제한다.            |
| splice(start, deleteCount, item) | 여러 개의 객체를 요소로 추가하거나 삭제한다.      |
| slice(start, end)                | 여러 개의 요소를 잘라내어 새로운 배열 객체로 만든다. |

- 배열 중간에 있는 요소를 삭제하고자 할 때, delete 키워드를 사용하면 인덱스를 이용해 배열 요소를 삭제할 수 있지만 delete 키워드를 사용하면 공간은 그대로 남겨둔 채 요소만 삭제하므로 공간까지 없애 주는 splice() 메소드를 사용하는 것이 좋다.

### 03-3 콜백 함수 이해하기

1. 함수를 파라미터로 전달하는 경우는 대부분 비동기 프로그래밍(Non-Blocking Programming) 방시으로 코드를 만들 때이다.
2. 클로저는 내부함수를 위한 외부함수의 지역변수가 외부함수에 의해 내부함수가 반환된 이후에도 life-cycle이 유지되는 것을 의미한다.

~~~javascript
function add(a, b, callback) {
  var result = a + b;
  callback(result);

  var count = 0;
  var history = function() {
    count++
    return count + ' + ' + b + ' = ' + result;
  };
  return history;
};

var add_history = add(10, 10, function(result) {
  console.log('파라미터로 전달된 콜백 함수 호출됨.');
  console.log('더하기 (10, 10)의 결과 : %d', result);
});

console.log('결과 값으로 받은 함수 실행 결과 : ' + add_history());
console.log('결과 값으로 받은 함수 실행 결과 : ' + add_history());
console.log('결과 값으로 받은 함수 실행 결과 : ' + add_history());
~~~

### 03-4 프로토타입 객체 만들기

1. 자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어 있다. 그리고 이것은 마치 객체 지향의 상속 개념과 같이 부모 객체의 프로퍼티 또는 메소드를 상속받아 사용할 수 있게 한다. 이러한 부모 객체를 **prototype 객체** 또는 **prototype**이라 한다.

## 04 노드의 기본 기능 알아보기

### 04-1 주소 문자열과 요청 파라미터 다루기

1. 웹 사이트에 접속하기 위한 사이트 주소 정보는 노드에서 **URL 객체**로 만들 수 있다. 예를 들어, 구글 사이트에서 영화배우 정보를 찾기 위해 키워드로 actor를 넣고, [검색] 버튼을 누르면, 다음과 같은 주소 문자열을 만들어 검색 요청을 하게 된다.

> https://www.google.co.kr/?gws_rd=ssl#newwindow=1&q=actor

그런데 이렇게 만들어진 주소 문자열은 단순 문자열이므로 서버에서 이 정보를 받아 처리할 때는 어디까지가 사이트 주소인지, 그리고 어떤 내용이 요청 파라미터인지 구별해야 한다. 이 구별을 위해서 ? 기호를 기준으로 앞에 이쓴ㄴ 문자열과 뒤에 있는 문자열을 분리하는 경우가 많은데, 이 작업을 쉽게 할 수 있도록 노드에 미리 만들어 둔 모듈이 **url 모듈**이다. url 모듈을 이용해 주소 문자열을 객체로 만들면 문자열 안에 있던 각각의 정보를 나누어 그 객체의 속성으로 보관한다.

2. 주소 문자열을 URL 객체로 변환하기

| 메소드 이름   | 설명                           |
| -------- | ---------------------------- |
| parse()  | 주소 문자열을 파싱하여 URL 객체를 만들어 준다. |
| format() | URL 객체를 주소 문자열로 변환한다.        |

```javascript
var url = require('url');

// 주소 문자열을 URL 객체로 만들기
var curURL = url.parse('https://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty');

// URL 객체를 주소 문자열로 만들기
var curStr = url.format(curURL);

/*
console.dir(curURL)의 출력 결과:
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'm.search.naver.com',
  port: null,
  hostname: 'm.search.naver.com',
  hash: null,
  search: '?query=steve+jobs&where=m&sm=mtp_hty',
  query: 'query=steve+jobs&where=m&sm=mtp_hty',
  pathname: '/search.naver',
  path: '/search.naver?query=steve+jobs&where=m&sm=mtp_hty',
  href: 'https://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty' }
*/
console.dir(curURL);

/*
console.log('주소 문자열 : %s', curStr)의 출력 결과:
주소 문자열 : https://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty
*/
console.log('주소 문자열 : %s', curStr);

```

3. 요청 파라미터 확인하기

- URL 객체의 속성을 보면 주소 문자열의 여러 가지 정보가 포함되어 있다. 그 중에서도 query 속성은 요청 파라미터 정보를 가지고 있는데 이 정보를 잘 살펴보면 여러 개의 요청 파라미터가 모두 들어 있다. 웹 서버에서는 클라이언트에서 요청한 요청 파라미터를 받아 처리할 때가 많으므로 이 query 속성에 들어 있는 문자열을 다시 각각의 요청 파라미터로 분리해야 한다.
- 요청 파라미터는 & 기호로 구분되는데 **querystring 모듈**을 사용하면 요청 파라미터를 쉽게 분리할 수 있다.

| 메소드 이름      | 설명                                    |
| ----------- | ------------------------------------- |
| parse()     | 요청 파라미터 문자열을 파싱하여 요청 파라미터 객체로 만들어 준다. |
| stringify() | 요청 파라미터 객체를 문자열로 변환한다.                |

```javascript
var querystring = require('querystring');
var param = querystring.parse(curURL.query);

console.log('요청 파라미터 중 query의 값 : %s', param.query); // 요청 파라미터 중 query의 값 : steve jobs
console.log('원본 요청 파라미터 : %s', querystring.stringify(param)); // 원본 요청 파라미터 : query=steve%20jobs&where=m&sm=mtp_hty
```

### 04-2 이벤트 이해하기

1. 노드는 대부분 인벤트를 기반으로 하는 비동기 방식으로 처리한다. 그리고 비동기 방식으로 처리하기 위해 서로 이벤트를 전달한다. 노드에는 이런 이벤트를 보내고 받을 수 있도록 EventEmitter라는 것이 만들어져 있다.
2. 이벤트는 한쪽에서 다른 쪽으로 어떤 일이 발생햿음을 알려주는 것으로, 다른 쪽에서 이 이벤트를 받고 싶다면 **이벤트 리스너(Event Listener)**를 등록할 수 있다. 이벤트 리스너는 특정 이벤트가 전달되었을 때 그 이벤트를 처리할 수 있도록 만들어 둔 것이다.
3. 이벤트 보내고 받기

- 노드의 객체는 EventEmitter를 상속받을 수 있으며, 상속받은 후에는 EventEmitter 객체의 on()과 emit() 메소드를 사용할 수 있다.
- on() 메소드는 이벤트가 전달될 객체에 이벤트 리스너를 설정하는 역할을 하는데 이 리스너 함수는 객체로 전달된 이벤트를 받아 처리할 수 있다. 보통은 노드 내부에서 미리 만들어 제공하는 이벤트를 받아 처리하지만, 필요할 때는 직접 이벤트를 만들어 전달할 수도 있다.

| 메소드 이름                          | 설명                                       |
| ------------------------------- | ---------------------------------------- |
| on(event, listener)             | 지정한 이벤트의 리스너를 추가한다.                      |
| once(event, listener)           | 지정한 이벤트의 리스너를 추가하지만 한 번 실행한 후에는 자동으로 리스너가 제공된다. |
| removeListener(event, listener) | 지정한 이벤트에 대한 리스너를 제거한다.                   |

- 미리 정의되어 있는 이벤트가 아니라 우리가 직접 만든 이벤트를 처리하는 방법은 다음과 같다.

```javascript
process.on('tick', function(count) {
  console.log('tick 이벤트 발생함 : %s', count);
});

setTimeout(function() {
    console.log('2초 후에 tick 이벤트 전달 시도함.');

  process.emit('tick', '2');
}, 2000)
```

4. 모듈화

- 항상 process 객체를 사용해 이벤트를 전달한다면, 같은 이름의 이벤트를 사용하는 경우에 충돌이 생길 수도 있다. 이 때문에 별도의 모듈 파일을 만들고 그 안에서 이벤트를 처리하도록 만드는 것이 좋다.

```javascript
// calc.js
var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Calc = function() {
  var self = this;

  this.on('stop', function() {
    console.log('Calc에 stop event 전달됨.');
  });
};

util.inherits(Calc, EventEmitter);

Calc.prototype.add = function(a, b) {
  return a + b;
}

module.exports = Calc;
module.exports.title = 'calculator';
```

```javascript
// index.js
var Calc = require('./calc');
var calc = new Calc();
calc.emit('stop');

console.log(Calc.title + '에 stsop 이벤트 전달함.');

```

- EventEmitter는 events 모듈 안에 정의되어 있다.
- 상속은 util 모듈에 있는 Inherits() 메소드를 사용하면 쉽게 정의할 수 있다.

### 04-3 파일 다루기

1. 노드의 파일 시스템은 파일을 다루는 기능과 디렉터리를 다루는 기능으로 구성되어 있으며, 동기식 IO와 비동기식 IO 기능을 함께 제공한다.
2. 파일을 읽어 들이거나 파일에 쓰기

- 파일 시스템에 접근하기 위해 fs 모듈을 사용한다.
- 다음은 파일을 읽고 쓸 때 사용하는 대표적인 네 가지 메소드이다.

| 메소드 이름                                   | 설명                   |
| ---------------------------------------- | -------------------- |
| readFile(filename, [encoding], [callback]) | 비동기식 IO로 파일을 읽어 들인다. |
| readFileSync(filename, [encoding])       | 동기식 IO로 파일을 읽어 들인다.  |
| writeFile(filename, data, encoding='utf8', [callback]) | 비동기식 IO로 파일을 쓴다.     |
| writeFileSync(filename, data, encoding='utf8') | 동기식 IO로 파일을 쓴다.      |

- 파일에 데이터를 쓸 때 사용하는 writeFile() 메소드는 첫 번째 파라미터로서 파일 이름을 전달받는다. 두 번째 파라미터는 파일에 쓸 내용이고 세 번째는 작업이 끝나면 호출될 콜백 함수이다. 작업 중 오류가 발생하면 콜백 함수로 오류 객체가 전달된다. 오류 객체가 null 값으로 전달되면 데이터 쓰기가 완료된 것이다.

3. 파일을 직접 열고 닫으면서 읽거나 쓰기

- 실제로 파일을 읽거나 쓸 때는 한꺼번에 모든 데이터를 읽거나 쓰지 않고 조금씩 읽거나 쓰는 방식을 사용하는 경우도 많다.

| 메소드 이름                                   | 설명                     |
| ---------------------------------------- | ---------------------- |
| open(path, flags, [mode], [callback])    | 파일을 연다.                |
| read(fd, buffer, offset, length, position, [callback]) | 지정한 부분의 파일 내용을 읽어 들인다. |
| write(fd, buffer, offset, length, position, [callback]) | 파일의 지정한 부분에 데이터를 쓴다.   |
| close(fd, [callback])                    | 파일을 닫아 준다.             |

```javascript
var fs = require('fs');

fs.open('./output.txt', 'w', function(err, fd) {
  if (err) throw err;

  var buf = new Buffer('안녕!\n');
  fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer) {
    if (err) throw err;

    console.log(err, written, buffer);

    fs.close(fd, function() {
      console.log('파일 열고 데이터 쓰고 파일 닫기 완료');
    });
  });
});
```

- 파일을 열기 위해 open() 메소드를 호출할 때 동시에 세 개의 파라미터가 전달되었다. 첫 번째는 파일의 이름, 두 번째는 파일을 읽거나 쓰기 위한 플래그이다. 대표적인 플래그는 다음과 같다.

| 플래그  | 설명                                       |
| ---- | ---------------------------------------- |
| 'r'  | 읽기에 사용하는 플래그이다. 파일이 없으면 예외가 발생한다.        |
| 'w'  | 쓰기에 사용하는 플래그이다. 파일이 없으면 만들어지고 파일이 있으면 이전 내용을 모두 삭제한다. |
| 'w+' | 읽기와 쓰기에 모두 사용하는 플래그이다. 파일이 없으면 만들어지고 파일이 있으면 이전 내용을 모두 삭제한다. |
| 'a+' | 읽기와 추가에 모두 사용하는 플래그이다. 파일이 없으면 만들어지고 있으면 이전 내용에 새로운 내용을 추가한다. |

- Buffer 객체는 바이너리 데이터를 읽고 쓰는 데 사용한다. 새로운 버퍼 객체를 만들기 위해서는 new 연산자를 사용하며, 그 안에 들어갈 바이트(byte) 데이터의 크기만 지정하면 된다.

4. 버퍼 객체 사용하는 방법 알아보기

```javascript
// 버퍼 객체를 크기만 지정하여 만든 후 문자열을 쓴다.
var output = '안녕 1!';
var buffer1 = new Buffer(10);
var len = buffer1.write(output, 'utf8');
console.log('첫 번째 버퍼의 문자열 : %s', buffer1.toString());

// 버퍼 객체를 문자열을 이용해 만든다.
var buffer2 = new Buffer('안녕 2!', 'utf8');
console.log('두 번째 버퍼의 문자열: %s', buffer2.toString());

// 타입을 확인한다.
console.log('버퍼 객체의 타입 : %s', Buffer.isBuffer(buffer1));

// 버퍼 객체에 들어 있는 문자열 데이터를 문자열 변수로 만든다.
var byteLen = Buffer.byteLength(output);
var str1 = buffer1.toString('utf8', 0, byteLen);
var str2 = buffer2.toString('utf8');

// 첫 번째 버퍼 객체의 문자열을 두 번째 버퍼 객체로 복사한다.
buffer1.copy(buffer2, 0, 0, len);
console.log('두 번째 버퍼에 복사한 후의 문자열 : %s', buffer2.toString('utf8'));

// 두 개의 버퍼를 붙여 준다.
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('두 개의 버퍼를 붙인 후의 문자열 : %s', buffer3.toString('utf8'));
```

- 크기를 먼저 지정하면 나머지 공간이 그대로 버퍼에 남아 있게 된다.
- 변수에 들어 있는 것이 버퍼 객체인지 아닌지 확인할 때는 isBuffer() 메소드를 사용한다.
- 하나의 버퍼 객체를 다른 버퍼 객체로 복사할 때는 copy() 메소드를 사용한다.
- 두 개의 버퍼를 하나로 붙여서 새로운 버퍼 객체를 만들 때는 concat() 메소드를 사용한다.

5. 스트림 단위로 파일 읽고 쓰기

- 파일을 읽거나 쓸 때는 데이터 단위가 아닌 스트림 단위로 처리할 수도 있다.

| 메소드 이름                             | 설명                     |
| ---------------------------------- | ---------------------- |
| createReadStream(path, [options])  | 파일을 읽기 위한 스트림 객체를 만든다. |
| createWriteStream(path, [options]) | 파일을 쓰기 위한 스트림 객체를 만든다. |

- 옵션으로는 flags, encoding, autoClose 속성이 들어 있는 자바스크립트 객체를 전달할 수 있다.

```javascript
var fs = require('fs');

var infile = fs.createReadStream('./output.txt', {flags: 'r'});
var outfile = fs.createWriteStream('./output2.txt', {flags: 'w'});

infile.on('data', function(data) {
  console.log('읽어 들인 데이터', data);
  outfile.write(data);
});

infile.on('end', function() {
  console.log('파일 읽기 종료.');
  outfile.end(function() {
    console.log('파일 쓰기 종료.');
  });
});
```

- **pipe() 메소드**는 두 개의 스트림을 붙여 주는 역할을 한다. ReadStream 타입의 객체와 WriteStream 타입의 객체를 붙여주면 스트림 간에 데이터를 알아서 전달한다.
- 다음은 앞에서 실행한 코드를 pipe() 메소드로 바꾼 것이다.

```javascript
var fs = require('fs');

var inname = './output.txt';
var outname = './output2.txt';

fs.exists(outname, function(exists) {
  if (exists) {
    fs.unlink(outname, function(err) {
      if (err) throw err;
      console.log('기존 파일 [' + outname +'] 삭제함.');
    });
  }
  var infile = fs.createReadStream(inname, {flags: 'r'});
  var outfile = fs.createWriteStream(outname, {flags: 'w'});
  infile.pipe(outfile);
  console.log('파일 복사 [' + inname + '] -> [' + outname + ']');
}
```

5. http 모듈로 요청받은 파일 내용을 읽고 응답하기

- 파일에서 만든 스트림 객체와 웹 서버의 스트림 객체를 pipe() 메소드로 연결할 수 있다.
- 두 객체의 연결이 가능한 이유는 파일에서 데이터를 읽어오기 위해 만든 것도 스트림 객체이고, 데이터를 쓰기 위해 웹 서버에서 클라이언트 쪽에 만든 것도 스트림 객체이기 때문이다. 따라서 읽기 스트림과 쓰기 스트림은 pipe() 메소드를 사용해 연결할 수 있다.

### 04-4 로그 파일 남기기

1. 프로그램의 크기가 커질수록 로그의 양도 많아지고 로그를 보관했다가 나중에 확인해야 하는 경우도 생긴다. 따라서 어떻게 로그를 남기고 보관할 것인지가 중요해진다. 로그를 보관하려면 화면에만 출력하는 것만으로는 부족하다. 이 때문에 다양한 방식으로 로그를 남길 수 있도록 외부 모듈을 사용한다. 대표적으로 **winston 모듈**이 있다.
