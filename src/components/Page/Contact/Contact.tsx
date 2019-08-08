import React, { Component } from 'react';

import { PageBaseLayout, PageDescription } from '../..';
import { getData, BreadTreeElement } from '../../../utile/PageApi';
import { buttonText } from '../../../constants/buttonText';
import { BottomSectionText } from '../../../constants/BottomSectionText';
import { FormDiv } from './ContactStyle';
import color from '../../colors';
import './Contact.css';

type PageDateType = {
  title: { rendered: string };
  acf: {
    fv1200_400: string;
    subtitle: string;
    pageDescription: string;
    formId: string;
  };
  slug: string;
  parent: number;
};

interface OwnProps {}
interface OwnState {
  data: PageDateType;
  breadTreeElements: BreadTreeElement[];
}

class Contact extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      data: {
        title: { rendered: '' },
        acf: {
          fv1200_400: '',
          subtitle: '',
          pageDescription: '',
          formId: '',
        },
        slug: '',
        parent: 0,
      },
      breadTreeElements: [],
    };
  }

  async create() {
    let pageId = 1339;
    const state = await getData<PageDateType>(pageId);
    this.setState(state);
  }
  componentDidMount() {
    this.create();
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
        bottomSectionText={BottomSectionText.pattern2}
        bottomSectionColor={color.lightGray}
        bottomButtonText={buttonText.line}
        bottomButtonSize={'23.7rem'}
        bottomButtonClass={'line-button'}
      >
        <PageDescription>
          <div dangerouslySetInnerHTML={{ __html: data.pageDescription }} />
        </PageDescription>
        <FormDiv dangerouslySetInnerHTML={{ __html: data.formId }} />
      </PageBaseLayout>
    );
  }
}
export default Contact;
