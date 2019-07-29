import React, { Component } from 'react';
import styled from 'styled-components';

import { Button, LinkHandle } from '../../..';
import fonts from '../../../fonts';
const BoxDiv = styled.div`
  width: 80%;
  align-content: center;
  margin: 0 auto;
  padding-bottom: 32px;
  margin-bottom: 32px;
`;

const ButtonDiv = styled.div`
  text-align: center;
`;
const TitleDiv = styled.div`
  font-family: ${fonts.jpMedium};
  font-size: 1.6rem;
`;
const TextDiv = styled.div`
  margin: 24px auto;
`;

interface OwnProps {
  title: string;
  excerpt: string;
  link: string;
}
interface OwnState {}

class JobContent extends Component<OwnProps, OwnState> {
  render() {
    return (
      <BoxDiv>
        <TitleDiv>{this.props.title}</TitleDiv>
        <TextDiv dangerouslySetInnerHTML={{ __html: this.props.excerpt }} />
        <ButtonDiv>
          <Button theme={{ main: '23.7rem' }}>
            <LinkHandle to={this.props.link}>この求人に応募する</LinkHandle>
          </Button>
        </ButtonDiv>
      </BoxDiv>
    );
  }
}
export default JobContent;
