import styled from 'styled-components';
import color from '../../../colors';
import fonts from '../../../fonts';
import { media } from '../../../../utile/Helper';

export const SchoolBox = styled.div`
  display: flex;
  margin-top: 24px;
  margin-left: calc(((100vw - 100%) / 2) * -1);
  margin-right: calc(((100vw - 100%) / 2) * -1);
  background: linear-gradient(
      180deg,
      rgba(225, 225, 225, 0.5),
      rgb(240, 240, 240, 1)
    ),
    url(${({ theme }) => theme.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  ${media.tablet`position: relative;`}
  .contents {
    display: flex;
    ${media.tablet`flex-direction: column-reverse;`}
    padding: 0 6%;
    background: linear-gradient(90deg, #f0f0f0, rgba(225, 225, 225, 0));
  }
  &.school-box:nth-child(odd) .contents {
    flex-direction: row-reverse;
    ${media.tablet`flex-direction: column-reverse;`}
    background: linear-gradient(90deg, rgba(225, 225, 225, 0), #f0f0f0);
    ${media.tablet`background:none;`}
  }
  &.school-box:nth-child(odd) .logo-schoolName {
    justify-content: flex-start;
  }
  &.school-box:nth-child(odd) .logo {
    margin-right: auto;
  }
  &.school-box:nth-child(even) .logo {
    margin-left: auto;
  }
  .contents.show .school-texts {
    display: block;
  }
  &.school-box:nth-child(even) .show .logo {
    margin-left: unset;
    margin-right: auto;
  }
`;

export const SchoolLogoSchoolNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  ${media.tablet`width: 100%;`}
  justify-content: start;
  align-items: center;
  padding-top: 17.5px;
  font-family: ${fonts.english};
  font-size: 6.4rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 2px black;
  img {
    max-width: 200px;
    max-height: 80px;
  }
  .school-name {
    max-width: 100%;
  }
  .name {
    width: 80%;
    margin: 0 auto;
    text-align: left;
    ${media.tablet`display: none;`}
  }
`;

export const SchoolTextBoxDiv = styled.div`
  width: 50%;
  ${media.tablet`width: 100%;`}
  ${media.tablet`display: none;`}
`;

export const MainProgramDiv = styled.div``;

export const DivBox = styled.div`
  margin: 17.5px 0;
  background: rgba(255, 255, 255, 0.5);
  padding: 1.6rem;
  & a {
    display: inline;
    color: ${color.blue};
  }
  .phone a {
    color: rgba(0, 0, 0, 0.8);
  }
  .text-bold {
    font-weight: bold;
  }
  .red-bullet,
  .red-bullet li {
    margin: 0;
  }
  .red-bullet ul::before,
  .red-bullet li::before {
    content: '• ';
    color: ${color.red};
  }
  .red-line li {
    margin: 0 0 0 1.6rem;
  }
  .red-line li::before {
    content: '- ';
    color: ${color.red};
  }
`;
