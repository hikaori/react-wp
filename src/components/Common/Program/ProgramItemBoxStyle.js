import styled from 'styled-components';
import color from '../../colors';
import babyCarriageImg from '../../../assets/images/baby-carriage-solid.svg';
import babySolidImg from '../../../assets/images/baby-solid.svg';
import graduationImg from '../../../assets/images/graduation-cap-solid.svg';
import laptopImg from '../../../assets/images/laptop-code-solid.svg';
import atlasImg from '../../../assets/images/atlas-solid.svg';

const ProgramItemBoxStyle = styled.div`
  padding-top:6.7rem;
  padding-bottom:6.398rem
  padding-right:6.4rem
  padding-left:6.4rem
  background-repeat: no-repeat;
  background-size: 200px;
  background-position: 50%;
`;

export const ProgramItemBoxHoikupedia = styled(ProgramItemBoxStyle)`
  background-image: url(${babyCarriageImg});
`;

export const ProgramItemBoxFrog = styled(ProgramItemBoxStyle)`
  background-image: url(${laptopImg});
`;

export const ProgramItemBoxNadeshiko = styled(ProgramItemBoxStyle)`
  background-image: url(${graduationImg});
`;

export const ProgramItemBoxNanny = styled(ProgramItemBoxStyle)`
  background-image: url(${babySolidImg});
`;
export const ProgramItemBoxImmigration = styled(ProgramItemBoxStyle)`
  background-image: url(${atlasImg});
`;
