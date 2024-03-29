import React, { Component } from 'react';
import styled from 'styled-components';
import color from '../../colors';

import { LinkHandle } from '../../';
import { IP } from '../../../utile/IPadress';

const MenuSection = styled.ul`
  display: flex;
  margin-left: 0;
  justify-content: flex-end;
  margin-bottom: 0;
  margin: auto 0;
`;
const MenuParent = styled.li`
  padding-bottom: 2rem;
  &:hover {
    .active {
      display: block;
    }
  }
  & a {
    padding: 0.5rem 3.2rem;
  }
  & a:hover {
    color: ${color.primary};
  }
`;
const MenuSubSection = styled.ul`
  margin-left: 0;
  position: absolute;
  text-transform: none;
  display: none;
  z-index: 1;
  margin-top: 2rem;
  background-color: #fff;
  padding-right: 20px;
  padding-left: 20px;
  margin-left: -20px;
  box-shadow: rgba(122, 122, 122, 0.0588235) 0px 0px 6px 4px;
`;
const MenuSub = styled.li`
  border-bottom: #ddd solid 1px;
  margin-bottom: 0;
  &:last-child {
    border-bottom: #fff solid 1px;
  }
  & a {
    padding-top: 20px;
    padding-bottom: 20px;
  }
`;

interface OwnProps {}
interface OwnState {
  menus: {
    items: [
      { title: string; url: string; children: [{ title: string; url: string }] }
    ];
  };
}

class Menu extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      menus: {
        items: [{ title: '', url: '', children: [{ title: '', url: '' }] }],
      },
    };
  }

  componentDidMount() {
    let menuId = 13;
    let dataURL = `${IP}/wp-json/wp-api-menus/v2/menus/${menuId}`;
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          menus: res,
        });
      });
  }

  render() {
    let menus = this.state.menus.items;
    return (
      <MenuSection className="font14">
        {menus.map((item, index) => (
          <MenuParent key={index}>
            <LinkHandle to={item.url}>{item.title}</LinkHandle>
            <MenuSubSection className="active">
              {item.children &&
                item.children.map(subitem => (
                  <MenuSub key={subitem.title}>
                    <LinkHandle to={subitem.url}>{subitem.title}</LinkHandle>
                  </MenuSub>
                ))}
            </MenuSubSection>
          </MenuParent>
        ))}
      </MenuSection>
    );
  }
}
export default Menu;
