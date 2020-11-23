import React, { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import {
  FaGithub,
  FaMediumM,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa'

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0; 
  padding: 10px;
`

const RightSideMenu = () => {
  return (
    <Container>
      <motion.div
        style={{
          position: 'fixed',
          right: 20,
          bottom: 0,
          backgroundColor: 'transparent',
        }}
      >
        <ul>
          <li>
            <a
              tabIndex={0}
              href="https://instagram.com/ronnyiscoding"
              target="_blank"
              className="text-sm mr-4 pointer-events-auto cursor-pointer text-cinnabar dark:text-blue-night"
            >
              <FaInstagram size="1em" />
            </a>
          </li>
          <li>
            <a
              tabIndex={0}
              href="https://twitter.com/ronnyiscoding"
              target="_blank"
              className="text-sm mr-4 pointer-events-auto cursor-pointer text-cinnabar dark:text-blue-night"
            >
              <FaTwitter size="1em" />
            </a>
          </li>
          <li>
            <a
              tabIndex={0}
              href="https://www.linkedin.com/in/ronnyfreites/"
              target="_blank"
              className="text-sm mr-4 pointer-events-auto cursor-pointer text-cinnabar dark:text-blue-night"
            >
              <FaLinkedinIn size="1em" />
            </a>
          </li>
          <li>
            <a
              tabIndex={0}
              href="https://medium.com/@ronnyangelofreites"
              target="_blank"
              className="text-sm mr-4 pointer-events-auto cursor-pointer text-cinnabar dark:text-blue-night"
            >
              <FaMediumM size="1em" />
            </a>
          </li>
          <li>
            <a
              tabIndex={0}
              href="https://github.com/ronnyiscoding"
              target="_blank"
              className="text-sm mr-4 pointer-events-auto cursor-pointer text-cinnabar dark:text-blue-night"
            >
              <FaGithub size="1em" />
            </a>
          </li>
        </ul>{' '}
      </motion.div>
    </Container>
  )
}

export default RightSideMenu
