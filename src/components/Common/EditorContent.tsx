import React, { Component } from 'react';
import styled from 'styled-components';
import color from '../colors';

const BoxDiv = styled.div`
  h2 {
    position: relative;
  }
  & h2::after {
    position: absolute;
    width: 16px;
    left: 0;
    bottom: -8px;
    content: '';
    border-bottom: solid 1px ${color.red};
  }
  button {
    box-sizing: border-box;
    width: 100%;
    color: #fff;
    margin-top: 3.2rem;
    margin-bottom: 3.2rem;
    border: none;
    box-shadow: 1px 1px 4px grey;
    word-break: keep-all;
    background: radial-gradient(
      ${color.buttonLightBlue},
      ${color.buttonDarkBlue}
    );
    &:hover {
      box-shadow: none;
      background: radial-gradient(
        ${color.buttonDarkBlue},
        ${color.buttonLightBlue}
      );
    }
    max-width: 23.7rem;
    & a {
      padding-bottom: 1.7rem;
      padding-top: 1.7rem;
      color: #fff;
    }
  }
  & .Policy h3,
  .PrivacyPolicy h3 {
    margin-top: 2.5rem;
  }
`;

interface ownProps {}
interface ownState {}
class EditorContent extends Component<ownProps> {
  render() {
    return <BoxDiv>{this.props.children}</BoxDiv>;
  }
}
export default EditorContent;
