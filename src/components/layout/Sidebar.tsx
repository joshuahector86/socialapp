import { sidebarUrls } from "@/utils/urls";
// import { LogOutIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const currentLink = (path: string): boolean => {
    return location.pathname === path;
  };
  return (
    <div className="p-8 flex flex-col ">
      {sidebarUrls.map((link) => (
        <Link
          key={link.name}
          to={link.href}
          className={`flex gap-2 items-center mb-4 p-2 text-xl 
          hover:bg-accent rounded-[1rem] min-w-[15rem] ${
            currentLink(link.href) ? "bg-accent" : ""
          }`}
        >
          <link.icon className="w-[1.2rem] h-[1.2rem]" />
          {link.name}
        </Link>
      ))}

      {/* <div
        className="p-2 flex gap-2 items-center text-xl 
          hover:bg-accent rounded-[1rem] min-w-[15rem]"
      >
        <LogOutIcon />
        Logout
      </div> */}
    </div>
  );
};

export default Sidebar;
