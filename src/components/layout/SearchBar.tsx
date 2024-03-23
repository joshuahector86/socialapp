import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search" />
      <Button variant={"outline"} type="submit">
        <Search />
      </Button>
    </div>
  );
};

export default SearchBar;
