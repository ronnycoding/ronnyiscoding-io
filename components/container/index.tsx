import { ReactElement } from 'react';

interface IContainer {
  children?: ReactElement | ReactElement[];
}

export default function Container({ children }: IContainer) {
  return <div className='container mx-auto px-5 my-20 lg:mt-0'>{children}</div>;
}
