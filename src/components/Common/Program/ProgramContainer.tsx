import React, { Component } from 'react';
import styled from 'styled-components';

import Heading2 from '../Heading2';
import ProgramItemBox from './ProgramItemBox';
import { media } from '../../../utile/Helper';
import { Titles } from '../../../constants/Titles';

interface OwnProps {}
interface OwnState {
  data: {
    acf: {
      hoikupediaSubTitle: string;
      hoikupediaText: string;
      frogSubTitle: string;
      frogText: string;
      nadeshikoText: string;
      nannySubTitle: string;
      nannyText: string;
      immigrationSubTitle: string;
      immigrationText: string;
    };
  };
}

const FlexBox = styled.div`
  ${media.desktop`display: flex;`}
`;

const Container = styled.div`
  padding-top: 8.4rem;
  padding-bottom: 8rem;
`;

class ProgramContainer extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      data: {
        acf: {
          hoikupediaSubTitle: '',
          hoikupediaText: '',
          frogSubTitle: '',
          frogText: '',
          nadeshikoText: '',
          nannySubTitle: '',
          nannyText: '',
          immigrationSubTitle: '',
          immigrationText: '',
        },
      },
    };
  }
  componentDidMount() {
    let dataURL = 'http://localhost/wp-json/wp/v2/pages/37';
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
        });
      });
  }
  render() {
    let data = this.state.data.acf;
    return (
      <Container>
        <Heading2>{Titles.ourProgram}</Heading2>
        <FlexBox>
          <ProgramItemBox
            hedding3="ホイクペディア"
            subTitle={data.hoikupediaSubTitle}
            text={data.hoikupediaText}
            link={'/program/ECE'}
          />
          <ProgramItemBox
            hedding3="Frog"
            subTitle={data.frogSubTitle}
            text={data.frogText}
            link={'/program/it'}
          />
        </FlexBox>
        <FlexBox style={{ paddingTop: '1.6rem' }}>
          <ProgramItemBox
            hedding3="ナデシコ留学"
            subTitle={data.nannySubTitle}
            text={data.nadeshikoText}
            link={'/program/nadeshiko'}
          />

          <ProgramItemBox
            hedding3="Nanny From Japan"
            subTitle={data.nannySubTitle}
            text={data.nannyText}
            link={'/program/nanny'}
          />

          <ProgramItemBox
            hedding3="COS Immigration Consulting"
            subTitle={data.immigrationSubTitle}
            text={data.immigrationText}
            link={'/program/immigration'}
          />
        </FlexBox>
      </Container>
    );
  }
}
export default ProgramContainer;
