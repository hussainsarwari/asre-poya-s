'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Settings,
  Briefcase,
  Menu,
  X,
  LogOut,
  FileText,
  Box,
  ToolCase,
  Info,
  MessageCircle,
} from "lucide-react";

export default function DashboardSidebar({ currentPath, isOpen, toggleOpen }) {
  const [isMobile, setIsMobile] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [active, setActive] = useState(currentPath || "/dashboard");

  const openWidth = 16; // rem
  const closedWidth = 3; // rem

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: <Home size={20} /> },
    { name: "Profile", href: "/dashboard/profile", icon: <User size={20} /> },
    { name: "Jobs", href: "/dashboard/jobs", icon: <Briefcase size={20} /> },
    { name: "Messages", href: "/dashboard/messages", icon: <MessageCircle size={20} /> },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: <Settings size={20} />,
      children: [
        { name: "Home Page Content", href: "/dashboard/settings/home_page_content", icon: <FileText size={18} /> },
        { name: "Products Page Content", href: "/dashboard/settings/product-content/", icon: <Box size={18} /> },
        { name: "Services Page Content", href: "/dashboard/settings/services_page_content", icon: <ToolCase size={18} /> },
        { name: "Business Page Content", href: "/dashboard/settings/business_page_content", icon: <Briefcase size={18} /> },
        { name: "About Us Page Content", href: "/dashboard/settings/about_us_page_content", icon: <Info size={18} /> },
      ],
    },
  ];

  const footerItems = [{ name: "Logout", href: "/", icon: <LogOut size={20} /> }];

  return (
    <motion.aside
      style={{
        width: `${isOpen ? openWidth : closedWidth}rem`,
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
      }}
      className="z-50 flex flex-col bg-white shadow-lg"
    >
      {/* Header */}
      <div className="flex items-center justify-between h-16 p-4 border-b border-gray-200">
        {isOpen && <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>}
        <button
          className="p-0 rounded-md cursor-pointer"
          onClick={toggleOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex flex-col flex-1 gap-2 p-2 overflow-y-auto">
        {menuItems.map((item) => {
          const isItemActive = active === item.href || item.children?.some(c => active === c.href);
          if (item.children) {
            return (
              <div key={item.href} className="relative">
                <button
                  onClick={() => setSettingsOpen(!settingsOpen)}
                  className={`flex items-center gap-3 w-full py-2 px-2 cursor-pointer rounded-lg text-gray-600 hover:text-white hover:bg-gray-500 transition-colors
                    ${isItemActive ? "bg-gray-600 text-white font-semibold" : ""}
                    ${!isOpen ? "justify-center" : ""}`}
                >
                  {item.icon}
                  {isOpen && <span>{item.name}</span>}
                </button>
                <AnimatePresence>
                  {settingsOpen && (
                    <motion.div
                      key="settings-menu"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex flex-col mt-1 shadow-lg absolute left-0 top-10 ${isOpen ? "ml-6 gap-1" : " p-2 rounded bg-white"}`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => {setActive(child.href), setSettingsOpen(false)}}
                          className={`flex items-center gap-2 py-1 px-2 rounded-lg text-gray-600 hover:text-white hover:bg-gray-500 transition-colors text-sm
                            ${active === child.href ? "bg-gray-800 text-white font-semibold" : ""}
                            ${!isOpen ? "justify-center px-0" : ""}`}
                        >
                          {child.icon}
                          {isOpen && <span>{child.name}</span>}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          }
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() =>{setSettingsOpen(false), setActive(item.href)}}
              className={`flex items-center gap-3 py-2 px-2 rounded-lg text-gray-800 hover:text-white hover:bg-gray-500 transition-colors
                ${active === item.href ? "bg-gray-800 text-white font-semibold" : ""}
                ${!isOpen ? "justify-center" : ""}`}
            >
              {item.icon}
              {isOpen && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className={`flex flex-col p-4 border-t border-gray-200 mt-auto gap-2 ${!isOpen ? "items-center" : ""}`}>
        {footerItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-2 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${!isOpen ? "justify-center px-0" : ""}`}
          >
            {item.icon}
            {isOpen && <span>{item.name}</span>}
          </Link>
        ))}
      </div>
    </motion.aside>
  );
}
