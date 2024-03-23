import { Route, Routes } from "react-router-dom";
import { Dashboard, Explore, Following, Posts, Profile } from "./Pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/following" element={<Following />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
