import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { CaretDown } from 'styled-icons/boxicons-regular/CaretDown';

import { Heading2 } from '../..';
import ImmigrationStep from './ImmigrationStep';
import color from '../../colors';
const Div = styled.div`
  background:${color.lightGray}
  margin-right:calc((( 100vw - 100% ) / 2 ) * -1 );
  margin-left:calc((( 100vw - 100% ) / 2 ) * -1 );
  padding-top: 80px;
  padding-bottom: 80px;
`;
const ArrowDownIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`;
const NoteDiv = styled.div`
  margin-top: 1.6rem;
  text-align: center;
`;

interface ownProps {
  title: string;
  step1Title: string;
  step1Img: string;
  step2Title: string;
  step2Img: string;
  step3Title: string;
  step3Img: string;
  step4Title: string;
  step4Img: string;
}

class ImmigrationStepsSection extends Component<ownProps> {
  arrowDom = (
    <ArrowDownIcon>
      <CaretDown size="26" />
    </ArrowDownIcon>
  );
  arrowDomWithNote = (
    <Fragment>
      <NoteDiv>
        ※申請資格を満たしていない場合は、基準に達するためのアドバイスをさせていただきます。
      </NoteDiv>
      {this.arrowDom}
    </Fragment>
  );

  stepBoxDom = (
    text: string,
    stepNum: number,
    img: string,
    backgroundColor: string,
    textColor: string,
    arrowDom: JSX.Element,
  ) => (
    <Fragment>
      <ImmigrationStep
        text={text}
        stepNum={stepNum}
        img={img}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />
      {arrowDom}
    </Fragment>
  );

  render() {
    return (
      <Div>
        <Heading2>{this.props.title}</Heading2>
        {this.stepBoxDom(
          this.props.step1Title,
          1,
          this.props.step1Img,
          '#fff',
          color.immigrationBlue,
          this.arrowDom,
        )}
        {this.stepBoxDom(
          this.props.step2Title,
          2,
          this.props.step2Img,
          '#fff',
          color.immigrationBlue,
          this.arrowDomWithNote,
        )}
        {this.stepBoxDom(
          this.props.step3Title,
          3,
          this.props.step3Img,
          color.immigrationBlue,
          '#fff',
          this.arrowDom,
        )}
        {this.stepBoxDom(
          this.props.step4Title,
          4,
          this.props.step4Img,
          color.immigrationBlue,
          '#fff',
          <div />,
        )}
      </Div>
    );
  }
}
export default ImmigrationStepsSection;
