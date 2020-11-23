import React from 'react';
import Footer from '../footer';
import Meta from '../meta';

interface ILayout {
  children: JSX.Element | JSX.Element[];
}

export default function Layout({ children, ...props }: ILayout) {
  return (
    <>
      <Meta {...props} />
      <div className='min-h-screen sm:pt-20'>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
