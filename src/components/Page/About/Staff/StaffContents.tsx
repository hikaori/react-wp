import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { Heading2 } from '../../..';
import StaffBox from './StaffBox';

const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const VancouverDiv = styled.div`
  margin-top: 83px;
`;
const JapanDiv = styled.div`
  margin-bottom: 28px;
  margin-top: 35px;
`;

interface ownProps {}
interface ownState {
  staffData: [
    {
      branch_category: [number];
      acf: {
        staffName: string;
        positionName: string;
        staffImg: string;
        staff_order: string;
      };
    }
  ];
}

class StaffContents extends Component<ownProps, ownState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      staffData: [
        {
          branch_category: [0],
          acf: {
            staffName: '',
            positionName: '',
            staffImg: '',
            staff_order: '',
          },
        },
      ],
    };
  }
  componentDidMount() {
    let typeName = 'staff';
    let postsNum = 16;
    let DataURL = `http://localhost/wp-json/wp/v2/${typeName}//?per_page=${postsNum}`;
    fetch(DataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          staffData: res,
        });
      });
  }

  modifyData = (
    allStaffData: [
      {
        branch_category: [number];
        acf: {
          staffName: string;
          positionName: string;
          staffImg: string;
          staff_order: string;
        };
      }
    ],
    branchCategoryNum: number,
  ) => {
    let branchStaffData = allStaffData.filter(x =>
      x.branch_category.includes(branchCategoryNum),
    );
    let orderedStaffData = branchStaffData.sort(function(a, b) {
      return Number(a.acf.staff_order) < Number(b.acf.staff_order) ? -1 : 1;
    });
    return orderedStaffData;
  };

  createStaffBox = (
    staffs: {
      branch_category: [number];
      acf: {
        staffName: string;
        positionName: string;
        staffImg: string;
        staff_order: string;
      };
    }[],
  ) => {
    const returnDom: JSX.Element[] = [];
    for (let i = 0; i < staffs.length; i++) {
      if (i < 2) {
        returnDom.push(
          <StaffBox
            key={i}
            name={staffs[i].acf.staffName}
            positionName={staffs[i].acf.positionName}
            img={staffs[i].acf.staffImg}
            width={'432px'}
            height={'243.5px'}
            class={'big'}
          />,
        );
      } else {
        returnDom.push(
          <StaffBox
            key={i}
            name={staffs[i].acf.staffName}
            positionName={staffs[i].acf.positionName}
            img={staffs[i].acf.staffImg}
            width={'279px'}
            height={'235px'}
            class={'small'}
          />,
        );
      }
    }
    return returnDom;
  };

  render() {
    let staffData = this.state.staffData;
    const categoryNumOfVancouver: number = 7;
    const categoryNumOfJapan: number = 8;

    return (
      <Fragment>
        <VancouverDiv>
          <Heading2>バンクーバー本社</Heading2>
          <FlexDiv>
            {this.createStaffBox(
              this.modifyData(staffData, categoryNumOfVancouver),
            )}
          </FlexDiv>
        </VancouverDiv>
        <JapanDiv>
          <Heading2>日本支社</Heading2>
          <FlexDiv>
            {this.createStaffBox(
              this.modifyData(staffData, categoryNumOfJapan),
            )}
          </FlexDiv>
        </JapanDiv>
      </Fragment>
    );
  }
}
export default StaffContents;
