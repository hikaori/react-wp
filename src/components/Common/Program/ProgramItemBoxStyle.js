import styled from 'styled-components';
import color from '../../colors';
import { media } from '../../../utile/Helper';

export const ProgramItemBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-top:6.7rem;
  padding-bottom:6.398rem
  padding-right:6.4rem
  padding-left:6.4rem
  background-size: 200px;
  background: ${color.lightGray};
  width:${({ theme }) => theme.width}
  background-image: url(${({ theme }) => theme.backImageURL});
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 72%;
  margin-right: 1.4rem;
  :last-child{
    margin-right: 0rem;
  }
  ${media.tablet`width:100%; margin-bottom: 1.6rem; padding:3.6rem; background-size: ${({
    theme,
  }) => theme.backImageTabletSize};`}
`;
