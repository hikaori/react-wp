import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import color from '../colors';

const H3 = styled.h3`
  font-size: 1.8rem;
  font-weight: 100;
  & span {
    padding-top: 1.4rem;
    display: block;
    width: 4rem;
    border-bottom: solid 1px ${color.primary};
  }
`;
class Heading3 extends Component {
  render() {
    return (
      <Fragment>
        <H3>
          {this.props.children}
          <span />
        </H3>
      </Fragment>
    );
  }
}
export default Heading3;
