import React, { Component } from 'react';
import styled from 'styled-components';

import { Heading2 } from '../../';
import font from '../../fonts';
import { media } from '../../../utile/Helper';
import color from '../../colors';

const BoxDiv = styled.div`
  background-color: ${color.lightGray};
  margin-right: calc(((100vw - 100%) / 2) * -1);
  margin-left: calc(((100vw - 100%) / 2) * -1);
  padding: 8rem 8.3rem;
  ${media.tablet`padding: 8rem 1.6rem;`}
`;

const TableDiv = styled.div`
  .tablepress .contents {
    text-align: left;
    margin-left: 3.2rem;
    ${media.tablet`margin-left: 0rem;`}
  }
  .tablepress .column-1 {
    background-color: #fff;
  }
  .row-1 .column-1,
  .row-1 .column-2 {
    background-color: #f4b76b;
    font-family: ${font.jpMedium};
  }
`;

interface OwnProps {
  title: string;
  text: string;
  tableCode: string;
}
interface OwnState {}

class TeenContents extends Component<OwnProps, OwnState> {
  render() {
    return (
      <BoxDiv>
        <Heading2>{this.props.title}</Heading2>
        <div dangerouslySetInnerHTML={{ __html: this.props.text }} />
        <TableDiv dangerouslySetInnerHTML={{ __html: this.props.tableCode }} />
      </BoxDiv>
    );
  }
}
export default TeenContents;
