import styled from 'styled-components';
import color from './colors';

export const Button = styled.button`
  box-sizing: border-box;
  width: 100%;
  margin-top: 3.2rem;
  color: #fff;
  border: none;
  box-shadow: 1px 1px 4px grey;
  padding-bottom: 1.7rem;
  padding-top: 1.7rem;
  background: radial-gradient(
    ${color.buttonLightBlue},
    ${color.buttonDarkBlue}
  );
`;

export const RedButton = styled(Button)`
  background: radial-gradient(red, orange);
`;
