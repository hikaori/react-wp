import React, { Component, Fragment } from 'react';

import { PageBaseLayout, PageDescription, ProgramContainer } from '../..';
import { getData, BreadTreeElement } from '../../../utile/PageApi';
import { BottomSectionText } from '../../../constants/BottomSectionText';
import { buttonText } from '../../../constants/buttonText';
import StepBox from './StepsSection';
import colors from '../../colors';

type PageDataType = {
  title: { rendered: string };
  acf: {
    fv1200_400: string;
    subtitle: string;
    pageDescription: string;
    stepTitle: string;
    step1Title: string;
    step1color: string;
    step1Text: string;
    step1Img: { url: string };
    step2Title: string;
    step2color: string;
    step2Text: string;
    step2Img: { url: string };
    step3Title: string;
    step3color: string;
    step3Text: string;
    step3Img: { url: string };
  };
  slug: string;
  parent: number;
};

interface OwnProps {}
interface OwnState {
  data: PageDataType;
  breadTreeElements: BreadTreeElement[];
}

class Program extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      data: {
        title: { rendered: '' },
        acf: {
          fv1200_400: '',
          subtitle: '',
          pageDescription: '',
          stepTitle: '',
          step1Title: '',
          step1color: '',
          step1Text: '',
          step1Img: { url: '' },
          step2Title: '',
          step2color: '',
          step2Text: '',
          step2Img: { url: '' },
          step3Title: '',
          step3color: '',
          step3Text: '',
          step3Img: { url: '' },
        },
        slug: '',
        parent: 0,
      },
      breadTreeElements: [],
    };
  }

  async createData() {
    let pageId = 236;
    const state = await getData<PageDataType>(pageId);
    this.setState(state);
  }

  componentDidMount() {
    this.createData();
  }

  render() {
    let data = this.state.data.acf;
    let title = this.state.data.title.rendered;
    return (
      <Fragment>
        <PageBaseLayout
          BreadTreeElements={this.state.breadTreeElements}
          imgURL={data.fv1200_400}
          title={title}
          subTitle={data.subtitle}
          bottomSectionText={BottomSectionText.pattern1}
          bottomSectionColor={colors.lightGray}
          bottomButtonText={buttonText.freeConsulting}
          bottomButtonSize={'23.7rem'}
        >
          <PageDescription>
            <div dangerouslySetInnerHTML={{ __html: data.pageDescription }} />
          </PageDescription>
          <StepBox
            mainTitle={data.stepTitle}
            step1Title={data.step1Title}
            step1color={data.step1color}
            step1Text={data.step1Text}
            step1Img={data.step1Img.url}
            step2Title={data.step2Title}
            step2color={data.step2color}
            step2Text={data.step2Text}
            step2Img={data.step2Img.url}
            step3Title={data.step3Title}
            step3color={data.step3color}
            step3Text={data.step3Text}
            step3Img={data.step3Img.url}
          />
          <ProgramContainer />
        </PageBaseLayout>
      </Fragment>
    );
  }
}
export default Program;
