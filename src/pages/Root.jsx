import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Root(props) {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}

export default Root;
