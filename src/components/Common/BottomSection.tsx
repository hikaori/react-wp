import React, { Component } from 'react';
import styled from 'styled-components';

import { media } from '../../utile/Helper';

interface OwnProps {
  text: string;
  backgroundColor: string;
}
interface OwnState {}

const Div = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  padding-top: 8rem;
  padding-bottom: 8rem;
  text-align: center;
  margin-left: calc(((100vw - 100%) / 2) * -1);
  margin-right: calc(((100vw - 100%) / 2) * -1);
  ${media.tablet`padding-right:1.6rem;padding-left:1.6rem`}
`;

class BottomSection extends Component<OwnProps, OwnState> {
  render() {
    return (
      <Div theme={{ backgroundColor: this.props.backgroundColor }}>
        <div>{this.props.text}</div>
        {this.props.children}
      </Div>
    );
  }
}
export default BottomSection;
