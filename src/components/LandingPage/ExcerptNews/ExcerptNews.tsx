import React, { Component } from 'react';
import styled from 'styled-components';

import color from '../../colors';
import { Heading2 } from '../..';
import { media } from '../../../utile/Helper';
import { LinkHandle } from '../../';
import { IP } from '../../../utile/IPadress';

const NewsContainer = styled.div`
  padding: 8.4rem 0rem 8rem;
  background-color: ${color.lightGray};
  margin-left: calc(((100vw - 100%) / 2) * -1);
  margin-right: calc(((100vw - 100%) / 2) * -1);
`;
const NewsBox = styled.div`
  margin: 0px 8.3rem;
  ${media.tablet`margin: 0px 1.8rem`};
`;
const NewsItemBox = styled.div`
  border-bottom: solid 1px ${color.gray};
  padding-top: 2.6rem;
  padding-bottom: 2.6rem;
  ${media.desktop`display: flex;
  justify-content: flex-start;`}
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
  & a:hover {
    color: ${color.primary};
  }
`;

interface OwnProps {}
interface OwnState {
  news: [
    {
      modified: string;
      title: { rendered: string };
      excerpt: { rendered: string };
      acf: { link: string };
    }
  ];
}

class ExcerptNews extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      news: [
        {
          modified: '',
          title: { rendered: '' },
          excerpt: { rendered: '' },
          acf: { link: '' },
        },
      ],
    };
  }
  componentDidMount() {
    let dataURL = `${IP}/wp-json/wp/v2/news`;
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          news: res,
        });
      });
  }
  dateFormat(date: string) {
    let split = date.split('T');
    let regex = /-/gi;
    let result = split[0].replace(regex, '/');
    return result;
  }
  render() {
    const news = this.state.news;
    return (
      <NewsContainer>
        <Heading2>最新情報</Heading2>
        <NewsBox>
          {news.map((item, index) => (
            <NewsItemBox key={index}>
              <NewsDay>{this.dateFormat(item.modified)}</NewsDay>
              <NewsText
                dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
              />
            </NewsItemBox>
          ))}

          <More>
            <LinkHandle to={'/news-list'}>一覧を見る</LinkHandle>
          </More>
        </NewsBox>
      </NewsContainer>
    );
  }
}

export default ExcerptNews;
