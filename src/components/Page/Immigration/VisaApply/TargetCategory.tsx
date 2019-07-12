import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import color from '../../../colors';

const ProgramDive = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 0.8rem 1.6rem;
  display: inline-block;
  color: #fff;
  margin-right: 1.6rem;
`;

interface ownProps {
  target: string[];
}
interface ownState {}
class TargetCategory extends Component<ownProps> {
  createDom = () => {
    let returnDom: JSX.Element[] = [];
    this.props.target.forEach(x => {
      if (x === '保育') {
        returnDom.push(
          <ProgramDive key="保育" theme={{ backgroundColor: color.pink }}>
            保育
          </ProgramDive>,
        );
      } else if (x === 'IT・クリエイティブ') {
        returnDom.push(
          <ProgramDive key="it" theme={{ backgroundColor: color.green }}>
            IT・クリエイティブ
          </ProgramDive>,
        );
      }
    });
    return returnDom;
  };
  render() {
    return <Fragment>{this.createDom()}</Fragment>;
  }
}
export default TargetCategory;
