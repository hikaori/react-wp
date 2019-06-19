import React, { Component, Fragment } from 'react';
import { BasicLayout, News, ProgramContainer } from '../';
import ReactPlayer from 'react-player';

import { ImagePluTextBox } from '../';
// import hero from '../../assets/images/COS-WebsiteHomePageHeroVideoOptimized.mp4';
import defImage from '../../assets/images/defalt.jpg';
import styled from 'styled-components';

interface OwnProps {}
interface OwnState {
  data: { acf: { herotext: string; ryugakutext: string } };
}
const HeroBox = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  & p {
    text-align: center;
  }
`;

class LandingPage extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      data: {
        acf: { herotext: '', ryugakutext: '' },
      },
    };
  }
  componentDidMount() {
    // 5 => wordpressのLanding page id
    let dataURL = 'http://localhost/wp-json/wp/v2/pages/5';
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
    console.log(data.herotext);
    return (
      <BasicLayout>
        <div style={{ position: 'relative' }}>
          <ReactPlayer
            url="https://cosvancouver.com/wp-content/uploads/2019/06/COS-WebsiteHomePageHeroVideoOptimized.mp4"
            playing={true}
            loop={true}
            muted={true}
            width="100%"
            height="100%"
          />
          <HeroBox dangerouslySetInnerHTML={{ __html: data.herotext }} />
        </div>
        <ImagePluTextBox imgURL={defImage} alt={'留学'} isImgRightSide={true}>
          <div dangerouslySetInnerHTML={{ __html: data.ryugakutext }} />
        </ImagePluTextBox>
        <News />
        <ProgramContainer />
      </BasicLayout>
    );
  }
}

export default LandingPage;
