import React, { Component } from 'react';
import styled from 'styled-components';

interface OwnProps {}
interface OwnState {}

const Div = styled.div`
  margin-top: 8rem;
  margin-bottom: 8rem;
  padding:0 15.2rem
  text-align: center;
`;

class FirstSection extends Component<OwnProps, OwnState> {
  render() {
    return <Div>{this.props.children}</Div>;
  }
}
export default FirstSection;
