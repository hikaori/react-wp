import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';

import Logo from '../../../assets/images/COS_Educational_Consulting_Inc_Logo_Jap.svg';
import Search from '../../../assets/images/search.svg';

const Head = styled.header`
  marginbottom: 1.45rem;
  padding-right: 8.3rem;
  padding-left: 8.3rem;
`;
const COSLogo = styled.img`
  max-width: 148.15px;
  margin-bottom: 0rem;
`;
const SearchIcon = styled.img`
  max-width: 16px;
  margin-bottom: 0rem;
`;
const FlexBox = styled.div`
  margin: 0 auto;
  maxwidth: 1366;
  padding: 1.45rem 1.0875rem;
  display: flex;
`;
const FlexEnd = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const Header = () => {
  return (
    <Head
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      <FlexBox>
        <COSLogo src={Logo} className="" alt="logo" />
        <FlexEnd>
          <Menu />
          <SearchIcon src={Search} className="" alt="search" />
        </FlexEnd>
      </FlexBox>
    </Head>
  );
};

export default Header;
