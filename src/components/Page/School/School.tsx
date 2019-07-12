import React, { Component } from 'react';

import { PageBaseLayout, PageDescription, BottomSection, Button } from '../..';
import { buttonText } from '../../../constants/buttonText';
import { BottomSectionText } from '../../../constants/BottomSectionText';
import ProgramBox from './ProgramBox';

interface OwnProps {}
interface OwnState {
  data: {
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
    };
  };
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
        },
      },
    };
  }
  componentDidMount() {
    let pageId = 689;
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
    let title = this.state.data.title;

    return (
      <PageBaseLayout
        imgURL={data.fv1200_400}
        title={title.rendered}
        subTitle={data.subtitle}
      >
        <PageDescription>
          <div dangerouslySetInnerHTML={{ __html: data.pageDescription }} />
        </PageDescription>
        <ProgramBox data={data} />
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
export default School;
