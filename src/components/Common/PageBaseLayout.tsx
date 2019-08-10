import React, { Component } from 'react';
import styled from 'styled-components';

import { BasicLayout, BottomSection, Button, LinkHandle } from '..';
import Heading1 from './Heading1';
import color from '../colors';
import { media } from '../../utile/Helper';

interface ownProps {
  BreadTreeElements: { breadText: string; url: string }[];
  title: string;
  subTitle: string;
  imgURL: string;
  bottomSectionText: string;
  bottomSectionColor: string;
  bottomButtonText: string;
  bottomButtonLink?: string;
  bottomButtonSize: string;
  bottomButtonClass?: string;
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
  &.flex {
    display: flex;
  }
  .bread-item {
    margin-right: 0.8rem;
  }
  .bread-item:last-child .bread-arrow {
    display: none;
  }
`;
class PageBaseLayout extends Component<ownProps, ownState> {
  createBreadTreeDom = (
    breadTreeElements: { breadText: string; url: string }[],
  ) => {
    const returnDom: JSX.Element[] = [];
    let tempUrl = '';
    breadTreeElements.map((x, index) => {
      tempUrl += `/${x.url}`;

      return returnDom.push(
        <div key={index} className="bread-item">
          <LinkHandle to={tempUrl}>{x.breadText}</LinkHandle>
          <span className="bread-arrow">
            {` `}>{` `}
          </span>
        </div>,
      );
    });
    return returnDom;
  };

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
        <BreadcrumbDiv className="flex">
          <div className="bread-item">
            <LinkHandle to={'/'}>ホーム</LinkHandle>
            <span className="bread-arrow">
              {` `}>{` `}
            </span>
          </div>

          {this.createBreadTreeDom(this.props.BreadTreeElements)}
        </BreadcrumbDiv>

        {this.props.children}
        <BottomSection
          text={this.props.bottomSectionText}
          backgroundColor={this.props.bottomSectionColor}
        >
          <Button
            theme={{ main: this.props.bottomButtonSize }}
            className={this.props.bottomButtonClass}
          >
            <LinkHandle
              to={
                this.props.bottomButtonLink
                  ? this.props.bottomButtonLink
                  : '/contact'
              }
            >
              {this.props.bottomButtonText}
            </LinkHandle>
          </Button>
        </BottomSection>
      </BasicLayout>
    );
  }
}
export default PageBaseLayout;
