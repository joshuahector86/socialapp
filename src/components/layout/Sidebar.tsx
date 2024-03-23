import { sidebarUrls } from "@/utils/urls";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="p-8 flex flex-col ">
      {sidebarUrls.map((link) => (
        <Link
          to={link.href}
          className="flex gap-2 items-center mb-8 p-2 text-xl hover:bg-slate-500 rounded-[1rem]"
        >
          <link.icon className="w-[1.2rem] h-[1.2rem]" />
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
