import React from "react";
import { Home as HomeIcon, ClipboardList, Bell, User, MapPin,  Send,DollarSign,TrendingUp,Clock,} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const NotificationsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex h-screen bg-gray-50">

      {/* Vertical Navigation */}
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

      {/* TABLET TOP NAVIGATION */}
      <div className="hidden md:flex lg:hidden w-full bg-gradient-to-r from-green-400 to-green-600 text-white items-center justify-around py-4">
        <HomeIcon size={28} onClick={() => navigate("/")} className="cursor-pointer" />
        <ClipboardList size={28} onClick={() => navigate("/orders")} className="cursor-pointer" />
        <Bell size={28} onClick={() => navigate("/notifications")} className="cursor-pointer" />
        <User size={28} onClick={() => navigate("/profile")} className="cursor-pointer" />
      </div>

      {/* MOBILE BOTTOM NAVIGATION */}
      <div className="md:hidden lg:hidden fixed bottom-0 w-full bg-white shadow-lg flex justify-around py-3 z-50 border-t">
        <HomeIcon size={28} onClick={() => navigate("/")} className="text-green-600 cursor-pointer" />
        <ClipboardList size={28} onClick={() => navigate("/orders")} className="text-green-600 cursor-pointer" />
        <Bell size={28} onClick={() => navigate("/notifications")} className="text-green-600 cursor-pointer" />
        <User size={28} onClick={() => navigate("/profile")} className="text-green-600 cursor-pointer" />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 overflow-y-auto p-5 pb-24">

        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-bold">Notifications</h1>
          <button className="text-green-600 font-semibold">
            Mark all read
          </button>
        </div>

        <p className="text-gray-600 mb-4">Stay updated with your activities</p>

        {/* Notification Cards */}
        <div
          className="bg-green-50 p-4 rounded-xl shadow-md mb-4 cursor-pointer border-l-4 border-green-600"
          onClick={() => navigate("/order-details?order=ORD-2548")}
        >
          <div className="flex items-center gap-3">
            <Bell size={22} className="text-green-600" />
            <p className="font-semibold">Mark all read</p>
          </div>
          <p className="text-gray-700 mt-1">
            Order #ORD-2848 has been assigned to you
          </p>
          <p className="text-gray-500 text-sm mt-1">5 mins ago</p>
        </div>

        <div className="bg-green-50 p-4 rounded-xl shadow-md mb-4 border-l-4 border-green-600">
          <div className="flex items-center gap-3">
            <DollarSign size={22} className="text-green-600" />
            <p className="font-semibold">Payment Received</p>
          </div>
          <p className="text-gray-700 mt-1">
            $24.50 has been credited to your account
          </p>
          <p className="text-gray-500 text-sm mt-1">1 hour ago</p>
        </div>

        <div
          className="bg-white p-4 rounded-xl shadow-md mb-4 cursor-pointer border-l-4 border-green-600"
          onClick={() => navigate("/order-details?order=ORD-2846")}
        >
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center">
              <Clock size={18} className="text-green-600" />
            </div>
            <p className="font-semibold">Delivery Completed</p>
          </div>
          <p className="text-gray-700 mt-1">
            Order #ORD-2846 marked as completed
          </p>
          <p className="text-gray-500 text-sm mt-1">2 hours ago</p>
        </div>

        <div
          className="bg-white p-4 rounded-xl shadow-md mb-4 cursor-pointer border-l-4 border-red-600"
          onClick={() => navigate("/order-details?order=ORD-2784&cancelled=true")}
        >
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-red-100 rounded-full flex items-center justify-center">
              <Bell size={18} className="text-red-600" />
            </div>
            <p className="font-semibold text-black">Order Cancelled</p>
          </div>
          <p className="text-gray-700 mt-1">
            Order #ORD-2784 has been cancelled by customer
          </p>
          <p className="text-gray-500 text-sm mt-1">5 hours ago</p>
        </div>

        <div className="bg-purple-50 p-4 rounded-xl shadow-md mb-4 border-l-4 border-purple-600">
          <div className="flex items-center gap-3">
            <TrendingUp size={22} className="text-purple-600" />
            <p className="font-semibold">Milestone Reached!</p>
          </div>
          <p className="text-gray-700 mt-1">
            Congratulations! You completed 100 deliveries
          </p>
          <p className="text-gray-500 text-sm mt-1">1 day ago</p>
        </div>

        <div className="bg-green-50 p-4 rounded-xl shadow-md mb-4 border-l-4 border-green-600">
          <div className="flex items-center gap-3">
            <Bell size={22} className="text-green-600" />
            <p className="font-semibold">System Update</p>
          </div>
          <p className="text-gray-700 mt-1">
            New features added to driver app. Check them out!
          </p>
          <p className="text-gray-500 text-sm mt-1">2 days ago</p>
        </div>

      </div>
    </div>
  );
};

export default NotificationsPage;
