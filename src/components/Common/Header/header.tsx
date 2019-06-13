import React from 'react';
import Menu from './menu';

const Header = () => {
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
        <Menu />
      </div>
    </header>
  );
};

export default Header;
