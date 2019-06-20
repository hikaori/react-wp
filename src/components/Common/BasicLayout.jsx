import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Header from './Header/header';
import Footer from './Footer/Footer';

const LayoutBox = styled.div`
  padding: 0px 8.3rem 1.45rem;
  padding-top: 0;
`;

class BasicLayout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <LayoutBox>
          <main>{this.props.children}</main>
          <Footer />
        </LayoutBox>
      </Fragment>
    );
  }
}
export default BasicLayout;
