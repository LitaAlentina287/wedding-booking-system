"use client";

import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaQuestionCircle,
} from "react-icons/fa";

import "./contact.css";

/* ======================================
   CONTACT INFORMATION
====================================== */

const contactInfo = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    title: "Alamat",
    value: "Jl. Raya Wedding No. 123, Bandung, Jawa Barat",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    title: "Telepon",
    value: "+62 812-3456-7890",
  },
  {
    id: 3,
    icon: <FaEnvelope />,
    title: "Email",
    value: "info@weddingbooking.com",
  },
  {
    id: 4,
    icon: <FaClock />,
    title: "Jam Operasional",
    value: "Senin - Sabtu | 08.00 - 20.00 WIB",
  },
];

/* ======================================
   FAQ
====================================== */

const faqs = [
  {
    id: 1,
    question: "Bagaimana cara melakukan booking paket wedding?",
    answer:
      "Pilih kategori wedding yang diinginkan, kemudian pilih paket yang sesuai. Setelah itu isi formulir booking dan lengkapi data yang diperlukan hingga proses pemesanan selesai.",
  },
  {
    id: 2,
    question: "Apakah saya dapat berkonsultasi sebelum melakukan booking?",
    answer:
      "Tentu. Tim Wedding Booking siap memberikan konsultasi mengenai konsep acara, dekorasi, maupun pilihan paket yang sesuai dengan kebutuhan dan anggaran Anda.",
  },
  {
    id: 3,
    question: "Apakah paket wedding dapat disesuaikan?",
    answer:
      "Ya. Beberapa paket dapat disesuaikan dengan kebutuhan pelanggan. Silakan hubungi tim kami untuk mendapatkan informasi lebih lanjut.",
  },
];

/* ======================================
   CONTACT PAGE
====================================== */

export default function ContactPage() {
  return (
    <div className="contact-page">

      {/* HERO SECTION */}

      <section className="contact-hero">
        <h1>Contact Us</h1>

        <p>
          Kami siap membantu Anda mewujudkan pernikahan impian.
          Hubungi tim Wedding Booking untuk mendapatkan informasi,
          konsultasi, maupun bantuan mengenai layanan yang tersedia.
        </p>
      </section>

      {/* CONTACT INFORMATION */}

      <section className="contact-section">

        <div className="section-title">
          <h2>Hubungi Kami</h2>

          <p>
            Berikut adalah informasi kontak resmi Wedding Booking.
            Jangan ragu untuk menghubungi kami apabila membutuhkan
            informasi lebih lanjut mengenai layanan maupun paket wedding.
          </p>
        </div>

        <div className="contact-info">
          {contactInfo.map((item) => (
            <div
              className="info-card"
              key={item.id}
            >
              <div className="info-icon">
                {item.icon}
              </div>

              <div className="info-content">
                <h3>{item.title}</h3>
                <p>{item.value}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* GOOGLE MAPS */}

      <section className="map-section">

        <div className="section-title">
          <h2>Lokasi Kami</h2>

          <p>
            Kami dengan senang hati menyambut Anda untuk melakukan
            konsultasi secara langsung di kantor Wedding Booking.
          </p>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps?q=Bandung&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          />
        </div>

      </section>

      {/* FAQ */}

      <section className="faq-section">

        <div className="section-title">
          <h2>Pertanyaan Umum</h2>

          <p>
            Berikut beberapa pertanyaan yang paling sering diajukan
            oleh pelanggan Wedding Booking.
          </p>
        </div>

        <div className="faq-container">

          {faqs.map((faq) => (
            <div
              className="faq-card"
              key={faq.id}
            >

              <div className="faq-icon">
                <FaQuestionCircle />
              </div>

              <h3>{faq.question}</h3>

              <p>{faq.answer}</p>

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="contact-cta">

        <h2>
          Siap Merencanakan Pernikahan Impian?
        </h2>

        <p>
          Jelajahi berbagai kategori dan paket wedding terbaik yang
          telah kami sediakan, kemudian lakukan booking secara mudah
          melalui website Wedding Booking.
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