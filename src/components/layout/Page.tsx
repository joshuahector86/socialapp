import React, { ReactNode } from "react";
import Topbar from "../shared/Topbar";
import Sidebar from "../shared/Sidebar";

interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <div className="p-8">{children}</div>
      </div>
    </>
  );
};

export default Page;
