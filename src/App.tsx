import { Route, Routes } from "react-router-dom";
import { Dashboard, Profile } from "./Pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
