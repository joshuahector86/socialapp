import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Logo } from "@/assets";

const PostCard = () => {
  return (
    <Card className="w-[70%]">
      <CardHeader className="flex-row justify-between">
        <div className="flex items-center gap-4">
          <img src={Logo} alt="profile-img" width={50} />
          Dimitri Hector
        </div>
        <div>Posted Time Ago</div>
      </CardHeader>
      <CardContent className="flex gap-10 ">
        <img src={Logo} alt="img-for-post" width={400} />
        <div className="">
          <div className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            vehicula, libero non fringilla cursus, velit lectus iaculis ex, et
            elementum nisi leo malesuada metus. Nulla congue nisi eu augue
            vehicula, consectetur fringilla quam convallis. Nullam blandit,
            purus eu elementum efficitur, elit metus consequat nunc, vitae
            dictum ligula tellus eu erat. Quisque scelerisque libero sapien,
            bibendum hendrerit purus imperdiet et. Cras vitae nibh rutrum,
            luctus orci id, blandit quam. Etiam eget augue sit amet ligula
            cursus tempor ut ut metus. Ut sed felis a erat imperdiet ultrices
            non sit amet metus. Donec suscipit posuere volutpat. Vivamus vitae
            mi eros. Maecenas fermentum vitae justo eget venenatis. Maecenas
            ligula tortor, feugiat ut interdum nec, luctus non ligula. In eu
            elit ut mi tempor ultricies et sit amet quam. Pellentesque mollis,
            nunc ac luctus molestie, augue augue euismod nibh, eu rutrum erat
            tortor et est. Interdum et malesuada fames ac ante ipsum primis in
            faucibus.
          </div>
          <Card className="flex w-full justify-between mb-10  p-2">
            <Button variant={"ghost"} className="hover:bg-accent">
              likes
            </Button>
            <Button variant={"ghost"} className="hover:bg-accent">
              comments
            </Button>
            <Button variant={"ghost"} className="hover:bg-accent">
              saves
            </Button>
          </Card>
          <div className="relative bottom-1">#Hashtags</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCard;
