import { Link } from "react-router-dom";
import { ModeToggle } from "../theme/mode-toggle";
import { Logo } from "@/assets";
import SearchBar from "./SearchBar";
import { AvatarIcon, Pencil2Icon, BellIcon } from "@radix-ui/react-icons";

const Topbar = () => {
  return (
    <div className="p-8 flex justify-between items-center">
      <Link to="/">
        <div className="flex gap-2 items-center">
          <div className="font-semibold text-2xl">HectorBook</div>
          <img src={Logo} alt="logo" width={50} className="rounded-full" />
        </div>
      </Link>
      <SearchBar />
      <div className="flex gap-2 items-center ">
        <ModeToggle />
        <Pencil2Icon className="h-[1.2rem] w-[1.2rem]" />
        <BellIcon className="h-[1.2rem] w-[1.2rem]" />
        <AvatarIcon className="h-[1.2rem] w-[1.2rem]" />
      </div>
    </div>
  );
};

export default Topbar;
