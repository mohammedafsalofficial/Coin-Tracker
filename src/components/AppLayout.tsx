import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen w-96 mx-auto flex flex-col justify-start items-start py-20">
      {children}
    </div>
  );
};

export default AppLayout;
