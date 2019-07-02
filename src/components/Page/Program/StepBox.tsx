import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import testimg from '../../../assets/images/212_119_defalt.jpg';

const Div = styled.div`
  background: #fff;
  margin-right: 17%;
  margin-left: 17%;
`;
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1.6rem;
  padding-left: 1.6rem;
`;
const TitleDiv = styled.div`
  font-size: 2rem;
  text-align: center;
  padding-bottom: 3.2rem;
  margin-bottom: 3.2rem;
  border-bottom: solid 1px ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.color};
  font-family: 'a-otf-midashi-go-mb31-pr6n';
`;
const ContentsDiv = styled.div`
  padding: 9.2rem 6rem 3.2rem;
  position: relative;
`;
const Step = styled.span`
  width: 120px;
  height: 120px;
  display: block;
  background: ${({ theme }) => theme.color};
  text-align: center;
  line-height: 100px;
  border-radius: 50%;
  color: #fff;
  margin: 0 auto;
  position: absolute;
  top: -60px;
  right: calc(50% - 60px);
  &.step-icon {
    counter-increment: step;
  }
  &.step-icon:after {
    content: counter(step);
    font-size: 48px;
  }
`;
const TextDiv = styled.div`
  padding-right: 1.6rem;
`;
const Arrow = styled.span`
  position: absolute;
  right: 50%;
  bottom: -36px;
`;

interface ownProps {
  color: string;
}
interface ownState {}
class StepBox extends Component<ownProps, ownState> {
  TextImg = '../../assets/images/search.svg';
  render() {
    return (
      <Div>
        <ContentsDiv>
          <Step className="step-icon" theme={{ color: this.props.color }}>
            step
          </Step>
          <TitleDiv theme={{ color: this.props.color }}>留学事業</TitleDiv>
          <FlexDiv>
            <TextDiv>
              カナダ国内でも通用する英語力、資格や知識が得られるプランのご提案をお約束します。現地就職や永住権を見据えた方は非常に大事なステップです。ビザのルール、将来必要となる英語力正確に把握し正しい選択をお手伝いいたします。
            </TextDiv>
            <img src={testimg} />
          </FlexDiv>
        </ContentsDiv>
      </Div>
    );
  }
}
export default StepBox;
