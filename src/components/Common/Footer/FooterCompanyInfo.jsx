import React from 'react';
import styled from 'styled-components';

import cosLogo from '../../../assets/images/COS_Educational_Consulting_Inc_Logo_Eng.svg';
import facebook from '../../../assets/icon/facebook.svg';
import twitter from '../../../assets/icon/twitter.svg';
import youtube from '../../../assets/icon/youtube.svg';

const FlexBox = styled.div`
  display: flex;
  justify-content: ${({ theme }) => theme.content};
  width: ${({ theme }) => theme.width};
`;
const Icon = styled.img`
  max-width: 2.4rem;
  margin-right: 3.5rem;
  margin-left: 3.5rem;
  &:first-child {
    margin-left: 0rem;
  }
  &:last-child {
    margin-right: 0rem;
  }
`;

const FooterCompanyInfo = () => {
  return (
    <div>
      <img src={cosLogo} alt="cosLogo" />
      <FlexBox>
        <Icon src={facebook} />
        <Icon src={twitter} />
        <Icon src={youtube} />
      </FlexBox>
      <div>連絡先情報</div>
      <div>Suite 225 – 314 W Cordova St,</div>
      <div>Vancouver, BC V6B 1E8</div>
      <div>
        日本電話番号:<span> 052-718-5169</span>
      </div>
      <div>
        TEL:<span> +1 (604) 262-6447</span>
      </div>
    </div>
  );
};

export default FooterCompanyInfo;
