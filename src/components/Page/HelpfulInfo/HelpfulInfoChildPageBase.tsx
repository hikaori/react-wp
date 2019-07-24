import React, { Component } from 'react';
import styled from 'styled-components';

import { PageBaseLayout, Heading2 } from '../..';
import { buttonText } from '../../../constants/buttonText';
import { BottomSectionText } from '../../../constants/BottomSectionText';
import EditorContent from '../../Common/EditorContent';
import color from '../../colors';

const MainSection = styled.section`
  padding: 8rem 0;
`;

interface OwnProps {
  pageID: number;
}
interface OwnState {
  data: {
    title: { rendered: string };
    acf: {
      fv1200_400: string;
      subtitle: string;
      pageDescription: string;
      contents: string;
    };
  };
}

class Etransfer extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      data: {
        title: { rendered: '' },
        acf: {
          fv1200_400: '',
          subtitle: '',
          pageDescription: '',
          contents: '',
        },
      },
    };
  }
  componentDidMount() {
    let pageId = this.props.pageID;
    let dataURL = `http://localhost/wp-json/wp/v2/pages/${pageId}`;
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
        <MainSection>
          <Heading2>{title.rendered}</Heading2>
          <EditorContent>
            <div dangerouslySetInnerHTML={{ __html: data.contents }} />
          </EditorContent>
        </MainSection>
      </PageBaseLayout>
    );
  }
}
export default Etransfer;
