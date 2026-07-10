"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GiDiamondRing } from "react-icons/gi";
import api from "@/services/api";
import "./categories.css";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // ==========================
  // GET ALL CATEGORIES
  // ==========================

  const fetchCategories = async () => {
    try {
      setLoading(true);

      const response = await api.get("/categories");

      setCategories(response.data.data);
    } catch (error) {
      console.error("Gagal mengambil kategori:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="categories-page">

      {/* ================= HERO ================= */}

      <section className="categories-hero">

        <h1>Wedding Categories</h1>

        <p>
          Temukan berbagai kategori wedding yang dapat
          disesuaikan dengan konsep dan kebutuhan
          acara impian Anda.
        </p>

      </section>

      {/* ================= CONTENT ================= */}

      <section className="categories-content">

        <div className="section-title">

          <h2>Pilih Kategori</h2>

          <p>
            Pilih kategori untuk melihat berbagai
            paket wedding yang tersedia dan sesuai
            dengan kebutuhan acara Anda.
          </p>

        </div>

        {loading ? (

          <div className="loading">
            <h3>Memuat data kategori...</h3>
          </div>

        ) : categories.length === 0 ? (

          <div className="empty">
            <h3>Belum ada kategori tersedia.</h3>
          </div>

        ) : (

          <div className="category-grid">

            {categories.map((category) => (

              <div
                key={category.id}
                className="category-card"
              >

                <div className="category-icon">
                  <GiDiamondRing />
                </div>

                <h3>{category.name}</h3>

                <p>
                  {category.description}
                </p>

                <Link
                  href={`/pelanggan/packages?category=${category.id}`}
                  className="category-button"
                >
                  Lihat Paket
                </Link>

              </div>

            ))}

          </div>

        )}

      </section>

    </div>
  );
}