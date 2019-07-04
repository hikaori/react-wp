import React, { Component } from 'react';
import styled from 'styled-components';

import { Heading2 } from '../../';
import color from '../../colors';
import { media } from '../../../utile/Helper';

const Div = styled.div`
  background: ${color.lightGray};
  margin-right: calc(((100vw - 100%) / 2) * -1);
  margin-left: calc(((100vw - 100%) / 2) * -1);
  padding-bottom: 80px;
  padding-top: 80px;
`;
const Flex = styled.div`
  display: flex;
  padding-right: 7.5rem;
  padding-left: 7.5rem;
  flex-wrap: wrap;
  ${media.tablet`
  flex-direction: column; 
  padding-right: 1.6rem;
  padding-left: 1.6rem;
  `}
`;

interface OwnProps {
  h2: string;
}
interface OwnState {}

class MainServicesSection extends Component<OwnProps, OwnState> {
  render() {
    return (
      <Div>
        <Heading2>{this.props.h2}</Heading2>
        <Flex>{this.props.children}</Flex>
      </Div>
    );
  }
}
export default MainServicesSection;
