# 브라우저에서 스크롤바 감추기

콘텐츠가 영역을 넘쳐났을 때, 컨테이너 요소에 `overflow: auto`를 설정하면 넘쳐난 영역을 확인할 수 있도록 스크롤바가 나타난다.

그런데 사용 중인 컴퓨터 운영체제 또는 브라우저의 종류에 따라 이 스크롤바가 화면에 표시되는 방식에 있어서 차이가 존재하기 때문에 간혹 골칫거리로 작용한다.

먼저, Windows에서 나타나는 스크롤바 UI는 너무 못 생겼다.(물론 보는 사람에 따라 차이는 있겠지만)

또 한 가지 치명적인 문제가 있다. 맥에서는 스크롤바가 화면 상의 공간을 차지하지 않으므로 실제 콘텐츠가 렌더링되는 영역에 영향을 주지 않는다. 그러나 윈도의 경우 스크롤바가 화면 상의 실제 공간을 차지하므로 콘텐츠가 렌더링되는 영역 또한 스크롤바의 영역만큼 줄어들게 된다. 가령, 컨테이너 요소의 너비가 `500px`인 상황에서 스크롤 바가 `10px`만큼의 너비를 차지한다고 가정하면, 실제 콘텐츠가 나타나는 영역은 `490px`으로 설정되는 식이다. 이로 인해 레이아웃이 조금씩 뒤틀리는 문제가 발생할 수 있다.

이 문제를 해결하기 위해 제일 먼저 순수 CSS만을 사용한 스크롤바 커스터마이징 방법을 찾아보았다. `::-webkiet-scrollbar`와 같은 속성을 사용하여 커스터마이징이 가능한 것 같은데, [IE는 물론 모던 브라우저에서조차 아직까지 부분적으로만 지원](https://caniuse.com/#feat=css-scrollbar)하고 있는 속성인 듯하다. 따라서 이 방법은 사용하기에 적합하지 않은 것 같았고, 다른 방법을 더 찾아보았다.

## 대안 1. 스크롤바를 화면 상에서 숨기기

이 방법을 사용하기 위해서는 두 개의 컨테이너 요소와 내용을 담당하는 요소 1개가 필요하다.

```html
<html>
<head>
  <style>
    .element, .outer-container {
      width: 200px;
      height: 200px;
    }
    
    .outer-container {
      position: relative;
      overflow: hidden;
      border: 5px solid purple;
    }
    
    .inner-container {
      position: absolute;
      left: 0;
      overflow-x: hidden;
      overflow-y: scroll;
    }
    
    .inner-container::-webkit-scrollbar {
      display: none;
    }
  </style>
</head>
<body>
  <div class="outer-container">
    <div class="inner-container">
      <div class="element">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer vehicula quam nibh, eu tristique tellus dignissim
        quis. Integer condimentum ultrices elit ut mattis.
        Praesent rhoncus tortor metus, nec pellentesque enim
        mattis nec. Nulla vitae turpis ut dui consectetur
        pellentesque quis vel est. Curabitur rutrum, mauris ut
        mollis lobortis, sem est congue lectus, ut sodales nunc
        leo a libero. Cras quis sapien in mi fringilla tempus
        condimentum quis velit. Aliquam id aliquam arcu. Morbi
        tristique aliquam rutrum. Duis tincidunt, orci suscipit
        cursus molestie, purus nisi pharetra dui, tempor
        dignissim felis turpis in mi. Vivamus ullamcorper arcu
        sit amet mauris egestas egestas. Vestibulum turpis neque,
        condimentum a tincidunt quis, molestie vel justo. Sed
        molestie nunc dapibus arcu feugiat, ut sollicitudin metus
        sagittis. Aliquam a volutpat sem. Quisque id magna
        ultrices, lobortis dui eget, pretium libero. Curabitur
        aliquam in ante eu ultricies.

        Quisque vitae tincidunt purus. Vivamus feugiat bibendum
        erat, nec interdum urna porta sed. Nunc lobortis neque
        orci, ut suscipit nisl congue feugiat. Vivamus feugiat
        tellus quis cursus sollicitudin. Curabitur dolor massa,
        dictum ut ipsum in, porttitor pellentesque ante. Aenean
        egestas cursus tempor. Maecenas semper tortor sit amet
        egestas cursus. Mauris porttitor quis nisi ut tincidunt.
        Curabitur adipiscing eleifend nibh. Praesent mauris leo,
        consequat vitae orci eget, vestibulum bibendum nisi.
        Aliquam tempus diam ut tortor cursus, eget sodales augue
        adipiscing. Nulla at dignissim libero.
      </div>
    </div>
  </div>
</body>
</html>
```

먼저 안쪽 컨테이너에는 `overflow-y: scroll`을 설정하여 스크롤 가능한 콘텐츠로 만들고, 바깥쪽 컨테이너와 내용물을 담당하는 요소의 크기를 동일하게 설정한다. 이후 바깥쪽 컨테이너에 `overflow: hidden`을 설정하면 바깥으로 빠져나간 스크롤바는 화면에서 감춰지게 된다.

단 이렇게 스크롤바를 감춰버리면 사용자에게 스크롤 가능한 콘텐츠라는 정보를 제공할 수 없기 때문에 사용자 경험은 나빠질 수 있다. 스크롤바를 숨긴 대신, 사용자에게 스크롤 가능한 영역임을 나타내는 시각적 힌트를 제공해야 한다.

## 대안 2. `perfect-scrollbar` 라이브러리 ~활용하기~

> (2019년 1월 30일 추가)
> 유지보수가 안 이뤄진지도 오래 되었고, 프로덕션에서 사용하기엔 문제점이 많은 라이브러리인 것 같다. 사용 안 하는게 좋을 듯!

`perfect-scrollbar` 라이브러리를 활용하여 모든 브라우저 및 운영체제에서 동일한 형태로 보여지는 스크롤바를 구현할 수 있다. 또한 이 라이브러리를 사용하여 구현한 스크롤바는 화면 상에서 자신만의 공간을 차지하지 않기 때문에 레이아웃이 뒤틀릴 일도 없다.

```javascript
const container = document.querySelector('#container')
const ps = new PerfectScrollbar(container)

// or just with selector string
const ps = new PerfectScrollbar('#container')
```

위와 같이 `PerfectScrollbar`의 인스턴스를 생성해주기만 하면 끝일 정도로 사용법 역시 간단하다. 단, 몇 가지 주의해야할 사항이 존재한다.

1. 컨테이너 요소는 반드시 `static`이 아닌 `position` 속성이 설정되있어야 한다.
2. 컨테이너 요소는 반드시 `overflow: hidden` 스타일을 가져야 한다.

React를 사용한 프로젝트에서 `perfect-scrollbar`를 도입할 경우 다음과 같은 방식으로 사용할 수 있다.

```javascript
import React, { Component } from 'react'
import PerfectScrollbar from 'perfect-scrollbar'

class ScrollView extends Component {
  container = React.createRef()

  componentDidMount() {
    this.ps = new PerfectScrollbar(this.container.current)
  }

  componentWillUnmount() {
    this.ps.destroy()
  }

  render() {
    return (
      <div
        ref={container}
        style={{ position: 'relative', overflow: 'hidden', width: 500, height: 500 }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae voluptas vero deserunt incidunt unde. Maiores ipsam, quam maxime iure odit numquam et corrupti dolorem dolores temporibus iusto quos harum hic doloremque ad, eveniet minima? Natus blanditiis nihil eaque iusto minima fugiat in, non saepe asperiores id officia quidem recusandae commodi ex nam deserunt obcaecati corrupti, necessitatibus quasi consequatur optio quaerat hic dolor? Sequi magnam ducimus eaque, dignissimos placeat fuga itaque rerum non eius provident doloribus, nihil maiores! Earum voluptatibus, temporibus enim magnam exercitationem commodi repudiandae ex consequatur aliquam totam quibusdam aperiam quidem similique quaerat sint eum quasi asperiores facere quam.
        </p>
      </div>
    )
  }
}
```

## 참고

* [Hiding Vertical Scrollbars with Pure CSS in Chrome, IE (6+), Firefox, Opera, and Safari - John Kurlak](https://blogs.msdn.microsoft.com/kurlak/2013/11/03/hiding-vertical-scrollbars-with-pure-css-in-chrome-ie-6-firefox-opera-and-safari/)
* [utatti/perfect-scrollbar](https://github.com/utatti/perfect-scrollbar)
