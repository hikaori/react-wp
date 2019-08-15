import React, { Component } from 'react';

import { PageBaseLayout, PageDescription } from '../../';
import { getData, BreadTreeElement } from '../../../utile/PageApi';
import { buttonText } from '../../../constants/buttonText';
import { BottomSectionText } from '../../../constants/BottomSectionText';
import NewsListContent from './NewsListContent';
import color from '../../colors';
import { IP } from '../../../utile/IPadress';

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
  newsData: {
    id: number;
    modified: string;
    title: { rendered: string };
    excerpt: { rendered: string };
  }[];
}

class NewsList extends Component<OwnProps, OwnState> {
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
      newsData: [
        {
          id: 0,
          modified: '',
          title: { rendered: '' },
          excerpt: { rendered: '' },
        },
      ],
    };
  }

  async createData() {
    let pageId = 1472;
    const state = await getData<PageDataType>(pageId);
    this.setState(state);
  }

  componentDidMount() {
    this.createData();
    let typeName = 'news';
    let newsDataURL = `${IP}/wp-json/wp/v2/${typeName}/?orderby=modified`;
    fetch(newsDataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          newsData: res,
        });
      });
  }

  createListDom = (
    news: {
      id: number;
      modified: string;
      excerpt: { rendered: string };
    }[],
  ) => {
    const returnDom: JSX.Element[] = [];
    news.map((x, index) =>
      returnDom.push(
        <NewsListContent
          key={index}
          modifiedDate={x.modified}
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

        {this.createListDom(this.state.newsData)}
      </PageBaseLayout>
    );
  }
}
export default NewsList;
