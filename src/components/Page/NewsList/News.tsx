import React, { Component } from 'react';

import { PageBaseLayout, PageDescription } from '../..';
import { buttonText } from '../../../constants/buttonText';
import { BottomSectionText } from '../../../constants/BottomSectionText';
import NewsContent from './NewsContent';
import color from '../../colors';

interface OwnProps {
  match: { params: { id: string } };
}
interface OwnState {
  data: {
    title: { rendered: string };
    acf: {
      fv1200_400: string;
      subtitle: string;
      pageDescription: string;
      title1: string;
      description: string;
    };
  };
  newsData: {
    id: number;
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
    };
    acf: {
      link: string;
    };
  };
}

class News extends Component<OwnProps, OwnState> {
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
      },
      newsData: {
        id: 0,
        title: { rendered: '' },
        content: { rendered: '' },
        acf: {
          link: '',
        },
      },
    };
  }
  componentDidMount() {
    let pageId = 1474;
    let dataURL = `http://localhost/wp-json/wp/v2/pages/${pageId}`;
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
        });
      });
    let typeName = 'news';
    let newsDataURL = `http://localhost/wp-json/wp/v2/${typeName}/${
      this.props.match.params.id
    }`;
    fetch(newsDataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          newsData: res,
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
        bottomSectionColor={color.lightGray}
        bottomButtonText={buttonText.freeConsulting}
        bottomButtonSize={'23.7rem'}
      >
        <PageDescription>
          <div dangerouslySetInnerHTML={{ __html: data.pageDescription }} />
        </PageDescription>
        <NewsContent
          title={this.state.newsData.title.rendered}
          excerpt={this.state.newsData.content.rendered}
          link={this.state.newsData.acf.link}
        />
      </PageBaseLayout>
    );
  }
}
export default News;
