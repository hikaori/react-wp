import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { ImagePluTextBox, BoxTitleLabelOnTopOfImg, Heading2 } from '../..';
import { media } from '../../../utile/Helper';
import color from '../../colors';

const DescriptionDiv = styled.div`
  background-color: ${color.lightGray};
  margin-right: calc(((100vw - 100%) / 2) * -1);
  margin-left: calc(((100vw - 100%) / 2) * -1);
  padding: 8rem 7.5%;
  .img-right {
    margin: 0rem;
  }
`;
const BoxDiv = styled.div`
  padding: 8rem 0;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
  ${media.tablet`flex-direction: column`};
  .program-box {
    width: 33%;
    ${media.tablet`width: 100%;margin-left:0;margin-right:0;`};
    img {
      ${media.tablet`width: 100%`};
    }
  }
  .program-box:first-child {
    margin-left: 0px;
  }
  .program-box:last-child {
    margin-right: 0px;
  }
`;

interface ownProps {
  img: string;
  title1: string;
  text: string;
  title2: string;
  box1Data: {
    title: string;
    subTitle: string | null;
    backgroundColor: string;
    img: string;
    link: string;
  };
  box2Data: {
    title: string;
    subTitle: string | null;
    backgroundColor: string;
    img: string;
    link: string;
  };
  box3Data: {
    title: string;
    subTitle: string | null;
    backgroundColor: string;
    img: string;
    link: string;
  };
}
interface ownState {}
class AboutCOSContents extends Component<ownProps> {
  createBoxDom = (data: {
    title: string;
    subTitle: string | null;
    backgroundColor: string;
    img: string;
    link: string;
  }) => {
    return (
      <BoxTitleLabelOnTopOfImg
        title={data.title}
        subTitle={data.subTitle}
        backgroundColor={data.backgroundColor}
        img={data.img}
        buttonLink={data.link}
      />
    );
  };
  render() {
    return (
      <Fragment>
        <DescriptionDiv>
          <Heading2>{this.props.title1}</Heading2>
          <ImagePluTextBox
            imgURL={this.props.img}
            alt={this.props.title1}
            isImgRightSide={true}
            classname={null}
          >
            <div dangerouslySetInnerHTML={{ __html: this.props.text }} />
          </ImagePluTextBox>
        </DescriptionDiv>
        <BoxDiv>
          <Heading2>{this.props.title2}</Heading2>
          <FlexDiv>
            {this.createBoxDom(this.props.box1Data)}
            {this.createBoxDom(this.props.box2Data)}
            {this.createBoxDom(this.props.box3Data)}
          </FlexDiv>
        </BoxDiv>
      </Fragment>
    );
  }
}
export default AboutCOSContents;
