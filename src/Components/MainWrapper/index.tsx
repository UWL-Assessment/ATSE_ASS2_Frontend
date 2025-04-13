import React from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface MainWrapperProps {
  children: any;
}

const MainWrapper: React.FC<MainWrapperProps> = ({ children }) => {
  return <section className="mainWrapper">{children}</section>;
};

export default MainWrapper;
