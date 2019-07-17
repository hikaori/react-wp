import React, { Component } from 'react';
import styled from 'styled-components';

import { Heading2 } from '../../';
import colors from '../../colors';
import font from '../../fonts';
import { media } from '../../../utile/Helper';

const BoxDiv = styled.div`
  padding: 8rem 0;
`;
const TableDiv = styled.div`
  .column-1 {
    background-color: ${colors.lightGray};
  }
  .row-1 .column-1,
  .row-1 .column-2,
  .row-1 .column-3 {
    background-color: #f8b9ba;
    color: #fff;
    font-family: ${font.jpMedium};
  }
  .row-11 .column-1,
  .row-11 .column-2,
  .row-11 .column-3 {
    background-color: ${colors.pink};
    color: #fff;
    font-family: ${font.jpMedium};
  }
  .row-19 .column-1,
  .row-19 .column-2,
  .row-19 .column-3 {
    background-color: ${colors.green};
    color: #fff;
    font-family: ${font.jpMedium};
  }
  .row-24 .column-1,
  .row-24 .column-2,
  .row-24 .column-3 {
    background-color: ${colors.immigrationBlue};
    color: #fff;
    font-family: ${font.jpMedium};
  }
  .content {
    text-align: left;
    display: block;
    padding-left: 3.2rem;
    ${media.tablet`padding-left: 0rem;`}
  }
`;

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
        <TableDiv dangerouslySetInnerHTML={{ __html: this.props.table }} />
      </BoxDiv>
    );
  }
}
export default Price;
