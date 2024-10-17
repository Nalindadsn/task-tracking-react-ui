import React from "react";
import { Badge, Button, message } from "antd";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/LayoutStyles.css";
// import { adminMenu, userMenu } from "../Data/data";
import Header from "./Header";
import { FaBell } from "react-icons/fa";

const Layout = ({ children }) => {
  const  {user} = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logged out successfully");
    navigate("/login");
  };

  // Sidebar menu based on user role
  const sidebarMenu = null

  return (
    <div className="main">
      <Header notification={user?.notification ? user.notification.length : 0}/>
      <div>

        <div className="">
         
          <div>{children}</div>
         
         {/* <Footer/> */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
