import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import Heading3 from '../Heading3';
import { Button } from '../../Button';
import {
  ProgramItemBoxHoikupedia,
  ProgramItemBoxFrog,
  ProgramItemBoxNadeshiko,
  ProgramItemBoxNanny,
  ProgramItemBoxImmigration,
} from './ProgramItemBoxStyle';
import hoikupediaLogo from '../../../assets/logo/HoikupediaLogo.png';
import frogLogo from '../../../assets/logo/FrogLogo.svg';
import nadeshikoLogo from '../../../assets/logo/NadeshikoRyugakuLogo.svg';
import nannyLogo from '../../../assets/logo/NannyFromJapanLogo.svg';
import immigrationLogo from '../../../assets/logo/COSImmigrationLogo.svg';

const Title = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1.8rem;
  font-family: a-otf-midashi-go-mb31-pr6n;
`;
const LogoDiv = styled.div`
  text-align: end;
  margin-top: 3.2rem;
  & img {
    max-width: 160px;
    height: 6.4rem;
    margin-bottom: 0rem;
  }
`;
const HoikupediaDiv = styled(LogoDiv)`
  & img {
    height: auto;
  }
`;

interface OwnProps {
  hedding3: string;
  subTitle: string;
  text: string;
}

class ProgramItemBox extends Component<OwnProps> {
  baseDom = (imgURL: any) => {
    return (
      <Fragment>
        <Heading3>{this.props.hedding3}</Heading3>
        <Title>{this.props.subTitle}</Title>
        <p>{this.props.text}</p>
        <div>
          <Button>more</Button>
          <LogoDiv>
            <img src={imgURL} />
          </LogoDiv>
        </div>
      </Fragment>
    );
  };

  hoikupediaDom = (
    <Fragment>
      <Heading3>{this.props.hedding3}</Heading3>
      <Title>{this.props.subTitle}</Title>
      <p>{this.props.text}</p>
      <Button>more</Button>
    </Fragment>
  );
  createDom(program: any) {
    switch (program) {
      case 'ホイクペディア':
        return (
          <ProgramItemBoxHoikupedia>
            {this.hoikupediaDom}
            <HoikupediaDiv>
              <img src={hoikupediaLogo} />
            </HoikupediaDiv>
          </ProgramItemBoxHoikupedia>
        );
      case 'Frog':
        return (
          <ProgramItemBoxFrog>{this.baseDom(frogLogo)}</ProgramItemBoxFrog>
        );
      case 'ナデシコ留学':
        return (
          <ProgramItemBoxNadeshiko>
            {this.baseDom(nadeshikoLogo)}
          </ProgramItemBoxNadeshiko>
        );
      case 'Nanny From Japan':
        return (
          <ProgramItemBoxNanny>{this.baseDom(nannyLogo)}</ProgramItemBoxNanny>
        );
      case 'COS Immigration Consulting':
        return (
          <ProgramItemBoxImmigration>
            {this.baseDom(immigrationLogo)}
          </ProgramItemBoxImmigration>
        );
      default:
        return 'foo';
    }
  }
  render() {
    return this.createDom(this.props.hedding3);
  }
}
export default ProgramItemBox;
