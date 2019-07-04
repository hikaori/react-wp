import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Heading3, Button } from '../../';
import { media } from '../../../utile/Helper';
import color from '../../colors';
import { ReactComponent as Logo } from '../../../assets/images/school-solid.svg';

const Div = styled.div`
  background: #fff;
  padding: 6.4rem 7.6rem;
  margin: 0 0.8rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  ${media.tablet`width: 100%; margin-bottom:16px;`}
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
          <Logo style={{ fill: color.darkGray }} />
        </ImgDiv>
        <div>{this.props.children}</div>
        <ButtonDiv>
          <Link to={this.props.link}>
            <Button>{this.props.buttonText}</Button>
          </Link>
        </ButtonDiv>
      </Div>
    );
  }
}
export default ServiceBox;
