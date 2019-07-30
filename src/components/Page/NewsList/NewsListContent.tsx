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

const TitleDiv = styled.div`
  font-family: ${fonts.jpMedium};
  font-size: 1.6rem;
`;
const TextDiv = styled.div`
  margin: 24px auto;
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
    return (
      <BoxDiv>
        <LinkHandle to={linkUrl}>
          <TitleDiv>{this.props.modifiedDate}</TitleDiv>
          <TextDiv dangerouslySetInnerHTML={{ __html: this.props.excerpt }} />
        </LinkHandle>
      </BoxDiv>
    );
  }
}
export default NewsListContent;
