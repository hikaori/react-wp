import React, { Component, Fragment } from 'react';
import { Close } from 'styled-icons/evil/Close';
import styled from 'styled-components';

import color from '../colors';

const FixDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background:${color.lightGray}
  margin-right: calc(((100vw - 100%) / 2) * -1);
  margin-left: calc(((100vw - 100%) / 2 ) * -1);
  padding-top:82px;
  padding-bottom:82px;
  margin-bottom:100px;
`;

const IconDiv = styled.div`
  margin: 0 4rem;
  width: 28px;
`;
const Img = styled.img`
  width: 240px;
`;

interface OwnProps {
  logo1: string;
  logo2: string | null;
}
interface OwnState {}

class ProgramLogosSection extends Component<OwnProps, OwnState> {
  render() {
    return (
      <FixDiv>
        <Img src={this.props.logo1} />
        {this.props.logo2 ? (
          <Fragment>
            <IconDiv>
              <Close />
            </IconDiv>
            <Img src={this.props.logo2} />
          </Fragment>
        ) : (
          <Fragment />
        )}
      </FixDiv>
    );
  }
}
export default ProgramLogosSection;
