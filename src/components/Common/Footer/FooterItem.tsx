import React, { Component } from 'react';
import styled from 'styled-components';

import FooterProgram from './FooterProgram';
import FooterCompanyInfo from './FooterCompanyInfo';
import color from '../../colors';

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
`;
const MenuBox = styled.div`
  margin: 0 2%;
  width: 25%;
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
    let dataURL = 'http://localhost/wp-json/wp-api-menus/v2/menus/3';
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
    // console.log(menus[0]);
    return (
      <FlexBox>
        <FlexBox theme={{ width: '100%', paddingRigt: '160px' }}>
          <FooterProgram menu={menus[0]} width="25%" />
          <FooterProgram menu={menus[1]} width="25%" />
          <MenuBox>
            <FooterProgram menu={menus[2]} width="100%" />
            <FooterProgram menu={menus[3]} width="100%" />
          </MenuBox>
          <FooterProgram menu={menus[4]} width="25%" />
        </FlexBox>
        <div>
          <FooterCompanyInfo />
        </div>
      </FlexBox>
    );
  }
}
export default FooterItem;
