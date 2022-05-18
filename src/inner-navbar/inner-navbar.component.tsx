import React from "react";
import { Link } from "react-router-dom";

const InnerNavbar = () => {
  return (
    <div>
      <Link to={`/`}>{"Back"}</Link>
    </div>
  );
}

export default InnerNavbar;
