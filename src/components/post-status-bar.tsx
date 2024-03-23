import { AvatarIcon } from "@radix-ui/react-icons";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const PostStatusBar = () => {
  return (
    <Card className="w-[70%] mb-10">
      <CardHeader className="flex gap-4 flex-row items-center">
        <AvatarIcon className="w-[2.5rem] h-[2.5rem]" />
        <Input type="text" placeholder="Tell me everything girl" />
      </CardHeader>
      <CardContent className="flex justify-between">
        <Button variant={"ghost"}>Live Video</Button>
        <Button variant={"ghost"}>Photo/Video</Button>
        <Button variant={"ghost"}>Article</Button>
      </CardContent>
    </Card>
  );
};

export default PostStatusBar;
