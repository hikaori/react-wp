import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import color from '../../colors';
import FooterItem from './FooterItem';
import { media } from '../../../utile/Helper';

const FooterBox = styled.footer`
  background-color: ${color.footerBackGroudn};
  color: #fff;
  padding: 8.3rem;
  ${media.tablet`padding: 1.8rem`}
  // 100vw = 画面フルサイズ　100% = 対象コンテンツフルサイズ　
  // -1　：ネガティブマージンを使う事で幅が広がる為、マイナス値を掛ける。
  margin-left: calc(((100vw - 100%) / 2) * -1);
  margin-right: calc(((100vw - 100%) / 2) * -1);
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: ${({ theme }) => theme.content};
  width: ${({ theme }) => theme.width};
  &.reverse {
    ${media.tablet`flex-direction: column-reverse;`}
  }
  &.mobileFlexOther {
    ${media.tablet`flex-wrap: wrap;
     justify-content: flex-start; width: 100%; margin: 3.2rem 0;`}
  }
`;
const OtherItem = styled.div`
  margin: 0 1.4rem;
  & a {
    color: #fff;
  }
  & a:hover {
    color: ${color.primary};
  }
  ${media.tablet`margin: 0rem; width:50%;`}
`;
const CopyRight = styled.div`
  width: 100%;
`;

interface OwnProps {}
interface OwnState {
  menus: {
    items: [{ title: string; url: string }];
  };
}

class Footer extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      menus: {
        items: [{ title: '', url: '' }],
      },
    };
  }

  componentDidMount() {
    let menuId = 10;
    let dataURL = `http://localhost/wp-json/wp-api-menus/v2/menus/${menuId}`;
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          menus: res,
        });
      });
  }

  render() {
    let menus = this.state.menus.items;
    return (
      <FooterBox>
        <FooterItem />
        <FlexBox className="reverse">
          <CopyRight>
            © {new Date().getFullYear()}
            {` `}COS{` `}Educational{` `}Consulting{` `}Inc.
          </CopyRight>
          <FlexBox
            theme={{ width: '100%', content: 'flex-end' }}
            className="mobileFlexOther"
          >
            {menus.map((item, index) => (
              <OtherItem key={index}>
                <Link to={'/'}>{item.title}</Link>
              </OtherItem>
            ))}
          </FlexBox>
        </FlexBox>
      </FooterBox>
    );
  }
}

export default Footer;
