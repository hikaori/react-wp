import React, { Component, Fragment } from 'react';

import { PageBaseLayout, PageDescription } from '../../..';
import SchoolList from './SchoolList';
import { BottomSectionText } from '../../../../constants/BottomSectionText';
import { buttonText } from '../../../../constants/buttonText';
import colors from '../../../colors';

interface OwnProps {}
interface OwnState {
  data: {
    title: { rendered: string };
    acf: {
      fv1200_400: string;
      subtitle: string;
      pageDescription: string;
    };
  };
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
      },
    };
  }

  componentDidMount() {
    let pageID = 770;
    let dataURL = `http://localhost/wp-json/wp/v2/pages/${pageID}`;
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
    let title = this.state.data.title.rendered;
    return (
      <Fragment>
        <PageBaseLayout
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
