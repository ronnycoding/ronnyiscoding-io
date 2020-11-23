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
  const { mode, theme } = useTheme();
  const { toggleTheme } = useThemeDispatch();
  const { scrollYProgress } = useViewportScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    ['rgba(0, 0, 0, 0)', mode === LIGHT ? tailwind.theme.colors.gray.lightTheme : tailwind.theme.colors.gray.darkTheme]
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
      {/* shadow */}
      <motion.div className='sticky'>
        <motion.div className='px-4'>
          <motion.div className='flex items-center justify-between py-4'>
            <Link href={`/`}>
              <img
                src={'/logo.svg'}
                width={45}
                className='cursor-pointer pointer-events-auto'
                tabIndex={0}
                // alt={}
              />
            </Link>
            <div className='flex'>
              {/* <div className="hidden sm:flex sm:items-end">
                
              </div>
              <div className="hidden sm:flex sm:items-end">
                
              </div>
              <div className="hidden sm:flex sm:items-end">
                
              </div> */}
              <div className='cursor-pointer' onClick={toggleTheme}>
                {mode === LIGHT ? (
                  <RiSunLine
                    tabIndex={0}
                    className='cursor-pointer pointer-events-auto'
                    color={theme.primary}
                    size='2em'
                  />
                ) : (
                  <BsMoon
                    tabIndex={0}
                    className='cursor-pointer pointer-events-auto'
                    color={theme.primary}
                    size='2em'
                  />
                )}
              </div>
            </div>
          </motion.div>

          {/* <div className="block sm:hidden bg-white border-t-2 py-2">
            <div className="flex flex-col">
              <Link
                to={'/'}
                className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1"
              >
                {'Example'}
              </Link>
              <Link
                to={'/'}
                className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1"
              >
                {'Example'}
              </Link>
              <Link
                to={'/'}
                className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1"
              >
                {'Example'}
              </Link>
              <div className="flex justify-between items-center border-t-2 pt-2">
                <a
                  href="#"
                  className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
                >
                  {'Example'}
                </a>
              </div>
            </div>
          </div> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
