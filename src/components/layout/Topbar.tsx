import { Link } from "react-router-dom";
import { ModeToggle } from "../theme/mode-toggle";
import { Logo } from "@/assets";
import SearchBar from "./SearchBar";
import { AvatarIcon, Pencil2Icon, BellIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

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
      <div className="flex gap-1 items-center ">
        <ModeToggle />
        <Button variant={"ghost"} size="icon">
          <Pencil2Icon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
        <Button variant={"ghost"} size="icon">
          <BellIcon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
        <Button variant={"ghost"} size="icon">
          <AvatarIcon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </div>
    </div>
  );
};

export default Topbar;
