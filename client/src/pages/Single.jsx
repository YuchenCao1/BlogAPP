import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="../../images/post.jpg" alt="" />
        <div className="user">
          <img src="../../images/sidebar.jpg" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src="../../images/edit.png" alt="" />
            </Link>

            <img src="../../images/delete.png" alt="" />
          </div>
        </div>
        <h1>Ldfgahsjdaskdas sdja dsa a f dsf we few f fqe</h1>
        <p>
          0:00 Introduction 01:53 Installation 04:26 React Router Dom 6.4
          Tutorial 11:47 React Login & Register Page Design 17:20 React Navbar
          Design 24:42 React Footer Design 26:03 React Blog Website Homepage
          Design 34:22 React Blog Single Post Page Design 42:17 React Add New
          Post Page Design 53:43 Node.js Express with MySQL 56:57 MySQL Basics
          with MySQL Workbench 01:01:02 Node.js MySQL Route Controller Structure
          01:05:20 React MySQL Node.js Authentication with JWT and Cookie
          <br />
          <br />
          01:22:17 Node.js Mysql How to Use JWT to Login 01:27:06 React Context
          API (Login & Logout) 01:35:25 Node.js How to Logout Using Cookies
          01:36:40 React How to Fetch MySQL Data 01:49:12 Node.js MySQL How to
          Join 2 Tables 01:53:18 Node.js MySQL How to Verify JWTdasda sdasda
          0:00 Introduction 01:53 Installation 04:26 React Router Dom 6.4
          Tutorial 11:47 React Login & Register Page Design 17:20 React Navbar
          Design 24:42 React Footer Design 26:03 React Blog Website Homepage
          Design 34:22 React Blog Single Post Page Design 42:17 React Add New
          Post Page Design 53:43 Node.js Express with MySQL 56:57 MySQL Basics
          with MySQL Workbench 01:01:02 Node.js MySQL Route Controller Structure
          <br />
          <br />
          01:05:20 React MySQL Node.js Authentication with JWT and Cookie
          01:22:17 Node.js Mysql How to Use JWT to Login 01:27:06 React Context
          API (Login & Logout) 01:35:25 Node.js How to Logout Using Cookies
          01:36:40 React How to Fetch MySQL Data 01:49:12 Node.js MySQL How to
          Join 2 Tables 01:53:18 Node.js MySQL How to Verify JWTdasda
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
