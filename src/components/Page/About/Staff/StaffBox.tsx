import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../../../../utile/Helper';
import fonts from '../../../fonts';

const Div = styled.div`
  &.big {
    width: 50%;
    ${media.tablet`width:100%;`}
  }
  &.small {
    width: 33.33%;
    ${media.tablet`width:50%;`}
  }
  padding: 0 15px 32px 15px;
  & img {
    width: 100%;
    height: auto;
  }
`;

const NameDiv = styled.div`
font-family:${fonts.jpMedium}
font-weight: bold;
font-size:1.6rem;
`;

interface ownProps {
  name: string;
  positionName: string;
  img: string;
  width: string;
  height: string;
  class: string;
}
interface ownState {}
class StaffBox extends Component<ownProps, ownState> {
  render() {
    return (
      <Div className={this.props.class}>
        <div>
          <img
            src={this.props.img}
            width={this.props.width}
            height={this.props.height}
            alt={this.props.name}
          />
        </div>
        <NameDiv>{this.props.name}</NameDiv>
        <div>{this.props.positionName}</div>
      </Div>
    );
  }
}
export default StaffBox;
