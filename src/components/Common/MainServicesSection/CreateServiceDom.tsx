import React from 'react';
import { ServiceBox } from '../../';

export const serviceDom = (
  index: number,
  title: string,
  text: string,
  imgUrl: string,
  buttonText: string,
  link: string,
): JSX.Element => {
  return (
    <ServiceBox
      key={index}
      title={title}
      img={imgUrl}
      imgAlt={title}
      buttonText={buttonText}
      link={link}
    >
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </ServiceBox>
  );
};
