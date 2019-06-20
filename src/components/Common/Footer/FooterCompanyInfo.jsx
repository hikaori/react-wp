import React, { Fragment } from 'react';
import styled from 'styled-components';

import cosLogo from '../../../assets/images/COS_Educational_Consulting_Inc_Logo_Eng.svg';

const FlexBox = styled.div`
  display: flex;
  justify-content: ${({ theme }) => theme.content};
  width: ${({ theme }) => theme.width};
`;
const Facebook = styled.div`
  &::before {
    font-family: 'icomoon';
    content: '\ea90';
  }
`;

const FooterCompanyInfo = () => {
  return (
    <div>
      <img src={cosLogo} />
      <FlexBox>
        <Facebook />
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
