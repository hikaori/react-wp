import React, { Component } from 'react';
import { Link } from 'react-router-dom';
interface OwnProps {
  to: string;
}
interface OwnState {}
class LinkHandle extends Component<OwnProps, OwnState> {
  render() {
    const returnDom = () => {
      /* Link が外部リンクをハンドリング出来ない為、条件分岐にて対応 */

      if (this.props.to.match('^https?')) {
        return (
          <a href={this.props.to} target="_blank" rel="noreferrer noopener">
            {this.props.children}
          </a>
        );
      } else {
        return <Link to={this.props.to}>{this.props.children}</Link>;
      }
    };
    return returnDom();
  }
}

export default LinkHandle;
