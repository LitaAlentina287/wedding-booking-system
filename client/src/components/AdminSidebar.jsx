"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  FaTachometerAlt,
  FaTags,
  FaBoxOpen,
  FaClipboardList,
  FaUserCog,
  FaSignOutAlt,
} from "react-icons/fa";

import "./AdminSidebar.css";

export default function AdminSidebar() {

  // =====================================================
  // ROUTER
  // =====================================================

  const pathname = usePathname();
  const router = useRouter();

  // =====================================================
  // STATE
  // =====================================================

  const [showLogoutModal, setShowLogoutModal] =
    useState(false);

  // =====================================================
  // MENU
  // =====================================================

  const menus = [
    {
      name: "Dashboard",
      href: "/admin/menu/dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Categories",
      href: "/admin/menu/categories",
      icon: <FaTags />,
    },
    {
      name: "Packages",
      href: "/admin/menu/packages",
      icon: <FaBoxOpen />,
    },
    {
      name: "Bookings",
      href: "/admin/menu/bookings",
      icon: <FaClipboardList />,
    },
    {
      name: "Profile",
      href: "/admin/menu/profile",
      icon: <FaUserCog />,
    },
  ];

  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    router.push("/pelanggan");

  };

  // =====================================================
  // JSX
  // =====================================================

  return (
    <>

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className="sidebar">

        {/* ===============================
            HEADER
        =============================== */}

        <div className="sidebar-header">

          <h2>Wedding Booking</h2>

          <p>Administrator Panel</p>

        </div>

        {/* ===============================
            MENU
        =============================== */}

        <nav className="sidebar-menu">

          {menus.map((menu) => (

            <Link
              key={menu.href}
              href={menu.href}
              className={`menu-item ${
                pathname === menu.href
                  ? "active"
                  : ""
              }`}
            >

              <span className="menu-icon">

                {menu.icon}

              </span>

              <span className="menu-text">

                {menu.name}

              </span>

            </Link>

          ))}

        </nav>

        {/* ===============================
            FOOTER
        =============================== */}

        <div className="sidebar-footer">

          <button
            type="button"
            className="logout-btn"
            onClick={() =>
              setShowLogoutModal(true)
            }
          >

            <FaSignOutAlt />

            <span>Logout</span>

          </button>

        </div>

      </aside>

      {/* =====================================================
          LOGOUT MODAL
      ===================================================== */}

      {showLogoutModal && (

        <div className="logout-overlay">

          <div className="logout-modal">

            {/* ==========================
                HEADER
            ========================== */}

            <div className="logout-header">

              <h2>Konfirmasi Logout</h2>

              <p>

                Apakah Anda yakin ingin keluar
                dari sistem Wedding Booking
                Administrator?

              </p>

            </div>

            {/* ==========================
                BUTTON
            ========================== */}

            <div className="logout-buttons">

              <button
                type="button"
                className="logout-cancel"
                onClick={() =>
                  setShowLogoutModal(false)
                }
              >

                Batal

              </button>

              <button
                type="button"
                className="logout-confirm"
                onClick={handleLogout}
              >

                Logout

              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );

}