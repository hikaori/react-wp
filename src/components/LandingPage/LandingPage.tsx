import React, { Component } from 'react';
import {
  BasicLayout,
  ExcerptNews,
  ProgramContainer,
  Button,
  BottomSection,
  LinkHandle,
} from '../';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

import { ImagePluTextBox } from '../';
// import hero from '../../assets/images/COS-WebsiteHomePageHeroVideoOptimized.mp4';
import { BottomSectionText } from '../../constants/BottomSectionText';
import { buttonText } from '../../constants/buttonText';
import colors from '../colors';
import { media } from '../../utile/Helper';
import { IP } from '../../utile/IPadress';

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
  .player-box {
    overflow: hidden;
  }
  .player-box video {
    ${media.phone`
    height: 100vh !important;
    width: auto !important;
    position: relative;
    left: 50%;
    // 通常は画像の半分だが、動画内のコンテンツに合わせて微調整
    margin-left: -450px;
    `}
  }
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
    let pageId = '1313';
    let dataURL = `${IP}/wp-json/wp/v2/pages/${pageId}`;
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
            className="player-box"
          />
          <HeroText dangerouslySetInnerHTML={{ __html: data.herotext }} />
        </HeroBox>
        <ImagePluTextBox
          imgURL={data.ryugakuimg}
          alt={data.ryugakuimgalt}
          isImgRightSide={true}
          classname={null}
        >
          <div dangerouslySetInnerHTML={{ __html: data.ryugakutext }} />
        </ImagePluTextBox>
        <ExcerptNews />
        <ProgramContainer />
        <BottomSection
          text={BottomSectionText.pattern1}
          backgroundColor={colors.lightGray}
        >
          <Button theme={{ main: '23.7rem' }}>
            <LinkHandle to={'/contact'}>{buttonText.freeConsulting}</LinkHandle>
          </Button>
        </BottomSection>
      </BasicLayout>
    );
  }
}

export default LandingPage;
