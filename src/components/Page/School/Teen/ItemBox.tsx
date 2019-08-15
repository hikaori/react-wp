import React, { Component } from 'react';
import styled from 'styled-components';

import { Heading3, LinkHandle } from '../../..';
import font from '../../../fonts';
import { media } from '../../../../utile/Helper';

const BoxDiv = styled.div`
  padding: 4rem;
  background-color: #fff;
  margin: 0 0.8rem 1.6rem;
  width: 32.5%;
  ${media.tablet`width: 100%`}
  margin: 0 1.25% 1.6rem 0;
  & img {
    width: 100%;
  }
`;

const TitleDiv = styled.div`
  font-weight: bold;
  font-family: ${font.jpMedium};
  padding-top: 27px;
`;
const TextDiv = styled.div`
  padding-top: 18px;
  ${media.tablet`padding-top: 8px;`}
  &.link {
    padding: 0px;
  }
`;

interface OwnProps {
  nameJap: string;
  nameEng: string;
  numberOfSchool: string;
  population: string;
  enrollment: string;
  img: string;
  link: string;
}
interface OwnState {}

class ItemBox extends Component<OwnProps, OwnState> {
  render() {
    return (
      <BoxDiv className="school-box">
        <Heading3>{this.props.nameJap}</Heading3>
        <img
          src={this.props.img}
          width={'309.33px'}
          height={'174px'}
          alt={this.props.nameJap}
        />
        <TitleDiv>英語学区名</TitleDiv>
        <TextDiv>{this.props.nameEng}</TextDiv>
        <TitleDiv>学校数</TitleDiv>
        <TextDiv
          dangerouslySetInnerHTML={{ __html: this.props.numberOfSchool }}
        />
        <TitleDiv>日本人学生の多さ</TitleDiv>
        <TextDiv>{this.props.population}</TextDiv>
        <TitleDiv>入学時期</TitleDiv>
        <TextDiv>{this.props.enrollment}</TextDiv>
        <TitleDiv>費用</TitleDiv>
        <TextDiv className="link">
          <LinkHandle to={this.props.link}>詳しくはこちら</LinkHandle>
        </TextDiv>
      </BoxDiv>
    );
  }
}
export default ItemBox;
