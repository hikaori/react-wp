import React, { Component } from 'react';

import {
  PageBaseLayout,
  PageDescription,
  ProgramLogosSection,
  Heading2,
  Heading3,
  ImagePluTextBox,
  MainServicesSection,
  ServiceBox,
  BottomSection,
  Button,
} from '../..';

import cosLogo from '../../../assets/images/COS_Educational_Consulting_Inc_Logo_Jap.svg';
import hoikupediaLogo from '../../../assets/logo/HoikupediaLogo.png';
import { Titles } from '../../../constants/Titles';
import school from '../../../assets/images/school-solid.svg';
import { buttonText } from '../../../constants/buttonText';
import { BottomSectionText } from '../../../constants/BottomSectionText';

interface OwnProps {}
interface OwnState {
  data: {
    title: { rendered: string };
    acf: {
      fv1200_400: string;
      subtitle: string;
      pageDescription: string;
      programTitle: string;
      programFeatureTitle1: string;
      programFeatureTitle2: string;
      programFeatureTitle3: string;
      programFeatureText1: string;
      programFeatureText2: string;
      programFeatureText3: string;
      programFeatureImg1: string;
      programFeatureImg2: string;
      programFeatureImg3: string;
      serviceTitle1: string;
      serviceText1: string;
      serviceImg1: string;
      serviceButton1: string;
      serviceButtonUrl1: string;
      serviceTitle2: string;
      serviceText2: string;
      serviceImg2: string;
      serviceButton2: string;
      serviceButtonUrl2: string;
      serviceTitle3: string;
      serviceText3: string;
      serviceImg3: string;
      serviceButton3: string;
      serviceButtonUrl3: string;
      serviceTitle4: string;
      serviceText4: string;
      serviceImg4: string;
      serviceButton4: string;
      serviceButtonUrl4: string;
      serviceTitle5: string;
      serviceText5: string;
      serviceImg5: string;
      serviceButton5: string;
      serviceButtonUrl5: string;
      serviceTitle6: string;
      serviceText6: string;
      serviceImg6: string;
      serviceButton6: string;
      serviceButtonUrl6: string;
    };
  };
}

class ECE extends Component<OwnProps, OwnState> {
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
          programFeatureTitle1: '',
          programFeatureTitle2: '',
          programFeatureTitle3: '',
          programFeatureText1: '',
          programFeatureText2: '',
          programFeatureText3: '',
          programFeatureImg1: '',
          programFeatureImg2: '',
          programFeatureImg3: '',
          serviceTitle1: '',
          serviceText1: '',
          serviceImg1: '',
          serviceButton1: '',
          serviceButtonUrl1: '',
          serviceTitle2: '',
          serviceText2: '',
          serviceImg2: '',
          serviceButton2: '',
          serviceButtonUrl2: '',
          serviceTitle3: '',
          serviceText3: '',
          serviceImg3: '',
          serviceButton3: '',
          serviceButtonUrl3: '',
          serviceTitle4: '',
          serviceText4: '',
          serviceImg4: '',
          serviceButton4: '',
          serviceButtonUrl4: '',
          serviceTitle5: '',
          serviceText5: '',
          serviceImg5: '',
          serviceButton5: '',
          serviceButtonUrl5: '',
          serviceTitle6: '',
          serviceText6: '',
          serviceImg6: '',
          serviceButton6: '',
          serviceButtonUrl6: '',
        },
      },
    };
  }
  componentDidMount() {
    let dataURL = 'http://localhost/wp-json/wp/v2/pages/242';
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
        <ProgramLogosSection logo1={cosLogo} logo2={hoikupediaLogo} />
        <Heading2>{data.programTitle}</Heading2>
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
        <MainServicesSection h2={Titles.mainService}>
          <ServiceBox
            title={data.serviceTitle1}
            img={school}
            imgAlt={data.serviceTitle1}
            buttonText={data.serviceButton1}
            link={data.serviceButtonUrl1}
          >
            <div dangerouslySetInnerHTML={{ __html: data.serviceText1 }} />
          </ServiceBox>
          <ServiceBox
            title={data.serviceTitle2}
            img={school}
            imgAlt={data.serviceTitle2}
            buttonText={data.serviceButton2}
            link={data.serviceButtonUrl2}
          >
            <div dangerouslySetInnerHTML={{ __html: data.serviceText2 }} />
          </ServiceBox>
          <ServiceBox
            title={data.serviceTitle3}
            img={school}
            imgAlt={data.serviceTitle3}
            buttonText={data.serviceButton3}
            link={data.serviceButtonUrl3}
          >
            <div dangerouslySetInnerHTML={{ __html: data.serviceText3 }} />
          </ServiceBox>
          <ServiceBox
            title={data.serviceTitle4}
            img={school}
            imgAlt={data.serviceTitle4}
            buttonText={data.serviceButton4}
            link={data.serviceButtonUrl4}
          >
            <div dangerouslySetInnerHTML={{ __html: data.serviceText4 }} />
          </ServiceBox>
          <ServiceBox
            title={data.serviceTitle5}
            img={school}
            imgAlt={data.serviceTitle5}
            buttonText={data.serviceButton5}
            link={data.serviceButtonUrl5}
          >
            <div dangerouslySetInnerHTML={{ __html: data.serviceText5 }} />
          </ServiceBox>
          <ServiceBox
            title={data.serviceTitle6}
            img={school}
            imgAlt={data.serviceTitle6}
            buttonText={data.serviceButton6}
            link={data.serviceButtonUrl6}
          >
            <div dangerouslySetInnerHTML={{ __html: data.serviceText6 }} />
          </ServiceBox>
        </MainServicesSection>
        <BottomSection text={BottomSectionText.patern1}>
          <Button theme={{ main: '23.7rem' }}>
            {buttonText.freeConsulting}
          </Button>
        </BottomSection>
      </PageBaseLayout>
    );
  }
}
export default ECE;
