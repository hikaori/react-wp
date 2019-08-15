import React, { Component } from 'react';
import styled from 'styled-components';

import LinkHandle from '../../../utile/LinkHandle';
import fonts from '../../fonts';
const BoxDiv = styled.div`
  width: 80%;
  align-content: center;
  margin: 0 auto;
  padding-bottom: 32px;
  border-bottom: 1px solid gray;
  margin-bottom: 32px;
`;
const FlexDiv = styled.div`
  display: flex;
`;

const TitleDiv = styled.div`
  font-family: ${fonts.jpMedium};
  font-size: 1.6rem;
`;
const TextDiv = styled.div`
  padding-left: 5.8rem;
  p {
    margin-bottom: 0;
  }
`;

interface OwnProps {
  modifiedDate: string;
  excerpt: string;
  id: number;
}
interface OwnState {}

class NewsListContent extends Component<OwnProps, OwnState> {
  render() {
    const linkUrl = `/news-list/${this.props.id}`;
    const T_POSITION = this.props.modifiedDate.indexOf('T');
    const DATE = this.props.modifiedDate
      .substr(0, T_POSITION)
      .replace(/-/g, '/');
    return (
      <BoxDiv>
        <LinkHandle to={linkUrl}>
          <FlexDiv>
            <TitleDiv>{DATE}</TitleDiv>
            <TextDiv dangerouslySetInnerHTML={{ __html: this.props.excerpt }} />
          </FlexDiv>
        </LinkHandle>
      </BoxDiv>
    );
  }
}
export default NewsListContent;
