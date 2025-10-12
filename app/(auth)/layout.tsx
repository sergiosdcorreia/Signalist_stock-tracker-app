import React, { ReactNode } from "react";

const Layout: ({ children }: { children: ReactNode }) => React.JSX.Element = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <main className="min-h-screen text-gray-400"></main>;
};

export default Layout;
