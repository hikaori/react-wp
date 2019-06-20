import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FooterCompanyInfo from './FooterCompanyInfo';

const FlexBox = styled.div`
  display: flex;
  justify-content: ${({ theme }) => theme.content};
  width: ${({ theme }) => theme.width};
  & a {
    color: #fff;
  }
  padding-bottom: 6.5rem;
`;

const FooterItem = () => {
  return (
    <FlexBox>
      <div>
        <ul>
          <li>
            <Link>運営事業</Link>
            <ul>
              <li>
                <Link>保育の留学・就職</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <FooterCompanyInfo />
    </FlexBox>
  );
};
export default FooterItem;
