# 확장자 없는 깔끔한 URL 사용하기

개인 포트폴리오 사이트와 같이 여러 개의 HTML 페이지를 필요로 하는 정적 사이트를 만들 때, 루트 페이지를 제외한 나머지 페이지의 URL에 아래와 같이 불필요한 `.html` 확장자가 붙게 되는 경우가 있다.

- https://example.com/about.html
- https://example.com/projects.html

그런데 위와 같이 `about.html` 파일을 루트 디렉토리 바로 아래에 만드는 대신, `about` 폴더를 만든 후 그 안에 `index.html`을 놓게 되면 `https://example.com/about`으로 접근해도 해당 파일을 받아올 수 있기 때문에 URL이 훨씬 깔끔해진다.
