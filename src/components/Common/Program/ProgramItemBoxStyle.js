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

export const Title = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1.8rem;
  font-family: a-otf-midashi-go-mb31-pr6n;
`;
export const LogoDiv = styled.div`
  text-align: end;
  margin-top: 3.2rem;
  & img {
    max-width: 160px;
    height: 6.4rem;
    margin-bottom: 0rem;
  }
`;
export const HoikupediaDiv = styled(LogoDiv)`
  & img {
    height: 6.4rem;
    width: auto;
    max-width: unset;
    ${media.tablet`height: 3.9rem;`}
  }
`;
export const ButtonLogoDiv = styled.div`
  margin-top: auto;
`;
