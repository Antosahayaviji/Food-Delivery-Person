import React, { useState } from "react";
import {
  FiNavigation2,
  FiBox,
  FiMapPin,
  FiClock,
  FiDollarSign,
  FiCheck,
  FiArrowLeft,
} from "react-icons/fi";

// NEW ICONS (same as Home page)
import {
  Home as HomeIcon,
  ClipboardList,
  Bell,
  User
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("active");
  const [detailOpen, setDetailOpen] = useState(false);
  const [detailOrderId, setDetailOrderId] = useState(null);

  const boxShadow = { boxShadow: "0px 4px 12px rgba(0,0,0,0.1)" };

  // sample data
  const activeOrders = [
    {
      id: "ORD-2548",
      packages: "2 packages",
      pickup: "123 Hotel Arya St, Industrial Area",
      delivery: "456 Customer Ave, Downtown",
      distance: "8.5 km",
      time: "30 mins",
      amount: "24.50",
      status: "In Progress",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: "ORD-2848",
      packages: "1 package",
      pickup: "789 Store Rd, Mall Area",
      delivery: "321 Residential St, Suburban",
      distance: "12.2 km",
      time: "45 mins",
      amount: "18.00",
      status: "Pending Pickup",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
  ];

  const completedOrders = [
    {
      id: "ORD-2846",
      packages: "3 packages",
      from: "555 Depot Ave",
      to: "888 Oak Street",
      distance: "8.5 km",
      amount: "24.50",
      when: "2 hours ago",
    },
    {
      id: "ORD-2847",
      packages: "2 packages",
      from: "200 Supply Rd",
      to: "900 Market St",
      distance: "10.2 km",
      amount: "18.75",
      when: "5 hours ago",
    },
    {
      id: "ORD-2456",
      packages: "3 packages",
      from: "555 Lulu Mall Avenue",
      to: "437 Pine Street",
      distance: "10.5 km",
      amount: "20.45",
      when: "6 hours ago",
    },
  ];

  const cancelledOrders = [
    {
      id: "ORD-3001",
      packages: "packages",
      from: "555 Dept AVe",
      to: "888 Oak Street",
      reason: "Customer cancelled",
    },
  ];

  const openDetails = (orderId) => {
    setDetailOrderId(orderId);
    setDetailOpen(true);
  };

  const CompletedOrderDetails = ({ order }) => {
    if (!order) return null;

    return (
      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={() => setDetailOpen(false)}
            className="p-2 rounded-md bg-gray-100"
          >
            <FiArrowLeft size={20} />
          </button>
          <div>
            <p className="text-xl font-bold">Order Details</p>
            <p className="text-gray-500">{order.id}</p>
          </div>
        </div>

        <hr className="mb-4" />

        <div className="bg-white p-4 rounded-xl shadow-md mb-4 text-center">
          <p className="text-lg font-semibold">Order Status</p>
          <p className="text-green-600 font-bold flex items-center justify-center gap-2">
            <FiCheck /> Completed
          </p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md mb-4">
          <p className="text-lg font-semibold mb-3">Package Information</p>

          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <FiBox size={18} />
              <p>Number of Packages</p>
            </div>
            <p className="font-semibold">{order.packages}</p>
          </div>

          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <FiMapPin size={18} />
              <p>Distance</p>
            </div>
            <p className="font-semibold">{order.distance}</p>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FiDollarSign size={18} />
              <p className="font-semibold">Payment</p>
            </div>
            <div className="flex items-center gap-1 font-semibold">
              <FiDollarSign size={16} /> {order.amount}
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-md mb-6">
          <p className="text-lg font-semibold mb-3">Locations</p>

          <div className="mb-3">
            <div className="flex items-center gap-2">
              <FiMapPin className="text-green-600" />
              <p className="font-semibold">Pickup</p>
            </div>
            <p className="text-gray-700 mt-1">{order.from}</p>
            <p className="text-sm text-gray-500 mt-1">{order.distance} travel distance</p>
          </div>

          <div className="mt-2">
            <div className="flex items-center gap-2">
              <FiMapPin className="text-red-600" />
              <p className="font-semibold">Delivery</p>
            </div>
            <p className="text-gray-700 mt-1">{order.to}</p>
          </div>
        </div>

        <button
          onClick={() => {
            setDetailOpen(false);
            setTab("active");
          }}
          className="w-full bg-gray-200 px-4 py-3 rounded-xl font-semibold"
        >
          Back to orders
        </button>
      </div>
    );
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">

      {/* DESKTOP SIDEBAR */}
      <div className="hidden lg:flex w-[260px] bg-gradient-to-b from-green-400 to-green-600 text-white flex-col items-center py-10 space-y-10">

        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-white bg-opacity-30 flex items-center justify-center text-white font-bold text-xl">
            JD
          </div>
          <p className="text-xl font-semibold mt-4">Good Morning!</p>
          <p className="text-2xl font-bold -mt-1">John Driver</p>
        </div>

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

      {/* TABLET NAVBAR */}
      <div className="hidden md:flex lg:hidden w-full bg-gradient-to-r from-green-400 to-green-600 text-white items-center justify-around py-4 fixed top-0 z-50">
        <HomeIcon size={28} onClick={() => navigate("/")} className="cursor-pointer" />
        <ClipboardList size={28} onClick={() => navigate("/orders")} className="cursor-pointer" />
        <Bell size={28} onClick={() => navigate("/notifications")} className="cursor-pointer" />
        <User size={28} onClick={() => navigate("/profile")} className="cursor-pointer" />
      </div>

      {/* MOBILE BOTTOM NAV */}
      <div className="md:hidden lg:hidden fixed bottom-0 w-full bg-white shadow-lg flex justify-around py-3 z-50">
        <HomeIcon size={28} onClick={() => navigate("/")} className="text-green-600 cursor-pointer" />
        <ClipboardList size={28} onClick={() => navigate("/orders")} className="text-green-600 cursor-pointer" />
        <Bell size={28} onClick={() => navigate("/notifications")} className="text-green-600 cursor-pointer" />
        <User size={28} onClick={() => navigate("/profile")} className="text-green-600 cursor-pointer" />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-5 pb-24 mt-12 md:mt-16 lg:mt-0">
        <h1 className="text-2xl font-bold">My Orders</h1>
        <p className="text-gray-600 mt-1 mb-4">Track and manage your deliveries</p>

        {/* Tabs */}
        <div className="flex gap-3 mb-5">
          {[
            { key: "active", label: `Active (${activeOrders.length})` },
            { key: "completed", label: `Completed (${completedOrders.length})` },
            { key: "cancelled", label: `Cancelled (${cancelledOrders.length})` },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => {
                setTab(t.key);
                setDetailOpen(false);
              }}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                tab === t.key
                  ? "bg-white text-gray-900 shadow-md border border-gray-300"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Active Tab */}
        {detailOpen && tab === "completed" ? (
          <CompletedOrderDetails
            order={completedOrders.find((o) => o.id === detailOrderId)}
          />
        ) : (
          <>
            {tab === "active" && (
              <div>
                {activeOrders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-white rounded-xl shadow-md p-4 mb-4"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold">{order.id}</h3>
                      <span className={`${order.statusColor} px-3 py-1 rounded-full text-sm`}>
                        {order.status}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-2">{order.packages}</p>

                    <div className="flex items-start mb-2">
                      <FiMapPin className="text-green-600 mt-1" />
                      <div className="ml-2">
                        <p className="font-semibold">Pickup</p>
                        <p className="text-gray-600 text-sm">{order.pickup}</p>
                      </div>
                    </div>

                    <div className="flex items-start mb-3">
                      <FiMapPin className="text-red-600 mt-1" />
                      <div className="ml-2">
                        <p className="font-semibold">Delivery</p>
                        <p className="text-gray-600 text-sm">{order.delivery}</p>
                      </div>
                    </div>

                    <hr className="my-3" />

                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <FiMapPin /> <span>{order.distance}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiClock /> <span>{order.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FiDollarSign /> <span>{order.amount}</span>
                      </div>
                    </div>

                    <div className="flex justify-between mt-4">
                      <button
                        onClick={() => (window.location.href = "/order-details")}
                        className="bg-white border border-green-500 text-green-600 w-[48%] px-4 py-2 rounded-lg"
                      >
                        View Details
                      </button>

                      <button
                        onClick={() => (window.location.href = "/navigation")}
                        className="bg-green-500 text-white w-[48%] px-4 py-2 rounded-lg flex items-center justify-center gap-2"
                      >
                        <FiNavigation2 /> Navigate
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Completed Orders */}
            {tab === "completed" && (
              <div>
                {completedOrders.map((c) => (
                  <div key={c.id} className="bg-white rounded-xl shadow-md p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold">{c.id}</h3>
                      <div className="flex items-center gap-2 text-green-600 font-semibold">
                        <FiCheck /> Completed
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <FiBox />
                      <span className="text-gray-700">{c.packages}</span>
                    </div>

                    <div className="mt-2 mb-2">
                      <div className="flex items-center gap-2">
                        <FiMapPin className="text-gray-800" />
                        <span>From {c.from}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <FiMapPin className="text-red-600" />
                        <span>To: {c.to}</span>
                      </div>
                    </div>

                    <hr className="my-3" />

                    <div className="flex justify-between text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <FiMapPin /> <span>{c.distance}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiDollarSign /> <span>{c.amount}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiClock /> <span>{c.when}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => openDetails(c.id)}
                      className="w-full bg-green-500 text-white px-4 py-2 rounded-lg mt-4"
                    >
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Cancelled */}
            {tab === "cancelled" && (
              <div>
                {cancelledOrders.map((c) => (
                  <div key={c.id} className="bg-white rounded-xl shadow-md p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold">{c.id}</h3>
                      <span className="text-red-500 font-semibold flex items-center gap-1">
                        Cancelled
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <FiBox /> <span>{c.packages}</span>
                    </div>

                    <p className="text-gray-700 mt-1">From: {c.from}</p>
                    <p className="text-gray-700 mt-1">To: {c.to}</p>

                    <hr className="my-3" />

                    <div className="flex justify-between text-sm text-gray-600 font-medium">
                      <span>{c.reason}</span>
                      <span>5 hours ago</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
