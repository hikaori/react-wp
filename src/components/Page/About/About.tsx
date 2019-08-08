import React, { Component } from 'react';

import PageBaseLayout02 from '../../Common/PageBaseLayout02';
import { PageBaseLayout, PageDescription } from '../..';
import { buttonText } from '../../../constants/buttonText';
import { BottomSectionText } from '../../../constants/BottomSectionText';
import color from '../../colors';
import AboutCOSContents from './AboutCOSContents';
import { getData, BreadTreeElement } from '../../../utile/PageApi';

type PageDataType = {
  title: { rendered: string };
  acf: {
    fv1200_400: string;
    subtitle: string;
    pageDescription: string;
    title1: string;
    description: string;
    img: string;
    title2: string;
    boxTitle1: string;
    boxSubtitle1: string;
    BoxColor1: string;
    boxImg1: string;
    boxLink1: string;
    boxTitle2: string;
    boxSubtitle2: string;
    BoxColor2: string;
    boxImg2: string;
    boxLink2: string;
    boxTitle3: string;
    boxSubtitle3: string;
    BoxColor3: string;
    boxImg3: string;
    boxLink3: string;
  };
  slug: string;
  parent: number;
};

interface OwnProps {}
interface OwnState {
  data: PageDataType;
  breadTreeElements: BreadTreeElement[];
}

class AboutCOS extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      data: {
        title: { rendered: '' },
        acf: {
          fv1200_400: '',
          subtitle: '',
          pageDescription: '',
          title1: '',
          description: '',
          img: '',
          title2: '',
          boxTitle1: '',
          boxSubtitle1: '',
          BoxColor1: '',
          boxImg1: '',
          boxLink1: '',
          boxTitle2: '',
          boxSubtitle2: '',
          BoxColor2: '',
          boxImg2: '',
          boxLink2: '',
          boxTitle3: '',
          boxSubtitle3: '',
          BoxColor3: '',
          boxImg3: '',
          boxLink3: '',
        },
        slug: '',
        parent: 0,
      },
      breadTreeElements: [],
    };
  }

  componentDidMount() {
    getData<PageDataType>(1026).then(state => {
      this.setState(state);
    });
  }

  render() {
    let data = this.state.data.acf;
    let title = this.state.data.title;

    return (
      <PageBaseLayout02
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
        <AboutCOSContents
          img={data.img}
          title1={data.title1}
          text={data.description}
          title2={data.title2}
          box1Data={{
            title: data.boxTitle1,
            subTitle: data.boxSubtitle1,
            backgroundColor: data.BoxColor1,
            img: data.boxImg1,
            link: data.boxLink1,
          }}
          box2Data={{
            title: data.boxTitle2,
            subTitle: data.boxSubtitle2,
            backgroundColor: data.BoxColor2,
            img: data.boxImg2,
            link: data.boxLink2,
          }}
          box3Data={{
            title: data.boxTitle3,
            subTitle: data.boxSubtitle3,
            backgroundColor: data.BoxColor3,
            img: data.boxImg3,
            link: data.boxLink3,
          }}
        />
      </PageBaseLayout02>
    );
  }
}
export default AboutCOS;
