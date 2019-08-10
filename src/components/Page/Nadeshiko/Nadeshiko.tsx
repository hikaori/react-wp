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
import { getCustomPostApi } from '../../../utile/CustomPostApi';
import { ServiceType } from '../../../type/serviceType';
import CreateServiceDom from '../../Common/MainServicesSection/CreateServiceDom';
import cosLogo from '../../../assets/images/COS_Educational_Consulting_Inc_Logo_Jap.svg';
import NadeshikoRyugakuLogo from '../../../assets/logo/NadeshikoRyugakuLogo.svg';
import { Titles } from '../../../constants/Titles';
import { buttonText } from '../../../constants/buttonText';
import { BottomSectionText } from '../../../constants/BottomSectionText';

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
  servicesData: [ServiceType];
}

class Nadeshiko extends Component<OwnProps, OwnState> {
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
    let pageId = 420;
    const state = await getData<PageDataType>(pageId);
    this.setState(state);
  }

  async createCustomPostData() {
    let SERVICE_CATEGORY_NUM = 5;
    const state = await getCustomPostApi(
      'services',
      'service_category',
      SERVICE_CATEGORY_NUM,
    );
    this.setState({ servicesData: state });
  }

  componentDidMount() {
    this.createData();
    this.createCustomPostData();
  }

  render() {
    let data = this.state.data.acf;
    let title = this.state.data.title;
    let servicesData = this.state.servicesData;

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
        <ProgramLogosSection logo1={cosLogo} logo2={NadeshikoRyugakuLogo} />
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
        <ImagePluTextBox
          imgURL={data.programFeatureImg3}
          alt={data.programFeatureTitle3}
          isImgRightSide={true}
          classname={null}
        >
          <Heading3>{data.programFeatureTitle3}</Heading3>
          <div dangerouslySetInnerHTML={{ __html: data.programFeatureText3 }} />
        </ImagePluTextBox>
        <MainServicesSection h2={Titles.mainService}>
          <CreateServiceDom servicesData={servicesData} />
        </MainServicesSection>
      </PageBaseLayout>
    );
  }
}
export default Nadeshiko;
