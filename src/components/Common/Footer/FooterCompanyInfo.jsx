import React from 'react';
import styled from 'styled-components';

import cosLogo from '../../../assets/images/COS_Educational_Consulting_Inc_Logo_Eng.svg';
import facebook from '../../../assets/icon/facebook.svg';
import twitter from '../../../assets/icon/twitter.svg';
import youtube from '../../../assets/icon/youtube.svg';
import { media } from '../../../utile/Helper';

const CompanyContainter = styled.div`
  ${media.tablet`margin-bottom: 3.2rem;`}
  a {
    display: inline;
    cursor: pointer;
  }
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: ${({ theme }) => theme.content};
  width: ${({ theme }) => theme.width};
  ${media.tablet`justify-content: center;`}
`;
const ImgBox = styled.div`
  ${media.tablet`text-align: center;`}
  & img {
    ${media.tablet`width: 66%;`}
  }
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
    <CompanyContainter>
      <ImgBox>
        <img src={cosLogo} alt="cosLogo" />
      </ImgBox>
      <FlexBox>
        <Icon src={facebook} />
        <Icon src={twitter} />
        <Icon src={youtube} />
      </FlexBox>
      <div>連絡先情報</div>
      <div>Suite 225 – 314 W Cordova St,</div>
      <div>Vancouver, BC V6B 1E8</div>
      <div>
        日本電話番号:
        <span>
          <a hlef="tel:052-718-5169"> 052-718-5169</a>
        </span>
      </div>
      <div>
        TEL:
        <span>
          <a hlef="+1 (604) 262-6447"> +1 (604) 262-6447</a>
        </span>
      </div>
    </CompanyContainter>
  );
};

export default FooterCompanyInfo;
