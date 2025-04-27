import React from "react";
import logo from "../assets/cloudy_s_sunny.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/ContextProvider";

function NavBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  function handleLogout() {
    logout();
    navigate("/login");
  }
  return (
    <div className="bg-navbg flex justify-between p-4 items-center">
      <Link to="/">
        <div className="flex items-center ">
          <h1 className="text-4xl font-mono font-extrabold">WEATHER!</h1>
          <img className="w-28 h-28" src={logo} alt="" />
        </div>
      </Link>
      <div className="mr-15">
        <p className="text-2xl mb-2">Hello, {user.name}</p>
        <div className="flex items-center justify-center">
          <button
            onClick={handleLogout}
            className="px-10 py-2 bg-outbg rounded-xl text-white text-[14px] font-bold cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
