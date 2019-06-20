import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
      <div>
        <ul>
          <li>
            <Link to={this.props.menu.url}>{this.props.menu.title}</Link>
            <ul>
              {this.props.menu.children &&
                this.props.menu.children.map(subitem => (
                  <li key={subitem.title}>
                    <Link to={subitem.url}>{subitem.title}</Link>
                  </li>
                ))}
              <li>
                <Link to={'/'}>保育の留学・就職</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
export default FooterProgram;
