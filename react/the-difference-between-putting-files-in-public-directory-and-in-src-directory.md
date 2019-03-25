# The difference between putting files in public directory and in src directory

[create-react-app](https://facebook.github.io/create-react-app/)으로 생성한 프로젝트에서 `public` 디렉토리는 정적 파일을 관리하기 위한 용도로 사용된다.

> 정적 파일이란, 서버에서 한 번 전송하고 난 후로 다시는 변경될 필요가 없는 파일들을 의미한다.

이 디렉토리 안에 포함된 파일들은 운영 버전에서 항상 동일한 파일 이름을 유지할 것이기 때문에, 클라이언트에 의해 캐싱되므로 파일이 변경되었더라도 재다운로드되지 않는다.

그 외의 동적 파일들은 모두 `src` 디렉토리에서 관리된다. 클라이언트가 항상 캐싱된 파일이 아닌 파일의 최신 버전을 유지하도록 하고 싶다면 이 디렉토리 안에 파일을 위치시켜야 한다. 이런 일이 가능한 이유는 Webpack이 운영(production) 빌드를 거치는 동안, 변경된 파일 이름에 임의의 해시 값을 붙여 항상 유일한 이름을 생성해주기 때문이다.

특별한 상황이 아니라면, 애셋들을 `public` 디렉토리에 놓는 대신 Javascript 파일 내에서 직접 `import`하는 방법을 권장한다.

* 스크립트 및 스타일시트 파일들이 압축되고 함께 번들링되므로 추가적인 네트워크 요청을 피할 수 있다. 
* 파일의 경로를 잘못 불러왔을 경우 404 에러가 아닌 컴파일 에러를 받아볼 수 있으므로 더 안전하다.
* Webpack에 의해 가공된 파일 이름은 항상 새로운 해시 값을 포함하기 때문에 새 버전이 아닌 이전 버전이 캐싱되어지는 것을 걱정할 필요가 없다.

그러나 가끔, 차선책으로 `public` 디렉토리를 사용해야 하는 덜 일반적인 케이스들이 있다.

* [`manifest.webmanifest`](https://developer.mozilla.org/en-US/docs/Web/Manifest)와 같이, 빌드된 결과물에 정확한 이름의 파일을 포함시켜야 하는 경우
* 수천 개의 이미지 경로를 동적으로 참조할 필요가 있는 경우
* `pace.js`와 같은 작은 용량의 스크립트를 번들링된 코드에 함께 포함시키지 않고 싶은 경우
* Webpack과 호환되지 않는 라이브러리를 사용하고 있고, `<script>` 태그를 직접 포함하는 방법 외엔 다른 선택지가 없는 경우

## 참고

* [Using the Public Folder | Create React App](https://facebook.github.io/create-react-app/docs/using-the-public-folder#docsNav)
