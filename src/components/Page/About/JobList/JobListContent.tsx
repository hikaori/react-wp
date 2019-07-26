import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '../../..';
import fonts from '../../../fonts';
const BoxDiv = styled.div`
  width: 80%;
  align-content: center;
  margin: 0 auto;
  padding-bottom: 32px;
  border-bottom: 1px solid gray;
  margin-bottom: 32px;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
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
  id: number;
}
interface OwnState {}

class JobList extends Component<OwnProps, OwnState> {
  render() {
    const linkUrl = `http://localhost/job/${this.props.id}`;
    return (
      <BoxDiv>
        <TitleDiv>{this.props.title}</TitleDiv>
        <TextDiv dangerouslySetInnerHTML={{ __html: this.props.excerpt }} />
        <ButtonDiv>
          <Button theme={{ main: '23.7rem' }}>
            <Link to={linkUrl}>詳しくはこちら</Link>
          </Button>
        </ButtonDiv>
      </BoxDiv>
    );
  }
}
export default JobList;