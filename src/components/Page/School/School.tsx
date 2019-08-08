import React, { Component } from 'react';
import { getData, BreadTreeElement } from '../../../utile/PageApi';
import { PageBaseLayout, PageDescription } from '../..';
import { buttonText } from '../../../constants/buttonText';
import { BottomSectionText } from '../../../constants/BottomSectionText';
import SchoolProgramBox from './SchoolProgramBox';

type PageDataType = {
  title: { rendered: string };
  acf: {
    fv1200_400: string;
    subtitle: string;
    pageDescription: string;
    programTitle1: string;
    programSubtitle1: string;
    programColor1: string;
    programImg1: string;
    programLink1: string;
    programTitle2: string;
    programSubtitle2: string;
    programColor2: string;
    programImg2: string;
    programLink2: string;
    programTitle3: string;
    programSubtitle3: string;
    programColor3: string;
    programImg3: string;
    programLink3: string;
    programTitle4: string;
    programSubtitle4: string;
    programColor4: string;
    programImg4: string;
    programLink4: string;
  };
  slug: string;
  parent: number;
};

interface OwnProps {}
interface OwnState {
  data: PageDataType;
  breadTreeElements: BreadTreeElement[];
}

class School extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      data: {
        title: { rendered: '' },
        acf: {
          fv1200_400: '',
          subtitle: '',
          pageDescription: '',
          programTitle1: '',
          programSubtitle1: '',
          programColor1: '',
          programImg1: '',
          programLink1: '',
          programTitle2: '',
          programSubtitle2: '',
          programColor2: '',
          programImg2: '',
          programLink2: '',
          programTitle3: '',
          programSubtitle3: '',
          programColor3: '',
          programImg3: '',
          programLink3: '',
          programTitle4: '',
          programSubtitle4: '',
          programColor4: '',
          programImg4: '',
          programLink4: '',
        },
        slug: '',
        parent: 0,
      },
      breadTreeElements: [],
    };
  }

  async createData() {
    let pageId = 689;
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
        <SchoolProgramBox data={data} />
      </PageBaseLayout>
    );
  }
}
export default School;
