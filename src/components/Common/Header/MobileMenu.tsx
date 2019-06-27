import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';

interface OwnProps {}
interface OwnState {}

class MobileMenu extends Component<OwnProps, OwnState> {
  render() {
    return (
      <div id="page-wrap">
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a className="menu-item--small" href="">
          Settings
        </a>
      </div>
    );
  }
}
export default MobileMenu;
