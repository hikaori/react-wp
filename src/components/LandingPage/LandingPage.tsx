import React, { Component } from 'react';
import { BasicLayout, News, ProgramContainer } from '../';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

import { ImagePluTextBox } from '../';
// import hero from '../../assets/images/COS-WebsiteHomePageHeroVideoOptimized.mp4';
// import defImage from '../../assets/images/defalt.jpg';
import color from '../colors';
import { Button } from '../Button';

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
  position: absolute;
  top: 50%;
  width: 100%;
  & p {
    text-align: center;
  }
`;
const BottomBox = styled.div`
  background-color: ${color.lightGray};
  padding-top: 8rem;
  padding-bottom: 8rem;
  text-align: center;
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
        <ImagePluTextBox
          imgURL={data.ryugakuimg}
          alt={data.ryugakuimgalt}
          isImgRightSide={true}
        >
          <div dangerouslySetInnerHTML={{ __html: data.ryugakutext }} />
        </ImagePluTextBox>
        <News />
        <ProgramContainer />
        <BottomBox>
          <div>
            專門留学・海外就職・ビザ取得・移民をご検討の方はお気軽にご相談ください
          </div>
          <Button theme={{ main: '23.7rem' }}>無料相談</Button>
        </BottomBox>
      </BasicLayout>
    );
  }
}

export default LandingPage;
