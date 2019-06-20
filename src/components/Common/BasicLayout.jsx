import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Header from './Header/header';
import Footer from './Footer/Footer';

const LayoutBox = styled.div`
  margin: 0 auto,
  maxWidth: 1366,
  padding: 0px 1.0875rem 1.45rem,
  paddingTop: 0,
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
