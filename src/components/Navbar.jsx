import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/detail">Detail</Link>
    </div>
  );
}

export default Navbar;
