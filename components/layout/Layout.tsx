import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="border-2 border-blue-500 ">{children}</div>;
};

export default Layout;
