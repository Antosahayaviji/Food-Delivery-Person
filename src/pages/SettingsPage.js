import React, { useState } from "react";
import { Home as HomeIcon, ClipboardList, Bell, User} from "lucide-react";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [brightness, setBrightness] = useState(100);

  const containerClasses = `p-5 min-h-screen ${
    darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
  }`;

  const boxClasses = `p-4 rounded-xl shadow mb-4 flex justify-between items-center ${
    darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
  }`;

  const brightnessBoxClasses = `p-4 rounded-xl shadow mb-4 ${
    darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
  }`;

  return (
    <div className="flex h-screen bg-gray-50">

      {/*  DESKTOP SIDEBAR  */}
      <div className="hidden lg:flex w-[260px] bg-gradient-to-b from-green-400 to-green-600 text-white flex-col items-center py-10 space-y-10">

        {/* Driver Header */}
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-white bg-opacity-30 flex items-center justify-center text-white font-bold text-xl">
            JD
          </div>
          <p className="text-xl font-semibold mt-4">Good Morning!</p>
          <p className="text-2xl font-bold -mt-1">John Driver</p>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate("/")}>
          <HomeIcon size={32} />
          <span className="text-xl mt-2 font-semibold">Home</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate("/orders")}>
          <ClipboardList size={32} />
          <span className="text-xl mt-2 font-semibold">Orders</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate("/notifications")}>
          <Bell size={32} />
          <span className="text-xl mt-2 font-semibold">Notification</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate("/profile")}>
          <User size={32} />
          <span className="text-xl mt-2 font-semibold">Profile</span>
        </div>
      </div>

      {/*  TABLET TOP NAVBAR  */}
      <div className="hidden md:flex lg:hidden w-full bg-gradient-to-r from-green-400 to-green-600 text-white items-center justify-around py-4">
        <HomeIcon size={28} className="cursor-pointer" onClick={() => navigate("/")} />
        <ClipboardList size={28} className="cursor-pointer" onClick={() => navigate("/orders")} />
        <Bell size={28} className="cursor-pointer" onClick={() => navigate("/notifications")} />
        <User size={28} className="cursor-pointer" onClick={() => navigate("/profile")} />
      </div>

      {/* MOBILE BOTTOM NAVIGATION  */}
      <div className="md:hidden lg:hidden fixed bottom-0 w-full bg-white shadow-lg flex justify-around py-3 z-50">
        <HomeIcon size={28} className="text-green-600 cursor-pointer" onClick={() => navigate("/")} />
        <ClipboardList size={28} className="text-green-600 cursor-pointer" onClick={() => navigate("/orders")} />
        <Bell size={28} className="text-green-600 cursor-pointer" onClick={() => navigate("/notifications")} />
        <User size={28} className="text-green-600 cursor-pointer" onClick={() => navigate("/profile")} />
      </div>

      {/* MAIN SETTINGS CONTENT  */}
      <div className="flex-1 overflow-y-auto pt-5 pb-20 pr-5">

        
        <div
          className={containerClasses}
          style={{ filter: `brightness(${brightness}%)` }}
        >
          {/* Dark Mode Toggle */}
          <div className={boxClasses}>
            <span>Dark Mode Accessibility</span>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="w-5 h-5 cursor-pointer"
            />
          </div>

          {/* Notifications Toggle */}
          <div className={boxClasses}>
            <span>Notifications</span>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="w-5 h-5 cursor-pointer"
            />
          </div>

          {/* Brightness Control */}
          <div className={brightnessBoxClasses}>
            <span className="font-semibold">Brightness</span>

            <div className="mt-2 flex gap-2">
              <button
                className={`p-2 rounded ${
                  darkMode ? "bg-gray-600 text-white" : "bg-gray-300 text-gray-900"
                }`}
                onClick={() => setBrightness((prev) => Math.min(prev + 10, 150))}
              >
                Increase
              </button>

              <button
                className={`p-2 rounded ${
                  darkMode ? "bg-gray-600 text-white" : "bg-gray-300 text-gray-900"
                }`}
                onClick={() => setBrightness((prev) => Math.max(prev - 10, 50))}
              >
                Decrease
              </button>
            </div>

            <p className="mt-2 text-sm">{brightness}%</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SettingsPage;
