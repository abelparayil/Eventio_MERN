import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const userId = useSelector((state) => state.Event.userId);
  const adminId = useSelector((state) => state.Event.adminId);
  const links = [
    { name: "Home", link: "/" },
    // { name: "Courses", link: "courses" },
    // { name: "Practice", link: "nonTechnicalEvent" },
    { name: "Events", link: "event" },
    { name: "Industry Talk", link: "industryTalk" },
  ];
  return (
    <div className=" flex justify-between items-center px-8 z-10">
      <div className="text-red-500 w-1/6">
        {/* <img className="h-20 rounded-2xl" src="./Home.svg" alt="" /> */}
      </div>
      <div className="flex ml-36 items-center w-4/6">
        {/* pagesDiv */}
        {links.map((item) => {
          return (
            <NavLink
              to={item.link}
              className={({ isActive }) => {
                return ` text-gray-200 border-b border-purple-500 tracking-widest p-2 px-8 mr-4 transition hover:bg-purple-400 font-bold hover:scale-125 transform ${
                  isActive ? "bg-purple-600" : ""
                }`;
              }}>
              {item.name}
            </NavLink>
          );
        })}
      </div>
      <div className="w-1/6 items-center">
        {userId == null && adminId == null ? (
          <NavLink
            to="/register"
            className={({ isActive }) => {
              return `text-gray-200 border-b ml-28 border-purple-500 tracking-widest p-2 px-8 transition hover:bg-purple-400 font-bold hover:scale-125 transform ${
                isActive ? "bg-purple-600" : ""
              }`;
            }}>
            {" "}
            Register
          </NavLink>
        ) : (
          <NavLink
            to="/profile"
            className={({ isActive }) => {
              return `text-gray-200 border-b ml-28 border-purple-500 tracking-widest p-2 px-8 transition hover:bg-purple-400 font-bold hover:scale-125 transform ${
                isActive ? "bg-purple-600" : ""
              }`;
            }}>
            Profile
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
