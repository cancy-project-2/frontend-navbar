import React from "react";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <div>
      <Link to={`/`}>{"Logo"}</Link>
    </div>
  );
};

export default HomeNavbar;
