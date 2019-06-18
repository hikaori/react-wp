import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
    let dataURL = 'http://localhost:8000/wp-json/wp-api-menus/v2/menus/2';
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          menus: res,
        });
      });
  }

  render() {
    const MenuSection = styled.ul`
      display: flex;
      margin-left: 0;
      justify-content: flex-end;
      margin-bottom: 0;
      margin: auto 0;
    `;
    const Menu = styled.li`
      margin-bottom: 0;
      padding: 0.5rem 3.2rem;
      &:hover {
        .active {
          display: block;
        }
      }
    `;
    const MenuSubSection = styled.ul`
      margin-left: 0;
      position: absolute;
      text-transform: none;
      display: none;
      z-index: 1;
      margin-top: 0px;
      margin-top: 0px;
      background-color: #fff;
      padding-right: 20px;
      padding-left: 20px;
      margin-left: -20px;
      box-shadow: rgba(122, 122, 122, 0.0588235) 0px 0px 6px 4px;
    `;
    const MenuSub = styled.li`
      border-bottom: #ddd solid 1px;
      padding-top: 20px;
      padding-bottom: 20px;
      margin-bottom: 0;
      &:last-child {
        border-bottom: #fff solid 1px;
      }
    `;

    let menus = this.state.menus.items;
    return (
      <MenuSection className="font14">
        {menus.map((item, index) => (
          <Menu key={index}>
            <Link to={item.url}>{item.title}</Link>
            <MenuSubSection className="active">
              {item.children &&
                item.children.map(subitem => (
                  <MenuSub key={subitem.title}>
                    <Link to={subitem.url}>{subitem.title}</Link>
                  </MenuSub>
                ))}
            </MenuSubSection>
          </Menu>
        ))}
      </MenuSection>
    );
  }
}
export default Menu;
