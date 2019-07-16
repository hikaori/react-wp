import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { Heading2, ImagePluTextBox } from '../../..';
import SummerCampProgram from './SummerCampProgram';
import color from '../../../colors';
import { media } from '../../../../utile/Helper';

const SummerCampDiscriptionDiv = styled.div`
  background-color: ${color.lightGray};
  margin-right: calc(((100vw - 100%) / 2) * -1);
  margin-left: calc(((100vw - 100%) / 2) * -1);
  padding: 8rem 8.3rem;
  ${media.tablet`padding: 8rem 1.6rem;`}
  & .summercapmDiscription {
    margin: 0;
  }
`;

interface OwnProps {
  summercampDescriptionTitle: string;
  summercampDescriptionImg: string;
  summercampDescriptionText: string;
  program1: {
    title: string;
    tableShortCode: string;
    imgArray: string[];
    classname: string;
  };
  program2: {
    title: string;
    tableShortCode: string;
    imgArray: string[];
    classname: string;
  };
  program3: {
    title: string;
    tableShortCode: string;
    imgArray: string[];
    classname: string;
  };
  program4: {
    title: string;
    tableShortCode: string;
    imgArray: string[];
    classname: string;
  };
  program5: {
    title: string;
    tableShortCode: string;
    imgArray: string[];
    classname: string;
  };
}
interface OwnState {}

class SummerCampSection extends Component<OwnProps, OwnState> {
  render() {
    return (
      <Fragment>
        <SummerCampDiscriptionDiv>
          <Heading2>{this.props.summercampDescriptionTitle}</Heading2>
          <ImagePluTextBox
            imgURL={this.props.summercampDescriptionImg}
            alt={this.props.summercampDescriptionTitle}
            isImgRightSide={false}
            classname={'summercapmDiscription'}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: this.props.summercampDescriptionText,
              }}
            />
          </ImagePluTextBox>
        </SummerCampDiscriptionDiv>
        <SummerCampProgram
          program={[
            this.props.program1,
            this.props.program2,
            this.props.program3,
            this.props.program4,
            this.props.program5,
          ]}
        />
      </Fragment>
    );
  }
}
export default SummerCampSection;
