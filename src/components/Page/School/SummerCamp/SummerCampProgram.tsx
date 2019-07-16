import React, { Component } from 'react';
import styled from 'styled-components';

import { Heading3 } from '../../..';
import { media } from '../../../../utile/Helper';
import colors from '../../../colors';

const BoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  .summercampProgram1 .row-3 .column-2,
  .summercampProgram1 .row-4 .column-2,
  .summercampProgram1 .row-9 .column-2,
  .summercampProgram1 .row-10 .column-2,
  .summercampProgram2 .row-3 .column-2,
  .summercampProgram2 .row-4 .column-2,
  .summercampProgram2 .row-5 .column-2,
  .summercampProgram2 .row-11 .column-2,
  .summercampProgram2 .row-12 .column-2,
  .summercampProgram2 .row-13 .column-2,
  .summercampProgram2 .row-14 .column-2,
  .summercampProgram2 .row-15 .column-2,
  .summercampProgram2 .row-16 .column-2,
  .summercampProgram3 .row-3 .column-2,
  .summercampProgram3 .row-4 .column-2,
  .summercampProgram3 .row-5 .column-2,
  .summercampProgram3 .row-10 .column-2,
  .summercampProgram3 .row-11 .column-2,
  .summercampProgram3 .row-12 .column-2,
  .summercampProgram3 .row-13 .column-2,
  .summercampProgram3 .row-14 .column-2,
  .summercampProgram3 .row-15 .column-2,
  .summercampProgram3 .row-16 .column-2,
  .summercampProgram4 .row-3 .column-2,
  .summercampProgram4 .row-4 .column-2,
  .summercampProgram4 .row-5 .column-2,
  .summercampProgram4 .row-10 .column-2,
  .summercampProgram4 .row-11 .column-2,
  .summercampProgram4 .row-12 .column-2,
  .summercampProgram4 .row-13 .column-2,
  .summercampProgram4 .row-14 .column-2,
  .summercampProgram5 .row-3 .column-2,
  .summercampProgram5 .row-4 .column-2,
  .summercampProgram5 .row-5 .column-2,
  .summercampProgram5 .row-10 .column-2,
  .summercampProgram5 .row-11 .column-2,
  .summercampProgram5 .row-12 .column-2,
  .summercampProgram5 .row-13 .column-2,
  .summercampProgram5 .row-14 .column-2 {
    background-color: #f0f0f0;
  }
`;
const ProgramDiv = styled.div`
  margin-top: 8rem;
  &.backGray {
    background-color: ${colors.lightGray};
    margin-right: calc(((100vw - 100%) / 2) * -1);
    margin-left: calc(((100vw - 100%) / 2) * -1);
    padding: 8rem;
    ${media.tablet`padding: 8rem 1.6rem;`}
  }
`;
const TableDiv = styled.div`
  width: 76.3%;
  padding-right: 92.5px;
  ${media.tablet`width:100%;padding-right: 0px;`}
`;
const FlexDiv = styled.div`
  display: flex;
  ${media.tablet`flex-direction: column;`}
`;
const FlexImgDiv = styled(FlexDiv)`
  flex-direction: column;
  ${media.tablet`align-items: center;`}
`;

interface OwnProps {
  program: {
    title: string;
    tableShortCode: string;
    imgArray: string[];
    classname: string;
  }[];
}
interface OwnState {}

class SummerCampProgram extends Component<OwnProps, OwnState> {
  createImgDom = (imgs: string[], title: string) => {
    const returnDom: JSX.Element[] = [];
    for (let i = 0; i < imgs.length; i++) {
      returnDom.push(
        <img
          key={i}
          src={imgs[i]}
          width="288px"
          height="162px"
          alt={`${title}`[i]}
        />,
      );
    }
    return returnDom;
  };

  createProgramDom = (
    data: {
      title: string;
      tableShortCode: string;
      imgArray: string[];
      classname: string;
    }[],
  ) => {
    const returnDom: JSX.Element[] = [];
    data.map(
      (
        x: {
          title: string;
          tableShortCode: string;
          imgArray: string[];
          classname: string;
        },
        index: number,
      ) =>
        returnDom.push(
          <ProgramDiv key={index} className={x.classname}>
            <Heading3>{x.title}</Heading3>
            <FlexDiv>
              <TableDiv
                dangerouslySetInnerHTML={{ __html: x.tableShortCode }}
              />

              <FlexImgDiv>{this.createImgDom(x.imgArray, x.title)}</FlexImgDiv>
            </FlexDiv>
          </ProgramDiv>,
        ),
    );
    return returnDom;
  };

  render() {
    return <BoxDiv>{this.createProgramDom(this.props.program)}</BoxDiv>;
  }
}
export default SummerCampProgram;
