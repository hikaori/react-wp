import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Heading3 from '../Heading3';
import { Button } from '../../Button';
import { ProgramItemBoxHoikupeia } from './ProgramItemBoxStyle';

interface OwnProps {
  hedding3: string;
  subTitle: string;
  text: string;
}
const Title = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1.8rem;
  font-family: a-otf-midashi-go-mb31-pr6n;
`;

class ProgramItemBox extends Component<OwnProps> {
  render() {
    return (
      <ProgramItemBoxHoikupeia>
        <Heading3>{this.props.hedding3}</Heading3>
        <Title>{this.props.subTitle}</Title>
        <p>{this.props.text}</p>
        <Button>more</Button>
        <img src="" />
      </ProgramItemBoxHoikupeia>
    );
  }
}
export default ProgramItemBox;
