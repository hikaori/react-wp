import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { AddCircleOutline, RemoveCircleOutline } from 'styled-icons/material';

const Icon = styled.div`
  height: 30px;
  width: 30px;
  margin: 10px;
  position: absolute;
  right: 30px;
  & svg {
    position: absolute;
  }
`;
interface OwnProps {
  parentFunc: any;
  isCliked: boolean;
}
interface OwnState {}

class Arrow extends Component<OwnProps, OwnState> {
  state = { isCliked: false };
  handleClick(): any {
    return this.props.parentFunc();
  }

  render() {
    return (
      <Fragment>
        <Icon onClick={() => this.handleClick()} className="arrow">
          {this.props.isCliked ? (
            <RemoveCircleOutline className="extendArea" />
          ) : (
            <AddCircleOutline className="extendArea" />
          )}
        </Icon>
      </Fragment>
    );
  }
}
export default Arrow;
