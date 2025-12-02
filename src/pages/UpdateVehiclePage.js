import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Image,
  Home as HomeIcon,
  ClipboardList,
  Bell,
  User
} from "lucide-react";

const UpdateVehiclePage = () => {
  const navigate = useNavigate();
  const [vehicleImage, setVehicleImage] = useState(null);

  const boxShadow = { boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" };

  const handleImageUpload = () => {
    document.getElementById("fileInput").click();
  };

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

        {/* Navigation Buttons */}
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

      {/*  TABLET NAVBAR  */}
      <div className="hidden md:flex lg:hidden w-full bg-gradient-to-r from-green-400 to-green-600 text-white items-center justify-around py-4">
        <HomeIcon size={28} className="cursor-pointer" onClick={() => navigate("/")} />
        <ClipboardList size={28} className="cursor-pointer" onClick={() => navigate("/orders")} />
        <Bell size={28} className="cursor-pointer" onClick={() => navigate("/notifications")} />
        <User size={28} className="cursor-pointer" onClick={() => navigate("/profile")} />
      </div>

      {/*  MOBILE BOTTOM NAVIGATION  */}
      <div className="md:hidden lg:hidden fixed bottom-0 w-full bg-white shadow-lg flex justify-around py-3 z-50">
        <HomeIcon size={28} className="text-green-600 cursor-pointer" onClick={() => navigate("/")} />
        <ClipboardList size={28} className="text-green-600 cursor-pointer" onClick={() => navigate("/orders")} />
        <Bell size={28} className="text-green-600 cursor-pointer" onClick={() => navigate("/notifications")} />
        <User size={28} className="text-green-600 cursor-pointer" onClick={() => navigate("/profile")} />
      </div>

      {/*  MAIN CONTENT  */}
      <div className="flex-1 overflow-y-auto p-6 pb-24">

        {/* Back Button */}
        <button
          onClick={() => navigate("/profile")}
          className="flex items-center gap-2 mb-4 text-gray-700"
        >
          <ArrowLeft size={22} /> Back
        </button>

        {/* Title */}
        <h2 className="font-bold text-xl mb-4">Vehicle Details</h2>

        {/* Form Box */}
        <div className="bg-white p-4 rounded-xl shadow mb-4" style={boxShadow}>
          {/* Vehicle Name */}
          <label className="font-semibold text-gray-700">Vehicle Name</label>
          <input
            className="w-full p-2 border rounded-lg mt-1"
            defaultValue="Eicher"
          />

          {/* Vehicle Number */}
          <label className="font-semibold text-gray-700 mt-4 block">
            Vehicle Number
          </label>
          <input
            className="w-full p-2 border rounded-lg mt-1"
            defaultValue="AP 12 D 56252"
          />

          {/* Engine CC */}
          <label className="font-semibold text-gray-700 mt-4 block">
            Engine CC
          </label>
          <input
            className="w-full p-2 border rounded-lg mt-1"
            defaultValue="10000 CC"
          />
        </div>

        {/* Vehicle Image Section */}
        <p className="font-semibold text-gray-700 mb-2">Vehicle Image</p>

        {/* Image Upload Box */}
        <div
          onClick={handleImageUpload}
          className="w-40 h-40 bg-white border rounded-xl shadow flex flex-col items-center justify-center mx-auto cursor-pointer overflow-hidden"
          style={boxShadow}
        >
          {vehicleImage ? (
            <img
              src={URL.createObjectURL(vehicleImage)}
              alt="Vehicle"
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <Image size={40} className="opacity-70" />
              <p className="mt-2 text-gray-600">Add Image</p>
            </>
          )}
        </div>

        {/* Hidden Input */}
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => setVehicleImage(e.target.files[0])}
        />

      </div>
    </div>
  );
};

export default UpdateVehiclePage;
