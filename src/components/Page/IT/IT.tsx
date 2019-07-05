import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  PageBaseLayout,
  PageDescription,
  ProgramLogosSection,
  Heading2,
  Heading3,
  ImagePluTextBox,
  MainServicesSection,
  BottomSection,
  Button,
} from '../..';
import { serviceDom } from '../../Common/MainServicesSection/CreateServiceDom';
import cosLogo from '../../../assets/images/COS_Educational_Consulting_Inc_Logo_Jap.svg';
import FrogLogoHorizontal from '../../../assets/logo/FrogLogoHorizontal.svg';
import { Titles } from '../../../constants/Titles';
import { buttonText } from '../../../constants/buttonText';
import { BottomSectionText } from '../../../constants/BottomSectionText';
import { media } from '../../../utile/Helper';

const ButtonDiv = styled.div`
  ${media.tablet`text-align: center;`}
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
      serviceButtonText3: string;
      programFeatureButtonUrl3: string;
    };
  };
  servicesData: [
    {
      service_category: [number];
      acf: {
        serviceTitle: string;
        serviceText: string;
        serviceImg: { url: string };
        serviceButtonText: string;
        serviceButtonUrl: string;
        service_order: string;
      };
    }
  ];
}

class IT extends Component<OwnProps, OwnState> {
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
          serviceButtonText3: '',
          programFeatureButtonUrl3: '',
        },
      },
      servicesData: [
        {
          service_category: [0],
          acf: {
            serviceTitle: '',
            serviceText: '',
            serviceImg: { url: '' },
            serviceButtonText: '',
            serviceButtonUrl: '',
            service_order: '',
          },
        },
      ],
    };
  }
  componentDidMount() {
    let pageId = 327;
    let dataURL = `http://localhost/wp-json/wp/v2/pages/${pageId}`;
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
        });
      });
    let serviceDataURL = 'http://localhost/wp-json/wp/v2/services/';
    fetch(serviceDataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          servicesData: res,
        });
      });
  }

  render() {
    let data = this.state.data.acf;
    let title = this.state.data.title;
    let servicesData = this.state.servicesData;
    const categoryNum: number = 9;
    let eceServicesData = servicesData.filter(x =>
      x.service_category.includes(categoryNum),
    );
    let orderedEceServicesData = eceServicesData.sort(function(a, b) {
      return a.acf.service_order < b.acf.service_order ? -1 : 1;
    });

    return (
      <PageBaseLayout
        imgURL={data.fv1200_400}
        title={title.rendered}
        subTitle={data.subtitle}
      >
        <PageDescription>
          <div dangerouslySetInnerHTML={{ __html: data.pageDescription }} />
        </PageDescription>
        <ProgramLogosSection logo1={cosLogo} logo2={FrogLogoHorizontal} />
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
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: data.programFeatureText3 }}
            />
            <ButtonDiv>
              <Link to={data.programFeatureButtonUrl3}>
                <Button theme={{ main: '32.7rem' }}>
                  {data.serviceButtonText3}
                </Button>
              </Link>
            </ButtonDiv>
          </div>
        </ImagePluTextBox>
        <MainServicesSection h2={Titles.mainService}>
          {orderedEceServicesData.map((x, index) =>
            serviceDom(
              index,
              x.acf.serviceTitle,
              x.acf.serviceText,
              x.acf.serviceImg.url,
              x.acf.serviceButtonText,
              x.acf.serviceButtonUrl,
            ),
          )}
        </MainServicesSection>
        <BottomSection
          text={BottomSectionText.pattern1}
          backgroundColor={'#fff'}
        >
          <Button theme={{ main: '23.7rem' }}>
            {buttonText.freeConsulting}
          </Button>
        </BottomSection>
      </PageBaseLayout>
    );
  }
}
export default IT;
