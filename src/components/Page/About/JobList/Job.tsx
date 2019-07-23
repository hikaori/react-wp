import React, { Component } from 'react';

import { PageBaseLayout, PageDescription } from '../../..';
import { buttonText } from '../../../../constants/buttonText';
import { BottomSectionText } from '../../../../constants/BottomSectionText';
import JobContent from './JobContent';
import color from '../../../colors';

interface OwnProps {}
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
  jobData: [
    {
      id: number;
      title: {
        rendered: string;
      };
      content: {
        rendered: string;
      };
      acf: {
        jobLink: string;
      };
    }
  ];
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
      },
      jobData: [
        {
          id: 0,
          title: { rendered: '' },
          content: { rendered: '' },
          acf: {
            jobLink: '',
          },
        },
      ],
    };
  }
  componentDidMount() {
    let pageId = 1180;
    let dataURL = `http://localhost/wp-json/wp/v2/pages/${pageId}`;
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
        });
      });
    let typeName = 'job';
    let jobDataURL = `http://localhost/wp-json/wp/v2/${typeName}`;
    fetch(jobDataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          jobData: res,
        });
      });
  }

  modifyData = (
    jobData: [
      {
        id: number;
        title: {
          rendered: string;
        };
        content: {
          rendered: string;
        };
        acf: {
          jobLink: string;
        };
      }
    ],
  ) => {
    const targetData = jobData.filter(x => x.id == 1173);
    console.log(targetData);
    return targetData;
  };

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
        {/* {this.state.jobData[0].title.rendered} */}
        {/* {this.modifyData(this.state.jobData)} */}
      </PageBaseLayout>
    );
  }
}
export default JobList;
