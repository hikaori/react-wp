import React, { Component } from 'react';
import { BasicLayout } from '../';
import ReactPlayer from 'react-player';

import { ImagePluTextBox } from '../';
// import hero from '../../assets/images/COS-WebsiteHomePageHeroVideoOptimized.mp4';
import defImage from '../../assets/images/defalt.jpg';

class LandingPage extends Component {
  render() {
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
          <div style={{ position: 'absolute', top: '50%', right: '25%' }}>
            あなたにとっての、海外への架け橋として
          </div>
        </div>
        <ImagePluTextBox
          imgURL={defImage}
          alt={'留学'}
          text={`『留学』というのは手段であり、必ず目的が伴います。
            世界中に友達を作りたい。将来武器になる高い英語力、専門知識をつけて日本でキャリアアップ。海外に生活の拠点を移す。
            皆様の目的は何でしょうか。
            COSでは目的ごとに大きく異なる専門知識の提供、サポートを確実に行えるように、保育留学・就職、クリエイター留学・就職、高校留学を別々のサービスとして運営しています。`}
          isImgRightSide={true}
        />
      </BasicLayout>
    );
  }
}

export default LandingPage;
