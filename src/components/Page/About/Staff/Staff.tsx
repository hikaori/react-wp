import React, { Component } from 'react';

import PageBaseLayout02 from '../../../Common/PageBaseLayout02';
import { buttonText } from '../../../../constants/buttonText';
import { BottomSectionText } from '../../../../constants/BottomSectionText';
import StaffContents from './StaffContents';
import color from '../../../colors';

type Data = {
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
  data: Data;
  breadTreeElements: { breadText: string; url: string }[];
}

class Staff extends Component<OwnProps, OwnState> {
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

  createApiUrl(pageId: number | string) {
    let BASEURL = `http://localhost/wp-json/wp/v2/pages/`;
    return `${BASEURL}${pageId}`;
  }

  async getData(pageId: string | number) {
    let tempParentId = 0;
    let dataUrl = this.createApiUrl(pageId);
    let responseData = await fetch(dataUrl);
    const returnData: Data = (await responseData.json()) as Data;

    await this.setState({
      data: returnData,
      breadTreeElements: this.state.breadTreeElements.concat({
        breadText: returnData.title.rendered,
        url: returnData.slug,
      }),
    });
    // パンくずの作成
    tempParentId = returnData.parent;
    while (tempParentId !== 0) {
      tempParentId = 0;
      let dataUrl = this.createApiUrl(this.state.data.parent);
      let responseData = await fetch(dataUrl);
      let data = (await responseData.json()) as Data;
      await this.setState({
        breadTreeElements: this.state.breadTreeElements.concat({
          breadText: data.title.rendered,
          url: data.slug,
        }),
      });
      tempParentId = data.parent;
    }
    let reverseBreadData = this.state.breadTreeElements.reverse();
    await this.setState({
      breadTreeElements: reverseBreadData,
    });
  }

  componentDidMount() {
    this.getData(1091);
  }

  render() {
    let data = this.state.data.acf;
    let title = this.state.data.title;

    return (
      <PageBaseLayout02
        BreadTreeElements={this.state.breadTreeElements}
        imgURL={data.fv1200_400}
        title={title.rendered}
        subTitle={data.subtitle}
        bottomSectionText={BottomSectionText.pattern1}
        bottomSectionColor={color.lightGray}
        bottomButtonText={buttonText.freeConsulting}
        bottomButtonSize={'23.7rem'}
      >
        <StaffContents />
      </PageBaseLayout02>
    );
  }
}
export default Staff;
