import styled from 'styled-components';
import color from '../colors';

export const Button = styled.button`
  box-sizing: border-box;
  width: 100%;
  color: #fff;
  margin-top: 3.2rem;
  border: none;
  box-shadow: 1px 1px 4px grey;
  word-break: keep-all;
  background: radial-gradient(
    ${color.buttonLightBlue},
    ${color.buttonDarkBlue}
  );
  &:hover {
    box-shadow: none;
    background: radial-gradient(
      ${color.buttonDarkBlue},
      ${color.buttonLightBlue}
    );
  }
  max-width: ${({ theme }) => theme.main};
  & a {
    padding-bottom: 1.7rem;
    padding-top: 1.7rem;
    color: #fff;
  }
`;

export const RedButton = styled(Button)`
  background: radial-gradient(red, orange);
`;
