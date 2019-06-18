import React, { Component } from 'react';
import styled from 'styled-components';

interface OwnProps {
  imgURL: string;
  alt: string;
  text: string;
  isImgRightSide: boolean;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 8rem 8.3rem;
`;
const ImgRight = styled.img`
  margin-left: 7.6rem;
`;
const ImgLeft = styled.img`
  margin-right: 7.6rem;
`;

class ImagePluTextBox extends Component<OwnProps> {
  render() {
    const { imgURL, alt, text, isImgRightSide } = this.props;
    return isImgRightSide ? (
      <Container className="font14">
        <ImgLeft src={imgURL} alt={alt} className="shadow" />
        <div>{text}</div>
      </Container>
    ) : (
      <Container className="font14">
        <div>{text}</div>
        <ImgRight src={imgURL} alt={alt} className="shadow" />
      </Container>
    );
  }
}
export default ImagePluTextBox;
