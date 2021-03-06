import React from 'react';
import Menu from './Menu';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Logo from '../../../assets/images/COS_Educational_Consulting_Inc_Logo_Jap.svg';
import Search from '../../../assets/images/search.svg';

const Head = styled.div`
  margin-bottom: 1.45rem;
  padding-right: 8.3rem;
  padding-left: 8.3rem;
`;
const LogoDiv = styled.div`
  width: 148.15px;
  margin-bottom: 2rem;
`;
const COSLogo = styled.img`
  margin-bottom: 0;
`;
const SearchIcon = styled.img`
  max-width: 16px;
  margin-bottom: 2rem;
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
    <Head>
      <FlexBox>
        <LogoDiv>
          <Link to="/">
            <COSLogo src={Logo} className="" alt="logo" />
          </Link>
        </LogoDiv>
        <FlexEnd>
          <Menu />
          <SearchIcon src={Search} className="" alt="search" />
        </FlexEnd>
      </FlexBox>
    </Head>
  );
};

export default Header;
