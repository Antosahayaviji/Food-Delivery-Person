import React from "react";
import { FiHome, FiBox, FiBell, FiUser } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const VerticalNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { name: "Home", icon: <FiHome size={22} />, path: "/" },
    { name: "Orders", icon: <FiBox size={22} />, path: "/orders" },
    { name: "Notifications", icon: <FiBell size={22} />, path: "/notifications" },
    { name: "Profile", icon: <FiUser size={22} />, path: "/profile" },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-20 bg-gradient-to-b from-green-500 to-green-700 text-white flex flex-col items-center py-8 shadow-lg z-50">
      {menuItems.map((item) => (
        <div
          key={item.name}
          onClick={() => navigate(item.path)}
          className={`flex flex-col items-center justify-center w-full py-4 cursor-pointer transition 
            ${isActive(item.path) ? "bg-green-900 bg-opacity-40" : "bg-transparent"}
          `}
        >
          {item.icon}
          <p className="text-xs mt-1">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default VerticalNav;
