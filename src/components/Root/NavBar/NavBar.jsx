import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [bgColor, setBgColor] = useState('bg-purple-600')

  useEffect(()=>{
      // Check the current path and change background color accordingly
    if (location.pathname === "/") {
      setBgColor("bg-purple-600"); // Home Page Color
    } else if (location.pathname === "/dashboard") {
      setBgColor("bg-white-600"); // Dashboard Color
    } else if (location.pathname === "/statistics") {
      setBgColor("bg-white-600"); // Statistics Page Color
    } else {
      setBgColor("bg-purple-600"); // Default color
    }
  },[location.pathname])


  return (
  <div className={`relative ${bgColor} rounded-t-xl px-6 pt-10 -mb-12 text-white text-center`}>
      {/* Navigation */}
      <div className="flex justify-between items-center -mt-11 mb-12 py-4 max-w-7xl mx-auto">
        <h2 className="text-lg font-bold">Gadget Heaven</h2>
       <nav className="space-x-6 font-medium">
  <NavLink
    to="/"
   
    
  >
    Home
  </NavLink>

  <NavLink
    to="/statistics"
    className={({ isActive }) =>
      isActive ? "bg-purple-400 p-2 rounded-md font-bold text-white-300" : "hover:underline"
    }
  >
    Statistics
  </NavLink>

  <NavLink
    to="/dashboard"
    className={({ isActive }) =>
      isActive ? "bg-purple-400 p-2 rounded-md font-bold text-white-300" : "hover:underline"
    }
  >
    Dashboard
  </NavLink>
</nav>
        <div className="space-x-4">
          <button  className="text-xl">🛒</button>
          <button  className="text-xl">❤️</button>
        </div>
      </div>
    </div>
         

  );
};

export default NavBar;
