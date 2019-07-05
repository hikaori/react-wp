import React, { Component } from 'react';
import {
  BasicLayout,
  News,
  ProgramContainer,
  Button,
  BottomSection,
} from '../';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

import { ImagePluTextBox } from '../';
// import hero from '../../assets/images/COS-WebsiteHomePageHeroVideoOptimized.mp4';
import { BottomSectionText } from '../../constants/BottomSectionText';
import { buttonText } from '../../constants/buttonText';
import colors from '../colors';

interface OwnProps {}
interface OwnState {
  data: {
    acf: {
      herotext: string;
      ryugakutext: string;
      ryugakuimg: string;
      ryugakuimgalt: string;
    };
  };
}
const HeroBox = styled.div`
  position: relative;
  margin-left: calc(((100vw - 100%) / 2) * -1);
  margin-right: calc(((100vw - 100%) / 2) * -1);
`;

const HeroText = styled.div`
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
        acf: {
          herotext: '',
          ryugakutext: '',
          ryugakuimg: '',
          ryugakuimgalt: '',
        },
      },
    };
  }
  componentDidMount() {
    // 5 => wordpressのLanding page id
    let dataURL = 'http://localhost/wp-json/wp/v2/pages/37';
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
    return (
      <BasicLayout>
        <HeroBox>
          <ReactPlayer
            url="https://cosvancouver.com/wp-content/uploads/2019/06/COS-WebsiteHomePageHeroVideoOptimized.mp4"
            playing={true}
            loop={true}
            muted={true}
            width="100%"
            height="100%"
          />
          <HeroText dangerouslySetInnerHTML={{ __html: data.herotext }} />
        </HeroBox>
        <ImagePluTextBox
          imgURL={data.ryugakuimg}
          alt={data.ryugakuimgalt}
          isImgRightSide={true}
        >
          <div dangerouslySetInnerHTML={{ __html: data.ryugakutext }} />
        </ImagePluTextBox>
        <News />
        <ProgramContainer />
        <BottomSection
          text={BottomSectionText.pattern1}
          backgroundColor={colors.lightGray}
        >
          <Button theme={{ main: '23.7rem' }}>
            {buttonText.freeConsulting}
          </Button>
        </BottomSection>
      </BasicLayout>
    );
  }
}

export default LandingPage;
