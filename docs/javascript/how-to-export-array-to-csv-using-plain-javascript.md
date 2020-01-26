# 클라이언트 사이드에서 배열 객체를 csv 파일로 내보내기

서버 측의 처리없이 클라이언트 측만의 처리를 통해 데이터를 csv 형식으로 내보낼 수 있는 방법을 찾아보았다.

[SheetJS](https://sheetjs.com/), [Papa Parse](https://www.papaparse.com/) 등의 라이브러리들이 있긴 하지만, 단순한 csv export만 필요한 경우라면 순수 자바스크립트만으로 아래와 같이 간단하게 처리할 수 있다.

```javascript
const data = [
  ['Foo', 'programmer'],
  ['Bar', 'bus driver'],
  ['Moo', 'Reindeer Hunter'],
]

const head = 'Name,Title\n'
const csv = data.reduce((acc, cur) => `${acc}${cur.join(',')}\n`, head)

const hiddenElement = document.createElement('a')
hiddenElement.href = 'data:text/csvcharset=utf-8,' + encodeURI(csv)
hiddenElement.target = '_blank'
hiddenElement.download = 'people.csv'
hiddenElement.click()
```

우선, 임의의 변수(위 코드의 경우 `csv`라는 변수명을 사용) 안에 csv 파일에 기록할 컨텐츠를 담는다. 그 후 `a` 요소를 생성하고 `href` 속성 값에는 우리가 생성할 csv 파일의 URI 인코딩된 버전을 할당한다. 이때 다운르드될 csv 파일의 이름을 직접 정의하고 싶은 경우, 'people.csv'와 같이 원하는 파일명을 `download` 속성에 할당해줄 수 있다. 값을 할당하지 않을 경우, 다운로드된 csv 파일명은 기본적으로 'download.csv'로 이름지어진다.

다음처럼 Blob 객체를 생성 후 오브젝트 URL을 `a` 태그의 `href` 속성으로 설정할 수도 있다.

```javascript
const blob = new Blob([csv], { type: 'text/csv' })
const link = document.createElement('a')

link.setAttribute('href', window.URL.createObjectURL(blob))
link.setAttribute('download', 'people.csv')
link.click()
```

## 주의할 점

위 방식은 다루고자 하는 데이터가 단순한 형태일 경우에만 사용 가능하다. 만약 어떤 데이터가 내부적으로 콤마(`,`) 기호를 포함하는 경우, 그 값을 따옴표(`'`)로 감싸는 처리가 필요할 것이다. 

이에 더해, 데이터가 콤마(`,`)와 따옴표(`'`)를 동시에 갖는 경우라면? 이 경우도 처리가 아예 불가능한 것은 아니겠지만, 아마도 더 복잡한 처리를 필요로 할 것이다.

또한, 이 방식은 Firefox에서 제대로 동작하지 않을 수 있다. Firefox에서 `a` 요소가 다운로드를 지원하려면, 그 요소가 클릭되기 전에 DOM에 존재해야 하며 동적으로 생성되면 안되기 때문이다. 그렇기때문에 `creeateElement`를 사용하는 대신, 숨겨진 `a` 요소를 미리 만들고 클릭하도록 하는 방식을 선택해야 한다.

## 참고 {docsify-ignore}

* [Create and download data in CSV format using plain JavaScript - Code Maven(by Gabor Szabo)](https://code-maven.com/create-and-download-csv-with-javascript)
