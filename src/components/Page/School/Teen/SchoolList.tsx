import React, { Component } from 'react';
import styled from 'styled-components';

import { Heading2 } from '../../..';
import ItemBox from './ItemBox';
import colors from '../../../colors';

const BoxDiv = styled.div`
  padding: 8rem 7%;
  background-color: ${colors.lightGray};
  margin-right: calc(((100vw - 100%) / 2) * -1);
  margin-left: calc(((100vw - 100%) / 2) * -1);
`;
const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  & .school-box:nth-of-type(3n) {
    margin-right: 0px;
  }
`;

interface OwnProps {}
interface OwnState {
  schoolData: [
    {
      acf: {
        displayNumber: number;
        schoolDistrictJap: string;
        schoolDistrictEng: string;
        numberOfSchool: string;
        serviceButtonText: string;
        populationOfJapanese: string;
        enrollment: string;
        schoolImg: string;
        schoolLink: string;
      };
    }
  ];
}

class SchoolList extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      schoolData: [
        {
          acf: {
            displayNumber: 0,
            schoolDistrictJap: '',
            schoolDistrictEng: '',
            numberOfSchool: '',
            serviceButtonText: '',
            populationOfJapanese: '',
            enrollment: '',
            schoolImg: '',
            schoolLink: '',
          },
        },
      ],
    };
  }
  componentDidMount() {
    let typeName = 'teen_school';
    let postNum = 13;
    let serviceDataURL = `http://localhost/wp-json/wp/v2/${typeName}?per_page=${postNum}`;
    fetch(serviceDataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          schoolData: res,
        });
      });
  }

  createDom = (data: any) => {
    let returnDom: JSX.Element[] = [];
    data.map((x: any, index: number) =>
      returnDom.push(
        <ItemBox
          nameJap={x.acf.schoolDistrictJap}
          nameEng={x.acf.schoolDistrictEng}
          numberOfSchool={x.acf.numberOfSchool}
          population={x.acf.populationOfJapanese}
          enrollment={x.acf.enrollment}
          img={x.acf.schoolImg}
          link={x.acf.schoolLink}
        />,
      ),
    );
    return returnDom;
  };
  render() {
    let data = this.state.schoolData;
    let orderedData = data.sort(function(a, b) {
      return Number(a.acf.displayNumber) < Number(b.acf.displayNumber) ? -1 : 1;
    });
    console.log(orderedData);

    return (
      <BoxDiv>
        <Heading2>BC州にある高等学校・中学校の学区一覧</Heading2>
        <FlexDiv>{this.createDom(orderedData)}</FlexDiv>
      </BoxDiv>
    );
  }
}
export default SchoolList;
