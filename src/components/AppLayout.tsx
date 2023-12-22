import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AppLayout: React.FC<Props> = ({ children }) => {
  return <div className="min-h-screen flex justify-center items-start py-20">{children}</div>;
};

export default AppLayout;
