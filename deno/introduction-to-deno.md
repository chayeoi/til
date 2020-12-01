# Deno

Deno는 JavaScript와 TypeScript를 실행하기 위한 새로운 Command-line Runtime이다.

- V8 엔진을 사용한다.
- C++로 작성된 Node와 달리 Rust로 작성되었다.
- Tokio를 이용해서 이벤트 루프를 컨트롤한다.
- TypeScript를 기본 지원한다.

## Deno를 만든 이유

Node를 만든 Ryan Dahl은 시간이 많이 지난 후 Node.js의 단점과 오래된 기술들이 쓰인 것을 깨달았다. 하지만 그 단점들을 업그레이드해야 한다고 깨달았을 때는 이미 너무 늦어 버렸기에 더 나은 형태의 Node를 만들기로 결정했고 그러한 결정으로 Deno가 만들어졌다.

### 중앙 집중형 모듈 시스템

Node는 웹 서버로 시작되었다. 모듈들을 어디에 넣을까 고민하다가 만들어진 것이 node_modules 디렉토리였다. 그러나 이렇게 한 건 디자인적으로 아쉬운 점이 있었는데, 어쩔 수 없이 npm과 같은 중앙 서버가 존재해야 했다. 웹은 원래 분산 형태여야 하는데 말이다.

### 추가 지원이 필요한 legacy API들

수많은 legacy API를 지원하지 못 하는 부분도 문제였다.

### 빈약한 보안

Node에서는 리소스에 대한 권한 설정이 전혀 없기 때문에 주요 자원들을 누구나 접근 할 수 있다. 예를 들어, SSH Key같은 것들 말이다. 이러한 것들은 샌드박스로 감싸는 방식으로 해결 할 수 있다.

## Deno의 특징

### ES modules만을 유일하게 사용

써드파티 코드를 앱에 연결하려면 Http URL을 직접 사용하면 된다.

```ts
import { serve } from 'http://deno.land/std/http.server.ts'
```

이렇게 URL을 사용하여 리소스를 직접 다운로드하고 업데이트하기 때문에 Deno가 그 자체로 패키지 매니저 역할을 할 수 있게 되었다.

Deno는 의존성 모듈을 첫 실행 시에 하드 드라이브에 캐싱하기 때문에, 오프라인에서도 이용 가능하다.

### 강력한 보안

Deno의 실행환경(Sandbox) 이외의 외부 자원에 접근할 시에는 반드시 시작 시에 권한을 명시해주어야 한다.

- `--allow-read`: Allow file system read access
- `--allow-write`: Allow file system write access
- `--allow-net`: Allow network access
- `--allow-env`: Allow enviroment access
- `--allow-run`: Allow running subprocesses
- `-A, --allow-all`: Allow all permissions
- `--allow-read=/tmp` 또는 `--allow-net=google.com`과 같은 세부적인 설정도 가능

### Built-in TypeScript

TypeScript가 기본적으로 내장되어있기 때문에, 단계적으로 TypeScript 사용 환경을 설정할 필요가 없다.

### Top level await 지원

최상위 레벨 코드에서 `async`로 감쌀 필요 없이 바로 await 처리가 가능하다.

```ts
import { serve } from 'https://deno.land/std@0.50.0/http/server.ts';

const s = serve({ port : 8000 })l
console.log('http://loalhost:8000/');

// After
for await (const req of s) {
    req.respond({ body: 'Hello World'})
}

// Before
(async () => {
  for await (const req of s) {
    req.respond({ body : 'Hello World\n' });
  }
})();
```

### 브라우저 호환성

Deno는 브라우저 호환성을 중시한다.

예를들면 Node에서 `fetch`를 써야하는 상황에서는 npm에서 의존성을 추가해야 사용이 가능하지만 일반 브라우저 환경에서는 `fetch`가 내장되어있다. 그러나 Deno는 브라우저 호환성을 위해 API 환경이 브라우저와 동일하게 구성이 되어있다.

비록 아직은 브라우저와 완벽하게 호환이 되지 않지만, 지속적으로 업데이트할 예정이라고 한다.

## 한계

Deno는 Node를 기반으로 개선된 게 아니다. Deno는 완전히 새롭게 작성되었다. 당장 Deno를 사용해서 애플리케이션을 만들 수는 있지만 어떤 기능을 활용하느냐에 따라 한계가 있다.

### 호환성

Deno를 사용하게 되면 먼저 JavaScript 툴을 사용할 수 없다는 점이 당황스러울 수 있다. Deno는 대부분의 경우에 npm 패키지와 호환되지 않는다. Deno의 기본 레이어는 Node와 호환성을 맞추려고 하지만 아직 이 작업은 시간이 더 많이 필요하다.

### HTTP 서버 성능

현재 hello-world Deno HTTP 서버는 초당 25,000 요청을 처리할 수 있으며 최대 지연시간은 1.3ms이다. 같은 기능을 하는 Node 서버는 초당 34,000 요청을 처리할 수 있으며 최대 지연시간은 2~300ms이다.

초당 25,000 요청을 비동기로 처리할 수 있다는 것만으로도 당장 활용하는 데에는 문제가 없다. 이정도가 문제라면 JavaScript를 사용하지 않는 것을 고려해야 한다. 앞으로 Deno에서 Promise를 사용하는 코드가 개선된다면 좀 더 나은 성능을 낼 수 있을 것이다.

### TSC 병목

 Deno는 내부적으로 Microsoft TypeScript 컴파일러를 활용해서 타입을 체크하고 JavaScript 코드를 생성한다. 그래서 이전에 Node가 그랬던 것처럼 V8이 JavaScript 코드를 파싱하는 것과 비교해보면 상당히 느리다. "V8 스냅샷"을 활용하면서 이 성능은 눈에 띄게 개선되었지만 아직 충분하지 않다. 물론 TypeScript 컴파일러도 계속 개선될 것이라 생각한다. 하지만 우리는 결국 Rust로 타입 체크 로직을 구현해야겠다는 결론을 냈다. 물론 이 작업이 금방 끝나진 않을 것이다. 하지만 작업이 끝난 후엔 비교할 수 없는 성능 차이가 날 것이고 결국 개발자가 체감하는 것은 이 포인트이기 때문에 이 방향으로 진행하려고 한다. TSC는 반드시 Rust로 포팅되어야 한다.

### 플러그인 / 확장

Deno는 런타임 환경을 확장할 수 있는 플러그인 시스템을 갖추고 있다. 하지만 이 시스템은 아직 개발 중이며 안정된 상태라고 하기 어렵다. Deno가 제공하는 기능 외에는 네이티브 시스템에 접근하기 어려울 것이다.

## 참고

- [Node 제작자가 만든 Deno: 자바스크립트의 새로운 접근 | Reid](https://blog.ull.im/engineering/2019/04/14/deno-ryan-dahl-2019-04-04.html)
- [Deno 1.0 | 한장현](https://han41858.tistory.com/50)
- [What is Deno? | Ssabae - Velog](https://velog.io/@lsb156/What-is-Deno)
