import { ModeToggle } from "../theme/mode-toggle";

const Topbar = () => {
  return (
    <div className="p-8 flex justify-between">
      <div className="flex">
        <div className="">title of app</div>
        <div>Logo goes here</div>
      </div>
      <div>Search Bar</div>
      <div className="flex">
        <ModeToggle />
        <div>Create Post</div>
        <div>notifications</div>
        <div>settings via account avatar</div>
      </div>
    </div>
  );
};

export default Topbar;
