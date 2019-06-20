import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuBox = styled.div`
  margin: 0 2%;
  &:first-child {
    margin-left: 0;
  }
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
  menu: {
    title: string;
    url: string;
    children: [{ title: string; url: string }];
  };
}
interface OwnState {}

class FooterProgram extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      menu: { title: '', url: '', children: [{ title: '', url: '' }] },
    };
  }
  render() {
    return (
      <MenuBox>
        <MenuBoxUl
          theme={{
            fontFamily: 'a-otf-midashi-go-mb31-pr6n',
            fontSize: '1.4rem',
          }}
        >
          <li>
            <Link to={this.props.menu.url}>{this.props.menu.title}</Link>
            <MenuBoxUl
              theme={{
                fontFamily: 'a-otf-gothic-bbb-pr6n',
                fontSize: '1.2rem',
              }}
            >
              {this.props.menu.children &&
                this.props.menu.children.map(subitem => (
                  <li key={subitem.title}>
                    <Link to={subitem.url}>{subitem.title}</Link>
                  </li>
                ))}
              <li>
                <Link to={'/'}>保育の留学・就職</Link>
              </li>
            </MenuBoxUl>
          </li>
        </MenuBoxUl>
      </MenuBox>
    );
  }
}
export default FooterProgram;
