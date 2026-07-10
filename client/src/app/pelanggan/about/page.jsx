"use client";

import Link from "next/link";
import {
  FaRing,
  FaCalendarCheck,
  FaUsers,
  FaHeart,
  FaBullseye,
  FaRocket,
} from "react-icons/fa";

import "./about.css";

/* ======================================
   DATA FEATURES
====================================== */

const features = [
  {
    id: 1,
    icon: <FaRing />,
    title: "Wedding Packages",
    description:
      "Beragam pilihan paket wedding dengan konsep modern, elegan, dan dapat disesuaikan dengan kebutuhan pasangan.",
  },
  {
    id: 2,
    icon: <FaCalendarCheck />,
    title: "Easy Booking",
    description:
      "Proses pemesanan dilakukan secara online sehingga lebih cepat, mudah, dan efisien tanpa harus datang langsung.",
  },
  {
    id: 3,
    icon: <FaUsers />,
    title: "Professional Service",
    description:
      "Didukung oleh tim wedding organizer yang profesional dan berpengalaman dalam menangani berbagai acara pernikahan.",
  },
  {
    id: 4,
    icon: <FaHeart />,
    title: "Customer Satisfaction",
    description:
      "Kami selalu mengutamakan kepuasan pelanggan dengan memberikan pelayanan terbaik serta kualitas yang terpercaya.",
  },
];

/* ======================================
   ABOUT PAGE
====================================== */

export default function AboutPage() {
  return (
    <div className="about-page">

      {/* ======================================
          HERO SECTION
      ====================================== */}

      <section className="about-hero">
        <h1>About Wedding Booking</h1>

        <p>
          Wedding Booking merupakan platform yang membantu
          calon pengantin menemukan paket pernikahan terbaik
          dengan proses pemesanan yang mudah, cepat,
          dan terpercaya.
        </p>
      </section>

      {/* ======================================
          ABOUT SECTION
      ====================================== */}

      <section className="about-section">
        <div className="about-container">

          <div className="about-image">
            <img
              src="/images/about-wedding.jpg"
              alt="Wedding Decoration"
            />
          </div>

          <div className="about-content">

            <span className="section-subtitle">
              Tentang Kami
            </span>

            <h2>
              Wujudkan Pernikahan Impian Bersama Kami
            </h2>

            <p>
              Wedding Booking hadir sebagai solusi digital
              untuk membantu pasangan menemukan paket
              wedding yang sesuai dengan kebutuhan dan
              anggaran. Kami menyediakan berbagai pilihan
              kategori paket dengan informasi lengkap agar
              proses pemilihan menjadi lebih mudah.
            </p>

            <p>
              Dengan dukungan teknologi berbasis web,
              pelanggan dapat melihat daftar paket,
              melakukan pemesanan secara online,
              serta memperoleh informasi yang transparan
              mengenai layanan yang tersedia.
            </p>

            <Link
              href="/pelanggan/categories"
              className="about-button"
            >
              Lihat Kategori
            </Link>

          </div>

        </div>
      </section>

      {/* ======================================
          VISION & MISSION
      ====================================== */}

      <section className="vision-section">
        <div className="vision-container">

          <div className="vision-card">

            <div className="vision-icon">
              <FaBullseye />
            </div>

            <h3>Visi</h3>

            <p>
              Menjadi platform wedding booking terpercaya
              yang memberikan kemudahan dalam merencanakan
              pernikahan dengan layanan digital yang modern,
              aman, dan berkualitas.
            </p>

          </div>

          <div className="vision-card">

            <div className="vision-icon">
              <FaRocket />
            </div>

            <h3>Misi</h3>

            <ul>
              <li>
                Menyediakan informasi paket wedding
                secara lengkap dan jelas.
              </li>

              <li>
                Memberikan pengalaman pemesanan
                yang mudah dan cepat.
              </li>

              <li>
                Menjalin kerja sama dengan vendor
                profesional dan terpercaya.
              </li>

              <li>
                Meningkatkan kualitas pelayanan
                demi kepuasan pelanggan.
              </li>
            </ul>

          </div>

        </div>
      </section>

      {/* ======================================
          FEATURES SECTION
      ====================================== */}

      <section className="features-section">

        <div className="section-title">

          <h2>Why Choose Us?</h2>

          <p>
            Kami berkomitmen memberikan pelayanan terbaik
            untuk membantu Anda mewujudkan hari bahagia
            yang berkesan.
          </p>

        </div>

        <div className="features-grid">

          {features.map((feature) => (
            <div
              key={feature.id}
              className="feature-card"
            >

              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

            </div>
          ))}

        </div>

      </section>

      {/* ======================================
          STATISTICS SECTION
      ====================================== */}

      <section className="statistics-section">

        <div className="statistics-container">

          <div className="stat-item">
            <h2>500+</h2>
            <p>Wedding Events</p>
          </div>

          <div className="stat-item">
            <h2>150+</h2>
            <p>Wedding Packages</p>
          </div>

          <div className="stat-item">
            <h2>100%</h2>
            <p>Customer Satisfaction</p>
          </div>

          <div className="stat-item">
            <h2>24/7</h2>
            <p>Customer Support</p>
          </div>

        </div>

      </section>

      {/* ======================================
          CALL TO ACTION
      ====================================== */}

      <section className="cta-section">

        <h2>
          Siap Merencanakan Pernikahan Impian Anda?
        </h2>

        <p>
          Jelajahi berbagai kategori dan paket wedding
          terbaik, kemudian lakukan pemesanan dengan mudah
          melalui Wedding Booking.
        </p>

        <div className="cta-buttons">

          <Link
            href="/pelanggan/categories"
            className="primary-btn"
          >
            Lihat Kategori
          </Link>

          <Link
            href="/pelanggan/packages"
            className="secondary-btn"
          >
            Lihat Paket
          </Link>

        </div>

      </section>

    </div>
  );
}