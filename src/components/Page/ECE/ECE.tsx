import React, { Component } from 'react';

import {
  PageBaseLayout,
  PageDescription,
  ProgramLogosSection,
  Heading2,
  Heading3,
  ImagePluTextBox,
  MainServicesSection,
  ServiceBox,
  BottomSection,
  Button,
} from '../..';

import fv from '../../../assets/images/1200_400_defalt.jpg';
import cosLogo from '../../../assets/images/COS_Educational_Consulting_Inc_Logo_Jap.svg';
import hoikupediaLogo from '../../../assets/logo/HoikupediaLogo.png';
import test from '../../../assets/images/304_192_defalt.jpg';
import { Titles } from '../../../constants/Titles';
import school from '../../../assets/images/school-solid.svg';

interface OwnProps {}
interface OwnState {}

class ECE extends Component<OwnProps, OwnState> {
  render() {
    return (
      <PageBaseLayout
        imgURL={fv}
        title={'保育の留学・就職'}
        subTitle={'自由と個性を尊重するカナダから、理想の保育士へ'}
      >
        <PageDescription>
          カナダで保育士として働きたい方から、インターナショナルスクールで働く為に英語を勉強したい保育士さん、海外の保育園を視察し、日本での働き方に活かしたいという方まで、”カナダ”、”保育”、”子ども”というキーワードで関わるすべての方にお役に立てるサービスを目指します。
        </PageDescription>
        <ProgramLogosSection logo1={cosLogo} logo2={hoikupediaLogo} />
        <Heading2>ホイクペディアの保育留学サービス</Heading2>
        <ImagePluTextBox imgURL={test} alt={'test'} isImgRightSide={true}>
          <Heading3>年間200名以上のサポート実績、60以上の提携保育園</Heading3>
          2011年、COSは保育留学をメインに扱う留学エージェントとして創業しました。
          以来、カナダにおける数多くの日本人保育士を対象とし、現在は年間200名以上の方をサポートさせていただいております。
          創業以来8年間の間に、日本・カナダ国内の多くの保育園との友好関係も築くことができ、保育士の就職支援も始めることが可能となりました。
        </ImagePluTextBox>
        <ImagePluTextBox imgURL={test} alt={'test'} isImgRightSide={false}>
          <Heading3>カナダで働くということ</Heading3>
          人口の半分が外国人。“多文化が共生しやすい”というと日本にいる日本人にはわかりにくいですが、半分程度がカナダ以外をルーツにするバンクーバーでは外国人にとっても、カナダ人にとっても重要な事です。“個人を尊重する、不必要な干渉はしない”という文化は、一緒に働く先生も外国人、子どもたちも外国人という街だからこそ根付いた文化であり、この“自分らしくて良い”という文化に惹かれて長期的に住むことを決める方も多いです。
        </ImagePluTextBox>
        <ImagePluTextBox imgURL={test} alt={'test'} isImgRightSide={true}>
          <Heading3>残業無し、持ち帰り無し、書物無し</Heading3>
          日本の保育士さんの悩みで一番多いのは仕事量の多さと、休みの取りにくさと言われています。
          子ども一人ひとりの記録やシーズンごとの行事の準備などをこなしながら、30名程度の子どもの安全を守るのは不可能に近い仕事です。カナダは子どもが保育園にいる間に安全に楽しく過ごすという一番大事な目的の為に、重要性の低い日々の記録や、書物は必要ないとしている園がほとんどです。また、年間に2〜3週間程度の有給消化など、質の高い保育をする為に、まずハッピーな保育士の労働環境をということが徹底されています。
        </ImagePluTextBox>
        <MainServicesSection h2={Titles.mainService}>
          <ServiceBox
            title={'日本の保育士資格をカナダの資格に書換えサポート'}
            img={school}
            imgAlt={'test'}
            buttonText={'詳しく見る（ホイクペディアのサイトに移動します）'}
            link={'/'}
          >
            日本の保育士資格をカナダの州政府機関に申請し、カナダで有効な保育士資格の発行が可能です。
            ホイクペディアでは無料で書き換え可能か査定を行っています。
          </ServiceBox>
          <ServiceBox
            title={'日本の保育士資格をカナダの資格に書換えサポート'}
            img={school}
            imgAlt={'test'}
            buttonText={'詳しく見る（ホイクペディアのサイトに移動します）'}
            link={'/'}
          >
            保育を勉強中の学生さん
          </ServiceBox>
        </MainServicesSection>
      </PageBaseLayout>
    );
  }
}
export default ECE;
