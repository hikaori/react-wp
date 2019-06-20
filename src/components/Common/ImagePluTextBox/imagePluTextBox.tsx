import React, { Component } from 'react';
import styled from 'styled-components';

interface OwnProps {
  imgURL: string;
  alt: string;
  isImgRightSide: boolean;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 8rem 0rem;
`;
const ImgRight = styled.img`
  margin-left: 7.6rem;
  max-width: 304px;
  margin-right: 192px;
`;
const ImgLeft = styled.img`
  margin-right: 7.6rem;
  max-width: 304px;
  margin-right: 192px;
`;

class ImagePluTextBox extends Component<OwnProps> {
  render() {
    const { imgURL, alt, isImgRightSide } = this.props;
    return isImgRightSide ? (
      <Container className="font14">
        <ImgLeft src={imgURL} alt={alt} className="shadow" />
        <div>{this.props.children}</div>
      </Container>
    ) : (
      <Container className="font14">
        <div>{this.props.children}</div>
        <ImgRight src={imgURL} alt={alt} className="shadow" />
      </Container>
    );
  }
}
export default ImagePluTextBox;
