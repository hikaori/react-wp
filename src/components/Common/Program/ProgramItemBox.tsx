import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Heading3 from '../Heading3';
import { Button } from '../Button';
import {
  ProgramItemBoxStyle,
  Title,
  LogoDiv,
  HoikupediaDiv,
  ButtonLogoDiv,
} from './ProgramItemBoxStyle';
import hoikupediaLogo from '../../../assets/logo/HoikupediaLogo.png';
import frogLogo from '../../../assets/logo/FrogLogo.svg';
import nadeshikoLogo from '../../../assets/logo/NadeshikoRyugakuLogo.svg';
import nannyLogo from '../../../assets/logo/NannyFromJapanLogo.svg';
import immigrationLogo from '../../../assets/logo/COSImmigrationConsultingJp.svg';
import babyCarriageImg from '../../../assets/images/baby-carriage-solid.svg';
import babySolidImg from '../../../assets/images/baby-solid.svg';
import graduationImg from '../../../assets/images/graduation-cap-solid.svg';
import laptopImg from '../../../assets/images/laptop-code-solid.svg';
import atlasImg from '../../../assets/images/atlas-solid.svg';

interface OwnProps {
  hedding3: string;
  subTitle: string;
  text: string;
  link: string;
}

class ProgramItemBox extends Component<OwnProps> {
  baseDom = (
    boxWidth: string,
    backImageUrl: any,
    imgUrl: any,
    backImageTabletSize: string,
  ) => {
    let logoDom: JSX.Element;
    let buttonDom: JSX.Element;
    if (this.props.hedding3 === 'ホイクペディア') {
      logoDom = (
        <HoikupediaDiv>
          <Link to={this.props.link}>
            <img src={imgUrl} alt={this.props.hedding3} />
          </Link>
        </HoikupediaDiv>
      );
    } else {
      logoDom = (
        <LogoDiv>
          <Link to={this.props.link}>
            <img src={imgUrl} alt={this.props.hedding3} />
          </Link>
        </LogoDiv>
      );
    }

    if (this.props.hedding3 === 'COS Immigration Consulting') {
      buttonDom = (
        <Button>
          <Link to={this.props.link}>COS Immigrationの詳細はこちら</Link>
        </Button>
      );
    } else {
      buttonDom = (
        <Button>
          <Link to={this.props.link}>{this.props.hedding3}の詳細はこちら</Link>
        </Button>
      );
    }

    return (
      <Fragment>
        <ProgramItemBoxStyle
          theme={{
            width: `${boxWidth}`,
            backImageURL: `${backImageUrl}`,
            backImageTabletSize: `${backImageTabletSize}`,
          }}
        >
          <Heading3>{this.props.hedding3}</Heading3>
          <Title>{this.props.subTitle}</Title>
          <p dangerouslySetInnerHTML={{ __html: this.props.text }} />
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
        return this.baseDom('50%', babyCarriageImg, hoikupediaLogo, '40%');
      case 'Frog':
        return this.baseDom('50%', laptopImg, frogLogo, '40%');
      case 'ナデシコ留学':
        return this.baseDom('33%', graduationImg, nadeshikoLogo, '40%');
      case 'Nanny From Japan':
        return this.baseDom('33%', babySolidImg, nannyLogo, '30%');
      case 'COS Immigration Consulting':
        return this.baseDom('33%', atlasImg, immigrationLogo, '30%');
      default:
        return '';
    }
  }
  render() {
    return this.createDom(this.props.hedding3);
  }
}
export default ProgramItemBox;
