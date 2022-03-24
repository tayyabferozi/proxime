import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Explore from "./pages/Explore/Explore";
import LeaderBoard from "./pages/LeaderBoard/LeaderBoard";
import Blogs from "./pages/Blogs/Blogs";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import FAQs from "./pages/FAQs/FAQs";
import Profile from "./pages/Profile/Profile";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/explore" element={<Explore />} />
        <Route exact path="/leader-board" element={<LeaderBoard />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/blog-details" element={<BlogDetails />} />
        <Route exact path="/faqs" element={<FAQs />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
