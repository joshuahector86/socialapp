import { Link } from "react-router-dom";
import { ModeToggle } from "../theme/mode-toggle";
import { Logo } from "@/assets";
import SearchBar from "./SearchBar";
import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import AvatarSettings from "../shared/AvatarSettings";
import Notifications from "../shared/Notifications";

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
        <Notifications />
        <AvatarSettings />
      </div>
    </div>
  );
};

export default Topbar;
