import {
  AvatarIcon,
  BoxIcon,
  Component2Icon,
  HomeIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

const sidebarUrls = [
  {
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Posts",
    href: "/posts",
    icon: BoxIcon,
  },
  {
    name: "Explore",
    href: "/explore",
    icon: Component2Icon,
  },
  {
    name: "Following",
    href: "/following",
    icon: PersonIcon,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: AvatarIcon,
  },
];

export { sidebarUrls };
