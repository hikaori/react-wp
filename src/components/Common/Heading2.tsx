import React, { Component, Fragment } from 'react';
import styled, { css } from 'styled-components';
import color from '../colors';

const H2 = styled.h2`
  text-align: center;
  font-size: 2.4rem;
  & span {
    padding-bottom: 2rem;
    display: block;
    margin: 0 auto;
    width: 4rem;
    border-bottom: solid 1px ${color.primary};
  }
`;
class Heading2 extends Component {
  render() {
    return (
      <Fragment>
        <H2>
          {this.props.children}
          <span />
        </H2>
      </Fragment>
    );
  }
}
export default Heading2;
