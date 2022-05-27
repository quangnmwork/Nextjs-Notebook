import React from "react";

const NestedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-2 border-red-500 bg-red-400 p-12 ">{children}</div>
  );
};

export default NestedLayout;
