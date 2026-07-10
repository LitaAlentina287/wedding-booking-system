"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";
import "./booking.css";

export default function BookingPage() {

  // ==========================================
  // STATE
  // ==========================================

  const [packages, setPackages] = useState([]);

  const [loading, setLoading] = useState(true);

  const [submitting, setSubmitting] = useState(false);

  const [error, setError] = useState("");

  // ==========================================
  // FORM STATE
  // ==========================================

  const [formData, setFormData] = useState({
    user_id: "",
    package_id: "",
    customer_name: "",
    phone: "",
    location: "",
    booking_date: "",
    event_date: "",
    status: "Pending",
  });

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

    setFormData((prev) => ({

      ...prev,

      booking_date: getToday(),

    }));

  }, []);

  // ==========================================
  // HELPER
  // ==========================================

  const getToday = () => {

    const today = new Date();

    const year = today.getFullYear();

    const month = String(
      today.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
      today.getDate()
    ).padStart(2, "0");

    return `${year}-${month}-${day}`;

  };

  // ==========================================
  // HANDLE INPUT
  // ==========================================

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({

      ...prev,

      [name]: value,

    }));

  };

  // ==========================================
  // HANDLE SUBMIT
  // ==========================================

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setSubmitting(true);

      const payload = {

        user_id:
          formData.user_id === ""
            ? null
            : Number(formData.user_id),

        package_id: Number(formData.package_id),

        customer_name: formData.customer_name,

        phone: formData.phone,

        location: formData.location,

        booking_date: formData.booking_date,

        event_date: formData.event_date,

        status: "Pending",

      };

      await api.post("/bookings", payload);

      alert("Booking berhasil dikirim.");

      setFormData({

        user_id: "",

        package_id: "",

        customer_name: "",

        phone: "",

        location: "",

        booking_date: getToday(),

        event_date: "",

        status: "Pending",

      });

    } catch (err) {

      console.error(err);

      alert("Booking gagal dikirim.");

    } finally {

      setSubmitting(false);

    }

  };

  // ==========================================
  // JSX
  // ==========================================

  return (

    <div className="booking-page">

      {/* ======================================
          HERO
      ======================================= */}

      <section className="booking-hero">

        <div className="hero-overlay">

          <div className="hero-content">

            <span className="hero-subtitle">
              Wedding Booking System
            </span>

            <h1>
              Booking Paket Wedding
            </h1>

            <p>
              Isi formulir booking di bawah ini untuk
              melakukan pemesanan paket wedding impian
              Anda. Tim kami akan segera menghubungi Anda
              untuk melakukan konfirmasi jadwal serta
              detail acara.
            </p>

          </div>

        </div>

      </section>

      {/* ======================================
          CONTENT
      ======================================= */}

      <section className="booking-content">

        <div className="section-title">

          <span>
            Form Pemesanan
          </span>

          <h2>
            Booking Wedding Package
          </h2>

          <p>
            Silakan lengkapi seluruh data di bawah ini.
            Pastikan informasi yang Anda masukkan sudah
            benar agar proses konfirmasi dapat dilakukan
            dengan cepat.
          </p>

        </div>
                {/* ======================================
            FORM BOOKING
        ======================================= */}

        {loading ? (

          <div className="loading">

            <h3>Memuat data paket wedding...</h3>

          </div>

        ) : error ? (

          <div className="empty">

            <h3>{error}</h3>

          </div>

        ) : (

          <div className="booking-container">

            <form
              className="booking-form"
              onSubmit={handleSubmit}
            >

              {/* ==========================
                  PILIH PAKET
              ========================== */}

              <div className="form-group">

                <label>Pilih Paket Wedding</label>

                <select
                  name="package_id"
                  value={formData.package_id}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    -- Pilih Paket Wedding --
                  </option>

                  {packages.map((item) => (

                    <option
                      key={item.id}
                      value={item.id}
                    >
                      {item.package_name}
                    </option>

                  ))}

                </select>

              </div>

              {/* ==========================
                  NAMA CUSTOMER
              ========================== */}

              <div className="form-group">

                <label>Nama Lengkap</label>

                <input
                  type="text"
                  name="customer_name"
                  placeholder="Masukkan nama lengkap"
                  value={formData.customer_name}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* ==========================
                  NOMOR HP
              ========================== */}

              <div className="form-group">

                <label>Nomor HP</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="08xxxxxxxxxx"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* ==========================
                  LOKASI
              ========================== */}

              <div className="form-group">

                <label>Lokasi Acara</label>

                <textarea
                  rows="4"
                  name="location"
                  placeholder="Masukkan alamat lengkap lokasi acara"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* ==========================
                  TANGGAL BOOKING
              ========================== */}

              <div className="form-group">

                <label>Tanggal Booking</label>

                <input
                  type="date"
                  name="booking_date"
                  value={formData.booking_date}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* ==========================
                  TANGGAL ACARA
              ========================== */}

              <div className="form-group">

                <label>Tanggal Acara</label>

                <input
                  type="date"
                  name="event_date"
                  value={formData.event_date}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* ==========================
                  STATUS
              ========================== */}

              <div className="form-group">

                <label>Status Booking</label>

                <input
                  type="text"
                  value="Pending"
                  disabled
                />

              </div>

              {/* ==========================
                  BUTTON
              ========================== */}

              <button
                type="submit"
                className="booking-button"
                disabled={submitting}
              >

                {submitting
                  ? "Mengirim Booking..."
                  : "Booking Sekarang"}

              </button>

            </form>

          </div>

        )}

      </section>

    </div>

  );

}
