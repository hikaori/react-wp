import React, { Component } from 'react';
import styled from 'styled-components';

import { Heading3 } from '../../..';
import { SpecialSchoolType } from '../../../../type/SpecialSchoolType';
import color from '../../../colors';
import LinkHandle from '../../../../utile/LinkHandle';

const SchoolBox = styled.div`
  display: flex;
  margin-top: 24px;
  margin-left: calc(((100vw - 100%) / 2) * -1);
  margin-right: calc(((100vw - 100%) / 2) * -1);
  background: linear-gradient(
      180deg,
      rgba(225, 225, 225, 0.5),
      rgb(240, 240, 240, 1)
    ),
    url(${({ theme }) => theme.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  .contents {
    display: flex;
    padding: 0 6%;
    background: linear-gradient(90deg, #f0f0f0, rgba(225, 225, 225, 0));
  }
  &.school-box:nth-child(odd) .contents {
    flex-direction: row-reverse;
    background: linear-gradient(90deg, rgba(225, 225, 225, 0),#f0f0f0);
  }
  &.school-box:nth-child(odd) .logo {
    justify-content: flex-start;
`;

const SchoolLogoDiv = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  padding-top: 17.5px;
  img {
    max-width: 200px;
    max-height: 80px;
  }
`;

const SchoolTextBoxDiv = styled.div`
  width: 50%;
`;

const MainProgramDiv = styled.div``;

const DivBox = styled.div`
  margin: 17.5px 0;
  background: rgba(255, 255, 255, 0.5);
  padding: 1.6rem;
  & a {
    display: inline;
    color: ${color.blue};
  }
  .phone a {
    color: rgba(0, 0, 0, 0.8);
  }
  .text-bold {
    font-weight: bold;
  }
  .red-bullet,
  .red-bullet li {
    margin: 0;
  }
  .red-bullet ul::before,
  .red-bullet li::before {
    content: '• ';
    color: ${color.red};
  }
  .red-line li {
    margin: 0 0 0 1.6rem;
  }
  .red-line li::before {
    content: '- ';
    color: ${color.red};
  }
`;

interface OwnProps {
  specialData: SpecialSchoolType;
}
interface OwnState {}

class EceItSchoolBox extends Component<OwnProps, OwnState> {
  render() {
    const title = this.props.specialData.title.rendered;
    const data = this.props.specialData.acf;
    const tel = `"tel:${data.phoneNumber}"`;
    return (
      <SchoolBox theme={{ backgroundImage: data.img }} className="school-box">
        <div className="contents">
          <SchoolTextBoxDiv>
            <DivBox>
              <Heading3>学校概要</Heading3>
              <div>{data.schoolOverview}</div>
            </DivBox>
            <DivBox>
              <Heading3>主なプログラム</Heading3>
              <MainProgramDiv
                dangerouslySetInnerHTML={{ __html: data.mainProgram }}
              />
            </DivBox>
            <DivBox>
              <Heading3>学校情報</Heading3>
              <DivBox>
                <div className="text-bold">DLIナンバー</div>
                <div>{data.dliNumber}</div>
              </DivBox>
              <DivBox>
                <div className="text-bold">電話番号</div>
                <div className="phone">
                  <a href={tel}>{data.phoneNumber}</a>
                </div>
              </DivBox>
              <DivBox>
                <div className="text-bold">ウェブサイト</div>
                <div>
                  <LinkHandle to={data.webSite}>{data.webSite}</LinkHandle>
                </div>
              </DivBox>
              <DivBox>
                <div className="text-bold">開校キャンパス</div>
                <div dangerouslySetInnerHTML={{ __html: data.campus }} />
              </DivBox>
            </DivBox>
          </SchoolTextBoxDiv>
          <SchoolLogoDiv className="logo">
            <div>
              <img src={data.logo} alt={title} />
            </div>
          </SchoolLogoDiv>
        </div>
      </SchoolBox>
    );
  }
}
export default EceItSchoolBox;
