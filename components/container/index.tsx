interface IContainer {
  children?: JSX.Element | JSX.Element[];
}

export default function Container({ children }: IContainer) {
  return <div className='container mx-auto px-5 mt-20 lg:mt-0'>{children}</div>;
}
