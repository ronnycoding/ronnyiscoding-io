import { ReactElement } from 'react';
import Footer from '../footer';
import Meta from '../meta';

import {
  Seo,
} from '../../src/generated/graphql';

interface ILayout {
  children: ReactElement | ReactElement[] | JSX.Element | JSX.Element[] | null;
  seo?: Seo | null
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
