import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../../../utile/Helper';

interface OwnProps {
  imgURL: string;
  alt: string;
  isImgRightSide: boolean;
}

const Container = styled.div`
  align-items: center;
  margin: 8rem 0rem;
  ${media.desktop`display: flex;`}
`;
const ImgBox = styled.div`
  ${media.tablet`text-align: center;`}
`;
const ImgBase = styled.img`
  max-width: 304px;
  margin-right: 192px;
  ${media.tablet`max-width: none; width:100%; height:auto; `}
`;
const ImgRight = styled(ImgBase)`
  margin-left: 7.6rem;
  ${media.tablet`margin-left: 0`}
`;
const ImgLeft = styled(ImgBase)`
  margin-right: 7.6rem;
  ${media.tablet`margin-right: 0`}
`;

class ImagePluTextBox extends Component<OwnProps> {
  render() {
    const { imgURL, alt, isImgRightSide } = this.props;
    return isImgRightSide ? (
      <Container className="font14">
        <ImgBox>
          <ImgLeft
            src={imgURL}
            alt={alt}
            className="shadow"
            width="304"
            height="192"
          />
        </ImgBox>
        <div>{this.props.children}</div>
      </Container>
    ) : (
      <Container className="font14">
        <div>{this.props.children}</div>
        <ImgBox>
          <ImgRight
            src={imgURL}
            alt={alt}
            className="shadow"
            width="304"
            height="192"
          />
        </ImgBox>
      </Container>
    );
  }
}
export default ImagePluTextBox;
