type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="w-full mx-auto max-w-screen-2xl">{children}</div>;
};

export default Container;
