import React, { Component } from 'react';
import styled from 'styled-components';

import { Heading2 } from '../../';

const BoxDiv = styled.div`
  padding: 8rem 0;
`;
const TableDiv = styled.div``;

interface OwnProps {
  title: string;
  description: string;
  table: string;
}
interface OwnState {}

class Price extends Component<OwnProps, OwnState> {
  render() {
    return (
      <BoxDiv>
        <Heading2>{this.props.title}</Heading2>
        <div dangerouslySetInnerHTML={{ __html: this.props.description }} />
        <TableDiv>{this.props.table}</TableDiv>
      </BoxDiv>
    );
  }
}
export default Price;
