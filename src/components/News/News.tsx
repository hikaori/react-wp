import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import color from '../colors';
import { Heading2 } from '../';

const NewsContainer = styled.div`
  padding: 8.4rem 0rem 8rem;
  background-color: ${color.lightGray};
`;
const Newsbox = styled.div`
  border-bottom: solid 1px ${color.darkGray};
  padding-top: 2.6rem;
  padding-bottom: 2.6rem;
  display: flex;
  justify-content: flex-start;
`;
const NewsDay = styled.span`
  padding-right: 5.9rem;
  display: inline-block;
`;
const NewsText = styled.div``;

const More = styled.div`
  text-align: right;
  margin-top: 2.4rem;
  & a {
    color: ${color.blue};
  }
`;

class News extends Component {
  render() {
    return (
      <NewsContainer>
        <Heading2>最新情報</Heading2>
        <div style={{ margin: '0px 23.5rem' }}>
          <Newsbox>
            <NewsDay>2019/01/01</NewsDay>
            <NewsText>
              ここに最新情報が書かれますここに最新情報が書かれますここに最新情報が書かれますここに最新情報が書かれますここに最新情報が書かれますここに最新情報が書かれますここに最新情報が書かれます
            </NewsText>
          </Newsbox>
          <More>
            <Link to={'/'}>一覧を見る</Link>
          </More>
        </div>
      </NewsContainer>
    );
  }
}

export default News;
