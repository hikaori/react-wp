import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import Heading3 from '../Heading3';
import { Button } from '../../Button';
import { ProgramItemBoxStyle } from './ProgramItemBoxStyle';
import hoikupediaLogo from '../../../assets/logo/HoikupediaLogo.png';
import frogLogo from '../../../assets/logo/FrogLogo.svg';
import nadeshikoLogo from '../../../assets/logo/NadeshikoRyugakuLogo.svg';
import nannyLogo from '../../../assets/logo/NannyFromJapanLogo.svg';
import immigrationLogo from '../../../assets/logo/COSImmigrationLogo.svg';
import babyCarriageImg from '../../../assets/images/baby-carriage-solid.svg';
import babySolidImg from '../../../assets/images/baby-solid.svg';
import graduationImg from '../../../assets/images/graduation-cap-solid.svg';
import laptopImg from '../../../assets/images/laptop-code-solid.svg';
import atlasImg from '../../../assets/images/atlas-solid.svg';

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
const ButtonLogoDiv = styled.div`
  margin-top: auto;
`;

interface OwnProps {
  hedding3: string;
  subTitle: string;
  text: string;
}

class ProgramItemBox extends Component<OwnProps> {
  baseDom = (boxWidth: string, backImageUrl: any, imgUrl: any) => {
    let logoDom: JSX.Element;
    let buttonDom: JSX.Element;
    if (this.props.hedding3 === 'ホイクペディア') {
      logoDom = (
        <HoikupediaDiv>
          <img src={imgUrl} alt={this.props.hedding3} />
        </HoikupediaDiv>
      );
    } else {
      logoDom = (
        <LogoDiv>
          <img src={imgUrl} alt={this.props.hedding3} />
        </LogoDiv>
      );
    }

    if (this.props.hedding3 === 'COS Immigration Consulting') {
      buttonDom = <Button>COS Immigrationの詳細はこちら</Button>;
    } else {
      buttonDom = <Button>{this.props.hedding3}の詳細はこちら</Button>;
    }

    return (
      <Fragment>
        <ProgramItemBoxStyle
          theme={{
            width: { boxWidth },
            backImageURL: `${backImageUrl}`,
          }}
        >
          <Heading3>{this.props.hedding3}</Heading3>
          <Title>{this.props.subTitle}</Title>
          <p>{this.props.text}</p>
          <ButtonLogoDiv>
            {buttonDom}
            {logoDom}
          </ButtonLogoDiv>
        </ProgramItemBoxStyle>
      </Fragment>
    );
  };

  createDom(program: any) {
    switch (program) {
      case 'ホイクペディア':
        return this.baseDom('50%', babyCarriageImg, hoikupediaLogo);
      case 'Frog':
        return this.baseDom('50%', laptopImg, frogLogo);
      case 'ナデシコ留学':
        return this.baseDom('33%', graduationImg, nadeshikoLogo);
      case 'Nanny From Japan':
        return this.baseDom('33%', babySolidImg, nannyLogo);
      case 'COS Immigration Consulting':
        return this.baseDom('33%', atlasImg, immigrationLogo);
      default:
        return '';
    }
  }
  render() {
    return this.createDom(this.props.hedding3);
  }
}
export default ProgramItemBox;
