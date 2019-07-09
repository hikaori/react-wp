import React, { Component } from 'react';
import styled from 'styled-components';

import { media } from '../../../utile/Helper';

const ImmigrationStepDiv = styled.div`
  display: flex;
  width: 54%;
  background: ${({ theme }) => theme.backgroundColor};
  padding: 2.2rem 3.2rem;
  margin: 0 auto;
  color: ${({ theme }) => theme.textColor};
  & .note {
  }
  ${media.tablet`
  width: 100%;
  `}
`;
const IconDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 30%;
  & img {
    margin-bottom: 0;
  }
  ${media.tablet`
  display: none;
  `}
`;
const TextDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
const Title = styled.div`
  font-size: 2rem;
  line-hight: 2rem;
`;
const StepDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4.9rem;
`;
const Step = styled.span`
  font-size: 1.2rem;
  margin-right: 1.6rem;
`;
const Number = styled.span`
  font-size: 4rem;
  margin-right: 1.6rem;
`;

interface ownProps {
  stepNum: number;
  text: string;
  img: string;
  backgroundColor: string;
  textColor: string;
}
interface ownState {}
class ImmigrationStep extends Component<ownProps> {
  render() {
    return (
      <ImmigrationStepDiv
        theme={{
          backgroundColor: this.props.backgroundColor,
          textColor: this.props.textColor,
        }}
      >
        <TextDiv>
          <StepDiv>
            <Step>step</Step>
            <Number>{this.props.stepNum}</Number>
          </StepDiv>
          <Title>{this.props.text}</Title>
        </TextDiv>
        <IconDiv>
          <img
            src={this.props.img}
            width="60px"
            height="48px"
            alt={this.props.text}
          />
        </IconDiv>
      </ImmigrationStepDiv>
    );
  }
}
export default ImmigrationStep;
