import React from 'react';
import styled from '@emotion/styled';

import Wrnch from './wrnch.png';
import Microsoft from './microsoft.png';
import Intact from './Intactlab.png';
import SqrPnt from './squarepoint.png';

const LogoRow = styled('div')`
  text-align:center;
  display: flex;
  padding-bottom: 1%;
  max-height: 130px;
  @media screen and (min-width: 700px) {
    padding-bottom: 25px;
  }
  @media screen and (min-width: 1024px) {
    padding-bottom: 1rem;
  }
  :last-child {
    padding-bottom: 0;
  }
`;

const LogoWrapper = styled('a')`
  flex-grow: 1;
  flex-basis: 0;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const LogoImage = styled('img')`
  max-width: 100%;
  width:auto;
  height:auto;
  text-align:center;
  margin: 0 auto;
  max-height: 100%;
  object-fit: scale-down;
  -webkit-user-drag: none;
`;

const Logo = ({ alt, src, href }) => (
  <LogoWrapper href={href} target="_blank" rel="noopener">
    <LogoImage alt={alt} src={src} />
  </LogoWrapper>
);

export default () => (
  <React.Fragment>

    <LogoRow>

      <Logo
        alt="Microsoft"
        src={Microsoft}
        href="https://careers.microsoft.com/students/us/en/"
      />
    </LogoRow>
    <LogoRow>
      <Logo
        alt="Wrnch"
        src={Wrnch}
        href="https://wrnch.ai/careers/"
      />
      </LogoRow>
      <LogoRow>
    <Logo
      alt="Square Point Capital"
      src={SqrPnt}
      href="https://www.squarepoint-capital.com/"
    />
  </LogoRow>


  </React.Fragment>
);
