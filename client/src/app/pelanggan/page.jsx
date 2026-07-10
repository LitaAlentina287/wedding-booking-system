"use client";

import Link from "next/link";
import "./page.css";

import {
  FaRing,
  FaCalendarCheck,
  FaStar,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Hero */}

      <section className="hero">

        <div className="hero-content">

          <h1>
            Welcome to Wedding Booking System
          </h1>

          <p>
            Temukan paket dekorasi pernikahan terbaik
            untuk mewujudkan hari bahagia Anda.
            Booking dapat dilakukan secara online
            dengan mudah, cepat, dan aman.
          </p>

          <div className="hero-button">

            <Link
              href="/pelanggan/packages"
              className="btn-primary"
            >
              Lihat Paket
            </Link>

            <Link
              href="/pelanggan/booking"
              className="btn-secondary"
            >
              Booking Sekarang
            </Link>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="features">

        <h2>Mengapa Memilih Kami?</h2>

        <div className="feature-container">

          <div className="feature-card">

            <div className="feature-icon">
              <FaRing />
            </div>

            <h3>Paket Lengkap</h3>

            <p>
              Berbagai pilihan paket wedding indoor
              dan outdoor dengan harga terbaik.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              <FaCalendarCheck />
            </div>

            <h3>Booking Online</h3>

            <p>
              Proses pemesanan lebih cepat tanpa
              harus datang langsung.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              <FaStar />
            </div>

            <h3>Pelayanan Terbaik</h3>

            <p>
              Tim profesional siap membantu
              mewujudkan pernikahan impian Anda.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta">

        <h2>
          Siap Merencanakan Hari Bahagia Anda?
        </h2>

        <p>
          Pilih paket wedding favorit Anda dan
          lakukan booking sekarang juga.
        </p>

        <Link
          href="/pelanggan/booking"
          className="btn-booking"
        >
          Booking Sekarang
        </Link>

      </section>
    </>
  );
}