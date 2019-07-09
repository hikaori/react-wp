import React, { Component } from 'react';
import styled from 'styled-components';
import font from '../../../fonts';
import { media } from '../../../../utile/Helper';

const VisaItemLi = styled.li`
  margin-bottom: 24px;
  ${media.tablet`margin-bottom: 32px;`}
`;

const VisaNameDiv = styled.div`
  font-family: ${font.english};
  margin-bottom: 16px;
  font-weight: 700;
`;

interface ownProps {
  visaName: string;
  description: string;
}
interface ownState {}
class VisaItem extends Component<ownProps> {
  render() {
    return (
      <VisaItemLi>
        <VisaNameDiv>{this.props.visaName}</VisaNameDiv>
        <div dangerouslySetInnerHTML={{ __html: this.props.description }} />
      </VisaItemLi>
    );
  }
}
export default VisaItem;
