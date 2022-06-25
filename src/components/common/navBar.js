import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  let activeStyle = {
    textDecoration: "none",
    color: "black",
  };

  let passiveStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <div className="navs">
      <li className="navs-link">
        <NavLink
          to=""
          // onClick={test}
          style={({ isActive }) => (isActive ? activeStyle : passiveStyle)}
        >
          Home
        </NavLink>
      </li>
      {/* <li className='navs-link'>
        <NavLink
            to="Fashion"
            style={({ isActive }) =>
              isActive ? activeStyle : passiveStyle
            }
          >
            Fashion
          </NavLink>
        </li> */}
      <li className="navs-link">
        <NavLink
          to="Products"
          style={({ isActive }) => (isActive ? activeStyle : passiveStyle)}
        >
          Products
        </NavLink>
      </li>

      <li className="navs-link">
        <NavLink
          to="Blog"
          style={({ isActive }) => (isActive ? activeStyle : passiveStyle)}
        >
          Blog
        </NavLink>
      </li>
      <li className="navs-link">
        <NavLink
          to="Contact"
          style={({ isActive }) => (isActive ? activeStyle : passiveStyle)}
        >
          Contact
        </NavLink>
      </li>
    </div>
  );
  //   let nameTest = '';
  // function test(e) {
  //   if (e.target.isActive) {
  //     nameTest = e.target.displayName;
  //     console.log(nameTest)

  //   }
  // }
};

export default NavBar;
