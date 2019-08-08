import React, { Component, Fragment } from 'react';

import { PageBaseLayout, PageDescription } from '../../..';
import { getData, BreadTreeElement } from '../../../../utile/PageApi';
import SchoolList from './SchoolList';
import { BottomSectionText } from '../../../../constants/BottomSectionText';
import { buttonText } from '../../../../constants/buttonText';
import colors from '../../../colors';

type PageDataType = {
  title: { rendered: string };
  acf: {
    fv1200_400: string;
    subtitle: string;
    pageDescription: string;
  };
  slug: string;
  parent: number;
};

interface OwnProps {}
interface OwnState {
  data: PageDataType;
  breadTreeElements: BreadTreeElement[];
}

class Teen extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      data: {
        title: { rendered: '' },
        acf: {
          fv1200_400: '',
          subtitle: '',
          pageDescription: '',
        },
        slug: '',
        parent: 0,
      },
      breadTreeElements: [],
    };
  }

  async createData() {
    let pageId = 770;
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
          <SchoolList />
        </PageBaseLayout>
      </Fragment>
    );
  }
}
export default Teen;
