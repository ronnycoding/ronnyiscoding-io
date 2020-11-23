interface IContainer {
  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/27805
  children: any;
}

export default function Container({ children }: IContainer) {
  return <div className='container mx-auto px-5 my-20 lg:mt-0'>{children}</div>;
}
