import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Breadcrumb from "../breadcrumb/Breadcrumb";

const NavbarIndex = () => {
  const location = useLocation();
  let pathName = location.pathname.split("/")[1];
  console.log("pathName", pathName);
  return <div>{pathName === "home" || "/" ? <Navbar /> : <Breadcrumb />}</div>;
};

export default NavbarIndex;
