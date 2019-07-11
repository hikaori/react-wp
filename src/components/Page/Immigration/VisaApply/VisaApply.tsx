import React, { Component } from 'react';
import styled from 'styled-components';

import {
  PageBaseLayout,
  ImagePluTextBox,
  BottomSection,
  Button,
} from '../../..';
import { buttonText } from '../../../../constants/buttonText';
import { BottomSectionText } from '../../../../constants/BottomSectionText';
import { Link } from 'react-router-dom';
import ProgramBox from './ProgramBox';
import { media } from '../../../../utile/Helper';

const ButtonDiv = styled.div`
  ${media.tablet`text-align: center;`}
  & button {
    ${media.tablet`margin-top: 0;margin-bottom:3.2rem`}
  }
`;

interface OwnProps {}
interface OwnState {
  data: {
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
  };
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
      },
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
  componentDidMount() {
    let pageId = 640;
    let dataURL = `http://localhost/wp-json/wp/v2/pages/${pageId}`;
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
        });
      });
  }

  render() {
    let data = this.state.data.acf;
    let title = this.state.data.title.rendered;

    return (
      <PageBaseLayout
        imgURL={data.fv1200_400}
        title={title}
        subTitle={data.subtitle}
      >
        <ImagePluTextBox
          imgURL={data.pageDescriptionImg}
          alt={title}
          isImgRightSide={false}
        >
          <div dangerouslySetInnerHTML={{ __html: data.pageDescriptionText }} />
          <ButtonDiv>
            <Link to={data.pageDescriptionButtonUrl}>
              <Button theme={{ main: '23.7rem' }}>
                {data.pageDescriptionButtonText}
              </Button>
            </Link>
          </ButtonDiv>
        </ImagePluTextBox>
        <ProgramBox
          skilledWorkerData={this.createSkilledWorkerData(data)}
          internationalGraduateData={this.createInternationalGraduateData(data)}
          cecData={this.createCECData(data)}
          fswData={this.createFSWData(data)}
        />

        <BottomSection
          text={BottomSectionText.pattern1}
          backgroundColor={'#fff'}
        >
          <Button theme={{ main: '23.7rem' }}>
            {buttonText.freeConsulting}
          </Button>
        </BottomSection>
      </PageBaseLayout>
    );
  }
}
export default VisaApply;
