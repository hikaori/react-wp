import React, { Component } from 'react';

import { PageBaseLayout, PageDescription } from '../../..';
import { buttonText } from '../../../../constants/buttonText';
import { BottomSectionText } from '../../../../constants/BottomSectionText';
import BranchTables from './BranchTables';

interface OwnProps {}
interface OwnState {
  data: {
    title: { rendered: string };
    acf: {
      fv1200_400: string;
      subtitle: string;
      pageDescription: string;
      vancouverBranchTable: string;
      nagoyaBranchTable: string;
      osakaBranchTable: string;
    };
  };
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
      },
    };
  }
  componentDidMount() {
    let pageId = 965;
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
