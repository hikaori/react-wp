import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { AddCircleOutline, RemoveCircleOutline } from 'styled-icons/material';

import { LinkHandle } from '../../';
import fonts from '../../fonts';
const MenuBox = styled.div``;
const MenuBoxUl = styled.ul`
  font-family:${({ theme }) => theme.fontFamily}
  font-size:${({ theme }) => theme.fontSize}
  display:${({ theme }) => theme.display}
  margin-left: 0;
  & a {
    display: inline-block;
    padding: 0.6rem 0;
  }
  & li {
    margin-bottom: 0.4rem;
  }
`;
const Icon = styled.span`
  display: inline-block;
  width: 1.8rem;
  margin-left: 1.6rem;
  cursor: pointer;
  & svg {
    padding: 10px;
  }
`;

interface OwnProps {
  menu: {
    title: string;
    url: string;
    children: [{ title: string; url: string }];
  };
}
interface OwnState {
  isCliked: boolean;
}

class FooterProgramMobile extends Component<OwnProps, OwnState> {
  state = { isCliked: false };
  handleClick = () => {
    this.setState(prevState => ({
      isCliked: !prevState.isCliked,
    }));
  };
  SubMenuDom = (display: string) => {
    return (
      <MenuBoxUl
        theme={{
          fontFamily: `${fonts.jpRegular}`,
          fontSize: '1.2rem',
          display: display,
        }}
      >
        {this.props.menu.children &&
          this.props.menu.children.map(subitem => (
            <li key={subitem.title}>
              <LinkHandle to={subitem.url}>{subitem.title}</LinkHandle>
            </li>
          ))}
      </MenuBoxUl>
    );
  };
  render() {
    return (
      <MenuBox>
        <MenuBoxUl
          theme={{
            fontFamily: `${fonts.jpBold}`,
            fontSize: '1.4rem',
          }}
        >
          <li>
            <LinkHandle to={this.props.menu.url}>
              {this.props.menu.title}
            </LinkHandle>

            {this.state.isCliked ? (
              <Fragment>
                <Icon onClick={this.handleClick}>
                  <RemoveCircleOutline className="extendArea" />
                </Icon>
                {this.SubMenuDom('block')}
              </Fragment>
            ) : (
              <Fragment>
                <Icon onClick={this.handleClick}>
                  <AddCircleOutline className="extendArea" />
                </Icon>
                {this.SubMenuDom('none')}
              </Fragment>
            )}
          </li>
        </MenuBoxUl>
      </MenuBox>
    );
  }
}
export default FooterProgramMobile;
