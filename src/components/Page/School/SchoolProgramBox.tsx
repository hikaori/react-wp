import React, { Component } from 'react';
import styled from 'styled-components';

import { Heading2, BoxTitleLabelOnTopOfImg } from '../..';
import color from '../../colors';
import { media } from '../../../utile/Helper';

const DescriptionDiv = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const FlexDiv = styled.div`
  display: flex;
  ${media.tablet`
  flex-direction: column;
  align-items: center;
  `}
`;
const ProgramDiv = styled.div`
  background-color: ${color.lightGray};
  margin-right: calc(((100vw - 100%) / 2) * -1);
  margin-left: calc(((100vw - 100%) / 2) * -1);
  padding: 84px 6%;
`;

interface ownProps {
  data: any;
}
interface ownState {}
class SchoolProgramBox extends Component<ownProps> {
  programItemDom(data: any) {
    let programData = [
      {
        title: data.programTitle1,
        subTitle: data.programSubtitle1,
        color: data.programColor1,
        img: data.programImg1,
        link: data.programLink1,
      },
      {
        title: data.programTitle2,
        subTitle: data.programSubtitle2,
        color: data.programColor2,
        img: data.programImg2,
        link: data.programLink2,
      },
      {
        title: data.programTitle3,
        subTitle: data.programSubtitle3,
        color: data.programColor3,
        img: data.programImg3,
        link: data.programLink3,
      },
      {
        title: data.programTitle4,
        subTitle: data.programSubtitle4,
        color: data.programColor4,
        img: data.programImg4,
        link: data.programLink4,
      },
    ];

    let returnDom: JSX.Element[] = [];

    programData.map((x, index) =>
      returnDom.push(
        <BoxTitleLabelOnTopOfImg
          key={index}
          title={x.title}
          subTitle={x.subTitle}
          backgroundColor={x.color}
          img={x.img}
          buttonLink={x.link}
        />,
      ),
    );
    return returnDom;
  }

  render() {
    return (
      <ProgramDiv>
        <Heading2>提携学校・プログラムの種類一覧</Heading2>
        <DescriptionDiv
          dangerouslySetInnerHTML={{ __html: this.props.data.pageDescription }}
        />
        <FlexDiv>{this.programItemDom(this.props.data)}</FlexDiv>
      </ProgramDiv>
    );
  }
}
export default SchoolProgramBox;
