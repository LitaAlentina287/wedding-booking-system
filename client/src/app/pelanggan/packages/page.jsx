"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/services/api";
import "./packages.css";

export default function PackagesPage() {

  // ==========================================
  // STATE
  // ==========================================

  const [packages, setPackages] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // ==========================================
  // GET PACKAGES
  // ==========================================

  const fetchPackages = async () => {

    try {

      setLoading(true);

      const response = await api.get("/packages");

      setPackages(response.data.data);

    } catch (err) {

      console.error(err);

      setError("Gagal mengambil data paket wedding.");

    } finally {

      setLoading(false);

    }

  };

  // ==========================================
  // LOAD DATA
  // ==========================================

  useEffect(() => {

    fetchPackages();

  }, []);

  // ==========================================
  // FORMAT RUPIAH
  // ==========================================

  const formatRupiah = (number) => {

    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(number);

  };

  // ==========================================
  // IMAGE URL
  // ==========================================

  const imageUrl = (image) => {

    if (!image) {
      return "/images/no-image.png";
    }

    return `http://localhost:5000${image}`;

  };

  // ==========================================
  // JSX
  // ==========================================

  return (

    <div className="packages-page">

      {/* ======================================
          HERO SECTION
      ======================================= */}

      <section className="packages-hero">

        <h1>Wedding Packages</h1>

        <p>
          Pilih paket pernikahan terbaik sesuai kebutuhan dan impian Anda.
          Kami menyediakan berbagai pilihan paket dengan harga yang
          transparan serta pelayanan profesional untuk menciptakan momen
          pernikahan yang tak terlupakan.
        </p>

      </section>

      {/* ======================================
          CONTENT
      ======================================= */}

      <section className="packages-content">

        <div className="section-title">

          <h2>Our Wedding Packages</h2>

          <p>
            Temukan berbagai pilihan paket wedding terbaik yang telah
            disesuaikan dengan kebutuhan acara Anda.
          </p>

        </div>

                {/* ======================================
            LOADING
        ======================================= */}

        {loading && (

          <div className="loading">

            <h3>Memuat data paket wedding...</h3>

          </div>

        )}

        {/* ======================================
            ERROR
        ======================================= */}

        {!loading && error && (

          <div className="empty">

            <h3>{error}</h3>

          </div>

        )}

        {/* ======================================
            EMPTY DATA
        ======================================= */}

        {!loading && !error && packages.length === 0 && (

          <div className="empty">

            <h3>Belum ada paket wedding.</h3>

          </div>

        )}

        {/* ======================================
            PACKAGE GRID
        ======================================= */}

        {!loading &&
          !error &&
          packages.length > 0 && (

            <div className="package-grid">

              {packages.map((item) => (

                <div
                  className="package-card"
                  key={item.id}
                >

                  {/* ==========================
                      IMAGE
                  =========================== */}

                  <div className="package-image">

                    <img
                      src={imageUrl(item.image)}
                      alt={item.package_name}
                    />

                  </div>

                  {/* ==========================
                      BODY
                  =========================== */}

                  <div className="package-body">

                    <span className="category-badge">

                      {item.category_name}

                    </span>

                    <h3>

                      {item.package_name}

                    </h3>

                    <h4>

                      {formatRupiah(item.price)}

                    </h4>

                    <p>

                      {item.description}

                    </p>

                    <Link
                      href="/pelanggan/booking"
                      className="book-button"
                    >
                      Book Now
                    </Link>

                  </div>

                </div>

              ))}

            </div>

        )}

      </section>

    </div>

  );

}