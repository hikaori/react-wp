import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import color from '../colors';
import { media } from '../../utile/Helper';

const H1 = styled.h1`
  text-align: center;
  font-size: 2.4rem;
  line-height: 1.5;
  margin-bottom: 0;
  font-family: a-otf-gothic-bbb-pr6n;
  font-weight: 500;
  & span {
    display: block;
    margin: 24px auto;
    width: 4rem;
    border-bottom: solid 1px ${color.primary};
    ${media.tablet`margin: 8px auto;`}
  }
  ${media.tablet`font-size: 1.6rem;`}
`;
class Heading1 extends Component {
  render() {
    return (
      <Fragment>
        <H1>
          {this.props.children}
          <span />
        </H1>
      </Fragment>
    );
  }
}
export default Heading1;
