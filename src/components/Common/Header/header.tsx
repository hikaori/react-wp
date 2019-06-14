import React from 'react';
import Menu from './menu';
import styled from 'styled-components';
import Logo from '../../../assets/images/COS_Educational_Consulting_Inc_Logo_Jap.svg';

const Header = () => {
  const COSLogo = styled.img`
    max-width: 148.15px;
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
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display: `flex`,
        }}
      >
        <COSLogo src={Logo} className="App-logo" alt="logo" />

        <Menu />
      </div>
    </header>
  );
};

export default Header;
