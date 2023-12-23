import React, { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-96 mx-auto flex flex-col justify-start items-start py-20">
      {children}
    </div>
  );
};

export default AppLayout;
