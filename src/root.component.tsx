import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeNavbar from "./home-navbar/home-navbar.component";
import InnerNavbar from "./inner-navbar/inner-navbar.component";

export default function Root(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeNavbar />} />
        <Route path="*" element={<InnerNavbar />} />
      </Routes>
    </Router>
  );
}
