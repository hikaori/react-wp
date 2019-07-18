import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { Button } from '../';
import { buttonText } from '../../constants/buttonText';
import font from '../fonts';
import { media } from '../../utile/Helper';

const BoxDiv = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  margin-left: 8px;
  width: 288px;
  height: 400px;
  overflow: hidden;
  & img {
    height: 100%;
    max-width: none;
    margin-bottom: 0rem;
  }
  ${media.tablet`
    margin-bottom: 1.6rem;
    margin-top: 1.6rem;
  `}
`;

const TitleDiv = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  opacity: 0.8;
  text-align: center;
  color: #fff;
  background: ${({ theme }) => theme.backgroundColor};
  padding-top: 24px;
  padding-bottom: 24px;
  line-height: 1;
  &.onlyTitle {
    padding-top: 47px;
    padding-bottom: 47px;
  }
  & span {
    padding-top: 1.6rem;
    display: block;
    margin: 0 auto;
    width: 4rem;
    border-bottom: solid 1px #fff;
  }
`;
const Title = styled.div`
  font-family: ${font.jpMedium};
`;
const SubTitle = styled.div`
  padding-top: 1.6rem;
  font-size: 1.4rem;
  font-family: ${font.jpRegular};
`;
const ButtonDiv = styled.div`
  position: absolute;
  bottom: 24px;
  width: 100%;
  text-align: center;
`;

interface ownProps {
  title: string;
  subTitle: string | null;
  backgroundColor: string;
  img: string;
  buttonLink: string;
}
interface ownState {}
class BoxTitleLabelOnTopOfImg extends Component<ownProps> {
  render() {
    console.log(this.props.buttonLink);
    return (
      <BoxDiv className="program-box">
        <img src={this.props.img} alt={this.props.title} />
        <TitleDiv
          theme={{ backgroundColor: this.props.backgroundColor }}
          className={classnames({ onlyTitle: !this.props.subTitle })}
        >
          <Fragment>
            <Title>{this.props.title}</Title>
            {this.props.subTitle && (
              <Fragment>
                <span />
                <SubTitle>{this.props.subTitle}</SubTitle>
              </Fragment>
            )}
          </Fragment>
        </TitleDiv>
        <ButtonDiv>
          <Link to={this.props.buttonLink}>
            <Button theme={{ main: '23.7rem' }}>{buttonText.more}</Button>
          </Link>
        </ButtonDiv>
      </BoxDiv>
    );
  }
}
export default BoxTitleLabelOnTopOfImg;
