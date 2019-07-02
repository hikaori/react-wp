import React, { Component, Fragment } from 'react';

import {
  PageBaseLayout,
  FirstSection,
  BottomSection,
  Button,
  ProgramContainer,
} from '../..';
import { BottomSectionText } from '../../../constants/BottomSectionText';
import { buttonText } from '../../../constants/buttonText';
import StepBox from './StepsSection';

class Program extends Component {
  TextImg = 'string ..//';
  render() {
    return (
      <Fragment>
        <PageBaseLayout imgURL={this.TextImg} title={'運営事業'}>
          <FirstSection>
            <div>
              COSはカナダに来る全ての皆様に、カナダに住むという選択肢も選べるプランのご提案をいたします。
            </div>
            <div>
              専門分野の知識、移民法の正しい理解、現地でのサポート体制により、異国の地での成功を
              全面的にサポートいたします。
            </div>
          </FirstSection>
          <StepBox
            title={'現地サポート体制 × 業界とのつながり × 移民コンサルティング'}
          />
          <ProgramContainer />
          <BottomSection text={BottomSectionText.patern1}>
            <Button theme={{ main: '23.7rem' }}>
              {buttonText.freeConsulting}
            </Button>
          </BottomSection>
        </PageBaseLayout>
      </Fragment>
    );
  }
}
export default Program;
