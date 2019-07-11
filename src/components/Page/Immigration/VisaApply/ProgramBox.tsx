import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { Heading2, Heading3 } from '../../../';
import ListBox from './ListBox';
import TargetCategory from './TargetCategory';
import font from '../../../fonts';
import { media } from '../../../../utile/Helper';
import colors from '../../../colors';
import './tableStyle.css';

const SectionDive = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  margin-right: calc(((100vw - 100%) / 2) * -1);
  margin-left: calc(((100vw - 100%) / 2) * -1);
  padding: 8rem 17.2%;
  ${media.tablet`padding: 8rem 7%;`}
`;

const VisaDescription = styled.div`
  margin: 2.4rem 0 3.5rem 0;
`;
const TableTitle = styled.div`
  font-size: 1.6rem;
  font-family: ${font.jpMedium};
  margin-bottom: 1.8rem;
`;

interface ownProps {
  skilledWorkerData: any;
  internationalGraduateData: any;
  cecData: any;
  fswData: any;
}
interface ownState {}
class ProgramBox extends Component<ownProps> {
  render() {
    const {
      skilledWorkerData,
      internationalGraduateData,
      cecData,
      fswData,
    } = this.props;
    console.log(internationalGraduateData);
    return (
      <Fragment>
        <SectionDive theme={{ backgroundColor: colors.lightGray }}>
          <Heading2>
            BC Provincial Nominee Program (BC PNP) Skills Immigration
          </Heading2>
          <Heading3>Skilled Worker</Heading3>
          <div>
            <TargetCategory target={skilledWorkerData.target} />
          </div>
          <VisaDescription>{skilledWorkerData.description}</VisaDescription>
          <TableTitle>申請者の応募条件</TableTitle>
          <div
            dangerouslySetInnerHTML={{
              __html: skilledWorkerData.applyCondition,
            }}
          />
          <ListBox
            title={'雇用主の応募条件'}
            description={null}
            bullets={skilledWorkerData.employerCondition}
            padding={'0'}
            backgroundColor={colors.lightGray}
            listColor={colors.red}
            className=""
          />
          <ListBox
            title={'注意事項'}
            description={null}
            bullets={skilledWorkerData.caution}
            padding={'6.7rem 6.4rem'}
            backgroundColor={'#fff'}
            listColor={colors.bulletsGray}
            className=""
          />

          <Heading3>International Graduate</Heading3>
          <div>
            <TargetCategory target={internationalGraduateData.target} />
          </div>
          <VisaDescription>
            {internationalGraduateData.description}
          </VisaDescription>
          <TableTitle>申請者の応募条件</TableTitle>
          <div
            dangerouslySetInnerHTML={{
              __html: internationalGraduateData.applyCondition,
            }}
          />
          <ListBox
            title={'雇用主の応募条件'}
            description={null}
            bullets={internationalGraduateData.employerCondition}
            padding={'0'}
            backgroundColor={colors.lightGray}
            listColor={colors.red}
            className=""
          />
          <ListBox
            title={'注意事項'}
            description={null}
            bullets={internationalGraduateData.caution}
            padding={'6.7rem 6.4rem'}
            backgroundColor={'#fff'}
            listColor={colors.bulletsGray}
            className=""
          />
          <ListBox
            title={'Pilot Programとは？'}
            description={internationalGraduateData.pilotDescription}
            bullets={internationalGraduateData.pilotPoints}
            padding={'6.7rem 6.4rem'}
            backgroundColor={colors.darkGray}
            listColor={'#fff'}
            className="info"
          />
        </SectionDive>

        <SectionDive theme={{ backgroundColor: '#fff' }}>
          <Heading2>Canadian Experience Class (CEC)</Heading2>
          <div>
            <TargetCategory target={cecData.target} />
          </div>
          <VisaDescription>{cecData.description}</VisaDescription>
          <TableTitle>申請者の応募条件</TableTitle>
          <div dangerouslySetInnerHTML={{ __html: cecData.applyCondition }} />

          <ListBox
            title={'注意事項'}
            description={null}
            bullets={cecData.caution}
            padding={'6.7rem 6.4rem'}
            backgroundColor={colors.lightGray}
            listColor={colors.bulletsGray}
            className=""
          />
        </SectionDive>

        <SectionDive theme={{ backgroundColor: colors.lightGray }}>
          <Heading2>Federal Skilled Workers (FSW)</Heading2>
          <div>
            <TargetCategory target={fswData.target} />
          </div>
          <VisaDescription>{fswData.description}</VisaDescription>
          <TableTitle>申請者の応募条件</TableTitle>
          <div dangerouslySetInnerHTML={{ __html: fswData.applyCondition }} />

          <ListBox
            title={'注意事項'}
            description={null}
            bullets={fswData.caution}
            padding={'6.7rem 6.4rem'}
            backgroundColor={'#fff'}
            listColor={colors.bulletsGray}
            className=""
          />
        </SectionDive>
      </Fragment>
    );
  }
}
export default ProgramBox;
