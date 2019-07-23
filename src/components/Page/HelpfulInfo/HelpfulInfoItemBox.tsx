import React, { Component } from 'react';
import styled from 'styled-components';

import { Heading3, Button } from '../..';
import { media } from '../../../utile/Helper';
import { Link } from 'react-router-dom';

const BoxDiv = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  margin: 0.8rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  width: 50%;
  ${media.tablet`width:100%`};
  & img {
    width: 100%;
    height: auto;
  }
`;
const ButtonDiv = styled.div`
  margin-top: auto;
`;
interface ownProps {
  title: string;
  img: string;
  text: string;
  link: string;
  buttonText: string;
  backgroundColor: string;
}
interface ownState {}
class HelpfulInfoItemBox extends Component<ownProps> {
  render() {
    return (
      <BoxDiv theme={{ backgroundColor: this.props.backgroundColor }}>
        <Heading3>{this.props.title}</Heading3>
        <img
          src={this.props.img}
          height={'202.5px'}
          width={'360px'}
          alt={this.props.title}
        />
        <div dangerouslySetInnerHTML={{ __html: this.props.text }} />
        <ButtonDiv>
          <Button theme={{ main: '100%' }}>
            <Link to={this.props.link}>{this.props.buttonText}</Link>
          </Button>
        </ButtonDiv>
      </BoxDiv>
    );
  }
}
export default HelpfulInfoItemBox;
