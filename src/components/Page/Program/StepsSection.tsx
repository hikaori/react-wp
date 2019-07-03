import React, { Component } from 'react';
import styled from 'styled-components';
import { CaretDown } from 'styled-icons/boxicons-regular/CaretDown';

import color from '../../colors';
import StepBox from './StepBox';
import { Heading2 } from '../..';
import { media } from '../../../utile/Helper';

const Div = styled.div`
  padding-top: 8rem;
  padding-bottom: 8rem;
  background: ${color.lightGray};
  margin-left: calc(((100vw - 100%) / 2) * -1);
  margin-right: calc(((100vw - 100%) / 2) * -1);
  & h2 {
    margin-bottom: 13.45rem;
  }
  ${media.tablet`
  padding-right: 1.6rem;
    padding-left: 1.6rem;
  `}
`;
const ArrowDownIcon = styled.div`
  text-align: center;
  margin-top: 36px;
`;

interface ownProps {
  mainTitle: string;
  step1Title: string;
  step1color: string;
  step1Text: string;
  step1Img: string;
  step2Title: string;
  step2color: string;
  step2Text: string;
  step2Img: string;
  step3Title: string;
  step3color: string;
  step3Text: string;
  step3Img: string;
}
interface ownState {}
class StepsSection extends Component<ownProps, ownState> {
  baseDome = (
    title: string,
    color: string,
    text: string,
    img: string,
    number: string,
  ) => (
    <StepBox
      key={number}
      title={title}
      color={color}
      text={text}
      img={img}
      number={number}
    />
  );
  arrowDom = (title: string) => (
    <ArrowDownIcon key={title}>
      <CaretDown size="26" />
    </ArrowDownIcon>
  );

  createDom = (
    title: string,
    color: string,
    text: string,
    img: string,
    number: string,
    hasArrow: boolean,
  ) => {
    const returnDom: JSX.Element[] = [];
    if (hasArrow) {
      returnDom.push(this.baseDome(title, color, text, img, number));
      returnDom.push(this.arrowDom(title));
    } else {
      returnDom.push(this.baseDome(title, color, text, img, number));
    }
    return returnDom;
  };

  render() {
    return (
      <Div>
        <Heading2>{this.props.mainTitle}</Heading2>
        {this.createDom(
          this.props.step1Title,
          this.props.step1color,
          this.props.step1Text,
          this.props.step1Img,
          '1',
          true,
        )}
        {this.createDom(
          this.props.step2Title,
          this.props.step2color,
          this.props.step2Text,
          this.props.step2Img,
          '2',
          true,
        )}
        {this.createDom(
          this.props.step3Title,
          this.props.step3color,
          this.props.step3Text,
          this.props.step3Img,
          '3',
          false,
        )}
      </Div>
    );
  }
}
export default StepsSection;
