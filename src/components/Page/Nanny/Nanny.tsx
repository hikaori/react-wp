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
import { getData, BreadTreeElement } from '../../../utile/PageApi';

import cosLogo from '../../../assets/images/COS_Educational_Consulting_Inc_Logo_Jap.svg';
import NannyFromJapanLogoHorizontal from '../../../assets/logo/NannyFromJapanLogoHorizontal.svg';
import { Titles } from '../../../constants/Titles';
import { buttonText } from '../../../constants/buttonText';
import { BottomSectionText } from '../../../constants/BottomSectionText';
import CreateServiceDom from '../../Common/MainServicesSection/CreateServiceDom';

type PageDataType = {
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
  slug: string;
  parent: number;
};

interface OwnProps {}
interface OwnState {
  data: PageDataType;
  breadTreeElements: BreadTreeElement[];
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
        slug: '',
        parent: 0,
      },
      breadTreeElements: [],
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

  async createData() {
    let pageId = 435;
    const state = await getData<PageDataType>(pageId);
    this.setState(state);
  }

  componentDidMount() {
    this.createData();
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
    let categoryNum: number = 6;

    return (
      <PageBaseLayout
        BreadTreeElements={this.state.breadTreeElements}
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
          <CreateServiceDom
            servicesData={servicesData}
            categoryNum={categoryNum}
          />
        </MainServicesSection>
      </PageBaseLayout>
    );
  }
}
export default Nanny;
