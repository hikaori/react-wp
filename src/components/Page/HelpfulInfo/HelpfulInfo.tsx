import React, { Component } from 'react';

import { PageBaseLayout } from '../..';
import { getData, BreadTreeElement } from '../../../utile/PageApi';
import { buttonText } from '../../../constants/buttonText';
import { BottomSectionText } from '../../../constants/BottomSectionText';
import HelpfulInfoContent from '../HelpfulInfo/HelpfulInfoContent';

type PageDataType = {
  title: { rendered: string };
  acf: {
    fv1200_400: string;
    subtitle: string;
    pageDescription: string;
    ourServiceApply1Title: string;
    ourServiceApply1Text: string;
    ourServiceApply1Img: string;
    ourServiceApply1ButtonText: string;
    ourServiceApply1ButtonLink: string;
    ourServiceApply2Title: string;
    ourServiceApply2Text: string;
    ourServiceApply2Img: string;
    ourServiceApply2ButtonText: string;
    ourServiceApply2ButtonLink: string;
    ourServiceApply3Title: string;
    ourServiceApply3Img: string;
    ourServiceApply3Text: string;
    ourServiceApply3ButtonText: string;
    ourServiceApply3ButtonLink: string;
    LifeUsefulInfoApply1Title: string;
    LifeUsefulInfoApply1Img: string;
    LifeUsefulInfoApply1Text: string;
    LifeUsefulInfoApply1ButtonText: string;
    LifeUsefulInfoApply1ButtonLink: string;
    LifeUsefulInfoApply2Title: string;
    LifeUsefulInfoApply2Img: string;
    LifeUsefulInfoApply2Text: string;
    LifeUsefulInfoApply2ButtonText: string;
    LifeUsefulInfoApply2ButtonLink: string;
    visaApply1Title: string;
    visaApply1Img: string;
    visaApply1Text: string;
    visaApply1ButtonText: string;
    visaApply1ButtonLink: string;
    visaApply2Title: string;
    visaApply2Img: string;
    visaApply2Text: string;
    visaApply2ButtonText: string;
    visaApply2ButtonLink: string;
    visaApply3Title: string;
    visaApply3Text: string;
    visaApply3Img: string;
    visaApply3ButtonText: string;
    visaApply3ButtonLink: string;
    visaApply4Title: string;
    visaApply4Img: string;
    visaApply4Text: string;
    visaApply4ButtonText: string;
    visaApply4ButtonLink: string;
  };
  slug: string;
  parent: number;
};
interface OwnProps {}
interface OwnState {
  data: PageDataType;
  breadTreeElements: BreadTreeElement[];
}

class HelpfulInfo extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      data: {
        title: { rendered: '' },
        acf: {
          fv1200_400: '',
          subtitle: '',
          pageDescription: '',
          ourServiceApply1Title: '',
          ourServiceApply1Text: '',
          ourServiceApply1Img: '',
          ourServiceApply1ButtonText: '',
          ourServiceApply1ButtonLink: '',
          ourServiceApply2Title: '',
          ourServiceApply2Text: '',
          ourServiceApply2Img: '',
          ourServiceApply2ButtonText: '',
          ourServiceApply2ButtonLink: '',
          ourServiceApply3Title: '',
          ourServiceApply3Img: '',
          ourServiceApply3Text: '',
          ourServiceApply3ButtonText: '',
          ourServiceApply3ButtonLink: '',
          LifeUsefulInfoApply1Title: '',
          LifeUsefulInfoApply1Img: '',
          LifeUsefulInfoApply1Text: '',
          LifeUsefulInfoApply1ButtonText: '',
          LifeUsefulInfoApply1ButtonLink: '',
          LifeUsefulInfoApply2Title: '',
          LifeUsefulInfoApply2Img: '',
          LifeUsefulInfoApply2Text: '',
          LifeUsefulInfoApply2ButtonText: '',
          LifeUsefulInfoApply2ButtonLink: '',
          visaApply1Title: '',
          visaApply1Img: '',
          visaApply1Text: '',
          visaApply1ButtonText: '',
          visaApply1ButtonLink: '',
          visaApply2Title: '',
          visaApply2Img: '',
          visaApply2Text: '',
          visaApply2ButtonText: '',
          visaApply2ButtonLink: '',
          visaApply3Title: '',
          visaApply3Text: '',
          visaApply3Img: '',
          visaApply3ButtonText: '',
          visaApply3ButtonLink: '',
          visaApply4Title: '',
          visaApply4Img: '',
          visaApply4Text: '',
          visaApply4ButtonText: '',
          visaApply4ButtonLink: '',
        },
        slug: '',
        parent: 0,
      },
      breadTreeElements: [],
    };
  }

  async createData() {
    let pageId = 1187;
    const state = await getData<PageDataType>(pageId);
    this.setState(state);
  }

  componentDidMount() {
    this.createData();
  }

  render() {
    let data = this.state.data.acf;
    let title = this.state.data.title;

    const serviceApplyData = [
      {
        title: data.ourServiceApply1Title,
        img: data.ourServiceApply1Img,
        text: data.ourServiceApply1Text,
        link: data.ourServiceApply1ButtonLink,
        buttonText: data.ourServiceApply1ButtonText,
      },
      {
        title: data.ourServiceApply2Title,
        img: data.ourServiceApply2Img,
        text: data.ourServiceApply2Text,
        link: data.ourServiceApply2ButtonLink,
        buttonText: data.ourServiceApply2ButtonText,
      },
      {
        title: data.ourServiceApply3Title,
        img: data.ourServiceApply3Img,
        text: data.ourServiceApply3Text,
        link: data.ourServiceApply3ButtonLink,
        buttonText: data.ourServiceApply3ButtonText,
      },
    ];
    const lifeUsefulInfoApplyData = [
      {
        title: data.LifeUsefulInfoApply1Title,
        img: data.LifeUsefulInfoApply1Img,
        text: data.LifeUsefulInfoApply1Text,
        link: data.LifeUsefulInfoApply1ButtonLink,
        buttonText: data.LifeUsefulInfoApply1ButtonText,
      },
      {
        title: data.LifeUsefulInfoApply2Title,
        img: data.LifeUsefulInfoApply2Img,
        text: data.LifeUsefulInfoApply2Text,
        link: data.LifeUsefulInfoApply2ButtonLink,
        buttonText: data.LifeUsefulInfoApply2ButtonText,
      },
    ];

    const visaApply1 = [
      {
        title: data.visaApply1Title,
        img: data.visaApply1Img,
        text: data.visaApply1Text,
        link: data.visaApply1ButtonLink,
        buttonText: data.visaApply1ButtonText,
      },
      {
        title: data.visaApply2Title,
        img: data.visaApply2Img,
        text: data.visaApply2Text,
        link: data.visaApply2ButtonLink,
        buttonText: data.visaApply2ButtonText,
      },
    ];
    const visaApply2 = [
      {
        title: data.visaApply3Title,
        img: data.visaApply3Img,
        text: data.visaApply3Text,
        link: data.visaApply3ButtonLink,
        buttonText: data.visaApply3ButtonText,
      },
      {
        title: data.visaApply4Title,
        img: data.visaApply4Img,
        text: data.visaApply4Text,
        link: data.visaApply4ButtonLink,
        buttonText: data.visaApply4ButtonText,
      },
    ];

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
        <HelpfulInfoContent
          serviceApplyData={serviceApplyData}
          lifeUsefulInfoApplyData={lifeUsefulInfoApplyData}
          visaApply1={visaApply1}
          visaApply2={visaApply2}
        />
      </PageBaseLayout>
    );
  }
}
export default HelpfulInfo;
