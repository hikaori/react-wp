import React, { Component, Fragment } from 'react';
import Header from './Header/header';
import Footer from './Footer/Footer';

class BasicLayout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{this.props.children}</main>
          <Footer />
        </div>
      </Fragment>
    );
  }
}
export default BasicLayout;
