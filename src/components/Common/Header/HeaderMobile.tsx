import React, { Component } from 'react';
import styled from 'styled-components';
import { MenuAltRight, Search } from 'styled-icons/boxicons-regular';
import { elastic as Menu } from 'react-burger-menu';
import { styles } from './MobileMenuStyle';

import MobileMenu from './MobileMenu';

import Logo from '../../../assets/images/COS_Educational_Consulting_Inc_Logo_Jap.svg';
import color from '../../colors';

const Head = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
`;
const COSLogo = styled.img`
  max-width: 148.15px;
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

const Icon = styled.div`
  width: 24px;
  color: ${color.blue};
`;

interface OwnProps {}
interface OwnState {
  isMenuCliked: boolean;
  isSearchCliked: boolean;
}

class HeaderMobile extends Component<OwnProps, OwnState> {
  state = { isMenuCliked: false, isSearchCliked: false };

  handleMenuClick = () => {
    this.setState(preState => ({ isMenuCliked: !preState.isMenuCliked }));
  };
  render() {
    return (
      <Head id="outer-container">
        {this.state.isMenuCliked && (
          <Menu
            styles={styles}
            pageWrapId={'page-wrap'}
            outerContainerId={'outer-container'}
            right={true}
          >
            <MobileMenu />
          </Menu>
        )}
        <FlexBox>
          <COSLogo src={Logo} className="" alt="logo" />
          <FlexEnd>
            <Icon>
              <Search />
            </Icon>
            <Icon onClick={this.handleMenuClick}>
              <MenuAltRight />
            </Icon>
          </FlexEnd>
        </FlexBox>
      </Head>
    );
  }
}
export default HeaderMobile;
