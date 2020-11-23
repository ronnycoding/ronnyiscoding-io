import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { useTheme, DARK } from '../../theme/useTheme';

const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  z-index: 1;
`;

const BackgroundAnimation = ({ ...props }) => {
  const { mode } = useTheme();
  return (
    <Container>
      <motion.div
        initial={{ top: -298, right: -180 }}
        animate={{
          ...(mode === DARK
            ? { right: 200, top: -500, width: 639, height: 639 }
            : { right: -180, top: -298, width: 839, height: 839 }),
        }}
        style={{
          position: 'absolute',
          borderRadius: 400,
          width: 839,
          height: 839,
        }}
        className='bg-red-moon dark:bg-blue-night'
      />
    </Container>
  );
};

export default BackgroundAnimation;
