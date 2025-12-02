import React from "react";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Package,
  Phone,
  DollarSign,
  User,
  Home as HomeIcon,
  ClipboardList,
  Bell,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const navigate = useNavigate();

  const boxShadow = { boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" };

  return (
    <div className="flex h-screen bg-gray-50">

      {/*  DESKTOP SIDEBAR */}
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
          <span className="text-xl mt-2 font-semibold">Notifications</span>
        </div>

        {/*  Added Profile Insight */}
        <div className="flex flex-col items-center cursor-pointer" onClick={() => navigate("/profile")}>
          <User size={32} />
          <span className="text-xl mt-2 font-semibold">Profile</span>
        </div>
      </div>

      {/* TABLET TOP NAVBAR */}
      <div className="hidden md:flex lg:hidden w-full bg-gradient-to-r from-green-400 to-green-600 text-white items-center justify-around py-4 fixed top-0 z-50">
        <HomeIcon size={28} onClick={() => navigate("/")} className="cursor-pointer" />
        <ClipboardList size={28} onClick={() => navigate("/orders")} className="cursor-pointer" />
        <Bell size={28} onClick={() => navigate("/notifications")} className="cursor-pointer" />

        {/* Added Profile */}
        <User size={28} onClick={() => navigate("/profile")} className="cursor-pointer" />
      </div>

      {/* MOBILE BOTTOM NAVBAR */}
      <div className="md:hidden lg:hidden fixed bottom-0 w-full bg-white shadow-lg flex justify-around py-3 z-50">
        <HomeIcon size={28} onClick={() => navigate("/")} className="text-green-600 cursor-pointer" />
        <ClipboardList size={28} onClick={() => navigate("/orders")} className="text-green-600 cursor-pointer" />
        <Bell size={28} onClick={() => navigate("/notifications")} className="text-green-600 cursor-pointer" />

        {/*  Added Profile */}
        <User size={28} onClick={() => navigate("/profile")} className="text-green-600 cursor-pointer" />
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 overflow-y-auto px-5 md:pt-20 pb-32 lg:pt-5">

        {/* Header */}
        <div className="flex items-center gap-3 mb-4 mt-4">
          <ArrowLeft
            size={24}
            className="cursor-pointer"
            onClick={() => navigate("/")}
          />
          <div>
            <p className="text-xl font-bold">Order Details</p>
            <p className="text-gray-500">ORD-2548</p>
          </div>
        </div>

        <hr className="mb-4" />

        {/* Order Status */}
        <div
          className="p-4 rounded-xl mb-4 text-center"
          style={{
            backgroundColor: "#F6FFF9",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            borderLeft: "4px solid #22C55E",
          }}
        >
          <p className="text-gray-600 font-semibold">Order Status</p>
          <p className="text-green-600 font-bold text-lg">In Progress</p>
        </div>

        {/* Package Information */}
        <div className="bg-white p-4 rounded-xl shadow mb-4">
          <p className="text-lg font-semibold mb-4">Package Information</p>

          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <Package size={18} />
              <p>Number of Packages</p>
            </div>
            <p className="font-semibold">2</p>
          </div>

          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <p>Distance</p>
            </div>
            <p className="font-semibold">8.5 km</p>
          </div>

          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <p>Estimated Time</p>
            </div>
            <p className="font-semibold">30 mins</p>
          </div>

          <div className="flex justify-between items-center mt-4 pt-3 border-t">
            <div className="flex items-center gap-2">
              <DollarSign size={20} />
              <p className="text-lg font-semibold">Payment</p>
            </div>
            <div className="flex items-center gap-1 font-semibold text-green-600">
              <DollarSign size={18} /> 24.50
            </div>
          </div>
        </div>

        {/* Locations */}
        <div className="bg-white p-4 rounded-xl shadow mb-4">
          <p className="text-lg font-semibold mb-2">Locations</p>

          <div className="flex items-start gap-2 mb-3">
            <MapPin size={20} className="text-green-600" />
            <div>
              <p className="font-semibold">Pickup</p>
              <p className="text-gray-600">123 Hotel Arya St, Industrial Area</p>
              <p className="text-green-600 flex items-center gap-1 mt-1">
                <Phone size={16} /> Call Sender
              </p>
              <p className="text-sm text-gray-500">8.5 km travel distance</p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <MapPin size={20} className="text-red-600" />
            <div>
              <p className="font-semibold">Delivery</p>
              <p className="text-gray-600">456 Customer Ave, Downtown</p>
              <p className="text-green-600 flex items-center gap-1 mt-1">
                <Phone size={16} /> Call Recipient
              </p>
            </div>
          </div>
        </div>

        {/* Customer Info */}
        <div className="bg-white p-4 rounded-xl shadow mb-6">
          <p className="text-lg font-semibold mb-3">Customer Information</p>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <User size={24} />
            </div>
            <div>
              <p className="font-semibold">Sarah Johnson</p>
              <p className="text-gray-600">+91 1234567890</p>
            </div>
          </div>

          <hr className="my-2" />

          <p className="text-lg font-semibold">Special Instructions</p>
          <p className="text-gray-600">
            Please call upon arrival. Leave at front desk if not available.
          </p>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-between mb-10">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-gray-200 rounded-xl font-semibold"
          >
            Back
          </button>

          <button
            onClick={() => navigate("/navigation")}
            className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold"
          >
            Start Navigation
          </button>
        </div>

      </div>
    </div>
  );
};

export default OrderDetails;
