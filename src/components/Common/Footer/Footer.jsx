import React from 'react';
import styled from 'styled-components';

import color from '../../colors';
import FooterItem from './FooterItem';

const FooterBox = styled.footer`
  background-color: ${color.footerBackGroudn};
  color: #fff;
  padding: 8rem;
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: ${({ theme }) => theme.content};
  width: ${({ theme }) => theme.width};
`;
const OtherItem = styled.div`
  margin: 0 1.4rem;
`;
const CopyRight = styled.div`
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterBox>
      <FooterItem />
      <FlexBox>
        <CopyRight>
          © {new Date().getFullYear()}
          {` `}COS{` `}Educational{` `}Consulting{` `}Inc.
        </CopyRight>
        <FlexBox theme={{ width: '100%', content: 'flex-end' }}>
          <OtherItem>最新情報</OtherItem>
          <OtherItem>お問い合わせ</OtherItem>
          <OtherItem>ご利用規約</OtherItem>
          <OtherItem>プライバシーポリシー</OtherItem>
        </FlexBox>
      </FlexBox>
    </FooterBox>
  );
};

export default Footer;
