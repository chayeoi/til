# 리액트 앱에 Google Analytics 연동하기

[`react-ga`](https://github.com/react-ga/react-ga)를 이용하면 리액트 앱에 Google analytics를 손쉽게 연동할 수 있다.

이때 각 페이지 단위로 분석 정보를 트래킹할 수 있도록 `withTracker`라는 이름의 고차 컴포넌트를 작성했다.

```jsx
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GoogleAnalytics from 'react-ga'

GoogleAnalytics.initialize('UA-30499296-37')

const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = (page) => {
    GoogleAnalytics.set({
      page,
      ...options,
    })
    GoogleAnalytics.pageview(page)
  }

  const EnhancedComponent = class extends Component {
    static propTypes = {
      location: PropTypes.shape({
        pathname: PropTypes.string,
        search: PropTypes.string,
      }).isRequired,
    }

    componentDidMount() {
      const { location } = this.props
      const page = location.pathname + location.search
      trackPage(page)
    }

    componentDidUpdate(prevProps) {
      const { location: prevLocation } = prevProps
      const { location: currentLocation } = this.props
      const prevPage = prevLocation.pathname + prevLocation.search
      const currentPage = currentLocation.pathname + currentLocation.search

      if (prevPage !== currentPage) {
        trackPage(currentPage)
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return EnhancedComponent
}

export default withTracker
```
