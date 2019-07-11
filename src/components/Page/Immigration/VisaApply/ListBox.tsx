import React, { Component } from 'react';
import styled from 'styled-components';
import font from '../../../fonts';
import { media } from '../../../../utile/Helper';

const ItemDiv = styled.div`
  margin: 35.5px 0;
  padding: ${({ theme }) => theme.padding};
  background-color: ${({ theme }) => theme.backgroundColor};
  overflow: hidden;
  position: relative;
  &.info::before {
    content: 'INFO';
    font-size: 1.6rem;
    height: 20px;
    width: 150px;
    background-color: red;
    display: block;
    text-align: center;
    color: #fff;
    line-height: 1;
    transform: rotate(33deg);
    position: absolute;
    top: 2rem;
    right: -30px;
  }
  &.info {
    color: #fff;
  }
`;
const ItemUl = styled.ul`
  & li:before {
    content: '• ';
    color: ${({ theme }) => theme.listColor};
  }
`;
const TitleDiv = styled.div`
  margin-bottom: 1.6rem;
  font-family: ${font.jpMedium};
`;

interface ownProps {
  title: string;
  description: string | null;
  bullets: string;
  padding: string;
  backgroundColor: string;
  listColor: string;
  className: string;
}
interface ownState {}
class ListBox extends Component<ownProps> {
  render() {
    return (
      <ItemDiv
        className={this.props.className}
        theme={{
          padding: this.props.padding,
          backgroundColor: this.props.backgroundColor,
        }}
      >
        <TitleDiv>{this.props.title}</TitleDiv>
        {this.props.description && (
          <div dangerouslySetInnerHTML={{ __html: this.props.description }} />
        )}
        <ItemUl
          theme={{ listColor: this.props.listColor }}
          dangerouslySetInnerHTML={{ __html: this.props.bullets }}
        />
      </ItemDiv>
    );
  }
}
export default ListBox;
