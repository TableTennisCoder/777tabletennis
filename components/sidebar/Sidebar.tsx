import React, { ReactNode } from "react";

const Sidebar = ({ children }: { children: ReactNode }): JSX.Element => {
  return <div className="bg-transparent rounded-lg h-full">{children}</div>;
};

export default Sidebar;
