import React from "react";
// import { Link } from "react-router-dom";
import { Home, Person, Work, Description, HelpOutline, ExitToApp } from "@mui/icons-material";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <Home />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <Person />,
    cName: "nav-text",
  },
  {
    title: "Template",
    path: "/Templete",
    icon: <Description />,
    cName: "nav-text",
  },
  {
    title: "Myresume",
    path: "/myresume",
    icon: <Work />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/",
    icon: <HelpOutline />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/logout",
    icon: <ExitToApp />,
    cName: "nav-text",
  },
];
