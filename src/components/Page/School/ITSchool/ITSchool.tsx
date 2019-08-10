import React, { Component } from 'react';
import { getData, BreadTreeElement } from '../../../../utile/PageApi';

import { PageBaseLayout, PageDescription } from '../../..';
import EceItSchoolListBox from '../EceIt/EceItSchoolListBox';

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

class ITSchool extends Component<OwnProps, OwnState> {
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
    let pageId = 1496;
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
        bottomSectionText={
          'その他の学校に関しては、以下のリンクからFrogのウェブサイトをご参照ください'
        }
        bottomSectionColor={'#fff'}
        bottomButtonText={'他の学校を見る'}
        bottomButtonSize={'23.7rem'}
      >
        <PageDescription>
          <div dangerouslySetInnerHTML={{ __html: data.pageDescription }} />
        </PageDescription>
        <EceItSchoolListBox
          boxTitle="クリエイティブ・IT系プログラムの学校一覧"
          categoryNum={13}
        />
      </PageBaseLayout>
    );
  }
}
export default ITSchool;
