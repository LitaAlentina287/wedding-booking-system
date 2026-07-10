"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link href="/pelanggan" className="logo">
          Wedding Booking
        </Link>

        {/* Navigation Menu */}
        <ul className="nav-menu">

          <li>
            <Link
              href="/pelanggan"
              className={pathname === "/pelanggan" ? "active" : ""}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/pelanggan/categories"
              className={pathname === "/pelanggan/categories" ? "active" : ""}
            >
              Categories
            </Link>
          </li>

          <li>
            <Link
              href="/pelanggan/packages"
              className={pathname === "/pelanggan/packages" ? "active" : ""}
            >
              Packages
            </Link>
          </li>

          <li>
            <Link
              href="/pelanggan/booking"
              className={pathname === "/pelanggan/booking" ? "active" : ""}
            >
              Booking
            </Link>
          </li>

          <li>
            <Link
              href="/pelanggan/about"
              className={pathname === "/pelanggan/about" ? "active" : ""}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/pelanggan/contact"
              className={pathname === "/pelanggan/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              href="/admin/login"
              className="btn-admin"
            >
              Login Admin
            </Link>
          </li>

        </ul>

      </div>
    </nav>
  );
}