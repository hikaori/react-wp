import React, { Component } from 'react';
import styled from 'styled-components';
import Heading2 from '../Heading2';
import ProgramItemBox from './ProgramItemBox';

const FlexBox = styled.div`
  display: flex;
`;
const HarfL = styled.div`
  margin-right: 1.4rem;
`;
const OneThird = styled.div`
  margin-right: 1.4rem;
`;
const Container = styled.div`
  padding-top: 8.4rem;
  padding-bottom: 8rem;
`;

class ProgramContainer extends Component {
  render() {
    return (
      <Container>
        <Heading2>運営・提携事業紹介</Heading2>
        <FlexBox>
          <HarfL>
            <ProgramItemBox
              hedding3="ホイクペディア"
              subTitle="カナダの保育留学専門サービス"
              text="保育士資格書き換えや保育ボランティアといった独自のサービスや、保育士を目指す方への語学学校や専門学校の紹介、
        手続き代行を無料で行っています。現地オフィスで行われる保育ワークショップ、就活対策、会員様にのみの就職紹介サービスなど、
        保育に関するサービスはホイクペディアだけです。保育士資格書き換えや保育ボランティアといった独自のサービスや、学校の紹介、
        手続き代行を無料で行っています。現地オフィスで行われる保育ワークショップもご好評いただいております。"
            />
          </HarfL>
          <div>
            <ProgramItemBox
              hedding3="ホイクペディア"
              subTitle="カナダの保育留学専門サービス"
              text="保育士資格書き換えや保育ボランティアといった独自のサービスや、保育士を目指す方への語学学校や専門学校の紹介、
        手続き代行を無料で行っています。現地オフィスで行われる保育ワークショップ、就活対策、会員様にのみの就職紹介サービスなど、
        保育に関するサービスはホイクペディアだけです。保育士資格書き換えや保育ボランティアといった独自のサービスや、学校の紹介、
        手続き代行を無料で行っています。現地オフィスで行われる保育ワークショップもご好評いただいております。"
            />
          </div>
        </FlexBox>
        <FlexBox style={{ paddingTop: '1.6rem' }}>
          <OneThird>
            <ProgramItemBox
              hedding3="ホイクペディア"
              subTitle="カナダの保育留学専門サービス"
              text="保育士資格書き換えや保育ボランティアといった独自のサービスや、保育士を目指す方への語学学校や専門学校の紹介、
        手続き代行を無料で行っています。現地オフィスで行われる保育ワークショップ、就活対策、会員様にのみの就職紹介サービスなど、
        保育に関するサービスはホイクペディアだけです。保育士資格書き換えや保育ボランティアといった独自のサービスや、学校の紹介、
        手続き代行を無料で行っています。現地オフィスで行われる保育ワークショップもご好評いただいております。"
            />
          </OneThird>
          <OneThird>
            <ProgramItemBox
              hedding3="ホイクペディア"
              subTitle="カナダの保育留学専門サービス"
              text="保育士資格書き換えや保育ボランティアといった独自のサービスや、保育士を目指す方への語学学校や専門学校の紹介、
        手続き代行を無料で行っています。現地オフィスで行われる保育ワークショップ、就活対策、会員様にのみの就職紹介サービスなど、
        保育に関するサービスはホイクペディアだけです。保育士資格書き換えや保育ボランティアといった独自のサービスや、学校の紹介、
        手続き代行を無料で行っています。現地オフィスで行われる保育ワークショップもご好評いただいております。"
            />
          </OneThird>
          <div>
            <ProgramItemBox
              hedding3="ホイクペディア"
              subTitle="カナダの保育留学専門サービス"
              text="保育士資格書き換えや保育ボランティアといった独自のサービスや、保育士を目指す方への語学学校や専門学校の紹介、
        手続き代行を無料で行っています。現地オフィスで行われる保育ワークショップ、就活対策、会員様にのみの就職紹介サービスなど、
        保育に関するサービスはホイクペディアだけです。保育士資格書き換えや保育ボランティアといった独自のサービスや、学校の紹介、
        手続き代行を無料で行っています。現地オフィスで行われる保育ワークショップもご好評いただいております。"
            />
          </div>
        </FlexBox>
      </Container>
    );
  }
}
export default ProgramContainer;
