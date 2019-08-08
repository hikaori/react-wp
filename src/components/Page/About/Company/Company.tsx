import React, { Component } from 'react';

import { PageBaseLayout, PageDescription } from '../../..';
import { getData, BreadTreeElement } from '../../../../utile/PageApi';
import { buttonText } from '../../../../constants/buttonText';
import { BottomSectionText } from '../../../../constants/BottomSectionText';
import BranchTables from './BranchTables';

type PageDataType = {
  title: { rendered: string };
  acf: {
    fv1200_400: string;
    subtitle: string;
    pageDescription: string;
    vancouverBranchTable: string;
    nagoyaBranchTable: string;
    osakaBranchTable: string;
  };
  slug: string;
  parent: number;
};

interface OwnProps {}
interface OwnState {
  data: PageDataType;
  breadTreeElements: BreadTreeElement[];
}

class Company extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      data: {
        title: { rendered: '' },
        acf: {
          fv1200_400: '',
          subtitle: '',
          pageDescription: '',
          vancouverBranchTable: '',
          nagoyaBranchTable: '',
          osakaBranchTable: '',
        },
        slug: '',
        parent: 0,
      },
      breadTreeElements: [],
    };
  }

  async createData() {
    let pageId = 965;
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
        <BranchTables
          vancouverBranchTable={data.vancouverBranchTable}
          nagoyaBranchTable={data.nagoyaBranchTable}
          osakaBranchTable={data.osakaBranchTable}
        />
      </PageBaseLayout>
    );
  }
}
export default Company;
