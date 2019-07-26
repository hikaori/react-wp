import React, { Component } from 'react';
import styled from 'styled-components';

import { Heading3, Button, LinkHandle } from '../../';
import { media } from '../../../utile/Helper';

const Div = styled.div`
  background: #fff;
  padding: 6.4rem 7.6rem;
  margin: 0.8rem;
  width: 48%;
  display: flex;
  flex-direction: column;
  ${media.tablet`width: 100%; margin: 0 0 1.6rem 0 ; padding: 1.6rem;`}
`;
const ImgDiv = styled.div`
  width: 120px;
  margin: 0 auto;
`;

const ButtonDiv = styled.div`
  margin-top: auto;
`;

interface OwnProps {
  title: string;
  img: string;
  imgAlt: string;
  buttonText: string;
  link: string;
}
interface OwnState {}

class ServiceBox extends Component<OwnProps, OwnState> {
  render() {
    return (
      <Div>
        <Heading3>{this.props.title}</Heading3>
        <ImgDiv>
          <img src={this.props.img} className="icon" alt={this.props.title} />
          {/* <Logo style={{ fill: color.gray }} /> */}
        </ImgDiv>
        {this.props.children}
        <ButtonDiv>
          <Button>
            <LinkHandle to={this.props.link}>
              {this.props.buttonText}
            </LinkHandle>
          </Button>
        </ButtonDiv>
      </Div>
    );
  }
}
export default ServiceBox;
