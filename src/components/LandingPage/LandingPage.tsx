import React, { Component } from 'react';
import { BasicLayout } from '../';
import hero from '../../assets/images/COS-WebsiteHomePageHeroVideoOptimized.mp4';

class LandingPage extends Component {
  render() {
    return (
      <BasicLayout>
        <div>
          <video
            src={hero}
            style={{
              maxWidth: `100%`,
            }}
            autoPlay
            muted
          />
          <div>あなたにとっての、海外への架け橋として</div>
        </div>
      </BasicLayout>
    );
  }
}

export default LandingPage;
