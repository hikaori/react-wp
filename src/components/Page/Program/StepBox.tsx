import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../../../utile/Helper';

const Div = styled.div`
  background: #fff;
  margin-right: 17%;
  margin-left: 17%;
  margin-top: 96px;
  ${media.tablet`margin-right: 0%;
  margin-left: 0%;`}
`;
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1.6rem;
  padding-left: 1.6rem;
  ${media.tablet`display: block;`}
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
  ${media.tablet`padding:9.2rem 1.6rem 3.2rem;`}
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
  &.step-icon:after {
    content: '${({ theme }) => theme.number}';
    font-size: 48px;
    margin-left: 10px;
  }
`;
const TextDiv = styled.div`
  padding-right: 1.6rem;
  ${media.tablet`padding-right: 0;`}
`;

interface ownProps {
  title: string;
  text: string;
  img: string;
  color: string;
  number: string;
}
interface ownState {}
class StepBox extends Component<ownProps, ownState> {
  render() {
    return (
      <Div>
        <ContentsDiv>
          <Step
            className="step-icon"
            theme={{ color: this.props.color, number: this.props.number }}
          >
            step
          </Step>
          <TitleDiv theme={{ color: this.props.color }}>
            {this.props.title}
          </TitleDiv>
          <FlexDiv>
            <TextDiv dangerouslySetInnerHTML={{ __html: this.props.text }} />
            <img src={this.props.img} alt={this.props.title} />
          </FlexDiv>
        </ContentsDiv>
      </Div>
    );
  }
}
export default StepBox;
