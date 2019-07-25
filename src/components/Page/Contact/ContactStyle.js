import styled from 'styled-components';
import color from '../../colors';

export const FormDiv = styled.div`
  width: 50%;
  margin: 0 auto;
  input {
    border-style: none;
    border: solid 1px gray;
    border-left: solid 2px red;
  }
  .required {
    padding: 0.4rem 0.6rem;
    background: ${color.red};
    display: inline-block;
    margin-bottom: 1rem;
    font-size: 0.8rem;
    color: #fff;
    font-weight: bold;
  }
  .wpcf7-textarea {
    width: 100%;
  }
  .wpcf7-submit {
    cursor: pointer;
    padding-top: 1.7rem;
    padding-bottom: 1.7rem;
    margin-bottom: 3.2rem;
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
  }
`;
