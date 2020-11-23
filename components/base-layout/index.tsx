import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

import Header from '../header';
import BackgroundAnimation from '../background-animation';
import RightSideMenu from '../right-side-menu';
import LeftSideMenu from '../left-side-menu';

const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex: 1;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  width: 100%;
`;

interface BaseLayoutProp {
  children: ReactElement | ReactElement[];
}

const BaseLayout = ({ children }: BaseLayoutProp) => {
  return (
    <Container className='bg-gray-darkTheme dark:bg-gray-lightTheme'>
      <InnerContainer>
        <Header />
        <div className={`flex flex-col items-center mt-5`}>{children}</div>
        <RightSideMenu />
        <LeftSideMenu />
      </InnerContainer>
      <BackgroundAnimation />
    </Container>
  );
};

export default BaseLayout;
