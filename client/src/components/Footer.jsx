import Link from "next/link";
import "./Footer.css";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaGem,
  FaClipboardList,
  FaUtensils,
  FaPaintBrush,
  FaCamera,
  FaMusic,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Wedding Booking */}
        <div className="footer-section">

          <h2>Wedding Booking</h2>

          <p>
            Wedding Booking System adalah platform pemesanan paket
            pernikahan yang membantu calon pengantin menemukan
            layanan terbaik untuk mewujudkan hari bahagia mereka.
            Dengan proses booking yang mudah, cepat, dan aman,
            pelanggan dapat memilih paket sesuai kebutuhan hanya
            dalam beberapa langkah.
          </p>

        </div>

        {/* Menu */}
        <div className="footer-section">

          <h3>Menu</h3>

          <ul>

            <li>
              <Link href="/pelanggan">
                Home
              </Link>
            </li>

            <li>
              <Link href="/pelanggan/categories">
                Categories
              </Link>
            </li>

            <li>
              <Link href="/pelanggan/packages">
                Packages
              </Link>
            </li>

            <li>
              <Link href="/pelanggan/booking">
                Booking
              </Link>
            </li>

            <li>
              <Link href="/pelanggan/about">
                About
              </Link>
            </li>

            <li>
              <Link href="/pelanggan/contact">
                Contact
              </Link>
            </li>

          </ul>

        </div>

        {/* Layanan */}
        <div className="footer-section">

          <h3>Layanan Kami</h3>

          <ul>

            <li>
              <FaGem />
              <span>Dekorasi Pernikahan</span>
            </li>

            <li>
              <FaClipboardList />
              <span>Wedding Organizer</span>
            </li>

            <li>
              <FaUtensils />
              <span>Catering</span>
            </li>

            <li>
              <FaPaintBrush />
              <span>Make Up Artist</span>
            </li>

            <li>
              <FaCamera />
              <span>Foto &amp; Video Wedding</span>
            </li>

            <li>
              <FaMusic />
              <span>Entertainment</span>
            </li>

          </ul>

        </div>

        {/* Contact */}
        <div className="footer-section">

          <h3>Contact</h3>

          <div className="footer-contact">

            <p>
              <FaMapMarkerAlt />
              <span>Bandung, Jawa Barat</span>
            </p>

            <p>
              <FaEnvelope />
              <span>info@weddingbooking.com</span>
            </p>

            <p>
              <FaPhoneAlt />
              <span>0812 3456 7890</span>
            </p>

            <h4>
              <FaClock />
              <span>Jam Operasional</span>
            </h4>

            <div className="footer-hours">

              <p>Senin - Jumat</p>

              <p>08:00 - 17:00 WIB</p>

            </div>

          </div>

        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">

        <p>
          © {currentYear} Wedding Booking System. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}