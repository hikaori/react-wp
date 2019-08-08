import React, { Component } from 'react';

import { getData, BreadTreeElement } from '../../../../utile/PageApi';
import { PageBaseLayout, PageDescription } from '../../..';
import { buttonText } from '../../../../constants/buttonText';
import { BottomSectionText } from '../../../../constants/BottomSectionText';
import SummerCampSection from './SummerCampSection';

type PageDataType = {
  title: { rendered: string };
  acf: {
    fv1200_400: string;
    subtitle: string;
    pageDescription: string;
    summercampDescriptionTitle: string;
    summercampDescriptionImg: string;
    summercampDescriptionText: string;
    summercampProgram1Title: string;
    summercampProgram1Table: string;
    summercampProgram1Img1: string;
    summercampProgram1Img2: string;
    summercampProgram1Img3: string;
    summercampProgram2Title: string;
    summercampProgram2Table: string;
    summercampProgram2Img1: string;
    summercampProgram2Img2: string;
    summercampProgram2Img3: string;
    summercampProgram2Img4: string;
    summercampProgram3Title: string;
    summercampProgram3Table: string;
    summercampProgram3Img1: string;
    summercampProgram3Img2: string;
    summercampProgram3Img3: string;
    summercampProgram3Img4: string;
    summercampProgram4Title: string;
    summercampProgram4Table: string;
    summercampProgram4Img1: string;
    summercampProgram4Img2: string;
    summercampProgram4Img3: string;
    summercampProgram4Img4: string;
    summercampProgram5Title: string;
    summercampProgram5Table: string;
    summercampProgram5Img1: string;
    summercampProgram5Img2: string;
    summercampProgram5Img3: string;
    summercampProgram5Img4: string;
  };
  slug: string;
  parent: number;
};

interface OwnProps {}
interface OwnState {
  data: PageDataType;
  breadTreeElements: BreadTreeElement[];
}

class SummerCamp extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      data: {
        title: { rendered: '' },
        acf: {
          fv1200_400: '',
          subtitle: '',
          pageDescription: '',
          summercampDescriptionTitle: '',
          summercampDescriptionImg: '',
          summercampDescriptionText: '',
          summercampProgram1Title: '',
          summercampProgram1Table: '',
          summercampProgram1Img1: '',
          summercampProgram1Img2: '',
          summercampProgram1Img3: '',
          summercampProgram2Title: '',
          summercampProgram2Table: '',
          summercampProgram2Img1: '',
          summercampProgram2Img2: '',
          summercampProgram2Img3: '',
          summercampProgram2Img4: '',
          summercampProgram3Title: '',
          summercampProgram3Table: '',
          summercampProgram3Img1: '',
          summercampProgram3Img2: '',
          summercampProgram3Img3: '',
          summercampProgram3Img4: '',
          summercampProgram4Title: '',
          summercampProgram4Table: '',
          summercampProgram4Img1: '',
          summercampProgram4Img2: '',
          summercampProgram4Img3: '',
          summercampProgram4Img4: '',
          summercampProgram5Title: '',
          summercampProgram5Table: '',
          summercampProgram5Img1: '',
          summercampProgram5Img2: '',
          summercampProgram5Img3: '',
          summercampProgram5Img4: '',
        },
        slug: '',
        parent: 0,
      },
      breadTreeElements: [],
    };
  }

  async createData() {
    let pageId = 848;
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
        bottomSectionColor={'#fff'}
        bottomButtonText={buttonText.freeConsulting}
        bottomButtonSize={'23.7rem'}
      >
        <PageDescription>
          <div dangerouslySetInnerHTML={{ __html: data.pageDescription }} />
        </PageDescription>
        <SummerCampSection
          summercampDescriptionTitle={data.summercampDescriptionTitle}
          summercampDescriptionImg={data.summercampDescriptionImg}
          summercampDescriptionText={data.summercampDescriptionText}
          program1={{
            title: data.summercampProgram1Title,
            tableShortCode: data.summercampProgram1Table,
            imgArray: [
              data.summercampProgram1Img1,
              data.summercampProgram1Img2,
              data.summercampProgram1Img3,
            ],
            classname: '',
          }}
          program2={{
            title: data.summercampProgram2Title,
            tableShortCode: data.summercampProgram2Table,
            imgArray: [
              data.summercampProgram2Img1,
              data.summercampProgram2Img2,
              data.summercampProgram2Img3,
              data.summercampProgram2Img4,
            ],
            classname: 'backGray',
          }}
          program3={{
            title: data.summercampProgram3Title,
            tableShortCode: data.summercampProgram3Table,
            imgArray: [
              data.summercampProgram3Img1,
              data.summercampProgram3Img2,
              data.summercampProgram3Img3,
              data.summercampProgram3Img4,
            ],
            classname: '',
          }}
          program4={{
            title: data.summercampProgram4Title,
            tableShortCode: data.summercampProgram4Table,
            imgArray: [
              data.summercampProgram4Img1,
              data.summercampProgram4Img2,
              data.summercampProgram4Img3,
              data.summercampProgram4Img4,
            ],
            classname: 'backGray',
          }}
          program5={{
            title: data.summercampProgram5Title,
            tableShortCode: data.summercampProgram5Table,
            imgArray: [
              data.summercampProgram5Img1,
              data.summercampProgram5Img2,
              data.summercampProgram5Img3,
              data.summercampProgram5Img4,
            ],
            classname: '',
          }}
        />
      </PageBaseLayout>
    );
  }
}
export default SummerCamp;
