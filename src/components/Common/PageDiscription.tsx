import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../../utile/Helper';

interface OwnProps {}
interface OwnState {}

const Div = styled.div`
  margin-top: 8rem;
  margin-bottom: 8rem;
  padding:0 15.2rem
  text-align: center;
  ${media.tablet`padding:0; margin:2.4rem 0;`}
`;

class PageDiscription extends Component<OwnProps, OwnState> {
  render() {
    return <Div>{this.props.children}</Div>;
  }
}
export default PageDiscription;
