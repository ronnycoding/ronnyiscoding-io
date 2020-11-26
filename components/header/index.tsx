import React, { useEffect } from 'react';
import { RiSunLine } from 'react-icons/ri';
import { BsMoon } from 'react-icons/bs';
import Link from 'next/link';
import { useTransform, useViewportScroll, motion } from 'framer-motion';

import {
  useTheme,
  useThemeDispatch,
  TOGGLE_THEME,
  LIGHT,
} from '../../theme/useTheme';
const tailwind = require('../../tailwind.config');

const Header = () => {
  const { mode } = useTheme();
  const { toggleTheme } = useThemeDispatch();
  const { scrollYProgress } = useViewportScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    [
      'rgba(0, 0, 0, 0)',
      mode === LIGHT
        ? tailwind.theme.colors.gray.lightTheme
        : tailwind.theme.colors.gray.darkTheme,
    ]
  );

  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.1],
    ['2px 1px 5px 2px rgba(0,0,0,0)', '2px 1px 5px 2px rgba(0,0,0,0.21)']
  );

  return (
    <motion.div
      style={{ backgroundColor, boxShadow, zIndex: 98 }}
      className='fixed w-full'
    >
      <motion.div className='sticky'>
        <motion.div className='px-4'>
          <motion.div className='flex items-center justify-between py-4'>
            <Link href={`/`}>
              <img
                src={'/logo.svg'}
                width={45}
                className='cursor-pointer pointer-events-auto'
                tabIndex={0}
                alt='Ronny is Coding!'
              />
            </Link>
            <div className='flex'>
              <div className='cursor-pointer' onClick={toggleTheme}>
                {mode === LIGHT ? (
                  <RiSunLine
                    tabIndex={0}
                    className='cursor-pointer pointer-events-auto'
                    color={tailwind.theme.colors.cinnabar}
                    size='2em'
                  />
                ) : (
                  <BsMoon
                    tabIndex={0}
                    className='cursor-pointer pointer-events-auto'
                    color={tailwind.theme.colors.blue.night}
                    size='2em'
                  />
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
