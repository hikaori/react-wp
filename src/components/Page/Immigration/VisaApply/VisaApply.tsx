import React, { Component } from 'react';
import styled from 'styled-components';

import { PageBaseLayout, ImagePluTextBox, Button, LinkHandle } from '../../..';
import { getData, BreadTreeElement } from '../../../../utile/PageApi';
import { buttonText } from '../../../../constants/buttonText';
import { BottomSectionText } from '../../../../constants/BottomSectionText';
import ProgramBox from './ProgramBox';
import { media } from '../../../../utile/Helper';

const ButtonDiv = styled.div`
  ${media.tablet`text-align: center;`}
  & button {
    ${media.tablet`margin-top: 0;margin-bottom:3.2rem`}
  }
`;

type PageDataType = {
  title: { rendered: string };
  acf: {
    fv1200_400: string;
    subtitle: string;
    pageDescription: string;
    pageDescriptionImg: string;
    pageDescriptionText: string;
    pageDescriptionButtonUrl: string;
    pageDescriptionButtonText: string;
    skilledWorkerDescription: string;
    skilledWorkerTarget: string[];
    skilledWorkerApplyCondition: string;
    skilledWorkerEmployerCondition: string;
    skilledWorkerCaution: string;
    internationalGraduateTarget: string[];
    internationalGraduateDescription: string;
    internationalGraduateApplyCondition: string;
    internationalGraduateEmployerCondition: string;
    internationalGraduate: string;
    pilotProgramDescription: string;
    pilotProgramPoints: string;
    CECTarget: string[];
    CECDescription: string;
    CECApplyCondition: string;
    CECCaution: string;
    FSWTarget: string[];
    FSWDescription: string;
    FSWApplyCondition: string;
    FSWCaution: string;
  };
  slug: string;
  parent: number;
};

interface OwnProps {}
interface OwnState {
  data: PageDataType;
  breadTreeElements: BreadTreeElement[];
}

class VisaApply extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      data: {
        title: { rendered: '' },
        acf: {
          fv1200_400: '',
          subtitle: '',
          pageDescription: '',
          pageDescriptionImg: '',
          pageDescriptionText: '',
          pageDescriptionButtonUrl: '',
          pageDescriptionButtonText: '',
          skilledWorkerDescription: '',
          skilledWorkerTarget: [],
          skilledWorkerApplyCondition: '',
          skilledWorkerEmployerCondition: '',
          skilledWorkerCaution: '',
          internationalGraduateTarget: [],
          internationalGraduateDescription: '',
          internationalGraduateApplyCondition: '',
          internationalGraduateEmployerCondition: '',
          internationalGraduate: '',
          pilotProgramDescription: '',
          pilotProgramPoints: '',
          CECTarget: [],
          CECDescription: '',
          CECApplyCondition: '',
          CECCaution: '',
          FSWTarget: [],
          FSWDescription: '',
          FSWApplyCondition: '',
          FSWCaution: '',
        },
        slug: '',
        parent: 0,
      },
      breadTreeElements: [],
    };
  }
  createSkilledWorkerData = (data: any) => {
    return {
      description: data.skilledWorkerDescription,
      target: data.skilledWorkerTarget,
      applyCondition: data.skilledWorkerApplyCondition,
      employerCondition: data.skilledWorkerEmployerCondition,
      caution: data.skilledWorkerCaution,
    };
  };
  createInternationalGraduateData = (data: any) => {
    return {
      description: data.internationalGraduateDescription,
      target: data.internationalGraduateTarget,
      applyCondition: data.internationalGraduateApplyCondition,
      employerCondition: data.internationalGraduateEmployerCondition,
      caution: data.internationalGraduateCaution,
      pilotDescription: data.pilotDescription,
      pilotPoints: data.pilotPoints,
    };
  };
  createCECData = (data: any) => {
    return {
      description: data.CECDescription,
      target: data.CECTarget,
      applyCondition: data.CECApplyCondition,
      caution: data.CECCaution,
    };
  };
  createFSWData = (data: any) => {
    return {
      description: data.FSWDescription,
      target: data.FSWTarget,
      applyCondition: data.FSWApplyCondition,
      caution: data.FSWCaution,
    };
  };

  async createData() {
    let pageId = 640;
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
      <PageBaseLayout
        BreadTreeElements={this.state.breadTreeElements}
        imgURL={data.fv1200_400}
        title={title}
        subTitle={data.subtitle}
        bottomSectionText={BottomSectionText.pattern1}
        bottomSectionColor={'#fff'}
        bottomButtonText={buttonText.freeConsulting}
        bottomButtonSize={'23.7rem'}
      >
        <ImagePluTextBox
          imgURL={data.pageDescriptionImg}
          alt={title}
          isImgRightSide={false}
          classname={null}
        >
          <div dangerouslySetInnerHTML={{ __html: data.pageDescriptionText }} />
          <ButtonDiv>
            <Button theme={{ main: '23.7rem' }}>
              <LinkHandle to={data.pageDescriptionButtonUrl}>
                {data.pageDescriptionButtonText}
              </LinkHandle>
            </Button>
          </ButtonDiv>
        </ImagePluTextBox>
        <ProgramBox
          skilledWorkerData={this.createSkilledWorkerData(data)}
          internationalGraduateData={this.createInternationalGraduateData(data)}
          cecData={this.createCECData(data)}
          fswData={this.createFSWData(data)}
        />
      </PageBaseLayout>
    );
  }
}
export default VisaApply;
