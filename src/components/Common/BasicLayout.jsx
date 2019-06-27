import React, { Component } from 'react';
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
  ${media.tablet`padding: 0px 1.6rem 1.45rem;`}
`;

class BasicLayout extends Component {
  render() {
    return (
      <div>
        <HeadBox>
          <Media query="(max-width: 1024px)">
            {matches => (matches ? <HeaderMobile /> : <Header />)}
          </Media>
        </HeadBox>
        <LayoutBox>
          <main>{this.props.children}</main>
          <Footer />
        </LayoutBox>
      </div>
    );
  }
}
export default BasicLayout;
