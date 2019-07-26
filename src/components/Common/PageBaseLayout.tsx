import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { BasicLayout, BottomSection, Button } from '../';
import Heading1 from './Heading1';
import color from '../colors';
import { media } from '../../utile/Helper';

interface ownProps {
  title: string;
  subTitle: string;
  imgURL: string;
  bottomSectionText: string;
  bottomSectionColor: string;
  bottomButtonText: string;
  bottomButtonSize: string;
}
interface ownState {}
const FVDiv = styled.div`
  position: relative;
`;
const TextDiv = styled.div`
  position: absolute;
  text-align: center;
  min-width: 250px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  ${media.tablet`font-size: 0.8rem;`}
`;
const ImgDiv = styled.div`
  & img {
    max-width: 100%;
    margin-bottom: 0;
  }
`;
const BreadcrumbDiv = styled.div`
  border-bottom: solid 1px ${color.lightGray};
  padding: 1.6rem 0;
  & a {
    display: inline-block;
  }
`;
class PageBaseLayout extends Component<ownProps, ownState> {
  render() {
    return (
      <BasicLayout>
        <FVDiv>
          <TextDiv>
            <Heading1>{this.props.title}</Heading1>
            <div>{this.props.subTitle}</div>
          </TextDiv>
          <ImgDiv>
            <img src={this.props.imgURL} alt={this.props.title} />
          </ImgDiv>
        </FVDiv>
        <BreadcrumbDiv>
          <span>
            <Link to={''}>ホーム</Link>
          </span>
          {` `}
          <span>></span>
          {` `}
          <span>{this.props.title}</span>
        </BreadcrumbDiv>

        {this.props.children}
        <BottomSection
          text={this.props.bottomSectionText}
          backgroundColor={this.props.bottomSectionColor}
        >
          <Button
            theme={{ main: this.props.bottomButtonSize }}
            className="bottom-button"
          >
            <Link to={'/'}>{this.props.bottomButtonText}</Link>
          </Button>
        </BottomSection>
      </BasicLayout>
    );
  }
}
export default PageBaseLayout;
