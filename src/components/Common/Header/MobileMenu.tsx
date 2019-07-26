import React, { Component } from 'react';

import { LinkHandle } from '../../';
import MobileSubMenu from './MobileSubMenu';

interface OwnProps {}
interface OwnState {
  menus: {
    items: [
      { title: string; url: string; children: [{ title: string; url: string }] }
    ];
  };
}

class MobileMenu extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      menus: {
        items: [{ title: '', url: '', children: [{ title: '', url: '' }] }],
      },
    };
  }
  componentDidMount() {
    let dataURL = 'http://localhost/wp-json/wp-api-menus/v2/menus/9';
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
      <main id="page-wrap outer-container">
        <ul id="">
          {menus.map((item, index) => (
            <li key={index}>
              <LinkHandle to={item.url}>{item.title}</LinkHandle>
              {item.children && <MobileSubMenu subMenus={item.children} />}
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
export default MobileMenu;
