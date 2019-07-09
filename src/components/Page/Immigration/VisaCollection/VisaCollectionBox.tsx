import React, { Component } from 'react';
import styled from 'styled-components';

import VisaItem from './VisaItem';
import { Heading3 } from '../../../index';
import { media } from '../../../../utile/Helper';

const VisaCollectionBoxDiv = styled.div`
  background-color: #fff;
  padding: 6.4rem;
  ${media.tablet`
    padding: 2.4rem;
    margin: 2.4rem 0;
  `}
`;

interface ownProps {
  category: string;
  collection: { title: string; text: string }[];
}
interface ownState {}
class VisaCollectionBox extends Component<ownProps> {
  render() {
    return (
      <VisaCollectionBoxDiv>
        <Heading3>{this.props.category}</Heading3>
        <ul>
          {this.props.collection.map((x, index) => (
            <VisaItem key={index} visaName={x.title} description={x.text} />
          ))}
        </ul>
      </VisaCollectionBoxDiv>
    );
  }
}
export default VisaCollectionBox;
