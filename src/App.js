import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Explore from "./pages/Explore/Explore";
import LeaderBoard from "./pages/LeaderBoard/LeaderBoard";
import Blogs from "./pages/Blogs/Blogs";
import FAQs from "./pages/FAQs/FAQs";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/leader-board" element={<LeaderBoard />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/faqs" element={<FAQs />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
