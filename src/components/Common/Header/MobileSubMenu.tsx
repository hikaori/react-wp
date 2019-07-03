import React, { Component } from 'react';
import { Link } from 'react-router-dom';

interface OwnProps {
  subMenus: [{ title: string; url: string }];
}
interface OwnState {}

class MobileSubMenu extends Component<OwnProps, OwnState> {
  render() {
    return (
      <ul>
        {this.props.subMenus.map((item, index) => (
          <li key={index}>
            <Link to={item.url}>
              <div>{item.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
export default MobileSubMenu;
