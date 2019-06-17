import React from 'react';
import Menu from './menu';
import styled from 'styled-components';

import Logo from '../../../assets/images/COS_Educational_Consulting_Inc_Logo_Jap.svg';
import Search from '../../../assets/images/search.svg';

const Header = () => {
  const COSLogo = styled.img`
    max-width: 148.15px;
    margin-bottom: 0rem;
  `;
  const SearchIcon = styled.img`
    max-width: 16px;
    margin-bottom: 0rem;
  `;

  return (
    <header
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1366,
          padding: `1.45rem 1.0875rem`,
          display: `flex`,
        }}
      >
        <COSLogo src={Logo} className="" alt="logo" />
        <div
          style={{
            display: `flex`,
            width: `100%`,
            justifyContent: `flex-end`,
          }}
        >
          <Menu />
          <SearchIcon src={Search} className="" alt="search" />
        </div>
      </div>
    </header>
  );
};

export default Header;
