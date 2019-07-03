import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    let dataURL = 'http://localhost/wp-json/wp-api-menus/v2/menus/5';
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
      <ul id="page-wrap">
        {menus.map((item, index) => (
          <li key={index}>
            <Link to={item.url}>{item.title}</Link>
            {item.children && <MobileSubMenu subMenus={item.children} />}
          </li>
        ))}
      </ul>
    );
  }
}
export default MobileMenu;
