import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import color from '../../colors';
import FooterItem from './FooterItem';

const FooterBox = styled.footer`
  background-color: ${color.footerBackGroudn};
  color: #fff;
  padding: 8.3rem;
  // 100vw = 画面フルサイズ　100% = 対象コンテンツフルサイズ　
  // -1　：ネガティブマージンを使う事で幅が広がる為、マイナス値を掛ける。
  margin-left: calc(((100vw - 100%) / 2) * -1);
  margin-right: calc(((100vw - 100%) / 2) * -1);
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: ${({ theme }) => theme.content};
  width: ${({ theme }) => theme.width};
`;
const OtherItem = styled.div`
  margin: 0 1.4rem;
  & a {
    color: #fff;
  }
  & a:hover {
    color: ${color.primary};
  }
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
    let dataURL = 'http://localhost/wp-json/wp-api-menus/v2/menus/4';
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
        <FlexBox>
          <CopyRight>
            © {new Date().getFullYear()}
            {` `}COS{` `}Educational{` `}Consulting{` `}Inc.
          </CopyRight>
          <FlexBox theme={{ width: '100%', content: 'flex-end' }}>
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
