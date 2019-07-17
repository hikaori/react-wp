import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../../colors';
import { media } from '../../../utile/Helper';

import { Heading2 } from '../../';
import font from '../../fonts';

const BoxDiv = styled.div`
  .parent:last-child {
    color: red;
  }
`;
const SupportBox = styled.div`
  counter-reset: stepNum;
  background-color: #fff;
  padding-top: 8rem;
  ${media.tablet`padding: 8rem 2.5rem 8rem 5rem;`}
  &.backGray {
    background-color: ${colors.lightGray}
    margin-right: calc(((100vw - 100%) / 2) * -1);
    margin-left: calc(((100vw - 100%) / 2) * -1);
    padding: 8rem 8.3rem;
    ${media.tablet`padding: 8rem 2.5rem 8rem 5rem;`}
  }
  .itemBox:last-child {
    .line {
      border: none;
      .arrow::before{
        content:'';
      }
    }
  }
`;
const ItemBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Number = styled.span`
  display: block;
  width: 8.4rem;
  height: 8.4rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.backgroundColor};
  position: absolute;
  left: -4.2rem;
  &::before {
    counter-increment: stepNum;
    content: 'step' counter(stepNum);
    color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    line-height: 8.4rem;
    text-align: center;
  }
`;
const LineDiv = styled.div`
  border-left: solid 1px ${({ theme }) => theme.borderColor};
  ${media.tablet`border-left: solid 3px ${({ theme }: any) =>
    theme.borderColor}`}
  padding-bottom: 32px;
  position: relative;
`;
const Arrow = styled.span`
  transform: rotate(90deg);
  display: inline-block;
  position: relative;
  &::before {
    content: '>>';
    top: -5.4rem;
    sright: -140px;
    position: absolute;
    color: ${({ theme }) => theme.color};
  }
`;
const TextImgBox = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 3.2rem 4.8rem;
  width: 79.2rem;
  ${media.tablet`width: 100%;`}
  margin-left: calc(4.2rem + 20px);
  ${media.tablet`margin-left:0;`}
`;
const FlexDiv = styled.div`
  display: flex;
  ${media.tablet`flex-direction: column;`}
`;
const TextDiv = styled.div`
  margin-right: 4.4rem;
  ${media.tablet`margin-right:0;`}
`;
const Title = styled.div`
  font-family: ${font.jpMedium};
  color: ${({ theme }) => theme.backgroundColor};
  margin-bottom: 2.4rem;
  font-size: 2rem;
  text-shadow: 1px 1px ${colors.darkGray};
`;

interface OwnProps {
  step1Data: {
    serviceTitle: string;
    serviceDescription: string;
    color: string;
    steps: [
      { title: string; text: string; img: string },
      { title: string; text: string; img: string },
      { title: string; text: string; img: string },
      { title: string; text: string; img: string }
    ];
  };
  step2Data: {
    serviceTitle: string;
    serviceDescription: string;
    color: string;
    steps: [
      { title: string; text: string; img: string },
      { title: string; text: string; img: string },
      { title: string; text: string; img: string },
      { title: string; text: string; img: string }
    ];
  };
  step3Data: {
    serviceTitle: string;
    serviceDescription: string;
    color: string;
    steps: [
      { title: string; text: string; img: string },
      { title: string; text: string; img: string },
      { title: string; text: string; img: string }
    ];
  };
}
interface OwnState {}

class Support extends Component<OwnProps, OwnState> {
  createStepsDom = (
    stepData:
      | [
          { title: string; text: string; img: string },
          { title: string; text: string; img: string },
          { title: string; text: string; img: string },
          { title: string; text: string; img: string }
        ]
      | [
          { title: string; text: string; img: string },
          { title: string; text: string; img: string },
          { title: string; text: string; img: string }
        ],
    color: string,
    itemBoxBackGroundColor: string,
  ) => {
    const returnDom: JSX.Element[] = [];
    stepData.map((x, index) =>
      returnDom.push(
        <ItemBox key={index} className="itemBox">
          <LineDiv theme={{ borderColor: color }} className="line">
            <Number theme={{ backgroundColor: color }}>
              <Arrow theme={{ color: color }} className="arrow" />
            </Number>
            <TextImgBox theme={{ backgroundColor: itemBoxBackGroundColor }}>
              <FlexDiv>
                <TextDiv>
                  <Title theme={{ backgroundColor: color }}>{x.title}</Title>
                  <div dangerouslySetInnerHTML={{ __html: x.text }} />
                </TextDiv>
                <img
                  src={x.img}
                  width={'212px'}
                  height={'119px'}
                  alt={x.title}
                />
              </FlexDiv>
            </TextImgBox>
          </LineDiv>
        </ItemBox>,
      ),
    );
    return returnDom;
  };

  render() {
    return (
      <BoxDiv>
        <SupportBox className="backGray">
          <Heading2>{this.props.step1Data.serviceTitle}</Heading2>
          {this.createStepsDom(
            this.props.step1Data.steps,
            this.props.step1Data.color,
            '#fff',
          )}
        </SupportBox>

        <SupportBox>
          <Heading2>{this.props.step2Data.serviceTitle}</Heading2>
          {this.createStepsDom(
            this.props.step2Data.steps,
            this.props.step2Data.color,
            colors.lightGray,
          )}
        </SupportBox>

        <SupportBox className="backGray">
          <Heading2>{this.props.step3Data.serviceTitle}</Heading2>
          {this.createStepsDom(
            this.props.step3Data.steps,
            this.props.step3Data.color,
            '#fff',
          )}
        </SupportBox>
      </BoxDiv>
    );
  }
}
export default Support;
