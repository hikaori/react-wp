import React, { Component } from 'react';
import classNames from 'classnames';

import { Heading3 } from '../../..';
import { SpecialSchoolType } from '../../../../type/SpecialSchoolType';
import LinkHandle from '../../../../utile/LinkHandle';
import Arrow from './Arrow';
import {
  SchoolBox,
  SchoolLogoSchoolNameDiv,
  SchoolTextBoxDiv,
  MainProgramDiv,
  DivBox,
} from './EceltSchoolBoxStyle';

interface OwnProps {
  specialData: SpecialSchoolType;
}
interface OwnState {
  isClicked: boolean;
}

class EceItSchoolBox extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      isClicked: false,
    };
  }

  handleClick(): void {
    this.setState(precState => ({ isClicked: !precState.isClicked }));
  }

  render() {
    const title = this.props.specialData.title.rendered;
    const data = this.props.specialData.acf;
    const tel = `"tel:${data.phoneNumber}"`;
    return (
      <SchoolBox theme={{ backgroundImage: data.img }} className="school-box">
        <div className={classNames('contents', { show: this.state.isClicked })}>
          <SchoolTextBoxDiv className="school-texts">
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
                  <LinkHandle to={data.webSite}>こちらから</LinkHandle>
                </div>
              </DivBox>
              <DivBox>
                <div className="text-bold">開校キャンパス</div>
                <div dangerouslySetInnerHTML={{ __html: data.campus }} />
              </DivBox>
            </DivBox>
          </SchoolTextBoxDiv>
          <SchoolLogoSchoolNameDiv className="logo-schoolName">
            <Arrow
              parentFunc={() => {
                this.handleClick();
              }}
              isCliked={this.state.isClicked}
            />
            <div className="logo">
              <img src={data.logo} alt={title} />
            </div>
            <div className="school-name">
              <div className="name">{title}</div>
            </div>
          </SchoolLogoSchoolNameDiv>
        </div>
      </SchoolBox>
    );
  }
}
export default EceItSchoolBox;
