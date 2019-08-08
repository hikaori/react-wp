import React, { Component } from 'react';
import styled from 'styled-components';

import { PageBaseLayout, Heading2 } from '../..';
import { getData, BreadTreeElement } from '../../../utile/PageApi';
import { buttonText } from '../../../constants/buttonText';
import { BottomSectionText } from '../../../constants/BottomSectionText';
import EditorContent from '../../Common/EditorContent';
import color from '../../colors';

const MainSection = styled.section`
  padding: 8rem 0;
`;

type PageDataType = {
  title: { rendered: string };
  acf: {
    fv1200_400: string;
    subtitle: string;
    pageDescription: string;
    contents: string;
  };
  slug: string;
  parent: number;
};

interface OwnProps {
  pageID: number;
}
interface OwnState {
  data: PageDataType;
  breadTreeElements: BreadTreeElement[];
}

class Etransfer extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      data: {
        title: { rendered: '' },
        acf: {
          fv1200_400: '',
          subtitle: '',
          pageDescription: '',
          contents: '',
        },
        slug: '',
        parent: 0,
      },
      breadTreeElements: [],
    };
  }

  async createData() {
    let pageId = this.props.pageID;
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
        bottomSectionColor={color.lightGray}
        bottomButtonText={buttonText.freeConsulting}
        bottomButtonSize={'23.7rem'}
      >
        <MainSection>
          <Heading2>{title.rendered}</Heading2>
          <EditorContent>
            <div dangerouslySetInnerHTML={{ __html: data.contents }} />
          </EditorContent>
        </MainSection>
      </PageBaseLayout>
    );
  }
}
export default Etransfer;
