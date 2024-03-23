import { Route, Routes } from "react-router-dom";
import {
  Dashboard,
  Explore,
  Following,
  Posts,
  Profile,
  Settings,
} from "./Pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/following" element={<Following />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
