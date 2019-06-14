import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import './menu.css';

interface OwnProps {}
interface OwnState {
  menus: {
    items: [
      { title: string; url: string; children: [{ title: string; url: string }] }
    ];
  };
  isOpen: string;
}
class Movie extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      menus: {
        items: [{ title: '', url: '', children: [{ title: '', url: '' }] }],
      },
      isOpen: 'close',
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

  open = () => {
    this.setState(state => ({
      isOpen: 'open',
    }));
  };

  close = () => {
    this.setState(state => ({
      isOpen: 'close',
    }));
  };

  render() {
    const MenuSection = styled.ul`
      display: flex;
      margin-left: 0;
      justify-content: flex-end;
    `;
    const Menu = styled.li`
      padding: 0.5rem 0.75rem;
    `;
    const MenuSubSection = styled.ul`
      margin-left: 0;
      position: absolute;
      text-transform: none;
    `;

    let menus = this.state.menus.items;
    return (
      <div>
        <MenuSection>
          {menus.map((item, index) => (
            <Menu
              key={index}
              onMouseEnter={this.open}
              onMouseLeave={this.close}
            >
              <Link to={item.url}>{item.title}</Link>
              <MenuSubSection>
                {item.children &&
                  item.children.map(subitem => (
                    <li key={subitem.title} className={this.state.isOpen}>
                      <Link to={subitem.url}>{subitem.title}</Link>
                    </li>
                  ))}
              </MenuSubSection>
            </Menu>
          ))}
        </MenuSection>
      </div>
    );
  }
}
export default Movie;
