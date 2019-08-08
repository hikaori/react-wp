import React, { Component } from 'react';

import { PageBaseLayout, PageDescription } from '../..';
import { getData, BreadTreeElement } from '../../../utile/PageApi';
import { buttonText } from '../../../constants/buttonText';
import { BottomSectionText } from '../../../constants/BottomSectionText';
import Support from './Support';
import color from '../../colors';
import Price from './Price';

type PageDataType = {
  title: { rendered: string };
  acf: {
    fv1200_400: string;
    subtitle: string;
    pageDescription: string;
    service1Title: string;
    service1Step1Title: string;
    service1Step1Text: string;
    service1Step1Img: string;
    service1Step2Title: string;
    service1Step2Text: string;
    service1Step2Img: string;
    service1Step3Title: string;
    service1Step3Text: string;
    service1Step3Img: string;
    service1Step4Title: string;
    service1Step4Text: string;
    service1Step4Img: string;
    service2Title: string;
    service2Step1Title: string;
    service2Step1Text: string;
    service2Step1Img: string;
    service2Step2Title: string;
    service2Step2Text: string;
    service2Step2Img: string;
    service2Step3Title: string;
    service2Step3Text: string;
    service2Step3Img: string;
    service2Step4Title: string;
    service2Step4Text: string;
    service2Step4Img: string;
    service3Title: string;
    service3Step1Title: string;
    service3Step1Text: string;
    service3Step1Img: string;
    service3Step2Title: string;
    service3Step2Text: string;
    service3Step2Img: string;
    service3Step3Title: string;
    service3Step3Text: string;
    service3Step3Img: string;
    service1Description: string;
    service1Color: string;
    service2Description: string;
    service2Color: string;
    service3Description: string;
    service3Color: string;
    servicePriceTitle: string;
    servicePriceDescription: string;
    servicePriceTableShortCode: string;
  };
  slug: string;
  parent: number;
};

interface OwnProps {}
interface OwnState {
  data: PageDataType;
  breadTreeElements: BreadTreeElement[];
}

class ServicePrice extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      data: {
        title: { rendered: '' },
        acf: {
          fv1200_400: '',
          subtitle: '',
          pageDescription: '',
          service1Title: '',
          service1Step1Title: '',
          service1Step1Text: '',
          service1Step1Img: '',
          service1Step2Title: '',
          service1Step2Text: '',
          service1Step2Img: '',
          service1Step3Title: '',
          service1Step3Text: '',
          service1Step3Img: '',
          service1Step4Title: '',
          service1Step4Text: '',
          service1Step4Img: '',
          service2Title: '',
          service2Step1Title: '',
          service2Step1Text: '',
          service2Step1Img: '',
          service2Step2Title: '',
          service2Step2Text: '',
          service2Step2Img: '',
          service2Step3Title: '',
          service2Step3Text: '',
          service2Step3Img: '',
          service2Step4Title: '',
          service2Step4Text: '',
          service2Step4Img: '',
          service3Title: '',
          service3Step1Title: '',
          service3Step1Text: '',
          service3Step1Img: '',
          service3Step2Title: '',
          service3Step2Text: '',
          service3Step2Img: '',
          service3Step3Title: '',
          service3Step3Text: '',
          service3Step3Img: '',
          service1Description: '',
          service1Color: '',
          service2Description: '',
          service2Color: '',
          service3Description: '',
          service3Color: '',
          servicePriceTitle: '',
          servicePriceDescription: '',
          servicePriceTableShortCode: '',
        },
        slug: '',
        parent: 0,
      },
      breadTreeElements: [],
    };
  }

  async createData() {
    let pageId = 876;
    const state = await getData<PageDataType>(pageId);
    this.setState(state);
  }

  componentDidMount() {
    this.createData();
  }

  render() {
    let data = this.state.data.acf;
    let title = this.state.data.title;

    return (
      <PageBaseLayout
        BreadTreeElements={this.state.breadTreeElements}
        imgURL={data.fv1200_400}
        title={title.rendered}
        subTitle={data.subtitle}
        bottomSectionText={BottomSectionText.pattern1}
        bottomSectionColor={color.lightGray}
        bottomButtonText={buttonText.freeConsulting}
        bottomButtonSize={'23.7rem'}
      >
        <PageDescription>
          <div dangerouslySetInnerHTML={{ __html: data.pageDescription }} />
        </PageDescription>
        <Support
          step1Data={{
            serviceTitle: data.service1Title,
            serviceDescription: data.service1Description,
            color: data.service1Color,
            steps: [
              {
                title: data.service1Step1Title,
                text: data.service1Step1Text,
                img: data.service1Step1Img,
              },
              {
                title: data.service1Step2Title,
                text: data.service1Step2Text,
                img: data.service1Step2Img,
              },
              {
                title: data.service1Step3Title,
                text: data.service1Step3Text,
                img: data.service1Step3Img,
              },
              {
                title: data.service1Step4Title,
                text: data.service1Step4Text,
                img: data.service1Step4Img,
              },
            ],
          }}
          step2Data={{
            serviceTitle: data.service2Title,
            serviceDescription: data.service2Description,
            color: data.service2Color,
            steps: [
              {
                title: data.service2Step1Title,
                text: data.service2Step1Text,
                img: data.service2Step1Img,
              },
              {
                title: data.service2Step2Title,
                text: data.service2Step2Text,
                img: data.service2Step2Img,
              },
              {
                title: data.service2Step3Title,
                text: data.service2Step3Text,
                img: data.service2Step3Img,
              },
              {
                title: data.service2Step4Title,
                text: data.service2Step4Text,
                img: data.service2Step4Img,
              },
            ],
          }}
          step3Data={{
            serviceTitle: data.service3Title,
            serviceDescription: data.service3Description,
            color: data.service3Color,
            steps: [
              {
                title: data.service3Step1Title,
                text: data.service3Step1Text,
                img: data.service3Step1Img,
              },
              {
                title: data.service3Step2Title,
                text: data.service3Step2Text,
                img: data.service3Step2Img,
              },
              {
                title: data.service3Step3Title,
                text: data.service3Step3Text,
                img: data.service3Step3Img,
              },
            ],
          }}
        />
        <Price
          title={data.servicePriceTitle}
          description={data.servicePriceDescription}
          table={data.servicePriceTableShortCode}
        />
      </PageBaseLayout>
    );
  }
}
export default ServicePrice;
