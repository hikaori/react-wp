import React, { Component } from 'react';
import styled from 'styled-components';

import { LinkHandle } from '../../';

const MenuBox = styled.div`
  margin: 0 2%;
  &:first-child {
    margin-left: 0;
  }
  width: ${({ theme }) => theme.Boxwidth};
`;
const MenuBoxUl = styled.ul`
  font-family:${({ theme }) => theme.fontFamily}
  font-size:${({ theme }) => theme.fontSize}
  margin-left: 0;
  & a {
    display: block;
    padding: 0.6rem 0;
  }
  & li {
    margin-bottom: 0.4rem;
  }
`;

interface OwnProps {
  width: string;
  menu: {
    title: string;
    url: string;
    children: [{ title: string; url: string }];
  };
}
interface OwnState {}

class FooterProgram extends Component<OwnProps, OwnState> {
  render() {
    return (
      <MenuBox theme={{ Boxwidth: this.props.width }}>
        <MenuBoxUl
          theme={{
            fontFamily: 'a-otf-midashi-go-mb31-pr6n',
            fontSize: '1.4rem',
          }}
        >
          <li>
            <LinkHandle to={this.props.menu.url}>
              {this.props.menu.title}
            </LinkHandle>
            <MenuBoxUl
              theme={{
                fontFamily: 'a-otf-gothic-bbb-pr6n',
                fontSize: '1.2rem',
              }}
            >
              {this.props.menu.children &&
                this.props.menu.children.map(subitem => (
                  <li key={subitem.title}>
                    <LinkHandle to={subitem.url}>{subitem.title}</LinkHandle>
                  </li>
                ))}
            </MenuBoxUl>
          </li>
        </MenuBoxUl>
      </MenuBox>
    );
  }
}
export default FooterProgram;
