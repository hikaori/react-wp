import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { Heading2, Heading3, BoxTitleLabelOnTopOfImg } from '../..';
import HelpfulInfoItemBox from '../HelpfulInfo/HelpfulInfoItemBox';
import color from '../../colors';
import { media } from '../../../utile/Helper';

const FlexDiv = styled.div`
  display: flex;
  ${media.tablet`
  flex-direction: column;
  align-items: center;
  `}
`;

const ItemBoxDiv = styled.div`
  margin: 84px auto;
  &.backGray {
    padding: 8rem;
    background-color: ${color.lightGray};
    margin-left: calc(((100vw - 100%) / 2) * -1);
    margin-right: calc(((100vw - 100%) / 2) * -1);
    ${media.tablet`padding-right:1.6rem;padding-left:1.6rem`};
  }
`;

interface ownProps {
  serviceApplyData: {
    title: string;
    img: string;
    text: string;
    link: string;
    buttonText: string;
  }[];
  lifeUsefulInfoApplyData: {
    title: string;
    img: string;
    text: string;
    link: string;
    buttonText: string;
  }[];
  visaApply1: {
    title: string;
    img: string;
    text: string;
    link: string;
    buttonText: string;
  }[];
  visaApply2: {
    title: string;
    img: string;
    text: string;
    link: string;
    buttonText: string;
  }[];
}
interface ownState {}
class HelpfulInfoContent extends Component<ownProps> {
  createItemBoxDom = (
    data: {
      title: string;
      img: string;
      text: string;
      link: string;
      buttonText: string;
    }[],
    backgroundColor: string,
  ) => {
    const returnDom: JSX.Element[] = [];
    data.map((x, index) =>
      returnDom.push(
        <HelpfulInfoItemBox
          key={index}
          title={x.title}
          img={x.img}
          text={x.text}
          link={x.link}
          buttonText={x.buttonText}
          backgroundColor={backgroundColor}
        />,
      ),
    );
    return returnDom;
  };

  render() {
    return (
      <Fragment>
        <ItemBoxDiv>
          <Heading2>弊社サービスにお申込みのお客様</Heading2>
          <FlexDiv>
            {this.createItemBoxDom(
              this.props.serviceApplyData,
              color.lightGray,
            )}
          </FlexDiv>
        </ItemBoxDiv>
        <ItemBoxDiv className="backGray">
          <Heading2>カナダでの生活で役立つ情報</Heading2>
          <FlexDiv>
            {this.createItemBoxDom(this.props.lifeUsefulInfoApplyData, '#fff')}
          </FlexDiv>
        </ItemBoxDiv>
        <ItemBoxDiv>
          <Heading2>ビザ申請の方法</Heading2>
          <FlexDiv>
            {this.createItemBoxDom(this.props.visaApply1, color.lightGray)}
          </FlexDiv>
          <FlexDiv>
            {this.createItemBoxDom(this.props.visaApply2, color.lightGray)}
          </FlexDiv>
        </ItemBoxDiv>
      </Fragment>
    );
  }
}
export default HelpfulInfoContent;
