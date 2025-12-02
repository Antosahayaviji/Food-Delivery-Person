import React, { useState } from "react";
import { FiArrowLeft, FiChevronDown, FiChevronUp } from "react-icons/fi";
import {
  Home as HomeIcon,
  ClipboardList,
  Bell,
  User
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const HelpSupportPage = () => {
  const navigate = useNavigate();

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex h-screen bg-gray-50">

      {/* DESKTOP SIDEBAR*/}
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

      {/* TABLET TOP NAVBAR */}
      <div className="hidden md:flex lg:hidden w-full bg-gradient-to-r from-green-400 to-green-600 text-white items-center justify-around py-4">
        <HomeIcon size={28} className="cursor-pointer" onClick={() => navigate("/")} />
        <ClipboardList size={28} className="cursor-pointer" onClick={() => navigate("/orders")} />
        <Bell size={28} className="cursor-pointer" onClick={() => navigate("/notifications")} />
        <User size={28} className="cursor-pointer" onClick={() => navigate("/profile")} />
      </div>

      {/* MOBILE BOTTOM NAVIGATION */}
      <div className="md:hidden lg:hidden fixed bottom-0 w-full bg-white shadow-lg flex justify-around py-3 z-50">
        <HomeIcon size={28} onClick={() => navigate("/")} className="text-green-600 cursor-pointer" />
        <ClipboardList size={28} onClick={() => navigate("/orders")} className="text-green-600 cursor-pointer" />
        <Bell size={28} onClick={() => navigate("/notifications")} className="text-green-600 cursor-pointer" />
        <User size={28} onClick={() => navigate("/profile")} className="text-green-600 cursor-pointer" />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 overflow-y-auto pt-5 pb-20 px-5">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center gap-2 text-gray-700"
        >
          <FiArrowLeft size={20} /> Back
        </button>

        <h2 className="font-bold text-xl mb-4">Help & Support</h2>

        <div className="bg-white rounded-xl shadow mb-4">

          {/* Technical Assistance */}
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => toggleSection("technical")}
          >
            <span>Technical Assistance</span>
            {openSection === "technical" ? <FiChevronUp /> : <FiChevronDown />}
          </div>

          {openSection === "technical" && (
            <div className="p-4 pt-0 text-gray-600 text-sm">
              About some content of technical assistance
            </div>
          )}

          <hr />

          {/* Updates */}
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => toggleSection("updates")}
          >
            <span>Get to know about the updates</span>
            {openSection === "updates" ? <FiChevronUp /> : <FiChevronDown />}
          </div>

          {openSection === "updates" && (
            <div className="p-4 pt-0 text-gray-600 text-sm">
              No available updates
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default HelpSupportPage;
