import React, { Component } from 'react';

import {
  PageBaseLayout,
  PageDescription,
  ProgramLogosSection,
  Heading2,
  Heading3,
  ImagePluTextBox,
  MainServicesSection,
} from '../..';
import { serviceDom } from '../../Common/MainServicesSection/CreateServiceDom';
import cosLogo from '../../../assets/images/COS_Educational_Consulting_Inc_Logo_Jap.svg';
import NannyFromJapanLogoHorizontal from '../../../assets/logo/NannyFromJapanLogoHorizontal.svg';
import { Titles } from '../../../constants/Titles';
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

class Nanny extends Component<OwnProps, OwnState> {
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
    let pageId = 435;
    let dataURL = `http://localhost/wp-json/wp/v2/pages/${pageId}`;
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
        });
      });
    let postNum = 19;
    let serviceDataURL = `http://localhost/wp-json/wp/v2/services/?per_page=${postNum}`;
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
    const categoryNum: number = 6;
    let eceServicesData = servicesData.filter(x =>
      x.service_category.includes(categoryNum),
    );
    let orderedEceServicesData = eceServicesData.sort(function(a, b) {
      return Number(a.acf.service_order) < Number(b.acf.service_order) ? -1 : 1;
    });

    return (
      <PageBaseLayout
        imgURL={data.fv1200_400}
        title={title.rendered}
        subTitle={data.subtitle}
        bottomSectionText={BottomSectionText.pattern1}
        bottomSectionColor={'#fff'}
        bottomButtonText={buttonText.freeConsulting}
        bottomButtonSize={'23.7rem'}
      >
        <PageDescription>
          <div dangerouslySetInnerHTML={{ __html: data.pageDescription }} />
        </PageDescription>
        <ProgramLogosSection
          logo1={cosLogo}
          logo2={NannyFromJapanLogoHorizontal}
        />
        <Heading2>{data.programTitle}</Heading2>
        <div dangerouslySetInnerHTML={{ __html: data.programText }} />
        <ImagePluTextBox
          imgURL={data.programFeatureImg1}
          alt={data.programFeatureTitle1}
          isImgRightSide={true}
          classname={null}
        >
          <Heading3>{data.programFeatureTitle1}</Heading3>
          <div dangerouslySetInnerHTML={{ __html: data.programFeatureText1 }} />
        </ImagePluTextBox>
        <ImagePluTextBox
          imgURL={data.programFeatureImg2}
          alt={data.programFeatureTitle2}
          isImgRightSide={false}
          classname={null}
        >
          <Heading3>{data.programFeatureTitle2}</Heading3>
          <div dangerouslySetInnerHTML={{ __html: data.programFeatureText2 }} />
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
      </PageBaseLayout>
    );
  }
}
export default Nanny;
