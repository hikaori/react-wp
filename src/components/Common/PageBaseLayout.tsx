import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { BasicLayout } from '../';
import color from '../colors';

interface ownProps {
  title: string;
  imgURL: string;
}
interface ownState {}
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
        <ImgDiv>
          <img src={this.props.imgURL} alt={this.props.title} />
        </ImgDiv>
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
      </BasicLayout>
    );
  }
}
export default PageBaseLayout;
