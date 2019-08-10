import React, { Component } from 'react';
import styled from 'styled-components';
import EceItSchoolBox from './EceItSchoolBox';
import { SpecialDataType } from './SpecialDataType';

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
  specialSchoolData: SpecialDataType[];
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

  componentDidMount() {
    let typeName = 'ece_it_school';
    let categoryName = 'special_school_category';
    let categoryNum = this.props.categoryNum;
    let serviceDataURL = `http://localhost/wp-json/wp/v2/${typeName}?${categoryName}=${categoryNum}`;
    fetch(serviceDataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          specialSchoolData: res,
        });
      });
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
