# Table shimmer placeholder

테이블 데이터를 불러오기 전에 보여질 Table shimmer placeholder를 만들었다.

```javascript
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { map, range } from 'lodash/fp';

const shimmer = keyframes`
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
`;

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
  `,
  Animated: styled.div`
    background: #f3f3f3 linear-gradient(to right, #f3f3f3 5%, #e9ebee 20%, #f3f3f3 35%);
    animation: ${shimmer} 1.5s linear 0s infinite normal forwards;
  `,
  Row: styled.div`
    display: flex;
    height: 20px;
  `,
  FirstCell: styled.div`
    position: relative;
    flex-grow: 1;
    ::before {
      content: '';
      position: absolute;
      left: 0;
      width: 10%;
      height: 100%;
      background-color: #fff;
    }
    ::after {
      content: '';
      position: absolute;
      right: 0;
      width: 10%;
      height: 100%;
      background-color: #fff;
    }
  `,
  SecondCell: styled.div`
    position: relative;
    flex-grow: 3;
    ::before {
      content: '';
      position: absolute;
      left: 0;
      width: 5%;
      height: 100%;
      background-color: #fff;
    }
    ::after {
      content: '';
      position: absolute;
      right: 0;
      width: 5%;
      height: 100%;
      background-color: #fff;
    }
  `,
  ThirdCell: styled.div`
    position: relative;
    flex-grow: 2;
    ::before {
      content: '';
      position: absolute;
      left: 0;
      width: 10%;
      height: 100%;
      background-color: #fff;
    }
    ::after {
      content: '';
      position: absolute;
      right: 0;
      width: 10%;
      height: 100%;
      background-color: #fff;
    }
  `,
  ForthCell: styled.div`
    position: relative;
    flex-grow: 2;
    ::before {
      content: '';
      position: absolute;
      left: 0;
      width: 10%;
      height: 100%;
      background-color: #fff;
    }
    ::after {
      content: '';
      position: absolute;
      right: 0;
      width: 10%;
      height: 100%;
      background-color: #fff;
    }
  `,
  FifthCell: styled.div`
    position: relative;
    flex-grow: 1;
    ::before {
      content: '';
      position: absolute;
      left: 0;
      width: 10%;
      height: 100%;
      background-color: #fff;
    }
    ::after {
      content: '';
      position: absolute;
      right: 0;
      width: 10%;
      height: 100%;
      background-color: #fff;
    }
  `,
  SixthCell: styled.div`
    position: relative;
    flex-grow: 1;
    ::before {
      content: '';
      position: absolute;
      left: 0;
      width: 10%;
      height: 100%;
      background-color: #fff;
    }
    ::after {
      content: '';
      position: absolute;
      right: 0;
      width: 10%;
      height: 100%;
      background-color: #fff;
    }
  `,
  Padder: styled.div`
    height: 20px;
    padding: ${({ padding = {} }) => `${padding.top || 0}px ${padding.right || 0}px ${padding.bottom || 0}px ${padding.left || 0}px`};
    background-color: #fff;
  `,
};

const Shimmer = () => (
  <S.Wrapper>
    <S.Animated>
      {map(num => (
        <React.Fragment key={num}>
          <S.Padder />
          <S.Row key={num}>
            <S.FirstCell />
            <S.SecondCell />
            <S.ThirdCell />
            <S.ForthCell />
            <S.FifthCell />
            <S.SixthCell />
          </S.Row>
          <S.Padder />
        </React.Fragment>
      ), range(0, 11))}
    </S.Animated>
  </S.Wrapper>
);

export default Shimmer;
```
