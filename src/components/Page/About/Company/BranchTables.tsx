import React, { Component } from 'react';
import styled from 'styled-components';

import { Heading2, Heading3 } from '../../..';
import color from '../../../colors';
import { media } from '../../../../utile/Helper';

const TableBox = styled.div`
  h3 {
    width: 65.5%;
    ${media.tablet`width: 100%;`};
    margin: 0 auto 25px;
  }
  .tablepress {
    width: 65.5%;
    ${media.tablet`width: 100%;`};
    margin: 0 auto;
  }
  .tablepress td {
    text-align: left;
  }
  .tablepress .row-3 .column-2 {
    background-color: ${color.lightGray};
  }
  .vancouver {
    .row-4 .column-2,
    .row-11 .column-2,
    .row-12 .column-2 {
      background-color: ${color.lightGray};
    }
  }
`;
const BoxDiv = styled.div`
  padding: 8rem 0;
  background-color: ${({ theme }) => theme.backgroundColor};
  &.backGray {
    margin-right: calc(((100vw - 100%) / 2) * -1);
    margin-left: calc(((100vw - 100%) / 2) * -1);
    padding: 8rem 8.3rem;
    ${media.tablet`padding: 8rem 1.6rem;`}
  }
`;

const JapanBranch = styled.div`
  padding: 32.25px 0px;
  :first-child {
    padding-top: 0px;
  }
`;

interface ownProps {
  vancouverBranchTable: string;
  nagoyaBranchTable: string;
  osakaBranchTable: string;
}
interface ownState {}
class BranchTables extends Component<ownProps> {
  render() {
    return (
      <TableBox>
        <BoxDiv theme={{ backgroundColor: '#fff' }}>
          <Heading2>バンクーバー本社</Heading2>
          <Heading3>会社概要</Heading3>
          <div
            className="vancouver"
            dangerouslySetInnerHTML={{
              __html: this.props.vancouverBranchTable,
            }}
          />
        </BoxDiv>
        <BoxDiv
          className="backGray"
          theme={{ backgroundColor: color.lightGray }}
        >
          <Heading2>日本支社</Heading2>
          <JapanBranch>
            <Heading3>名古屋オフィス</Heading3>
            <div
              className="nagoya"
              dangerouslySetInnerHTML={{ __html: this.props.nagoyaBranchTable }}
            />
          </JapanBranch>
          <JapanBranch>
            <Heading3>大阪オフィス</Heading3>
            <div
              className="osaka"
              dangerouslySetInnerHTML={{ __html: this.props.osakaBranchTable }}
            />
          </JapanBranch>
        </BoxDiv>
      </TableBox>
    );
  }
}
export default BranchTables;
