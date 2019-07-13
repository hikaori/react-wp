import React, { Component, Fragment } from 'react';

import {
  PageBaseLayout,
  PageDescription,
  BottomSection,
  Button,
} from '../../..';
import SchoolList from './SchoolList';
import { BottomSectionText } from '../../../../constants/BottomSectionText';
import { buttonText } from '../../../../constants/buttonText';
import colors from '../../../colors';

interface OwnProps {}
interface OwnState {
  data: {
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
  };
}

class Teen extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      data: {
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
      },
    };
  }

  componentDidMount() {
    let dataURL = 'http://localhost/wp-json/wp/v2/pages/236';
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
    return (
      <Fragment>
        <PageBaseLayout
          imgURL={data.fv1200_400}
          title={'運営事業'}
          subTitle={
            '各分野のプロと一緒に考える、弊社の海外留学・海外就職・移民プランニング'
          }
        >
          <PageDescription>
            <div dangerouslySetInnerHTML={{ __html: data.pageDescription }} />
          </PageDescription>
          <SchoolList />
          <BottomSection
            text={BottomSectionText.pattern1}
            backgroundColor={colors.lightGray}
          >
            <Button theme={{ main: '23.7rem' }}>
              {buttonText.freeConsulting}
            </Button>
          </BottomSection>
        </PageBaseLayout>
      </Fragment>
    );
  }
}
export default Teen;
