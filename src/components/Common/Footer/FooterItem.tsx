import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Media from 'react-media';

import FooterProgram from './FooterProgram';
import FooterProgramMobile from './FooterProgramMobile';
import FooterCompanyInfo from './FooterCompanyInfo';
import color from '../../colors';
import { media } from '../../../utile/Helper';
import { IP } from '../../../utile/IPadress';

const FlexBox = styled.div`
  display: flex;
  justify-content: ${({ theme }) => theme.content};
  width: ${({ theme }) => theme.width};
  padding-right: ${({ theme }) => theme.paddingRigt};
  & a {
    color: #fff;
  }
  & a:hover {
    color: ${color.primary};
  }
  padding-bottom: 6.5rem;
  &.reverse {
    ${media.tablet`flex-direction: column-reverse; padding-bottom: 0rem;`}
  }
  &.nonFlex {
    ${media.tablet`display: block;
     padding-right:0; padding-bottom:0rem`}
  }
`;
const MenuBox = styled.div`
  margin: 0 2%;
  width: 25%;
  ${media.tablet`width: 100%; margin: 0;`}
`;

interface OwnProps {}
interface OwnState {
  menus: {
    items: [
      {
        title: string;
        url: string;
        children: [{ title: string; url: string }];
      },
      {
        title: string;
        url: string;
        children: [{ title: string; url: string }];
      },
      {
        title: string;
        url: string;
        children: [{ title: string; url: string }];
      },
      {
        title: string;
        url: string;
        children: [{ title: string; url: string }];
      },
      {
        title: string;
        url: string;
        children: [{ title: string; url: string }];
      }
    ];
  };
}

class FooterItem extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      menus: {
        items: [
          { title: '', url: '', children: [{ title: '', url: '' }] },
          { title: '', url: '', children: [{ title: '', url: '' }] },
          { title: '', url: '', children: [{ title: '', url: '' }] },
          { title: '', url: '', children: [{ title: '', url: '' }] },
          { title: '', url: '', children: [{ title: '', url: '' }] },
        ],
      },
    };
  }

  componentDidMount() {
    // WordPress管理画面 menu名：FooterMainMenu
    let menuId = 11;
    let dataURL = `${IP}/wp-json/wp-api-menus/v2/menus/${menuId}`;
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
    const desktopDom = (
      <Fragment>
        <FooterProgram menu={menus[0]} width="25%" />
        <FooterProgram menu={menus[1]} width="25%" />
        <MenuBox>
          <FooterProgram menu={menus[2]} width="100%" />
          <FooterProgram menu={menus[3]} width="100%" />
        </MenuBox>
        <FooterProgram menu={menus[4]} width="25%" />
      </Fragment>
    );
    const tabletDom = (menus: any) => {
      let returnDom: JSX.Element[] = [];
      menus.forEach((menu: any, index: number) => {
        returnDom.push(<FooterProgramMobile menu={menu} key={index} />);
      });
      return returnDom;
    };

    return (
      <FlexBox className="reverse">
        <FlexBox
          theme={{ width: '100%', paddingRigt: '160px' }}
          className="nonFlex"
        >
          <Media query="(max-width: 1024px)">
            {matches => (matches ? tabletDom(menus) : desktopDom)}
          </Media>
        </FlexBox>
        <div>
          <FooterCompanyInfo />
        </div>
      </FlexBox>
    );
  }
}
export default FooterItem;
