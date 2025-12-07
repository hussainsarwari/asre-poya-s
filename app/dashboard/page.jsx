"use client";

import { useState, useEffect } from "react";
import Loading from "@/app/components/loading.jsx";
import { Download, Eye, Users, Edit } from "lucide-react";

export default function DashboardMainPage() {
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    doctorAssistantDownloads: 0,
    businessAssistantDownloads: 0,
    websiteViews: 0,
    activeUsers: 0,
  });

  const [contactInfo, setContactInfo] = useState({
    address: "Tehran, Iran",
    phone: "+98 912 345 6789",
    email: "info@example.com",
    workingHours: "Sat-Thu 9:00-18:00",
    facebook: "facebook.com/example",
    linkedin: "linkedin.com/company/example",
  });

  const [editMode, setEditMode] = useState(false);

  const [activeClients, setActiveClients] = useState([
    { name: "Ali Reza", email: "ali@example.com" },
    { name: "Sara Ahmadi", email: "sara@example.com" },
    { name: "Mohammad Hosseini", email: "mohammad@example.com" },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        doctorAssistantDownloads: 1200,
        businessAssistantDownloads: 950,
        websiteViews: 5300,
        activeUsers: 320,
      });
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  const handleContactChange = (field, value) => {
    setContactInfo((prev) => ({ ...prev, [field]: value }));
  };

  const iconColor = "#1F2937"; // Dark suitable color for all icons

  return (
    <div className="w-full p-6 mx-auto space-y-6 font-sans text-gray-800">
      <h1 className="mb-4 text-3xl font-bold">Main Dashboard</h1>

      {/* Contact Information */}
      <section className="w-full p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Contact Info & Settings</h2>
          <button
            onClick={() => setEditMode(!editMode)}
            className="flex items-center gap-1 text-gray-800 hover:text-gray-900"
          >
            <Edit size={18} /> {editMode ? "Cancel" : "Edit"}
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            { label: "Address", field: "address" },
            { label: "Phone", field: "phone" },
            { label: "Email", field: "email" },
            { label: "Working Hours", field: "workingHours" },
            { label: "Facebook", field: "facebook" },
            { label: "LinkedIn", field: "linkedin" },
          ].map((item) => (
            <div key={item.field}>
              <label className="font-medium text-gray-700">{item.label}:</label>
              {editMode ? (
                <input
                  type="text"
                  value={contactInfo[item.field]}
                  onChange={(e) => handleContactChange(item.field, e.target.value)}
                  className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              ) : (
                <p className="mt-1 text-gray-800">{contactInfo[item.field]}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: "Doctor Assistant Downloads",
            value: stats.doctorAssistantDownloads,
            icon: <Download size={28} color={iconColor} />,
          },
          {
            title: "Business Assistant Downloads",
            value: stats.businessAssistantDownloads,
            icon: <Download size={28} color={iconColor} />,
          },
          {
            title: "Website Views",
            value: stats.websiteViews,
            icon: <Eye size={28} color={iconColor} />,
          },
          {
            title: "Active Users",
            value: stats.activeUsers,
            icon: <Users size={28} color={iconColor} />,
          },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center w-full p-6 text-center bg-white rounded-lg shadow-md"
          >
            {stat.icon}
            <h3 className="mt-2 font-semibold text-gray-800">{stat.title}</h3>
            <p className="mt-1 text-lg text-gray-700">{stat.value}</p>
          </div>
        ))}
      </section>

      {/* Active Clients */}
      <section className="w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Active Clients</h2>
        <ul className="divide-y divide-gray-200">
          {activeClients.map((client, index) => (
            <li key={index} className="flex items-center justify-between py-3">
              <span className="font-medium text-gray-800">{client.name}</span>
              <span className="text-gray-600">{client.email}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Spacer for full page length */}
      <div className="h-24"></div>
    </div>
  );
}
