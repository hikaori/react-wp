import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { CaretDown } from 'styled-icons/boxicons-regular/CaretDown';

import color from '../../colors';
import StepBox from './StepBox';
import { Heading2 } from '../..';

const Div = styled.div`
  padding-top: 8rem;
  padding-bottom: 8rem;
  background: ${color.lightGray};
  margin-left: calc(((100vw - 100%) / 2) * -1);
  margin-right: calc(((100vw - 100%) / 2) * -1);
  & h2 {
    margin-bottom: 13.45rem;
  }
`;
const ArrowDownIcon = styled.div`
  text-align: center;
  margin-top: 36px;
  margin-bottom: 24px;
`;

interface ownProps {
  title: string;
}
interface ownState {}
class StepsSection extends Component<ownProps, ownState> {
  render() {
    return (
      <Div>
        <Heading2>{this.props.title}</Heading2>
        <StepBox color={'red'}>test</StepBox>
        <ArrowDownIcon>
          <CaretDown size="26" />
        </ArrowDownIcon>
      </Div>
    );
  }
}
export default StepsSection;
