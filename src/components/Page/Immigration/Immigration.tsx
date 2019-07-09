import React, { Component } from 'react';
import styled from 'styled-components';

import {
  PageBaseLayout,
  PageDescription,
  ProgramLogosSection,
  Heading2,
  Heading3,
  ImagePluTextBox,
  BottomSection,
  Button,
} from '../..';
import ImmigrationStepsSection from './ImmigrationStepsSection';
import COSImmigrationLogoJp from '../../../assets/logo/COSImmigrationConsultingJp.svg';
import { buttonText } from '../../../constants/buttonText';
import { BottomSectionText } from '../../../constants/BottomSectionText';
import colors from '../../colors';

const PriceDiv = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
`;

interface OwnProps {}
interface OwnState {
  data: {
    title: { rendered: string };
    acf: {
      fv1200_400: string;
      subtitle: string;
      pageDescription: string;
      programTitle: string;
      programText: string;
      programFeatureTitle1: string;
      programFeatureTitle2: string;
      programFeatureTitle3: string;
      programFeatureText1: string;
      programFeatureText2: string;
      programFeatureText3: string;
      programFeatureImg1: string;
      programFeatureImg2: string;
      programFeatureImg3: string;
      stepTitle: string;
      step1Title: string;
      step1Img: string;
      step2Title: string;
      step2Img: string;
      step3Title: string;
      step3Img: string;
      step4Title: string;
      step4Img: string;
      priceTitle: string;
      priceTable: string;
    };
  };
}

class Immigration extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      data: {
        title: { rendered: '' },
        acf: {
          fv1200_400: '',
          subtitle: '',
          pageDescription: '',
          programTitle: '',
          programText: '',
          programFeatureTitle1: '',
          programFeatureTitle2: '',
          programFeatureTitle3: '',
          programFeatureText1: '',
          programFeatureText2: '',
          programFeatureText3: '',
          programFeatureImg1: '',
          programFeatureImg2: '',
          programFeatureImg3: '',
          stepTitle: '',
          step1Title: '',
          step1Img: '',
          step2Title: '',
          step2Img: '',
          step3Title: '',
          step3Img: '',
          step4Title: '',
          step4Img: '',
          priceTitle: '',
          priceTable: '',
        },
      },
    };
  }
  componentDidMount() {
    let pageId = 462;
    let dataURL = `http://localhost/wp-json/wp/v2/pages/${pageId}`;
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
        });
      });
  }

  render() {
    let data = this.state.data.acf;
    let title = this.state.data.title;

    return (
      <PageBaseLayout
        imgURL={data.fv1200_400}
        title={title.rendered}
        subTitle={data.subtitle}
      >
        <PageDescription>
          <div dangerouslySetInnerHTML={{ __html: data.pageDescription }} />
        </PageDescription>
        <ProgramLogosSection logo1={COSImmigrationLogoJp} logo2={''} />
        <Heading2>{data.programTitle}</Heading2>
        <div dangerouslySetInnerHTML={{ __html: data.programText }} />
        <ImagePluTextBox
          imgURL={data.programFeatureImg1}
          alt={data.programFeatureTitle1}
          isImgRightSide={true}
        >
          <Heading3>{data.programFeatureTitle1}</Heading3>
          <div dangerouslySetInnerHTML={{ __html: data.programFeatureText1 }} />
        </ImagePluTextBox>
        <ImagePluTextBox
          imgURL={data.programFeatureImg2}
          alt={data.programFeatureTitle2}
          isImgRightSide={false}
        >
          <Heading3>{data.programFeatureTitle2}</Heading3>
          <div dangerouslySetInnerHTML={{ __html: data.programFeatureText2 }} />
        </ImagePluTextBox>
        <ImagePluTextBox
          imgURL={data.programFeatureImg3}
          alt={data.programFeatureTitle3}
          isImgRightSide={true}
        >
          <Heading3>{data.programFeatureTitle3}</Heading3>
          <div dangerouslySetInnerHTML={{ __html: data.programFeatureText3 }} />
        </ImagePluTextBox>
        <ImmigrationStepsSection
          title={data.stepTitle}
          step1Title={data.step1Title}
          step1Img={data.step1Img}
          step2Title={data.step2Title}
          step2Img={data.step2Img}
          step3Title={data.step3Title}
          step3Img={data.step3Img}
          step4Title={data.step4Title}
          step4Img={data.step4Img}
        />
        <PriceDiv>
          <Heading2>{data.priceTitle}</Heading2>
          <div dangerouslySetInnerHTML={{ __html: data.priceTable }} />
        </PriceDiv>
        <BottomSection
          text={BottomSectionText.pattern1}
          backgroundColor={colors.lightGray}
        >
          <Button theme={{ main: '23.7rem' }}>
            {buttonText.freeConsulting}
          </Button>
        </BottomSection>
      </PageBaseLayout>
    );
  }
}
export default Immigration;
