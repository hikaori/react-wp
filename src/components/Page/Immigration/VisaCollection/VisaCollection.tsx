import React, { Component } from 'react';
import styled from 'styled-components';

import { PageBaseLayout, PageDescription } from '../../..';
import { buttonText } from '../../../../constants/buttonText';
import { BottomSectionText } from '../../../../constants/BottomSectionText';
import colors from '../../../colors';
import VisaCollectionBox from './VisaCollectionBox';
import { media } from '../../../../utile/Helper';

const MainSectionDiv = styled.div`
  background-color: ${colors.lightGray};
  display: flex;
  margin-right: calc(((100vw - 100%) / 2) * -1);
  margin-left: calc(((100vw - 100%) / 2) * -1);
  padding: 80px 7.5rem;
  ${media.tablet`
  flex-direction: column;
  padding: 2.4rem 1.6rem;
  `}
`;
const CollectionDiv = styled.div`
  margin: 0 0.8rem;
  width: 50%;
  ${media.tablet`
  width: 100%;
  margin: 0rem;
  `}
`;

interface OwnProps {}
interface OwnState {
  data: {
    title: { rendered: string };
    acf: {
      fv1200_400: string;
      subtitle: string;
      pageDescription: string;
      visaTitle: string;
      visaTitle1: string;
      visaText1: string;
      visaTitle2: string;
      visaText2: string;
      visaTitle3: string;
      visaText3: string;
      permitTitle: string;
      permitTitle1: string;
      permitText1: string;
      permitTitle2: string;
      permitText2: string;
      permitTitle3: string;
      permitText3: string;
      permitTitle4: string;
      permitText4: string;
      permitTitle5: string;
      permitText5: string;
      permitTitle6: string;
      permitText6: string;
      permitTitle7: string;
      permitText7: string;
      permitTitle8: string;
      permitText8: string;
    };
  };
}

class VisaCollection extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      data: {
        title: { rendered: '' },
        acf: {
          fv1200_400: '',
          subtitle: '',
          pageDescription: '',
          visaTitle: '',
          visaTitle1: '',
          visaText1: '',
          visaTitle2: '',
          visaText2: '',
          visaTitle3: '',
          visaText3: '',
          permitTitle: '',
          permitTitle1: '',
          permitText1: '',
          permitTitle2: '',
          permitText2: '',
          permitTitle3: '',
          permitText3: '',
          permitTitle4: '',
          permitText4: '',
          permitTitle5: '',
          permitText5: '',
          permitTitle6: '',
          permitText6: '',
          permitTitle7: '',
          permitText7: '',
          permitTitle8: '',
          permitText8: '',
        },
      },
    };
  }
  componentDidMount() {
    let pageId = 589;
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
    let visaCollection = [
      {
        title: this.state.data.acf.visaTitle1,
        text: this.state.data.acf.visaText1,
      },
      {
        title: this.state.data.acf.visaTitle2,
        text: this.state.data.acf.visaText2,
      },
      {
        title: this.state.data.acf.visaTitle3,
        text: this.state.data.acf.visaText3,
      },
    ];

    let permitCollection = [
      {
        title: this.state.data.acf.permitTitle1,
        text: this.state.data.acf.permitText1,
      },
      {
        title: this.state.data.acf.permitTitle2,
        text: this.state.data.acf.permitText2,
      },
      {
        title: this.state.data.acf.permitTitle3,
        text: this.state.data.acf.permitText3,
      },
      {
        title: this.state.data.acf.permitTitle4,
        text: this.state.data.acf.permitText4,
      },
      {
        title: this.state.data.acf.permitTitle5,
        text: this.state.data.acf.permitText5,
      },
      {
        title: this.state.data.acf.permitTitle6,
        text: this.state.data.acf.permitText6,
      },
    ];

    return (
      <PageBaseLayout
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
        <MainSectionDiv>
          <CollectionDiv>
            <VisaCollectionBox
              category={data.visaTitle}
              collection={visaCollection}
            />
          </CollectionDiv>
          <CollectionDiv>
            <VisaCollectionBox
              category={data.permitTitle}
              collection={permitCollection}
            />
          </CollectionDiv>
        </MainSectionDiv>
      </PageBaseLayout>
    );
  }
}
export default VisaCollection;
