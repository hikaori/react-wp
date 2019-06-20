import React, { Component } from 'react';
import styled from 'styled-components';

import FooterProgram from './FooterProgram';
import FooterCompanyInfo from './FooterCompanyInfo';

const FlexBox = styled.div`
  display: flex;
  justify-content: ${({ theme }) => theme.content};
  width: ${({ theme }) => theme.width};
  & a {
    color: #fff;
  }
  padding-bottom: 6.5rem;
`;
const MenuBox = styled.div`
  margin: 0 2%;
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
    console.log(menus[0]);
    // const menus = this.state.menus.items;
    return (
      <FlexBox>
        <FlexBox theme={{ width: '100%' }}>
          <FooterProgram menu={menus[0]} />
          <FooterProgram menu={menus[1]} />
          <MenuBox>
            <FooterProgram menu={menus[2]} />
            <FooterProgram menu={menus[3]} />
          </MenuBox>
          <FooterProgram menu={menus[4]} />
        </FlexBox>
        <div>
          <FooterCompanyInfo />
        </div>
      </FlexBox>
    );
  }
}
export default FooterItem;
