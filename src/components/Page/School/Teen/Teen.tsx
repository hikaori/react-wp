import React, { Component, Fragment } from 'react';

import { PageBaseLayout, PageDescription } from '../../..';
import { getData, BreadTreeElement } from '../../../../utile/PageApi';
import SchoolList from './SchoolList';
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
          bottomSectionText={
            'その他の学校に関しては、以下のリンクからナデシコ留学のウェブサイトをご参照ください'
          }
          bottomSectionColor={colors.lightGray}
          bottomButtonText={'他の学校を見る'}
          bottomButtonSize={'23.7rem'}
          bottomButtonLink={'https://nadeshikoryugaku.com/public_high_school/'}
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
