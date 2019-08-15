import React, { Component } from 'react';

import { PageBaseLayout, PageDescription } from '../../..';
import { getData, BreadTreeElement } from '../../../../utile/PageApi';
import { buttonText } from '../../../../constants/buttonText';
import { BottomSectionText } from '../../../../constants/BottomSectionText';
import JobListContent from './JobListContent';
import color from '../../../colors';
import { IP } from '../../../../utile/IPadress';

type PageDataType = {
  title: { rendered: string };
  acf: {
    fv1200_400: string;
    subtitle: string;
    pageDescription: string;
    title1: string;
    description: string;
  };
  slug: string;
  parent: number;
};
interface OwnProps {}
interface OwnState {
  data: PageDataType;
  breadTreeElements: BreadTreeElement[];
  jobData: {
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
  }[];
}

class JobList extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      data: {
        title: { rendered: '' },
        acf: {
          fv1200_400: '',
          subtitle: '',
          pageDescription: '',
          title1: '',
          description: '',
        },
        slug: '',
        parent: 0,
      },
      breadTreeElements: [],
      jobData: [
        {
          id: 0,
          title: { rendered: '' },
          excerpt: { rendered: '' },
        },
      ],
    };
  }

  async createData() {
    let pageId = 1093;
    const state = await getData<PageDataType>(pageId);
    this.setState(state);
  }
  componentDidMount() {
    this.createData();
    let typeName = 'job';
    let postsNum = 12;
    let jobDataURL = `${IP}/wp-json/wp/v2/${typeName}/?per_page=${postsNum}`;
    fetch(jobDataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          jobData: res,
        });
      });
  }

  createListDom = (
    jobs: {
      id: number;
      title: { rendered: string };
      excerpt: { rendered: string };
    }[],
  ) => {
    const returnDom: JSX.Element[] = [];
    jobs.map((x, index) =>
      returnDom.push(
        <JobListContent
          key={index}
          title={x.title.rendered}
          excerpt={x.excerpt.rendered}
          id={x.id}
        />,
      ),
    );
    return returnDom;
  };

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
        <PageDescription>
          <div dangerouslySetInnerHTML={{ __html: data.pageDescription }} />
        </PageDescription>

        {this.createListDom(this.state.jobData)}
      </PageBaseLayout>
    );
  }
}
export default JobList;
