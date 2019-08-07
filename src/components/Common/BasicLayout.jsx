import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Media from 'react-media';

import Header from './Header/header';
import HeaderMobile from './Header/HeaderMobile';
import Footer from './Footer/Footer';
import { media } from '../../utile/Helper';

const HeadBox = styled.header`
  position: relative;
`;

const LayoutBox = styled.div`
  padding: 0px 8.3rem 1.45rem;
  padding-top: 0;
  ${media.tablet`padding: 88px 1.6rem 0rem;`}
  & main{
    max-width: 1366px;
    margin: auto;
  }
`;

class BasicLayout extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Fragment>
        <HeadBox>
          <Media query="(max-width: 1024px)">
            {matches => (matches ? <HeaderMobile /> : <Header />)}
          </Media>
        </HeadBox>
        <LayoutBox>
          <main>{this.props.children}</main>
          <Footer />
        </LayoutBox>
      </Fragment>
    );
  }
}
export default BasicLayout;
