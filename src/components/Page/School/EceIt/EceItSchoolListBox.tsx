import React, { Component } from 'react';
import styled from 'styled-components';
import EceItSchoolBox from './EceItSchoolBox';
import { SpecialSchoolType } from '../../../../type/SpecialSchoolType';
import { getCustomPostApi } from '../../../../utile/CustomPostApi';
import { Heading2 } from '../../..';
import color from '../../../colors';

const DivBox = styled.div`
  background-color: ${color.lightGray};
  margin-right: calc(((100vw - 100%) / 2) * -1);
  margin-left: calc(((100vw - 100%) / 2) * -1);
  padding: 84px 6%;
`;

interface OwnProps {
  boxTitle: string;
  categoryNum: number;
}
interface OwnState {
  specialSchoolData: SpecialSchoolType[];
}

class EceItSchoolListBox extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      specialSchoolData: [
        {
          title: { rendered: '' },
          acf: {
            schoolOverview: '',
            dliNumber: '',
            phoneNumber: '',
            webSite: '',
            campus: '',
            mainProgram: '',
            img: '',
            logo: '',
            order: '',
          },
        },
      ],
    };
  }

  async createCustomPostData() {
    const state = await getCustomPostApi(
      'ece_it_school',
      'special_school_category',
      this.props.categoryNum,
    );
    this.setState({ specialSchoolData: state });
  }

  componentDidMount() {
    this.createCustomPostData();
  }
  render() {
    let orderedData = this.state.specialSchoolData.sort(function(a, b) {
      return Number(a.acf.order) < Number(b.acf.order) ? -1 : 1;
    });
    return (
      <DivBox>
        <Heading2>{this.props.boxTitle}</Heading2>
        {orderedData.map((x, index) => (
          <EceItSchoolBox key={index} specialData={x} />
        ))}
      </DivBox>
    );
  }
}
export default EceItSchoolListBox;
