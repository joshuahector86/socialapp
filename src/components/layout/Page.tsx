import React, { ReactNode } from "react";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <div className="p-8 flex flex-col flex-1 items-center">{children}</div>
      </div>
    </>
  );
};

export default Page;
