import React, { Component } from 'react';
import styled from 'styled-components';

import color from '../colors';

interface OwnProps {
  text: string;
}
interface OwnState {}

const Div = styled.div`
  background-color: ${color.lightGray};
  padding-top: 8rem;
  padding-bottom: 8rem;
  text-align: center;
  margin-left: calc(((100vw - 100%) / 2) * -1);
  margin-right: calc(((100vw - 100%) / 2) * -1);
`;

class BottomSection extends Component<OwnProps, OwnState> {
  render() {
    return (
      <Div>
        <div>{this.props.text}</div>
        {this.props.children}
      </Div>
    );
  }
}
export default BottomSection;
